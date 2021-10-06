<template>
  <div class="recommnedations-container">
    <hr class="main-logo" />
    <div class="title">
      Recommnedations
    </div>
    <div class="subtitle">
      I was lucky enough to work with some wonderful people over the years
    </div>
    <m-slider
      class="slider"
      :data="exampleData.all"
      @on-slider-switch="onSliderSwitch"
      :interval="switchInterval"
    >
      <transition name="slide-fade" mode="out-in">
        <div class="recommnedation" :key="exampleData.selectedIndex">
          <!-- Avatar -->
          <img
            :src="exampleData.all[exampleData.selectedIndex].avatar"
            @click="
              onLinkedInPress(
                exampleData.all[exampleData.selectedIndex].linkedin
              )
            "
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
const SWITCH_INTERVAL = 7000

export default {
  // local state
  data() {
    return {
      // slider example data
      exampleData: {
        all: [
          {
            avatar:
              "https://media-exp1.licdn.com/dms/image/C5603AQFUli6dmENWjg/profile-displayphoto-shrink_800_800/0/1558605661116?e=1639008000&v=beta&t=4FU-nbkPKViALhzOvFs5uNqpTKfyHg8-GbJ0DaEz8Zs",
            name: "Eran Ribak",
            linkedin: "https://www.linkedin.com/in/eran-ribak-38a13434/",
            workAt: "IT Management Professional, The Coca-Cola Company",
            quote: `"I had the privilege of being the direct director of Matan for about two years. Matan is smart, hardworking and always wants to learn new things. Beyond work, Matan is a wonderful friend and a fun person to be around. I had the pleasure of working with him."`
          },
          {
            avatar:
              "https://media-exp1.licdn.com/dms/image/C5603AQH_hNG1rOPVgg/profile-displayphoto-shrink_800_800/0/1607375937413?e=1639008000&v=beta&t=ZDFX1Wdh09Sa8-Yv0HV3ien336B7yf7SHOhmvXd1nhE",
            name: "Liel Bach",
            linkedin: "https://www.linkedin.com/in/liel-bach-140433100/",
            workAt: "Big Data Developer, Goverment",
            quote: `"I have worked with Matan on a joint project, in which we developed a mobile app. Working with Matan was wonderful. He is professional, excellent at problem solving and a great co-worker."`
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
    },

    /**
     * On linkdin press
     */
    onLinkedInPress(link) {
      if (link) {
        window.open(link, "_blank")
      }
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
  margin-top: 5rem;
}

// reccomandation
.recommnedation {
  &--avatar {
    border-radius: 50%;
    height: 8rem;
    width: 8rem;
    cursor: pointer;
  }

  &--quote {
    height: 10rem;
    margin-top: 2rem;
    font-family: $section-title-font-family;
    font-weight: 400;
    margin-left: 25%;
    margin-right: 25%;

    @include media("<tablet") {
      height: 20rem;
      margin-left: 3rem;
      margin-right: 3rem;
    }
  }

  &--name {
    font-family: $section-title-font-family;
    font-weight: map-get($font-weights, "bold");
    font-size: 20px;
  }

  &--work {
    font-size: 15px;
    margin-left: 5%;
    margin-right: 5%;
  }
}

.title {
  font-family: $section-title-font-family;
  font-size: $section-title-font-size;
  font-weight: $section-title-font-weight;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5rem;

  @include media("<tablet") {
    margin-top: 5rem;
  }
}

.subtitle {
  margin-left: 5%;
  margin-right: 5%;
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
.main-logo {
  border-top: 1px map-deep-get($matan-colors, "grey", "light");
}
</style>
