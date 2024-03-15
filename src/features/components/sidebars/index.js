import React, { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItem from './ListItem';
import OpenableListItem from './OpenableListItem';
import { guest as guestItems } from "./Items/guest";
import { auth as authItems } from "./Items/auth";
import { admin as adminItems } from "./Items/admin";
import SidebarMyIcon from "./Items/Icon";
import { useGetMeQuery } from "../../../redux/api/userSlice";
import isTokenValid from "../../../utils/isTokenValid";

export function SidebarContents({ items = [], role = "guest" }) {
    return <List
        className="sidebar-list"
        sx={{ width: '100%', maxWidth: 360, }}
        component="nav"
        aria-labelledby="nested-list-subheader"
    >
        {items.map((value, key) => (
            <div
                key={key}
                id={window.location.pathname === value.link ? "active" : ""}
                className={"sidebar-row"}
            >
                {value.children
                    ? <OpenableListItem data={value} initOpen={true} />
                    : <ListItem data={value} />
                }
            </div>
        ))}
    </List>
};

export default function Sidebar({ role }) {
    const { data: me, error: meError, isLoading: meLoading } = useGetMeQuery();
    const [items, setItems] = useState(guestItems);

    useEffect(() => {
        // check this user is admin
        const isAdmin = me?.admin;

        // check access token is valid
        const accessToken = localStorage.getItem('accessToken');
        const expiresAt = localStorage.getItem('expiresAt');
        const isAuth = isTokenValid({ accessToken, expiresAt });
        if (isAuth) setItems(isAdmin ? adminItems : authItems);
    }, [me]);

    return <div className="sidebar">
        {role !== "guest" && <SidebarMyIcon />}
        <SidebarContents items={items} />
    </div>;
}