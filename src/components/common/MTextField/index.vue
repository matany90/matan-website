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
  </div>
</template>

<script>
/* eslint-disable */
// format pattern
const formats = {
  email: [
    v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
  ]
}
/* eslint-enable */

/**
 * Define the input text field
 */
export default {
  // set the component name
  name: "m-text-field",

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
    format: {
      type: String,
      default: "",
      enum: ["email"]
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
      return ["m-text-field--input", this.fullBox ? "m-text-field--box" : ""]
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
          vm.handleValidation(value)

          // emit value
          vm.$emit("input", value)
        }
      }
    }
  },

  // component functions
  methods: {
    /**
     * Handle validation on input
     */
    handleValidation(value) {
      let status = false

      if (this.format) {
        // check validation by format
        status = formats[this.format].every(cb => cb(value))
      } else if (this.pattern) {
        // check validation by pattern
        status = this.pattern.test(value)
      }

      this.$emit("validation", status)
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
}
</style>
