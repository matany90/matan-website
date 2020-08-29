<template>
  <div class="matan-intro">
    <!-- Title -->
    <div class="matan-intro--title">
      {{ $t("landing.mainSection.title") }}
    </div>

    <!-- SubTitle -->
    <div class="matan-intro--subtitle">
      {{ $t("landing.mainSection.subtitle") }}
    </div>

    <!-- Image logo -->
    <div class="matan-intro--image-container">
      <img
        src="@/assets/images/matan-image.png"
        @load="onImageLoaded"
        class="matan-intro--image-container--image"
      />
    </div>
  </div>
</template>

<script>
export default {
  // define methods
  methods: {
    /**
     * emit an event when image loaded.
     */
    onImageLoaded() {
      this.$emit("on-image-loaded")
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../style/_main.scss";

.matan-intro {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  // Title stype
  &--title {
    font-size: $title-font-size;
    font-family: $title-font-family;
    margin-top: 5vh;
    margin-left: 5%;
    margin-right: 5%;
  }

  // Subtitle
  &--subtitle {
    font-size: $subtitle-font-size;
    margin-top: 2vh;
    margin-left: 15%;
    margin-right: 15%;
  }

  // image
  &--image-container {
    margin-top: 6vh;

    // inner images
    &--image {
      width: 30vh;
      height: 37vh;
    }
  }
}
</style>
