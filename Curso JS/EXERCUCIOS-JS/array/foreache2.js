Array.prototype.forEach2 = function(callback) {
    for (let i=0; i<this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// Percorre cada indice realizando uma ação
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
}) 