# Network City — build the static site, then serve it from a tiny nginx image.
# Build context is the repo's `network+/` folder (see docker-compose.yml),
# because the import pipeline reads ../modules relative to site/.

FROM node:22-alpine AS build
WORKDIR /app/site
# install deps first for layer caching
COPY site/package.json site/package-lock.json* ./
RUN npm install --no-audit --no-fund
# bring in the site source and the canonical course content
WORKDIR /app
COPY modules ./modules
COPY site ./site
WORKDIR /app/site
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/site/dist /usr/share/nginx/html
COPY site/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
