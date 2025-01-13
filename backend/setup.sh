#!/bin/bash

# Function to check if a command exists
command_exists () {
  type "$1" &> /dev/null ;
}

# Check Docker installation
if command_exists docker; then
  echo "Docker is installed."
else
  echo "Docker is not installed. Please install Docker to continue."
  exit 1
fi

# Check Docker Compose installation
if command_exists docker-compose; then
  echo "Docker Compose is installed."
else
  echo "Docker Compose is not installed. Please install Docker Compose to continue."
  exit 1
fi

# Check and create rest.env if missing
if [ ! -f "rest.env" ]; then
  echo "rest.env file is missing. Creating it with default values..."
  cat << EOF > ./rest.env
SEED=1234
DB_ADMIN_USERNAME=root
DB_ADMIN_PASSWORD=password
DB_URI=db
DB_PORT=27017
EOF
  echo "Created rest.env with default values. Please review and update as necessary."
fi

# Check and create mongo.env if missing
if [ ! -f "mongo.env" ]; then
  echo "mongo.env file is missing. Creating it with default values..."
  cat << EOF > ./mongo.env
MONGO_INITDB_ROOT_USERNAME=root
MONGO_INITDB_ROOT_PASSWORD=password
MONGO_INITDB_DATABASE=api
EOF
  echo "Created mongo.env with default values. Please review and update as necessary."
fi

# Everything is set up. Inform the user how to run the containers
echo "All requirements are met, and environment files are in place. You can now build and run your Docker containers with the following command:"
echo "docker-compose -f docker-compose-dev.yml up --build"

# Optional: Uncomment the following line to automatically start the services
# docker-compose -f docker-compose-dev.yml up --build
