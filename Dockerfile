    FROM node:13-buster-slim as build
    WORKDIR /app
    RUN yarn global add gatsby-cli && gatsby telemetry --disable
    ADD package.json yarn.lock ./
    RUN yarn --production --frozen-lockfile --non-interactive
    ADD . ./
    RUN gatsby build
    FROM pierrezemb/gostatic
    COPY --from=build /app/public /srv/http
    EXPOSE 8043