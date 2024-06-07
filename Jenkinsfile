pipeline {
    agent any
    environment {
        APP_NAME = 'express-pm2'
    }
    stages {
        stage('Clone stage') {
            steps {
                git 'https://github.com/trandung2k1/express-pm2.git'
            }
        }
        stage('Install dependencies statge') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test stage') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build and Push stage') {
            
            steps {
                withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
                    sh 'docker build -t trandung2001/express-pm2 .'
                    sh 'docker push trandung2001/express-pm2'
                }
            }
        }
        stage('Configure Git') {
            steps {
                sh 'git config --global user.email "trandungitksnb2001@gmail.com"' // Set your email
                sh 'git config --global user.name "trandung2k1"' // Set your name
                sh 'git config --global init.defaultBranch main'
            }
        }
        stage('Deploy to Heroku') {
            steps {
                script {
                    sh '''
                        rm -rf .git
                        git init
                        heroku git:remote -a $APP_NAME
                        git add .
                        git commit -am "Deploy to Heroku"
                        git push -f heroku main
                    '''
                }
            }
        }
    }
}

