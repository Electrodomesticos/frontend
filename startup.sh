docker-machine start rancher-server
docker-machine start rancher-node1
docker-machine env rancher-node1
eval $("C:\Program Files\Docker Toolbox\docker-machine.exe" env rancher-node1)