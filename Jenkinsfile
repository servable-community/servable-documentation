pipeline {
  environment {
    imagename = "registry.tools.anak.dev/servable-documentation"
    registry = "registry.tools.anak.dev"
    registryCredential = 'registry.dev.flotte'
    dockerImage = ''
  }
  agent any
  stages {    
    stage('Cloning Git') {        
      steps {
        checkout scm
      }
    }     
    stage('Initialize'){
      steps {
        script {
            def dockerHome = tool 'docker'
            env.PATH = "${dockerHome}/bin:${env.PATH}"
        }
      }        
    }
    //TODO:
    // stage('List builders') {
    //   steps {
    //     script {
    //         sh "docker buildx ls"
    //     }
    //   }
    // }
    stage('Building image') {
      steps {
        script {
            sh "docker build -t ${imagename}:$BUILD_NUMBER ."
        }
      }
    }
    // stage('Building image 1') {
    //   steps {
    //     script {
    //         dockerImage = docker.build imagename + ":$BUILD_NUMBER"
    //     }
    //   }
    // }
    // stage('Deploy Image 1') {
    //   steps {
    //     script {
    //       docker.withRegistry( '', registryCredential ) {
    //         dockerImage.push("$BUILD_NUMBER")
    //         dockerImage.push('latest')
    //       }
    //     }
    //   }
    // }
    
    //  stage('Sanity check') {
    //   steps {
    //       input "Does the staging environment look ok?"
    //     }
    //   }
    // stage('Deploy Image') {
    //   steps {
    //     script {
    //       docker.withRegistry( '', registryCredential ) {
    //         sh "docker push ${imagename}:$BUILD_NUMBER"
    //         sh "docker push ${imagename}:latest"
    //       }
    //     }
    //   }
    // }
    stage('Remove Unused docker image') {
      steps {
        sh "docker rmi ${registry}:$BUILD_NUMBER"
        sh "docker rmi ${imagename}:latest"
      }
    }
  }
  post {
        always {
            echo 'One way or another, I have finished'
            //deleteDir() /* clean up our workspace */
        }
        success {
            echo 'I succeeded!'
        }
        unstable {
            echo 'I am unstable :/'
        }
        failure {
            echo 'I failed :('
            // mail  to: 'yelounak@gmail.com',
            //       subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
            //       body: "Something is wrong with ${env.BUILD_URL}"
        }
        changed {
            echo 'Things were different before...'
        }
    }
}