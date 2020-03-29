<template>
  <div class="page" id="home-client">
    <div class="home-client-header">
      <div class="home-client-avatar">
        PA
      </div>
      <div class="home-client-label">
       {{ $store.state.user.name }} {{ $store.state.user.lastName }}
      </div>
    </div>
    <div style="width: 100%; display: flex;justify-content: center; align-items: center" >
      <select v-model="selectedData" style="width: 50%; background-color: white; border: none;margin: 0 auto;-webkit-appearance:none; font-size: 18px">
        <option :value="false">Oggi,  {{ `${now.getFullYear()}/${now.getMonth() + 1}/${now.getUTCDate()}` }}</option>
        <option v-for="date in getDates" :value="date.data">{{ date.data }}</option>
      </select>
    </div>
    <HomeClientPanel @click="$router.push('sintomi')" title="Sintomi">
      <HomeDocCheckRadioOption v-for="sintom in lastSintoms(selectedData)" :item="sintom" :selected="lastSintoms(selectedData)" />
    </HomeClientPanel>
    <HomeClientPanel title="Parametri" @click="$router.push('parametri')">
      <div style="width: 100%; height: 65px; display: flex; justify-content: space-around; align-items: center">
        <p>Temperatura corporea</p>
        <b style="font-size: 20px">{{ lastTemp(selectedData) }}°c</b>
      </div>
    </HomeClientPanel>
    <HomeClientPanel title="Riepilogo giornaliero">
      <div class="wrapper" style="height: 65px; display: flex; justify-content: center; align-items: center;">
        <HomeDocButton title="Visualizza andamento >" />
      </div>
    </HomeClientPanel>
    <HomeClientPanel @click="$router.push('doctor')" :blue="true" title="Contatta il tuo medico">
      <div class="wrapper" style="height: 65px; display: flex; justify-content: center; align-items: center;">
        <HomeDocButton title="Invia dati >" />
      </div>
    </HomeClientPanel>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

import HomeClientPanel from '~/components/HomeClient/HomePanel';
import HomeDocCheckRadioOption from "../components/General/HomeDocRadio/HomeDocCheckRadioOption";
import HomeDocButton from '../components/General/HomeDocButton';

export default {
  name: 'HomeClientPage',
  components: {
    HomeDocButton,
    HomeClientPanel,
    HomeDocCheckRadioOption,
  },
  data() {
    return {
      selectedData: false,
      now: new Date(),
    }
  },
  computed: {
    ...mapGetters('user', [
      'lastSintoms',
      'lastTemp',
      'getDates'
    ]),
  },
};
</script>
<style lang="scss" scoped>
#home-client {
  padding: 60px 30px 30px 30px;
  overflow-y: scroll;
  .home-client-header {
    display: flex;
    .home-client-avatar {
      width: 58px;
      height: 58px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #5FB3FF;
      color: white;
      font-weight: bold;
      border-radius: 50%;
    }
    .home-client-label {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      margin-left: 20px;
    }
  }
}
</style>
