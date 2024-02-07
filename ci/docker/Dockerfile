FROM node:20.11-slim AS build

WORKDIR /tmp/project

COPY .npmrc package.json /tmp/project/

RUN npm install -g pnpm \
 && pnpm install

COPY . /tmp/project

RUN pnpm build --out-dir dist

FROM nginxinc/nginx-unprivileged:1.25-alpine-slim AS runtime

COPY --from=build /tmp/project/dist /usr/share/nginx/html
