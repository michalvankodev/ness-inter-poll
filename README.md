# ness-inter-poll
Inter-poll application for Ness Full stack developer program

### JENKINS DOCKER SETUP:
- Jenkins has been setup on SKKSCFullSTack1, it runs via docker container, in case docker container is not running, run following command via cmd (cmd must be started as administrator):
  docker run -p 8080:8080 -p 50000:50000 -v c:\Docker_Jenkins_Files\:/var/jenkins_home jenkins
- Jenkins directory for docker: c:\Docker_Jenkins_Files\
- link on Jenkins from SKKSCFullSTack1: http://172.30.85.193:8080/
- link on Jenkins from Ness network: http://skkscfullstack1:8080/
- Jenkins job for update latest code from GIT: ness-inter-poll-build , it checks scm every 5 minutes and in case of change in git , it will start build
- The job runs on slave = slave is windows host = in case slave is not running, run following file: c:\Docker_Jenkins_slave_runner\slave-agent.jnlp
- slave directory: c:\Docker_Jenkins_slave_directory\

