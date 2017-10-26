#!groovy

def version  = "1.0.${env.BUILD_NUMBER}"
def image    = "ifg-proshop"

try {
    node('docker') {

        // notifySlack('STARTED')

        withEnv([
                "COMPOSE_FILE=common-services.yml"
        ]) {

            stage('checkout') {
                checkout scm
            }

            stage('yarn install') {
                sh "docker run --rm -v ${env.WORKSPACE}:/usr/src/ node:8.7.0 yarn --cwd /usr/src/"
            }

            stage('unit/component test') {
                sh "docker run --rm -v ${env.WORKSPACE}:/usr/src/ node:8.7.0 yarn --cwd /usr/src/ test"
            }


            if (env.BRANCH_NAME =~ /(?i)^pr-/ || env.BRANCH_NAME == "master") {

                stage('docker build') {
                    sh "docker build -t $image:$version ."
                }

                if (env.BRANCH_NAME =~ /(?i)^pr-/) {
                    def name = convertBranchName(env.BRANCH_NAME)
                    def ip = ""

                    try {
                        stage('deploy to staging') {
                            echo """
                                provision aws environment
                                deploy container
                            """
                            //ip = sh returnStdout: true, script: "docker-machine ip $name"
                            //ip = ip.trim()
                            //publishStagedInfo(ip)
                        }

                        stage('functional test') {
                            echo "run functional tests"
                        }

                        stage('user acceptance testing') {
                            def userInput = input(
                                    id: 'userInput',
                                    message: "Did staged build 'pass' or 'fail'?",
                                    parameters: [choice(name: 'result', choices: 'pass\nfail', description: '')]
                            )

                            if (userInput == "fail") {
                                error("Staged build failed user acceptance testing")
                            }
                        }

                    } catch (Exception e) {
                        throw e
                    } finally {
                        stage('staging teardown') {
                            echo "teardown staged environment"
                            // notifyGithub("Staged build @ $ip was removed")
                            // slackSend(color: 'good', message: "Staged build @ $ip was removed")
                        }
                    }
                }
            }

            if (env.BRANCH_NAME == "master") {
                stage('publish') {
                    sh "docker tag $image:$version dlish27/$image:latest"
                    sh "docker tag $image:$version dlish27/$image:$version"

                    sh "docker push dlish27/$image:$version"
                    sh "docker push dlish27/$image:latest"

                    sh "docker rmi $image:$version"
                }

                stage('deploy to production') {
                    echo "deploy service to production"
                }
            }
        }
    }

    currentBuild.result = "SUCCESS"

} catch (Exception e) {
    error "Failed: ${e}"
    currentBuild.result = "FAILED"
} finally {
    // notifySlack(currentBuild.result)
}

def publishStagedInfo(String ip) {
    notifyGithub("${env.JOB_NAME}, build [#${env.BUILD_NUMBER}](${env.BUILD_URL}) - Staged deployment can be viewed at: [https://$ip](https://$ip). Staged builds require UAT, click on Jenkins link when finished with UAT to mark the build as 'pass' or 'failed'")
    slackSend(color: 'good',
            message: "${env.JOB_NAME}, build #${env.BUILD_NUMBER} ${env.BUILD_URL} - Staged deployment can be viewed at: https://$ip. Staged builds require UAT, click on Jenkins link when finished with testing to mark the build as 'pass' or 'failed'")
}

def notifyGithub(String comment) {
    def pr  = env.BRANCH_NAME.split("-")[1].trim()
    def pat = readFile('/root/.pat').trim()
    sh "curl -H \"Content-Type: application/json\" -u ifg-bot:$pat -X POST -d '{\"body\": \"$comment\"}' https://api.github.com/repos/ifishgroup/ifg-proshop/issues/$pr/comments"
}

def convertBranchName(String name) {
    return name.replaceAll('/', '_')
}

def notifySlack(String buildStatus) {
    if (env.BRANCH_NAME =~ /(?i)^pr-/ || env.BRANCH_NAME == "master") {
        echo "currentBuild.result=$buildStatus"

        if (buildStatus == null || buildStatus == "") {
            buildStatus = 'FAILED'
        }

        def subject = "${buildStatus}: Job '${env.JOB_NAME}, build #${env.BUILD_NUMBER}'"
        def summary = "${subject} (${env.BUILD_URL})"

        if (buildStatus == 'STARTED') {
            color = 'warning'
        } else if (buildStatus == 'SUCCESS') {
            color = 'good'
        } else {
            color = 'danger'
        }

        slackSend(color: color, message: summary)
    }
}
