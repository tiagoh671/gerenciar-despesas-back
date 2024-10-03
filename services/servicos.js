import pool from "../conexao/conexao.js";

async function verificaId(id){
  const conexao = await pool.getConnection()

  const idDespesa = await conexao.query(`SELECT descricao FROM tabela_despesas WHERE id = ${id}`)

  conexao.release()

  return idDespesa[0]
}

export async function listarItens(){
  const conexao = await pool.getConnection()

  const itens_tb = await conexao.query(`SELECT * FROM tabela_despesas ORDER BY  date DESC`)

  conexao.release()

  return itens_tb[0]
}

export async function listarItemId(id){
  const conexao = await pool.getConnection()

  const idItem_tb = await conexao.query(`SELECT descricao, preco, date, tipo FROM tabela_despesas WHERE id =${id}`)

  conexao.release()

  return(idItem_tb[0])
}

export async function adicionarItem(descricao,preco,date, tipo){
  const conexao = await pool.getConnection()

  await conexao.query('INSERT INTO tabela_despesas(descricao, preco, date, tipo) VALUES(?,?,?,?)', [descricao,preco,date, tipo])

  conexao.release()
}

export async function deletarItem(id){
  const conexao = await pool.getConnection()

  const idItem = await verificaId(id)

  if(idItem.length>0){
    await conexao.query(`DELETE FROM tabela_despesas WHERE id = ${id}`)
    conexao.release()
    return {status: true, mensagem: 'Item deletado!'}
  } else{
    conexao.release()
    return {status: false, Erro: 'ID não encontrado'}
  }
}

export async function alterarItem(id, body){
  const conexao = await pool.getConnection()
  
  const valido = Object.keys(body).filter(k => !body[k]).length == 0

  
  if(valido){
    await conexao.query(`UPDATE tabela_despesas SET ? WHERE id = ${id}`, [body])

    conexao.release()
    return {status: true, mensagem: 'Item alterado com sucesso...'}
  } else{
    conexao.release()
    return {status: false, Erro: 'Parâmetros inválidos'}
  }
}