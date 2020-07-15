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
        <!-- Button -->
        <m-button class="matan-header--button" rounded color="primary">
          Say Hello
        </m-button>
      </m-col>
    </m-row>
  </div>
</template>

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
  }

  &--button {
    margin-top: 4vh;
    margin-right: 3vh;
    @media (max-width: 1400px) {
      margin-right: 15vh;
    }
  }
}
</style>
