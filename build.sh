#/bin/bash

VERSION=$(cat version)

export DOCKER_API_VERSION=1.23

/var/jenkins_home/docker/docker build -t meetup/reloj:${VERSION} .

#kube-registry.kube-system:5000