import actions from "~/store/user/actions";
import mutations from "~/store/user/mutations";
import getters from "~/store/user/getters";


export const state = () => ({
  name: '',
  lastName: '',
  age: '',
  gender: '',
  patologies: [],
  sintomsHistory: [],
  sintoms: {
    list: [],
    temp: null,
  },
  medicinals: [],
  medicinalsHistory: [],
  parametersHistory: [],
});

export { actions };
export { mutations };
export { getters };
