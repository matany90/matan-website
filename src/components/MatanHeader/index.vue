<template>
  <!-- Header container -->
  <div class="matan-header">
    <!-- Left Header -->
    <div class="matan-header--left">
      TEST
    </div>

    <!-- Right header -->
    <div class="matan-header--right">
      <m-button class="matan-header--button" rounded color="primary">
        Say Hello
      </m-button>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../style/_main.scss";

.matan-header {
  height: 10%;
  width: 100%;
  display: flex;

  &--right {
    background: green;
    width: 50%;
    display: flex;
    justify-content: flex-end;
  }

  &--left {
    background: red;
    width: 50%;
  }

  &--button {
    width: 15vh;
    margin-right: 30px;
    margin-top: 30px;
  }
}
</style>
