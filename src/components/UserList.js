import { useAuth } from '../useHooks/useAuth';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Pagination from "./Pagination"
import { Link } from "react-router-dom";

export default function UserList() {
    const { getUserList } = useAuth();
    const userList = useSelector((state) => state?.userList?.userList);
    useEffect(() => {
        getUserList();
    }, []);

    const data = {
        ...userList,
        // add test data
        6: { id: 6, name: "mr.6" },
        7: { id: 7, name: "mr.7" },
        8: { id: 8, name: "mr.8" },
        9: { id: 9, name: "mr.9" },
        10: { id: 10, name: "mr.10" },
        11: { id: 11, name: "mr.11" },
        12: { id: 12, name: "mr.12" },
        13: { id: 13, name: "mr.13" },
        14: { id: 14, name: "mr.14" },
        15: { id: 15, name: "mr.15" },
        16: { id: 16, name: "mr.16" },
        17: { id: 17, name: "mr.17" },
        18: { id: 18, name: "mr.18" },
    }

    return <>
        <Pagination
            // data must be an array
            items={Object.values(data)}

            // number of items on one page
            pageSize={5}

            // How to arrange items
            mapFunc={(output, index) => {
                return (
                    <li key={index + 1}>
                        <Link to={`/admin/user/${output.id}`}>
                            {`[${output.id}] ${output.name} ${output.admin ? "(admin)" : ""}`}
                        </Link>
                    </li>
                )
            }}
        />
    </>;
};