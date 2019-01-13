import React from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment/';
import './style.css';

const displayComments = ({comments}) => {
  if (comments.length > 0) {
    return comments.map(comment => <Comment key={comment.id} comment={comment.comment} />)
  }
}

const Comments = (props) => {
  return (
    <section className="comments">
      {displayComments(props)}
    </section>
  )
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired
}

export default Comments;