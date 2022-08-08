
import "../home/home.scss";

import SideBar from "../../Components/dashboard/sidebar/Sidebar";
import CardStart from "../../Components/dashboard/widget/cards/CardStart";
import Widget from "../../Components/dashboard/widget/Widget";

const Home = () => {
    return (
        <div className="home">

            <SideBar />
            <div className="homeContainer">
                <CardStart />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className="charts">
                </div>
                <div className="listContainer">
                </div>
            </div>
        </div>
    );
};
export default Home;