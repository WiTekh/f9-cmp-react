import React from 'react';
import ButtonComponent from './Button';

function onClick(){
  console.log("Terraform here")
}
function App() {
  return (
  <div>
    <header>
      <h1>Flambant 9 - CMP</h1>
    </header>
    <body>
      <ButtonComponent />
    </body>
  </div>);

}

export default App;
