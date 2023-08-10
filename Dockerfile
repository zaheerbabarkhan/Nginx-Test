FROM node

COPY package.json var/www/app/package.json
COPY package-lock.json var/www/app/package-lock.json

WORKDIR /var/www/app



RUN npm install

COPY . .

EXPOSE 3000

ENV PORT=${PORT}
CMD npm start
