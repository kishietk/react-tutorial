import React from "react";
import { data } from "./data";
import List from '@mui/material/List';
import SidebarButton from '../SidebarButton';
import SidebarOpenButton from '../SidebarOpenButton';

export default function GuestSidebar() {
    const checkActiveLink = (link) => {
        const currentPath = window.location.pathname;
        if (currentPath === "/" && link === "/login") return true;
        return currentPath === link;
    };

    return <div className="sidebar">
        <List
            className="sidebar-list"
            sx={{ width: '100%', maxWidth: 360, }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            {data.map((value, key) => (<div
                key={key}
                id={checkActiveLink(value.link) ? "active" : ""}
                className={"row"}
            >
                {value.children
                    ? <SidebarOpenButton data={value} initOpen={true} />
                    : <SidebarButton data={value} />
                }
            </div>))}
        </List>
    </div>
}

