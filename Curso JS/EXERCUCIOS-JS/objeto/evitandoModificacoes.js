// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) // Pode adicionar atributos?

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' //Objeto não aceita novos atributos
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa) // Sela o objeto
console.log('Selada:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)