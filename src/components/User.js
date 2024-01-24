export default function User({user}) {
    return <>
        <h3>{user.name}'s page</h3>
        <div className="user">
            <ul>
                <li>
                    <p>{`id: ${user.id}`}</p>
                </li>
                <li>
                    <p>{`name: ${user.name}`}</p>
                </li>
                <li>
                    <p>{`admin: ${user.admin ? "管理者" : "一般"}`}</p>
                </li>
                <li>
                    <p>{`groups:`}</p>
                    <ul>
                        {user.groups ? user.groups?.map((groups, index) => (
                            <li key={index}>
                                <p>{`${groups.name}`}</p>
                            </li>
                        )) : "未割当"}
                    </ul>
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
                </li>
            </ul>
        </div>
    </>
};