import s from './Friend.module.scss'

const  Friend = (props) => {
    return(

        <a href='/' className={s.friend}>
            <img className={s.friend__image} src={props.friendData.userImage} alt="user logo" />
             <div className="friend__userName">{props.friendData.userName}</div>
        </a>

    )
}

export default Friend