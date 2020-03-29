import patologie from "~/pages/patologie";

export default {
  fetchLocal({ commit }) {
    const local = JSON.parse(localStorage.getItem('user')) || {};
    if ( local.age ) {
      commit('SET_STATE', { ...local });
      return true;
    }
    return false;
  },

  async predict({ state, getters }) {
    const sintoms = getters.lastSintoms(false);
    const temp = getters.lastTemp(false);
    console.log(state.patologies);
    const payload = {
      "age": parseInt(state.age),
      "gender": state.gender.toUpperCase(),
      "provincia": "Milano",
      "patology_respiratory_BPCO": (state.patologies.filter(item => item.value === 'patology_respiratory_BPCO')).length >0 ? 2 : 0,
      "patology_respiratory_enfisema": (state.patologies.filter(item => item.value === 'patology_respiratory_enfisema')).length >0 ? 2 : 0,
      "patology_respiratory_asma": (state.patologies.filter(item => item.value === 'patology_respiratory_asma')).length >0 ? 2 : 0,
      "patology_respiratory_tumore_polmonare": (state.patologies.filter(item => item.value === 'patology_respiratory_tumore_polmonare')).length >0 ? true : false,
      "pharma_immunosoppressori": false,
      "pharma_sintomatici": false,
      "symptom_cough": (sintoms.filter(item => item.value === 'symptom_cough')).length >0 ? 2 : 0,
      "symptom_pain_ache": (sintoms.filter(item => item.value === 'symptom_pain_ache')).length >0 ? 2 : 0,
      "symptom_breath_difficult": (sintoms.filter(item => item.value === 'symptom_breath_difficult')).length >0 ? 2 : 0,
      "symptom_dyarrea_nausea_vomit": (sintoms.filter(item => item.value === 'symptom_dyarrea_nausea_vomit')).length >0 ? 2 : 0,
      "symptom_loss_of_smell_taste": (sintoms.filter(item => item.value === 'symptom_loss_of_smell_taste')).length >0 ? 2 : 0 ,
      "symptom_temperature": parseFloat(temp),
      "biodata_o2_saturation": 100
    };
    return await this.$axios.$post('https://it-home-doc.herokuapp.com/predict', payload)
      .then(res =>{
        return parseFloat(res.label).toFixed(1);
      })
      .catch(error => {
        console.log(error);
      });
  },
};
