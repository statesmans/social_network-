import React from 'react'
import s from './User.module.scss'
import userPhoto from '../../../assets/images/default.jpg'
import { NavLink } from 'react-router-dom'
import {usersAPI} from '../../../API/api'

let User = (props) => {
    return (
        <div className={s.user}>
            <div className={s.user__img} >
                <NavLink to={'/profile/' + props.data.id}>
                    <img src={props.data.photos.small != null ? props.data.photos.small : userPhoto} alt="Logo"/>
                </NavLink>
                
                {props.data.followed ? 
                    <button className={s.user__unfollow} disabled={props.followingProgress.some( u => u === props.data.id)} onClick={() => {
                        
                        props.toggleFollowingProgress(true, props.data.id)
                        usersAPI.unfollow(props.data.id)
                            .then( response => {
                                if(response.resultCode === 0) {
                                    props.follow(props.data.id) 
                                }
                        props.toggleFollowingProgress(false, props.data.id)
                            })}} >Unfollow</button> : 

                    <button className={s.user__follow } disabled={props.followingProgress.some( u => u === props.data.id)} onClick={() => {
                        
                        props.toggleFollowingProgress(true, props.data.id)
                        usersAPI.follow(props.data.id)
                            .then( response => {
                                if(response.resultCode === 0) {
                                    props.follow(props.data.id) 
                                }
                        props.toggleFollowingProgress(false, props.data.id)
                            })}}>Follow</button>
                }
            </div>
            <NavLink className={s.user__info + ' ' + s.info} to={'/profile/' + props.data.id}>
                <div className={s.info__main}>
                    <p className={s.info__username}>{props.data.name}</p>
                    <p className={s.info__status}>{props.data.status}</p>
                </div>
                    <p className={s.info__location}>Belarus, Minsk</p>
            </NavLink>
        </div>
    )
}

export default User