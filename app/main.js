import React from 'react';
import ReactDOM from 'react-dom';

class CommentBox extends React.Component{
  render() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
        <Box />
      </div>
    );
  }
}

class Box extends React.Component{
  render() {
    return (
      <div className="box">
        Hello, world! I am a Box.
      </div>
    );
  }
}

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
