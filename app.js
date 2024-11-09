const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/',(req,res) => {
    return res.json('Servidor Iniciado :)');

});

app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});

    app.get('/',(req,res)=>{
        return res.json("backend on!!!");
    });
    
