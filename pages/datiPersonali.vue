<template>
  <div class="page" id="dati-personali">
    <PagesTitle />
    <HomeDocInput placeholder="Nome" :value="name" @input="(emittedName) => { $store.commit('user/SET_NAME', emittedName) }" width="100" />
    <HomeDocInput placeholder="Cognome" :value="lastName" @input="(emittedLastName) => { $store.commit('user/SET_LAST_NAME', emittedLastName) }" width="100" />
    <HomeDocInput placeholder="Eta" :value="age" @input="(emittedAge) => { $store.commit('user/SET_AGE', emittedAge) }" width="70" />
    <HomeDocCheckbox @select="(emittedGender) => { $store.commit('user/SET_GENDER', emittedGender) }" :selected="gender" title="Sesso" :options="[
      { label: 'Maschio', value: 'm' },
      { label: 'Femmina', value: 'f' },
    ]" />
    <div class="button-wrapper">
      <HomeDocButton title="Avanti >" :active="hasPersonalDataComplete" @click="$router.push('patologie')" />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex';

import PagesTitle from '../components/PagesComponents/PagesTitle';
import HomeDocInput from '../components/General/HomeDocInput';
import HomeDocCheckbox from '../components/General/HomeDocCheckBox/HomeDocCheckbox';
import HomeDocButton from '../components/General/HomeDocButton';
export default {
  name: 'PatalogiePages',
  components: {
    PagesTitle,
    HomeDocInput,
    HomeDocCheckbox,
    HomeDocButton,
  },
  computed: {
    ...mapState('user', [
      'name',
      'lastName',
      'age',
      'gender'
    ]),
    ...mapGetters('user', [
      'hasPersonalDataComplete'
    ]),
  },
}
</script>
<style lang="scss" scoped>
#dati-personali {
  padding: 0 30px;
  .button-wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 15vh;
  }
}
</style>
