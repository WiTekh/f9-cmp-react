import React from 'react';
const { TC } = require('terraform-cloud');

function App() {
  const value = 'World';
  const scaleOut = () => {
    console.log("Terraform apply here ...");
  };
  return (
  <div>
    Flambant 9 - CMP
    <button type="button" onclick={scaleOut}>SCALE OUUUUT</button>
  </div>);

}

export default App;
