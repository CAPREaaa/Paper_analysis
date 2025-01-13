# PSD-API

## Required applications

Either docker and docker-compose, or podman and podman-compose.
Ensure version 3 of the compose version is supported.


## Quick Start
This application is developed, tested, and deployed using docker containers. Therefore it's recommended to run this application with docker.
No support will be given unless docker is used for deployment.

Instructions are for Linux and MacOS, as docker or docker-compose might need to be run with admin privileges (sudo or ADMIN in windows), depending on docker configuration.

Normally `docker-compose up -d` should suffice, if you encounter issues, pull the images manually before starting the compose file.

```
export DOCKER_IMAGES="debian:12.4-slim mongo:6.0.13-jammy"
sudo docker pull $DOCKER_IMAGES
sudo docker-compose up -d
```

### Developers

Developers would not want to use the production deployment container, instead developers should use the developer container using the following command:

```
docker-compose -f docker-compose-dev.yml up
```

## Documentation  

This project is documented using Fastapi's swagger feature, acciessiable at `<url>/docs` .



## Environment files

Two .env files are required.

### mongo.env

mongo.env should contain the following
```
MONGO_INITDB_ROOT_USERNAME=<username>
MONGO_INITDB_ROOT_PASSWORD=<password>
MONGO_INITDB_DATABASE=api
```

### rest.env

rest.env should contain the following
```
SEED=<seed> #seed in string format
DB_ADMIN_USERNAME=<username> # mongodb username
DB_ADMIN_PASSWORD=<password> # mongodb password
DB_URI=db
DB_PORT=27017
```

## Changing default port

To change the port, modify line 11 in "docker-compose.yml", the file is case and whitespace sensitive.

```
      - "8000:<new port here>"
```


## File Process

Using **Apache Tika(tika-python)** to extract metadata and content from PDFs

Using **RaKUn2** for keyphrase extraction

Functionality you can use directly from `src/utils/file_process/extraction.py`
- `extract(path: String)`: extract title, author, doi, publication date, keywords from PDF
- `toJSON(outPath: String, data: Dict)`: export data gathered from the function above to a place in JSON format
