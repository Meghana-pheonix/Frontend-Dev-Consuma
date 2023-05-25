import React from 'react';
import pic from "../assets/meghana.jpg"

function Introduction() {
  return (
    <section id="introduction">
      <h1>Meghana UR</h1>
      <h3>Student</h3>
      <img class="image-edit" src={pic} alt="Your Picture" />
      <p>I am Meghana. I am a very happy-go-lucky person who loves to travel and have lots of fun and adventures.</p>
    </section>
  );
}

export default Introduction;
