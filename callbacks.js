// setTimeout(() => {
//    console.log('Hola'); 
// }, 2000);

// const saludar = () => {
//     console.log('Hola hola');
// }

// setTimeout(saludar, 2000);

const getUserById = (id, callback) => {
    const user = {
        id,
        nombre: 'Patricio'
    }
    setTimeout(() => callback(user), 1000);
}

// getUserById(10, (user) => {
//     console.log(user.nombre);
// });

// const printUser = (user) => {
//     console.log(user.nombre);
// }

// getUserById(10, printUser)

getUserById(10, ({nombre, id}) => {
    console.log(`Nombre: ${nombre.toUpperCase()} - Id: ${id}`);
});