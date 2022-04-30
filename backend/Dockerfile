# To build: docker build -t backend
# To run: docker run -it -p 8080:8080 backend

FROM golang:1.18

RUN mkdir /app
ADD . /app/

WORKDIR /app
COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY *.go ./

RUN go build -o main

EXPOSE 8080

CMD [ "/app/main" ]