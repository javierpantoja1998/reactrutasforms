import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {

        //Recogemos y definimos la caja del numero
        cajaNumero = React.createRef();
        state = {
            numeros: []
        }
        //Creamos la funcion para recibir datos
        calcularTabla = (e) => {
            //Limpiamos el evento y evitamos que se propague
            e.preventDefault();
      
            //Definimos el valor
            var valor =parseInt(this.cajaNumero.current.value);
            //Definimos el auxiliar para que se borre la tabla al escribir el numero
            var aux = [];
            //Definimos el auxiliar como array
            for (let i = 0; i < 11; i++) {
                //Lo multiplicamos
                var valorMultiplicado = valor * i;
                aux.push(valorMultiplicado);
                //Lo añadimos al array
                console.log(valorMultiplicado);
                 
            }
            this.setState({
                numeros: aux
            });
        }

  render() {
    return (

      <div>

        <h1>Tablas multiplicar</h1>
        <form>
            <label>Introducir Numero: </label>
            <input type="number" ref={this.cajaNumero}/>
            <br/>
            <button onClick={this.calcularTabla}>Calcular su tabla</button>
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
