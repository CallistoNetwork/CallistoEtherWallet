<template>
  <div class="button-staking">
    <div :class="disabled ? 'button-disabled' : ''" class="content-container">
      <img :src="left" class="left" />
      <img :src="right" class="right" />
      <img :src="spaceman" class="spaceman" />
      <div class="text-content">
        <p class="title">Cold<br />Staking</p>
        <p v-if="disabled" class="button-disabled">
          This function is not available.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import LeftCircle from '@/assets/images/buttons/send-tx/left.png';
import RightCircle from '@/assets/images/buttons/send-tx/right.png';
import Spaceman from '@/assets/images/buttons/send-tx/spaceman.png';

export default {
  name: 'ButtonStaking',
  components: {},
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      left: LeftCircle,
      right: RightCircle,
      spaceman: Spaceman
    };
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
@import 'ButtonStaking.scss';
</style>
