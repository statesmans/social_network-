
import Pagination  from '@material-ui/lab/Pagination/Pagination'
import React from 'react'
import User from './User/User'
import s from './Users.module.scss'


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    return (
        <div>
            <Pagination count={pagesCount} onChange={props.onPageChanged}
                        size="large"
                        classes={{ul:s.paginationUl}}/>

            <div className={s.users}>
                {props.users.map( u => <User key={u.id} 
                                                data={u}
                                                follow={props.follow} 
                                                toggleFollowingProgress={props.toggleFollowingProgress}
                                                followingProgress={props.followingProgress}/>)}
            </div>
        </div>
    )
}
 


export default Users