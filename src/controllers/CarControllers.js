const carService = require('../services/CarService');

module.exports = {
    buscarTodos: async(req, res) => {
        let json = {error:'', result: []};

        let carros = await carService.buscarTodos();

        for (let i in carros){
            json.result.push({
                    codigo: carros[i].codigo,
                    descricao: carros[i].modelo
                });
        }
        res.json(json);
    },

    buscarUm: async(req, res) => {
        let json =  {error:'', result: {}};

        let codigo = req.params.codigo;
        let carro = await carService.buscarUm(codigo);

        if(carro){
            json.result = carro;

        }
        res.json(json);
    },

    inserir: async(req, res) => {
        let json =  {error:'', result: {}};

        let modelo = req.body.modelo;
        let placa = req.body.placa;


        if(modelo && placa){
            let carroCodigo = await carService.inserir(modelo, placa);
            json.result = {
                codigo: carroCodigo,
                modelo,
                placa
            };
        }
            else{
                json.error = 'Campos não enviados';
            }

        
        res.json(json);
    },

    alterar: async(req, res) => {
        let json =  {error:'', result: {}};

        let codigo = req.params.codigo;
        let modelo = req.body.modelo;
        let placa = req.body.placa;


        if(codigo && modelo && placa){
            await carService.alterar(codigo, modelo, placa);
            json.result = {
                codigo,
                modelo,
                placa
            };
        }
            else{
                json.error = 'Campos não enviados';
            }

        
        res.json(json);
    },

    excluir: async (req, res) => {
        let json = {error:'', result:{}};

        await carService.excluir(req.params.codigo);

        res.json(json);
    }
}