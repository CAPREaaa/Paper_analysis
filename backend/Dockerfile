FROM debian:12.5-slim
RUN apt update
RUN apt install -y python3.11-full python3-pip=23.0.1+dfsg-1 iputils-ping  default-jre
RUN mkdir /venv
RUN python3.11 -m venv /venv
RUN mkdir /src
ADD ./src/ /src/
COPY ./requirements.txt /tmp/
WORKDIR /tmp
RUN /venv/bin/python -m pip install -r requirements.txt
WORKDIR /src