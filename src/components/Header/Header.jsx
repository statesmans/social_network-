import c from './Header.module.scss'

const Header = () => {
    return(
        <header className={c.header} id='header'>
            <a href="#header"> 
                <img className={c.header__logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Free_logo.svg/1280px-Free_logo.svg.png" alt="Logo"/>
            </a>
        </header>
    )
}
 
export default Header