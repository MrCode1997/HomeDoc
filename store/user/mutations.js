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

}
