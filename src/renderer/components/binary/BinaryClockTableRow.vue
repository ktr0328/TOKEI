<template>
  <tr>
    <td style="padding-right: 5px">{{ title }}</td>
    <td
      class="plot-area"
      v-for="(v, i) in data" :key="i"
    >
      <!-- <span v-if="v === '0'" class="star off">😇</span> -->
      <!-- <span v-else :style="color" class="star on">🤔</span> -->
      <v-icon v-if="v === '0'" class="star off">fas fa-star</v-icon>
      <v-icon v-else :style="color" class="star on">fas fa-star</v-icon>

      <!-- <v-icon v-if="v === '0'" class="star off">far fa-snowflake</v-icon>
      <v-icon v-else :style="color" class="star on">far fa-snowflake</v-icon> -->
    </td>
  </tr>
</template>

<script>
export default {
  name: 'binary-clock-table-row',
  props: {
    title: {
      type: String,
      required: true
    },
    data: {
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
td
  span
    font-size: 2em
  .star
    transition-property: color, transform // font-size
    transition-duration: 1s
    transition-timing-function: ease

  .star.on
    color: rgba(33, 150, 243, .9)
    // font-size: 25px
    transform: rotate(0deg)
  .star.off
    transform: translate(20px, 50px) rotate(-216deg) scale(.001, .001)
    // font-size: 14px
    color: rgba(100, 100, 150, .1)
</style>
