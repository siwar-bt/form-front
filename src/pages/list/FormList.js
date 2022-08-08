import "../list/list.scss"
import Sidebar from "../../Components/dashboard/sidebar/Sidebar"
import Navbar from "../../Components/dashboard/navbar/Navbar"
import FormDataTable from "../../Components/dashboard/datatable/FormDataTable"

const FormList = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <FormDataTable />
            </div>
        </div>
    )
}

export default FormList