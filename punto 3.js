//punto 3.//
//Escriba un método que, dadas dos listas ordenadas de números enteros, 
//realice la concatenación en forma ordenada de ambas listas.
//El método debe recibir los apuntadores a los primeros nodos de cada lista.
class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.nodosiguiente = null;
    }
}

class ListaEnlazada {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    agregarNodo(valor) {
        const nuevoNodo = new Nodo(valor);

        if (!this.head) {
            this.head = nuevoNodo;
            this.tail = nuevoNodo;
        } else {
            this.tail.nodosiguiente = nuevoNodo;
            this.tail = nuevoNodo;
        }
    }
}

function concatenarLista(lista1, lista2) {
    const listaConcatenada = new ListaEnlazada();

    let nodo1 = lista1.head;
    let nodo2 = lista2.head;

    while (nodo1 !== null && nodo2 !== null) {
        if (nodo1.valor <= nodo2.valor) {
            listaConcatenada.agregarNodo(nodo1.valor);
            nodo1 = nodo1.nodosiguiente;
        } else {
            listaConcatenada.agregarNodo(nodo2.valor);
            nodo2 = nodo2.nodosiguiente;
        }
    }

    while (nodo1 !== null) {
        listaConcatenada.agregarNodo(nodo1.valor);
        nodo1 = nodo1.nodosiguiente;
    }

    while (nodo2 !== null) {
        listaConcatenada.agregarNodo(nodo2.valor);
        nodo2 = nodo2.nodosiguiente;
    }

    return listaConcatenada;
}

// Ejemplo de uso

// Crear listas enlazadas y agregar nodos
const lista1 = new ListaEnlazada();
lista1.agregarNodo(1);
lista1.agregarNodo(4);
lista1.agregarNodo(6);

const lista2 = new ListaEnlazada();
lista2.agregarNodo(2);
lista2.agregarNodo(3);
lista2.agregarNodo(7);

// Concatenar y mostrar la lista resultante
const listaConcatenada = concatenarLista(lista1, lista2);

let nodoActual = listaConcatenada.head;
while (nodoActual !== null) {
    console.log(nodoActual.valor);
    nodoActual = nodoActual.nodosiguiente;
