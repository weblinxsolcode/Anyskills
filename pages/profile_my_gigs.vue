<template>
  <div>
    <Nav />
    <ServicesNav />

    
    <CreategivNav2 />

    <div class="soc-light-bg">
      <div class="pos_iz2">
        <img src="~assets/images/cover.png" class="w-100 height_cover cover" alt="" />
        <div class="container position-relative">
          <div class="pos_ab_2">
            <img
              @click="getFile()"
              src="~assets/images/img_add.png"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="container px-lg-4">
        <div class="row px-0">
          <div class="col-12 col-lg-3 col-md-12">
            <div class="sidebar1 boder_bg_shadow xyz mb-5">
              <div class="text-center">
                <div class="pos_izhan">
                  <div>
                    <img
                      src="~assets/images/soc_home_pro.png"
                      class="img-fluid mx-1 img_position rounded-circle"
                      alt=""
                    />
                  </div>
                  <div class="pos_ab_1">
                    <img
                      @click="getFile()"
                      src="~assets/images/img_add.png"
                      class="img-fluid"
                      alt=""
                    />
                    <input
                      type="file"
                      class="form-control d-none form-control-3"
                      id="inputGroupFile02"
                    />
                  </div>
                </div>
                <div class="pt-lg-5">
                  <p class="mb-0 px-2 fw-bolder pt-lg-5 pt-0 fs-5">
                    Prodigy Dan
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      class="mb-3"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5541 6.30341L15.2164 6.07367C14.8432 5.82625 14.6833 5.34908 14.8077 4.92493L14.9143 4.53613C15.092 3.93526 14.6833 3.31671 14.0613 3.21067L13.6525 3.13998C13.2082 3.06929 12.8527 2.73351 12.7817 2.29169L12.7106 1.88521C12.6039 1.26667 11.9819 0.877865 11.3776 1.05459L10.9867 1.1783C10.5601 1.30201 10.0803 1.14296 9.83146 0.789501L9.58265 0.436045C9.20944 -0.0764658 8.48078 -0.147157 8.0187 0.27699L7.71657 0.559755C7.3789 0.860192 6.89905 0.930883 6.49029 0.701137L6.13484 0.506736C5.5839 0.206299 4.89079 0.453718 4.64198 1.03692L4.48203 1.42572C4.32208 1.84987 3.89554 2.11496 3.45124 2.07961L3.04248 2.06194C2.40268 2.0266 1.88728 2.55678 1.9406 3.17533L1.97614 3.5818C2.01169 4.02362 1.7451 4.44777 1.33634 4.6245L0.963127 4.78355C0.376644 5.03097 0.145605 5.72021 0.447733 6.26807L0.660999 6.62152C0.892038 7.01032 0.838721 7.50516 0.536594 7.84094L0.27001 8.14138C-0.156523 8.61855 -0.0676618 9.34313 0.465505 9.69659L0.803177 9.92633C1.17639 10.1738 1.33634 10.6509 1.21194 11.0751L1.05199 11.4815C0.874266 12.0824 1.28303 12.701 1.90505 12.807L2.31382 12.8777C2.75812 12.9484 3.11357 13.2842 3.18465 13.726L3.25574 14.1325C3.36238 14.751 3.9844 15.1398 4.58866 14.9631L4.97965 14.8394C5.40618 14.7157 5.88603 14.8747 6.13484 15.2282L6.38365 15.564C6.75687 16.0765 7.48553 16.1472 7.94761 15.723L8.24974 15.4402C8.58741 15.1398 9.06726 15.0691 9.47602 15.2989L9.83146 15.4933C10.3824 15.7937 11.0755 15.5463 11.3243 14.9631L11.4843 14.5743C11.6442 14.1501 12.0708 13.885 12.5151 13.9204L12.9238 13.9381C13.5636 13.9734 14.079 13.4432 14.0257 12.8247L14.0079 12.4182C13.9724 11.9764 14.239 11.5522 14.6477 11.3755L15.021 11.2164C15.6074 10.969 15.8385 10.2798 15.5363 9.73193L15.3231 9.37848C15.092 8.98968 15.1454 8.49484 15.4475 8.15905L15.7141 7.85862C16.1584 7.39913 16.0695 6.65687 15.5541 6.30341ZM8.463 9.64357L7.00568 11.0751L5.56613 9.6259L4.1799 8.22975L5.63722 6.79825L7.02345 8.1944L10.3469 4.90726L11.7864 6.35643L8.463 9.64357Z"
                        fill="#52BE71"
                      />
                    </svg>
                  </p>
                </div>
                <p class="mb-0 gray">Visual Artist</p>
                <p class="mb-2 gray">Abuja, Nigeria</p>
                <div class="d-flex justify-content-center gap-3">
                  <div class="bg_custom_iz_1">
                    <i class="fab fa-instagram"></i>
                  </div>
                  <div class="bg_custom_iz_1">
                    <i class="fab fa-dribbble"></i>
                  </div>
                  <div class="bg_custom_iz_1">
                    <i class="fab fa-twitter"></i>
                  </div>
                  <div class="bg_custom_iz_1">
                    <i class="fab fa-youtube"></i>
                  </div>
                </div>
              </div>
              <hr class="mt-4" style="color: lightgrey" />
              <div id="my_div_soc" class="p-3">
                <div class="d-flex justify-content-between mx-4 align-items-center">
                  <div>
                    <p class="mb-0">Skills info</p>
                  </div>
                  <div>
                    <div class="bg_red_iz">35%</div>
                  </div>
                </div>
                <div class="d-flex justify-content-between mt-2 mx-4 align-items-center">
                  <div>
                    <p class="mb-0">Profile info</p>
                  </div>
                  <div>
                    <div class="bg_yellow_iz">75%</div>
                  </div>
                </div>
                <div class="d-flex justify-content-between mt-2 mx-4 align-items-center">
                  <div>
                    <p class="mb-0">Billing info</p>
                  </div>
                  <div>
                    <div class="bg_green_iz">Completed</div>
                  </div>
                </div>
                <hr class="mt-4" style="color: lightgrey" />

                <div class="tabs_s tab_5 soc_tab_active2 w-75 mx-auto mb-2">
                  <NuxtLink to="/Account_settings" class="text-white">
                    <div class="row mx-0">
                      <div class="col-5 text-end">
                        <i class="fas fa-cog fs-5"></i>
                      </div>
                      <div class="col-7 text-start px-0">
                        <p class="mb-0 fs-6">Settings</p>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <!-- all request  sec -->
          <div class="col-12 col-lg-8 col-md-12 mt-3 ms-lg-4">
            <div
              class="d-flex align-items-center justify-content-center justify-content-lg-between flex-wrap mt-4"
            >
              <div class="d-flex gap-lg-5 align-items-center flex-wrap">
                <a href="#overview">
                  <NuxtLink
                    class="fs-6 gig_details pb-2 gig_detail_1"
                    @click="tab('gig_detail_1')"
                    to="/profile_view"
                  >
                    My Completed Projects
                  </NuxtLink>
                </a>
                <a href="#description">
                  <NuxtLink
                    class="fs-6 gig_details gig_detail_active pb-2 gig_detail_2"
                    @click="tab('gig_detail_2')"
                    to="#"
                  >
                    My gigs
                  </NuxtLink>
                </a>
                <a href="#seller">
                  <NuxtLink
                    class="fs-6 gig_details pb-2 gig_detail_3"
                    @click="tab('gig_detail_3')"
                    to="/profile_myreviews"
                  >
                    Reviews
                  </NuxtLink>
                </a>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-lg-4 col-md-6 col-12">
                <div class="card gigs">
                  <VueSlickCarousel>
                    <div>
                      <img src="~assets/images/job1.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/job1.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/job1.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/job1.png" class="card-img-top" alt="..." />
                    </div>
                  </VueSlickCarousel>
                  <div class="export"></div>
                  <NuxtLink to="/gig_details">
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-top gap-2 mb-3">
                          <div class="d-flex align-items-center">
                            <img
                              width="45px"
                              src="~assets/images/Profile_Pic.png"
                              alt=""
                            />
                            <div
                              class="d-flex justify-content-start align-items-start flex-column"
                            >
                              <p class="card-title ms-2 fw-bold fs-6 mb-2">
                                Product Design
                              </p>
                              <p
                                class="mb-0 ms-2 fs-7 text-dark"
                                style="margin-top: -5px"
                              >
                                Victor Okoye
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="d-flex justify-content-start gap-3"
                        style="margin-top: -8px"
                      >
                        <p class="mb-0 fs-7 text-muted">Est Delivery Time</p>
                        <p class="mb-0 ms-2 fs-7 green">5 Days</p>
                      </div>
                      <hr style="width: 100%; margin-top: 10px; margin-bottom: 10px" />
                      <div class="d-flex justify-content-between align-items-start">
                        <div
                          class="card-text d-flex justify-content-start align-items-start"
                        >
                          <img src="~assets/images/star.png" class="mt-1" alt="" />
                          <p class="text-warning mb-0 ms-1">5.0</p>
                        </div>

                        <div class="mb-0 d-flex flex-column">
                          <p class="mb-0 text-danger text-start fs-6">Starting at</p>
                          <p class="fw-bold mb-0 text-start">$233.00</p>
                        </div>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12">
                <div class="card gigs">
                  <VueSlickCarousel>
                    <div>
                      <img src="~assets/images/job2.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/gig4.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/gig4.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/gig4.png" class="card-img-top" alt="..." />
                    </div>
                  </VueSlickCarousel>
                  <div class="export"></div>
                  <NuxtLink to="/gig_details">
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-top gap-2 mb-3">
                          <div class="d-flex align-items-center">
                            <img
                              width="45px"
                              src="~assets/images/Profile_Pic.png"
                              alt=""
                            />
                            <div
                              class="d-flex justify-content-start align-items-start flex-column"
                            >
                              <p class="card-title ms-2 fw-bold fs-6 mb-2">
                                Graphic Design
                              </p>
                              <p
                                class="mb-0 ms-2 fs-7 text-dark"
                                style="margin-top: -5px"
                              >
                                Victor Okoye
                              </p>
                              <!-- <p class="mb-0 ms-2 fs-7 text-muted">Est Delivery Time</p> -->
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="d-flex justify-content-start gap-3"
                        style="margin-top: -8px"
                      >
                        <p class="mb-0 fs-7 text-muted">Est Delivery Time</p>
                        <p class="mb-0 ms-2 fs-7 green">5 Days</p>
                      </div>
                      <hr style="width: 100%; margin-top: 10px; margin-bottom: 10px" />
                      <div class="d-flex justify-content-between align-items-start">
                        <div
                          class="card-text d-flex justify-content-start align-items-start"
                        >
                          <img src="~assets/images/star.png" class="mt-1" alt="" />
                          <p class="text-warning mb-0 ms-1">5.0</p>
                        </div>

                        <div class="mb-0 d-flex flex-column">
                          <p class="mb-0 text-danger text-start fs-6">Starting at</p>
                          <p class="fw-bold mb-0 text-start">$233.00</p>
                        </div>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12">
                <div class="card gigs">
                  <VueSlickCarousel>
                    <div>
                      <img src="~assets/images/gig4.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/gig4.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/gig4.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/gig4.png" class="card-img-top" alt="..." />
                    </div>
                  </VueSlickCarousel>
                  <div class="export"></div>
                  <NuxtLink to="/gig_details">
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-top gap-2 mb-3">
                          <div class="d-flex align-items-center">
                            <img
                              width="45px"
                              src="~assets/images/Profile_Pic.png"
                              alt=""
                            />
                            <div
                              class="d-flex justify-content-start align-items-start flex-column"
                            >
                              <p class="card-title ms-2 fw-bold fs-6 mb-2">
                                Graphic Design
                              </p>
                              <p
                                class="mb-0 ms-2 fs-7 text-dark"
                                style="margin-top: -5px"
                              >
                                Victor Okoye
                              </p>
                              <!-- <p class="mb-0 ms-2 fs-7 text-muted">Est Delivery Time</p> -->
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="d-flex justify-content-start gap-3"
                        style="margin-top: -8px"
                      >
                        <p class="mb-0 fs-7 text-muted">Est Delivery Time</p>
                        <p class="mb-0 ms-2 fs-7 green">5 Days</p>
                      </div>
                      <hr style="width: 100%; margin-top: 10px; margin-bottom: 10px" />
                      <div class="d-flex justify-content-between align-items-start">
                        <div
                          class="card-text d-flex justify-content-start align-items-start"
                        >
                          <img src="~assets/images/star.png" class="mt-1" alt="" />
                          <p class="text-warning mb-0 ms-1">5.0</p>
                        </div>

                        <div class="mb-0 d-flex flex-column">
                          <p class="mb-0 text-danger text-start fs-6">Starting at</p>
                          <p class="fw-bold mb-0 text-start">$233.00</p>
                        </div>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12">
                <div class="card gigs">
                  <VueSlickCarousel>
                    <div>
                      <img src="~assets/images/job1.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/job1.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/job1.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/job1.png" class="card-img-top" alt="..." />
                    </div>
                  </VueSlickCarousel>
                  <div class="export"></div>
                  <NuxtLink to="/gig_details">
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-top gap-2 mb-3">
                          <div class="d-flex align-items-center">
                            <img
                              width="45px"
                              src="~assets/images/Profile_Pic.png"
                              alt=""
                            />
                            <div
                              class="d-flex justify-content-start align-items-start flex-column"
                            >
                              <p class="card-title ms-2 fw-bold fs-6 mb-2">
                                Product Design
                              </p>
                              <p
                                class="mb-0 ms-2 fs-7 text-dark"
                                style="margin-top: -5px"
                              >
                                Victor Okoye
                              </p>
                              <!-- <p class="mb-0 ms-2 fs-7 text-muted">Est Delivery Time</p> -->
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="d-flex justify-content-start gap-3"
                        style="margin-top: -8px"
                      >
                        <p class="mb-0 fs-7 text-muted">Est Delivery Time</p>
                        <p class="mb-0 ms-2 fs-7 green">5 Days</p>
                      </div>
                      <hr style="width: 100%; margin-top: 10px; margin-bottom: 10px" />
                      <div class="d-flex justify-content-between align-items-start">
                        <div
                          class="card-text d-flex justify-content-start align-items-start"
                        >
                          <img src="~assets/images/star.png" class="mt-1" alt="" />
                          <p class="text-warning mb-0 ms-1">5.0</p>
                        </div>

                        <div class="mb-0 d-flex flex-column">
                          <p class="mb-0 text-danger text-start fs-6">Starting at</p>
                          <p class="fw-bold mb-0 text-start">$233.00</p>
                        </div>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12">
                <div class="card gigs">
                  <VueSlickCarousel>
                    <div>
                      <img src="~assets/images/job2.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/gig4.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/gig4.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/gig4.png" class="card-img-top" alt="..." />
                    </div>
                  </VueSlickCarousel>
                  <div class="export"></div>
                  <NuxtLink to="/gig_details">
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-top gap-2 mb-3">
                          <div class="d-flex align-items-center">
                            <img
                              width="45px"
                              src="~assets/images/Profile_Pic.png"
                              alt=""
                            />
                            <div
                              class="d-flex justify-content-start align-items-start flex-column"
                            >
                              <p class="card-title ms-2 fw-bold fs-6 mb-2">
                                Graphic Design
                              </p>
                              <p
                                class="mb-0 ms-2 fs-7 text-dark"
                                style="margin-top: -5px"
                              >
                                Victor Okoye
                              </p>
                              <!-- <p class="mb-0 ms-2 fs-7 text-muted">Est Delivery Time</p> -->
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="d-flex justify-content-start gap-3"
                        style="margin-top: -8px"
                      >
                        <p class="mb-0 fs-7 text-muted">Est Delivery Time</p>
                        <p class="mb-0 ms-2 fs-7 green">5 Days</p>
                      </div>
                      <hr style="width: 100%; margin-top: 10px; margin-bottom: 10px" />
                      <div class="d-flex justify-content-between align-items-start">
                        <div
                          class="card-text d-flex justify-content-start align-items-start"
                        >
                          <img src="~assets/images/star.png" class="mt-1" alt="" />
                          <p class="text-warning mb-0 ms-1">5.0</p>
                        </div>

                        <div class="mb-0 d-flex flex-column">
                          <p class="mb-0 text-danger text-start fs-6">Starting at</p>
                          <p class="fw-bold mb-0 text-start">$233.00</p>
                        </div>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12">
                <div class="card gigs">
                  <VueSlickCarousel>
                    <div>
                      <img src="~assets/images/gig4.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/gig4.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/gig4.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/gig4.png" class="card-img-top" alt="..." />
                    </div>
                  </VueSlickCarousel>
                  <div class="export"></div>
                  <NuxtLink to="/gig_details">
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-top gap-2 mb-3">
                          <div class="d-flex align-items-center">
                            <img
                              width="45px"
                              src="~assets/images/Profile_Pic.png"
                              alt=""
                            />
                            <div
                              class="d-flex justify-content-start align-items-start flex-column"
                            >
                              <p class="card-title ms-2 fw-bold fs-6 mb-2">
                                Graphic Design
                              </p>
                              <p
                                class="mb-0 ms-2 fs-7 text-dark"
                                style="margin-top: -5px"
                              >
                                Victor Okoye
                              </p>
                              <!-- <p class="mb-0 ms-2 fs-7 text-muted">Est Delivery Time</p> -->
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="d-flex justify-content-start gap-3"
                        style="margin-top: -8px"
                      >
                        <p class="mb-0 fs-7 text-muted">Est Delivery Time</p>
                        <p class="mb-0 ms-2 fs-7 green">5 Days</p>
                      </div>
                      <hr style="width: 100%; margin-top: 10px; margin-bottom: 10px" />
                      <div class="d-flex justify-content-between align-items-start">
                        <div
                          class="card-text d-flex justify-content-start align-items-start"
                        >
                          <img src="~assets/images/star.png" class="mt-1" alt="" />
                          <p class="text-warning mb-0 ms-1">5.0</p>
                        </div>

                        <div class="mb-0 d-flex flex-column">
                          <p class="mb-0 text-danger text-start fs-6">Starting at</p>
                          <p class="fw-bold mb-0 text-start">$233.00</p>
                        </div>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12">
                <div class="card gigs">
                  <VueSlickCarousel>
                    <div>
                      <img src="~assets/images/job1.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/job1.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/job1.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/job1.png" class="card-img-top" alt="..." />
                    </div>
                  </VueSlickCarousel>
                  <div class="export"></div>
                  <NuxtLink to="/gig_details">
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-top gap-2 mb-3">
                          <div class="d-flex align-items-center">
                            <img
                              width="45px"
                              src="~assets/images/Profile_Pic.png"
                              alt=""
                            />
                            <div
                              class="d-flex justify-content-start align-items-start flex-column"
                            >
                              <p class="card-title ms-2 fw-bold fs-6 mb-2">
                                Product Design
                              </p>
                              <p
                                class="mb-0 ms-2 fs-7 text-dark"
                                style="margin-top: -5px"
                              >
                                Victor Okoye
                              </p>
                              <!-- <p class="mb-0 ms-2 fs-7 text-muted">Est Delivery Time</p> -->
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="d-flex justify-content-start gap-3"
                        style="margin-top: -8px"
                      >
                        <p class="mb-0 fs-7 text-muted">Est Delivery Time</p>
                        <p class="mb-0 ms-2 fs-7 green">5 Days</p>
                      </div>
                      <hr style="width: 100%; margin-top: 10px; margin-bottom: 10px" />
                      <div class="d-flex justify-content-between align-items-start">
                        <div
                          class="card-text d-flex justify-content-start align-items-start"
                        >
                          <img src="~assets/images/star.png" class="mt-1" alt="" />
                          <p class="text-warning mb-0 ms-1">5.0</p>
                        </div>

                        <div class="mb-0 d-flex flex-column">
                          <p class="mb-0 text-danger text-start fs-6">Starting at</p>
                          <p class="fw-bold mb-0 text-start">$233.00</p>
                        </div>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12">
                <div class="card gigs">
                  <VueSlickCarousel>
                    <div>
                      <img src="~assets/images/job2.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/gig4.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/gig4.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/gig4.png" class="card-img-top" alt="..." />
                    </div>
                  </VueSlickCarousel>
                  <div class="export"></div>
                  <NuxtLink to="/gig_details">
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-top gap-2 mb-3">
                          <div class="d-flex align-items-center">
                            <img
                              width="45px"
                              src="~assets/images/Profile_Pic.png"
                              alt=""
                            />
                            <div
                              class="d-flex justify-content-start align-items-start flex-column"
                            >
                              <p class="card-title ms-2 fw-bold fs-6 mb-2">
                                Graphic Design
                              </p>
                              <p
                                class="mb-0 ms-2 fs-7 text-dark"
                                style="margin-top: -5px"
                              >
                                Victor Okoye
                              </p>
                              <!-- <p class="mb-0 ms-2 fs-7 text-muted">Est Delivery Time</p> -->
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="d-flex justify-content-start gap-3"
                        style="margin-top: -8px"
                      >
                        <p class="mb-0 fs-7 text-muted">Est Delivery Time</p>
                        <p class="mb-0 ms-2 fs-7 green">5 Days</p>
                      </div>
                      <hr style="width: 100%; margin-top: 10px; margin-bottom: 10px" />
                      <div class="d-flex justify-content-between align-items-start">
                        <div
                          class="card-text d-flex justify-content-start align-items-start"
                        >
                          <img src="~assets/images/star.png" class="mt-1" alt="" />
                          <p class="text-warning mb-0 ms-1">5.0</p>
                        </div>

                        <div class="mb-0 d-flex flex-column">
                          <p class="mb-0 text-danger text-start fs-6">Starting at</p>
                          <p class="fw-bold mb-0 text-start">$233.00</p>
                        </div>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12">
                <div class="card gigs">
                  <VueSlickCarousel>
                    <div>
                      <img src="~assets/images/gig4.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/gig4.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/gig4.png" class="card-img-top" alt="..." />
                    </div>
                    <div>
                      <img src="~assets/images/gig4.png" class="card-img-top" alt="..." />
                    </div>
                  </VueSlickCarousel>
                  <div class="export"></div>
                  <NuxtLink to="/gig_details">
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-top gap-2 mb-3">
                          <div class="d-flex align-items-center">
                            <img
                              width="45px"
                              src="~assets/images/Profile_Pic.png"
                              alt=""
                            />
                            <div
                              class="d-flex justify-content-start align-items-start flex-column"
                            >
                              <p class="card-title ms-2 fw-bold fs-6 mb-2">
                                Graphic Design
                              </p>
                              <p
                                class="mb-0 ms-2 fs-7 text-dark"
                                style="margin-top: -5px"
                              >
                                Victor Okoye
                              </p>
                              <!-- <p class="mb-0 ms-2 fs-7 text-muted">Est Delivery Time</p> -->
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="d-flex justify-content-start gap-3"
                        style="margin-top: -8px"
                      >
                        <p class="mb-0 fs-7 text-muted">Est Delivery Time</p>
                        <p class="mb-0 ms-2 fs-7 green">5 Days</p>
                      </div>
                      <hr style="width: 100%; margin-top: 10px; margin-bottom: 10px" />
                      <div class="d-flex justify-content-between align-items-start">
                        <div
                          class="card-text d-flex justify-content-start align-items-start"
                        >
                          <img src="~assets/images/star.png" class="mt-1" alt="" />
                          <p class="text-warning mb-0 ms-1">5.0</p>
                        </div>

                        <div class="mb-0 d-flex flex-column">
                          <p class="mb-0 text-danger text-start fs-6">Starting at</p>
                          <p class="fw-bold mb-0 text-start">$233.00</p>
                        </div>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="mt-5">
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                  <li class="page-item">
                    <a class="page-link m-2 prev"
                      ><i class="fas fa-angle-left text-white"></i
                    ></a>
                  </li>
                  <div class="pages">
                    <li class="page-item m-2"><a class="page-link" href="#">1</a></li>
                    <li class="page-item m-2"><a class="page-link" href="#">2</a></li>
                    <li class="page-item m-2">
                      <a class="page-link" href="#">...</a>
                    </li>
                    <li class="page-item m-2"><a class="page-link" href="#">9</a></li>
                    <li class="page-item m-2"><a class="page-link" href="#">10</a></li>
                  </div>
                  <li class="page-item">
                    <a class="page-link m-2 next"
                      ><i class="fas fa-angle-right text-white"></i
                    ></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        arrows: true,
        dots: false,
        slidesToShow: 2,
      },
    };
  },
  methods: {
    tab(ele) {
      document.querySelectorAll(".gig_details").forEach((element) => {
        element.classList.remove("gig_detail_active");
      });
      document.querySelector("." + ele).classList.add("gig_detail_active");
      // ele.classList.add("btn_active")
      // console.log(ele)
    },
    getFile() {
      document.getElementById("inputGroupFile02").click();
    },
    async packages(e) {
      document.getElementsByClassName("logo_gig_pak").forEach((element) => {
        element.classList.remove("logo_pak_active");
      });
      document.getElementById(e).classList.add("logo_pak_active");
    },
  },
};
</script>
