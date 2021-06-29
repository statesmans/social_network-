import React from 'react'
import preloader from '../../../assets/images/preloader.gif'
import s from '../../Users/Users.module.scss'

let Preloader = () => {
    return <img className={s.preloader} src={preloader} alt="preloader"/>
}

export default Preloader