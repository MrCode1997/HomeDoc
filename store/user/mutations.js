export default {
  SET_PERSONAL_DATA(state, user) {
    state.data = user;
  },

  SET_PATOLOGIES(state, patologies) {
    state.patologies = patologies;
  },

  SET_SINTOMS_LIST(state, sintoms) {
    state.sintoms.list = sintoms;
  },

  SET_SINTOMS_TEMP(state, temp) {
    state.sintoms.temp = temp;
  },

  SET_MEDICINALS(state, medicinals) {
    state.medicinals = medicinals;
  },

  // userData setter
  SET_NAME(state, name) {
    state.name = name;
  },

  SET_LAST_NAME(state, lastName) {
    state.lastName = lastName;
  },

  SET_AGE(state, age) {
    state.age = age;
  },

  SET_GENDER(state, gender) {
    state.gender = gender;
  },

  SET_STATE(state, payload) {
    state.name = payload.name;
    state.lastName = payload.lastName;
    state.gender = payload.gender;
    state.age = payload.age;
    state.patologies = payload.patologies;
    state.medicinals = payload.medicinals;
    state.medicinalsHistory = payload.medicinalsHistory;
    state.sintoms = payload.sintoms;
    state.sintomsHistory = payload.sintomsHistory;
  },

  SET_SINTOMS_HISTORY(state, payload = false) {
    const now = new Date();
    if (!payload) {
      state.sintomsHistory.push({list: state.sintoms.list, temp: state.sintoms.temp, date: `${now.getFullYear()}/${now.getMonth()+1}/${now.getUTCDate()}`, timestamp: now.getTime()})
    } else {
      state.sintomsHistory.push(payload);
    }
  },

  SET_MEDICINALS_HISTORY(state, payload = false) {
    const now = new Date();
    if (!payload) {
      state.medicinalsHistory.push({list: state.medicinals, date: `${now.getFullYear()}/${now.getMonth()+1}/${now.getUTCDate()}`, timestamp: now.getTime()})
    } else {
      state.medicinalsHistory.push(payload);
    }
  }

}
