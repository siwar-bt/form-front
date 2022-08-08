
import React from "react";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

import { Table } from "react-bootstrap"
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

class FormDataTable extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: []
        }

        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }

    callAPI() {
        //fetch data from API
        fetch("https://localhost:7049/api/Form").then(
            (response) => response.json()
        ).then((data) => {

            console.log(data)
            this.setState({
                list: data
            })
        })
    }

    render() {
        let tb_data = this.state.list.map((item) => {
            return (

                <tr key={item.id_form} style={{ textAlign: "center" }}>
                    <td>{item.nameForm}</td>
                    <td>{item.description}</td>
                    <td>{item.date_creation}</td>
                    <td>{item.userId.fullname}</td>
                    <td>{item.nbr_composants}</td>
                    <td>
                        <InfoRoundedIcon style={{ color: "#28a745" }}>
                            Details
                        </InfoRoundedIcon>
                        <DeleteForeverRoundedIcon style={{ color: "#c10000" }}>
                            Supprimer
                        </DeleteForeverRoundedIcon>
                    </td>
                </tr>
            )
        }
        )
        return (
            <div>
                <h1 style={{ fontSize: "30px", color: "#7451f8", margin: "20px" }}>Liste de Formulaires : </h1>
                <div >
                    <Table className="mt-2 table table-striped" hover size="table table-sm" style={{ margin: "1px" }}>
                        <thead>
                            <tr style={{ textAlign: "center" }}>
                                <th>Nom de formulaire</th>
                                <th>Description</th>
                                <th>Date de creation</th>
                                <th>Nom de lutilisateur</th>
                                <th>Nombre de composants</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tb_data}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}
export default FormDataTable;