import React from 'react'
import '../App.css';
import {browserHistory} from 'react-router-3';
import CONFIG from '../Configuracion/Config';
import AR_buscarRecibo from './AR_buscarRecibo';

class Asignar_Recibo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            //variales para recaudaciones
            asignar:false, tabla:false, 
            dataRecaudaciones: [],
            rec: '',
            //variables para alumno
            formulario: false, 
            dataAlumnos: [],
            dni: '', codigo: ''
        };

        this.Regresar = this.Regresar.bind(this);
        this.buscarRecibo = this.buscarRecibo.bind(this);
        //othis.handleChangeRecibo = this.handleChangeRecibo.bind(this);
        /*this.buscarAlumno = this.buscarRecibo.bind(this);
        this.formAlumno = this.formAlumno.bind(this);
        this.handleChangeRecibo = this.handleChangeRecibo.bind(this);
        this.handleChangeDni = this.handleChangeDni.bind(this);
        this.handleChangeCodigo = this.handleChangeCodigo.bind(this);
        this.handleChangeApeMaterno = this.handleChangeApePaterno.bind(this);
        this.handleChangeApeMaterno = this.handleChangeApeMaterno.bind(this);
        this.handleChangeNombres = this.handleChangeNombres.bind(this);*/
    }
    
    //Métodos para buscar número de recibo
    buscarRecibo = (e) => {
        e.preventDefault();
        if(this.state.rec == ''){
            this.setState({
                asignar: false,
                tabla: false
            });
            alert("Ingrese el numero de recibo a buscar");
        } else{
            this.setState({
                asignar: true,
                tabla: true,
            });
        }
        console.log('-------------valores----------');
        console.log(this.state.asignar);
        console.log(this.state.tabla);
        console.log(this.state.rec);
    }

    handleChangeRecibo = (e) => {
        this.setState({
            rec: e.target.value
        });
    }

    //Métodos para buscar al alumno
    /*formAlumno = (e) => {
        e.preventDefault();
        this.setState({
            formulario: true
        });
    }

    buscarAlumno = (e) => {
        var encontrado = false;
        if(this.state.codigo = ""){
            alert("Código del alumno no existente");
        } else{
            for(var i in this.props.listaAlumnos){
                if(this.state.codigo == this.props.listaAlumnos[i].codigo){
                    this.setState({
                        codAlum: this.props.listaAlumnos[i].codigo,
                        nomAlum: this.props.listaAlumnos[i].apeNom
                    })
                }
                encontrado = true;
            }
        }
    }

    handleChangeDni = (e) => {
        this.setState({
            dni: e.target.value
        })
    }

    handleChangeCodigo = (e) => {
        this.setState({
            codigo: e.target.value
        })
    }

    handleChangeApePaterno = (e) => {
        this.setState({
            apePat: e.target.value
        })
    }

    handleChangeApeMaterno = (e) => {
        this.setState({
            apeMat: e.target.value
        })
    }

    handleChangeNombres = (e) => {
        this.setState({
            nombre: e.target.value
        })
    }*/

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
                                <AR_buscarRecibo recibo={this.state.rec} asignar={this.state.asignar} tabla={this.state.tabla}/>  
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    /*componentDidMount() {
        //Json para buscar número de recio
        console.log('--------------');
        console.log(this.state.asignar);
        console.log(this.state.tabla);  
        fetch(CONFIG + 'recaudaciones/rec/' + this.state.rec)
        .then((response) => {
            console.log("----------------");
            console.log("entró");
            return response.json();
        })
        .then((recaudaciones) =>{
            console.log("------------RECAUDACIONES----------------");
            console.log(recaudaciones);
            this.setState({
                dataRecaudaciones: recaudaciones
            })
            console.log("-------DATARECAUDACIONES--------");
            console.log(this.state.dataRecaudaciones);
        })
        .catch((error) => {
            console.log("----ERROR----")
            console.error(error)
        });
    }
    
    /*componentDidMount() {
        //Json para buscar número de recibo
        fetch(CONFIG + 'recaudaciones/rec/' + this.props.rec)
        .then((response) => {
            console.log("----------------");
            console.log("entró");
            return response.json();
        })
        .then((recaudaciones) =>{
            console.log("------------------------------");
            console.log(recaudaciones);
            this.setState({
                dataRecaudaciones: recaudaciones
            })
        })
        .catch((error) => {
            console.error(error)
        });

        //json para buscar alumno por número de dni
        fetch(CONFIG + '/alumnoprograma/buscard/' + this.state.dni)
        .then((response)  => {
            return response.json();
        })
        .then((alumnos) => {
            console.log(alumnos);
            this.setState({
                dataAlumnos: alumnos
            })
        })
        .catch((error) => {
            console.error(error)
        });
    }*/

}
export default Asignar_Recibo