
import Friend from './Friend/Friend'
import s from './Friends.module.scss'

const  Friends = (props) => {

    let friendItems = props.friendsData.map( (friend, i) => {
        if(i < 3) {
            return (<Friend key={friend.id.toString()} friendData={friend}/>)
        } else {
            return null
        }
    }) 

    return(
        <div className={s.friends__wrapper}>
            <h2 className={s.friends__title}>Friends</h2>

            <div className={s.friends__list}>
                
                {friendItems}
            </div>
        </div>
    )
}

export default Friends