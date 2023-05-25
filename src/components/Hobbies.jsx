import React, { useState } from 'react';

function Hobbies() {
  const [hobbies, setHobbies] = useState(['Singing', 'Throwball', 'Reading novels','Badminton','Guitar']);

  const handleAddHobby = () => {
    setHobbies([...hobbies, '']);
  };

  const handleDeleteHobby = (index) => {
    const updatedHobbies = hobbies.filter((_, i) => i !== index);
    setHobbies(updatedHobbies);
  };

  const handleHobbyChange = (e, index) => {
    const updatedHobbies = [...hobbies];
    updatedHobbies[index] = e.target.value;
    setHobbies(updatedHobbies);
  };

  return (
    <section id="hobbies">
      <h2>Hobbies</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>
            <input
              type="text"
              value={hobby}
              onChange={(e) => handleHobbyChange(e, index)}
            />
            {index !== 0 && (
              <button onClick={() => handleDeleteHobby(index)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
      <button onClick={handleAddHobby}>Add Hobby</button>
    </section>
  );
}

export default Hobbies;
