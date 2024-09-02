// Modifica la interfaz Person del ejercicio anterior para que la propiedad lastName
// sea opcional. Declara un objeto que solo incluya firstName. 5. Función con tipado

interface Person {
    firstName: string;
    lastName?: string; 
}

const person: Person = {
    firstName: 'Leonardo'
};