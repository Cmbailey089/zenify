import React from 'react';
import './About.css';
// import backgroundImg from '../Images/lavander2.jpg';

const FAQ = () => {
	return (
		
		<div className="faq-container">
			<div className="background">
        {/* <img src={backgroundImg} alt="Background" /> */}
      </div>
			<h2>Frequently Asked Questions</h2>
			{/* <div className="faq-item">
				<h3 className="question">Questionnaire about stress level?</h3>
				<p className="answer">
					If you have time or if you want to delve deeper into understanding your stress levels,
					we offer a questionnaire that can help assess and evaluate your stress level.
					This questionnaire consists of a series of questions that you can answer to gain insights into your stress levels.
				</p>
			</div> */}
			<div className="faq-item">
				<h3 className="question">How can I reduce stress in my daily life?</h3>
				<p className="answer">
					There are several effective ways to reduce stress in your daily life, such as practicing relaxation techniques,
					engaging in regular physical activity, maintaining a healthy lifestyle, setting boundaries, and seeking support from loved ones or professionals.
				</p>
			</div>
			<div className="faq-item">
				<h3 className="question">What are some common symptoms of stress?</h3>
				<p className="answer">
					Common symptoms of stress include fatigue, irritability, difficulty concentrating, sleep disturbances, muscle tension, headaches, and changes in appetite.
				</p>
			</div>
			{/* Add more FAQs here */}
			<div className="faq-item">
				<h3 className="question">How often should I practice stress relief techniques?</h3>
				<p className="answer">
					It is recommended to practice stress relief techniques regularly, ideally on a daily basis, to experience their full benefits.
					Find a routine that works for you and integrate stress relief techniques into your daily life for long-term stress management.
				</p>
			</div>
			<div className="faq-item">
				<h3 className="question">Can stress have long-term effects on health?</h3>
				<p className="answer">
					Yes, prolonged or chronic stress can have adverse effects on health, including increased risk of various physical and mental health conditions,
					such as cardiovascular disease, depression, anxiety disorders, and weakened immune system.
					It is important to manage stress effectively to maintain overall well-being.
				</p>
			</div>
			{/* Add more FAQs here */}
		</div>
	);
};


const About = () => {
	return (
		<div className="about-container">
			<div className="about-heading">
				<h2>About</h2>
			</div>
			<div className="about-content">
				<div className="section">
					<h2 className="heading">What is Stress?</h2>
					<div>
						<p>
							Stress is a response within the body that is triggered by situational stressors or changes.
							It is an evolutionary tool to keep us alert to danger in order to survive.
							When a situation or circumstance changes, it can make us feel threatened.
						</p>
						<p>
							The nervous system releases stress hormones, such as cortisol and adrenaline, which trigger the fight-or-flight response.
							This leads to physical changes like increased heart rate, elevated blood pressure, muscle tension, and heightened senses.
							While stress is natural and necessary for human survival, excessive stress can have a negative impact on health.
						</p>
					</div>
					<h3>Tips on Stress Management</h3>
					<p>
						Our app is dedicated to helping individuals manage and reduce stress in their lives.
						Here are some effective tips on stress management that you can implement:
					</p>
					<ul>
						<li>Practice self-care and prioritize your well-being.</li>
						<li>Engage in regular physical activity and exercise.</li>
						<li>Adopt healthy coping mechanisms, such as journaling or talking to a trusted friend or therapist.</li>
						<li>Set realistic goals and expectations for yourself.</li>
						<li>Learn and practice relaxation techniques, such as deep breathing and mindfulness meditation.</li>
						<li>Establish healthy boundaries and learn to say no when necessary.</li>
						<li>Take breaks and engage in activities you enjoy.</li>
						<li>Get enough sleep and maintain a healthy sleep routine.</li>
					</ul>
				</div>
				<div className="section">
					<h3>Stress Relief Techniques</h3>
					<p>
						Our app provides a range of stress relief techniques to help you relax and unwind.
						Incorporate these techniques into your daily routine for a calming and rejuvenating experience:
					</p>
					<div className="techniques">
						<div className="technique">
							<h4>Breathing Exercises</h4>
							<p>
								Practice deep breathing exercises, such as diaphragmatic breathing or box breathing,
								to promote relaxation and reduce stress levels.
							</p>
						</div>
						<div className="technique">
							<h4>Meditation</h4>
							<p>
								Engage in meditation to calm the mind, improve focus, and cultivate a sense of inner peace.
								Choose from guided meditations, mindfulness practices, or loving-kindness meditations.
							</p>
						</div>
						<div className="technique">
							<h4>Relaxation Techniques</h4>
							<p>
								Explore various relaxation techniques, such as progressive muscle relaxation or guided imagery,
								to release tension, promote physical and mental relaxation, and restore balance.
							</p>
						</div>
					</div>
				</div>
			</div>
			<FAQ />
		</div>
	);
};

export default About;
