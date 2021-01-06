
import Dialog from './Dialog/Dialog'
import { updateNewMessageActionCreator, addMessageActionCreator } from '../../redux/messages-reducer'
import Dialogs from './Dialogs'
import Message from './Dialog_messages/Message/Message'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
    let dialogs = state.messagesPage.dialogs.map(d => <Dialog key={d.id} 
                                                              name={d.name} 
                                                              id={d.id} />)

    let messages = state.messagesPage.messages.map(m => <Message key={m.id} 
                                                                 messageInfo={m} 
                                                                 userInfo={state.profilePage.userInfo}/>)
    return {
        messagesText: state.messagesPage.message_text,
        dialogs: dialogs,
        messages: messages
    }


}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (text) => {
            dispatch( updateNewMessageActionCreator(text) )
        },
        addNewMessage: (text) => {
            dispatch( addMessageActionCreator(text) )
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer