import { NavLink } from 'react-router-dom'
import userLogo from '../../assets/images/default.jpg'
import s from './Header.module.scss'

const Header = (props) => {
    
    let userPhoto = ''

    if(props.photo) {
        userPhoto = <img src={props.photo} alt="userLogo"/>
    } else if(props.isAuth && !props.photo) {
        userPhoto = <img src={userLogo} alt="userLogo"/>
    }
    
    return(
        <header className={s.header} id='header'>
            <a className={s.header__logo}  href="#header"> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Free_logo.svg/1280px-Free_logo.svg.png" alt="Logo"/>
            </a>

            <div className={s.header__loginBtn}>
                {userPhoto}

                { props.isAuth ? props.login 
                    : <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    )
}
 
export default Header