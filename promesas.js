const empleados = [
    {
        id: 1,
        nombre: 'Patricio'
    },
    {
        id: 2,
        nombre: 'Marta'
    },
    {
        id: 3,
        nombre: 'Manuel'
    }
];

const sueldos = [
    {
        id: 1,
        sueldo: 1500
    },
    {
        id: 2,
        sueldo: 2500
    }
];

const getEmpleadoById = (id) => {

    return new Promise((resolve, reject) => {

        const empleado = empleados.find( (e) => e.id === id );
        
        if(empleado) {
            resolve(empleado);
            return;
        }
        reject(new Error("El empleado no existe"));
    })

}


const getSueldoById = (id) => {

    return new Promise((resolve, reject) => {

        const sueldo = sueldos.find( (e) => e.id === id );
        
        if(sueldo) {
            resolve(sueldo);
            return;
        }
        reject(new Error("El empleado no existe"));
    })

}

const id = 1;
let nombre = '';

getEmpleadoById(id)
.then(empleado => {
    nombre = empleado.nombre;
    return getSueldoById(id);
})
.then(sueldo => {
    console.log(`El empleado ${nombre} gana ${sueldo.sueldo}`);
})
.catch( err => console.log(err))