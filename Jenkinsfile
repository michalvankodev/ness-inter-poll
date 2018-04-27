node {
    def commit_id
    stage('Preparation') {
        checkout scm
        sh "git rev-parse --short HEAD > .git/commit-id"
        commit_id = 'latest'
    }
//    stage('test') {
//        nodejs(nodeJSInstallationName: 'nodejs') {
//            sh 'npm install --only=dev'
//            sh 'npm test'
//        }
//    }
    stage('docker build/push') {
        def app = docker.build("nessinterpoll:${commit_id}", "./nesspoll")
        //docker.withRegistry('https://index.docker.io/v1/', 'maros_dockerhub') {
            //def app = docker.build("marosk/docker-nodejs-demo:${commit_id}", '.').push()
            //def app = docker.build("marosk/docker-nodejs-demo:${commit_id}", "${WORKSPACE}/react/poll-app").push()

        //}
    }
}
