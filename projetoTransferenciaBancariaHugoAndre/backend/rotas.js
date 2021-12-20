const rotas = require("express").Router();

const conexao = require("./config/conexao");

// rota para listar os dados do database , ou seja, todas as contas

rotas.get("/", (req, res) => {
  // Criando uma query para selecionar todos os dados da tabela tb_contas
  let sql = "select * from tb_contas order by id_transferencia asc";
  conexao.query(sql, (erro, rows, fields) => {
    if (erro) throw erro;
    res.json(rows);
  });
});

// rota para mostrar apenas uma conta de acordo com o seu id
rotas.get("/:id", (req, res) => {
  const { id } = req.params;
  let sql = "select * from tb_contas where id_transferencia = ?";
  conexao.query(sql, [id], (erro, rows, fields) => {
    if (erro) throw erro;
    res.json(rows[0]);
  });
});

// rota para deletar uma conta específica ( através do seu id)

rotas.delete("/:id", (req, res) => {
  const { id } = req.params;
  let sql = `delete from tb_contas where id_transferencia = '${id}'`;
  conexao.query(sql, (erro, rows, fields) => {
    if (erro) throw erro;
    res.json({ status: "conta excluída com sucesso" });
  });
});

//essa rota é para fazer uma inclusão na tabela de contas, uso método post
rotas.post('/', (req,res)=>{
    const {nomeCliente, valor,contaCliente} = req.body
    let sql = `insert into tb_contas(nomeCliente, valor,contaCliente) values('${nomeCliente}', '${valor}','${contaCliente}')`
    conexao.query(sql,(erro, rows, fields)=>{
        if(erro)throw erro
        res.json({status:"Uma conta nova inserida com sucesso"})
    })
})

// Rota de update das contas
rotas.put('/:id',(req,res)=>{
    const {id} = req.params
    const {nomeCliente, valor,contaCliente} = req.body
    let sql = `update tb_contas set 
                nomeCliente = '${nomeCliente}' ,
                valor = '${valor}',
                contaCliente = '${contaCliente}'
               where id_transferencia = '${id}'`
    conexao.query(sql,(erro,rows,fields)=>{
        if(erro)throw erro
        res.json({status:"Conta editada com sucesso"})
    })
})

module.exports = rotas;
