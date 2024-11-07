

function middlewareCreateNewUser (req, res, next)  {
    const { nome, sobrenome, email, senha } = req.body;
    try {
        if(!nome || !sobrenome || !email || !senha){
            res.status(400).send({
                message: '❌ Os dados fornecidos estão incompletos. Por favor insira todos os dados!'
            });
        }
        
        next(); // Executa a próxima função;
    }catch (error) {
        res.status(400).send({
            message: `🔴 Algo de errado aconteceu ao tentar criar o usuário. Erro: ${error}`
        });
    };
};


module.exports = {
    middlewareCreateNewUser
}