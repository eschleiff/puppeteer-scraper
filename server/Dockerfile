# Most of the code in this block is standard command line code for a Dockerfile. 
# You built the image from a node:10 image. Next, you used the RUN command to install 
# the necessary packages to run Puppeteer in a Docker container, and then you created 
# the app directory. You copied your scraper’s package.json file to the app directory 
# and installed the dependencies specified inside the package.json file. Lastly, you 
# bundled the app source, exposed the app on port 5000, and selected server.js as the entry file.

FROM node:10

RUN apt-get update

RUN apt-get install -yyq ca-certificates

RUN apt-get install -yyq libappindicator1 libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6

RUN apt-get install -yyq gconf-service lsb-release wget xdg-utils

RUN apt-get install -yyq fonts-liberation

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000
CMD [ "node", "server.js" ]