import React from 'react';
const { TerraformCloud } = require('terraform-cloud');

class ButtonComponent extends React.Component {
  handleClick = () => {
    console.log("Terraform here");
    // Configurer l'accès à Terraform Cloud
    const terraformCloud = new TerraformCloud({
        organization: 'your-organization',
        workspace: 'your-workspace',
        apiToken: 'your-api-token',
    });
  
  // Appliquer les modifications
  terraformCloud.apply('auto-approve')
    .then((result) => {
      console.log('Changements appliqués avec succès:', result);
    })
    .catch((error) => {
      console.error('Erreur lors de l\'application des changements:', error);
    });
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
