import {
  BarChartRounded,
  ChatOutlined,
  FavoriteBorderOutlined,
  IosShareOutlined,
  LoopOutlined,
  MoreHorizOutlined,
  VerifiedRounded,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { useState } from "react";

function FeedItem(props) {
  const [likeCount, setLikeCount] = useState(props.like);

  const increaseCounter = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="feedItem w-100" onClick={increaseCounter}>
      <div >
        <div className="row-nospace">
          <Avatar sx={{ width: 50, height: 50 }} src={props.avatarurl} />
          <div
            className="feedItemInfo row-nospace mt-1"
            style={{ width: "70%", marginLeft: 10 }}
          >
            <div className="Verified-tick">

           {props.name}{" "}
           <VerifiedRounded
                  sx={{
                    color: "#1DA1F2",
                    fontSize: 15,
                    marginTop: "-5px",
                  }}
                />
                @{props.name}.{props.time}
               
            </div>
          </div>
        </div>
        {/* <MoreHorizOutlined className="feedMoreIcon" /> */}
      </div>
      {/* 0000000000000000000000000000000000000000000000 */}
      {/* Contents with images */}
      <div className="Text-box">
          {props.text}
          </div>
      <div className="feedItemContent">
        {/* <div className="Text-box">
          {props.text}
          </div> */}
          <img className="Image-box" src={props.image} />
      </div>

      <div className="feedItemFooter">

        <p className="Message-icon">
          <ChatOutlined className="M-I"/>
          {props.comment}
        </p>

        <p className="Load-icon">
          <LoopOutlined className="L-I" />
          {props.retweet}
        </p>

    
        <p className="Hart-icon">
          <FavoriteBorderOutlined  className="H-I"/>
          {likeCount}
        </p>

        <p className="Rating-icon">
          <BarChartRounded className="R-I" />
          {props.view}
        </p>

        <p className="Five-icon">
          <IosShareOutlined className="F-I" />
        </p>
      </div>
    </div>
  );
}

export default FeedItem;
