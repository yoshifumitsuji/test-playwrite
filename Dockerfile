FROM mcr.microsoft.com/playwright:v1.25.0-focal

WORKDIR /work

COPY package\*.json ./
COPY yarn.lock ./

RUN apt-get update || : && apt-get install python build-essential -y

RUN yarn install

CMD ["npx", "playwright", "test"]
