import React from 'react';
import './More.css';

import logo from './img/study-buddy-logo.png'
import upvote from './img/upvote.png';
import printer from './img/printer.png';
import blackGlobe from './img/black_globe.png';
import blueGlobe from './img/blue_globe.png';
import silence from './img/silence.png'
import wheelchair from './img/wheelchair.png';

function More() {
	return (
		<html>
		<head> 
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		</head>
		<img src={logo} className='logo'></img>
		<div className='container'>

			{/* embedded map  */}
			<div className='map'>
				<h3> Resources in: 10029 </h3>
				<iframe 
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.3109102922936!2d-73.94168398458802!3d40.79916114021546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f70423376a7b%3A0x30a29fe36645519f!2sEl%20Barrista%20cafe!5e0!3m2!1sen!2sus!4v1666538623209!5m2!1sen!2sus" 
					width="600" 
					height="450" 
					style={{ border: "0" }}
					allowfullscreen="" 
					loading="lazy" 
					referrerpolicy="no-referrer-when-downgrade"
					></iframe>
			</div>

			{/* text next to map */}
			<div className='details'>
				<h2 id='title'> El Barrista Cafe <a href='https://www.instagram.com/elbarristanyc/?hl=en'><img src={blackGlobe} className='insta-link'></img></a></h2>
				<p> New York, NY 0.5 miles away</p>
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
					labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
					nisi ut aliquip ex ea commodo consequat.
				</p>

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
								{/* the actual numbers are here  */}
								<div className='thumbs-container'>
									<h1>100</h1>
									<h1>0</h1>
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
									<h1>56</h1>
									<h1>24</h1>
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
									<h1>10</h1>
									<h1>6</h1>
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
									<h1 className='ratings'>3</h1>
									<h1 className='ratings'>4</h1>
								</div>
						</div>
					</div>
				</div>
			</div>
			</html>
	);
}

export default More;