import { NavLink } from 'react-router-dom'
import Friends from './Friends/Friends'
import s from './Navbar.module.scss'

const  Navbar = (props) => {
    return(
      <div className={s.nav}>
        <nav className={s.nav__links}>
          <NavLink className={s.nav__link} to="/Profile" activeClassName={s.active}>Profile</NavLink>
          <NavLink className={s.nav__link} to="/Dialogs" activeClassName={s.active}>Messages</NavLink>
          <NavLink className={s.nav__link} to="/News"    activeClassName={s.active}>News</NavLink>
          <NavLink className={s.nav__link} to="/Music"   activeClassName={s.active}>Music</NavLink>
          <NavLink className={s.nav__link} to="/Setting" activeClassName={s.active}>Settings</NavLink>
          <NavLink className={s.nav__link} to="/Users" activeClassName={s.active}>Users</NavLink>
        </nav>
        <Friends friendsData={props.sideBarData.friends}/>
      </div>
    )
}

export default Navbar