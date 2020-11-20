import React, {useState} from 'react'
import {User} from '../../../templates'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../../../modules/usr/user/user.action'

export default function UserDetail() {
    const dispatch = useDispatch()
    const user = useSelector(state => (state.userReducer.user))

    return (<User>
        <h1>User Detail</h1>
        <form>
        <table>
            <tr>
                <td>ID</td>
                <td>{user.user_id}</td>
            </tr>
            <tr>
                <td>PASSWORD</td>
                <td>{user.password}</td>
            </tr>
            <tr>
                <td>NAME</td>
                <td>{user.name}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>{user.gender}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>{user.age}</td>
            </tr>
            <tr>
                <td>Phone</td>
                <td>{user.phone}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>{user.email}</td>
            </tr>
            <tr>
                {/* <td colspan={2}><button onClick={dispatch(userActions.goToDest('/modifying-user-info'))}> */}
                <td colspan={2}><button>
                    Go Update</button>
                    <button>Cancel</button></td>
            </tr>
        </table></form>
    </User>)
}
