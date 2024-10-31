import express, { Request, Response } from 'express';

const app = express(); // Crea una instancia de la aplicación Express
const port = 3000; // Define el puerto

// Define una ruta en la raíz ('/') que responde con 'Hola, Mundo'
app.get('/:data', (req: Request, res: Response) => {
  console.log(req, 'respuesta ingeniosa');
  if (req.query) {
    const name = req.query ? req.query.name : null;
    const lastname = req.query ? req.query.lastname : null;
    res.send(`¡Hola, ${name || '¿... Sin nombre?'}! \n así que tu apellido es ${lastname || '... ¿No tienes apellido?'}`);
    console.log(name, 'Is the name');
    return;
  }
  res.send('¡Hola, Mundo!');
});
app.get('/hello', (_req: Request, res: Response) => {
  res.send('¡Hola, Jesus!');
});
app.get('/goodbye', (_req: Request, res: Response) => {
  res.send('¡Hey que tal, ¿cómo les va?!');
});
// Inicia el servidor y escucha en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
