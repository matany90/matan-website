<template>
  <div class="success-page">
    <!-- Icon -->
    <div class="success-page--container">
      <m-icon class="success-page--icon" name="sent" />

      <!-- Title -->
      <div class="success-page--title">Message Sent. Cheers!</div>

      <!-- Subtitle -->
      <div class="success-page--subtitle">
        I'll talk soon. Let's go back to Home...
      </div>

      <!-- Button -->
      <m-button @click="backHome" rounded class="success-page--button">
        Back Home
      </m-button>
    </div>
  </div>
</template>

<script>
export default {
  // methods
  methods: {
    backHome() {
      this.$router.push("/")
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/style/_main.scss";

.success-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  &--container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10vh;
    margin-left: 20%;
    margin-right: 20%;
    text-align: center;
  }
  &--icon {
    width: 20vh;
    height: 20vh;
  }

  &--title {
    margin-top: 5vh;
    font-family: $title-font-family;
    font-size: $title-font-size;
  }

  &--subtitle {
    margin-top: 2vh;
    font-size: $subtitle-font-size;
  }

  &--button {
    width: 20vh;
    margin-top: 8vh;
  }
}
</style>
