import React, { useMemo } from "react";
import { auth as authItems } from "./Items/auth";
import { admin as adminItems } from "./Items/admin";
import SidebarMyIcon from "./Items/Icon";
import { useGetMeQuery, useGetUserByIdQuery } from "../../../redux/api/userSlice";
import { Alert, Box } from '@mui/material';
import Loading from "../../../components/Loading";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Contents from "./Contents";

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

export default function AuthSidebar() {
    const { data: me, error: meError, isLoading: meLoading } = useGetMeQuery();
    const { data: user, error: userError, isLoading: userLoading } = useGetUserByIdQuery(me?.id, { skip: !me });

    const sidebarItems = useMemo(() => {
        const isAdmin = me?.admin;
        const items = isAdmin ? adminItems : authItems;
        return [...items, ...getPermissionItems(user)]
    }, [me, user]);

    function getPermissionItems(user) {
        const userPermissions = user?.permissions?.map(permission => ({
            title: permission.name,
            link: `/permissions/${permission.code}`,
            icon: {
                material: InsertDriveFileIcon,
                sx: { color: "#FFFFFF" }
            },
        })) || [];

        return [{
            title: "Permissions",
            icon: {
                material: AdminPanelSettingsIcon,
                sx: { color: "#FFFFFF" }
            },
            children: [...(userPermissions || [])],
        },];
    };

    if (meLoading || userLoading) return <Loading />
    if (meError || userError) return <Alert severity="error">Failed to get profile</Alert>

    return <Box className="sidebar">
        <SidebarMyIcon user={user} />
        <Contents items={sidebarItems} />
    </Box>;
}