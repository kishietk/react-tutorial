import { useAuth } from '../useHooks/useAuth';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from "react-router-dom";

export default function UserList() {

    //
    const { getUserList } = useAuth();
    const userList = useSelector((state) => state?.userList?.userList);
    //
    useEffect(() => {
        getUserList();
    }, []);

    return <>
        <nav className='user-list'>
            <ul>
                {userList && Object.values(userList).map((output, index) => {
                    return <li key={index + 1}>
                        <Link to={`/admin/user/${output.id}`}>
                            {`[${output.id}] ${output.name} (${output.admin ? "管理者" : "一般"})`}
                        </Link>
                    </li>
                })}
            </ul>
        </nav>
    </>;
};