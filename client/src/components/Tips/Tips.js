import React from 'react';
import './Tips.css';
import backgroundImg from '../Tips/black.jpg';

const Tips = () => {
  return (
    <div className="tips-container" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <h1 className="tips-heading">Tips to help Manage Stress:</h1>
      <div className="tips-list">
        <ul className="tip-items">
          <li className="tip-item">
            <div className="tip-box">
              <h3>Tip 1</h3>
              <p>Practice deep breathing exercises: Deep breathing can help reduce stress and
                 promote relaxation. Take slow, deep breaths and focus on your breath to calm
                  your mind and body.</p>
            </div>
          </li>
          <li className="tip-item">
            <div className="tip-box">
              <h3>Tip 2</h3>
              <p>Engage in regular physical activity: Exercise is a great way to relieve stress.
                 It helps release endorphins, which are natural mood boosters. Find activities you enjoy,
                  such as walking, yoga, or dancing, and incorporate them into your routine.</p>
            </div>
          </li>
          <li className="tip-item">
            <div className="tip-box">
              <h3>Tip 3</h3>
              <p>Prioritize self-care: Make time for activities that bring you joy and relaxation.
                 This can include hobbies, reading, taking baths, or listening to music.
                  Taking care of yourself is essential for managing stress.</p>
            </div>
          </li>
          <li className="tip-item">
            <div className="tip-box">
              <h3>Tip 4</h3>
              <p>Practice mindfulness and meditation: Mindfulness involves being fully present 
                in the moment and accepting it without judgment. Meditation can help calm your 
                mind and reduce stress. There are various mindfulness and meditation techniques available,
                 such as guided meditations or mindful breathing exercises.</p>
            </div>
          </li>
          <li className="tip-item">
            <div className="tip-box">
              <h3>Tip 5</h3>
              <p>Maintain a healthy work-life balance: Establish boundaries between work and personal life.
                 Set realistic goals and prioritize tasks. Take breaks and disconnect from work during 
                 non-working hours to recharge and avoid burnout.</p>
            </div>
          </li>
          <li className="tip-item">
            <div className="tip-box">
              <h3>Tip 6</h3>
              <p>Seek support: Reach out to friends, family, or a support network when you need 
                someone to talk to. Sharing your feelings and concerns can help alleviate stress.
                 Consider seeking professional help from a therapist or counselor if you feel 
                 overwhelmed or unable to cope with stress on your own.</p>
            </div>
          </li>
          <li className="tip-item">
            <div className="tip-box">
              <h3>Tip 7</h3>
              <p>Practice time management: Plan and organize your tasks to reduce stress.
                Break larger tasks into smaller, manageable ones. Prioritize your responsibilities 
                and allocate time for relaxation and self-care.</p>
            </div>
          </li>
          <li className="tip-item">
            <div className="tip-box">
              <h3>Tip 8</h3>
              <p>Get enough restful sleep: Sleep plays a vital role in managing stress. 
                Establish a regular sleep routine and create a relaxing sleep environment. 
                Aim for 7-8 hours of quality sleep each night to rejuvenate your mind and body.</p>
            </div>
          </li>
          {/* Add more tips here */}
        </ul>
      </div>
      <p className="tips-info">
        Remember, everyone's experience with stress is unique, so it's essential to find coping 
        strategies that work best for you. Experiment with different techniques and prioritize 
        self-care to manage stress effectively.
      </p>
    </div>
  );
};

export default Tips;
