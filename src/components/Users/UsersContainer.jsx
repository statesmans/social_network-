import React from 'react'
import { connect } from 'react-redux'
import { follow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching, toggleFollowingProgress } from '../../redux/users-reducer'
import Users from './Users'
import Preloader from '../common/preloader/Preloader'
import {usersAPI} from '../../API/api'
class UsersContainer extends React.Component{

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then( response => {
                this.props.setUsers(response.items)
                this.props.setUsersTotalCount(response.totalCount)
                this.props.toggleIsFetching(false)
            })
    }

    onPageChanged = (e, p) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(p)

        usersAPI.getUsers(p, this.props.pageSize)
            .then( response => {
                this.props.setUsers(response.items)
                this.props.toggleIsFetching(false)
            })
    }
    
    render() {
        return (<>
            {this.props.isFetching === true ? <Preloader/> : null}
            <Users  users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    follow={this.props.follow}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    isFetching={this.props.isFetching}
                    followingProgress={this.props.followingProgress}/>
        </>)
    }
} 

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        toggleFollowingProgress: state.usersPage.toggleFollowingProgress,
        followingProgress: state.usersPage.followingProgress
    }
}


export default connect(mapStateToProps,
                      {follow, toggleIsFetching, toggleFollowingProgress, setUsers, setCurrentPage, setUsersTotalCount})(UsersContainer)