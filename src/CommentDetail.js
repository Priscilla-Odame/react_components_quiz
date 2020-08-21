import React,{Component} from "react";

// convert to class-based component
class CommentDetail extends Component{
  render(){
    const {img,author,timeAgo,commentText} = this.props
      return (
        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src={img} />
          </a>
          <div className="content">
            <a href="/" className="author">
              {author}
            </a>
            <div className="metadata">
              <span className="date">{timeAgo}</span>
            </div>
            <div className="text">{commentText}</div>
          </div>
        </div>
      );
    };
  };

export default CommentDetail;
