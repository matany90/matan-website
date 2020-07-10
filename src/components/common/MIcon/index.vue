<template>
  <div class="m-icon">
    <img :src="iconPath" class="m-icon--svg" />
  </div>
</template>

<script>
export default {
  // define props
  props: {
    // type
    type: {
      type: String,
      default: "default"
    },

    // icon's name
    name: {
      type: String,
      required: true
    }
  },

  // computed values
  computed: {
    /**
     * Get icon path
     */
    iconPath() {
      return require(`../../../assets/icons/${this.name}.svg`)
    }
  }
}
</script>

<style lang="scss">
.m-icon {
  &--svg {
    width: 60px;
    height: 60px;
    filter: invert(1);
  }
}
</style>
