FROM kyma/docker-nginx
COPY www.grandhotelbeijing.com/ /var/www
CMD 'nginx'
