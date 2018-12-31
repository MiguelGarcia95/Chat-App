import React from 'react';
import {BounceLoader} from 'react-spinners';

const Spinner = (props) => {
  return (
    <section className='spinner-container'>
      <section className='spinner-text'>
        <p>Preparing Chat...</p>
      </section>
      <BounceLoader
        className={"spinner"}
        sizeUnit={"px"}
        size={200}
        color={'#e1e1e1'}
        loading={true}
      />
    </section>
  )
}

export default Spinner
