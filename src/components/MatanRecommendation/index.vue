<template>
  <div class="recommnedations-container">
    <div class="title">
      I was lucky enough to work with some wonderful people over the years
    </div>
    <m-slider
      class="slider"
      :data="exampleData.all"
      @on-slider-switch="onSliderSwitch"
      :interval="switchInterval"
    >
      <transition name="slide-fade" mode="out-in">
        <div
          class="recommnedation"
          :key="exampleData.all[exampleData.selectedIndex]"
        >
          <!-- Avatar -->
          <img
            :src="exampleData.all[exampleData.selectedIndex].avatar"
            class="recommnedation--avatar"
          />
          <!-- Quote -->
          <div class="recommnedation--quote">
            {{ exampleData.all[exampleData.selectedIndex].quote }}
          </div>

          <!-- Name & Work -->
          <div class="recommnedation--name">
            {{ exampleData.all[exampleData.selectedIndex].name }}
          </div>
          <div class="recommnedation--work">
            {{ exampleData.all[exampleData.selectedIndex].workAt }}
          </div>
        </div>
      </transition>
    </m-slider>
  </div>
</template>

<script>
const SWITCH_INTERVAL = 5000

export default {
  // local state
  data() {
    return {
      // slider example data
      exampleData: {
        all: [
          {
            avatar:
              "https://media-exp1.licdn.com/dms/image/C5603AQG_qLuoP5-XTA/profile-displayphoto-shrink_800_800/0?e=1605744000&v=beta&t=e16Sja3djK5Y-5icuhdOCXHpkbOZunT3fRFz6OpPbHM",
            name: "Tim Heubach",
            workAt: "Maccabi Netanya",
            quote: `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."`
          },
          {
            avatar:
              "https://media-exp1.licdn.com/dms/image/C5603AQFZvzKVyMxUFw/profile-displayphoto-shrink_400_400/0?e=1605744000&v=beta&t=N_4u7eeaGik97mJ2UCj4l-werfS3563JKGgSE0io3Rg",
            name: "Matan Yechiel",
            workAt: "Somewhere",
            quote: `"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock."`
          },
          {
            avatar:
              "https://media-exp1.licdn.com/dms/image/C5103AQEpWsaK05aByg/profile-displayphoto-shrink_400_400/0?e=1605744000&v=beta&t=ODq9iU-Md5nWIWGMV3KFfoY8_ZFqz_-5ssMmZOqYNXs",
            name: "Almog Gever",
            workAt: "Some place",
            quote: `"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form."`
          }
        ],
        selectedIndex: 0
      }
    }
  },

  // computed properties
  computed: {
    /**
     * Returns switch interval
     */
    switchInterval() {
      return SWITCH_INTERVAL
    }
  },

  // methods
  methods: {
    /**
     * On Slider Switch
     */
    onSliderSwitch(i) {
      this.$set(this.exampleData, "selectedIndex", i)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/_main.scss";
// recommnedations-container
.recommnedations-container {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.slider {
  margin-top: 8rem;
}

// reccomandation
.recommnedation {
  &--avatar {
    border-radius: 50%;
    height: 7rem;
    width: 7rem;
  }

  &--quote {
    height: 5rem;
    margin-top: 5vh;
    font-family: $section-title-font-family;
    font-weight: 300;
    margin-left: 25%;
    margin-right: 25%;

    @include media("<tablet") {
      margin-left: 3rem;
      margin-right: 3rem;
    }
  }

  &--name {
    margin-top: 10vh;
    font-family: $section-title-font-family;
    font-weight: map-get($font-weights, "bold");
    font-size: 20px;

    @include media("<tablet") {
      margin-top: 33vh;
    }
  }

  &--work {
    font-size: 15px;
  }
}

.title {
  font-family: $section-title-font-family;
  font-size: $section-title-font-size;
  font-weight: $section-title-font-weight;
  margin-left: 5%;
  margin-right: 5%;
}

.subtitle {
  margin-top: 5px;
  font-size: 18px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
