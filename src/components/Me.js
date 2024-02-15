import React from 'react'
import { useSelector } from 'react-redux'
import UserComponent from "../components/User"
import BackPageButton from './BackPageButton';

function Me() {
    const me = useSelector((state) => state?.auth?.user);

    return <div>
        <UserComponent user={me} />
        <BackPageButton />
    </div>
}

export default Me;