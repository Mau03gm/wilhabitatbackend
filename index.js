const express = require('express');
// const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Configuración de la conexión a PostgreSQL
// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

app.use(express.json());

// Ruta de ejemplo
app.get('/', async (req, res) => {
    res.send('Hello World');
});

// EJEMPLO DE COMO GUARDAR/SELECIONAR DATOS POR EL MOMENTO 
//HASTA QUE EDUARDA NOS PASE EL SCRIPT PARA CONECTAR LA BASE DE DATOS

// app.get('/usuarios', async (req, res) => {
//     try {
//         const result = await pool.query('SELECT * FROM usuarios');
//         res.json(result.rows);
//     } catch (error) {
//         console.error('Error al obtener usuarios:', error);
//         res.status(500).json({ error: 'Error interno del servidor' });
//     }
// });

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
