import React from 'react';

const App = () => {
  return (
    <div>
      <User name={"Ichiro"} age={10}/>
      <User name={'Jiro'} age={8}/>
      <User name={'Saburo'} age={6}/>
      <User name={'Shiro'} age={4}/>
      <User name={'Goro'} age={2}/>
    </div>
  );
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

export default App;
