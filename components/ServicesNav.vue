<template>
  <div class="position-r">
    <b-navbar
      toggleable="lg"
      type="tranparent"
      variant="transparent"
      class="services_nav nav-br pb-0"
      style="margin-top: -30px"
    >
      <b-navbar-toggle target="nav-collapse3"
        ><i class="fas fa-angle-double-right fs-1"></i
      ></b-navbar-toggle>
      <b-collapse id="nav-collapse3" is-nav>
        <div class="container tabs py-3 pb-0 px-3">
          <NuxtLink class="mt-2" to="/graphics_design_jobs">
            <div class="tabs color_important">
              <p
                style="height: 39px"
                class="color_light_gray tab pe-2 tab_1"
                @click="tab('tab_1')"
              >
                Graphics & Design
              </p>
            </div>
          </NuxtLink>
          <div class="color_important">
            <p class="color_light_gray tab px-2 tab_2" @click="tab('tab_2')">
              Music & Audio
            </p>
          </div>
          <div class="color_important">
            <p class="color_light_gray tab px-2 tab_3" @click="tab('tab_3')">
              Programming & Tech
            </p>
          </div>
          <div class="color_important">
            <p class="color_light_gray tab px-1 tab_4" @click="tab('tab_4')">
              Digital Marketing
            </p>
          </div>
          <div class="color_important">
            <p class="color_light_gray px-1 tab tab_5" @click="tab('tab_5')">Business</p>
          </div>
          <div class="color_important">
            <p class="color_light_gray tab px-1 tab_6" @click="tab('tab_6')">
              Writing & Translation
            </p>
          </div>
          <div class="color_important">
            <p class="color_light_gray tab px-1 tab_7" @click="tab('tab_7')">Lifestyle</p>
          </div>
          <div class="color_important">
            <p class="color_light_gray tab px-2 tab_8" @click="tab('tab_8')">
              Video & Animation
            </p>
          </div>
          <div class="color_important">
            <p class="color_light_gray px-1 tab tab_9" @click="tab('tab_9')">
              Flight, Shipping & Transportation
            </p>
          </div>
          <div class="color_important">
            <p class="color_light_gray px-1 tab tab_10" @click="tab('tab_10')">
              Local Jobs & Services
            </p>
          </div>
        </div>
      </b-collapse>
    </b-navbar>
    <span class="hr-cus"></span>
    <!-- <hr style="margin-top: -15px; color: lightgrey" /> -->
  </div>
</template>

<style scoped>
.hr-cus {
  height: 1px;
  background-color: #eeeded;
  /* z-index: 99999; */
  width: 100%;
  z-index: -1;
  position: absolute;
  top: 57px;
}

.tabs {
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  flex-wrap: wrap;
  margin-top: -10px;
  cursor: pointer;
  user-select: none;
}
.pointer {
  cursor: pointer;
  user-select: none;
}
.tabs div p {
  font-size: 12px;
  /* margin: 5px 3px; */
  padding: 7px 0px 10px 0px !important;
  font-weight: bold;
  border-bottom: 3px solid transparent;
}

.tabs div p:hover {
  border-bottom: 3px solid #52be71;
  transition: 0s;
}

.btn_active {
  /* margin-top: 10px; */
  color: #52be71;
  border-bottom: 3px solid #52be71 !important;
}
.tab:hover {
  color: #52be71;
}
</style>
<script>
export default {
  methods: {
    tab(ele) {
      document.querySelectorAll(".tab").forEach((element) => {
        element.classList.remove("btn_active");
      });
      document.querySelector("." + ele).classList.add("btn_active");
      // ele.classList.add("btn_active")
      // console.log(ele)
    },
  },
};
</script>
