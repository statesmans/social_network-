
import s from './ProfileInfo.module.scss'

const ProfileInfo = () => {
    return (
        <div className={s.account__info}>
            <div className={s.account__top}>
                <img src="https://capitaltreeaccounting.com/wp-content/uploads/2016/01/account-bg.jpg" alt="Acc bg"/>
            </div>
            <div className={s.user__block}>
                <img className={s.user__image} src="https://polarr-ppe-assets.s3-us-west-1.amazonaws.com/onboarding/01_03_preview_2x.jpg" alt="user-img" />

                <div className={s.info}>
                    <h3 className={s.info__name}>Yegor S.</h3>

                    <div className={s.info__main}>
                        <p className="info__birth">Date of Birth: 14 May</p>
                        <p className="info__city">City: Poltava</p>
                        <p className="info__education">Education: PPFC "NTU" KhPI</p>
                        <p className="info__web-site">Web Sire: github.com/statesmans</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo