import React, { useEffect, useState } from "react";
import "../More/More.css";
import axios from "axios";

import logo from "../More/img/study-buddy-logo.png";
import upvote from "../More/img/upvote.png";
import printer from "../More/img/printer.png";
import blackGlobe from "../More/img/black_globe.png";
import blueGlobe from "../More/img/blue_globe.png";
import silence from "../More/img/silence.png";
import wheelchair from "../More/img/wheelchair.png";

function More() {
  const [printerUpVotes, setPrinterUpVotes] = useState(0);
  const [printerDownVotes, setPrinterDownVotes] = useState(0);
  const [wifiUpVotes, setWifiUpVotes] = useState(0);
  const [wifiDownVotes, setWifiDownVotes] = useState(0);
  const [quietUpVotes, setQuietUpVotes] = useState(0);
  const [quietDownVotes, setQuietDownVotes] = useState(0);
  const [accessibilityUpVotes, setAccessibilityUpVotes] = useState(0);
  const [accessibilityDownVotes, setAccessibilityDownVotes] = useState(0);
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
          console.log(res.data);
          setTitle(res.data.name);
          setAddress(res.data.address);
          setZIP(res.data.zip);
          setDescription(res.data.description);
          // replacing spaces with %20
          setWebsite(res.data.website.replaceAll(" ", "%20"));
          setMapURL(res.data.mapUrl.replaceAll(" ", "%20"));
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
    console.log(res.data);
    
    console.log("-----  " + type + "  --------");

    if(type == 'printer'){
        if(dir == 'down'){
          setPrinterDownVotes(printerDownVotes + 1);
        } else {
          setPrinterUpVotes(printerUpVotes + 1);
        }
    } else if(type == 'wifi'){
        if(dir == 'down'){
          setWifiDownVotes(wifiDownVotes + 1);
        } else {
          setWifiUpVotes(wifiUpVotes + 1)
        }
    } else if(type == 'study'){
        if(dir == 'down'){
          setQuietDownVotes(quietDownVotes + 1);
        } else {
          setQuietUpVotes(quietUpVotes + 1);
        }
    } else if(type == 'accessible'){
        if(dir == 'down'){
          setAccessibilityDownVotes(accessibilityDownVotes + 1);
        } else {
          setAccessibilityUpVotes(accessibilityUpVotes + 1);
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
                <button onClick={(() => sendVote('up', 'printer'))}>
                  <img src={upvote} className="upvotes"></img>
                </button>

                <button onClick={(() => sendVote('down', 'printer'))}>
                  <img src={upvote} className="downvotes"></img>
                </button>
              </div>
              {/* printer, wifi, quiet, accessibility */}
              {/* the actual numbers are here  */}
              <div className="thumbs-container">
                <h1 className="num"> {printerUpVotes} </h1>
                <h1 className="num"> {printerDownVotes} </h1>
              </div>
            </div>

            {/* wifi */}
            <div className="icon-rating">
              {/* icon goes here */}
              <img src={blueGlobe} className="placeholder"></img>
              <div className="thumbs-container">
                {/* the upvotes and downvotes icons are here */}
                <button onClick={(() => sendVote('up', 'wifi'))}>
                  <img src={upvote} className="upvotes"></img>
                </button>

                <button onClick={(() => sendVote('down', 'wifi'))}>
                  <img src={upvote} className="downvotes"></img>
                </button>
              </div>
              {/* the actual numbers are here  */}
              <div className="thumbs-container">
                <h1 className="num"> {wifiUpVotes} </h1>
                <h1 className="num"> {wifiDownVotes} </h1>
              </div>
            </div>

            {/* silence */}
            <div className="icon-rating">
              {/* icon goes here */}
              <img src={silence} className="placeholder"></img>
              <div className="thumbs-container">
                {/* the upvotes and downvotes icons are here */}
                  <button onClick={(() => sendVote('up', 'study'))}>
                    <img src={upvote} className="upvotes"></img>
                  </button>

                  <button onClick={(() => sendVote('down', 'study'))}>
                    <img src={upvote} className="downvotes"></img>
                  </button>
              </div>
              {/* the actual numbers are here  */}
              <div className="thumbs-container">
                <h1 className="num"> {quietUpVotes} </h1>
                <h1 className="num"> {quietDownVotes} </h1>
              </div>
            </div>

            {/* accessibility */}
            <div className="icon-rating">
              {/* icon goes here */}
              <img src={wheelchair} className="placeholder"></img>
              <div className="thumbs-container">
                {/* the upvotes and downvotes icons are here */}
                <button onClick={(() => sendVote('up', 'accessible'))}>
                    <img src={upvote} className="upvotes"></img>
                  </button>

                  <button onClick={(() => sendVote('down', 'accessible'))}>
                    <img src={upvote} className="downvotes"></img>
                  </button>
              </div>
              {/* the actual numbers are here  */}
              <div className="thumbs-container">
                <h1 className="num"> {accessibilityUpVotes} </h1>
                <h1 className="num"> {accessibilityDownVotes} </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default More;
