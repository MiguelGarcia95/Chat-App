import {TEST_REDUCER} from '../actions/types';

const initialState =  {
  testData: [
    'test', 'test', 'test'
  ]
}

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_REDUCER:
      return {
        ...state,
        testData: action.payload
      }
      break;
    default:
      return state
  }
}

export default testReducer;
