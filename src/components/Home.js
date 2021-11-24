import React from "react";
import { FlowerLotus } from "phosphor-react";

const Home = () => {
	return (
		<div className='landingpage'>
			<div className='landingpage_partone'>
			<p><FlowerLotus size={48} />Plantiful</p>
				<h1>Have Plantiful Plants <FlowerLotus size={16} /> </h1>
				<p>
					We help you keep your plants alive by sending helpful reminders
					straight to your inbox.
				</p>
				<button>Find out more</button>
			</div>
			<div className='landingpage_parttwo'>
				<h2>We can help you be the perfect plant parent</h2>
				<p>Just follow these simple steps!</p>
				<div className='box_one'>
					<p className='box_title'>SEARCH</p>
					<p>Search our inventory and find the plants you own</p>
				</div>
				<div className='box_two'>
					<p className='box_title'>ADD</p>
					<p>Add your plant collection to your customisable dashboard</p>
				</div>
				<div className='box_three'>
					<p className='box_title'>SCHEDULE</p>
					<p>
						Schedule reminders for each plant and we will send you a
						notification when it is thirsty
					</p>
				</div>
				<div className='box_four'>
					<p className='box_title'>LEARN</p>
					<p>Learn handy tips and tricks to help best care for your plants. </p>
				</div>
			</div>
            <footer>
                <div className="footer_partone">
                <p>Get in touch</p>
                <a href="mailto:hello@plantiful.com">Email Us</a>  
                </div>
                <div className="footer_parttwo">
                <p>@plantiful_plants</p>
                <p>Insta: Plantiful</p>
                <p>Facebook: Plantiful_Plants</p>
                </div>
                <div className="footer_partthree">
                <p>Log in (link)</p>
                <p>Plants (link)</p>
                <p>About (link)</p>
                </div>
            </footer>
		</div>
	);
};

export default Home;
