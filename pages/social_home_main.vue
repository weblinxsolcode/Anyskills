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
              <div class="camp d-flex justify-content-between">
                <div class="container px-0 ps-lg-3 tabs d-flex gap-2 camp">
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
                      <p class="text-muted pb-2 tab tab_nav_2" @click="tab('tab_nav_2')">
                        Campaigns
                      </p>
                    </div>
                  </NuxtLink>

                  <div class="">
                    <p class="text-muted for_pointer pb-2 tab tab_nav_3" @click="tab('tab_nav_3')">
                      Events
                    </p>
                  </div>

                  <div>
                    <p class="text-muted for_pointer pb-2 tab tab_nav_4" @click="tab('tab_nav_4')">
                      Photos
                    </p>
                  </div>
                  <div>
                    <p class="text-muted for_pointer pb-2 tab tab_nav_5" @click="tab('tab_nav_5')">
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
            <div class="row align-items-top">
              <div class="col-12 col-lg-8 col-md-8">
                <div>
                  <!-- frist post -->
                  <div class="boder_bg_shadow mt-5 p-3">
                    <div
                      class="px-2 ps-0  d-flex justify-content-between align-items-center flex-wrap pe-lg-0"
                    >
                      <p class="fw-bold mb-0">New Post</p>
                      <i class="gray fas fa-ellipsis-h pe-2"></i>
                    </div>
                    <div class="d-flex mt-2 align-items-center">
                      <img
                        src="~assets/images/soc_01.png"
                        class="img-fluid mt-1 mx-1 ms-0 rounded-circle"
                        style="height: 30px; width: 30px"
                        alt=""
                      />

                      <input
                        type="textarea"
                        class="w-100 form-control-5 gray-ph"
                        placeholder="Write Someting ...."
                      />
                    </div>
                    <div class="mt-5 px-2 ps-0">
                      <hr class="mt-4" style="margin-top: -19px; color: lightgrey" />
                    </div>
                    <div
                      class="d-flex justify-content-between align-items-center flex-wrap"
                    >
                      <div class="px-lg-2 ps-lg-0 px-0 d-flex align-items-center flex-wrap">
                        <p class="mb-0">Visible For</p>
                        <select class="select_fri ms-3">
                          <option value="volvo">Friends</option>
                          <option value="saab">Other</option>
                        </select>
                        <i class="mx-lg-2 gray mx-1 fas fa-image"></i>
                        <i class="gray mx-lg-2 mx-1 far fa-smile"></i>
                        <i class="mx-lg-2 mx-1 gray far fa-heart"></i>
                        <i class="mx-lg-2 mx-1 gray fa fa-plus-circle"></i>
                      </div>
                      <div class="">
                        <button class="share_btn" style="border-radius: 13px">
                          <i class="fas fa-paper-plane pe-2"></i>
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- secound post -->
                  <div class="mt-4 boder_bg_shadow p-3">
                    <div
                      class="ps-0 px-2 d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center">
                        <img
                          src="~assets/images/soc_02.png"
                          class="img-fluid mt-1 ms-0 mx-1 rounded"
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
                      <p class="px-2 ps-0 mt-2 mb-0 gray my-auto fs-6">
                        I love my new Collections &#128525; &#128525;
                      </p>
                      <p class="px-2 ps-0 mb-0 blue my-auto fs-6">
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
                      <div class="col-6 ms-0 ps-0 pe-4">
                        <img
                          src="~assets/images/soc_p_02.png"
                          class="mt-2 img-fluid"
                          alt=""
                        />
                        <img
                          src="~assets/images/soc_p_03.png"
                          class="mt-2 mx-2 img-fluid me-4"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      class="comment_box d-flex justify-content-between mt-2 ms-0 px-lg-2 p-3"
                    >
                      <div class="px-lg-2 mx-0 com_right_boder d-flex align-items-center">
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
                          class="form-control-5 gray-ph"
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
                      class="ps-0 px-2 d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center">
                        <img
                          src="~assets/images/soc_02.png"
                          class="img-fluid mt-1 ms-0 mx-1 rounded"
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
                      <p class="px-2 ps-0 mt-2 mb-0 gray my-auto fs-6">
                        I love my new Collections &#128525; &#128525;
                      </p>
                      <p class="px-2 ps-0 mb-0 blue my-auto fs-6">
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
                      <div class="col-6 ms-0 ps-0 pe-4">
                        <img
                          src="~assets/images/soc_p_02.png"
                          class="mt-2 img-fluid"
                          alt=""
                        />
                        <img
                          src="~assets/images/soc_p_03.png"
                          class="mt-2 mx-2 img-fluid me-4"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      class="comment_box d-flex justify-content-between mt-2 ms-0 px-lg-2 p-3"
                    >
                      <div class="px-lg-2 mx-0 com_right_boder d-flex align-items-center">
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
                          class="form-control-5 gray-ph"
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
                  <!-- fourth post -->
                  <div class="mt-4 boder_bg_shadow p-3">
                    <div
                      class="ps-0 px-2 d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center">
                        <img
                          src="~assets/images/soc_02.png"
                          class="img-fluid mt-1 ms-0 mx-1 rounded"
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
                      <p class="px-2 ps-0 mt-2 mb-0 gray my-auto fs-6">
                        I love my new Collections &#128525; &#128525;
                      </p>
                      <p class="px-2 ps-0 mb-0 blue my-auto fs-6">
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
                      <div class="col-6 ms-0 ps-0 pe-4">
                        <img
                          src="~assets/images/soc_p_02.png"
                          class="mt-2 img-fluid"
                          alt=""
                        />
                        <img
                          src="~assets/images/soc_p_03.png"
                          class="mt-2 mx-2 img-fluid me-4"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      class="comment_box d-flex justify-content-between mt-2 ms-0 px-lg-2 p-3"
                    >
                      <div class="px-lg-2 mx-0 com_right_boder d-flex align-items-center">
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
                          class="form-control-5 gray-ph"
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
                </div>
              </div>
              <div class="col-12 col-lg-4 col-md-4">
                <div class="py-2 pt-lg-0">
                  <!-- frist card -->
                  <div class="mt-3 boder_bg_shadow p-3 mt-5">
                    <div class="d-flex justify-content-between align-items-center">
                      <p class="mb-0 fw-bolder">Campaigns</p>
                      <i class="fas fa-ellipsis-h gray pe-lg-3"></i>
                    </div>
                    <div>
                      <p class="mb-0 gray">4 New Campaigns</p>

                      <div
                        class="d-flex on_hover_display_parent flex-wrap justify-content-between mt-2 mx-2 ms-lg-0"
                      >
                        <div class="position-relative">
                          <img
                            src="~assets/images/soc_E_07.png"
                            class="img-fluid mt-1 mx-1 rounded ms-lg-0 on_hover_display"
                            style="height: 60px; width: 60px"
                            alt=""
                          />
                          <div class="hover_effect_99">
                            <div class="boder_bg_shadow py-3 px-2 position-relative">
                              <div class="row">
                                <div class="col-4">
                                  <img
                                    src="~assets/images/soc_E_07.png"
                                    class="w-100 mx-3 my-0"
                                    alt=""
                                  />
                                </div>
                                <div class="col-8">
                                  <div class="d-flex justify-content-between">
                                    <p class="fs-7 mb-0">7 Aug, 2019 - 14 Aug, 2019</p>
                                    <!-- <span><i class="gray fs-5 fas fa-ellipsis-v"></i></span> -->
                                  </div>
                                  <p class="fs-6 fw-bolder mb-0">
                                    NYSC, Pre-service & I.T Internship
                                  </p>
                                  <p class="mb-0 fs-7 gray">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Ipsum arcu lectus ultrices potenti morbi
                                    tincidunt proin sem
                                  </p>
                                  <p class="mb-0 fs-7 fw-bold">| 10:00 - 12:00PM</p>
                                </div>
                              </div>
                              <div class="position-absolute dot_icon">
                                <i class="gray fas fa-ellipsis-h pe-2"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="position-relative">
                          <img
                            src="~assets/images/soc_E_08.png"
                            class="img-fluid mt-1 mx-1 rounded ms-lg-0 on_hover_display"
                            style="height: 60px; width: 60px"
                            alt=""
                          />
                          <div class="hover_effect_98">
                            <div class="boder_bg_shadow py-3 px-2 position-relative">
                              <div class="row">
                                <div class="col-4">
                                  <img
                                    src="~assets/images/soc_E_08.png"
                                    class="w-100 mx-3 my-0"
                                    alt=""
                                  />
                                </div>
                                <div class="col-8">
                                  <div class="d-flex justify-content-between">
                                    <p class="fs-7 mb-0">7 Aug, 2019 - 14 Aug, 2019</p>
                                    <!-- <span><i class="gray fs-5 fas fa-ellipsis-v"></i></span> -->
                                  </div>
                                  <p class="fs-6 fw-bolder mb-0">
                                    NYSC, Pre-service & I.T Internship
                                  </p>
                                  <p class="mb-0 fs-7 gray">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Ipsum arcu lectus ultrices potenti morbi
                                    tincidunt proin sem
                                  </p>
                                  <p class="mb-0 fs-7 fw-bold">| 10:00 - 12:00PM</p>
                                </div>
                              </div>
                              <div class="position-absolute dot_icon">
                                <i class="gray fas fa-ellipsis-h pe-2"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="position-relative">
                          <img
                            src="~assets/images/soc_E_07.png"
                            class="img-fluid mt-1 mx-1 rounded ms-lg-0 on_hover_display"
                            style="height: 60px; width: 60px"
                            alt=""
                          />
                          <div class="hover_effect_100">
                            <div class="boder_bg_shadow py-3 px-2 position-relative">
                              <div class="row">
                                <div class="col-4">
                                  <img
                                    src="~assets/images/soc_E_07.png"
                                    class="w-100 mx-3 my-0"
                                    alt=""
                                  />
                                </div>
                                <div class="col-8">
                                  <div class="d-flex justify-content-between">
                                    <p class="fs-7 mb-0">7 Aug, 2019 - 14 Aug, 2019</p>
                                    <!-- <span><i class="gray fs-5 fas fa-ellipsis-v"></i></span> -->
                                  </div>
                                  <p class="fs-6 fw-bolder mb-0">
                                    NYSC, Pre-service & I.T Internship
                                  </p>
                                  <p class="mb-0 fs-7 gray">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Ipsum arcu lectus ultrices potenti morbi
                                    tincidunt proin sem
                                  </p>
                                  <p class="mb-0 fs-7 fw-bold">| 10:00 - 12:00PM</p>
                                </div>
                              </div>
                              <div class="position-absolute dot_icon">
                                <i class="gray fas fa-ellipsis-h pe-2"></i>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="position-relative mt-2">
                          <img
                            src="~assets/images/soc_E_09.png"
                            class="img-fluid mt-1 mx-1 rounded ms-lg-0 on_hover_display"
                            style="height: 60px; width: 60px"
                            alt=""
                          />
                          <div class="hover_effect_99">
                            <div class="boder_bg_shadow py-3 px-2 position-relative">
                              <div class="row">
                                <div class="col-4">
                                  <img
                                    src="~assets/images/soc_E_09.png"
                                    class="w-100 mx-3 my-0"
                                    alt=""
                                  />
                                </div>
                                <div class="col-8">
                                  <div class="d-flex justify-content-between">
                                    <p class="fs-7 mb-0">7 Aug, 2019 - 14 Aug, 2019</p>
                                    <!-- <span><i class="gray fs-5 fas fa-ellipsis-v"></i></span> -->
                                  </div>
                                  <p class="fs-6 fw-bolder mb-0">
                                    NYSC, Pre-service & I.T Internship
                                  </p>
                                  <p class="mb-0 fs-7 gray">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Ipsum arcu lectus ultrices potenti morbi
                                    tincidunt proin sem
                                  </p>
                                  <p class="mb-0 fs-7 fw-bold">| 10:00 - 12:00PM</p>
                                </div>
                              </div>
                              <div class="position-absolute dot_icon">
                                <i class="gray fas fa-ellipsis-h pe-2"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="position-relative mt-2">
                          <img
                            src="~assets/images/soc_E_10.png"
                            class="img-fluid mt-1 mx-1 rounded ms-lg-0 on_hover_display"
                            style="height: 60px; width: 60px"
                            alt=""
                          />
                          <div class="hover_effect_99">
                            <div class="boder_bg_shadow py-3 px-2 position-relative">
                              <div class="row">
                                <div class="col-4">
                                  <img
                                    src="~assets/images/soc_E_10.png"
                                    class="w-100 mx-3 my-0"
                                    alt=""
                                  />
                                </div>
                                <div class="col-8">
                                  <div class="d-flex justify-content-between">
                                    <p class="fs-7 mb-0">7 Aug, 2019 - 14 Aug, 2019</p>
                                    <!-- <span><i class="gray fs-5 fas fa-ellipsis-v"></i></span> -->
                                  </div>
                                  <p class="fs-6 fw-bolder mb-0">
                                    NYSC, Pre-service & I.T Internship
                                  </p>
                                  <p class="mb-0 fs-7 gray">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Ipsum arcu lectus ultrices potenti morbi
                                    tincidunt proin sem
                                  </p>
                                  <p class="mb-0 fs-7 fw-bold">| 10:00 - 12:00PM</p>
                                </div>
                              </div>
                              <div class="position-absolute dot_icon">
                                <i class="gray fas fa-ellipsis-h pe-2"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="position-relative mt-2">
                          <img
                            src="~assets/images/soc_E_09.png"
                            class="img-fluid mt-1 mx-1 rounded ms-lg-0 on_hover_display"
                            style="height: 60px; width: 60px"
                            alt=""
                          />
                          <div class="hover_effect_100">
                            <div class="boder_bg_shadow py-3 px-2 position-relative">
                              <div class="row">
                                <div class="col-4">
                                  <img
                                    src="~assets/images/soc_E_09.png"
                                    class="w-100 mx-3 my-0"
                                    alt=""
                                  />
                                </div>
                                <div class="col-8">
                                  <div class="d-flex justify-content-between">
                                    <p class="fs-7 mb-0">7 Aug, 2019 - 14 Aug, 2019</p>
                                    <!-- <span><i class="gray fs-5 fas fa-ellipsis-v"></i></span> -->
                                  </div>
                                  <p class="fs-6 fw-bolder mb-0">
                                    NYSC, Pre-service & I.T Internship
                                  </p>
                                  <p class="mb-0 fs-7 gray">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Ipsum arcu lectus ultrices potenti morbi
                                    tincidunt proin sem
                                  </p>
                                  <p class="mb-0 fs-7 fw-bold">| 10:00 - 12:00PM</p>
                                </div>
                              </div>
                              <div class="position-absolute dot_icon">
                                <i class="gray fas fa-ellipsis-h pe-2"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        class="d-flex flex-wrap justify-content-between mt-2 mx-2 ms-lg-0"
                        v-if="awesome1"
                      >
                        <img
                          src="~assets/images/soc_E_07.png"
                          class="img-fluid mt-1 mx-1 rounded"
                          style="height: 60px; width: 60px"
                          alt=""
                        />

                        <img
                          src="~assets/images/soc_E_09.png"
                          class="img-fluid mt-2 mx-1 rounded ms-lg-0"
                          style="height: 60px; width: 60px"
                          alt=""
                        />
                        <img
                          src="~assets/images/soc_E_10.png"
                          class="img-fluid mt-2 mx-1 rounded"
                          style="height: 60px; width: 60px"
                          alt=""
                        />
                      </div>
                      <div v-else></div>
                      <div @click="awesome1 = !awesome1">
                        <p class="com_color fs-7 text-center mt-4" style="color: #a8b1c5">
                          See More
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- second card -->
                  <div class="mt-3 boder_bg_shadow p-3 mt-5">
                    <div class="d-flex justify-content-between align-items-center">
                      <p class="mb-0 fw-bolder">Most Recent Gigs</p>
                      <i class="fas fa-ellipsis-h gray pe-lg-3"></i>
                    </div>
                    <div>
                      <!-- <p class="mb-0 gray">5 picture Uploaded</p> -->

                      <div
                        class="d-flex flex-wrap on_hover_display_parent justify-content-between mt-4 mx-2 ms-lg-0"
                      >
                        <div class="position-relative">
                          <img
                            src="~assets/images/soc_E_11.png"
                            class="img-fluid mt-1 mx-1 rounded ms-lg-0 on_hover_display"
                            style="height: 60px; width: 60px"
                            alt=""
                          />
                          <div class="hover_effect_101">
                            <div class="card gigs" style="width: 80%">
                              <img
                                src="~assets/images/gig1.png"
                                class="card-img-top"
                                alt="..."
                              />
                              <div class="card-body">
                                <div
                                  class="d-flex justify-content-between align-items-center"
                                >
                                  <p class="card-title fw-bold mb-0">John Creta</p>

                                  <div
                                    class="d-flex justify-content-center align-items-center"
                                  >
                                    <img src="~assets/images/star.png" alt="" />
                                    <p class="text-warning mb-0 ms-1">5.0</p>
                                  </div>
                                </div>
                                <div
                                  class="mt-3 card-text d-flex justify-content-start align-items-center"
                                >
                                  <p class="">Est. Delivery Time:</p>
                                  <p class="fw-bold ms-3">5 Days</p>
                                </div>
                                <div
                                  class="mb-0 mt-4 d-flex justify-content-end align-items-center"
                                >
                                  <p class="mb-0">Starting at :</p>
                                  <p class="fw-bold ms-2 mb-0">$23</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="position-relative">
                          <img
                            src="~assets/images/soc_E_12.png"
                            class="img-fluid mt-1 mx-1 rounded ms-lg-0 on_hover_display"
                            style="height: 60px; width: 60px"
                            alt=""
                          />
                          <div class="hover_effect_101">
                            <div class="card gigs" style="width: 80%">
                              <img
                                src="~assets/images/gig1.png"
                                class="card-img-top"
                                alt="..."
                              />
                              <div class="card-body">
                                <div
                                  class="d-flex justify-content-between align-items-center"
                                >
                                  <p class="card-title fw-bold mb-0">John Creta</p>

                                  <div
                                    class="d-flex justify-content-center align-items-center"
                                  >
                                    <img src="~assets/images/star.png" alt="" />
                                    <p class="text-warning mb-0 ms-1">5.0</p>
                                  </div>
                                </div>
                                <div
                                  class="mt-3 card-text d-flex justify-content-start align-items-center"
                                >
                                  <p class="">Est. Delivery Time:</p>
                                  <p class="fw-bold ms-3">5 Days</p>
                                </div>
                                <div
                                  class="mb-0 mt-4 d-flex justify-content-end align-items-center"
                                >
                                  <p class="mb-0">Starting at :</p>
                                  <p class="fw-bold ms-2 mb-0">$23</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="position-relative">
                          <img
                            src="~assets/images/soc_E_13.png"
                            class="img-fluid mt-1 mx-1 rounded ms-lg-0 on_hover_display"
                            style="height: 60px; width: 60px"
                            alt=""
                          />
                          <div class="hover_effect_101">
                            <div class="card gigs" style="width: 80%">
                              <img
                                src="~assets/images/gig1.png"
                                class="card-img-top"
                                alt="..."
                              />
                              <div class="card-body">
                                <div
                                  class="d-flex justify-content-between align-items-center"
                                >
                                  <p class="card-title fw-bold mb-0">John Creta</p>

                                  <div
                                    class="d-flex justify-content-center align-items-center"
                                  >
                                    <img src="~assets/images/star.png" alt="" />
                                    <p class="text-warning mb-0 ms-1">5.0</p>
                                  </div>
                                </div>
                                <div
                                  class="mt-3 card-text d-flex justify-content-start align-items-center"
                                >
                                  <p class="">Est. Delivery Time:</p>
                                  <p class="fw-bold ms-3">5 Days</p>
                                </div>
                                <div
                                  class="mb-0 mt-4 d-flex justify-content-end align-items-center"
                                >
                                  <p class="mb-0">Starting at :</p>
                                  <p class="fw-bold ms-2 mb-0">$23</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="position-relative mt-1">
                          <img
                            src="~assets/images/soc_E_14.png"
                            class="img-fluid mt-1 mx-1 rounded ms-lg-0 on_hover_display"
                            style="height: 60px; width: 60px"
                            alt=""
                          />
                          <div class="hover_effect_101">
                            <div class="card gigs" style="width: 80%">
                              <img
                                src="~assets/images/gig1.png"
                                class="card-img-top"
                                alt="..."
                              />
                              <div class="card-body">
                                <div
                                  class="d-flex justify-content-between align-items-center"
                                >
                                  <p class="card-title fw-bold mb-0">John Creta</p>

                                  <div
                                    class="d-flex justify-content-center align-items-center"
                                  >
                                    <img src="~assets/images/star.png" alt="" />
                                    <p class="text-warning mb-0 ms-1">5.0</p>
                                  </div>
                                </div>
                                <div
                                  class="mt-3 card-text d-flex justify-content-start align-items-center"
                                >
                                  <p class="">Est. Delivery Time:</p>
                                  <p class="fw-bold ms-3">5 Days</p>
                                </div>
                                <div
                                  class="mb-0 mt-4 d-flex justify-content-end align-items-center"
                                >
                                  <p class="mb-0">Starting at :</p>
                                  <p class="fw-bold ms-2 mb-0">$23</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="position-relative mt-1">
                          <img
                            src="~assets/images/soc_E_10.png"
                            class="img-fluid mt-1 mx-1 rounded ms-lg-0 on_hover_display"
                            style="height: 60px; width: 60px"
                            alt=""
                          />
                          <div class="hover_effect_101">
                            <div class="card gigs" style="width: 80%">
                              <img
                                src="~assets/images/gig1.png"
                                class="card-img-top"
                                alt="..."
                              />
                              <div class="card-body">
                                <div
                                  class="d-flex justify-content-between align-items-center"
                                >
                                  <p class="card-title fw-bold mb-0">John Creta</p>

                                  <div
                                    class="d-flex justify-content-center align-items-center"
                                  >
                                    <img src="~assets/images/star.png" alt="" />
                                    <p class="text-warning mb-0 ms-1">5.0</p>
                                  </div>
                                </div>
                                <div
                                  class="mt-3 card-text d-flex justify-content-start align-items-center"
                                >
                                  <p class="">Est. Delivery Time:</p>
                                  <p class="fw-bold ms-3">5 Days</p>
                                </div>
                                <div
                                  class="mb-0 mt-4 d-flex justify-content-end align-items-center"
                                >
                                  <p class="mb-0">Starting at :</p>
                                  <p class="fw-bold ms-2 mb-0">$23</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="position-relative mt-1">
                          <img
                            src="~assets/images/soc_E_15.png"
                            class="img-fluid mt-1 mx-1 rounded ms-lg-0 on_hover_display"
                            style="height: 60px; width: 60px"
                            alt=""
                          />
                          <div class="hover_effect_101">
                            <div class="card gigs" style="width: 80%">
                              <img
                                src="~assets/images/gig1.png"
                                class="card-img-top"
                                alt="..."
                              />
                              <div class="card-body">
                                <div
                                  class="d-flex justify-content-between align-items-center"
                                >
                                  <p class="card-title fw-bold mb-0">John Creta</p>

                                  <div
                                    class="d-flex justify-content-center align-items-center"
                                  >
                                    <img src="~assets/images/star.png" alt="" />
                                    <p class="text-warning mb-0 ms-1">5.0</p>
                                  </div>
                                </div>
                                <div
                                  class="mt-3 card-text d-flex justify-content-start align-items-center"
                                >
                                  <p class="">Est. Delivery Time:</p>
                                  <p class="fw-bold ms-3">5 Days</p>
                                </div>
                                <div
                                  class="mb-0 mt-4 d-flex justify-content-end align-items-center"
                                >
                                  <p class="mb-0">Starting at :</p>
                                  <p class="fw-bold ms-2 mb-0">$23</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="d-flex flex-wrap justify-content-between mt-4 mx-2 ms-lg-0"
                        v-if="awesome2"
                      >
                        <img
                          src="~assets/images/soc_E_11.png"
                          class="img-fluid mt-1 mx-1 rounded ms-lg-0"
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
                      </div>
                      <div v-else></div>
                      <div>
                        <p
                          class="com_color fs-7 text-center mt-4"
                          @click="awesome2 = !awesome2"
                          style="color: #a8b1c5"
                        >
                          See More
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- thrid card -->
                  <div class="mt-3 boder_bg_shadow p-3 mt-5">
                    <div class="d-flex justify-content-between align-items-center">
                      <p class="mb-0 fw-bolder">Upcoming Events</p>
                      <i class="fas fa-ellipsis-h gray pe-lg-3"></i>
                    </div>
                    <div>
                      <p class="mb-0 gray">4 New Events</p>

                      <div
                        class="d-flex flex-wrap on_hover_display_parent justify-content-between mt-2 mx-2 ms-lg-0"
                      >
                        <div class="position-relative">
                          <img
                            src="~assets/images/soc_event_03.png"
                            class="img-fluid mt-1 mx-1 rounded ms-lg-0 on_hover_display"
                            style="height: 60px; width: 60px"
                            alt=""
                          />
                          <div class="hover_effect_98">
                            <div class="boder_bg_shadow py-3 px-2 position-relative">
                              <div class="row">
                                <div class="col-4">
                                  <img
                                    src="~assets/images/soc_event_03.png"
                                    class="w-100 mx-3 my-0"
                                    alt=""
                                  />
                                </div>
                                <div class="col-8">
                                  <div class="d-flex justify-content-between">
                                    <p class="fs-7 mb-0">7 Aug, 2019 - 14 Aug, 2019</p>
                                    <!-- <span><i class="gray fs-5 fas fa-ellipsis-v"></i></span> -->
                                  </div>
                                  <p class="fs-6 fw-bolder mb-0">
                                    Welcome to Another World
                                  </p>
                                  <p class="mb-0 fs-7 gray">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Ipsum arcu lectus ultrices potenti morbi
                                    tincidunt proin sem
                                  </p>
                                  <p class="mb-0 fs-7 fw-bold">| 10:00 - 12:00PM</p>
                                </div>
                              </div>
                              <div class="position-absolute dot_icon">
                                <i class="gray fas fa-ellipsis-h pe-2"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="position-relative">
                          <img
                            src="~assets/images/soc_E_08.png"
                            class="img-fluid mt-1 mx-1 rounded ms-lg-0 on_hover_display"
                            style="height: 60px; width: 60px"
                            alt=""
                          />
                          <div class="hover_effect_98">
                            <div class="boder_bg_shadow py-3 px-2 position-relative">
                              <div class="row">
                                <div class="col-4">
                                  <img
                                    src="~assets/images/soc_E_08.png"
                                    class="w-100 mx-3 my-0"
                                    alt=""
                                  />
                                </div>
                                <div class="col-8">
                                  <div class="d-flex justify-content-between">
                                    <p class="fs-7 mb-0">7 Aug, 2019 - 14 Aug, 2019</p>
                                    <!-- <span><i class="gray fs-5 fas fa-ellipsis-v"></i></span> -->
                                  </div>
                                  <p class="fs-6 fw-bolder mb-0">
                                    Welcome to Another World
                                  </p>
                                  <p class="mb-0 fs-7 gray">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Ipsum arcu lectus ultrices potenti morbi
                                    tincidunt proin sem
                                  </p>
                                  <p class="mb-0 fs-7 fw-bold">| 10:00 - 12:00PM</p>
                                </div>
                              </div>
                              <div class="position-absolute dot_icon">
                                <i class="gray fas fa-ellipsis-h pe-2"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="position-relative">
                          <img
                            src="~assets/images/soc_E_07.png"
                            class="img-fluid mt-1 mx-1 rounded ms-lg-0 on_hover_display"
                            style="height: 60px; width: 60px"
                            alt=""
                          />
                          <div class="hover_effect_100">
                            <div class="boder_bg_shadow py-3 px-2 position-relative">
                              <div class="row">
                                <div class="col-4">
                                  <img
                                    src="~assets/images/soc_E_07.png"
                                    class="w-100 mx-3 my-0"
                                    alt=""
                                  />
                                </div>
                                <div class="col-8">
                                  <div class="d-flex justify-content-between">
                                    <p class="fs-7 mb-0">7 Aug, 2019 - 14 Aug, 2019</p>
                                    <!-- <span><i class="gray fs-5 fas fa-ellipsis-v"></i></span> -->
                                  </div>
                                  <p class="fs-6 fw-bolder mb-0">
                                    Welcome to Another World
                                  </p>
                                  <p class="mb-0 fs-7 gray">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Ipsum arcu lectus ultrices potenti morbi
                                    tincidunt proin sem
                                  </p>
                                  <p class="mb-0 fs-7 fw-bold">| 10:00 - 12:00PM</p>
                                </div>
                              </div>
                              <div class="position-absolute dot_icon">
                                <i class="gray fas fa-ellipsis-h pe-2"></i>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="position-relative mt-1">
                          <img
                            src="~assets/images/soc_E_09.png"
                            class="img-fluid mt-1 mx-1 rounded ms-lg-0 on_hover_display"
                            style="height: 60px; width: 60px"
                            alt=""
                          />
                          <div class="hover_effect_100">
                            <div class="boder_bg_shadow py-3 px-2 position-relative">
                              <div class="row">
                                <div class="col-4">
                                  <img
                                    src="~assets/images/soc_E_09.png"
                                    class="w-100 mx-3 my-0"
                                    alt=""
                                  />
                                </div>
                                <div class="col-8">
                                  <div class="d-flex justify-content-between">
                                    <p class="fs-7 mb-0">7 Aug, 2019 - 14 Aug, 2019</p>
                                    <!-- <span><i class="gray fs-5 fas fa-ellipsis-v"></i></span> -->
                                  </div>
                                  <p class="fs-6 fw-bolder mb-0">
                                    Welcome to Another World
                                  </p>
                                  <p class="mb-0 fs-7 gray">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Ipsum arcu lectus ultrices potenti morbi
                                    tincidunt proin sem
                                  </p>
                                  <p class="mb-0 fs-7 fw-bold">| 10:00 - 12:00PM</p>
                                </div>
                              </div>
                              <div class="position-absolute dot_icon">
                                <i class="gray fas fa-ellipsis-h pe-2"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="position-relative mt-1">
                          <img
                            src="~assets/images/soc_E_10.png"
                            class="img-fluid mt-1 mx-1 rounded ms-lg-0 on_hover_display"
                            style="height: 60px; width: 60px"
                            alt=""
                          />
                          <div class="hover_effect_100">
                            <div class="boder_bg_shadow py-3 px-2 position-relative">
                              <div class="row">
                                <div class="col-4">
                                  <img
                                    src="~assets/images/soc_E_10.png"
                                    class="w-100 mx-3 my-0"
                                    alt=""
                                  />
                                </div>
                                <div class="col-8">
                                  <div class="d-flex justify-content-between">
                                    <p class="fs-7 mb-0">7 Aug, 2019 - 14 Aug, 2019</p>
                                    <!-- <span><i class="gray fs-5 fas fa-ellipsis-v"></i></span> -->
                                  </div>
                                  <p class="fs-6 fw-bolder mb-0">
                                    Welcome to Another World
                                  </p>
                                  <p class="mb-0 fs-7 gray">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Ipsum arcu lectus ultrices potenti morbi
                                    tincidunt proin sem
                                  </p>
                                  <p class="mb-0 fs-7 fw-bold">| 10:00 - 12:00PM</p>
                                </div>
                              </div>
                              <div class="position-absolute dot_icon">
                                <i class="gray fas fa-ellipsis-h pe-2"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="position-relative mt-1">
                          <img
                            src="~assets/images/soc_E_09.png"
                            class="img-fluid mt-1 mx-1 rounded ms-lg-0 on_hover_display"
                            style="height: 60px; width: 60px"
                            alt=""
                          />
                          <div class="hover_effect_100">
                            <div class="boder_bg_shadow py-3 px-2 position-relative">
                              <div class="row">
                                <div class="col-4">
                                  <img
                                    src="~assets/images/soc_E_09.png"
                                    class="w-100 mx-3 my-0"
                                    alt=""
                                  />
                                </div>
                                <div class="col-8">
                                  <div class="d-flex justify-content-between">
                                    <p class="fs-7 mb-0">7 Aug, 2019 - 14 Aug, 2019</p>
                                    <!-- <span><i class="gray fs-5 fas fa-ellipsis-v"></i></span> -->
                                  </div>
                                  <p class="fs-6 fw-bolder mb-0">
                                    Welcome to Another World
                                  </p>
                                  <p class="mb-0 fs-7 gray">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Ipsum arcu lectus ultrices potenti morbi
                                    tincidunt proin sem
                                  </p>
                                  <p class="mb-0 fs-7 fw-bold">| 10:00 - 12:00PM</p>
                                </div>
                              </div>
                              <div class="position-absolute dot_icon">
                                <i class="gray fas fa-ellipsis-h pe-2"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="d-flex flex-wrap justify-content-between mt-2 mx-2 ms-lg-0"
                        v-if="awesome3"
                      >
                        <img
                          src="~assets/images/soc_E_07.png"
                          class="img-fluid mt-1 mx-1 rounded ms-lg-0"
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
                      </div>
                      <div v-else></div>
                      <div @click="awesome3 = !awesome3">
                        <p class="com_color fs-7 text-center mt-4" style="color: #a8b1c5">
                          See More
                        </p>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      awesome1: false,
      awesome2: false,
      awesome3: false,
      awesome4: false,
    };
  },
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
