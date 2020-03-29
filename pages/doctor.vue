<template>
  <div class="page" id="doctor">
    <HomeDocButton @click="$router.back()" title="< Torna alla pagina paziente" />
    <HomePanel>
      <div class="home-client-header">
        <div class="home-client-avatar">
          PA
        </div>
        <div class="home-client-label">
          {{ $store.state.user.name }} {{ $store.state.user.lastName }} <br>
          <span style="font-size: 12px" >{{ $store.state.user.age }} Anni</span>
        </div>
        <div :class="{ low: predict <= 0.5, high: predict > 0.5 }" class="home-client-avatar badge">
          {{ predict <= 0.5 ? 'B' : 'A' }}
        </div>
      </div>
      <p>
        <b>Stato: <span :style="{ color: predict <= 0.5 ? '#3b8070' : '#E22626'  }">{{ predict <= 0.5 ? 'NO TEST' : 'TEST' }}</span></b>
      </p>
      <p>
        <b>Data di nascita: </b>
      </p>
      <p>
        <b>Sesso: </b> {{ $store.state.user.gender }}
      </p>
      <p>
        <b>Telefono: </b>
      </p>
      <p>
        <b>Sesso: </b>
      </p>
      <p>
        <b>Indirizzo: </b>
      </p>
      <p>
        <b>Peso: </b>
      </p>
      <p>
        <b>Altezza: </b>
      </p>
    </HomePanel>
    <HomePanel title="Utilimi dati ricevuti"></HomePanel>
    <HomePanel title="Calendario paziente"></HomePanel>
  </div>
</template>
<script>
import HomePanel from '../components/HomeClient/HomePanel';
import HomeDocButton from '../components/General/HomeDocButton';

export default {
  name: 'Doctor',
  components: {
    HomePanel,
    HomeDocButton,
  },
  data() {
    return {
      predict: 0,
    }
  },
  created() {
    this.$store.dispatch('user/predict')
    .then(res => {
      console.log(res);
      this.predict = res;
    });
  }
}
</script>
<style lang="scss" scoped>
#doctor {
  padding: 30px;
  p {
    font-size: 12px;
    margin-top: 5px;
  }
  .home-client-header {
    display: flex;
    justify-content: space-around;
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
      &.badge {
        margin-left: 20px;
        &.low {
          background-color: #3b8070;
        }
        &.med {
          background-color: orange;
        }
        &.high {
          background-color: #E22626;
        }
      }
    }
    .home-client-label {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      font-weight: bold;
    }
  }
}
</style>
