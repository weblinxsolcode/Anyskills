<template>
  <div>
    <Network />
    <div class="container">
      <img src="~assets/images/cover.png" class="img-fluid" alt="" />
      <div class="row">
        <div class="col-12 col-lg-3 col-md-3">
          <div class="sidebar1 boder_bg_shadow mb-5 xyz">
            <div class="text-center">
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
              <p class="mb-0 gray">Abuja, Nigeria</p>
              <p class="text-secondary fw-bold">
                <span class="text-dark">80</span> Followers
                <span class="text-dark"> 120</span> Following
              </p>
            </div>
            <hr class="mt-4" style="color: lightgrey" />
            <div id="my_div_soc" class="p-3 ">
              <NuxtLink to="/social_home_main">
                <div class="soc_tab_active tabs_s tab_1" @click="tab('tab_1')">
                  <div class="row">
                    <div class="text-end col-5">
                      <i class="fas fa-pen fs-5"></i>
                    </div>
                    <div class="col-7 text-start">
                      <p class="mb-0 fs-6">My Wall</p>
                    </div>
                  </div>
                </div>
              </NuxtLink>
              <NuxtLink to="/social_home_chat">
                <div class="tabs_s tab_2" @click="tab('tab_2')">
                  <div class="row">
                    <div class="text-end col-5">
                      <i class="far fa-comment fs-5"></i>
                    </div>
                    <div class="col-3 text-start">
                      <p class="mb-0 fs-6">Chat</p>
                    </div>
                    <div class="col-4">
                      <div>
                        <p
                          style="
                            background-color: #e7fbef;
                            border-radius: 5.5814px;
                          "
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
                    <div class="text-end col-5">
                      <i class="far fa-user fs-5"></i>
                    </div>
                    <div class="col-7 text-start">
                      <p class="mb-0 fs-6">Requests</p>
                    </div>
                  </div>
                </div>
              </NuxtLink>

              <NuxtLink to="/social_home_events">
                <div class="tabs_s tab_4" @click="tab('tab_4')">
                  <div class="row">
                    <div class="col-5 text-end">
                      <i class="far fa-star fs-5"></i>
                    </div>
                    <div class="col-7 text-start">
                      <p class="mb-0 fs-6">Events</p>
                    </div>
                  </div>
                </div>
              </NuxtLink>
              <NuxtLink to="/social_home_connection">
                <div class="tabs_s tab_5" @click="tab('tab_5')">
                  <div class="row">
                    <div class="col-5 text-end">
                      <i class="far fa-bookmark fs-5"></i>
                    </div>
                    <div class="col-7 text-start">
                      <p class="mb-0 fs-6">Connection</p>
                    </div>
                  </div>
                </div>
              </NuxtLink>
              <hr class="mt-4" style="color: lightgrey" />

              <div class="tabs_s tab_6" @click="tab('tab_6')">
                <div class="row">
                  <div class="col-5 text-end">
                    <i class="fas fa-cog fs-5"></i>
                  </div>
                  <div class="col-7 text-start">
                    <p class="mb-0 fs-6">Settings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-3 boder_bg_shadow p-3 mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <p class="mb-0 fw-bolder">Events</p>
              <i class="fas fa-ellipsis-h gray"></i>
            </div>
            <div>
              <p class="mb-0 gray">5 picture Uploaded</p>

              <div class="d-flex flex-wrap justify-content-between mt-2 mx-2">
                <img
                  src="~assets/images/soc_E_01.png"
                  class="img-fluid mt-1 mx-1 rounded"
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
                  class="img-fluid mt-2 mx-1 rounded"
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
              <div>
                <p class="com_color fs-7 text-center mt-4">See More</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-9 col-md-9 mt-lg-3">
          <div class="mt-2">
            <div class="d-flex justify-content-between">
              <div class="container tabs">
                <NuxtLink to="/social_home_main">
                  <div class="">
                    <p
                      class="text-muted pb-2 tab tab_nav_1 btn_active"
                      @click="tab('tab_nav_1')"
                    >
                      Posts
                    </p>
                  </div>
                </NuxtLink>
                <NuxtLink to="/social_home_main_Campaigns">
                  <div class="">
                    <p
                      class="text-muted pb-2 tab tab_nav_2"
                      @click="tab('tab_nav_2')"
                    >
                      Campaigns
                    </p>
                  </div>
                </NuxtLink>

                <div class="">
                  <p
                    class="text-muted pb-2 tab tab_nav_3"
                    @click="tab('tab_nav_3')"
                  >
                    Events
                  </p>
                </div>

                <div>
                  <p
                    class="text-muted pb-2 tab tab_nav_4"
                    @click="tab('tab_nav_4')"
                  >
                    Photos
                  </p>
                </div>
                <div>
                  <p
                    class="text-muted pb-2 tab tab_nav_5"
                    @click="tab('tab_nav_5')"
                  >
                    Reviews
                  </p>
                </div>
              </div>
              <div class="text-end">
                <button class="share_btn fs-7">Edit Profile</button>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-8 col-md-8">
              <div>
                <!-- frist post -->
                <div class="boder_bg_shadow mt-5 p-3">
                  <div
                    class="px-2 d-flex justify-content-between align-items-center flex-wrap"
                  >
                    <p class="fw-bold mb-0">New Post</p>
                    <i class="gray fas fa-ellipsis-h"></i>
                  </div>
                  <div class="d-flex align-items-center">
                    <img
                      src="~assets/images/soc_01.png"
                      class="img-fluid mt-1 mx-1 rounded-circle"
                      style="height: 30px; width: 30px"
                      alt=""
                    />

                    <input
                      type="textarea"
                      class="w-100 form-control-5"
                      placeholder="Write Someting ...."
                    />
                  </div>
                  <div class="mt-5 px-2">
                    <hr
                      class="mt-4"
                      style="margin-top: -19px; color: lightgrey"
                    />
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center flex-wrap"
                  >
                    <div
                      class="px-lg-2 px-0 d-flex align-items-center flex-wrap"
                    >
                      <p class="mb-0">Visible For</p>
                      <select class="select_fri ms-3" name="cars" id="cars">
                        <option value="volvo">Friends</option>
                        <option value="saab">Other</option>
                      </select>
                      <i class="mx-lg-2 gray mx-1 fas fa-image"></i>
                      <i class="gray mx-lg-2 mx-1 far fa-smile"></i>
                      <i class="mx-lg-2 mx-1 gray far fa-heart"></i>
                      <i class="mx-lg-2 mx-1 gray fa fa-plus-circle"></i>
                    </div>
                    <div class="">
                      <button class="share_btn">Share</button>
                    </div>
                  </div>
                </div>
                <!-- secound post -->
                <div class="mt-4 boder_bg_shadow p-3">
                  <div
                    class="px-2 d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <img
                        src="~assets/images/soc_02.png"
                        class="img-fluid mt-1 mx-1 rounded"
                        style="height: 50px; width: 50px"
                        alt=""
                      />
                      <div class="mx-2">
                        <p class="mb-0 fw-bold">Victor Okoye</p>
                        <p class="mb-0 gray fs-7">15mins ago</p>
                      </div>
                    </div>
                    <i class="gray fas fa-ellipsis-h"></i>
                  </div>
                  <div class="align-items-center">
                    <p class="px-2 mt-2 mb-0 gray my-auto fs-6">
                      I love my new Collections &#128525; &#128525;
                    </p>
                    <p class="px-2 mb-0 blue my-auto fs-6">
                      #photos #wallpaper #new #models
                    </p>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <img
                        src="~assets/images/soc_p_01.png"
                        class="img-fluid mt-2"
                        alt=""
                      />
                    </div>
                    <div class="col-6">
                      <img
                        src="~assets/images/soc_p_02.png"
                        class="mt-2 img-fluid"
                        alt=""
                      />
                      <img
                        src="~assets/images/soc_p_03.png"
                        class="mt-2 mx-2 img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="comment_box d-flex mt-2 ms-2 p-3">
                    <div
                      class="px-lg-2 mx-0 com_right_boder d-flex align-items-center"
                    >
                      <i class="mx-lg-2 mx-0 com_color far fa-heart"></i>
                      <p class="mb-0 com_color">3.5k</p>
                    </div>
                    <div
                      class="px-lg-2 com_right_boder d-flex align-items-center flex-wrap"
                    >
                      <svg
                        width="24"
                        class="mx-2"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.226229 22.2736L0.226201 22.2736C0.137256 22.4759 0.189384 22.7061 0.358855 22.8594C0.472052 22.9618 0.623974 23.0164 0.777742 23.0164C0.852437 23.0164 0.925882 23.0035 0.997952 22.9778L0.998101 22.9778L4.41616 21.7391C5.86112 22.5754 7.53614 23.0164 9.2798 23.0164C14.2929 23.0164 18.3766 19.3254 18.3766 14.7833C18.3766 10.2412 14.2929 6.55022 9.2798 6.55022C4.26674 6.55022 0.183031 10.2412 0.183031 14.7833C0.183031 16.3614 0.670255 17.8771 1.59375 19.1845L0.226229 22.2736ZM4.26428 20.6299L1.84775 21.5061L2.81428 19.3238L2.81431 19.3238C2.88876 19.1543 2.86461 18.962 2.75083 18.8135C1.84874 17.6337 1.37245 16.2396 1.37245 14.7833C1.37245 10.8423 4.9168 7.63168 9.2798 7.63168C13.6428 7.63168 17.1872 10.8423 17.1872 14.7833C17.1872 18.7243 13.6428 21.9349 9.2798 21.9349C7.66829 21.9349 6.12613 21.5034 4.82149 20.6869C4.7215 20.6234 4.6029 20.5913 4.48464 20.5913C4.41002 20.5913 4.33539 20.6042 4.26429 20.6299L4.26428 20.6299Z"
                          fill="#5D668A"
                          stroke="#5D668A"
                          stroke-width="0.055814"
                        />
                        <rect
                          x="10"
                          y="0.8125"
                          width="14"
                          height="14"
                          rx="7"
                          fill="#015CEE"
                        />
                        <path
                          d="M14.9597 6.0045C14.9597 5.1885 15.3077 4.3125 16.9277 4.3125C18.0557 4.3125 18.5117 4.9725 18.5117 5.6445C18.5117 6.6045 17.8637 7.0005 17.0117 7.0005H16.1717V7.9605H17.0597C17.8637 7.9605 18.8117 8.1885 18.8117 9.4845C18.8117 10.4805 18.2957 11.0205 16.8677 11.0205C15.2957 11.0205 14.7437 10.2045 14.7437 9.0045H13.6637C13.6637 10.8765 14.8397 11.9805 16.9517 11.9805C18.7277 11.9805 19.8917 11.1165 19.8917 9.4845C19.8917 8.5125 19.4957 7.7565 18.3197 7.4325V7.4085C19.1597 7.0725 19.5917 6.5205 19.5917 5.6445C19.5917 4.1805 18.3437 3.3525 16.9277 3.3525C14.8757 3.3525 13.8797 4.4805 13.8797 6.0045H14.9597Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div
                      class="justify-content-between px-2 d-flex align-items-center flex-wrap"
                    >
                      <input
                        type="text"
                        class="form-control-5"
                        placeholder="Write Someting ...."
                      />

                      <div class="d-flex ms align-items-center">
                        <i
                          class="mx-lg-2 mx-1 ps-1 ps-lg-2 ms-lg-3 ms-1 gray fas fa-image"
                        ></i>
                        <i class="gray mx-lg-2 mx-1 far fa-smile"></i>
                        <i class="mx-lg-2 mx-1 gray fa fa-plus-circle"></i>

                        <div class="send_btn_bg text-center">
                          <i class="fas fa-paper-plane"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- third post -->
                <div class="mt-4 boder_bg_shadow p-3">
                  <div
                    class="px-2 d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <img
                        src="~assets/images/soc_02.png"
                        class="img-fluid mt-1 mx-1 rounded"
                        style="height: 50px; width: 50px"
                        alt=""
                      />
                      <div class="mx-2">
                        <p class="mb-0 fw-bold">Victor Okoye</p>
                        <p class="mb-0 gray fs-7">15mins ago</p>
                      </div>
                    </div>
                    <i class="gray fas fa-ellipsis-h"></i>
                  </div>
                  <div class="align-items-center">
                    <p class="px-2 mt-2 mb-0 gray my-auto fs-6">
                      I love my new Collections &#128525; &#128525;
                    </p>
                    <p class="px-2 mb-0 blue my-auto fs-6">
                      #photos #wallpaper #new #models
                    </p>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <img
                        src="~assets/images/soc_p_04.png"
                        class="mt-2 mx-2 img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="col-6">
                      <img
                        src="~assets/images/soc_p_05.png"
                        class="mt-2 mx-2 img-fluid"
                        alt=""
                      />
                      <img
                        src="~assets/images/soc_p_06.png"
                        class="mt-2 mx-2 img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="comment_box d-flex mt-2 ms-2 p-3">
                    <div
                      class="px-lg-2 mx-0 com_right_boder d-flex align-items-center"
                    >
                      <i class="mx-lg-2 mx-0 com_color far fa-heart"></i>
                      <p class="mb-0 com_color">3.5k</p>
                    </div>
                    <div
                      class="px-lg-2 com_right_boder d-flex align-items-center flex-wrap"
                    >
                      <svg
                        width="24"
                        class="mx-2"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.226229 22.2736L0.226201 22.2736C0.137256 22.4759 0.189384 22.7061 0.358855 22.8594C0.472052 22.9618 0.623974 23.0164 0.777742 23.0164C0.852437 23.0164 0.925882 23.0035 0.997952 22.9778L0.998101 22.9778L4.41616 21.7391C5.86112 22.5754 7.53614 23.0164 9.2798 23.0164C14.2929 23.0164 18.3766 19.3254 18.3766 14.7833C18.3766 10.2412 14.2929 6.55022 9.2798 6.55022C4.26674 6.55022 0.183031 10.2412 0.183031 14.7833C0.183031 16.3614 0.670255 17.8771 1.59375 19.1845L0.226229 22.2736ZM4.26428 20.6299L1.84775 21.5061L2.81428 19.3238L2.81431 19.3238C2.88876 19.1543 2.86461 18.962 2.75083 18.8135C1.84874 17.6337 1.37245 16.2396 1.37245 14.7833C1.37245 10.8423 4.9168 7.63168 9.2798 7.63168C13.6428 7.63168 17.1872 10.8423 17.1872 14.7833C17.1872 18.7243 13.6428 21.9349 9.2798 21.9349C7.66829 21.9349 6.12613 21.5034 4.82149 20.6869C4.7215 20.6234 4.6029 20.5913 4.48464 20.5913C4.41002 20.5913 4.33539 20.6042 4.26429 20.6299L4.26428 20.6299Z"
                          fill="#5D668A"
                          stroke="#5D668A"
                          stroke-width="0.055814"
                        />
                        <rect
                          x="10"
                          y="0.8125"
                          width="14"
                          height="14"
                          rx="7"
                          fill="#015CEE"
                        />
                        <path
                          d="M14.9597 6.0045C14.9597 5.1885 15.3077 4.3125 16.9277 4.3125C18.0557 4.3125 18.5117 4.9725 18.5117 5.6445C18.5117 6.6045 17.8637 7.0005 17.0117 7.0005H16.1717V7.9605H17.0597C17.8637 7.9605 18.8117 8.1885 18.8117 9.4845C18.8117 10.4805 18.2957 11.0205 16.8677 11.0205C15.2957 11.0205 14.7437 10.2045 14.7437 9.0045H13.6637C13.6637 10.8765 14.8397 11.9805 16.9517 11.9805C18.7277 11.9805 19.8917 11.1165 19.8917 9.4845C19.8917 8.5125 19.4957 7.7565 18.3197 7.4325V7.4085C19.1597 7.0725 19.5917 6.5205 19.5917 5.6445C19.5917 4.1805 18.3437 3.3525 16.9277 3.3525C14.8757 3.3525 13.8797 4.4805 13.8797 6.0045H14.9597Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div
                      class="justify-content-between px-2 d-flex align-items-center flex-wrap"
                    >
                      <input
                        type="text"
                        class="form-control-5"
                        placeholder="Write Someting ...."
                      />

                      <div class="d-flex ms-0 align-items-center flex-wrap">
                        <i class="mx-lg-2 ms-lg-3 ms-1 gray fas fa-image"></i>
                        <i class="gray mx-lg-2 mx-1 far fa-smile"></i>
                        <i class="mx-lg-2 mx-1 gray fa fa-plus-circle"></i>

                        <div class="send_btn_bg text-center">
                          <i class="fas fa-paper-plane"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- fourth post -->
                <div class="mt-4 boder_bg_shadow p-3">
                  <div
                    class="px-2 d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <img
                        src="~assets/images/soc_02.png"
                        class="img-fluid mt-1 mx-1 rounded"
                        style="height: 50px; width: 50px"
                        alt=""
                      />
                      <div class="mx-2">
                        <p class="mb-0 fw-bold">Victor Okoye</p>
                        <p class="mb-0 gray fs-7">15mins ago</p>
                      </div>
                    </div>
                    <i class="gray fas fa-ellipsis-h"></i>
                  </div>
                  <div class="align-items-center">
                    <p class="px-2 mt-2 mb-0 gray my-auto fs-6">
                      I love my new Collections &#128525; &#128525;
                    </p>
                    <p class="px-2 mb-0 blue my-auto fs-6">
                      #photos #wallpaper #new #models
                    </p>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <img
                        src="~assets/images/soc_p_01.png"
                        class="mt-2 mx-2 img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="col-6">
                      <img
                        src="~assets/images/soc_p_02.png"
                        class="mt-2 mx-2 img-fluid"
                        alt=""
                      />
                      <img
                        src="~assets/images/soc_p_03.png"
                        class="mt-2 mx-2 img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="comment_box d-flex mt-2 ms-2 p-3">
                    <div
                      class="px-lg-2 mx-0 com_right_boder d-flex align-items-center"
                    >
                      <i class="mx-lg-2 mx-0 com_color far fa-heart"></i>
                      <p class="mb-0 com_color">3.5k</p>
                    </div>
                    <div
                      class="px-lg-2 com_right_boder d-flex align-items-center flex-wrap"
                    >
                      <svg
                        width="24"
                        class="mx-2"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.226229 22.2736L0.226201 22.2736C0.137256 22.4759 0.189384 22.7061 0.358855 22.8594C0.472052 22.9618 0.623974 23.0164 0.777742 23.0164C0.852437 23.0164 0.925882 23.0035 0.997952 22.9778L0.998101 22.9778L4.41616 21.7391C5.86112 22.5754 7.53614 23.0164 9.2798 23.0164C14.2929 23.0164 18.3766 19.3254 18.3766 14.7833C18.3766 10.2412 14.2929 6.55022 9.2798 6.55022C4.26674 6.55022 0.183031 10.2412 0.183031 14.7833C0.183031 16.3614 0.670255 17.8771 1.59375 19.1845L0.226229 22.2736ZM4.26428 20.6299L1.84775 21.5061L2.81428 19.3238L2.81431 19.3238C2.88876 19.1543 2.86461 18.962 2.75083 18.8135C1.84874 17.6337 1.37245 16.2396 1.37245 14.7833C1.37245 10.8423 4.9168 7.63168 9.2798 7.63168C13.6428 7.63168 17.1872 10.8423 17.1872 14.7833C17.1872 18.7243 13.6428 21.9349 9.2798 21.9349C7.66829 21.9349 6.12613 21.5034 4.82149 20.6869C4.7215 20.6234 4.6029 20.5913 4.48464 20.5913C4.41002 20.5913 4.33539 20.6042 4.26429 20.6299L4.26428 20.6299Z"
                          fill="#5D668A"
                          stroke="#5D668A"
                          stroke-width="0.055814"
                        />
                        <rect
                          x="10"
                          y="0.8125"
                          width="14"
                          height="14"
                          rx="7"
                          fill="#015CEE"
                        />
                        <path
                          d="M14.9597 6.0045C14.9597 5.1885 15.3077 4.3125 16.9277 4.3125C18.0557 4.3125 18.5117 4.9725 18.5117 5.6445C18.5117 6.6045 17.8637 7.0005 17.0117 7.0005H16.1717V7.9605H17.0597C17.8637 7.9605 18.8117 8.1885 18.8117 9.4845C18.8117 10.4805 18.2957 11.0205 16.8677 11.0205C15.2957 11.0205 14.7437 10.2045 14.7437 9.0045H13.6637C13.6637 10.8765 14.8397 11.9805 16.9517 11.9805C18.7277 11.9805 19.8917 11.1165 19.8917 9.4845C19.8917 8.5125 19.4957 7.7565 18.3197 7.4325V7.4085C19.1597 7.0725 19.5917 6.5205 19.5917 5.6445C19.5917 4.1805 18.3437 3.3525 16.9277 3.3525C14.8757 3.3525 13.8797 4.4805 13.8797 6.0045H14.9597Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div
                      class="justify-content-between px-2 d-flex align-items-center flex-wrap"
                    >
                      <input
                        type="text"
                        class="form-control-5"
                        placeholder="Write Someting ...."
                      />

                      <div class="d-flex ms-0 align-items-center flex-wrap">
                        <i
                          class="mx-lg-2 mx-1 ms-lg-4 ms-1 gray fas fa-image"
                        ></i>
                        <i class="gray mx-lg-2 mx-1 far fa-smile"></i>
                        <i class="mx-lg-2 mx-1 gray fa fa-plus-circle"></i>

                        <div class="send_btn_bg text-center">
                          <i class="fas fa-paper-plane"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4 col-md-4">
              <div class="py-2">
                <!-- frist card -->
                <div class="mt-3 boder_bg_shadow p-3 mt-5">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <p class="mb-0 fw-bolder">Campaigns</p>
                    <i class="fas fa-ellipsis-h gray"></i>
                  </div>
                  <div>
                    <p class="mb-0 gray">4 New Campaigns</p>

                    <div
                      class="d-flex flex-wrap justify-content-between mt-2 mx-2"
                    >
                      <img
                        src="~assets/images/soc_E_07.png"
                        class="img-fluid mt-1 mx-1 rounded"
                        style="height: 60px; width: 60px"
                        alt=""
                      />
                      <img
                        src="~assets/images/soc_E_08.png"
                        class="img-fluid mt-1 mx-1 rounded"
                        style="height: 60px; width: 60px"
                        alt=""
                      />
                      <img
                        src="~assets/images/soc_E_07.png"
                        class="img-fluid mt-1 mx-1 rounded"
                        style="height: 60px; width: 60px"
                        alt=""
                      />

                      <img
                        src="~assets/images/soc_E_09.png"
                        class="img-fluid mt-2 mx-1 rounded"
                        style="height: 60px; width: 60px"
                        alt=""
                      />
                      <img
                        src="~assets/images/soc_E_10.png"
                        class="img-fluid mt-2 mx-1 rounded"
                        style="height: 60px; width: 60px"
                        alt=""
                      />
                      <img
                        src="~assets/images/soc_E_09.png"
                        class="img-fluid mt-2 mx-1 rounded"
                        style="height: 60px; width: 60px"
                        alt=""
                      />
                    </div>
                    <div>
                      <p class="com_color fs-7 text-center mt-4">See More</p>
                    </div>
                  </div>
                </div>
                <!-- second card -->
                <div class="mt-3 boder_bg_shadow p-3 mt-5">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <p class="mb-0 fw-bolder">Most Recent Gigs</p>
                    <i class="fas fa-ellipsis-h gray"></i>
                  </div>
                  <div>
                    <!-- <p class="mb-0 gray">5 picture Uploaded</p> -->

                    <div
                      class="d-flex flex-wrap justify-content-between mt-4 mx-2"
                    >
                      <img
                        src="~assets/images/soc_E_11.png"
                        class="img-fluid mt-1 mx-1 rounded"
                        style="height: 60px; width: 60px"
                        alt=""
                      />
                      <img
                        src="~assets/images/soc_E_12.png"
                        class="img-fluid mt-1 mx-1 rounded"
                        style="height: 60px; width: 60px"
                        alt=""
                      />
                      <img
                        src="~assets/images/soc_E_13.png"
                        class="img-fluid mt-1 mx-1 rounded"
                        style="height: 60px; width: 60px"
                        alt=""
                      />

                      <img
                        src="~assets/images/soc_E_14.png"
                        class="img-fluid mt-2 mx-1 rounded"
                        style="height: 60px; width: 60px"
                        alt=""
                      />
                      <img
                        src="~assets/images/soc_E_10.png"
                        class="img-fluid mt-2 mx-1 rounded"
                        style="height: 60px; width: 60px"
                        alt=""
                      />
                      <img
                        src="~assets/images/soc_E_15.png"
                        class="img-fluid mt-2 mx-1 rounded"
                        style="height: 60px; width: 60px"
                        alt=""
                      />
                    </div>
                    <div>
                      <p class="com_color fs-7 text-center mt-4">See More</p>
                    </div>
                  </div>
                </div>
                <!-- thrid card -->
                <div class="mt-3 boder_bg_shadow p-3 mt-5">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <p class="mb-0 fw-bolder">Upcoming Events</p>
                    <i class="fas fa-ellipsis-h gray"></i>
                  </div>
                  <div>
                    <p class="mb-0 gray">4 New Events</p>

                    <div
                      class="d-flex flex-wrap justify-content-between mt-2 mx-2"
                    >
                      <img
                        src="~assets/images/soc_E_07.png"
                        class="img-fluid mt-1 mx-1 rounded"
                        style="height: 60px; width: 60px"
                        alt=""
                      />
                      <img
                        src="~assets/images/soc_E_08.png"
                        class="img-fluid mt-1 mx-1 rounded"
                        style="height: 60px; width: 60px"
                        alt=""
                      />
                      <img
                        src="~assets/images/soc_E_07.png"
                        class="img-fluid mt-1 mx-1 rounded"
                        style="height: 60px; width: 60px"
                        alt=""
                      />

                      <img
                        src="~assets/images/soc_E_09.png"
                        class="img-fluid mt-2 mx-1 rounded"
                        style="height: 60px; width: 60px"
                        alt=""
                      />
                      <img
                        src="~assets/images/soc_E_10.png"
                        class="img-fluid mt-2 mx-1 rounded"
                        style="height: 60px; width: 60px"
                        alt=""
                      />
                      <img
                        src="~assets/images/soc_E_09.png"
                        class="img-fluid mt-2 mx-1 rounded"
                        style="height: 60px; width: 60px"
                        alt=""
                      />
                    </div>
                    <div>
                      <p class="com_color fs-7 text-center mt-4">See More</p>
                    </div>
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
