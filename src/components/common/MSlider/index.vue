<template>
  <div class="m-slider">
    <!-- Contect area -->
    <slot></slot>
    <!-- Slider points -->
    <div class="m-slider--points">
      <div v-for="(point, i) in data.length" :key="i">
        <!-- render point -->
        <div @click="onPointClick(i)" :class="pointClasses(i)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // local state
  data() {
    return {
      // selected index
      selectedIndex: 0,

      // slider timer
      intervalTimer: null
    }
  },

  // props
  props: {
    data: {
      type: Array,
      default: () => []
    },

    interval: {
      type: Number,
      default: 0
    }
  },

  // mounted hook
  mounted() {
    if (this.interval) {
      this.setPointsTimer()
    }
  },

  // methods
  methods: {
    /**
     * set points timer
     */
    setPointsTimer() {
      this.intervalTimer = setInterval(() => {
        if (this.selectedIndex + 1 === this.data.length) {
          this.selectedIndex = 0
        } else this.selectedIndex = this.selectedIndex + 1
        this.$emit("on-slider-switch", this.selectedIndex)
      }, this.interval)
    },

    /**
     * Returns point classes
     */
    pointClasses(i) {
      return {
        point: true,
        "selected-point": i === this.selectedIndex
      }
    },

    /**
     * On point click
     */
    onPointClick(i) {
      this.selectedIndex = i
      this.$emit("on-slider-switch", this.selectedIndex)
      clearInterval(this.intervalTimer)
      this.setPointsTimer()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../style/_main.scss";
// m-slider container
.m-slider {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  &--points {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 5vh;
  }
}

// default point class
.point {
  border: 2px solid map-deep-get($matan-colors, "grey", "light");
  height: 15px;
  width: 15px;
  border-radius: 25px;
  margin: 10px;
  cursor: pointer;
}

// selected point
.selected-point {
  background: map-deep-get($matan-colors, "primary");
  border: 2px solid map-deep-get($matan-colors, "primary");
  transition-duration: 3s;
}
</style>
