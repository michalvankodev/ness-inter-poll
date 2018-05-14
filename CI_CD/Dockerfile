FROM jenkins

USER root
RUN apt-get -qq update \
   && apt-get -qq -y install \
   curl \
   && apt-get -y install sudo

RUN curl -sSL https://get.docker.com/ | sh \
     && curl -L https://github.com/docker/compose/releases/download/1.21.0/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose

RUN usermod -a -G staff jenkins

USER jenkins