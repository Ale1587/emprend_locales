import express from 'express';


import { formularioRegistro, registro } from '../controller/controaldoUsuario.js'

const router = express.Router();


router.get('/registro', formularioRegistro)
router.post('/registro', registro)



export default router;