import React, {Component} from "react";

// Convert to class based component

class ApprovalCard extends Component{
  render(){
  const {children} = this.props
  return (
    <div className="ui card">
      <div className="content">{children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
  
}
};

export default ApprovalCard;
