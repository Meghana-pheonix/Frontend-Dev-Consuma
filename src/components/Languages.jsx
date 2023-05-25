import React, { useState } from 'react';

function Languages() {
  const [languages, setLanguages] = useState(['English']);

  const handleAddLanguage = () => {
    setLanguages([...languages, '']);
  };

  const handleDeleteLanguage = (index) => {
    const updatedLanguages = languages.filter((_, i) => i !== index);
    setLanguages(updatedLanguages);
  };

  const handleLanguageChange = (e, index) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index] = e.target.value;
    setLanguages(updatedLanguages);
  };

  return (
    <section id="languages">
      <h2>Languages</h2>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <input
              type="text"
              value={language}
              onChange={(e) => handleLanguageChange(e, index)}
            />
            {index !== 0 && (
              <button onClick={() => handleDeleteLanguage(index)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
      <button onClick={handleAddLanguage}>Add Language</button>
    </section>
  );
}

export default Languages;
