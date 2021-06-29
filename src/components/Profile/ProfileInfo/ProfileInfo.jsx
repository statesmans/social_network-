
import s from './ProfileInfo.module.scss'

const ProfileInfo = (props) => {
    
    return (
        <div className={s.account__info}>
            <div className={s.account__top}>
                <img src="https://capitaltreeaccounting.com/wp-content/uploads/2016/01/account-bg.jpg" alt="Acc bg"/>
            </div>
            <div className={s.user__block}>
                <img className={s.user__image} src={props.profile.photos.small} alt="user-img" />

                <div className={s.info}>
                    <h3 className={s.info__name}>{props.profile.fullName}</h3>

                    <div className={s.info__main}>
                        <p className={s.info__item}>Date of Birth: 14 May</p>
                        <p className={s.info__item}>City: Poltava</p>
                        <p className={s.info__item}>Education: PPFC "NTU" KhPI</p>
                        <p className={s.info__item}>Web Site: {props.profile.contacts.website}</p>
                        <p className={s.info__item}>About me: {props.profile.aboutMe}</p>
                        <div className={s.info__contacts}>
                            <p className={s.info__contactsTitle}>Contacts:</p> 
                            <div className={s.info__contactsLinks}>
                                <a className={s.info__contactsLink} href={props.profile.contacts.facebook} >{props.profile.contacts.facebook}</a>
                                <a className={s.info__contactsLink} href={props.profile.contacts.github} >{props.profile.contacts.github}</a>
                                <a className={s.info__contactsLink} href={props.profile.contacts.instagram} >{props.profile.contacts.instagram}</a>
                                <a className={s.info__contactsLink} href={props.profile.contacts.twitter} >{props.profile.contacts.twitter}</a>
                                <a className={s.info__contactsLink} href={props.profile.contacts.vk} >{props.profile.contacts.vk}</a>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo