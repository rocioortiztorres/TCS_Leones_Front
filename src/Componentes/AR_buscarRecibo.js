import React from 'react'
import '../App.css';
import swal from 'sweetalert'
import CONFIG from '../Configuracion/Config';

class AR_buscarRecibo extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            //data de recibo
            dataRecaudaciones: [],
            numRecibo: '',
            formulario: false,
            //data de alumno
            dataAlumnos: [],
            alumDNI: '',
        };

        this.formAlumno = this.formAlumno.bind(this);
    }

    formAlumno = (e) => {
        e.preventDefault();
        for(var i in this.state.dataRecaudaciones){
            if(this.props.recibo == this.state.dataRecaudaciones[i].numero){;
                this.setState({
                    numRecibo: this.state.dataRecaudaciones[i].numero,
                    formulario: true
                });
            }
        }
    }

    buscarAlumno = (e) =>{
        swal("Another one bites the dust", "", "success");
    }

    handleChangeDni = (e) => {
        this.setState({
            alumDNI: e.target.value
        });
    }

    render(){
        return(
            <div className="center datos">
                {this.props.asignar?(
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

                {this.props.tabla?(
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
                                    <td className="td">{this.state.numRecibo}</td>
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
        )
    }

    componentDidMount() {
        //Json para buscar número de recio
        fetch(CONFIG + 'recaudaciones/rec/' + this.props.recibo)
        .then((response) => {
            return response.json();
        })
        .then((recaudaciones) =>{
            this.setState({
                dataRecaudaciones: recaudaciones
            });
            swal("Recibo encontrado", "", "success");
        })
        .catch((error) => {
            console.error(error)
        });

        //Json para buscar al alumno por dni
        fetch(CONFIG + 'alumnoprograma/buscard/' + this.state.alumDNI)
        .then((response) => {
            return response.json();
        })
        .then((alumnos) => {
            this.setState({
                dataAlumnos: alumnos
            });
            swal("Alumno encontrado", "", "success");
        })
        .catch((error) => {
            console.error(error)
        });
    }

}
export default AR_buscarRecibo