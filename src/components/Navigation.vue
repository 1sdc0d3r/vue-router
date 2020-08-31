<template>
  <nav>
    <ul className="nav-links">
      <li className="links">
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li
        v-for="destination in destinations"
        :key="destination.name"
        className="links"
      >
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug },
          }"
        >
          {{ destination.name }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>
<script>
import store from "@/store.js";

export default {
  data() {
    return {
      // destinationId: this.$route.params.id,
      destinations: store.destinations,
    };
  },
};
</script>

<style lang="scss" scoped>
nav {
  ul {
    display: flex;
    justify-content: center;
    li {
      list-style: none;
      padding-right: 20px;
      &:hover {
        text-decoration: underline;
      }
      a {
        color: #2c3e50;
        font-weight: bold;
        /* padding: 0 10px; */
        text-decoration: none;

        &.nav-active {
          color: #42b983;
        }
      }
    }
  }
}
</style>
