import React, {useState} from 'react';
import { Link } from "gatsby";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatForm from './chat_form';
import {toggleChatBox} from '../state/app';
import { useSelector, useDispatch } from 'react-redux';

function ChatBox() {
    const dispatch = useDispatch();
    const [chat, setChat] = useState(false)
    const [chatBox, setChatBox] = useState(true)
    const state = useSelector(state => state.app)
    console.log(state)

    const clickChat = () => {
        console.log(chat)
        setChat(!chat)


    }

    const hideChatBox = () => {
        dispatch(toggleChatBox())
    }

  return (
<>
<div data-aos="fade-up" data-aos-duration="1000" className="chat_box">
<div className={(state.isChatBox ? '': 'is-hidden') }>
<div className={(chat ? 'is-hidden': '') }>


<article className="message is-warning">
  <div className="message-header">
    <p>Hey there! 👋</p>
    <button onClick={hideChatBox} className="delete" aria-label="delete"></button>
  </div>
  <div className="message-body">
    <p>Thank you for visiting. Let's have a chat about your project.</p>
    <button onClick={clickChat} style={btnMrg} className="button is-warning is-size-7">Write a message</button>
    <br />

  </div>
</article>

</div>
<ChatForm Hide={hideChatBox} Form={chat} />
</div>
<div>

</div>
</div>

</>
  );
}

const btnMrg = {
    marginTop: "10px"
}

export default ChatBox;
