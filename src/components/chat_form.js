import React, {useState} from 'react';
import { Link } from "gatsby";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'
import { stringify } from 'querystring';


function ChatForm(props) {
    console.log(props)
    const [chat, setChat] = useState(false)
    const [chatBoxEmail, setChatBoxEmail] = useState("")
    const [chatBoxMsg, setChatBoxMsg] = useState("")
    const [sending, setSending] = useState(false)
    const [sendSucc, setSucc] = useState(false)

    const ChatURL = "https://api.telegram.org/bot557938277:AAH-sQrStAtvtcjDHtLPx6Or0DPRH66nnpA/sendMessage";

    const sendMsg = () => {

      const htmlText = `<b>` + chatBoxEmail + `</b> <i>` + chatBoxMsg + `</i>`;


      
      let msg = {
        "chat_id": 430856496,
          "text": htmlText,
          "parse_mode": "HTML"

}
  setSending(true)

axios.post(ChatURL, msg).then(res => {
  console.log(res)
  setSucc(true)
  
}).catch(err => {
  console.log(err)
  alert('Oops, something went wrong. If this issue continues, please email me over at hi@ronaldlangeveld')
})

    }


    const ChangeEmail = (e) => {
      var email = e.target.value;
      setChatBoxEmail(email)
    }

    const ChangeText = (e) => {
      var text = e.target.value;
      setChatBoxMsg(text)
    }


    const sendingBtn = () => {
      
      if(sending === false){
        return <button onClick={sendMsg} className="button is-info is-fullwidth">Send &nbsp; <FontAwesomeIcon icon={faPaperPlane} /></button>
      }
      else {
        return <button onClick={sendMsg} className="button is-info is-fullwidth is-loading" disabled>Sending</button>

      }
    }


    const MsgForm = () => {

      if(sendSucc === false){
        return <div className="message-body">

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input onChange={ChangeEmail} value={chatBoxEmail} className="input" type="email" placeholder="john@doe.com" name='email' />
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea onChange={ChangeText} value={chatBoxMsg} className="textarea" placeholder="Give me a brief description of your product, budget and anything else you think I should know about."></textarea>
          </div>
        </div>
        {sendingBtn()}
          </div>
      } else {

return <div className="message-body">
<p>Thank you for your message. I will get back to you within 24 hours.</p>
  </div>



      }
      
    }

  return (
<>

<div className={(props.Form ? '': 'is-hidden') }>
<article className="message is-info">
  <div className="message-header">
    <p>Let's get in touch</p>
    <button onClick={props.Hide} className="delete" aria-label="delete"></button>
  </div>
{MsgForm()}
</article>




</div>


</>
  );
}
export default ChatForm;