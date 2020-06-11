import React from 'react';
import Popup from "reactjs-popup";
import {CopyToClipboard} from 'react-copy-to-clipboard';


import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    LinkedinIcon,
    MailruIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
  } from "react-share";
import {
    FacebookShareCount,
    OKShareCount,
    PinterestShareCount,
    RedditShareCount,
    TumblrShareCount,
    VKShareCount
  } from "react-share";
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    MailruShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
  } from "react-share";



  export default () => (
    <Popup className="popup" trigger={<button>Share</button>} position="right center">
      <div>
        <EmailIcon size={30} round={true} />
        <FacebookMessengerIcon size={30} round={true} />
        <LinkedinIcon size={30} round={true} />
        <TelegramIcon size={30} round={true} />
        <TwitterIcon size={30} round={true} />
        <WhatsappIcon size={30} round={true} />
        <textarea id="urlArea">{window.location.href}</textarea>
        <CopyToClipboard text={window.location.href}>
            <button>copy</button>
        </CopyToClipboard>
      </div>
    </Popup>
  );


  




//   export default () => (
//     <Popup trigger={<button className="button"> Share </button>} modal>
//       {close => (
//         <div className="modal">
//           <a className="close" onClick={close}>
//             &times;
//           </a>
//           <div className="content">
            
//           </div>
//           <div className="actions">
            
//             <button
//               className="button"
//               onClick={() => {
//                 close();
//               }}
//             >
//               close modal
//             </button>
//           </div>
//         </div>
//       )}
//     </Popup>
//   );