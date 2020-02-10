import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'react-share';

function Modal({isDone}) {
  let counter = useSelector(state => state.counter)
  const shareUrl = window.location.href;
  const dispatch = useDispatch()
  return (
  <div className="modal" hidden={!isDone}>
    <div className="modal-content">
      <h3 className="mb">You result is {counter} / 25.</h3>
      <h3 className="mb-lg">Share this game!</h3>
      <div className="flex mb-lg">
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon round={true} size={40} />
        </FacebookShareButton>
        <TwitterShareButton>
          <TwitterIcon url={shareUrl} round={true} size={40} />
        </TwitterShareButton>
        <WhatsappShareButton>
          <WhatsappIcon url={shareUrl} round={true} size={40} />
        </WhatsappShareButton>
        <TelegramShareButton>
          <TelegramIcon url={shareUrl} round={true} size={40} />
        </TelegramShareButton>
        <RedditShareButton>
          <RedditIcon url={shareUrl} round={true} size={40} />
        </RedditShareButton>
      </div>
      <button className="btn block" onClick={()=> dispatch({type: "reset"})}>Play again</button>
    </div>
  </div>
  )
}

export default Modal;
