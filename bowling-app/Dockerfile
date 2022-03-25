FROM node:16.13.1-alpine3.15 AS build
WORKDIR /bowling-app
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build && npm prune --production



FROM node:16.13.1-alpine3.15

# ENV PORT=3000
# ENV NODE_ENV=production

WORKDIR /bowling-app

COPY --from=build /bowling-app/dist /bowling-app/dist
COPY --from=build /bowling-app/node_modules /bowling-app/node_modules

# Migrations compiled while npm run build was call
RUN rm -rf /bowling-app/dist/migrations/*.d.ts /bowling-app/dist/migrations/*.map
COPY --from=build /bowling-app/package.json /bowling-app/package.json
# COPY --from=build /bowling-app/scripts/wait-for-it.sh /bowling-app/wait-for-it.sh
# RUN chmod +x wait-for.sh

ENTRYPOINT [ "node" ]
CMD [ "dist/main.js" ]