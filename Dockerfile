FROM node:8
ENV NODE_ENV production
ENV PORT 443

# Create app directory
WORKDIR /var/www/walterspieler.com

COPY ./ ./

RUN npm install

EXPOSE 443
CMD [ "npm", "start" ]
