import React, { Component } from 'react'

export default class Collatz extends Component {
    cajaNumero = React.createRef();
    recibirDatosForm = (e) => {
        e.preventDefault();
        console.log(this.cajaNumero.current.value);
        var valor = parseInt(this.cajaNumero.current.value);
        var aux = [];
        while(valor != 1){
            if(valor % 2 == 0) {
                valor /= 2
            }else{
                valor = valor * 3 + 1
            }
            aux.push(valor);
        }
        this.setState({
            numeros: aux
        });
    }
    state = {
        numeros: []
    }
  render() {
    return (
      <div className="App">
        <h1>Rallada matematica Collatz</h1>
        <form>
            <label>Introducir Numero: </label>
            <input type="number" ref={this.cajaNumero}/>
            <br/>
            <button onClick={this.recibirDatosForm}>Enviar</button>
        </form>
        <ul>
            {
                this.state.numeros.map((numero, index) => {
                    return (<li key={index}>{numero}</li>);
                })
            }
        </ul>
      </div>
    )
  }
}