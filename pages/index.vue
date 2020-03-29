<template>
  <div class="page" id="homepage">
    <HomeTitle />
    <InfoHint />
    <HomeDocButton @click="$router.push('datiPersonali')" title="Inizia diagnosi >" />
  </div>
</template>

<script>
import InfoHint from '../components/Home/InfoHint';
import HomeTitle from '../components/Home/HomeTitle';
import HomeDocButton from '../components/General/HomeDocButton';
export default {
  name: 'indexPage',
  components: {
    HomeDocButton,
    InfoHint,
    HomeTitle,
  },
  async created() {
    if (await this.$store.dispatch('user/fetchLocal')) {
      this.$router.push('homeClient');
    }
  }
}
</script>

<style lang="scss" scoped>
  #homepage {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
</style>
