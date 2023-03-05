import React, { Component } from 'react'

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        super(props) // Dentro de construtor precisa ter SUPER e o parametro PROPS

        this.setTipo = this.setTipo.bind(this)
        this.setNome = this.setNome.bind(this)
    }

    setTipo(e) {
        this.setState({ tipo: e.target.value })// Altera o componente da página quando o estado muda
    }
    
    setNome(e) {
        this.setState({ nome: e.target.value })// Altera o componente da página quando o estado muda
    }

    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." 
                value={tipo} onChange={this.setTipo}/> {/*Na mudança da página 'setTipo' é rodada*/}
                <input type="text" placeholder="Nome..." 
                value={nome} onChange={this.setNome}/>
            </div>
        )
    }
}