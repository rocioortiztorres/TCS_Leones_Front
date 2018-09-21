import React from 'react'
import '../App.css';
import {browserHistory} from 'react-router-3';
import CONFIG from '../Configuracion/Config';
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
            rec: '', //Variable para la solicitud del recibo
            dataRecaudaciones: []
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
                tabla: false
            });
            swal("Ingrese el numero de recibo", "", "error");
        } else{
            for(var i in this.state.dataRecaudaciones){
                if(this.state.rec === this.state.dataRecaudaciones[i].numero){;
                    swal("Recibo encontrado", "", "success");
                    this.setState({
                        asignar: true,
                        tabla: true,
                        flag: true
                    });
                } else{
                    swal("Recibo no existente", "", "error");
                }
            }
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
                                {this.state.asignar?(
                                    <div className="center datos">
                                        <div>
                                            <button className="waves-effect waves-light btn-large center" type="submit" onClick={this.formAlumno}>
                                                Asignar a <i className="larga material-icons left">search</i>
                                            </button>
                                        </div>
                                        <div>
                                        {this.state.formulario?(
                                            <div className="center datos">
                                                <h4 className="center h4">
                                                    <b>Buscar alumno</b>
                                                </h4>
                                                <div className="center datos">
                                                    <input className="autocomplete" onChange={this.handleChangeDni} placeholder="DNI"></input>
                                                    <input className="autoomplete" onChange={this.handleChangeCodigo} placeholder="Código"></input>
                                                    <input className="autocomplete" onChange={this.handleChangeApePaterno} placeholder="Apellido paterno"></input>
                                                    <input className="autocomplete" onChange={this.handleChangeApeMaterno} placeholder="Apellido Materno"></input>                                                
                                                    <input className="autocomplete" onChange={this.handleChangeNombres} placeholder="Nombres"></input>
                                                    <button className="waves-effect waves-light btn-large center" type="submit" onClick={this.buscarAlumno}>
                                                        Buscar <i className="large material-icons left">search</i>
                                                    </button>
                                                </div>
                                            </div>
                                        ): (null)}
                                        </div>
                                    </div>
                                ): (null)}

                                {this.state.tabla?(
                                    <div className="center datos">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="th">Recibo</th>
                                                    <th className="th">Código</th>
                                                    <th className="th">Programa</th>
                                                    <th className="th">Nombres</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="td"></td>
                                                    <td className="td"></td>
                                                    <td className="td"></td>
                                                    <td className="td"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <button className="waves-effect waves-light btn-large center" type="submit">
                                            Aceptar <i className="large material-icons left">check</i>
                                        </button>
                                        <button className="waves-effect waves-light btn-large center" type="submit">
                                            Cancelar <i className="large material-icons left">cancel</i>
                                        </button>
                                        <button className="waves-effect waves-light btn-large center" type="submit">
                                            Limpiar <i className="large material-icons left">brush</i>
                                        </button>
                                    </div>
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

    componentWillUpdate() {
        //Json para buscar número de recio
        //console.log("-----rec--------");
        //console.log(this.state.rec);
        fetch(CONFIG + 'recaudaciones/rec/' + this.state.rec)
        .then((response) => {
            return response.json();
        })
        .then((recaudaciones) =>{
            this.setState({
                dataRecaudaciones: recaudaciones
            });
            //console.log("----------DATA------");
            //console.log(recaudaciones);
            //console.log(this.state.dataRecaudaciones);
        })
        .catch((error) => {
            console.error(error)
        });
    }

}
export default Asignar_Recibo