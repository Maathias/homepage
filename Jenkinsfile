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
                    sh "rsync -avz build/ kara.asgard.ygg:/tmp/${domain}"
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
}
