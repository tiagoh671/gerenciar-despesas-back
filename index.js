import express from 'express'
import cors from 'cors'
import { listarItemId, listarItens, adicionarItem, deletarItem, alterarItem } from './services/servicos.js'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/despesas', async (req, res)=>{
  const itens = await listarItens()

  if(itens.length > 0){
    res.json(itens)
  } else{
    res.status(404).send({Erro: 'Não encontrado nenhum dado no banco'})
  }
})

app.get('/despesas/:id', async(req, res)=>{
  const id = req.params.id

  const idItem = await listarItemId(id)

  if(idItem.length>0){
    conexao.release()
    res.json(idItem)
  } else{
    conexao.release()
    res.status(404).send({Erro: 'ID não encontrado'})
  }
})

app.post('/despesas', async (req, res)=>{
  const descricao = req.body.descricao
  const preco = req.body.preco
  const date = req.body.date
  const tipo = req.body.tipo

  await adicionarItem(descricao, preco, date, tipo)

  res.status(200).json({ message: 'Dados inseridos com sucesso!' })

})

app.patch('/despesas/:id', async (req,res)=>{
  const id = req.params.id
  const body = req.body

  const itemAlterado = await alterarItem(id, body)

  if(itemAlterado.status){
    res.status(200).send({message: itemAlterado.mensagem})
  } else{
    res.status(404).send({message: itemAlterado.Erro})
  }
})

app.delete('/despesas/:id', async(req, res)=>{
  const id = req.params.id

  const apagarItem = await deletarItem(id)

  if(apagarItem.status){
    res.status(200).send({message: apagarItem.mensagem})
  } else{
    res.status(404).send({message: apagarItem.Erro})
  }
})

app.listen('8080', async ()=>{
  const data = new Date()

  console.log(`Conexão iniciada em ${data}`)

})