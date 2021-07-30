import { combineReducers } from 'redux';
import customizationReducer from './customizationReducer';
const initialState = {
  druid_data:
    {
      data:[],
      loading:[]
    },
  countryFilter:{ code: 'US', label: 'United States', phone: '1', suggested: true }
}
const druidData = (state = initialState, action) => {
    if(action.type && action.type ==='GET_DRUID_DATA') {
        const dt = state["druid_data"];
        dt.data = action.payload;
        dt.loading = false;
        return {
          ...state, dt
        };
    }
    return state;
}

const updateCountries = (state=initialState,action) => {
  if(action.type && action.type==='UPDATE_FILTER') {
    state.countryFilter = action.payload
    return state;
  }
  return state;
}

const reducer = combineReducers({
    customization: customizationReducer,
    druidData:druidData,
    selectedCountry:updateCountries
});

export default reducer;
