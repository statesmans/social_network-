import React, { useEffect } from 'react'
import s from './Messages.module.scss'


const Messages = (props) => {

    let messInput = React.createRef()
    
    useEffect( () => {
        messInput.current.value = props.messagesText
    })
    
    function updateText(e) {
                props.updateNewMessage(messInput.current.value)

            if (e.keyCode === 13) {
                props.addNewMessage(messInput.current.value)
            }
        
            
    }



    return(
        <div className={s.messages__block}>
            <div  className={s.messages__list} >
                {props.messages}
            </div>
            <textarea className={s.messages__input} ref={messInput}  onKeyUp={updateText} placeholder="Some message..."></textarea>
            
        </div>
    )

    
}

export default Messages