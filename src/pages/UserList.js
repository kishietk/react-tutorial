import { Outlet } from 'react-router-dom';
import Users from "../components/UserList";
import { Pagination } from '@mui/material';

export default function UserList() {
    return <div className="content">
        <h2>User List Page</h2>
        <Users />
        <Outlet />
        
        <div className='pagenation'>
            <Pagination
                count={8}
            />
        </div>
    </div>
}