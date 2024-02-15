import React from 'react'
import { useSelector } from 'react-redux'
import UserComponent from "../components/User"
import BackPageButton from '../components/BackPageButton';

export default function Me() {
    const me = useSelector((state) => state?.auth?.user);

    return <div className='content'>
        <UserComponent user={me} />
        <BackPageButton />
    </div>
};