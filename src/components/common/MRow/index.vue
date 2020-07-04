<template>
  <div class="m-row" :style="styles">
    <slot />
  </div>
</template>

<script>
/**
 * Define the row component
 */
export default {
  // set component name
  name: "m-row",

  // external props
  props: {
    // justify attributes
    justify: {
      type: String,
      default: ""
    },

    // align attributes
    align: {
      type: String,
      default: ""
    }
  },

  // calculated props
  computed: {
    /**
     * Render classes
     */
    styles() {
      let _styles = []

      if (this.align) {
        _styles.push(`align-self: ${this.align}`)
        _styles.push(`align-items: ${this.align}`)
        _styles.push(`align-content: ${this.align}`)
      }

      if (this.justify) {
        _styles.push(`justify-self: ${this.justify}`)
        _styles.push(`justify-items: ${this.justify}`)
        _styles.push(`justify-content: ${this.justify}`)
      }

      return _styles.join(";")
    }
  }
}
</script>

<style lang="scss">
.m-row {
  display: flex;
  flex-direction: row;
  line-height: 100%;
}
</style>
