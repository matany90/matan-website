<template>
  <div class="m-menu" v-on="$listeners">
    <div class="m-menu--item m-menu--closebtn" @click="onMenuClick">
      &times;
    </div>
    <hr class="divider" />
    <div class="m-menu--item" @click="pushToContact">
      <m-icon name="mail" style="width: 3vh;" />
      <div class="m-menu--item--text">
        {{ $t("buttons.sayHello") }}
      </div>
    </div>
    <hr class="divider" />
    <div class="m-menu--item" @click="downloadCV">
      <m-icon name="cv" style="width: 3vh;" />
      <div class="m-menu--item--text">
        {{ $t("buttons.getCV") }}
      </div>
    </div>
    <hr class="divider" />
  </div>
</template>

<script>
import { cvLink } from "../../../configs"

export default {
  // methods
  methods: {
    /**
     * Emit toggle event
     */
    onMenuClick() {
      this.$emit("on-menu-press")
    },

    /**
     * Download cv
     */
    downloadCV() {
      window.location.href = cvLink
    },

    /**
     * Push to contact page
     */
    pushToContact() {
      this.$router.push("/contact")
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../../style/_main.scss";

/* The side navigation menu */
.m-menu {
  height: 100%; /* 100% Full-height */
  width: 250px; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  right: 0;
  background: white;
  @include shadow(2px 2px 6px 2px rgba(0, 0, 0, 0.1));
  // border: 2px solid map-deep-get($matan-colors, "primary");
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s;

  &--item {
    display: flex;
    flex-direction: row;
    margin-bottom: 4px;
    margin-top: 4px;
    padding: 8px 8px 8px 32px;
    // padding: 5px;
    text-decoration: none;
    font-size: 20px;
    color: map-deep-get($matan-colors, "primary");
    transition: 0.3s;

    &:hover {
      color: map-deep-get($matan-colors, "secondary");
      cursor: pointer;
    }

    &--text {
      margin-left: 20px;
    }
  }

  &--closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left 0.5s;
  padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the m-menu (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .m-menu {
    padding-top: 15px;
  }
  .m-menu div {
    font-size: 18px;
  }
}

.divider {
  border-top: 1px map-deep-get($matan-colors, "grey", "light");
}
</style>
