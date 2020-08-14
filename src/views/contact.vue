<template>
  <div>
    <!-- Header -->
    <matan-header @on-menu-press="toggleMenu" />
    <m-menu v-if="isMenuOpen" @on-menu-press="toggleMenu" />

    <!-- Main logo -->
    <hr class="main-logo" />
    <div class="main-logo--container">
      <img src="@/assets/images/matan-image.png" class="main-logo--image" />
    </div>

    <!-- Title -->
    <div class="main-logo--title">
      Thanks for taking the time to reach out. How can I help you today?
    </div>

    <!-- Form -->
    <div class="matan-form">
      <m-text-field v-model="name" label="Name" class="matan-form--input" />
      <m-text-field v-model="email" label="Email" class="matan-form--input" />
    </div>
    <div class="matan-form">
      <m-text-field
        v-model="body"
        label="Message"
        class="matan-form--input--message"
        fullBox
      />
    </div>

    <!-- Submit button -->
    <div class="buttons">
      <m-button @click="sendEmail" rounded color="primary" :loading="loading">
        Submit
      </m-button>
    </div>
  </div>
</template>

<script>
import api from "@/api"

export default {
  // local state
  data() {
    return {
      // is dropdown open
      isMenuOpen: false,

      // form data
      name: "",
      email: "",
      body: "",

      // loading
      loading: false
    }
  },

  // methods
  methods: {
    /**
     * Toggle is menu
     */
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },

    /**
     * Send email
     */
    async sendEmail() {
      // set loading
      this.loading = true

      // send email
      try {
        const res = await api.mail.send(this.email, this.name, this.body)
        console.log("res", res)
      } catch (e) {
        console.error(e)
      }

      // close loading
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/_main.scss";

.main-logo {
  border-top: 1px map-deep-get($matan-colors, "grey", "light");
  position: relative;

  &--container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &--image {
    width: 10vh;
    top: 90px;
    position: absolute;
  }

  &--title {
    text-align: center;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 10vh;
    margin-bottom: 2vh;
    font-size: $contact-page-title-size;
    font-weight: $contact-page-title-weight;
  }
}

.matan-form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30%;
  margin-right: 30%;

  @include media("<tablet") {
    flex-direction: column;
    margin-left: 10%;
    margin-right: 10%;
  }

  &--input {
    margin: 13px;
    margin-top: 5vh;

    @include media("<tablet") {
      margin-top: 0vh;
    }

    &--message {
      margin-left: 13px;
      margin-right: 13px;
    }
  }
}

.buttons {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 3vh;

  @include media("<=tablet") {
    margin-bottom: 5vh;
  }
}
</style>
