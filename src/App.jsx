import React from 'react';

import Introduction from './components/Introduction';
import ContactLinks from './components/ContactLinks';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Languages from './components/Languages';

function App() {
  

  return (
    <>
      <div className="App">
        <Introduction />
        <ContactLinks />
        <Experience/>
        <Skills/>
        <Hobbies/>
        <Languages/>
        {/* <Switch>
          <Route path="/experience" component={Experience} />
          <Route path="/skills" component={Skills} />
          <Route path="/hobbies" component={Hobbies} />
          <Route path="/languages" component={Languages} />
        </Switch> */}
      </div>
    </>
  )
}

export default App
