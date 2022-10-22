import pool from '../config/db.js'


const busquedaUsuario = async(rut) =>{

    try {

        const resultado = await pool.query(
            `SELECT * from tiendas WHERE rut = '${rut}'`
        )

        return resultado.rows
        
    } catch (err) {
        console.log(err.code);
        return err
    }
}




export {
    busquedaUsuario
}