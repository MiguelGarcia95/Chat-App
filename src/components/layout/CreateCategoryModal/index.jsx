import React from 'react';
import './style.css';

class CreateCategoryModal extends React.Component {
  closeTest = () => {
    this.props.chatToggle();
    this.props.toggle();
  }
  
  render() {
    const {display} = this.props;
    const classes = display ? 'opened' : '';
    return (
      <section className={`category-modal ${classes}`}>
        <section className="exit"><i className="fas fa-times fa-2x" onClick={this.closeTest}></i></section>
        <section className="modal">
          <h2>Create a new Category</h2>
          <input name='categoryName' type="text" placeholder='Enter Category Name' onChange={this.props.categoryOnChange} />
          <p>Enter one Category Channel</p>
          <input name='channelName' type="text" placeholder='Enter Channel Name' onChange={this.props.categoryOnChange} />
          <input name='channelDescription' type="text" placeholder='Enter Channel Description' onChange={this.props.categoryOnChange} />
          <button onClick={this.props.handleCategorySubmit}>Create</button>
        </section>
      </section>
    )
  }
}

export default CreateCategoryModal;