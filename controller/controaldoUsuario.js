import { check, validationResult } from 'express-validator'



const formularioRegistro = async (req, res) => {
    res.render('auth/registro', {
        pagina: 'Formulario de Registro'
    })
}

const registro = async (req, res) => {

    const { nombreTienda, nombreEmprendedor, rutEmprendedor, direccionLocal, comuna, correoElectronico, contrasena, contrasenaValidacion } = req.body
    
    await check('nombreTienda').notEmpty().withMessage('El campo Nombre de la tienda no puede ir vacio').run(req)
    await check('correoElectronico').isEmail().withMessage('Debe ser un email valido').run(req)
    await check('nombreEmprendedor').notEmpty().withMessage('El campo Nombre del emprendedor no puede ir vacio').run(req)
    await check('rutEmprendedor').notEmpty().withMessage('El campo rut del emprendedor no puede ir vacio').run(req)
    await check('direccionLocal').notEmpty().withMessage('El campo dirección del local no puede ir vacio').run(req)
    await check('comuna').notEmpty().withMessage('El campo comuna no puede ir vacio').run(req)
    await check('contrasena').isLength({min:6}).withMessage('El password debe ser de al menos 6 caracteres').run(req)
    await check('contrasenaValidacion').equals(contrasena).withMessage('Los Passwords no son iguales').run(req)

    let resultado = validationResult(req)

     // verificar que el resultado este vacio 
     if(!resultado.isEmpty()){
        // si no está vacío es porque contiene errores, si esta vacio es porque no hay errores 
        return res.render('auth/registro', {
            pagina: 'Crear cuenta',
            errores: resultado.array(),
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email
            }
        })
    }


    

}


export {
    formularioRegistro,
    registro
}