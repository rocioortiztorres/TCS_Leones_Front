import React from 'react'
import '../App.css';
import {browserHistory} from 'react-router-3';
import swal from 'sweetalert'
import AR_buscarRecibo from './AR_buscarRecibo';

class Asignar_Recibo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            //variales para recaudaciones
            asignar:false, //Variable para habilitar el botón asigar a
            tabla:false,  //Variable para habilitar la tabla
            flag: false, //Variable para hacer una pausar y poder pasar el parámetro rec
            rec: '', //Variable para la solicitud
        };

        this.Regresar = this.Regresar.bind(this);
        this.buscarRecibo = this.buscarRecibo.bind(this);
        this.handleChangeRecibo = this.handleChangeRecibo.bind(this);
    }
    
    //Métodos para buscar número de recibo
    buscarRecibo = (e) => {
        e.preventDefault();
        if(this.state.rec == ''){
            this.setState({
                asignar: false,
            });
            swal("Ingrese el numero de recibo", "", "error");
        } else{
            this.setState({
                asignar: true,
                tabla: true,
                flag: true
            });
        }
    }

    handleChangeRecibo = (e) => {
        this.setState({
            rec: e.target.value
        });
    }

    Regresar=(e)=>{
        browserHistory.push('/vista/loginNyA');
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <h3>Asiganción de recibos por alumno
                    <ul id="nav-mobile" className="right  hide-on-med-and-down">
                        <li >
                            <a className="seleccionar" onClick={this.Regresar} >Regresar
                                <i className="material-icons right">reply</i>
                            </a>
                        </li>
                    </ul>
                </h3>
                <hr/>

                <div className="vista">
                    <div className="grupo1">
                        <form>
                            <div className="center datos">
                                <input className="autocomplete" onChange={this.handleChangeRecibo} placeholder="Numero de recibo"></input>
                                <button className="waves-effect waves-light btn-large btn-center" type="submit" onClick={this.buscarRecibo}>
                                    Buscar <i className="large material-icons left">search</i>
                                </button>
                                {this.state.flag?(
                                    <AR_buscarRecibo recibo={this.state.rec} asignar={this.state.asignar} tabla={this.state.tabla}/>
                                ): (null)}
                            </div>
                        </form>
                    </div>
                </div>

                <hr/>
                <footer>
                    <div className="row center-xs centrar color">
                        Realizado por Leones © 2018
                    </div>
                </footer>
            </div>
        )
    }

}
export default Asignar_Recibo