import React from 'react';

const UserOutput = function (props) {
  return(
    <div className="UserOutput">
  	<p>Nome:{props.nome}</p>
		<p>Sobrenome:{props.sobrenome}</p>
    </div>
    );
}

export default UserOutput;
