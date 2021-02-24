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

const getEmpleadoById = async (id) => {

    try {
        const empleado = empleados.find((e) => e.id === id);

        if (empleado) {
            return empleado;
        }
        throw new Error(`El emplado ${id} no existe`)

    } catch (error) {

        throw error;
    }
}


const getSueldoById = async (id) => {

    try {
        const sueldo = sueldos.find((e) => e.id === id);

        if (sueldo) {
            return sueldo;
        }

        throw new Error(`El emplado ${id} no existe`)

    } catch (error) {

        throw error;
    }

}

const id = 1;

const getDatosCompletosDelEmpleado = async (id) => {

    try {
        
        const empleado = await getEmpleadoById(id);
        const sueldo = await getSueldoById(id);
        return {
            id,
            nombre: empleado.nombre,
            sueldo: sueldo.sueldo
        };

    } catch (error) {
        throw error;
    }
}


getDatosCompletosDelEmpleado(id)
.then(data => console.log(`El empleado ${data.nombre} gana un sueldo de: ${data.sueldo}`))
.catch(error => console.log(error.message))

