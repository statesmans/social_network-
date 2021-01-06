import React from 'react'
import s from './Message.module.scss'


const Message = (props) => {
    
    let masterMessageClassName = ''

    if(props.userInfo.name === props.messageInfo.userName) {
        masterMessageClassName =`${s.userMaster}`

    } else {
        masterMessageClassName = ''
    }

    return(
        <div className={s.message + " " + masterMessageClassName}>
            <div className={s.message__user}>
                <img className={s.message__image} src="https://polarr-ppe-assets.s3-us-west-1.amazonaws.com/onboarding/01_03_preview_2x.jpg" alt="user logo" />
                <div className={s.message__username}>{props.messageInfo.userName}</div>

            </div>

            <p className={s.message__mess}>
                {props.messageInfo.message}
            </p>
        </div>
    )
}

export default Message


