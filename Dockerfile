FROM nikolaik/python-nodejs:latest

WORKDIR /app

COPY package*.json ./

COPY requirements*.txt ./

RUN npm install

RUN python -m venv venv

RUN venv/bin/pip install -r requirements.txt

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]