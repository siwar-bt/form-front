import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./sidebar.scss"
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import PeopleIcon from '@mui/icons-material/People';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import ListAltIcon from '@mui/icons-material/ListAlt';
const routes = [
    {
        path: "/profile",
        name: "Profile",
        icon: <AccountCircleRoundedIcon />,

    },
    {
        path: "/home",
        name: "Dashboard",
        icon: <GridViewRoundedIcon />,
    },
    {
        name: "Lists",
        icon: <ListAltIcon/>,
        subRoutes: [
            {
                path: "/users",
                name: "Users List",
                icon: <PeopleIcon/>,
            },
            {
                path: "/forms",
                name: "Forms List",
                icon: <DynamicFormIcon />,
            },
            {
                path: "/cmp",
                name: "Components List",
                icon:<SmartButtonIcon/>,
            },
        ],
    }
];

const SideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            width: "140px",
            padding: "5px 15px",
            transition: {
                duration: 0.2,
            },
        },
    };

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            opacity: 1,
            width: "auto",
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <>
            <div className="main-container">
                <motion.div
                    animate={{
                        width: isOpen ? "210px" : "45px",

                        transition: {
                            duration: 0.5,
                            type: "spring",
                            damping: 10,
                        },
                    }}
                    className={`sidebar `}
                >
                    <div className="top_section">
                        <AnimatePresence>
                            {isOpen && (
                                <motion.h1
                                    variants={showAnimation}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="logo"
                                >
                                    Axia FormBuilder
                                </motion.h1>
                            )}
                        </AnimatePresence>
                        <div className="bars">
                            <DnsRoundedIcon onClick={toggle}/>
                        </div>
                    </div>
                    <div className="search">
                        <div className="search_icon">
                            <SearchRoundedIcon/>
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.input
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    variants={inputAnimation}
                                    type="text"
                                    placeholder="Search"
                                />
                            )}
                        </AnimatePresence>
                    </div>
                    <section className="routes">
                        {routes.map((route, index) => {
                            if (route.subRoutes) {
                                return (
                                    <SidebarMenu
                                        setIsOpen={setIsOpen}
                                        route={route}
                                        showAnimation={showAnimation}
                                        isOpen={isOpen}
                                    />
                                );
                            }

                            return (
                                <NavLink
                                    to={route.path}
                                    key={index}
                                    className="link"
                                    activeclassname="active"
                                >
                                    <div className="icon">{route.icon}</div>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                variants={showAnimation}
                                                initial="hidden"
                                                animate="show"
                                                exit="hidden"
                                                className="link_text"
                                            >
                                                {route.name}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </NavLink>
                            );
                        })}
                    </section>
                </motion.div>
                <main>{children}</main>
            </div>
        </>
    );
};

export default SideBar;