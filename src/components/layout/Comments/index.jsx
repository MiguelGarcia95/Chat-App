import React from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment/';
import './style.css';

const displayComments = (props) => {
  console.log(props.comments)
}

const Comments = (props) => {
  return (
    <section className="comments">
      <Comment />
      {displayComments(props)}
    </section>
  )
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired
}

export default Comments;