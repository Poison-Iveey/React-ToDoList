# build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# production stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
# Remove default nginx conf and use a custom config if needed
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
