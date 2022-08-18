<template>
  <div class="d-flex main-search gap-2 align-items-center">
    <span class="ms-2">
      <i class="fa fa-search"></i>
    </span>
    <span>
      <input type="Search" placeholder="Search" />
    </span>
  </div>
</template>

<style scoped>
.main-search {
  background: #f4f5f7;
  border-radius: 63.0663px;
  color: #c4cdd5 !important;
  padding: 4px;
  width: 270px !important;
  height: 40px;
}
.main-search span input {
  background: transparent !important;
  border: none !important;
  color: #c4cdd5 !important;
}
.main-search span input::placeholder {
  color: #c4cdd5 !important;
}
</style>
