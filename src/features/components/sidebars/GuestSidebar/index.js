import React from "react";
import { data } from "./data";
import List from '@mui/material/List';
import ListItem from '../ListItem';
import OpenableListItem from '../OpenableListItem';

export default function GuestSidebar() {
    const checkActiveLink = (link) => {
        const currentPath = window.location.pathname;
        if (currentPath === "/" && link === "/login") return true;
        return currentPath === link;
    };

    return <div className="sidebar">
        <List
            sx={{ width: '100%', }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            {data.map((value, key) => (<div
                key={key}
                id={checkActiveLink(value.link) ? "active" : ""}
                className={"sidebar-row"}
            >
                {value.children
                    ? <OpenableListItem data={value} initOpen={true} />
                    : <ListItem data={value} />
                }
            </div>))}
        </List>
    </div>
};