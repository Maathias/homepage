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
        
        stage('Deploy') {
            steps {
                archiveArtifacts artifacts: 'build/*', fingerprint: true
                build job: 'ansible/deploy/static', parameters: [[$class: 'StringParameterValue', name: 'domain', value: 'doopsko']]
            }
        }
    }
}
