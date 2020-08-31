// todo fix non autocloseing tags and brackets
<template>
  <div>
    <GoBack />
    <section class="destination">
      <h1>{{ destination.name }}</h1>
      <div class="destination-details">
        <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name" />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top experiences in {{ destination.name }}</h2>
      <div class="cards">
        <div class="card" v-for="experience in destination.experiences" :key="experience.slug">
          <router-link
            :to="{
              name: 'ExperienceDetails',
              params: { experienceSlug: experience.slug }
            }"
          >
            <img :src="require(`@/assets/${experience.image}`)" :alt="experience.name" />
            <span class="card_text">{{ experience.name }}</span>
          </router-link>
        </div>
      </div>
      <router-view :key="$route.path" />
    </section>
  </div>
</template>

<script>
import store from "@/store.js";
import GoBack from "@/components/GoBack.vue";
export default {
  components: {
    GoBack
  },
  // data() {
  //   return {
  //     slug: this.$route.params.slug,
  //   };
  // },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.slug === this.slug
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.destination-details {
  display: flex;
  justify-content: space-between;
  img {
    height: auto;
    width: 100%;
    max-height: 400px;
    max-width: 600px;
  }
  p {
    margin: 0 40px;
    font-size: 20px;
    text-align: left;
  }
}
.experiences {
  .cards {
    display: flex;
    justify-content: space-between;
    .card {
      padding: 0 10px;
      position: relative;
      img {
        max-height: 200px;
        width: 90%;
      }
      .card_text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 25px;
        font-weight: bold;
        text-decoration: none;
      }
    }
  }
}
</style>
