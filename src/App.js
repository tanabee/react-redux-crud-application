import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: 'Ichiro', age: 10 },
    { name: 'Jiro', age: 8 },
    { name: 'Saburo', age: 6 },
    { name: 'Shiro', age: 4 },
    { name: 'Goro' },
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

User.defaultProps = {
  age: 0
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age : PropTypes.number
}

export default App;
