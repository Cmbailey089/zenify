import React from 'react'
import './Breathing.css';
import backgroundImg from '../Breathing/breathing.jpg';

const Breathing = () => {
  return (
    <div className="tips-container" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <h1 className="breathing-heading">Believe it or not, theres a lot of different ways you can breath, to learn more read below
      </h1>
      <div className="tips-list">
        <ul className="tip-items">
          <li className="tip-item">
            <div className="tip-box">
            <h3> Deep Breathing: </h3>
              <p>Take slow, deep breaths by inhaling deeply through your nose, filling your lungs with air, and exhaling slowly through your mouth.
                 Focus on extending the exhale and allow your body to relax with each breath.</p>
            </div>
          </li>
          <li className="tip-item">
            <div className="tip-box">
              <h3>Diaphragmatic Breathing: </h3>
              <p>Place one hand on your abdomen and breathe deeply, allowing your diaphragm to expand as you inhale.
                 Feel your belly rise with each breath and exhale fully, releasing tension and promoting relaxation.</p>
            </div>
          </li>
          <li className="tip-item">
            <div className="tip-box">
              <h3>Box Breathing: </h3>
              <p> Inhale deeply through your nose for a count of 4, hold your breath for a count of 4, exhale slowly through your mouth for a count of 4, and hold your breath again for a count of 4. 
                Repeat this pattern several times, visualizing a box shape with each breath.</p>
            </div>
          </li>
          <li className="tip-item">
            <div className="tip-box">
              <h3>4-7-8 Breathing:</h3>
              <p>  Inhale quietly through your nose to a mental count of 4, hold your breath for a count of 7, and exhale forcefully through your mouth to a count of 8.
                 This technique can help calm the nervous system and promote relaxation.</p>
            </div>
          </li>
          <li className="tip-item">
            <div className="tip-box">
              <h3>Alternate Nostril Breathing: </h3>
              <p> Close your right nostril with your right thumb and inhale deeply through your left nostril. Then, close your left nostril with your ring finger and exhale through your right nostril. 
                Continue this pattern, alternating nostrils with each breath.</p>
            </div>
          </li>
          <li className="tip-item">
            <div className="tip-box">
              <h3>Resonant or Coherent Breathing:  </h3>
              <p>Resonant or Coherent Breathing: Breathe in and out slowly and evenly, aiming for a regular breathing rate of about 5-6 breaths per minute. This can be achieved by 
                inhaling for a count of 5 and exhaling for a count of 5, maintaining a consistent rhythm.</p>
            </div>
          </li>
          <li className="tip-item">
            <div className="tip-box">
              <h3>Sama Vritti or Equal Breathing: </h3>
              <p>Inhale and exhale for an equal count. Start with a count of 4, and as you become comfortable, gradually 
                increase the count to 6 or 8. This technique helps bring balance to the breath and calms the mind.</p>
            </div>
          </li>
          <li className="tip-item">
            <div className="tip-box">
              <h3>4-4-6-2 Breathing: </h3>
              <p>Inhale slowly through your nose for a count of 4, hold your breath for a count of 4, exhale slowly through your mouth for a count of 6, and hold your breath again for a count of 2.
                 Repeat this pattern, adjusting the counts to find a comfortable rhythm.</p>
            </div>
          </li>
          {/* Add more tips here */}
        </ul>
      </div>
      <p className="tips-info">
      Remember, breathing techniques are most effective when practiced regularly. Find a quiet and comfortable place to practice, and incorporate these techniques into your
       daily routine or whenever you feel the need to calm your mind and relieve stress.
      </p>
    </div>
  )
}

export default Breathing