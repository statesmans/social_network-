

const Profile = () => {
    return(
        <main className="content account">
        <div className="account__top-bg">
          <img src="https://capitaltreeaccounting.com/wp-content/uploads/2016/01/account-bg.jpg" alt="Acc bg"/>
        </div>
        <div className="account__user user">
         <div className="user__block">
        
            <img className="user__image" src="https://polarr-ppe-assets.s3-us-west-1.amazonaws.com/onboarding/01_03_preview_2x.jpg" alt="user-img" />

            <div className="user__info info">
              <h3 className="info__name">Yegor S.</h3>

              <div className="info__main">
                <p className="info__birth">Date of Birth: 14 May</p>
                <p className="info__city">City: Poltava</p>
                <p className="info__education">Education: PPFC "NTU" KhPI</p>
                <p className="info__web-site">Web Sire: github.com/statesmans</p>
              </div>
            </div>
         </div>
      
          <div className="user__posts posts">
            <h3 className="posts__title">My posts</h3>
            <textarea className="posts__input" type="text" placeholder="your news..."></textarea>
            <button className="posts__send-btn">Send</button>

            <div className="posts__list post-list">
              <div className="post-list__post">
                <img className="post-list__user-logo" src="https://polarr-ppe-assets.s3-us-west-1.amazonaws.com/onboarding/01_03_preview_2x.jpg" alt="user logo" />
                <p className="post-list__message">Whats cooking!?</p>
              </div>

              <div className="post-list__post">
                <img className="post-list__user-logo" src="https://polarr-ppe-assets.s3-us-west-1.amazonaws.com/onboarding/01_03_preview_2x.jpg" alt="user logo" />
                <p className="post-list__message">Hi, friends!</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}

export default Profile