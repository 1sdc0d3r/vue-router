<template>
  <div class="home">
    <h1>
      All Destinations
    </h1>
    <div class="destinations">
      <div v-for="destination in destinations" :key="destination.name">
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug },
          }"
          >{{ destination.name }}</router-link
        >
        <figure>
          <router-link
            :to="{
              name: 'DestinationDetails',
              params: { slug: destination.slug },
            }"
          >
            <img
              :src="require(`@/assets/${destination.image}`)"
              :alt="destination.name"
            />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>
<style lang="scss" scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
  img {
    max-width: 200px;
  }
  .destinations {
    display: flex;
    justify-content: space-between;
    a {
      font-size: 2em;
      color: black;
      text-decoration: none;
      &:hover,
      &:visited {
        text-decoration: underline;
      }
    }
  }
}
</style>
