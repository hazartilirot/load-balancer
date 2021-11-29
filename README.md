A very simple imitation of a load balancer. There are three web servers:

web1, web2, web3 and load-balancer which is nginx. It basically splits incoming 
request between all three servers.

1) `npm install`


2) `docker-compose up`


3) Open another terminal window in the project's root and run `loadtest 
   -c 100 -t 5 --rps 100 http://localhost:80`

4) Once you finished execute `docker-compose down` to stop all processes


5) And then `docker image rm -f ${docker image ls -q}` to remove all 
   leftovers (images) from the deployment.
