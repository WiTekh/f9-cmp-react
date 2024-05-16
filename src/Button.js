import React from 'react';

class ButtonComponent extends React.Component {
  handleClick = () => {
    console.log("Terraform here");
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>SCALE OUT TA RACE LA PUTE</button>
      </div>
    );
  }
}

export default ButtonComponent;
