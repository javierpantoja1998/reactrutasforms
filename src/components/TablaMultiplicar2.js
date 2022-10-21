import React, { Component } from 'react'
export default class TablaMultiplicar extends Component {
        state = {
            numeros: [],
            lista:[]
        }
        //Recogemos y definimos la caja del numero
        SelectNumero = React.createRef();
        crearSelect = (e) => {
            //Limpiamos el evento y evitamos que se propague
            e.preventDefault();
            var aux = [];
            for (let i = 0; i < 10; i++) {
                var aleatorio = Math.floor(Math.random()*10);
                aux.push(aleatorio);
            }
            this.setState({
                lista: aux
            });
        }
        //Creamos la funcion para recibir datos
        calcularTabla = (e) => {
            //Limpiamos el evento y evitamos que se propague
            e.preventDefault();
            //Definimos el valor
            var valor = parseInt(this.SelectNumero.current.value);
            //Definimos el auxiliar para que se borre la tabla al escribir el numero
            var aux2 = [];
            //Definimos el auxiliar como array
            for (let i = 0; i < 11; i++) {
                //Lo multiplicamos
                var valorMultiplicado = valor * i;
                aux2.push(valorMultiplicado);
                //Lo añadimos al array
                console.log(valorMultiplicado);
            }
            this.setState({
                numeros: aux2
            });
        }
  render() {
    return (
      <div>
        <h1 align='center'>Tablas multiplicar</h1>
        <form onSubmit={this.calcularTabla}>
            <label align='center'>Introducir Numero: </label>
            <select onClick={this.crearSelect} ref={this.SelectNumero}>
                {
                    this.state.lista.map((select, index) => {
                        return (<option key={index}>{select}</option>);
                    })
                }
            </select>
            <br/>
            <button align='center'>Calcular su tabla</button>
        </form>
        <table align='center' border="2">
            {
                this.state.numeros.map((numero, index) => {
                    return (<div>
                        <tr>
                            <th>Operacion</th>
                            <th>Resultado</th>
                        </tr>
                        <tr key={index}>
                            <td>{index}*{this.SelectNumero.current.value}</td>
                            <td>{numero}</td>
                        </tr>
                    </div>);
                })
            }
        </table>
      </div>
    )
  }
}