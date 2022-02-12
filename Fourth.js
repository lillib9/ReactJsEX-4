import React from 'react';
import Faker from 'faker';

function Fourth(){
    return(
        
        <div className="ui cards">
        <div className="card">
    <div className="content">
      <img className="right floated mini ui image" src= {Faker.image.image()} alt="text#"/>
      <div className="header">
        Jenny Hess
      </div>
      <div className="meta">
        New Member
      </div>
      <div className="description">
        Jenny wants to add you to the group <b>best friends</b>
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
</div>

        
        
    )
}
export default Fourth;