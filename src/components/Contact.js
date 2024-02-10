import inbox from "../../assets/inbox.png"
import telegram from "../../assets/telegram.png"
import twitter from "../../assets/twitter.png"

const  Contact=()=>{

    return(
        <div className="contact-body">
            <div className="contact-left">
            <img  className="inbox" alt="Inbox_image" src={inbox} />
            </div>
            <div className="contact-right">
            <div className="contact" >CONTACT</div>
            <div className="subscribe">SUBSCRIBE:</div>
            <img  className="twitter" alt="twitter_image" src={twitter} />
            <img  className="telegram" alt="telegram_image" src={telegram} />
            </div>
        </div>
    );
}
export default Contact;