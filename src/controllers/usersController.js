const usersModel = require('../models/usersModel');
const bcrypt = require('bcrypt');


const createNewUser = async (req, res) => {
    // CONSTANTES DE ENTRADA DE DADOS
    const { nome, sobrenome, email, senha } = req.body;
    
    // CRIPTOGRAFIA DA SENHA ENVIADA NO BODY
    const saltRounds = 10
    const senhaHast = await bcrypt.hash(senha, saltRounds)

    // CRIANDO UM NOVO USUÁRIO
    const newUser = await usersModel.create({
        first_name: nome,
        surname: sobrenome,
        email: email,
        password: senhaHast
    })
    // RESPOSTA DA REQUISIÇÃO
    res.status(201).send({
        message: ` 🟢 Usuário ${newUser.first_name}, ID: ${newUser.id} criado com sucesso!`
    });
};

const getAllUsers = async (req, res) => {
    try {

        const users = await usersModel.findAll();
        res.send(users);

    } catch (error) {
        res.send({
            message: 'Erro ao listar os usuários!'
        });
    };
};

const updateUserById = async (req, res) => {
    const id = parseInt(req.params.id)
    const user = await usersModel.findByPk(id);
    // const {nome, sobrenome, email, senha} = req.body; //Passo 1: Linha de código necessária para o passo 2 funcionar.
    try {
        if (user) {
            await usersModel.update(
                // { //passo 2: Esse bloco de código é uma outra forma de você receber os dados da requisição
                //     name: nome,
                //     surname: sobrenome,
                //     email: email,
                //     password: senha
                // },
                { ...req.body },
                { where: { id: id } }
            );

            res.status(200).send({
                message: `🟢 Usuário de ID: ${id} alterado com sucesso! 😁👍`
            });
        } else {
            res.status(400).send( {
                message: `🔴 Usuário Não encontrado! 😰`
            })
        }
    } catch (error) {
        res.send({
            message: `❌ Algo de errado aconteceu ao atualizar o usuário. Erro: ${error}`
        })
    };
};

const deleteUserById = async (req, res) => {

}


module.exports = {
    createNewUser,
    getAllUsers,
    updateUserById,
    deleteUserById
}