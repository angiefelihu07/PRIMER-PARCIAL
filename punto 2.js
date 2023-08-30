//Punto2//
//Implementar una función que invierta una pila.//
//1.Creacion de clase para indicar que elementos llevara en este caso libros
class Libro {
    constructor(nombre, isbn, autor, editorial) {
        this.nombre = nombre;
        this.isbn = isbn;
        this.autor = autor;
        this.editorial = editorial;
    }
}
//2.Creacion de la pila
class PilaDeLibros {
    constructor() {
        this.libros = [];
    }
//3.metodo push para agregar
    push(libro) {
        this.libros.push(libro);
    }
//metodo para remover el ultimo elemento
    pop() {
        if (this.libros.length > 0) {
            return this.libros.pop();
        } else {
            return null; // Pila vacía no hay nada
        }
    }
//Va a el ultimo elemento sin removerlo
    peek() {
        if (this.libros.length > 0) {
            return this.libros[this.libros.length - 1];
        } else {
            return null; // Pila vacía no hay nada
        }
    }
//retorna el numero de elementos
    size() {
        return this.libros.length;
    }
//imprime
    print() {
        console.log("Libros en la pila:");
        this.libros.forEach((libro, index) => {
            console.log(`Libro ${index + 1}:`);
            console.log(`Nombre: ${libro.nombre}`);
            console.log(`ISBN: ${libro.isbn}`);
            console.log(`Autor: ${libro.autor}`);
            console.log(`Editorial: ${libro.editorial}`);
        });
    }
}

// Función para invertir una pila de libros
function invertirPilaDeLibros(pila) {
    const pilaInvertida = new PilaDeLibros();
    
    while (pila.size() > 0) {
        const libro = pila.pop();
        pilaInvertida.push(libro);
    }
    
    return pilaInvertida;
}

// Creacion de los libros
const libro1 = new Libro("Habitos atomicos", "123456", "Jack", "ADN");
const libro2 = new Libro("Biblia", "7891011", "Jesus", "Iglesia Catolica");
const libro3 = new Libro("El quinto dragon rojo", "12345678910", "Emilia", "Semana");

// Crear la pila y agregar los libros
const pilaDeLibros = new PilaDeLibros();
pilaDeLibros.push(libro1);
pilaDeLibros.push(libro2);
pilaDeLibros.push(libro3);

// Invertir la pila de libros
const pilaInvertida = invertirPilaDeLibros(pilaDeLibros);

// Imprimir los libros en la pila invertida
pilaInvertida.print();