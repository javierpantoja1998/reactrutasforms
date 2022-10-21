import React, { Component } from 'react';


export default class FormSimple extends Component {
    //Necesitamos una variable de referencia para cada
    //control de formulario que deseemos recuperar su valor
    cajaNombre = React.createRef();
    cajaEdad = React.createRef();

    //Ahora debemos capturar el submit de un formulario
    //Esta funcion debe de recibir un parametro event(e)
    recibirDatosForm = (e) => {
        //La primera linea obligatoria sera detener
        // la propagacion del evento
        e.preventDefault();

        //En las referencias de objeto para capturar el value
        // Se utiliza referencia.current.value
        console.log(this.cajaNombre.current.value);
        console.log(this.cajaEdad.current.value);

        //Creamos el usuario
        this.setState({
            user: {
                nombre:this.cajaNombre.current.value,
                edad:this.cajaEdad.current.value
            }
        })
    }

    state = {
        //Definimos el user
        user:null
    }

  render() {
    return (
      <div className="App">
            <h1>Ejemplo simple forms</h1>
            {
                this.state.user &&
                (<div>
                    <h2 style={{color:"fuchsia"}}>Usuario:{this.state.user.nombre}  Edad:{this.state.user.edad}</h2>
                </div>)
            }
            <form onSubmit={ this.recibirDatosForm}>

                <label>Nombre:</label>
                <input type="text" ref={this.cajaNombre}/> <br/>
                
                <label>Edad:</label>
                <input type="text" ref={this.cajaEdad}/> <br/>
                
                <button>Enviar datos</button>

            </form>
      </div>
    )
  }
}
