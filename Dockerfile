FROM mcr.microsoft.com/playwright:v1.25.0-focal

WORKDIR /work

COPY package\*.json ./

RUN apt-get update || : && apt-get install python build-essential -y

RUN yarn

CMD ["npx", "playwright", "test"]
