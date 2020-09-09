<template>
  <div :class="classList" :ref="`m-text-field-${_uid}`">
    <label :for="_uid" v-if="label">
      {{ label }}
    </label>
    <div class="m-text-field--wrap">
      <input
        v-on="inputListeners"
        :value="value"
        :type="type"
        :id="_uid"
        :placeholder="placeholder"
        :class="classInputList"
        dir="auto"
      />

      <r-icon v-if="icon" :icon="icon" />
    </div>

    <div class="m-text-field--error-container">
      <label v-show="validation && !isInputVaid" :class="labelClasses">
        {{ $t(`errors.validate${capitalizeFirstLetter(validation)}`) }}
      </label>
    </div>
  </div>
</template>

<script>
import { toUpper, validateEmail } from "../../../utils"

// Interval timeout
const INTERVAL_TIMEOUT = 1000

/**
 * Define the input text field
 */
export default {
  // set the component name
  name: "m-text-field",

  // local state
  data() {
    return {
      // is input valid
      isInputVaid: true,

      // typing timer
      timer: null
    }
  },

  // external props
  props: {
    // value
    value: {
      type: String,
      default: ""
    },

    // type of the field
    type: {
      type: String,
      default: "text"
    },

    // field label
    label: {
      type: String,
      default: ""
    },

    // dense layout
    dense: {
      type: Boolean,
      default: false
    },

    // text placeholder
    placeholder: {
      type: String,
      default: undefined
    },

    // start with focus on the element
    autofocus: {
      type: Boolean,
      default: false
    },

    // format of the input
    validation: {
      type: String,
      default: ""
    },

    // pattern for the input validation
    pattern: {
      type: RegExp,
      default: () => /[\w\W]+/
    },

    // icon
    icon: {
      type: String,
      default: ""
    },

    // full box
    fullBox: {
      type: Boolean,
      default: false
    }
  },

  /**
   * Init the component
   */
  mounted() {
    if (this.autofocus) {
      const el = this.$refs[`m-text-field-${this._uid}`]
      el.querySelector("input").focus()
    }
  },

  // calculated properties
  computed: {
    /**
     * Render class list for the input
     */
    classList() {
      return ["m-text-field", this.dense ? "m-text-field--dense" : undefined]
    },

    /**
     * Get input class list
     */
    classInputList() {
      return [
        "m-text-field--input",
        this.fullBox ? "m-text-field--box" : "",
        this.isInputVaid ? "" : "m-text-field--error"
      ]
    },

    /**
     * Label classes
     */
    labelClasses() {
      return [this.isInputVaid ? "" : "m-text-field--label-error"]
    },

    /**
     * Object with all the listeners on the input
     */
    inputListeners() {
      // get reference to vue instance
      const vm = this

      return {
        // spread all listeners
        ...this.$listeners,

        /**
         * Overwrite input listener
         */
        input(e) {
          // get value
          const { value } = e.target

          // handle validation
          if (vm.validation) {
            vm.validateInput(value)
          }

          // emit value
          vm.$emit("input", value)
        }
      }
    }
  },

  // component functions
  methods: {
    /**
     * Validate email input
     */
    validateInput(value) {
      console.log("valueee", value)
      this.timer = null
      this.timer = setTimeout(() => {
        this.isInputVaid = this.validate(value)
        if (value === "") this.isInputVaid = true
      }, INTERVAL_TIMEOUT)
    },

    /**
     * Validate values
     */
    validate(value) {
      // validation
      switch (this.validation) {
        case "email":
          return validateEmail(value)
        default:
          return true
      }
    },

    /**
     * capitalize First Letter
     */
    capitalizeFirstLetter(value) {
      return toUpper(value)
    },

    /**
     * On close
     */
    onCloseDialog() {
      this.isInputVaid = true
    }
  }
}
</script>

<style lang="scss">
@import "../../../style/_main.scss";

.m-text-field {
  position: relative;
  width: 100%;
  margin: 5px 0 5px 0;
  user-select: none;

  &--dense {
    input {
      padding: $dense-padding !important;
    }
  }

  &--wrap {
    display: flex;
    flex-direction: row;
    line-height: 100%;
    margin-top: 3px;
    // height: 100%;

    background: white;

    border: 1px solid map-deep-get($matan-colors, "grey", "light");
    border-radius: $border-radius;

    &:focus {
      border: 1px solid map-deep-get($matan-colors, "grey", "light");
    }
  }

  &--input {
    width: 100%;
    min-width: 0px;
    line-height: $text-field-line-height;
    padding: $text-field-padding;
    cursor: text;
    outline: none;
    font-size: $root-font-size;
    background: transparent;
    border: none;
  }

  &--box {
    padding-bottom: 150px;
  }

  &--error {
    border: 1px solid red;
    border-radius: $border-radius;
  }

  &--label-error {
    color: red;
    font-size: $text-field-error-size;
  }

  &--error-container {
    height: 1vh;
    @include media("<tablet") {
      height: 2vh;
    }
  }
}
</style>
