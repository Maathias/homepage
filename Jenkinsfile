def domain = "www.mtps.pl"

pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'pnpm install'
                sh 'pnpm run build'
            }
        }
        
        stage('Transfer Files') {
            steps {
                sshagent(['jenkins_master']) {
                    sh """
                        sftp kara.asgard.ygg <<EOF
                            mkdir /tmp/${domain}
                            cd /tmp/${domain}
                            lcd build
                            put -r *
                        EOF
                    """
                }
            }
        }
        
        stage('Deploy') {
            steps {
                sshagent(['jenkins_master']) {
                    sh "ssh kara.asgard.ygg deploy/static -e domain=${domain}"
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'build/*', fingerprint: true
        }
    }
}
