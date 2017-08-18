<template lang="html">
  <div class="rotate-wrapper" ref="parent">
    <div class="rotate" :class="rotationCls" ref="self">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import { css, isIOS } from './util'

  export default {
    name: 'rotate',
    props: {
      rotating: {
        type: Boolean,
        default: false
      },
      dps: {
        type: Number,
        default: 10
      }
    },
    mounted () {
      css(this.$refs.self, 'animationDuration', `${360 / this.dps}s`)
      this.rotating ? this.play() : this.pause()
    },
    data () {
      return {
        rotation: false,
        paused: !isIOS
      }
    },
    computed: {
      rotationCls () {
        const { rotation, paused } = this
        return {
          rotation, paused
        }
      }
    },
    watch: {
      rotating () {
        this.rotating ? this.play() : this.pause()
      }
    },
    methods: {
      play () {
        this.rotation = true
        if (!isIOS) {
          this.paused = false
        }
      },
      pause () {
        if (isIOS) {
          const { parent, self } = this.$refs
          const transform = getComputedStyle(self).transform
          const pTransform = getComputedStyle(parent).transform
          parent.style.transform = pTransform === 'none' ? transform : transform.concat(' ', pTransform)
          this.rotation = false
        } else {
          this.paused = true
        }
      },
      reset: async function () {
        const rotation = this.rotation
        // 重置
        if (isIOS) {
          this.$refs.parent.style.transform = 'none'
        }
        this.rotation = false
        setTimeout(() => {
          if (rotation) {
            this.rotation = true
          }
        }, 100)
      }
    }
  }
</script>

<style scoped>
  @keyframes rotate{
    0%{
      transform:rotate(0deg);
     }
     100%{
       transform:rotate(360deg);
     }
  }
  .rotation {
    position: relative;
    animation:rotate 5s infinite linear;
    animation-play-state: running;
  }
  .rotation.paused {
    animation-play-state: paused;
  }
  .rotate-wrapper, .rotate {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
