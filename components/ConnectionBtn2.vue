<template>
  <div class="form-box">
    <div class="button-box d-flex">
      <div id="btn"></div>
      <NuxtLink to="Myconnection">
        <button type="button" class="toggle-btn" id="toggle-btn-c" @click="leftClick">
          Following ( 160 )
        </button>
      </NuxtLink>
      <button
        type="button"
        class="toggle-btn ms-4 text-light"
        id="toggle-btn-c-2"
        @click="rightClick"
      >
        Followers (200)
      </button>
    </div>
  </div>
</template>
<style scoped>
.button-box {
  width: auto;
  margin: 35px auto;
  position: relative;
  border-radius: 10px;
  background: #fff;
  /* border: 2px solid; */
}

.toggle-btn {
  padding: 5px;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
  text-align: center;
}

#btn {
  left: 140px;
  top: 0;
  margin-bottom: 10px;
  position: absolute;
  width: 140px;
  height: 43px;
  margin-left: -10px;
  margin-top: -5px;
  background: #52be71;
  border-radius: 10px;
  transition: 0.5s;
}
</style>

<script>
export default {
  methods: {
    async leftClick() {
      document.getElementById("btn").style.left = "0";
      document.getElementById("toggle-btn-c").classList.add("text-light");
      document.getElementById("toggle-btn-c-2").classList.remove("text-light");
    },
    async rightClick() {
      document.getElementById("btn").style.left = "142px";
      document.getElementById("toggle-btn-c").classList.remove("text-light");
      document.getElementById("toggle-btn-c-2").classList.add("text-light");

      //   document.getElementById("toggle-btn-c-2").style.toggleClass.color = "white";
    },
  },
};
</script>
