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
        <div class="matan-footer--icon">
          <!-- Icon -->
          <m-icon name="logo1.png" class="matan-footer--icon--img" />
        </div>

        <!-- Title  -->
        <div class="matan-footer--title">
          {{ $t("landing.footer.title") }}
        </div>
      </template>

      <!-- Body -->
      <template v-slot:body>
        <div class="matan-footer--buttons">
          <m-icon
            v-for="(buttonIcon, i) in buttonIcons"
            :key="i"
            :name="buttonIcon.name"
            type="button"
            class="matan-footer--buttons--icon"
            @click="onClickIcon(buttonIcon)"
          />
        </div>
        <!-- Made by -->
        <div class="matan-footer--made-by">
          Made by Matan Yechiel © 2020
        </div>
      </template>
    </matan-gradient-text>
  </div>
</template>

<script>
import {
  facebookLink,
  linkedinLink,
  githubLink,
  cvLink,
  mailLink
} from "../../configs"

export default {
  // local state
  data() {
    // button icons
    return {
      buttonIcons: [
        {
          name: "facebook",
          link: facebookLink
        },
        {
          name: "linkedin",
          link: linkedinLink
        },
        {
          name: "cv",
          link: cvLink
        },
        {
          name: "github",
          link: githubLink
        },
        {
          name: "mail",
          link: mailLink
        }
      ]
    }
  },

  // methods
  methods: {
    // redirect to url on click
    onClickIcon(buttonIcon) {
      window.location.href = buttonIcon.link
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../style/_main.scss";

.matan-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10vh;

  @include media("<tablet") {
    margin-top: 20vh;
  }

  &--icon {
    display: flex;
    justify-content: center;
    align-items: center;

    &--img {
      width: 50px;
      height: 60px;
      filter: brightness(0) invert(1);
    }
  }

  &--title {
    font-family: $root-font-family;
    font-size: $footer-title-size;
    font-weight: 300;
    margin-top: 5vh;
    margin-left: 20%;
    margin-right: 20%;
  }

  &--img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    @include media("<tablet") {
      width: 100%;
    }
  }

  &--logo {
    width: 40%;
    margin-bottom: -10px;
    @include media("<tablet") {
      width: 80%;
      margin-bottom: -2px;
    }
  }

  &--gradient {
    clip-path: none;
    -webkit-clip-path: none;
  }

  &--buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    &--icon {
      margin-top: 5vh;
      margin-right: 15px;
      margin-left: 15px;

      @include media("<tablet") {
        margin-right: 8px;
        margin-left: 8px;
      }
    }
  }

  // made by
  &--made-by {
    margin-top: 8vh;
    font-size: $made-by-font-size;
  }
}
</style>
