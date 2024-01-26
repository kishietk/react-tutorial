import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import RedirectButton from './RedirectButton';

export default function UserEditer() {

    // Get user data from url id
    let { id } = useParams();
    const userList = useSelector((state) => state?.userList?.userList);
    const user = userList[id];

    return (
        <div className='user-editer'>
            <ul>
                <li>
                    <p>name: {user?.name}</p>
                    <RedirectButton
                        url={`/admin/edituser/name/${id}`}
                        text='edit name'
                    />
                </li>
                <li>
                    <p>email: {user?.email}</p>
                    <RedirectButton
                        url={`/admin/edituser/email/${id}`}
                        text='edit email'
                    />
                </li>
                <li>
                    <p>{`groups:`}</p>
                    <ul>
                        {user.groups
                            ? user.groups?.map((groups, index) => (
                                <li key={index}>
                                    <p>{`${groups.name}`}</p>
                                </li>
                            ))
                            : "未割当"}
                    </ul>
                    <RedirectButton
                        url={`/admin/edituser/groups/${id}`}
                        text='edit groups'
                    />
                </li>
                <li>
                    <p>{`permissions:`}</p>
                    <ul>
                        {user.permissions?.map((permission, index) => (
                            <li key={index}>
                                <p>{`${permission.name}`}</p>
                            </li>
                        ))}
                    </ul>
                    <RedirectButton
                        url={`/admin/edituser/permissions/${id}`}
                        text='edit permissions'
                    />
                </li>
            </ul>
        </div>
    );
};