pipeline{  
  environment {
    registry = "fpathankcs/node-api-jenkin"
    registryCredential = 'dockerhub'
    dockerImage = ''
  }
  agent any
    stages {
        stage('Build'){
           steps{
              script{
                bat 'npm install'
              } 
           }   
        }
        stage('Building image') {
            steps{
                script {
                  dockerImage = docker.build registry + ":latest"
                 }
             }
          }
          stage('Push Image') {
              steps{
                  script {
                       docker.withRegistry( '', registryCredential){                            
                       dockerImage.push()
                      }
                   }
                } 
           }
           stage('Deploying into k8s'){
            steps{
                bat 'kubectl apply -f deployment.yaml --token $TOKEN_FROM_WITH_CREDENTIALS --server http://127.0.0.1:60425' 
            }
        }
    }
}
