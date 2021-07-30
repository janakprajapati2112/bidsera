import axios from 'axios'
export const MENU_OPEN = '@customization/MENU_OPEN';
export const THEME_LOCALE = '@customization/THEME_LOCALE';
export const THEME_RTL = '@customization/THEME_RTL';
export const getDruidData = () => {
  return dispatch => {
    return axios.get('http://dev.affise.local/api/data/countries').then(res => {
      return dispatch({
        type: 'GET_DRUID_DATA',
        payload: res.data.data
      })
    }).catch(error => {
        console.log("Server error: Could not fetch countries",error);
    });
  }
}

export const updateCountry = (data) => {
  return ({
    type: 'UPDATE_FILTER',
    payload: data
  })
}
