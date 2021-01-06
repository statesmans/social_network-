import React from 'react'
import s from './User.module.scss'
import userPhoto from '../../../assets/images/default.jpg'

let User = (props) => {
    
    return (
        <div className={s.user}>
            <div className={s.user__img}>
                <img src={props.data.photos.small != null ? props.data.photos.small : userPhoto} alt="Logo"/>
                
                {props.data.followFlag ? 
                    <button className={s.user__unfollow} onClick={() => props.follow(props.data.id)}>Unfollow</button> : 
                    <button className={s.user__follow } onClick={() => props.follow(props.data.id)}>Follow</button>
                }
            </div>
            <div className={s.user__info + ' ' + s.info}>
                <div className={s.info__main}>
                    <p className={s.info__username}>{props.data.name}</p>
                    <p className={s.info__status}>{props.data.status}</p>
                </div>
                
                    <p className={s.info__location}>Belarus, Minsk</p>
                
            </div>
        </div>
    )
}

export default User