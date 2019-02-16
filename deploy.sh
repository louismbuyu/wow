docker build -t louismbuyu17/wow-server:latest -t louismbuyu17/wow-server:$SHA -f ./server/Dockerfile ./server

docker push louismbuyu17/wow-server:latest

docker push louismbuyu17/wow-server:$SHA

kubectl apply -f k8s
kubectl set image deployments/server-deployment server=louismbuyu17/wow-server:$SHA
