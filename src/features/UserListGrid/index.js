import DataGrid from '../../components/DataGrid';
import { columns } from "./columns"
import { useNavigate } from "react-router-dom";
import { useGetUsersQuery } from '../../redux/api/userSlice';
import Loading from '../../components/Loading';
import { Alert } from '@mui/material';

export default function UserList() {
    const { data: users, error: usersError, isLoading: usersLoading } = useGetUsersQuery();
    const navigate = useNavigate();

    if (usersError) return <Alert severity="error">faild to get user list</Alert>
    if (usersLoading) return <Loading />

    return <>
        <DataGrid
            columns={columns}
            rows={Object.values(users)}
            onCellClick={(cell) => {
                navigate(`/userlist/${cell.id}`, { replace: true });
            }}
        />
    </>;
};