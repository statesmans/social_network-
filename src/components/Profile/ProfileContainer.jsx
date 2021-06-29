import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer' 
import Preloader from '../common/preloader/Preloader';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../API/api' 

class ProfileContainer extends React.Component {

    
    componentDidMount() {
        let userId = this.props.match.params.userId

        if(!userId) {
            userId = 2
        }

        profileAPI.getUserInfo(userId)
            .then( responce => {
                this.props.setUserProfile(responce)
            })
    }

    render() {
        if(!this.props.profile) {
            return <Preloader/>
        }
        
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let withURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withURLDataContainerComponent)