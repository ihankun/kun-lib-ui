<template>
  <div class="home">
    <h1>测试项目</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "HomeView",
  data() {
    return {
      name: "aaa",
      data: {
        age: 1,
      },
    };
  },
  created() {
  },
  components: {
  },
});
</script>
<style>
.home {
  height: 100vh;
}
</style>
