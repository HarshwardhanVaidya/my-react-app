import React from 'react'
import Navbar from './StylingComponent';
import UseStateHook from './hooks/UseStateHook';
import UseReducer from './advancehooks/UseReducer';
import MyButton from './otherstuff/MyButton';
import global.css;
const App = () => {
  return (
    <div>
      <section>
      <h1>LEARN REACT</h1>
      <h3>THIS IS REACT SELF LEARNING COURSE</h3>
      <p>....and i am harshawardhan starting to become a self tought react engineer..!! </p>
      </section>
      {/* <Navbar/>
      <UseStateHook/> */}
      {/* <UseReducer/> */}

      <MyButton/>
    </div>
  );
}

export default App
