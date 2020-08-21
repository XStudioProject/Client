const initialState = {
  test: [],
};

const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'test':
      return { test: ['test'] };
    default:
      return state;
  }
};

export default RootReducer;
