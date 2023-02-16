### Stage 1

FROM node:18.12.1-alpine3.17 AS build

WORKDIR /app
COPY package.json ./
RUN npm install 
COPY ./ /app/
RUN npm run build --prod

### Stage 2

FROM nginx:1.23.3 AS prod-stage
COPY --from=build /app/dist/docker-app2 /usr/share/nginx/html
EXPOSE 80
##CMD ["nginx"]