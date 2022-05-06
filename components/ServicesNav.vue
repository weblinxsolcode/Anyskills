<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="tranparent"
      variant="transparent"
      class="services_nav"
      
      style="margin-top: -20px"
    >
      <b-navbar-toggle target="nav-collapse3"
        ><i class="fas fa-angle-double-right fs-1"></i
      ></b-navbar-toggle>
      <b-collapse id="nav-collapse3" is-nav>
        <div class="container tabs px-5">
          <NuxtLink to="/graphics_design_jobs">
          <div class="">
            <p class="text-muted tab tab_1 btn_active" @click="tab('tab_1')">
              Graphics & Design
            </p>
          </div>
          </NuxtLink>
          <div>
            <p class="text-muted tab tab_2" @click="tab('tab_2')">
              Music & Audio
            </p>
          </div>
          <div>
            <p class="text-muted tab tab_3" @click="tab('tab_3')">
              Programming & Tech
            </p>
          </div>
          <div>
            <p class="text-muted tab tab_4" @click="tab('tab_4')">
              Digital Marketing
            </p>
          </div>
          <div>
            <p class="text-muted tab tab_5" @click="tab('tab_5')">Business</p>
          </div>
          <div>
            <p class="text-muted tab tab_6" @click="tab('tab_6')">
              Writing & Translation
            </p>
          </div>
          <div>
            <p class="text-muted tab tab_7" @click="tab('tab_7')">Lifestyle</p>
          </div>
          <div>
            <p class="text-muted tab tab_8" @click="tab('tab_8')">
              Video & Animation
            </p>
          </div>
          <div>
            <p class="text-muted tab tab_9" @click="tab('tab_9')">
              Flight, Shipping & Transportation
            </p>
          </div>
          <div>
            <p class="text-muted tab tab_10" @click="tab('tab_10')">
              Local Jobs & Services
            </p>
          </div>
        </div>
      </b-collapse>
    </b-navbar>
    <hr style="margin-top: -15px; color: lightgrey" />
  </div>
</template>



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
