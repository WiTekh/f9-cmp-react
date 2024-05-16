import React from 'react';
import { Terraformer } from "@terraform-js/terraform-js";

async function executeTerraformApply() {
    console.log("prout prout dans la soupe");
    /*
    const config = {
        logLevel: 'INFO',         // supported values: TRACE, DEBUG, INFO, WARN or ERROR. Default is INFO
        workspace: 'default',     // workspace name if you want to create a new workspace. Default workspace is 'default'
        pluginDirectory: null,    // directory where you want to install terraform provider plugin
        templateDirectory: '.',   // directory where terraform templates are present
        workingDirectory: '.'     // directory where tf state file will be generated
      }
      
      const tf = new Terraformer(config);
      
      tf.apply().then().catch((err)=>{
        console.log(err);
      });*/
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
