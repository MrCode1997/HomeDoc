export default {
  hasPersonalDataComplete: state => state.name !== '' && state.lastName !== '' && state.age !== '' && state.gender !== '',

  lastSintoms: (state) => (date = false) => {
    const now = new Date();
    const data = date || `${now.getFullYear()}/${now.getMonth()+1}/${now.getUTCDate()}`;
    const dataInfo = state.sintomsHistory.filter(item => item.date === data);
    return dataInfo[dataInfo.length -1].list || [];
  },

  lastTemp: (state) => (date = false) => {
    const now = new Date();
    const data = date || `${now.getFullYear()}/${now.getMonth()+1}/${now.getUTCDate()}`;
    const dataInfo = state.sintomsHistory.filter(item => item.date === data);
    return dataInfo[dataInfo.length -1].temp || null;
  },

  getDates: state => state.sintomsHistory.map(item => ({ data: item.date, timestamp: item.timestamp })),
}
