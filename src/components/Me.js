import React from 'react'
import { useSelector } from 'react-redux'
import UserComponent from "../components/User"

function Me() {
    const me = useSelector((state) => state?.auth?.user);

    return <div>
        <UserComponent user={me} />
    </div>
}

export default Me