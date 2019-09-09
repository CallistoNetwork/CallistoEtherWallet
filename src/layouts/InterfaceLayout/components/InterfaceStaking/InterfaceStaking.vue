<template>
  <div :class="disabled ? 'staking-disabled' : ''" class="info-block-container">
    <div class="info-block staking">
      <div class="block-image">
        <div class="icon-border">
          <img
            class="icon"
            src="~@/assets/images/icons/web-solution-white.svg"
          />
        </div>
      </div>
      <div class="block-content">
        <div class="information-container">
          <div class="ammount-staked">
            <h2>{{ $t('common.amountStaked') }}</h2>
            <div class="staking-text-container">
              <div v-show="staked !== undefined" class="staking-text">
                <p>
                  {{ new Number(staked).toLocaleString() }}
                  <span>
                    {{ network.type.currencyName }}
                  </span>
                </p>
              </div>
              <i v-show="staked === undefined" class="fa fa-spin fa-spinner" />
            </div>
          </div>
          <div class="ammount-staked">
            <h2>{{ $t('common.availableReward') }}</h2>
            <div class="staking-text-container">
              <div class="staking-text">
                <p>
                  {{ new Number(reward).toLocaleString() }}
                  <span>
                    {{ network.type.currencyName }}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="icon-container">
          <b-btn
            id="balanceCheck"
            class="change-button"
            @click="goTo('/interface/cold-staking')"
          >
            {{ $t('common.goToStake') }}
          </b-btn>
          <b-btn
            id="refreshBalance"
            class="custom-tooltip"
            @click="fetchStaked"
          >
            <img
              v-show="!fetchingBalance"
              src="~@/assets/images/icons/change.svg"
            />
            <i v-show="fetchingBalance" class="fa fa-lg fa-spinner fa-spin" />
          </b-btn>
          <b-btn
            v-show="reward !== '0'"
            id="balanceCheck"
            class="change-button"
            @click="getReward"
          >
            {{ $t('common.fastClaim') }}
          </b-btn>
        </div>
        <!-- .icon-container -->
      </div>
      <!-- .block-content -->
    </div>
  </div>
</template>

<script>
import InterfaceBalanceModal from '../InterfaceBalanceModal';
import { mapState } from 'vuex';
export default {
  components: {
    'interface-balance-modal': InterfaceBalanceModal
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    staked: {
      type: String,
      default: '0'
    },
    reward: {
      type: String,
      default: '0'
    },
    getStaked: {
      type: Function,
      default: function() {}
    },
    claimReward: {
      type: Function,
      default: function() {}
    }
  },
  data() {
    return {
      fetchingBalance: false
    };
  },
  computed: {
    ...mapState(['network'])
  },
  watch: {
    balance() {
      this.fetchingBalance = false;
    }
  },
  methods: {
    goTo(page) {
      this.$router.push({ path: page });
    },
    fetchStaked() {
      this.fetchingBalance = true;
      setTimeout(() => {
        this.getStaked();
        this.fetchingBalance = false;
      }, 1000);
    },
    getReward() {
      this.claimReward();
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'InterfaceStaking.scss';
</style>
