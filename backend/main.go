package main

import (
	"fmt"
	"net/http"

	"github.com/NiklasPrograms/gochat/pkg/websocket"
)

func serveWs(pool *websocket.Pool, w http.ResponseWriter, r *http.Request) {
	fmt.Println("WebSocket Endpoint Hit")

	userName := r.URL.Query().Get("test")
	fmt.Println(userName)

	conn, err := websocket.Upgrade(w, r)

	if err != nil {
		fmt.Fprintf(w, "%+V\n", err)
	}

	client := &websocket.Client{
		name: "Niklas",
		Conn: conn,
		Pool: pool,
	}

	pool.Register <- client

	client.Read()
}

func setupRoutes() {
	pool := websocket.NewPool()
	go pool.Start()

	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serveWs(pool, w, r)
	})
}

func main() {
	fmt.Println("Distributed Chat App v0.04")
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}
