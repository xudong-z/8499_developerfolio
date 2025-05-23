# Remove any existing containers and images
docker ps -aq | ForEach-Object { docker rm -f $_ }
docker rmi 8499_developerfolio:latest

# Build the new image
docker build --no-cache -t 8499_developerfolio:latest .

# Run the container
docker run -p 8499:8499 8499_developerfolio:latest