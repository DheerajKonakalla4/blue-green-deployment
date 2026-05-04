pipeline {
    agent any

    stages {

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