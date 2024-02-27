import React from "react";
import { data } from "./data";
import SidebarMyIcon from "../Icon";
import List from '@mui/material/List'; 
import ListItem from '../ListItem';
import OpenableListItem from '../OpenableListItem';

export default function AdminSidebar() {
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
                className={"sidebar-row"}
            >
                {value.children
                    ? <OpenableListItem data={value} initOpen={true} />
                    : <ListItem data={value} />
                }
            </div>))}
        </List>
    </div>
}