import React from 'react'
import '../App.css';
import swal from 'sweetalert'
import CONFIG from '../Configuracion/Config';

class AR_buscarAlumno extends React.Component {

    constructor(props){
        super(props);
        this.setState({
            dataAlumnos: []
        });
    }

    render(){
        return(
            <div className="center datos">
                {!this.props.tabla?(
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
                                    <td className="td">{this.props.numRecibo}</td>
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

    componentDidMount(){
        //Json para buscar al alumno por dni
        fetch(CONFIG + 'alumnoprograma/buscard/' + this.props.dniAlum)
        .then((response) => {
            return response.json();
        })
        .then((alumnos) => {
            this.setState({
                dataAlumnos: alumnos
            });
            swal("Alumno encontrado", "", "success");
            console.log("--------a------");
            console.log(alumnos);
            console.log(this.state.dataAlumnos);
        })
        .catch((error) => {
            console.error(error)
        });
    }
}
export default AR_buscarAlumno