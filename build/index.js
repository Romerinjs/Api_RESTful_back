"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/:data', (req, res) => {
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
app.get('/hello', (_req, res) => {
    res.send('¡Hola, Jesus!');
});
app.get('/goodbye', (_req, res) => {
    res.send('¡Hey que tal, ¿cómo les va?!');
});
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map