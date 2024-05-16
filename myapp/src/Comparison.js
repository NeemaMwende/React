import React, { useState } from 'react';

// Higher Order Component (HOC)
const withColorChangeHOC = (WrappedComponent) => {
  return (props) => {
    const [color, setColor] = useState('red');

    const handleColorChange = () => {
      setColor(color === 'red' ? 'blue' : 'red');
    };

    return <WrappedComponent {...props} color={color} changeColor={handleColorChange} />;
  };
};

// Component using HOC
const BoxWithColorChangeHOC = withColorChangeHOC(({ color, changeColor }) => {
  return (
    <div style={{ backgroundColor: color, width: '100px', height: '100px' }} onClick={changeColor}>
      Click me (HOC)
    </div>
  );
});

// Render Props Component
const BoxWithColorChangeRP = ({ children }) => {
  const [color, setColor] = useState('green');

  const handleColorChange = () => {
    setColor(color === 'green' ? 'yellow' : 'green');
  };

  return children({ color, changeColor: handleColorChange });
};

// Component using Render Props
const App = () => {
  return (
    <div>
      <h2>Higher Order Component (HOC)</h2>
      <BoxWithColorChangeHOC />
      <h2>Render Props</h2>
      <BoxWithColorChangeRP>
        {({ color, changeColor }) => (
          <div style={{ backgroundColor: color, width: '100px', height: '100px' }} onClick={changeColor}>
            Click me (Render Props)
          </div>
        )}
      </BoxWithColorChangeRP>
    </div>
  );
};

export default App;
