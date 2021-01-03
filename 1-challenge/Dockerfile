FROM golang:1.15.6-alpine3.12 as builder

WORKDIR /go/src/app
COPY ./app .

RUN GOOS=linux go build -ldflags="-s -w"

FROM scratch

WORKDIR /go/src/app
COPY --from=builder /go/src/app/app .

CMD ["./app"]