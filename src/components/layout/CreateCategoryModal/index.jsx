import React from 'react';
import './style.css';

class CreateCategoryModal extends React.Component {
  render() {
    const {display} = this.props;
    const classes = display ? 'opened' : '';
    return (
      <section className={`category-modal ${classes}`}>
        
      </section>
    )
  }
}

export default CreateCategoryModal;