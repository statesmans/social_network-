import React from 'react'
import Header from './Header'
import { setAuthUsersData } from '../../redux/auth-reducer'
import { connect } from 'react-redux'
import { headerAPI, profileAPI } from '../../API/api'

class HeaderContainer extends React.Component {

    componentDidMount() {
        headerAPI.authMe() 
        .then( response => {
            if(response.resultCode === 0) {
                let {id, login, email} = response.data
                
                profileAPI.getUserInfo(id)
                    .then(response => {
                        this.props.setAuthUsersData(id, email, login, response.photos.small)
                    })  
            }
        })
    } 
    
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        photo: state.auth.logo
    }
}

export default connect(mapStateToProps, {setAuthUsersData})(HeaderContainer)
