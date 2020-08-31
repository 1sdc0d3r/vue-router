<template>
  <span class="go-back">
    <button @click="goBack">Go Back</button>
  </span>
</template>
<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.go-back {
  display: flex;
  cursor: pointer;
  button {
    border: 0;
  }
}
</style>
