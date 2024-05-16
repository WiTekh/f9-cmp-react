import React from 'react';
const { TerraformCloud } = require('terraform-cloud');

async function executeTerraformApply() {
    try {
        // Initialize TerraformCloud with your API token
        const terraformCloud = new TerraformCloud({
            token: 'your-terraform-cloud-api-token',
        });

        // Get your organization and workspace IDs
        const orgName = 'your-organization-name';
        const workspaceName = 'your-workspace-name';

        const organization = await terraformCloud.getOrganizationByName(orgName);
        const workspace = await terraformCloud.getWorkspaceByName(organization.id, workspaceName);

        // Trigger a plan and apply
        const run = await terraformCloud.apply(organization.id, workspace.id);

        // Wait for the run to complete
        await terraformCloud.waitForRunCompletion(organization.id, workspace.id, run.id);

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
