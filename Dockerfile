FROM johnpapa/angular-cli as angular-built
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm install --silent
COPY . .
RUN ng build --prod --build-optimizer

FROM nginx:alpine
LABEL author="Matthieu Walterspieler"
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=angular-built /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80 443
ENTRYPOINT ["nginx","-g","daemon off;"]
