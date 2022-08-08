import Home from "../src/pages/home/Home";
import Welcome from "../src/pages/welcome/Welcome";
import UserProfile from "../src/pages/single/Single";
import UsersList from "../src/pages/list/List";
import FormBuilder from "../src/Components/FormBuilder";
import FormsList from "../src/pages/list/FormList";

const dashboardRoutes = [
    {
        path: "/",
        name: "Welcome",
        icon: "nc-icon nc-chart-pie-35",
        component: Welcome,
    },
    {
        path: "/dashboard",
        name: "Home",
        icon: "nc-icon nc-chart-pie-35",
        component: Home,
    },
    {
        path: "/UserProfile",
        name: "Profile",
        icon: "nc-icon nc-circle-09",
        component: UserProfile,
    },
    {
        path: "/users",
        name: "Users List",
        icon: "nc-icon nc-circle-09",
        component: UsersList,
    },
    {
        path: "/formulaires",
        name: "Forms List",
        icon: "nc-icon nc-circle-09",
        component: FormsList,
    },
    {
        path: "/formbuilder",
        name: "FormBuilder",
        icon: "nc-icon nc-paper-2",
        component: FormBuilder,
    }
];

export default dashboardRoutes;