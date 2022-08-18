<template>
  <div>
    <Network />
    <div class="soc-light-bg">
      <div class="container">
        <img src="~assets/images/cover.png" class="w-100" alt="" />
        <div class="row">
          <SideBar />
          <div class="col-12 col-lg-9 col-md-9 mt-lg-3">
            <div class="mt-2">
              <div class="d-flex camp justify-content-between">
                <div class="container px-0 ps-lg-3 tabs d-flex gap-2 camp">
                  <NuxtLink to="/social_home_main">
                    <div class="">
                      <p class="text-muted pb-2 tab tab_nav_1" @click="tab('tab_nav_1')">
                        Posts
                      </p>
                    </div>
                  </NuxtLink>
                  <NuxtLink to="/social_home_main_Campaigns">
                    <div class="">
                      <p
                        class="text-muted pb-2 tab tab_nav_2 btn_active"
                        @click="tab('tab_nav_2')"
                      >
                        Campaigns
                      </p>
                    </div>
                  </NuxtLink>

                  <div class="">
                    <p
                      class="text-muted for_pointer pb-2 tab tab_nav_3"
                      @click="tab('tab_nav_3')"
                    >
                      Events
                    </p>
                  </div>

                  <div>
                    <p
                      class="text-muted for_pointer pb-2 tab tab_nav_4"
                      @click="tab('tab_nav_4')"
                    >
                      Photos
                    </p>
                  </div>
                  <div>
                    <p
                      class="text-muted for_pointer pb-2 tab tab_nav_5"
                      @click="tab('tab_nav_5')"
                    >
                      Reviews
                    </p>
                  </div>
                </div>
                <div class="text-end">
                  <button class="share_btn fs-7" style="border-radius: 3px">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-12">
              <div class="text-end mx-2">
                <NuxtLink to="/main_Campaigns_2">
                  <p class="mb-0 green fs-6">Create Campaigns</p>
                </NuxtLink>
              </div>
              <!-- big cards end -->
              <div class="boder_bg_shadow mt-4">
                <div class="row">
                  <div class="col-4">
                    <img
                      src="~assets/images/soc_Campaigns_p_01.png"
                      class="img-fluid my-3 ms-3"
                      alt=""
                    />
                  </div>
                  <div class="col-8 mt-3 px-4">
                    <div class="d-flex justify-content-between">
                      <p class="fs-7 mb-0 com_color">7 Aug, 2019 - 14 Aug, 2019</p>
                      <span><i class="gray fs-5 fas fa-ellipsis-h"></i></span>
                    </div>
                    <p class="fs-6 fw-bolder mb-0">NYSC, Pre-service & I.T Internship</p>
                    <p class="mb-0 fs-7 gray">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum arcu
                      lectus ultrices potenti morbi tincidunt proin sem
                    </p>
                    <p class="mb-0 fs-7 fw-bold com_color">| 10:00 - 12:00PM</p>
                  </div>
                </div>
              </div>
              <div class="boder_bg_shadow mt-4">
                <div class="row">
                  <div class="col-4">
                    <img
                      src="~assets/images/soc_Campaigns_p_02.png"
                      class="img-fluid my-3 ms-3"
                      alt=""
                    />
                  </div>
                  <div class="col-8 mt-3 px-4">
                    <div class="d-flex justify-content-between">
                      <p class="fs-7 mb-0 com_color">7 Aug, 2019 - 14 Aug, 2019</p>
                      <span><i class="gray fs-5 fas fa-ellipsis-h"></i></span>
                    </div>
                    <p class="fs-6 fw-bolder mb-0">NYSC, Pre-service & I.T Internship</p>
                    <p class="mb-0 fs-7 gray">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum arcu
                      lectus ultrices potenti morbi tincidunt proin sem
                    </p>
                    <p class="mb-0 fs-7 fw-bold com_color">| 10:00 - 12:00PM</p>
                  </div>
                </div>
              </div>
              <div class="boder_bg_shadow mt-4">
                <div class="row">
                  <div class="col-4">
                    <img
                      src="~assets/images/soc_Campaigns_p_03.png"
                      class="img-fluid my-3 ms-3"
                      alt=""
                    />
                  </div>
                  <div class="col-8 mt-3 px-4">
                    <div class="d-flex justify-content-between">
                      <p class="fs-7 mb-0 com_color">7 Aug, 2019 - 14 Aug, 2019</p>
                      <span><i class="gray fs-5 fas fa-ellipsis-h"></i></span>
                    </div>
                    <p class="fs-6 fw-bolder mb-0">NYSC, Pre-service & I.T Internship</p>
                    <p class="mb-0 fs-7 gray">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum arcu
                      lectus ultrices potenti morbi tincidunt proin sem
                    </p>
                    <p class="mb-0 fs-7 fw-bold com_color">| 10:00 - 12:00PM</p>
                  </div>
                </div>
              </div>
              <div class="boder_bg_shadow mt-4">
                <div class="row">
                  <div class="col-4">
                    <img
                      src="~assets/images/soc_Campaigns_p_04.png"
                      class="img-fluid my-3 ms-3"
                      alt=""
                    />
                  </div>
                  <div class="col-8 mt-3 px-4">
                    <div class="d-flex justify-content-between">
                      <p class="fs-7 mb-0 com_color">7 Aug, 2019 - 14 Aug, 2019</p>
                      <span><i class="gray fs-5 fas fa-ellipsis-h"></i></span>
                    </div>
                    <p class="fs-6 fw-bolder mb-0">NYSC, Pre-service & I.T Internship</p>
                    <p class="mb-0 fs-7 gray">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum arcu
                      lectus ultrices potenti morbi tincidunt proin sem
                    </p>
                    <p class="mb-0 fs-7 fw-bold com_color">| 10:00 - 12:00PM</p>
                  </div>
                </div>
              </div>
              <!-- big card end -->
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
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
