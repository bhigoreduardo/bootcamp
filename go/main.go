package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

// Struct
type Course struct {
	Name        string `json:"course"`
	Description string `json:"description"`
	Price       int    `json:"price"`
}

// Método
func (c Course) GetFullInfo() string {
	return fmt.Sprintf("name: %s, description: %s, price: %d", c.Name, c.Description, c.Price)
}

// Função
func soma(x int, y int) (int, bool) {
	if x > 10 {
		return x + y, true
	}
	return x + y, false
}

// Threads ou Go Routine (2kb Vs 1Mb)
func counter() {
	for i := 0; i < 10; i++ {
		fmt.Println(i)
		time.Sleep(time.Second)
	}
}

// Channels
func worker(workerId int, data chan int) {
	for x := range data {
		fmt.Printf("Worker %d received %d\n", workerId, x)
		time.Sleep(time.Second)
	}
}

// T0
func main() {
	// Tipos de dados
	var a string
	a = "Hello world"
	b := "Hello world again"
	res, status := soma(1, 2)
	course := Course{
		Name:        "Golang",
		Description: "Golang Course",
		Price:       100,
	}
	course.Price = 200
	channel := make(chan string)
	workerChannel := make(chan int)

	// output
	println(a, b)
	println(res, status)
	fmt.Println("Hello world", a)
	fmt.Printf("Hello world %d", res)
	fmt.Printf("Hello world %v", b)
	fmt.Println(course.Price)
	fmt.Println(course.GetFullInfo())

	// Threads
	go counter()
	go counter()
	counter()

	// Comunicação channel
	// T1
	go func() {
		channel <- "Hello world"
	}()
	fmt.Println(<-channel)

	for i := 0; i < 3; i++ {
		go worker(i, workerChannel)
	}
	for i := 0; i < 10; i++ {
		workerChannel <- i
	}

	// Servidor http
	http.HandleFunc("/", home)
	http.ListenAndServe(":8080", nil)
}

func home(w http.ResponseWriter, r *http.Request) {
	course := Course{
		Name:        "Golang",
		Description: "Golang Course",
		Price:       100,
	}
	// res, _ := json.Marshal(course)
	json.NewEncoder(w).Encode(course)
	// w.Write([]byte("Hello world"))
}
