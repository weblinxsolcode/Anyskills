<template>
  <div class="follower-card mt-2 ">
    <div class="d-flex justify-content-between align-items-center">
      <p class="mb-0 fs-7 fw-bolder text-gg">{{ text1 }}</p>
       <!-- <img :src="require(`./assets/${imageUrl}`)" /> -->
       <img :src= icon alt="">
      <!-- <img  src="~assets/images/{{icon}}" alt="" /> -->
    </div>
    <div>
      <p class="mb-0 fs-6 mt-2 fw-bolder">{{ text2 }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: { text1: "String", text2: " String ", icon: "String" },
};
</script>
<style scoped>
.follower-card {
  background: #ffffff;
  box-shadow: 0px 4.79224px 19.169px rgba(0, 0, 0, 0.05);
  border-radius: 9.58449px;
  padding: 15px;
  width: 150px;
  height: 100px;
}
</style>
