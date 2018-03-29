# ness-inter-poll DevOps plan
On SKKSCFullStack1 server we have following:
- running 1st docker container with Jenkins running on Linux (Jenkins master)
- Jenkins slave is Windows host
- we have Jenkins job which checks Git repository each 5 minutes and if there is change in the repository, 
   it triggers Jenkins job and downloads latest code 
- running 2nd docker container with Mongo DB

On SKKSCFullStack1 server we plan 5to do following:
- have docker container for each part of application
- Create Jenkins Pipeline with Docker, which will after each change in git repository
create new docker images and run them
- We will have set of docker images for Test Environment and another set for Production Environment
- all of them will be running on SKKSCFullStack1
- Regarding to Jenkins Pipeline with Docker, we would like to have something similar to:
  https://www.youtube.com/watch?v=USxRrMWzK1s
- Material to study regarding Jenkins Pipeline with Docker (pdf file, starting on page 49):
  https://jenkins.io/doc/book/getting-started/
- Udemy course for Jenkins Pipeline with Docker:
  https://ness.udemy.com/learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/
  

  