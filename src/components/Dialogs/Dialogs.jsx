
import Messages from './Dialog_messages/Messages'
import s from './Dialogs.module.scss'


const Dialogs = (props) => {


    
    return(
       <div className={s.messages}>
           <div className={s.dialogs}>
               <h2 className={s.dialogs__title}>Dialogs</h2>

               <div className={s.dialogs__list}>
                    {props.dialogs}
               </div>
           </div>

            <Messages updateNewMessage={props.updateNewMessage} 
                      addNewMessage={props.addNewMessage}
                      userInfo={props.userInfo} 
                      messages={props.messages} 
                      messagesText={props.messagesText}/>
       </div>
    )
}

export default Dialogs