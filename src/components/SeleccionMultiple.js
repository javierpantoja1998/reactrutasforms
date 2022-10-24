import React, { Component } from 'react'

export default class SeleccionMultiple extends Component {
  //Variables para hacer referencia al <select>
  selectMultiple = React.createRef();

  //Metodo para generar las opciones dinamicamente
  generarOptions = () => {

    //Creamos un array con n options
    var options = [];
    for (let i = 0; i < 10; i++) {
        options.push(
          <option key={i} value={"Elemento " + i}>
            {"Elemento: " + i}
          </option>
        )
      
    }
    return options;
  }

  //Metodo para mostrar elementos seleccionados al enviar el form
  mostrarSeleccionados = (e) => {
    e.preventDefault();
    //Tenemos acceso dentro de un select a sus options y nos devuelve un array
    var opciones = this.selectMultiple.current.options;
    var datos = "";

    for (var option of opciones){
      if(option.selected == true){
        datos = datos + option.value + ",";
      }
    }
    //Enlazamos el state "seleccionados" con "datos"
    this.setState({
      seleccionados:datos
    })
  }
  

  //Variable state para dibujar elementos seleccionados (va a ser un string)
  state = {
    seleccionados: ""
  }


  render() {
    return (
      <div>
        <h1>Seleccion Multiple</h1>
        <form onSubmit={this.mostrarSeleccionados}>
          <label>Seleccione elementos:</label>
          <select ref={this.selectMultiple} size="10" multiple>
            {this.generarOptions()}
          </select>
          <button>Mostrar seleccionados</button>
        </form>
        <h1 style={{color:"blue"}}>
           {this.state.seleccionados}
        </h1>
        </div>
    )
  }
}
