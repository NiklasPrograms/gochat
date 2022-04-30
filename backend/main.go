package main

import "fmt"

// "fmt"
// "net/http"

// func serveWs(w http.ResponseWriter, r *http.Request) {
// 	fmt.Println(r.Host)

// 	ws, err := upgrader.Upgrade(w, r, nil)
// 	if err != nil {
// 		log.Println(err)
// 	}

// 	reader(ws)
// }

// func setupRoutes() {
// 	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
// 		fmt.Fprintf(w, "Simple Server with ws connection")
// 	})

// 	http.HandleFunc("/ws", serveWs)
// }

func main() {
	fmt.Println("Chat app v0.02")
	// setupRoutes()
	// http.ListenAndServe(":8080", nil)
}
