import React from "react";

const Character = props => {
  const { name, imgURL, birth, death, race, realm, spouse} = props;  
  return (
        <div data-test="component-character">
          <h1 data-test="char-name">{name}</h1>  
          <img data-test="char-img">{imgURL}</img>
          <li data-test="char-list"></li>
          <li data-test="char-birth">{birth}</li>
          <li data-test="char-death">{death}</li>
          <li data-test="char-race">{race}</li>
          <li data-test="char-realm">{realm}</li>
          <li data-test="char-spouse">{spouse}</li>
       
        
        </div>
    )
}

export default Character;