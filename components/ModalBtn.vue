<template>
  <div class="text-end">
    <button class="M-btn" @click="$bvModal.hide(id)">
      <i class="fa fa-times" aria-hidden="true"></i>
    </button>
  </div>
</template>
<script>
export default {
  props: ['id'],
};
</script>
<style scoped>
.M-btn {
  background-color: transparent !important ;
  border: 2px solid black;
  width: 30px;
  font-weight: 900px;
  height: 30px;
  border-radius: 50px;
}
</style>
