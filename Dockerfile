FROM nikolaik/python-nodejs:latest

WORKDIR /app

COPY package*.json ./

COPY requirements*.txt ./
