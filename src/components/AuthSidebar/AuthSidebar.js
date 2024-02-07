import React from "react";
import { data } from "./data";
import SidebarMyIcon from "../SidebarMyIcon";
import List from '@mui/material/List';
import SidebarButton from '../SidebarButton';
import SidebarOpenButton from '../SidebarOpenButton';

export default function AuthSidebar() {
    return <div className="sidebar">
        <SidebarMyIcon />
        <List
            className="sidebar-list"
            sx={{ width: '100%', maxWidth: 360, }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            {data.map((value, key) => (<div
                key={key}
                id={window.location.pathname === value.link ? "active" : ""}
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