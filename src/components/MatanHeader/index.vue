<template>
  <!-- Header container -->
  <div class="matan-header" v-on="$listeners">
    <!-- Left column -->
    <div class="matan-header--left">
      <!-- website's Icon -->
      <m-icon
        @click="onIconPress"
        name="logo1.png"
        class="matan-header--left--icon"
      />
    </div>

    <!-- Right column -->
    <div class="matan-header--right">
      <div class="matan-header--buttons">
        <!-- Buttons -->
        <m-button
          class="matan-header--button--cv"
          rounded
          color="primary"
          @click="onCbButtonClick"
        >
          {{ $t("buttons.getCV") }}
        </m-button>
        <m-button
          @click="pushToContactPage"
          class="matan-header--button"
          rounded
          color="primary"
        >
          {{ $t("buttons.sayHello") }}
        </m-button>
      </div>
      <m-icon
        class="matan-header--menu"
        name="open-menu"
        @click="onMenuClick"
      />
    </div>
  </div>
</template>

<script>
import { cvLink } from "../../configs"

export default {
  // methods
  methods: {
    onCbButtonClick() {
      window.location.href = cvLink
    },

    onMenuClick() {
      this.$emit("on-menu-press")
    },

    pushToContactPage() {
      this.$router.push("/contact")
    },

    onIconPress() {
      this.$router.push("/")
    }
  }
}
</script>
<style lang="scss">
@import "../../style/_main.scss";

.matan-header {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 150px;

  &--left {
    width: 50%;

    &--icon {
      margin-top: 4vh;
      margin-left: 3vh;
      width: 50px;
      height: 60px;
      cursor: pointer;

      @include media("<tablet") {
        width: 35px;
        height: 40px;
      }
    }
  }

  &--right {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  &--button {
    margin-top: 4vh;
    margin-right: 3vh;

    &--cv {
      border: none;
      margin-right: 7px;
    }
  }

  &--buttons {
    @include media("<tablet") {
      display: none;
    }
  }

  &--menu {
    width: 25px;
    height: 25px;
    margin-right: 3vh;
    margin-top: 45px;
    @include media(">=tablet") {
      display: none;
    }
  }
}
</style>
