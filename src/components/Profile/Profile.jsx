
import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    
    return (
        <main className={s.account}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />

        </main>
    )
}

export default Profile