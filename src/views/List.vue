<template>
  <div class="m-list">
      <div>1</div>
  </div>
</template>

<script>
import Api from "@/api/index.js";

export default {
  name: "list",
  data() {
    return {
    };
  },
  methods: {
  },
  created() {
    console.log('created')
    Api.getList('?type=2').then((res) => {
      console.log(res)
    })
  },  
};
</script>

<style scoped>
.m-list {
  margin: 0 20px;
  padding: 0;
}

</style>
