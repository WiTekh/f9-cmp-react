import React from 'react';
const { TerraformCloud } = require('terraform-cloud');

async function executeTerraformApply() {
    try {
        const { Account, Plans, Runs } = new TerraformCloud('terraform-api-token');

        // Perform an action over a run ex: (apply, cancel, discard, force-cancel, force-execute)
        Runs.action('apply', 'run-id', { data: { comment: 'apply run' } }).then(() => {
  // handle run action
        }) 

        console.log('Terraform apply completed successfully!');
    } catch (error) {
        console.error('Error executing Terraform apply:', error);
    }
}
class ButtonComponent extends React.Component {
  handleClick = () => {
    console.log("Terraform here");
    executeTerraformApply();
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
