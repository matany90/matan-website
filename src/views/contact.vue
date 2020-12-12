<template>
  <div class="contact-page">
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
      {{ $t("contact.title") }}
    </div>

    <!-- Form -->
    <div class="matan-form">
      <m-text-field
        v-model="name"
        :label="$t('contact.name')"
        class="matan-form--input"
      />
      <m-text-field
        v-model="email"
        validation="email"
        :label="$t('contact.email')"
        class="matan-form--input"
      />
    </div>
    <div class="matan-form">
      <m-text-area
        v-model="body"
        :label="$t('contact.message')"
        class="matan-form--input--message"
        fullBox
      />
    </div>

    <!-- Submit button -->
    <div class="buttons">
      <m-button
        @click="sendEmail"
        rounded
        color="primary"
        :loading="loading"
        :disabled="isDisable"
      >
        {{ $t("buttons.submit") }}
      </m-button>
    </div>
  </div>
</template>

<script>
import api from "@/api"
import { validateEmail } from "../utils"

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
        await api.mail.send(this.email, this.name, this.body)

        // redirect to success page
        this.$router.push("/success")
      } catch (e) {
        console.error("Error: ", e)
      }

      // close loading
      this.loading = false
    }
  },

  //computed properties
  computed: {
    // Is button disable
    isDisable() {
      return !validateEmail(this.email) || !this.name || !this.body
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/_main.scss";

.contact-page {
  animation-name: moveInBottom;
  animation-duration: 1s;
  animation-timing-function: ease-out;

  @keyframes moveInBottom {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
}
.main-logo {
  border-top: 1px map-deep-get($matan-colors, "grey", "light");
  position: relative;

  &--container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &--image {
    width: 7rem;
    top: 70px;
    position: absolute;

    @include media("<tablet") {
      width: 6rem;
      top: 85px;
    }
  }

  &--title {
    text-align: center;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 5rem;
    margin-bottom: 1rem;
    font-size: $contact-page-title-size;
    font-weight: $contact-page-title-weight;
    @include media("<tablet") {
      margin-left: 15%;
      margin-right: 15%;
      margin-bottom: 2rem;
    }
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
  padding-bottom: 5vh;
}
</style>
