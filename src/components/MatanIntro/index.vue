<template>
  <div class="matan-intro">
    <!-- Title -->
    <div class="matan-intro--title">
      Experienced Full-Stack Developer & Software Engineer
    </div>

    <!-- SubTitle -->
    <div class="matan-intro--subtitle">
      I design and code beautifully simple things, and I love what I do.
    </div>

    <!-- Image logo -->
    <div class="matan-intro--image-container">
      <img
        src="@/assets/images/matan-image.png"
        class="matan-intro--image-container--image"
      />
    </div>
  </div>
</template>

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
