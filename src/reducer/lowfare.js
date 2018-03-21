export default (state = [], {type, payload}) => {

  switch (type) {
  case 'LOW_FARE_SEARCH':
    return [payload, ...state];
  default:
    return state;
  }
};
