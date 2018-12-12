<template>
  <v-container class="digital" justify-center align-center fill-height>
    <digital-component
      v-for='(num, index) in nums' :key='"bar" + index'
      :i='index'
      :num='num'
      :color='colors[index]'
      :isPlayMode='false'
      :forPlay='google'
    />
  </v-container>
</template>

<script>
import DigitalComponent from '@/components/digital/DigitalComponent'
import moment from 'moment'

export default {
  name: 'digital',
  mounted: function () {
    this.render()
    setInterval(this.render, 1000)
  },
  data () {
    return {
      nums: [],
      // colors: ['#03A9F4', '#D85140', '#FFC107', '#4CAF50', '#4CAF50', '#D85140'], // google color
      // colors: ['#D85140', '#D85140', '#D85140', '#D85140', '#D85140', '#D85140'],
      colors: ['#03A9F4', '#03A9F4', '#4CAF50', '#4CAF50', '#FFC107', '#FFC107'],
      google: [
        { oneTwo: 1, oneThree: 1, twoFour: 0, threeFour: 0, threeFive: 1, fourSix: 1, fiveSix: 1 },
        { oneTwo: 1, oneThree: 1, twoFour: 1, threeFour: 0, threeFive: 1, fourSix: 1, fiveSix: 1 },
        { oneTwo: 1, oneThree: 1, twoFour: 1, threeFour: 0, threeFive: 1, fourSix: 1, fiveSix: 1 },
        { oneTwo: 1, oneThree: 1, twoFour: 0, threeFour: 0, threeFive: 1, fourSix: 1, fiveSix: 1 },
        { oneTwo: 0, oneThree: 1, twoFour: 0, threeFour: 0, threeFive: 1, fourSix: 0, fiveSix: 1 },
        { oneTwo: 1, oneThree: 1, twoFour: 0, threeFour: 1, threeFive: 1, fourSix: 0, fiveSix: 1 }
      ],
      slot: [
        { oneTwo: 1, oneThree: 0, twoFour: 1, threeFour: 0, threeFive: 0, fourSix: 1, fiveSix: 0 },
        { oneTwo: 1, oneThree: 0, twoFour: 1, threeFour: 0, threeFive: 0, fourSix: 1, fiveSix: 0 },
        { oneTwo: 1, oneThree: 0, twoFour: 1, threeFour: 0, threeFive: 0, fourSix: 1, fiveSix: 0 },
        { oneTwo: 1, oneThree: 0, twoFour: 1, threeFour: 0, threeFive: 0, fourSix: 1, fiveSix: 0 },
        { oneTwo: 1, oneThree: 0, twoFour: 1, threeFour: 0, threeFive: 0, fourSix: 1, fiveSix: 0 },
        { oneTwo: 1, oneThree: 0, twoFour: 1, threeFour: 0, threeFive: 0, fourSix: 1, fiveSix: 0 }
      ],
      stock: 0
    }
  },
  methods: {
    render () {
      const now = moment().format('HHmmss')
      this.nums = now.split('')
      this.stock = this.stock + 1
      // this.nums = this.stock.toString().padStart(6, '0')
    }
  },
  components: {
    DigitalComponent
  }
}
</script>

<style lang="sass" scoped>
</style>
