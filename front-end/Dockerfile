FROM node:16-alpine as buildstage

COPY package*.json .
RUN npm install
COPY . .
RUN npm run build


FROM nginx:1.21.6-alpine
COPY --from=buildstage /dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 