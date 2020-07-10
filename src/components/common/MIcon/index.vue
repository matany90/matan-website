<template>
  <div class="m-icon">
    <div v-if="type === 'button'" class="m-icon--button">
      <img :src="iconPath" class="m-icon--button--svg" />
    </div>
    <img v-else :src="iconPath" class="m-icon--svg" />
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
@import "../../../style/_main.scss";

.m-icon {
  &--svg {
    width: 60px;
    height: 60px;
  }

  &--button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: $icon-button-border-radius;
    border: 2px solid map-get($matan-colors, "secondary");
    background: map-deep-get($matan-colors, "primary");
    &--svg {
      width: 50%;
      height: 50%;
      filter: brightness(0) invert(1);
    }
  }
}
</style>
