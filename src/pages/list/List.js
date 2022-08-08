import "../list/list.scss"
import Sidebar from "../../Components/dashboard/sidebar/Sidebar"
import Datatable from "../../Components/dashboard/datatable/Datatable"

const List = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Datatable />
            </div>
        </div>
    )
}

export default List;