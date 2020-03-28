import actions from "~/store/user/actions";
import mutations from "~/store/user/mutations";
import getters from "~/store/user/getters";


export const state = () => ({
  name: '',
  lastName: '',
  age: '',
  gender: '',
  patologies: [],
  sintoms: {
    list: [],
    temp: null,
  },
  medicinals: [],
});

export { actions };
export { mutations };
export { getters };
