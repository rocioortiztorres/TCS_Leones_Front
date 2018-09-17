import React from 'react'
import '../App.css';
import CONFIG from '../Configuracion/Config';

class AR_buscarRecibo extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            //numRecibo: this.props.recibo,
            dataRecaudaciones: [],
            buscar: false
        };

        this.formAlumno = this.formAlumno.bind(this);
    }

    formAlumno = (e) => {
        e.preventDefault();
        this.setState({
            buscar: true
        });
        console.log('--------Datos-------');
        console.log(this.props.asignar);
        console.log(this.props.tabla);
        console.log(this.props.recibo);
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
                        {this.state.buscar?(
                            <div className="center datos">
                                <h4 className="center h4">
                                    <b>Buscar alumno</b>
                                </h4>
                                <div className="center datos">
                                    <input className="autocomplete" onChange={this.handleChangeDni} placeholder="DNI"></input>
                                    <input className="autoomplete" onChange={this.handleChangeCodigo} placeholder="Código"></input>
                                    <input className="autocomplete" onChange={this.handleChangeApePaterno} placeholder="Apellido paterno"></input>
                                    <input className="autocomplete" onChange={this.handleChangeApeMaterno} placeholder="Apellido Materno"></input>                                                <input className="autocomplete" onChange={this.handleChangeNombres} placeholder="Nombres"></input>
                                    <button className="waves-effect waves-light btn-large center" type="submit">
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
                                    <td className="td">{this.state.dataRecaudaciones.numero}</td>
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
        //var neoRec = this.state.numRecibo;
        console.log('--------FETCH------');
        console.log(this.props.recibo);
        console.log(this.props.asignar);
        console.log(this.props.tabla);
        fetch(CONFIG + '/recaudaciones/rec/' + this.props.recibo)
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
            console.log("----ERROR----")
            console.error(error)
        });
    }

}
export default AR_buscarRecibo