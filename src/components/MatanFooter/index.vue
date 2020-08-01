<template>
  <div class="matan-footer">
    <div class="matan-footer--img">
      <img
        class="matan-footer--logo"
        src="../../assets/images/container-logo.png"
      />
    </div>
    <!-- Linear Gradient text box -->
    <matan-gradient-text class="matan-footer--gradient">
      <!-- Title -->
      <template v-slot:title>
        <div>Hi, I'm Matan</div>
      </template>

      <!-- Body -->
      <template v-slot:body>
        <div>
          ICONS
        </div>
      </template>
    </matan-gradient-text>
  </div>
</template>

<style lang="scss" scoped>
@import "../../style/_main.scss";

.matan-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50vh;

  @include media("<tablet") {
    margin-top: 200vh;
  }

  &--img {
    margin-bottom: -103px;

    @include media("<tablet") {
      margin-bottom: -50px;
    }
  }

  &--logo {
    width: 120vh;

    @include media("<tablet") {
      width: 80vh;
    }
  }

  &--gradient {
    clip-path: none;
    -webkit-clip-path: none;
  }
}
</style>
