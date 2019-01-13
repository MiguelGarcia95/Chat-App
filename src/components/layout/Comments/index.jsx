import React from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment/';
import './style.css';

const Comments = (props) => {
  return (
    <section className="comments">
      <Comment />
      <Comment />
      <Comment />
    </section>
  )
}

Comments.propTypes = {
  
}

export default Comments;