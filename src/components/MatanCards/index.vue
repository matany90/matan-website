<template>
  <!-- Cards container -->
  <div class="container">
    <div class="cards">
      <m-card v-for="(card, i) in cards" :key="i" class="cards--card">
        <!-- Icon -->
        <div class="icon cards--icon-container">
          <m-icon :name="card.icon" class="cards--icon-container--icon" />
        </div>

        <!-- title -->
        <div class="title cards--title">{{ card.title }}</div>

        <!-- body -->
        <div class="cards--body">
          <!-- Intro list -->
          <ul
            class="cards--body--intro-list"
            v-for="(line, i) in card.intro.lines"
            :key="i"
          >
            <li class="cards--body--intro-list--line">{{ line }}</li>
          </ul>

          <!-- Frameworks and tools -->
          <div class="cards--body--tools">
            <!-- Framework Title -->
            <div class="cards--body--tools--title">{{ card.tools.title }}</div>

            <!-- Frameworks List -->
            <ul
              class="cards--body--tools--list"
              v-for="(line, i) in card.tools.lines"
              :key="i"
            >
              <li>{{ line }}</li>
            </ul>
          </div>
        </div>
      </m-card>
    </div>
  </div>
</template>

<script>
export default {
  // local state
  data() {
    return {
      cards: [
        {
          title: "Front-end Developer",
          icon: "code",
          intro: {
            lines: [
              "Building user interfaces from scratch.",
              "Using various state management like Redux, Vuex, Mobx.",
              "Experience in building complex UI systems with huge scale of data."
            ]
          },
          tools: {
            title: "Front-end Frameworks and Tools:",
            lines: [
              "Vue.js",
              "React.js",
              "React-Native",
              "SCSS",
              "Vuex",
              "Redux",
              "Mobx"
            ]
          }
        },
        {
          title: "Back-end Developer",
          icon: "server",
          intro: {
            lines: [
              "Experience in various server side architectures - Monolith and Microservices.",
              "Integration with a rich variety of third-party API's",
              "Use of relational and non-relational databases."
            ]
          },
          tools: {
            title: "Back-end Tools and Frameworks:",
            lines: [
              "Node.js",
              "Express",
              "gRCP",
              "Microservices",
              "Apache Beam",
              "Python",
              "Bash",
              "Firestore DB",
              "Big-Query DB",
              "Mongo DB"
            ]
          }
        },
        {
          title: "Cloud Architecture",
          icon: "cloud",
          intro: {
            lines: [
              "Experience in GCP Cloud environment.",
              "Infrastructure management on top of Docker and Kubernetes"
            ]
          },
          tools: {
            title: "Cloud Architecture Tools and Frameworks:",
            lines: [
              "Google Cloud",
              "Docker",
              "Kubernetes",
              "Pubsub",
              "Dataflow"
            ]
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../../style/_main.scss";
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
}

.cards {
  display: flex;
  flex-direction: row;
  height: 800px;
  width: 80%;

  @include media("<=tablet") {
    flex-direction: column;
    height: 100%;
  }

  &--card {
    margin: 5px;
  }

  &--title {
    margin-bottom: 25px;
    font-family: $card-title-font-family;
    font-size: $card-title-font-size;
    color: black;
    font-weight: map-get($font-weights, "bold");
  }

  &--body {
    font-size: $card-content-font-size;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 10px;

    &--intro-list {
      list-style-type: none;

      &--line {
        margin-bottom: 10px;
      }
    }

    &--tools {
      &--title {
        margin-top: 50px;
        color: map-deep-get($matan-colors, "primary");
        font-weight: map-get($font-weights, "bold");
      }

      &--list {
        list-style-type: none;
        margin-top: 7px;
      }
    }
  }

  &--icon-container {
    margin-top: 50px;
    margin-bottom: 25px;
    display: flex;
    justify-content: center;
    align-items: center;

    &--icon {
      width: 60px;
      height: 60px;
    }
  }
}
</style>
