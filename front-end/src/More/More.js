import React, { useEffect, useState } from "react";
import "../More/More.css";
import axios from "axios";

import Comments from "../Comments/Comments";

import logo from "../More/img/study-buddy-logo.png";
import upvote from "../More/img/upvote.png";
import printer from "../More/img/printer.png";
import blackGlobe from "../More/img/black_globe.png";
import blueGlobe from "../More/img/blue_globe.png";
import silence from "../More/img/silence.png";
import wheelchair from "../More/img/wheelchair.png";

function More() {
  const [printerVotes, setPrinterVotes] = useState(0);
  const [wifiVotes, setWifiVotes] = useState(0);
  const [quietVotes, setQuietVotes] = useState(0);
  const [accessibilityVotes, setAccessibilityVotes] = useState(0);
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [mapURL, setMapURL] = useState("");
  const [zip, setZIP] = useState("");

  const [error, setError] = useState("");

  const params = new URLSearchParams(window.location.search);
  const id = params.get("resource_id");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        await axios.get(`http://localhost:3001/resource/${id}`).then((res) => {
          console.log("res: ", res.data.ratings.printer);
          setTitle(res.data.name);
          setAddress(res.data.address);
          setZIP(res.data.zip);
          setDescription(res.data.description);

          // replacing spaces with %20
          setWebsite(res.data.website.replaceAll(" ", "%20"));
          setMapURL(res.data.mapUrl.replaceAll(" ", "%20"));
          setPrinterVotes(res.data.ratings.printer);
          setWifiVotes(res.data.ratings.network);
          setQuietVotes(res.data.ratings.quiet);
          setAccessibilityVotes(res.data.ratings.accessibility);
        });
      } catch (err) {
        console.error(err);
        setError(err.response.data.message);
      }
    };
    fetchResults();
  }, []);

  async function sendVote(dir, type) {

    let data = {
      direction: dir,
      type: type
    };
    
    let res = await axios.post(`http://localhost:3001/resource/${id}/vote`, data);
    if(type === 'printer'){
        if(dir === 'down'){
          setPrinterVotes(printerVotes - 1);
        } else {
          setPrinterVotes(printerVotes + 1);
        }
    } else if(type === 'wifi'){
        if(dir === 'down'){
          setWifiVotes(wifiVotes - 1);
        } else {
          setWifiVotes(wifiVotes + 1)
        }
    } else if(type === 'study'){
        if(dir === 'down'){
          setQuietVotes(quietVotes - 1);
        } else {
          setQuietVotes(quietVotes + 1);
        }
    } else if(type === 'accessible'){
        if(dir === 'down'){
          setAccessibilityVotes(accessibilityVotes - 1);
        } else {
          setAccessibilityVotes(accessibilityVotes + 1);
        }
    }
  }

  return (
    <div>
      <img src={logo} className="more-logo"></img>
      <div className="more-container">
        <div
          className="error-text"
          style={{ display: error !== "" ? "block" : "none" }}
        >
          Error: {error}
        </div>

        {/* embedded map  */}
        <div
          className="more-map"
          style={{ display: error !== "" ? "none" : "block" }}
        >
          <p id="zip-code"> Resource in: {zip} </p>
          <iframe
            src={mapURL}
            width="500"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* text next to map */}
        <div
          className="more-details"
          style={{ display: error !== "" ? "none" : "block" }}
        >
          <h2 id="title">
            {" "}
            {title}{" "}
            <a href={website}>
              <img src={blackGlobe} className="website-link"></img>
            </a>
          </h2>
          <p id="location"> {address} </p>
          <p id="blurb"> {description} </p>

          {/* these are the icon ratings underneath text */}
          <div className="icon-container">
            {/* printer */}
            <div className="icon-rating">
              {/* icon goes here */}
              <img src={printer} className="placeholder"></img>
              <div className="thumbs-container">
                {/* the upvotes and downvotes icons are here */}
                <button class = "voteBtn" onClick={(() => sendVote('up', 'printer'))}>
                  <img src={upvote} className="upvotes"></img>
                </button>

                <div>
                {/* the actual numbers are here  */}
                <h1 className="num"> {printerVotes} </h1>
                </div>


                <button class = "voteBtn" onClick={(() => sendVote('down', 'printer'))}>
                  <img src={upvote} className="downvotes"></img>
                </button>
              </div>
              {/* printer, wifi, quiet, accessibility */}
            </div>

            {/* wifi */}
            <div className="icon-rating">
              {/* icon goes here */}
              <img src={blueGlobe} className="placeholder"></img>
              <div className="thumbs-container">
                {/* the upvotes and downvotes icons are here */}
                <button class = "voteBtn" onClick={(() => sendVote('up', 'wifi'))}>
                  <img src={upvote} className="upvotes"></img>
                </button>

                {/* the actual numbers are here  */}
                <h1 className="num"> {wifiVotes} </h1>

                <button class = "voteBtn" onClick={(() => sendVote('down', 'wifi'))}>
                  <img src={upvote} className="downvotes"></img>
                </button>
              </div>

            </div>

            {/* silence */}
            <div className="icon-rating">
              {/* icon goes here */}
              <img src={silence} className="placeholder"></img>
              <div className="thumbs-container">
                {/* the upvotes and downvotes icons are here */}
                  <button class = "voteBtn" onClick={(() => sendVote('up', 'study'))}>
                    <img src={upvote} className="upvotes"></img>
                  </button>

                  {/* the actual numbers are here  */}
                  <h1 className="num"> {quietVotes} </h1>

                  <button class = "voteBtn" onClick={(() => sendVote('down', 'study'))}>
                    <img src={upvote} className="downvotes"></img>
                  </button>
              </div>

            </div>

            {/* accessibility */}
            <div className="icon-rating">
              {/* icon goes here */}
              <img src={wheelchair} className="placeholder"></img>
              <div className="thumbs-container">
                {/* the upvotes and downvotes icons are here */}
                <button class = "voteBtn" onClick={(() => sendVote('up', 'accessible'))}>
                    <img src={upvote} className="upvotes"></img>
                  </button>

                  {/* the actual numbers are here  */}
                  <h1 className="num"> {accessibilityVotes} </h1>

                  <button class = "voteBtn" onClick={(() => sendVote('down', 'accessible'))}>
                    <img src={upvote} className="downvotes"></img>
                  </button>
              </div>
            </div>
          </div>
          <Comments currentUserId={1}/>
        </div>
      </div>
    </div>
  );
}

export default More;
