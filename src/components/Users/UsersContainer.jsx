import React from 'react'
import { connect } from 'react-redux'
import { followAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from '../../redux/users-reducer'
import * as axios from 'axios'
import Users from './Users'

class UsersContainer extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then( responce => {
            this.props.setUsers(responce.data.items)
            this.props.setUsersTotalCount(responce.data.totalCount)

            console.log(responce.data.totalCount);
        })
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
        .then( responce => {
            this.props.setUsers(responce.data.items)
        })
    }

    render() {
        return (<Users users={this.props.users}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       follow={this.props.follow}/>)
    }
} 

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {

    return{
        follow: (userId) => {
            dispatch( followAC(userId) )
        },

        setUsers: (users) => {
            dispatch( setUsersAC(users) )
        },
        

        setCurrentPage: (pageNumber) => {
            dispatch( setCurrentPageAC(pageNumber) )
        },
        
        setUsersTotalCount: (usersCount) => {
            dispatch( setUsersTotalCountAC(usersCount) )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)