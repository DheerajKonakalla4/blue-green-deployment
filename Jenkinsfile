pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git 'https://github.com/YOUR_USERNAME/my-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t dheerajkonakalla22/my-app .'
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push dheerajkonakalla22/my-app'
            }
        }

        stage('Deploy Green') {
            steps {
                sh 'kubectl apply -f deployment-green.yaml'
            }
        }

        stage('Switch Traffic') {
            steps {
                sh '''
                kubectl patch service my-app-service -p '{"spec":{"selector":{"app":"my-app","version":"green"}}}'
                '''
            }
        }
    }
}