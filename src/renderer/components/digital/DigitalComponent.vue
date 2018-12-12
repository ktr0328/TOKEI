<template>
  <v-layout class='digital-component' row wrap>
    <transition name='fade'>
      <div class='box' v-if='isOneTwo' :style='oneTwo()'/>
    </transition>
    <transition name='fade'>
      <div class='box' v-if='isOneThree' :style='oneThree()'/>
    </transition>
    <transition name='fade'>
      <div class='box' v-if='isTwoFour' :style='twoFour()'/>
    </transition>
    <transition name='fade'>
      <div class='box' v-if='isThreeFour' :style='threeFour()'/>
    </transition>
    <transition name='fade'>
      <div class='box' v-if='isThreeFive' :style='threeFive()'/>
    </transition>
    <transition name='fade'>
      <div class='box' v-if='isFourSix' :style='fourSix()'/>
    </transition>
    <transition name='fade'>
      <div class='box' v-if='isFiveSix' :style='fiveSix()'/>
    </transition>
  </v-layout>
</template>

<script>
const w = 30
const t = '5px'
const d = 20

export default {
  name: 'digital-component',
  props: {
    i: {
      type: Number,
      required: true
    },
    num: {
      required: true
    },
    color: {
      type: String,
      required: true
    },
    isPlayMode: {
      required: false,
      default: false
    },
    forPlay: {
      required: false,
      default: []
    }
  },
  data () {
    return {
    }
  },
  computed: {
    isOneTwo () {
      const shouldNotShow = ['1', '4']
      return this.isPlayMode ? this.forPlay[this.i].oneTwo : !shouldNotShow.includes(this.num)
    },
    isOneThree () {
      const shouldNotShow = ['1', '2', '3', '7']
      return this.isPlayMode ? this.forPlay[this.i].oneThree : !shouldNotShow.includes(this.num)
    },
    isTwoFour () {
      const shouldNotShow = ['5', '6']
      return this.isPlayMode ? this.forPlay[this.i].twoFour : !shouldNotShow.includes(this.num)
    },
    isThreeFour () {
      const shouldNotShow = ['1', '7', '0']
      return this.isPlayMode ? this.forPlay[this.i].threeFour : !shouldNotShow.includes(this.num)
    },
    isThreeFive () {
      const shouldShow = ['2', '6', '8', '0']
      return this.isPlayMode ? this.forPlay[this.i].threeFive : shouldShow.includes(this.num)
    },
    isFourSix () {
      const shouldNotShow = ['2']
      return this.isPlayMode ? this.forPlay[this.i].fourSix : !shouldNotShow.includes(this.num)
    },
    isFiveSix () {
      const shouldNotShow = ['1', '4', '7']
      return this.isPlayMode ? this.forPlay[this.i].fiveSix : !shouldNotShow.includes(this.num)
    }
  },
  methods: {
    oneTwo () {
      return {
        left: (this.i * w + this.i * d) + 'px', top: 100 + 'px', width: (this.i * w - this.i * w + w) + 'px', height: t, 'background-color': this.color
      }
    },
    oneThree () {
      return {
        left: (this.i * w + this.i * d) + 'px', top: 100 + 'px', width: t, height: (this.i * w - this.i * w + w) + 'px', 'background-color': this.color
      }
    },
    twoFour () {
      return {
        left: (this.i * w + w + this.i * d) + 'px', top: 100 + 'px', width: t, height: (this.i * w - this.i * w + w) + 'px', 'background-color': this.color
      }
    },
    threeFour () {
      return {
        left: this.i * w + this.i * d + 'px', top: 100 + w + 'px', width: this.i * w - this.i * w + w + 'px', height: t, 'background-color': this.color
      }
    },
    threeFive () {
      return {
        left: (this.i * w + this.i * d) + 'px', top: 100 + w + 'px', width: t, height: (this.i * w - this.i * w + w) + 'px', 'background-color': this.color
      }
    },
    fourSix () {
      return {
        left: (this.i * w + w + this.i * d) + 'px', top: 100 + w + 'px', width: t, height: (this.i * w - this.i * w + w) + 'px', 'background-color': this.color
      }
    },
    fiveSix () {
      return {
        left: this.i * w + this.i * d + 'px', top: 100 + w + w + 'px', width: this.i * w - this.i * w + w + 'px', height: t, 'background-color': this.color
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.digital-component
  height: 150px
  width: 50px
.box
  position: absolute
  border-radius: 50%
.fade-enter-active, .fade-leave-active
  transition: all .9s ease-out
.fade-enter, .fade-leave-to
  opacity: 0
  transform: scale(.1, .1) rotate(-90deg)
</style>

<style scoped>
</style>
