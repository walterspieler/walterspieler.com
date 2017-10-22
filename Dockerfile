FROM node:8
ENV NODE_ENV production
ENV PORT 80

# Create app directory
WORKDIR /var/www/walterspieler.com

COPY ./ ./

RUN npm install

EXPOSE 80
CMD [ "npm", "start" ]
