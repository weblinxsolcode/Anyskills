<template>
  <div>
    <Network />
    <div class="soc-light-bg">
      <div class="container">
        <img src="~assets/images/cover.png" class="w-100" alt="" />
        <div class="row px-0">
          <div class="col-12 col-lg-3 col-md-3">
            <div
              class="sidebar1 boder_bg_shadow mb-5 xyz"
              style="border-top-left-radius: 0px; border-top-right-radius: 0px"
            >
              <div class="text-center pt-lg-4">
                <img
                  src="~assets/images/soc_home_pro.png"
                  class="img-fluid mx-1 img_position rounded-circle"
                  alt=""
                />
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
                <p class="mb-0 gray">Visual Artist</p>
                <p class="mb-2 gray">Abuja, Nigeria</p>
                <p class="text-secondary fw-bold">
                  <span class="text-dark">80</span> Followers
                  <span class="text-dark"> 120</span> Following
                </p>
              </div>
              <hr class="mt-3 mb-0" style="color: lightgrey" />
              <div id="my_div_soc" class="p-3">
                <NuxtLink to="/social_home_main">
                  <div class="tabs_s tab_1" @click="tab('tab_1')">
                    <div class="row">
                      <div class="text-end pe-2 col-3 ps-3">
                        <i class="fas fa-pen fs-5"></i>
                      </div>
                      <div class="col-4 ps-3 text-start">
                        <p class="mb-0 fs-6">My Wall</p>
                      </div>
                      <div class="col-5"></div>
                    </div>
                  </div>
                </NuxtLink>
                <NuxtLink to="/social_home_chat">
                  <div class="tabs_s tab_2" @click="tab('tab_2')">
                    <div class="row">
                      <div class="text-end pe-2 col-3 ps-3">
                        <i class="far fa-comment fs-5"></i>
                      </div>
                      <div class="col-4 ps-3 text-start">
                        <p class="mb-0 fs-6">Chat</p>
                      </div>
                      <div class="col-5">
                        <div>
                          <p
                            style="background-color: #e7fbef; border-radius: 5.5814px"
                            class="mb-0 fw-bolder green w-50 px-2"
                          >
                            03
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </NuxtLink>
                <NuxtLink to="/social_home_request">
                  <div class="tabs_s tab_3" @click="tab('tab_3')">
                    <div class="row">
                      <div class="text-end pe-2 col-3 ps-3">
                        <i class="far fa-user fs-5"></i>
                      </div>
                      <div class="col-4 ps-3 text-start">
                        <p class="mb-0 fs-6">Requests</p>
                      </div>
                      <div class="col-5"></div>
                    </div>
                  </div>
                </NuxtLink>

                <NuxtLink to="/social_home_events">
                  <div class="tabs_s tab_4" @click="tab('tab_4')">
                    <div class="row">
                      <div class="text-end pe-2 col-3 ps-3">
                        <i class="far fa-star fs-5"></i>
                      </div>
                      <div class="col-4 ps-3 text-start">
                        <p class="mb-0 fs-6">Events</p>
                      </div>
                      <div class="col-5"></div>
                    </div>
                  </div>
                </NuxtLink>
                <NuxtLink to="/social_home_connection">
                  <div class="soc_tab_active tabs_s tab_5" @click="tab('tab_5')">
                    <div class="row">
                      <div class="text-end pe-2 col-3 ps-3">
                        <i class="far fa-bookmark fs-5"></i>
                      </div>
                      <div class="col-4 ps-3 text-start mb-lg-2">
                        <p class="mb-0 fs-6">Connection</p>
                      </div>
                      <div class="col-5"></div>
                    </div>
                  </div>
                </NuxtLink>
                <hr class="mt-5 mb-2" style="color: lightgrey" />

                <div class="tabs_s tab_6" @click="tab('tab_6')">
                  <div class="row">
                    <div class="text-end pe-2 col-3 ps-3">
                      <i class="fas fa-cog fs-5"></i>
                    </div>
                    <div class="col-4 ps-3 text-start">
                      <p class="mb-0 fs-6">Settings</p>
                    </div>
                    <div class="col-5"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-3 boder_bg_shadow p-3 mt-5">
              <div class="d-flex justify-content-between align-items-center">
                <p class="mb-0 fw-bolder">Photos</p>
                <i class="fas fa-ellipsis-h gray pe-lg-3"></i>
              </div>
              <div>
                <p class="mb-0 gray">5 picture Uploaded</p>

                <div class="d-flex flex-wrap justify-content-between mt-2 mx-2 ms-lg-0">
                  <img
                    src="~assets/images/soc_E_01.png"
                    class="img-fluid mt-1 mx-1 rounded ms-lg-0"
                    style="height: 60px; width: 60px"
                    alt=""
                  />
                  <img
                    src="~assets/images/soc_E_02.png"
                    class="img-fluid mt-1 mx-1 rounded"
                    style="height: 60px; width: 60px"
                    alt=""
                  />
                  <img
                    src="~assets/images/soc_E_03.png"
                    class="img-fluid mt-1 mx-1 rounded"
                    style="height: 60px; width: 60px"
                    alt=""
                  />

                  <img
                    src="~assets/images/soc_E_04.png"
                    class="img-fluid mt-2 mx-1 rounded ms-lg-0"
                    style="height: 60px; width: 60px"
                    alt=""
                  />
                  <img
                    src="~assets/images/soc_E_05.png"
                    class="img-fluid mt-2 mx-1 rounded"
                    style="height: 60px; width: 60px"
                    alt=""
                  />
                  <img
                    src="~assets/images/soc_E_06.png"
                    class="img-fluid mt-2 mx-1 rounded"
                    style="height: 60px; width: 60px"
                    alt=""
                  />
                </div>
                <div
                  class="d-flex flex-wrap justify-content-between mt-2 mx-2 ms-lg-0"
                  v-if="awesome4"
                >
                  <img
                    src="~assets/images/soc_E_01.png"
                    class="img-fluid mt-1 mx-1 rounded ms-lg-0"
                    style="height: 60px; width: 60px"
                    alt=""
                  />
                  <img
                    src="~assets/images/soc_E_02.png"
                    class="img-fluid mt-1 mx-1 rounded"
                    style="height: 60px; width: 60px"
                    alt=""
                  />
                  <img
                    src="~assets/images/soc_E_03.png"
                    class="img-fluid mt-1 mx-1 rounded"
                    style="height: 60px; width: 60px"
                    alt=""
                  />
                </div>
                <div v-else></div>
                <div>
                  <p
                    @click="awesome4 = !awesome4"
                    class="com_color fs-7 text-center mt-4"
                  >
                    See More
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- all request  sec -->
          <div class="col-12 col-lg-9 col-md-12 mt-3">
            <div>
              <p class="mb-4 fw-bold">Connections</p>
            </div>
            <div
              class="boder_bg_shadow container my-3 py-3 d-block justify-content-between"
            >
              <p class="mb-2 fw-bold">Newly Joined Anyskillers</p>

              <img
                src="~assets/images/soc_request_pro.png"
                class="img-fluid me-1 mt-1 rounded-circle"
                height="50px"
                width="50px"
                alt=""
              />
              <img
                src="~assets/images/soc_con_pic_01.png"
                class="img-fluid mx-1 mt-1 rounded-circle"
                height="50px"
                width="50px"
                alt=""
              />
              <img
                src="~assets/images/soc_con_pic_02.png"
                class="img-fluid mx-1 mt-1 rounded-circle"
                height="50px"
                width="50px"
                alt=""
              />
              <img
                src="~assets/images/soc_con_pic_03.png"
                class="img-fluid mx-1 mt-1 rounded-circle"
                height="50px"
                width="50px"
                alt=""
              />
              <img
                src="~assets/images/soc_con_pic_03.png"
                class="img-fluid mx-1 mt-1 rounded-circle"
                height="50px"
                width="50px"
                alt=""
              />
              <img
                src="~assets/images/soc_request_pro.png"
                class="img-fluid mx-1 mt-1 rounded-circle"
                height="50px"
                width="50px"
                alt=""
              />
              <img
                src="~assets/images/soc_con_pic_01.png"
                class="img-fluid mx-1 mt-1 rounded-circle"
                height="50px"
                width="50px"
                alt=""
              />
              <img
                src="~assets/images/soc_con_pic_03.png"
                class="img-fluid mx-1 mt-1 rounded-circle"
                height="50px"
                width="50px"
                alt=""
              />
              <img
                src="~assets/images/soc_con_pic_03.png"
                class="img-fluid mx-1 mt-1 rounded-circle"
                height="50px"
                width="50px"
                alt=""
              />
              <img
                src="~assets/images/soc_con_pic_03.png"
                class="img-fluid mx-1 mt-1 rounded-circle"
                height="50px"
                width="50px"
                alt=""
              />
            </div>

            <div class="row">
              <div class="col-12 col-lg-6">
                <div class="boder_bg_shadow container">
                  <div class="py-3 d-flex justify-content-between align-items-center">
                    <div class="for_pointer">
                      <p class="fw-bold mb-0">Followers</p>
                    </div>
                    <div class="form-group has-search mx-0 mx-lg-4">
                      <span
                        class="gary line_height_custom py-1 fa fa-search form-control-feedback"
                      ></span>
                      <input
                        type="text"
                        class="form-control height_11_iz_99 form-select-2 fs-6 gary"
                        placeholder="Search"
                      />
                    </div>
                    <div class="for_pointer">
                      <p
                        class="bg-green text-white mb-0 fs-7 notification_num_2 mx-2 px-3"
                      >
                        400
                      </p>
                    </div>
                  </div>
                  <div
                    class="pt-3 pb-2 d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex for_pointer align-items-center">
                      <img
                        src="~assets/images/soc_request_pro.png"
                        class="img-fluid rounded-circle"
                        height="50px"
                        width="50px"
                        alt=""
                      />
                      <div class="d-block mx-1 fs-6">
                        <p class="fw-bold mb-0">Anna julia</p>
                        <p class="gray mb-0">web designer</p>
                      </div>
                    </div>
                    <div class="for_pointer mt-lg-0 d-flex ju">
                      <button class="canc_btn green fw-bold mx-lg-2 me-1 fs-7">
                        <i class="green mx-1 far fa-comment"></i> Chat
                      </button>
                    </div>
                  </div>
                  <div
                    class="pt-3 pb-2 d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex for_pointer align-items-center">
                      <img
                        src="~assets/images/soc_request_pro.png"
                        class="img-fluid rounded-circle"
                        height="50px"
                        width="50px"
                        alt=""
                      />
                      <div class="d-block mx-1 fs-6">
                        <p class="fw-bold mb-0">Anna julia</p>
                        <p class="gray mb-0">web designer</p>
                      </div>
                    </div>
                    <div class="for_pointer mt-lg-0 d-flex ju">
                      <button class="canc_btn green fw-bold mx-lg-2 me-1 fs-7">
                        <i class="green mx-1 far fa-comment"></i> Chat
                      </button>
                    </div>
                  </div>
                  <div
                    class="pt-3 pb-2 d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex for_pointer align-items-center">
                      <img
                        src="~assets/images/soc_request_pro.png"
                        class="img-fluid rounded-circle"
                        height="50px"
                        width="50px"
                        alt=""
                      />
                      <div class="d-block mx-1 fs-6">
                        <p class="fw-bold mb-0">Anna julia</p>
                        <p class="gray mb-0">web designer</p>
                      </div>
                    </div>
                    <div class="for_pointer mt-lg-0 d-flex ju">
                      <button class="canc_btn green fw-bold mx-lg-2 me-1 fs-7">
                        <i class="green mx-1 far fa-comment"></i> Chat
                      </button>
                    </div>
                  </div>
                  <div
                    class="pt-3 pb-2 d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex for_pointer align-items-center">
                      <img
                        src="~assets/images/soc_request_pro.png"
                        class="img-fluid rounded-circle"
                        height="50px"
                        width="50px"
                        alt=""
                      />
                      <div class="d-block mx-1 fs-6">
                        <p class="fw-bold mb-0">Anna julia</p>
                        <p class="gray mb-0">web designer</p>
                      </div>
                    </div>
                    <div class="for_pointer mt-lg-0 d-flex ju">
                      <button class="canc_btn green fw-bold mx-lg-2 me-1 fs-7">
                        <i class="green mx-1 far fa-comment"></i> Chat
                      </button>
                    </div>
                  </div>
                  <div
                    class="pt-3 pb-2 d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex for_pointer align-items-center">
                      <img
                        src="~assets/images/soc_request_pro.png"
                        class="img-fluid rounded-circle"
                        height="50px"
                        width="50px"
                        alt=""
                      />
                      <div class="d-block mx-1 fs-6">
                        <p class="fw-bold mb-0">Anna julia</p>
                        <p class="gray mb-0">web designer</p>
                      </div>
                    </div>
                    <div class="for_pointer mt-lg-0 d-flex ju">
                      <button class="canc_btn green fw-bold mx-lg-2 me-1 fs-7">
                        <i class="green mx-1 far fa-comment"></i> Chat
                      </button>
                    </div>
                  </div>
                  <div
                    class="pt-3 pb-2 d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex for_pointer align-items-center">
                      <img
                        src="~assets/images/soc_request_pro.png"
                        class="img-fluid rounded-circle"
                        height="50px"
                        width="50px"
                        alt=""
                      />
                      <div class="d-block mx-1 fs-6">
                        <p class="fw-bold mb-0">Anna julia</p>
                        <p class="gray mb-0">web designer</p>
                      </div>
                    </div>
                    <div class="for_pointer mt-lg-0 d-flex ju">
                      <button class="canc_btn green fw-bold mx-lg-2 me-1 fs-7">
                        <i class="green mx-1 far fa-comment"></i> Chat
                      </button>
                    </div>
                  </div>
                  <div
                    class="pt-3 pb-2 d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex for_pointer align-items-center">
                      <img
                        src="~assets/images/soc_request_pro.png"
                        class="img-fluid rounded-circle"
                        height="50px"
                        width="50px"
                        alt=""
                      />
                      <div class="d-block mx-1 fs-6">
                        <p class="fw-bold mb-0">Anna julia</p>
                        <p class="gray mb-0">web designer</p>
                      </div>
                    </div>
                    <div class="for_pointer mt-lg-0 d-flex ju">
                      <button class="canc_btn green fw-bold mx-lg-2 me-1 fs-7">
                        <i class="green mx-1 far fa-comment"></i> Chat
                      </button>
                    </div>
                  </div>
                  <div
                    class="pt-3 pb-2 d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex for_pointer align-items-center">
                      <img
                        src="~assets/images/soc_request_pro.png"
                        class="img-fluid rounded-circle"
                        height="50px"
                        width="50px"
                        alt=""
                      />
                      <div class="d-block mx-1 fs-6">
                        <p class="fw-bold mb-0">Anna julia</p>
                        <p class="gray mb-0">web designer</p>
                      </div>
                    </div>
                    <div class="for_pointer mt-lg-0 d-flex ju">
                      <button class="canc_btn green fw-bold mx-lg-2 me-1 fs-7">
                        <i class="green mx-1 far fa-comment"></i> Chat
                      </button>
                    </div>
                  </div>
                  <div
                    class="pt-3 pb-2 d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex for_pointer align-items-center">
                      <img
                        src="~assets/images/soc_request_pro.png"
                        class="img-fluid rounded-circle"
                        height="50px"
                        width="50px"
                        alt=""
                      />
                      <div class="d-block mx-1 fs-6">
                        <p class="fw-bold mb-0">Anna julia</p>
                        <p class="gray mb-0">web designer</p>
                      </div>
                    </div>
                    <div class="for_pointer mt-lg-0 d-flex ju">
                      <button class="canc_btn green fw-bold mx-lg-2 me-1 fs-7">
                        <i class="green mx-1 far fa-comment"></i> Chat
                      </button>
                    </div>
                  </div>
                  <div
                    class="pt-3 pb-4 d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex for_pointer align-items-center">
                      <img
                        src="~assets/images/soc_request_pro.png"
                        class="img-fluid rounded-circle"
                        height="50px"
                        width="50px"
                        alt=""
                      />
                      <div class="d-block mx-1 fs-6">
                        <p class="fw-bold mb-0">Anna julia</p>
                        <p class="gray mb-0">web designer</p>
                      </div>
                    </div>
                    <div class="for_pointer mt-lg-0 d-flex ju">
                      <button class="canc_btn green fw-bold mx-lg-2 me-1 fs-7">
                        <i class="green mx-1 far fa-comment"></i> Chat
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- sent request sec -->
              <div class="col-12 col-lg-6 mt-lg-0 mt-3">
                <div class="boder_bg_shadow container">
                  <div class="py-3 d-flex justify-content-between align-items-center">
                    <div class="for_pointer">
                      <p class="fw-bold mb-0">Following</p>
                    </div>
                    <div class="form-group has-search mx-0 mx-lg-4">
                      <span
                        class="gary line_height_custom py-1 fa fa-search form-control-feedback"
                      ></span>
                      <input
                        type="text"
                        class="form-control height_11_iz_99 form-select-2 fs-6 gary"
                        placeholder="Search"
                      />
                    </div>
                    <div class="for_pointer">
                      <p
                        class="bg-green text-white mb-0 fs-7 notification_num_2 mx-2 px-3"
                      >
                        400
                      </p>
                    </div>
                  </div>
                  <div
                    class="pt-3 pb-2 d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex for_pointer align-items-center">
                      <img
                        src="~assets/images/soc_request_pro.png"
                        class="img-fluid rounded-circle"
                        height="50px"
                        width="50px"
                        alt=""
                      />
                      <div class="d-block mx-1 fs-6">
                        <p class="fw-bold mb-0">Anna julia</p>
                        <p class="gray mb-0">web designer</p>
                      </div>
                    </div>
                    <div class="for_pointer mt-lg-0 d-flex align-items-center">
                      <i class="green mx-1 far fa-comment"></i>
                      <button class="canc_btn mx-lg-2 me-1 fs-7">Unfollow</button>
                    </div>
                  </div>
                  <div
                    class="pt-3 pb-2 d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex for_pointer align-items-center">
                      <img
                        src="~assets/images/soc_request_pro.png"
                        class="img-fluid rounded-circle"
                        height="50px"
                        width="50px"
                        alt=""
                      />
                      <div class="d-block mx-1 fs-6">
                        <p class="fw-bold mb-0">Anna julia</p>
                        <p class="gray mb-0">web designer</p>
                      </div>
                    </div>
                    <div class="for_pointer mt-lg-0 d-flex align-items-center">
                      <i class="green mx-1 far fa-comment"></i>
                      <button class="canc_btn mx-lg-2 me-1 fs-7">Unfollow</button>
                    </div>
                  </div>
                  <div
                    class="pt-3 pb-2 d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex for_pointer align-items-center">
                      <img
                        src="~assets/images/soc_request_pro.png"
                        class="img-fluid rounded-circle"
                        height="50px"
                        width="50px"
                        alt=""
                      />
                      <div class="d-block mx-1 fs-6">
                        <p class="fw-bold mb-0">Anna julia</p>
                        <p class="gray mb-0">web designer</p>
                      </div>
                    </div>
                    <div class="for_pointer mt-lg-0 d-flex align-items-center">
                      <i class="green mx-1 far fa-comment"></i>
                      <button class="canc_btn mx-lg-2 me-1 fs-7">Unfollow</button>
                    </div>
                  </div>
                  <div
                    class="pt-3 pb-2 d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex for_pointer align-items-center">
                      <img
                        src="~assets/images/soc_request_pro.png"
                        class="img-fluid rounded-circle"
                        height="50px"
                        width="50px"
                        alt=""
                      />
                      <div class="d-block mx-1 fs-6">
                        <p class="fw-bold mb-0">Anna julia</p>
                        <p class="gray mb-0">web designer</p>
                      </div>
                    </div>
                    <div class="for_pointer mt-lg-0 d-flex align-items-center">
                      <i class="green mx-1 far fa-comment"></i>
                      <button class="canc_btn mx-lg-2 me-1 fs-7">Unfollow</button>
                    </div>
                  </div>
                  <div
                    class="pt-3 pb-2 d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex for_pointer align-items-center">
                      <img
                        src="~assets/images/soc_request_pro.png"
                        class="img-fluid rounded-circle"
                        height="50px"
                        width="50px"
                        alt=""
                      />
                      <div class="d-block mx-1 fs-6">
                        <p class="fw-bold mb-0">Anna julia</p>
                        <p class="gray mb-0">web designer</p>
                      </div>
                    </div>
                    <div class="for_pointer mt-lg-0 d-flex align-items-center">
                      <i class="green mx-1 far fa-comment"></i>
                      <button class="canc_btn mx-lg-2 me-1 fs-7">Unfollow</button>
                    </div>
                  </div>
                  <div
                    class="pt-3 pb-2 d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex for_pointer align-items-center">
                      <img
                        src="~assets/images/soc_request_pro.png"
                        class="img-fluid rounded-circle"
                        height="50px"
                        width="50px"
                        alt=""
                      />
                      <div class="d-block mx-1 fs-6">
                        <p class="fw-bold mb-0">Anna julia</p>
                        <p class="gray mb-0">web designer</p>
                      </div>
                    </div>
                    <div class="for_pointer mt-lg-0 d-flex align-items-center">
                      <i class="green mx-1 far fa-comment"></i>
                      <button class="canc_btn mx-lg-2 me-1 fs-7">Unfollow</button>
                    </div>
                  </div>
                  <div
                    class="pt-3 pb-2 d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex for_pointer align-items-center">
                      <img
                        src="~assets/images/soc_request_pro.png"
                        class="img-fluid rounded-circle"
                        height="50px"
                        width="50px"
                        alt=""
                      />
                      <div class="d-block mx-1 fs-6">
                        <p class="fw-bold mb-0">Anna julia</p>
                        <p class="gray mb-0">web designer</p>
                      </div>
                    </div>
                    <div class="for_pointer mt-lg-0 d-flex align-items-center">
                      <i class="green mx-1 far fa-comment"></i>
                      <button class="canc_btn mx-lg-2 me-1 fs-7">Unfollow</button>
                    </div>
                  </div>
                  <div
                    class="pt-3 pb-2 d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex for_pointer align-items-center">
                      <img
                        src="~assets/images/soc_request_pro.png"
                        class="img-fluid rounded-circle"
                        height="50px"
                        width="50px"
                        alt=""
                      />
                      <div class="d-block mx-1 fs-6">
                        <p class="fw-bold mb-0">Anna julia</p>
                        <p class="gray mb-0">web designer</p>
                      </div>
                    </div>
                    <div class="for_pointer mt-lg-0 d-flex align-items-center">
                      <i class="green mx-1 far fa-comment"></i>
                      <button class="canc_btn mx-lg-2 me-1 fs-7">Unfollow</button>
                    </div>
                  </div>
                  <div
                    class="pt-3 pb-2 d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex for_pointer align-items-center">
                      <img
                        src="~assets/images/soc_request_pro.png"
                        class="img-fluid rounded-circle"
                        height="50px"
                        width="50px"
                        alt=""
                      />
                      <div class="d-block mx-1 fs-6">
                        <p class="fw-bold mb-0">Anna julia</p>
                        <p class="gray mb-0">web designer</p>
                      </div>
                    </div>
                    <div class="for_pointer mt-lg-0 d-flex align-items-center">
                      <i class="green mx-1 far fa-comment"></i>
                      <button class="canc_btn mx-lg-2 me-1 fs-7">Unfollow</button>
                    </div>
                  </div>
                  <div
                    class="pt-3 pb-4 d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex for_pointer align-items-center">
                      <img
                        src="~assets/images/soc_request_pro.png"
                        class="img-fluid rounded-circle"
                        height="50px"
                        width="50px"
                        alt=""
                      />
                      <div class="d-block mx-1 fs-6">
                        <p class="fw-bold mb-0">Anna julia</p>
                        <p class="gray mb-0">web designer</p>
                      </div>
                    </div>
                    <div class="for_pointer mt-lg-0 d-flex align-items-center">
                      <i class="green mx-1 far fa-comment"></i>
                      <button class="canc_btn mx-lg-2 me-1 fs-7">Unfollow</button>
                    </div>
                  </div>
                </div>
              </div>
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
      document.querySelectorAll(".tabs_s").forEach((element) => {
        element.classList.remove("soc_tab_active");
      });
      document.querySelector("." + ele).classList.add("soc_tab_active");
      // ele.classList.add("btn_active")
      // console.log(ele)
    },
  },
};
</script>
