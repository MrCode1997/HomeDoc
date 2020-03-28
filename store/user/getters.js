export default {
  hasPersonalDataComplete: state => state.name !== '' && state.lastName !== '' && state.age !== '' && state.gender !== '',
}
