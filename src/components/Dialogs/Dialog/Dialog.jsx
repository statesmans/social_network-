
import { NavLink } from 'react-router-dom'
import s from './Dialog.module.scss'


const Dialog = (props) => {
    let path = "/Dialogs/"  + props.id;


    
    return(

            
            <NavLink className={s.dialog} to={path} activeClassName={s.active}>
                <img className={s.dialog__image} src="https://polarr-ppe-assets.s3-us-west-1.amazonaws.com/onboarding/01_03_preview_2x.jpg" alt="user logo" />
                {props.name}
            </NavLink>


        
    )
}



export default Dialog