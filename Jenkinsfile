pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'GitHub source code retrieved'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing project dependencies'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Student Task Manager'
            }
        }

        stage('Automated Testing') {
            steps {
                echo 'Running automated tests'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }

        failure {
            echo 'Pipeline failed!'
        }
    }
}
