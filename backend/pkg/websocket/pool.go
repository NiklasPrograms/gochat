package websocket

import "fmt"

type Pool struct {
	Register   chan *Client
	Unregister chan *Client
	Clients    map[*Client]bool
	Broadcast  chan Message
}

func NewPool() *Pool {
	return &Pool{
		Register:   make(chan *Client),
		Unregister: make(chan *Client),
		Clients:    make(map[*Client]bool),
		Broadcast:  make(chan Message),
	}
}

func (pool *Pool) Start() {
	for {
		select {
		case client := <-pool.Register:
			pool.Clients[client] = true

			fmt.Println("Size of Connection Pool: ", len(pool.Clients))

			for otherClient := range pool.Clients {
				fmt.Println(otherClient)
				otherClient.Conn.WriteJSON(Message{Type: 1, Author: client.Name, Body: "Just joined..."})
			}
		case client := <-pool.Unregister:
			delete(pool.Clients, client)

			fmt.Println("Size of Connection Pool: ", len(pool.Clients))

			for otherClient := range pool.Clients {
				fmt.Println(otherClient)
				otherClient.Conn.WriteJSON(Message{Type: 1, Author: client.Name, Body: "Just Disconnected..."})
			}
		case message := <-pool.Broadcast:
			fmt.Println("Sending message to all clients in Pool")
			for otherClient := range pool.Clients {
				if err := otherClient.Conn.WriteJSON(message); err != nil {
					fmt.Println(err)
					return
				}
			}
		}
	}
}
