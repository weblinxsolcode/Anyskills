<template>
  <div
    class="col-12 settings_menu bg-white boder_bg_shadow px-lg-4 px-2 width_iz_custom_setting py-3 d-flex flex-column"
  >
    <div class="pb-2 border_bottom_iz">
      <p
        class="fs-5 fw-bold text_green_iz mb-0 d-flex gap-3 align-items-center hover_iz_setting"
      >
        <i class="fas fa-angle-left "></i> Settings
      </p>
    </div>
    <span class="span-cus"> </span>
    <div class="pb-2 border_bottom_iz">
      <NuxtLink to="/Account_settings">
        <p
          class="fs-6 fw-light  noc noc_1 mb-0 d-flex gap-3 align-items-center hover_iz_setting"
          @click="tab('noc_1')"
        >
          Account
        </p>
      </NuxtLink>
    </div>
    <span class="span-cus"> </span>

    <div class="pb-2 border_bottom_iz">
      <NuxtLink to="/Security_settings">
        <p
          class="fs-6 fw-light mb-0 noc noc_2  hover_iz_setting d-flex gap-3 align-items-center"
          @click="tab('noc_2')"
        >
          Security
        </p>
      </NuxtLink>
    </div>
    <span class="span-cus"> </span>
    <div class="pb-2 border_bottom_iz">
      <NuxtLink to="/Billing_settings">
        <p
          class="fs-6 fw-light mb-0 noc noc_3  hover_iz_setting d-flex gap-3 align-items-center"
          @click="tab('noc_3')"
        >
          Billing
        </p>
      </NuxtLink>
    </div>
    <span class="span-cus"> </span>
    <div class="pb-2 border_bottom_iz">
      <NuxtLink to="/Education_settings">
        <p
          class="fs-6 fw-light mb-0 noc noc_4  d-flex gap-3 align-items-center hover_iz_setting"
          @click="tab('noc_4')"
        >
          Education & Cerifications
        </p>
      </NuxtLink>
    </div>
    <span class="span-cus"> </span>
    <div class="pb-2 border_bottom_iz">
      <NuxtLink to="/Employment_settings">
        <p
          class="fs-6 fw-light mb-0 d-flex noc noc_5  gap-3 align-items-center hover_iz_setting"
          @click="tab('noc_5')"
        >
          Employment
        </p>
      </NuxtLink>
    </div>
    <span class="span-cus"> </span>
    <div class="pb-2 border_bottom_iz">
      <NuxtLink to="/Network_settings">
        <p
          class="fs-6 fw-light mb-0 d-flex noc noc_6 gap-3  align-items-center hover_iz_setting"
          @click="tab('noc_6')"
        >
          Social Network
        </p>
      </NuxtLink>
    </div>
    <span class="span-cus"> </span>
    <div class="pb-2 border_bottom_iz">
      <NuxtLink to="/Notification_setting">
        <p
          class="fs-6 fw-light mb-0 d-flex gap-3 noc noc_7 align-items-center hover_iz_setting"
          @click="tab('noc_7')"
        >
          Notifications
        </p>
      </NuxtLink>
    </div>
  </div>
</template>
<style scoped>

/* .hover_iz_setting{
  color: #000;

}
.noc_active,

.hover_iz_setting:hover {
  color: #7dce95 !important;
  cursor: pointer;
  user-select: none;
  transition: 0.9 ease;
} */
a{
  color: black;
}
a.nuxt-link-exact-active {
  color: #7dce95 !important;
}
</style>
<script>
import NotificationTab from "../components/NotificationTab.vue";
export default {
  components: { NotificationTab },
  methods: {
    tab(ele) {
      document.querySelectorAll(".noc").forEach((element) => {
        element.classList.remove("noc_active");
      });
      document.querySelector("." + ele).classList.add("noc_active");
      // ele.classList.add("btn_active")
      // console.log(ele)
    },
  },
};
</script>
