//PRIMER-PARCIAL
//Punto 1//1.	Escriba una función que reciba una Cola de números flotantes y 
//devuelva una nueva Cola pero con los elementos invertidos, 
//es decir el último de la Cola C, pasará a ser el primero de la nueva Cola.//
class Queue {
    constructor(){
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
        return this.queue;
    }

    dequeue() {
        return this.queue.shift();
    }

    peek(){
        return this.queue[0];
    }
    size() {
        return this.queue.length;
    }
    isEmpty() {
        return this.queue.length === 0;
    }

    print() {
        return this.queue;
    }
}


class Cola {
    constructor() {
        this.elementos = [];
    }

    enqueue(elemento) {
        this.elementos.push(elemento);
    }

    dequeue() {
        if (this.elementos.length > 0) {
            return this.elementos.shift();
        } else {
            return null; // Cola vacía, no hay nada para desencolar
        }
    }

    peek() {
        if (this.elementos.length > 0) {
            return this.elementos[0];
        } else {
            return null; // Cola vacía, no hay elementos para ver
        }
    }

    size() {
        return this.elementos.length;
    }
}

function invertirCola(cola) {
    const colaInvertida = new Cola();

    while (cola.size() > 0) {
        const elemento = cola.dequeue();
        colaInvertida.enqueue(elemento);
    }

    return colaInvertida;
}

// Ejemplo de uso
const ColaParcial = new Cola();
ColaParcial.enqueue(2.2);
ColaParcial.enqueue(3.2);
ColaParcial.enqueue(9.7);
ColaParcial.enqueue(6.8);

const colaInvertida = invertirCola(ColaParcial);

console.log("Cola original:");
console.log("Tamaño:", ColaParcial.size());
console.log("elemento 1:", ColaParcial.peek());

console.log("\nCola invertida:");
console.log("Tamaño:", colaInvertida.size());
console.log("elemento 1:", colaInvertida.peek());