<template>
  <div>
    <div class="conatiner text-center mt-5">
      <p class="fs-5 mb-0 fw-bolder">{{ hed }} with</p>
      <div class="w_55 mx-auto">
        <div class="d-flex justify-content-center mt-lg-4">
          <span class="cst-hr w-100"></span>
        </div>
        <div
          class="d-flex justify-content-lg-between justify-content-center gap-3 mt-lg-5 mt-3"
        >
          <button class="Gbtn w-40">
            <img src="~assets/images/googleLogo.png" alt="" />
            {{ topic }} With Goolge
          </button>
          <button class="Gbtn w-40">
            <img src="~assets/images/facebook.png" alt="" />
            {{ topic }} With Facebook
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["topic", "hed"],
};
</script>
