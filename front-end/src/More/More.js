import React, {useEffect, useState} from 'react';
import '../More/More.css';
import axios from "axios";

import logo from '../More/img/study-buddy-logo.png'
import upvote from '../More/img/upvote.png';
import printer from '../More/img/printer.png';
import blackGlobe from '../More/img/black_globe.png';
import blueGlobe from '../More/img/blue_globe.png';
import silence from '../More/img/silence.png'
import wheelchair from '../More/img/wheelchair.png';

function More() {
	const [printerUpVotes, setPrinterUpVotes] = useState(0);
	const [printerDownVotes, setPrinterDownVotes] = useState(0);
	const [wifiUpVotes, setWifiUpVotes] = useState(0);
	const [wifiDownVotes, setWifiDownVotes] = useState(0);
	const [quietUpVotes, setQuietUpVotes] = useState(0);
	const [quietDownVotes, setQuietDownVotes] = useState(0);
	const [accessibilityUpVotes, setAccessibilityUpVotes] = useState(0);
	const [accessibilityDownVotes, setAccessibilityDownVotes] = useState(0);
	const [title, setTitle] = useState('');
	const [address, setAddress] = useState('');
	const [description, setDescription] = useState('');
	const [mapURL, setMapURL] = useState('');
	const zipCode = 11201;
	const id = 1

	const params = new URLSearchParams(window.location.search);

	useEffect(() => {
		const fetchResults = async () => {
		try {
			console.log('zip: ' + params.get('query'));
			await axios
			.get(`http://localhost:3001/resource?id=${id}&zipcode=${zipCode}`)
			.then(res => {
				console.log(res.data);
				setPrinterUpVotes(1);
				setPrinterDownVotes(1);
				setWifiUpVotes(1);
				setWifiDownVotes(1);
				setQuietUpVotes(1);
				setQuietDownVotes(1);
				setAccessibilityUpVotes(1);
				setAccessibilityDownVotes(1);
				setTitle(res.data.name);
				setAddress(res.data.address);
				setDescription(res.data.description);

				// replacing spaces with percents
				setMapURL(res.data.mapUrl.replaceAll(' ', '%'));
				console.log(res.data.mapUrl.replaceAll(' ', '%'))
			});
		} catch (err) {
			console.error(err);
		}
		}
		fetchResults();
	}, []);

	return (
		<html>
		<head> 
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		</head>
		<img src={logo} className='more-logo'></img>
		<div className='more-container'>

			{/* embedded map  */}
			<div className='more-map'>
				<p id='zip-code'> Resources in: {zipCode} </p>
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
			<div className='more-details'>
				<h2 id='title'> {title} <a href='https://www.instagram.com/elbarristanyc/?hl=en'><img src={blackGlobe} className='insta-link'></img></a></h2>
				<p id='location'> {address} </p>
				<p id='blurb'> {description} </p>

				{/* these are the icon ratings underneath text */}
				<div className='icon-container'>

						{/* printer */}
						<div className='icon-rating'>
								{/* icon goes here */}
								<img src={printer} className='placeholder'></img>
								<div className='thumbs-container'>
									{/* the upvotes and downvotes icons are here */}
									<img src={upvote} className='upvotes'></img>
									<img src={upvote} className='downvotes'></img>
								</div>
								{/* printer, wifi, quiet, accessibility */}
								{/* the actual numbers are here  */}
								<div className='thumbs-container'>
									<h1 className='num'> {printerUpVotes} </h1>
									<h1 className='num'> {printerDownVotes} </h1>
								</div>
						</div>

						{/* wifi */}
						<div className='icon-rating'>
								{/* icon goes here */}
								<img src={blueGlobe} className='placeholder'></img>
								<div className='thumbs-container'>
									{/* the upvotes and downvotes icons are here */}
									<img src={upvote} className='upvotes'></img>
									<img src={upvote} className='downvotes'></img>
								</div>
								{/* the actual numbers are here  */}
								<div className='thumbs-container'>
									<h1 className='num'> {wifiUpVotes} </h1>
									<h1 className='num'> {wifiDownVotes} </h1>
								</div>
						</div>
						
						{/* silence */}
						<div className='icon-rating'>
								{/* icon goes here */}
								<img src={silence} className='placeholder'></img>
								<div className='thumbs-container'>
									{/* the upvotes and downvotes icons are here */}
									<img src={upvote} className='upvotes'></img>
									<img src={upvote} className='downvotes'></img>
								</div>
								{/* the actual numbers are here  */}
								<div className='thumbs-container'>
									<h1 className='num'> {quietUpVotes} </h1>
									<h1 className='num'> {quietDownVotes} </h1>
								</div>
						</div>
						
						{/* accessibility */}
						<div className='icon-rating'>
								{/* icon goes here */}
								<img src={wheelchair} className='placeholder'></img>
								<div className='thumbs-container'>
									{/* the upvotes and downvotes icons are here */}
									<img src={upvote} className='upvotes'></img>
									<img src={upvote} className='downvotes'></img>
								</div>
								 {/* the actual numbers are here  */}
								<div className='thumbs-container'>
									<h1 className='num'> {accessibilityUpVotes} </h1>
									<h1 className='num'> {accessibilityDownVotes} </h1>
								</div>
						</div>
					</div>
				</div>
			</div>
			</html>
	);
}

export default More;