import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Comment = ({comment}) => {
  console.log(comment)
  return (
    <section className="comment-container">
        <section className="avatar">
          <img src={comment.userAvatar} alt={comment.username} />
        </section>
        <section className="content">
          <section className="top">
            <section className="username"><p>{comment.username}</p></section>
            <section className="date"><p>Today @ 11:50 am</p></section>
          </section>
          <section className="bottom">
            <section className="comment">
              <p>{comment.content}</p>
            </section>
          </section>
        </section>
      </section>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
}

export default Comment;