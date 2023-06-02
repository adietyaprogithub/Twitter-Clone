import {
  AutoAwesomeOutlined,
  BallotOutlined,
  CalendarMonthOutlined,
  GifBoxOutlined,
  InsertPhotoOutlined,
  LocationOnOutlined,
  SearchOutlined,
  SentimentSatisfiedAltOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./home.css";

import feedData from "./feed.json";
import trends from "../data/trend.json";
import FeedItem from "../FeedItem/Feeditem";
import TrendItem from "../TrendItoms/Trenditom";

function Home() {

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));   // we recive the data from the login
  const [feed, setFeed] = useState(feedData.feed);
  const [newTweet, setNewTweet] = useState("");

  const increaseCounter = (id) => {
    const updatedFeed = feed.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          like: item.like + 1,
        };
      }
      return item;
    });
    setFeed(updatedFeed);
  };

  const handleTweet = () => {
    if (newTweet !== "") {
      const newFeedItem = {
        id: feed.length + 1,
        avatarurl:
          "https://yt3.ggpht.com/jdzNjnfkJayS5QpVHzluOt4EjGlvajabT3IOFYY8mSaCiQf5QYDLMQlv72qmuX1hlVQguLckew=s176-c-k-c0x00ffffff-no-rj-mo",
        name: "Your Name",
        time: "Just now",
        text: newTweet,
        image: "",
        view: 0,
        comment: 0,
        retweet: 0,
        like: 0,
        verified: false,
      };

      setFeed((prevFeed) => [newFeedItem, ...prevFeed]);
      setNewTweet("");
    }
  };

  return (
    <div className="home">
      <div>
        <div className="header">
          <div className="row-between1">
            <h4>Home</h4>
            {/* <p>Email: {loggedInUser.email}</p> */}
            <AutoAwesomeOutlined className="headerIcon" />
          </div>
          <div className="headerCreate">
            <div className="row-nospace">
              <Avatar
                sx={{ width: 50, height: 50 , border:"1px solid  lightgray" }}
                src="https://yt3.ggpht.com/jdzNjnfkJayS5QpVHzluOt4EjGlvajabT3IOFYY8mSaCiQf5QYDLMQlv72qmuX1hlVQguLckew=s176-c-k-c0x00ffffff-no-rj-mo"
              />
              <div style={{ width: "96%", height: "50%", }}>
                <textarea
                  className="headerCreateInput"
                  placeholder="What's happening?"
                  value={newTweet}
                  onChange={(e) => setNewTweet(e.target.value)}
                />
                <div className="row-between">
                  <div className="headerCreateIcons">
                    <InsertPhotoOutlined />
                    <GifBoxOutlined />
                    <BallotOutlined />
                    <SentimentSatisfiedAltOutlined />
                    <CalendarMonthOutlined />
                    <LocationOnOutlined />
                  </div>
                  <div className="headerCreateButton">
                    <button onClick={handleTweet}>Tweet</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feed">
          {feed.map((item) => (
            <FeedItem
              key={item.id}
              avatarurl={item.avatarurl}
              name={item.name}
              time={item.time}
              text={item.text}
              image={item.image}
              view={item.view}
              comment={item.comment}
              retweet={item.retweet}
              like={item.like}
              verified={item.verified}
              increaseCounter={() => increaseCounter(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
