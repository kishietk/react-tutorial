import { useState } from "react";
import MuiPagination from '@mui/material/Pagination';

export default function Pagination({ items, pageSize, mapFunc }) {

    //current page
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    // if items does not set, return message
    if (!items) return <p>items does not set</p>

    return <>
        {items.length > 0 &&
            <nav className='user-list'>
                <ul>
                    {mapFunc
                        ? items.slice(page * pageSize - pageSize, page * pageSize).map(mapFunc)
                        : items.slice(page * pageSize - pageSize, page * pageSize).map((output, index) => {
                            return <li key={index + 1}>{output.id ?? "---"}</li>
                        })
                    }
                </ul>
            </nav>
        }
        <MuiPagination
            count={Math.ceil(items.length / pageSize)}  /* total number of pages */
            page={page}                                 /* current pages */
            onChange={handleChange}
        />
    </>;
}