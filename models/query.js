import pool from '../config/db.js'


const busquedaUsuario = async(rut) =>{

    try {

        const resultado = await pool.query(
            `SELECT nombre_emprendedor from tiendas WHERE rut = '${rut}'`
        )

        return resultado.rows[0]
        
    } catch (err) {
        console.log(err.code);
        return err
    }
}

const crearUsuario = async (correoElectronico, nombreTienda, nombreEmprendedor, direccionLocal, comuna, rut, contrasena, imagen) => {

    try {
        const resultado = await pool.query(`INSERT INTO tiendas (mail, nombre_tienda, nombre_emprendedor, direccion, comuna, rut, password, imagen) VALUES('${correoElectronico}', '${nombreTienda}', '${nombreEmprendedor}', '${direccionLocal}', '${comuna}', '${rut}', '${contrasena}', '${imagen}')`
        );
        
         return resultado.rows

    } catch (err) {
        console.log(err.code);
        return err
    }


}




export {
    busquedaUsuario,
    crearUsuario
}