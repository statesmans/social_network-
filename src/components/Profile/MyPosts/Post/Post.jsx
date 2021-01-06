import s from './Post.module.scss'


const Post = (props) => {
    return(

        <div className={s.post}>
            <img className={s.post__logo} src="https://polarr-ppe-assets.s3-us-west-1.amazonaws.com/onboarding/01_03_preview_2x.jpg" alt="user logo" />
    
            <p className={s.post__message}>{props.message}</p>
            <p className={s.post__likes}>{props.likesCount}</p>
        </div>
    )
}

export default Post