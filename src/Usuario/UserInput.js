import React, { Component } from 'react';

class UserInput extends Component {
	render(){
   return(
     <div id="NomeInput">
     <p>Nome </p>
     <input type="text" name="nomeInput"/>
     <p>Sobrenome</p>
     <input type="text" name="sobrenomeInput"/>
     </div>
     );
	}
}

export default UserInput;