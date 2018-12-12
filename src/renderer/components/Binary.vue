<template>
  <v-container id='binary'
    fill-height justify-center fluid
  >
    <table>
      <tr>
        <th v-for="(v, i) in clock.definition" :key="i">{{ v }}</th>
      </tr>
      <binary-clock-table-row title="y" :data="clock.year" :color="starColor"></binary-clock-table-row>
      <binary-clock-table-row title="m" :data="clock.month" :color="starColor"></binary-clock-table-row>
      <binary-clock-table-row title="d" :data="clock.day" :color="starColor"></binary-clock-table-row>
      <binary-clock-table-row title="h" :data="clock.hour" :color="starColor"></binary-clock-table-row>
      <binary-clock-table-row title="m" :data="clock.minute" :color="starColor"></binary-clock-table-row>
      <binary-clock-table-row title="s" :data="clock.second" :color="starColor"></binary-clock-table-row>
    </table>
  </v-container>
</template>

<script>
import moment from 'moment'
import BinaryClockTableRow from '@/components/binary/BinaryClockTableRow'

export default {
  name: 'binary',
  data () {
    return {
      clock: {
        definition: ['', 32, 16, 8, 4, 2, 1],
        year: '',
        month: '',
        day: '',
        hour: '',
        minute: '',
        second: ''
      },
      starColor: '#6495ED'
    }
  },
  mounted: function () {
    this.render()
    setInterval(this.render, 500)
  },
  methods: {
    render () {
      const now = moment()
      this.clock.year = this.to_b(now.format('YY'))
      this.clock.month = this.to_b(now.format('MM'))
      this.clock.day = this.to_b(now.format('DD'))
      this.clock.hour = this.to_b(now.format('HH'))
      this.clock.minute = this.to_b(now.format('mm'))
      this.clock.second = this.to_b(now.format('ss'))
    },
    to_b (time) {
      const length = this.clock.definition.length - 1
      return ('0'.repeat(length) + parseInt(time).toString(2))
        .substr(-length, length)
        .split('')
    }
  },
  components: {
    BinaryClockTableRow
  }
}
</script>

<style lang="sass">
#binary
  width: 100%
  height: 100%
  color: rgba(158, 158, 158, 0.7)
  table
    width: 100%
    height: 100%
    th
      position: relative
      left: -3%
</style>
