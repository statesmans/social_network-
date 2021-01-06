import React from 'react'
import User from './User/User'
import s from './Users.module.scss'

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for(let i = 1; i <= pagesCount; i++) {     
        pages.push(i)
    }

    return (
        <div>
            <h1>Users</h1>
            <div className={s.pagination}>
                {pages.map( (p, i) => {
                    return (
                        <span className={s.pageNum + ' ' +  (props.currentPage === p && s.selectedPage)} onClick={(e) => { props.onPageChanged(p)}} key={i}>{p}</span>
                    )
                })}
            </div>

            <div className={s.users}>
                {props.users.map( u => <User key={u.id} data={u} follow={props.follow}/>)}
            </div>
        </div>
    )
}
 


export default Users