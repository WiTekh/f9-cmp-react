import React from 'react';
import Button from 'react-native';

const { TC } = require('terraform-cloud');

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
      <Button
        title="SCALE OUUUUT"
        onPress={onClick()}
      />
    </body>
  </div>);

}

export default App;
