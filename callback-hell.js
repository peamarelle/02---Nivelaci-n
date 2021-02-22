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

const getEmpleadoById = (id, callback) => {
    const empleado = empleados.find( (e) => e.id === id );

    if (empleado) {
        callback(null, empleado);
        return;
    }
    callback(new Error("El empleado no existe"));
}

const id = 1;

getEmpleadoById(id, (error, empleado) => {
    if(error) {
        console.log('ERROR!!!....');
        console.log(error);
        return;
    }
    console.log(`El empleado: ${empleado.nombre}...`);
})