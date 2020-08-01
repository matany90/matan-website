<template>
  <!-- Header container -->
  <div class="matan-header">
    <!-- Row header -->
    <m-row>
      <!-- Left column -->
      <m-col class="matan-header--left">
        <!-- website's Icon -->
        <m-icon name="logo1.png" class="matan-header--left--icon" />
      </m-col>

      <!-- Right column -->
      <m-col class="matan-header--right">
        <!-- Buttons -->
        <m-button
          class="matan-header--button--cv"
          rounded
          color="primary"
          @click="onCbButtonClick"
        >
          Get my CV
        </m-button>
        <m-button class="matan-header--button" rounded color="primary">
          Say Hello
        </m-button>
      </m-col>
    </m-row>
  </div>
</template>

<script>
export default {
  // methods
  methods: {
    onCbButtonClick() {
      window.location.href =
        "https://srv-file10.gofile.io/download/0sZIg1/CV.pdf"
    }
  }
}
</script>
<style lang="scss">
@import "../../style/_main.scss";

.matan-header {
  width: 100%;
  height: 150px;

  &--left {
    width: 50%;

    &--icon {
      margin-top: 4vh;
      margin-left: 3vh;
      width: 50px;
      height: 60px;
    }
  }

  &--right {
    width: 50%;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: row;
  }

  &--button {
    margin-top: 4vh;
    margin-right: 3vh;
    @media (max-width: 1400px) {
      margin-right: 15vh;
    }

    &--cv {
      border: none;
      margin-right: 7px;
    }
  }
}
</style>
