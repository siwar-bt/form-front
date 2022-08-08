
import React from "react";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import {  Table } from "react-bootstrap"
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';



class Datatable extends React.Component {

    constructor(props) {

        
        super(props)
        this.state = {
            list: []
        }
        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
        this.Deleteuser = this.Deleteuser.bind(this);

    }

    callAPI() {
        //fetch data from API
        fetch("https://localhost:7049/api/User").then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
            this.setState({
                list: data,
                listform: data.forms,             
            })
        })
    }
    
        Deleteuser = (id) => {
            fetch("https://localhost:7049/api/User/{id}", {
                method: 'DELETE',
            }).then((result) => {
                console.log("ok");
            }
            )
        }
    render() {

        let tb_data = this.state.list.map((item) => {
            return (
                <tr key={item.id} style={{ textAlign: "center2" }}>
                    <td >{item.fullname}</td>
                    <td>{item.email}</td>
                    let tb_data = this.state.list.map((item)=> {
                        <td key={item.id}>
                            {item.nameForm}
                        </td>
                    }
                    <td>{item.createdAt}</td>
                    <td>
                        <InfoRoundedIcon style={{ color: "#28a745" }} data-target="#exampleModal">
                            Details
                        </InfoRoundedIcon>
                        <DeleteForeverRoundedIcon style={{ color: "#c10000" }} >
                            Supprimer
                        </DeleteForeverRoundedIcon>
                    </td>
                </tr>
            )
        }

        )
        return (
            <div>
                <div>
                    <h1 style={{ fontSize: "30px", color: "#7451f8", margin: "20px" }}>Liste des Utilisateurs : </h1>
                    <div >
                        <Table className="mt-2 table table-striped" hover size="table table-sm" style={{ margin: "1px"}}>
                            <thead>
                                <tr style={{ textAlign: "center" }}>
                                    <th >Nom & prenom utilisateur</th>
                                    <th>Email utilisateur</th>
                                    <th>Nom de formulaire</th>
                                    <th>Date de creation</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tb_data}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        )
    }
}
export default Datatable;