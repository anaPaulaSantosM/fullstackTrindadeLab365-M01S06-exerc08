const userById = (req, res) => {

    
    app.post('/createUser', (req, res) => {

        const cargo = req.body.cargo;
            if (cargo != 'líder') {
                res.status(406).send({mensagem:"Ocorreu um erro inesperado de script."});
        }
    
    
        if(req.params.idade < 21) {
            res.send({mensagem:"Usuário não possui idade suficiente"});
        }
    
        let users = [

            {
                "id":1,
                "nome":"Fulano",
                "idade":18,
                "cargo":"junior",
                "senha":"12345678"
              }
        ];

        if(req.params.body == ""){
            res.status(406).send({mensagem:"Está faltando dados para concluir a operação"});
        }else{
            res.status(200).send({mensagem:"Criado com sucesso"});
        }
    });
    
    app.delete('/deletedUser/:id', (req, res) => {

    
        let users = [
            {
                "id":1,
                "nome":"Fulano",
                "idade":18,
                "cargo":"junior",
                "senha":"12345678"
              }
        ];
    
        let localiza = users.filter((usuario) => {
            return usuario.id == req.params.id;
    
    });
    
    if(localiza.length) {
        res.status(200).send('Deletado com sucesso.');
    }else{
        res.status(406).send({mensagem:"Está faltando dados para concluir a operação."});
    }
    });

module.exports = 
    {

        userById

    }
};