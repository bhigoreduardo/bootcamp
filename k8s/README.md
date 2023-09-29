- POD: Unidade k8s com container
- Cluster: Conjunto de máquinas
- Replica Set: Gerenciador de pods
- Deployment: Gerenciador de Replica Set de acordo com a especificação
- Service: Gerenciador de balanceamento de cargas

- Kind Install:
	[ $(uname -m) = x86_64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.20.0/kind-linux-amd64
	chmod +x ./kind
	sudo mv ./kind /usr/local/bin/kind
- Kind Add Cluster: kind create cluster
- Kind Access: kubectl cluster-info --context kind-kind
- Kind List Nodes: kubectl get nodes

- Kind Add Pod: kubectl apply -f pod.yaml
- Kind Remove Pod: kubectl delete pod <pod-name>
- Kind List Pods: kubectl get pods

- Kind Add ReplicaSet: kubectl apply -f replicaset.yaml
- Kind Remove ReplicaSet: kubectl delete rs <replicaset-name>
- Kind List ReplicaSet: kubectl get rs
- Kind Port Forward: kubectl port-forward pod/<pod-name> 8080:80

- Kind Add Deployment: kubectl apply -f deployment.yaml
- Kind Remove Deployment: kubectl delete deployment <deployment-name>
- Kind List Deployment: kubectl get deployment

- Kind Add Service: kubectl apply -f service.yaml
- Kind Remove Service: kubectl delete service <service-name>
- Kind List Service: kubectl get service
- Kind Port Forward: kubectl port-forward svc/<service-name> 8080:80

- Kubectl Install:
	curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl"
	chmod +x ./kubectl
	sudo mv ./kubectl /usr/local/bin/kubectl
- Kubectl Version:
	kubectl cluster-info
	kubectl version