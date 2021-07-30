import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share'

const ShareButtons = ({title, url, twitterHandle, tags}) => {

    return(
        <div>
          <FacebookShareButton url={url} >
                <FacebookIcon  size={35} round={true}/>
         </FacebookShareButton>

          <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
                <TwitterIcon  size={35} round={true} />
          </TwitterShareButton>

          <WhatsappShareButton url={url} title={title}>
               <WhatsappIcon  size={35} round={true}/>
           </WhatsappShareButton>
        </div>
      )

}
export default ShareButtons