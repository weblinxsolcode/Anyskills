<template>
  <div>
    <a href="#scroll" id="scroll-a" class="d-none">hello world</a>
    <Nav />

    <ServicesNav />

    <CreategigNav />
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-1">
          <div class="dashboard_sidebar">
            <b-input-group class="w-100 flex-nowrap">
              <template #prepend>
                <b-input-group-text style="border: none"
                  ><i class="fas fa-search fs-4 py-1"></i
                ></b-input-group-text>
              </template>
              <b-form-input placeholder="Search" style="border: none"></b-form-input>
            </b-input-group>
            <hr class="text-muted" />
            <b-dropdown
              id="dropdown-1"
              class="project_drop"
              variant="link"
              toggle-class="text-decoration-none"
            >
              <template #button-content>
                <i class="fas fa-suitcase fs-5 green"></i>
                <span class="mb-0 green ms-3 me-5">Projects</span>
              </template>
              <b-dropdown-item>
                <ul class="ul_custom_iz">
                  <li class="live_iz">Live</li>
                </ul>
              </b-dropdown-item>
              <b-dropdown-item>
                <ul class="ul_custom_iz">
                  <li class="Completed_iz">Completed</li>
                </ul>
              </b-dropdown-item>
              <b-dropdown-item>
                <ul class="ul_custom_iz">
                  <li class="Paused_iz">Paused</li>
                </ul>
              </b-dropdown-item>
              <b-dropdown-item>
                <ul class="ul_custom_iz">
                  <li class="canceled_iz">canceled</li>
                </ul>
              </b-dropdown-item>
            </b-dropdown>
            <div class="dashboard_sidebar_content pt-4 pb-3">
              <i class="far fa-comment-alt fs-5"></i>
              <p class="mb-0 ms-3 ps-1">My Connections</p>
            </div>
            <div class="dashboard_sidebar_content pt-3 pb-3">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.434 14.9429C18.8286 16.3745 17.8818 17.636 16.6763 18.6171C15.4707 19.5982 14.0432 20.2691 12.5185 20.5711C10.9938 20.8731 9.41835 20.797 7.92986 20.3494C6.44137 19.9018 5.08518 19.0965 3.97985 18.0037C2.87453 16.9109 2.05372 15.564 1.58919 14.0807C1.12466 12.5975 1.03056 11.023 1.31511 9.49491C1.59966 7.96685 2.25419 6.53177 3.22149 5.31512C4.18879 4.09847 5.4394 3.13729 6.86399 2.51562"
                  stroke="black"
                  stroke-width="1.89494"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.1857 11.246C20.1857 9.99638 19.9396 8.75903 19.4614 7.60455C18.9832 6.45008 18.2822 5.40109 17.3986 4.5175C16.5151 3.6339 15.4661 2.93299 14.3116 2.45479C13.1571 1.97659 11.9198 1.73047 10.6702 1.73047V11.246H20.1857Z"
                  stroke="black"
                  stroke-width="1.89494"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p class="mb-0 ms-3 ps-1">Analytics</p>
            </div>
            <div class="dashboard_sidebar_content pt-3 pb-3">
              <svg
                width="20"
                height="23"
                viewBox="0 0 20 23"
                class=""
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5897 3.19531H3.26797C2.21692 3.19531 1.36487 4.11176 1.36487 5.24225V19.5708C1.36487 20.7013 2.21692 21.6178 3.26797 21.6178H16.5897C17.6407 21.6178 18.4928 20.7013 18.4928 19.5708V5.24225C18.4928 4.11176 17.6407 3.19531 16.5897 3.19531Z"
                  stroke="black"
                  stroke-width="1.89494"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.7349 1.19531V5.2892"
                  stroke="black"
                  stroke-width="1.89494"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.12219 1.19531V5.2892"
                  stroke="black"
                  stroke-width="1.89494"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.36487 9.375H18.4928"
                  stroke="black"
                  stroke-width="1.89494"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p class="mb-0 ms-3 ps-1">Meetup & Diary</p>
            </div>
            <div class="dashboard_sidebar_content pt-3 pb-3">
              <svg
                width="20"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
                class=""
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.89966 16.4686V6.95312"
                  stroke="black"
                  stroke-width="1.89494"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.6088 16.5022V1.27734"
                  stroke="black"
                  stroke-width="1.89494"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.19031 16.5328V12.7266"
                  stroke="black"
                  stroke-width="1.89494"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p class="mb-0 ms-3 ps-1">Cases</p>
            </div>
            <div class="dashboard_sidebar_content pt-3 pb-3">
              <svg
                width="20"
                height="23"
                viewBox="0 0 20 23"
                fill="none"
                class=""
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.36499 8.27367L9.92895 1.10938L18.4929 8.27367V19.5319C18.4929 20.0747 18.2924 20.5954 17.9355 20.9793C17.5786 21.3631 17.0945 21.5788 16.5898 21.5788H3.26809C2.76336 21.5788 2.2793 21.3631 1.9224 20.9793C1.56549 20.5954 1.36499 20.0747 1.36499 19.5319V8.27367Z"
                  stroke="black"
                  stroke-width="1.89494"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.0741 21.5746V11.3398H12.7834V21.5746"
                  stroke="black"
                  stroke-width="1.89494"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p class="mb-0 ms-3 ps-1">Campaign</p>
            </div>
            <div class="dashboard_sidebar_content pt-3 pb-3">
              <i class="far fa-bell fs-4"></i>
              <p class="mb-0 ms-3 ps-1">Actiivities</p>
            </div>
            <hr class="text-muted my-4" />
            <div class="dashboard_sidebar_content pt-3 pb-3">
              <i class="far fa-bell fs-4"></i>
              <p class="mb-0 ms-3 ps-1">Notifications</p>
            </div>
            <div class="dashboard_sidebar_content pt-3 pb-3 mb-2">
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6503 14.0279C12.1056 14.0279 13.2854 12.8482 13.2854 11.3929C13.2854 9.93757 12.1056 8.75781 10.6503 8.75781C9.19502 8.75781 8.01526 9.93757 8.01526 11.3929C8.01526 12.8482 9.19502 14.0279 10.6503 14.0279Z"
                  stroke="black"
                  stroke-width="1.89494"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.316 14.0626C17.1991 14.3275 17.1642 14.6214 17.2159 14.9063C17.2675 15.1913 17.4034 15.4542 17.6059 15.6612L17.6586 15.7139C17.8219 15.877 17.9515 16.0708 18.0399 16.2841C18.1283 16.4973 18.1738 16.7259 18.1738 16.9568C18.1738 17.1876 18.1283 17.4162 18.0399 17.6295C17.9515 17.8427 17.8219 18.0365 17.6586 18.1996C17.4954 18.363 17.3017 18.4925 17.0884 18.5809C16.8752 18.6694 16.6466 18.7149 16.4157 18.7149C16.1848 18.7149 15.9563 18.6694 15.743 18.5809C15.5297 18.4925 15.336 18.363 15.1728 18.1996L15.1201 18.1469C14.9131 17.9444 14.6502 17.8086 14.3653 17.7569C14.0803 17.7053 13.7865 17.7402 13.5215 17.8571C13.2617 17.9684 13.0402 18.1533 12.8841 18.389C12.7281 18.6246 12.6443 18.9008 12.6432 19.1834V19.3327C12.6432 19.7986 12.4581 20.2454 12.1286 20.5749C11.7992 20.9043 11.3524 21.0894 10.8865 21.0894C10.4206 21.0894 9.97373 20.9043 9.64428 20.5749C9.31484 20.2454 9.12976 19.7986 9.12976 19.3327V19.2537C9.12296 18.9629 9.02885 18.681 8.85967 18.4444C8.69049 18.2079 8.45407 18.0277 8.18113 17.9273C7.91621 17.8104 7.62233 17.7755 7.3374 17.8272C7.05246 17.8789 6.78954 18.0147 6.58253 18.2172L6.52983 18.2699C6.36668 18.4332 6.17293 18.5628 5.95967 18.6512C5.74641 18.7396 5.51781 18.7851 5.28695 18.7851C5.0561 18.7851 4.8275 18.7396 4.61424 18.6512C4.40098 18.5628 4.20723 18.4332 4.04408 18.2699C3.88075 18.1068 3.75118 17.913 3.66277 17.6997C3.57437 17.4865 3.52886 17.2579 3.52886 17.027C3.52886 16.7962 3.57437 16.5676 3.66277 16.3543C3.75118 16.1411 3.88075 15.9473 4.04408 15.7842L4.09678 15.7315C4.29928 15.5245 4.43511 15.2615 4.48678 14.9766C4.53844 14.6917 4.50356 14.3978 4.38664 14.1329C4.2753 13.8731 4.09042 13.6515 3.85477 13.4954C3.61911 13.3394 3.34297 13.2556 3.06033 13.2545H2.91101C2.4451 13.2545 1.99827 13.0694 1.66883 12.74C1.33938 12.4105 1.1543 11.9637 1.1543 11.4978C1.1543 11.0319 1.33938 10.5851 1.66883 10.2556C1.99827 9.92617 2.4451 9.74108 2.91101 9.74108H2.99006C3.28079 9.73428 3.56275 9.64018 3.79928 9.471C4.03582 9.30182 4.21599 9.0654 4.31637 8.79246C4.4333 8.52754 4.46817 8.23366 4.41651 7.94872C4.36485 7.66379 4.22901 7.40087 4.02652 7.19386L3.97381 7.14115C3.81048 6.978 3.68091 6.78426 3.5925 6.571C3.5041 6.35774 3.4586 6.12914 3.4586 5.89828C3.4586 5.66742 3.5041 5.43883 3.5925 5.22557C3.68091 5.01231 3.81048 4.81856 3.97381 4.65541C4.13697 4.49208 4.33071 4.36251 4.54397 4.2741C4.75723 4.1857 4.98583 4.14019 5.21669 4.14019C5.44755 4.14019 5.67614 4.1857 5.8894 4.2741C6.10266 4.36251 6.29641 4.49208 6.45956 4.65541L6.51226 4.70811C6.71927 4.91061 6.98219 5.04644 7.26713 5.09811C7.55206 5.14977 7.84594 5.11489 8.11086 4.99797H8.18113C8.44092 4.88663 8.66249 4.70175 8.81855 4.4661C8.97461 4.23044 9.05836 3.9543 9.05949 3.67165V3.52233C9.05949 3.05643 9.24457 2.6096 9.57402 2.28015C9.90346 1.95071 10.3503 1.76563 10.8162 1.76562C11.2821 1.76563 11.7289 1.95071 12.0584 2.28015C12.3878 2.6096 12.5729 3.05643 12.5729 3.52233V3.60139C12.574 3.88403 12.6578 4.16017 12.8138 4.39583C12.9699 4.63148 13.1915 4.81636 13.4513 4.9277C13.7162 5.04462 14.0101 5.0795 14.295 5.02784C14.5799 4.97617 14.8429 4.84034 15.0499 4.63784L15.1026 4.58514C15.2657 4.42181 15.4595 4.29224 15.6727 4.20383C15.886 4.11543 16.1146 4.06992 16.3454 4.06992C16.5763 4.06992 16.8049 4.11543 17.0182 4.20383C17.2314 4.29224 17.4252 4.42181 17.5883 4.58514C17.7516 4.74829 17.8812 4.94204 17.9696 5.1553C18.058 5.36856 18.1035 5.59716 18.1035 5.82801C18.1035 6.05887 18.058 6.28747 17.9696 6.50073C17.8812 6.71399 17.7516 6.90774 17.5883 7.07089L17.5356 7.12359C17.3331 7.3306 17.1973 7.59352 17.1456 7.87846C17.094 8.16339 17.1288 8.45727 17.2458 8.72219V8.79246C17.3571 9.05225 17.542 9.27381 17.7776 9.42988C18.0133 9.58594 18.2894 9.66969 18.5721 9.67082H18.7214C19.1873 9.67082 19.6341 9.8559 19.9636 10.1853C20.293 10.5148 20.4781 10.9616 20.4781 11.4275C20.4781 11.8934 20.293 12.3403 19.9636 12.6697C19.6341 12.9992 19.1873 13.1842 18.7214 13.1842H18.6423C18.3597 13.1854 18.0835 13.2691 17.8479 13.4252C17.6122 13.5812 17.4274 13.8028 17.316 14.0626V14.0626Z"
                  stroke="black"
                  stroke-width="1.89494"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p class="mb-0 ms-3 ps-1">Settings</p>
            </div>
            <div
              class="dashboard_sidebar_content mt-4 pt-3 pb-3"
              style="background-color: rgb(240, 240, 240)"
            >
              <img src="~assets/images/Prodigy.png" alt="" />
              <p class="mb-0 ms-3">Prodigy Dan</p>
              <i class="fas fa-ellipsis-h ms-4"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-12 mb-5 back-hov">
          <div class="d-flex justify-content-between">
            <div>
              <p class="fw-bolder mb-0 mt-2">Project Details</p>
            </div>
            <div class="d-flex align-items-center gap-4">
              <p class="fw-bolder mini_noc my-2 px-3 me-2 py-1 fs-7">
                <i class="green fas fa-check-circle"></i> Marked as completed
              </p>
              <p class="mb-0 fs-7 fw-bold">
                Project Status:
                <span style="color: #f2994a">Pending Approval </span>
              </p>
            </div>
          </div>
          <div class="boder_bg_shadow_3 p-4">
            <div class="d-flex">
              <div class="fs-6 fw-bolder">
                <p class="mb-0">Project Name :</p>
                <p class="mb-0">Owner:</p>
                <p class="mb-0">Category :</p>
                <p class="mb-0">Sub Category:</p>
              </div>
              <div class="mx-2 fs-6">
                <p class="mb-0">Logo Design</p>
                <p class="mb-0">Pro Davidson</p>
                <p class="mb-0">Logo Design</p>
                <p class="mb-0">Pro Davidson</p>
              </div>
            </div>
            <div class="mt-2">
              <p class="mb-0 fw-bolder">Description</p>
              <p class="fs-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vitae in
                mauris rhoncus. Suspendisse vitae malesuada nunc, justo, enim. Amet nunc
                vehicula velit augue aliquet viverra adipiscing sit. Sed sociis velit dis
                tellus platea eget et laoreet velit. Neque vulputate at in mauris, semper.
                Erat bibendum velit amet amet vestibulum, molestie gravida nunc.
              </p>
            </div>
          </div>
          <div>
            <p class="fw-bolder mt-2">Timeline</p>
          </div>
          <div id="main_mess" class="px-0 mt-lg-0 mt-md-0">
            <div class="boder_bg_shadow_3">
              <div class="mx-2">
                <!-- scroll_over_fllow_2 -->
                <div class="text-center d-flex justify-content-center">
                  <p class="fs-7 my-4 chat_date fw-bolder mb-0">07/12/2021</p>
                </div>
                <!-- message right -->
                <div class="row">
                  <div class="col-12 col-lg-6 col-md-6"></div>
                  <div
                    class="col-12 col-lg-6 col-md-6 text-end mt-lg-4 mt-4"
                    style="position: relative"
                  >
                    <div class="d-flex align-items-center">
                      <div class="chat_message mx-3">
                        <!-- info side bar end -->

                        <!-- 3 dots modal start -->
                        <div>
                          <i class="mx-2 fas fa-ellipsis-v"></i>
                          <div id="report_modal_2">
                            <div
                              class="d-block main_div_side_modal justify-content-between align-items-center for_pointer"
                              id="minimodal"
                            >
                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <p class="mb-0 text-start">Reply</p>
                                <i class="fas fa-reply"></i>
                              </div>
                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <p class="mb-0">Forword</p>
                                <i class="fas fa-share"></i>
                              </div>
                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <div>
                                  <p class="mb-0">Copy</p>
                                </div>
                                <div>
                                  <i class="fas fa-clone"></i>
                                </div>
                              </div>

                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <p class="mb-0">Info</p>
                                <i class="pe-1 fas fa-info"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- profile slider end -->
                        <p class="mx-3 text-start">
                          Beyond limitations, Consequat taciti a tempor euismod lacus
                          vestibulum, ad laoreet egestas congue donec et commodo tortor,
                          nunc ad placerat nisl, , commodo nisl.
                        </p>
                      </div>

                      <img
                        src="~assets/images/Profile_Pic.png"
                        class="img-fluid mx-1 rounded-circle"
                        style="height: 40px; width: 40px"
                        alt=""
                      />
                    </div>
                    <p class="mb-0 mx-5 px-2 fs-7">
                      11:59
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_917_741)">
                          <path
                            d="M3.7222 5.65853L2.18018 4.11682L2.62035 3.67602L3.7222 4.77786L6.36544 2.13431L6.80593 2.5748L3.72189 5.65884L3.7222 5.65853ZM2.40042 5.65853L0.858398 4.11682L1.29889 3.67602L2.84091 5.21804L2.40073 5.65853H2.40042ZM3.7222 4.33706L3.2814 3.89657L5.26391 1.91406L5.70471 2.35455L3.7222 4.33675V4.33706Z"
                            fill="#C4CDD5"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_917_741">
                            <rect
                              width="12px"
                              height="12px"
                              fill="white"
                              transform="translate(0.09375 0.046875)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </p>
                  </div>
                </div>

                <!-- message left -->
                <div class="row">
                  <div class="col-12 col-lg-6 col-md-6 text-start mt-lg-4 mt-4">
                    <div class="d-flex align-items-center">
                      <img
                        src="~assets/images/chat_40_pro.png"
                        class="img-fluid mx-1 rounded-circle"
                        style="height: 40px; width: 40px"
                        alt=""
                      />
                      <div class="mx-3 chat_message">
                        <p class="mx-3 mb-0 text-start">
                          Malesuada dui sagittis platea dictumst suspendisse justo platea
                          lacus aenean fames.
                        </p>
                      </div>
                    </div>
                    <p class="mb-0 mx-5 px-2 fs-7">11:59</p>
                  </div>
                  <div class="col-12 col-lg-6 col-md-6"></div>
                </div>
                <div class="text-center d-flex justify-content-center">
                  <p class="fs-7 my-4 chat_date fw-bolder mb-0">Today</p>
                </div>
                <!-- message right -->
                <div class="row">
                  <div class="col-12 col-lg-6 col-md-6"></div>
                  <div
                    class="col-12 col-lg-6 col-md-6 text-end mt-lg-4 mt-4"
                    style="position: relative"
                  >
                    <div class="d-flex justify-content-end align-items-center">
                      <div class="mx-3 chat_message text-end">
                        <div>
                          <i class="mx-2 fas fa-ellipsis-v"></i>
                          <div id="report_modal_3">
                            <div
                              class="d-block main_div_side_modal justify-content-between align-items-center for_pointer"
                              id="minimodal"
                            >
                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <p class="mb-0 text-start">Reply</p>
                                <i class="fas fa-reply"></i>
                              </div>
                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <p class="mb-0">Forword</p>
                                <i class="fas fa-share"></i>
                              </div>
                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <div>
                                  <p class="mb-0">Copy</p>
                                </div>
                                <div>
                                  <i class="fas fa-clone"></i>
                                </div>
                              </div>

                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <p class="mb-0">Info</p>
                                <i class="pe-1 fas fa-info"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="mx-3 text-start">
                          <div class="bg-white px-3 py-2">
                            <svg
                              width="10"
                              height="11"
                              viewBox="0 0 10 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1.1139 5.18336C0.87396 4.94946 0.68285 4.67024 0.551659 4.3619C0.420469 4.05356 0.351808 3.72224 0.349661 3.38716C0.347514 3.05208 0.411924 2.71991 0.539153 2.40991C0.666382 2.09992 0.853898 1.81827 1.09082 1.58131C1.32775 1.34435 1.60937 1.1568 1.91935 1.02952C2.22932 0.90225 2.56149 0.837794 2.89657 0.839893C3.23165 0.841993 3.56298 0.910606 3.87133 1.04175C4.17969 1.1729 4.45894 1.36397 4.69288 1.60388L8.27286 5.18285C8.41393 5.32389 8.52583 5.49132 8.60219 5.6756C8.67855 5.85988 8.71786 6.0574 8.71788 6.25687C8.71791 6.45635 8.67864 6.65387 8.60233 6.83817C8.52601 7.02247 8.41415 7.18993 8.27311 7.331C8.13208 7.47206 7.96465 7.58397 7.78036 7.66033C7.59608 7.73668 7.39857 7.776 7.19909 7.77602C6.99962 7.77604 6.8021 7.73678 6.6178 7.66046C6.4335 7.58415 6.26604 7.47228 6.12497 7.33125L2.546 3.75127C2.49575 3.70509 2.45537 3.64922 2.42726 3.58704C2.39916 3.52485 2.38391 3.45762 2.38245 3.3894C2.38099 3.32117 2.39334 3.25335 2.41875 3.19002C2.44417 3.12669 2.48213 3.06915 2.53035 3.02086C2.57857 2.97257 2.63606 2.93453 2.69935 2.90902C2.76265 2.88352 2.83045 2.87107 2.89868 2.87244C2.96691 2.8738 3.03416 2.88895 3.09639 2.91697C3.15861 2.94498 3.21453 2.98529 3.26078 3.03547L6.84077 6.61495C6.93624 6.70716 7.06411 6.75819 7.19684 6.75703C7.32957 6.75588 7.45654 6.70264 7.55039 6.60878C7.64425 6.51493 7.69749 6.38796 7.69864 6.25523C7.6998 6.1225 7.64877 5.99463 7.55656 5.89916L3.97759 2.31968C3.69276 2.03485 3.30645 1.87483 2.90364 1.87483C2.50084 1.87483 2.11453 2.03485 1.8297 2.31968C1.54487 2.6045 1.38486 2.99081 1.38486 3.39362C1.38486 3.79643 1.54487 4.18274 1.8297 4.46757L6.12497 8.76284C6.31343 8.95146 6.54823 9.08714 6.80576 9.15623C7.06329 9.22532 7.33447 9.22539 7.59203 9.15643C7.8496 9.08747 8.08447 8.95192 8.27303 8.7634C8.46159 8.57488 8.59719 8.34003 8.66619 8.08248C8.7014 7.95335 8.78631 7.84341 8.90236 7.77671C9.01841 7.71002 9.15615 7.69201 9.28545 7.72661C9.41475 7.76121 9.52508 7.84561 9.59232 7.96135C9.65955 8.07708 9.67821 8.21474 9.64421 8.3442C9.52929 8.77346 9.30339 9.16491 8.9892 9.47918C8.67502 9.79345 8.28363 10.0195 7.8544 10.1345C7.42516 10.2495 6.9732 10.2495 6.54397 10.1345C6.11474 10.0194 5.72335 9.79342 5.40918 9.47914L1.1139 5.18336V5.18336Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                          <p>References.zip Attached files</p>
                        </div>
                      </div>

                      <img
                        src="~assets/images/Profile_Pic.png"
                        class="img-fluid mx-1 rounded-circle"
                        style="height: 40px; width: 40px"
                        alt=""
                      />
                    </div>
                    <p class="mb-0 mx-5 px-2 fs-7">
                      11:59
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_917_741)">
                          <path
                            d="M3.7222 5.65853L2.18018 4.11682L2.62035 3.67602L3.7222 4.77786L6.36544 2.13431L6.80593 2.5748L3.72189 5.65884L3.7222 5.65853ZM2.40042 5.65853L0.858398 4.11682L1.29889 3.67602L2.84091 5.21804L2.40073 5.65853H2.40042ZM3.7222 4.33706L3.2814 3.89657L5.26391 1.91406L5.70471 2.35455L3.7222 4.33675V4.33706Z"
                            fill="#52be71"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_917_741">
                            <rect
                              width="12px"
                              height="12px"
                              fill="white"
                              transform="translate(0.09375 0.046875)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </p>
                  </div>
                </div>
                <!-- message left -->
                <div class="row">
                  <div class="col-12 col-lg-6 col-md-6 text-start mt-lg-4 mt-4">
                    <div class="d-flex align-items-center">
                      <img
                        src="~assets/images/chat_40_pro.png"
                        class="img-fluid rounded-circle"
                        style="height: 40px; width: 40px"
                        alt=""
                      />
                      <div class="mx-3 chat_message">
                        <p class="mx-3 mb-0 text-start">
                          Thanks Man<i class="mx-2 text-warning far fa-thumbs-up"></i>
                        </p>
                      </div>
                    </div>
                    <p class="mb-0 mx-5 px-2 fs-7">11:59</p>
                  </div>
                  <div class="col-12 col-lg-6 col-md-6"></div>
                </div>

                <!-- message right -->

                <div class="row">
                  <div class="col-12 col-lg-6 col-md-6"></div>
                  <div
                    class="col-12 col-lg-6 col-md-6 text-end mt-lg-4 mt-4"
                    style="position: relative"
                  >
                    <div class="d-flex justify-content-end align-items-center">
                      <div class="mx-3 chat_message text-end">
                        <!-- 3 dots modal start -->
                        <div>
                          <i class="mx-2 fas fa-ellipsis-v"></i>
                          <div id="report_modal_4">
                            <div
                              class="d-block main_div_side_modal justify-content-between align-items-center for_pointer"
                              id="minimodal"
                            >
                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <p class="mb-0 text-start">Reply</p>
                                <i class="fas fa-reply"></i>
                              </div>
                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <p class="mb-0">Forword</p>
                                <i class="fas fa-share"></i>
                              </div>
                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <div>
                                  <p class="mb-0">Copy</p>
                                </div>
                                <div>
                                  <i class="fas fa-clone"></i>
                                </div>
                              </div>

                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <p class="mb-0">Info</p>
                                <i class="pe-1 fas fa-info"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="mx-3 text-start">
                          <p class="mb-0 ms-2 chat_message mx-3">
                            Cheers <i class="text-danger far fa-heart"></i>
                            <i class="text-danger far fa-heart"></i>
                          </p>
                        </div>
                      </div>

                      <img
                        src="~assets/images/Profile_Pic.png"
                        class="img-fluid mx-1 rounded-circle"
                        style="height: 40px; width: 40px"
                        alt=""
                      />
                    </div>
                    <p class="mb-0 mx-5 px-2 fs-7">
                      11:59
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_917_741)">
                          <path
                            d="M3.7222 5.65853L2.18018 4.11682L2.62035 3.67602L3.7222 4.77786L6.36544 2.13431L6.80593 2.5748L3.72189 5.65884L3.7222 5.65853ZM2.40042 5.65853L0.858398 4.11682L1.29889 3.67602L2.84091 5.21804L2.40073 5.65853H2.40042ZM3.7222 4.33706L3.2814 3.89657L5.26391 1.91406L5.70471 2.35455L3.7222 4.33675V4.33706Z"
                            fill="#52be71"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_917_741">
                            <rect
                              width="12px"
                              height="12px"
                              fill="white"
                              transform="translate(0.09375 0.046875)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </p>
                  </div>
                </div>
                <!-- message left -->
                <div class="row">
                  <div class="col-12 col-lg-6 col-md-6 text-start mt-lg-4 mt-4">
                    <div class="d-flex align-items-center">
                      <img
                        src="~assets/images/chat_40_pro.png"
                        class="img-fluid mx-1 rounded-circle"
                        style="height: 40px; width: 40px"
                        alt=""
                      />
                      <div class="mx-3 chat_message">
                        <p class="mx-3 mb-0 text-start">
                          Thanks Man<i class="mx-2 text-warning far fa-thumbs-up"></i>
                        </p>
                      </div>
                    </div>
                    <p class="mb-0 mx-5 px-2 fs-7">11:59</p>
                  </div>
                  <div class="col-12 col-lg-6 col-md-6"></div>
                </div>

                <!-- message right -->
                <div
                  class="d-flex justify-content-end"
                  style="position: relative"
                  v-for="post of posts"
                  :key="post"
                >
                  <div class="d-block me-2">
                    <div style="position: relative" class="chat_message text-end mx-2">
                      <i class="mx-2 fas fa-ellipsis-v"></i>

                      <div>
                        <p class="mb-0 mx-2">
                          {{ post.msg }}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p class="text-end mx-2 fs-7">
                        {{ post.time }}
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_917_741)">
                            <path
                              d="M3.7222 5.65853L2.18018 4.11682L2.62035 3.67602L3.7222 4.77786L6.36544 2.13431L6.80593 2.5748L3.72189 5.65884L3.7222 5.65853ZM2.40042 5.65853L0.858398 4.11682L1.29889 3.67602L2.84091 5.21804L2.40073 5.65853H2.40042ZM3.7222 4.33706L3.2814 3.89657L5.26391 1.91406L5.70471 2.35455L3.7222 4.33675V4.33706Z"
                              fill="#52be71"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_917_741">
                              <rect
                                width="12px"
                                height="12px"
                                fill="white"
                                transform="translate(0.09375 0.046875)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </p>
                    </div>
                  </div>
                  <!-- modal 3 dots -->
                  <div id="report_modal_5">
                    <div
                      class="d-block main_div_side_modal justify-content-between align-items-center for_pointer"
                      id="minimodal"
                    >
                      <div class="d-flex align-items-center justify-content-between">
                        <p class="mb-0 text-start">Reply</p>
                        <i class="fas fa-reply"></i>
                      </div>
                      <div class="d-flex align-items-center justify-content-between">
                        <p class="mb-0">Forword</p>
                        <i class="fas fa-share"></i>
                      </div>
                      <div class="d-flex align-items-center justify-content-between">
                        <div>
                          <p class="mb-0">Copy</p>
                        </div>
                        <div>
                          <i class="fas fa-clone"></i>
                        </div>
                      </div>

                      <div class="d-flex align-items-center justify-content-between">
                        <p class="mb-0">Info</p>
                        <i class="pe-1 fas fa-info"></i>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src="~assets/images/Profile_Pic.png"
                      class="img-fluid mx-1 rounded-circle"
                      style="height: 40px; width: 40px"
                      alt=""
                    />
                  </div>
                </div>
                <!-- message left -->
                <div class="row">
                  <div class="col-12 col-lg-8 col-md-6 text-start mt-lg-4 mt-4">
                    <div class="d-flex align-items-center">
                      <img
                        src="~assets/images/chat_40_pro.png"
                        class="img-fluid mx-1 rounded-circle"
                        style="height: 40px; width: 40px"
                        alt=""
                      />
                      <div class="mx-2 green-box d-flex align-items-center">
                        <div class="green-in">
                          <img src="~assets/images/bell-noc.png" alt="" />
                        </div>
                        <p class="mb-0 text-green mx-4 fw-bolder">
                          Approved New Feature Request
                        </p>
                      </div>
                    </div>
                    <p class="mb-0 mx-5 px-2 fs-7">11:59</p>
                  </div>
                  <div class="col-12 col-lg-4 col-md-6"></div>
                </div>
                <!-- <div id="scroll">

                </div> -->
              </div>

              <!-- message box -->
              <!-- <div class="bg-white py-3 mx-3 px-0" style="border-top: 1px solid #ccc">
                <div class="mx-0 my-2 d-flex full_text_box">
                  <div class="write_msg me-3 w-75">
                    <b-form-input class="form-control-2" id="input"
                      oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                      placeholder="Type a message ..." maxlength="200" style="400px"></b-form-input>
                  </div>

                  <span class="mx-lg-2 mt-1 send_icon_bg">
                    <i class="far fa-smile fs-4"></i>
                  </span>
                  <span class="mx-lg-2 mt-1 send_icon_bg">
                    <i class="fas fa-image fs-4"></i>
                  </span>
                  <span class="mx-lg-2 mt-1 send_icon_bg_2" @click="show">
                    <svg width="25" height="25" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0.508902 0.16626C0.585763 0.107619 0.677808 0.0722135 0.774154 0.0642295C0.8705 0.0562455 0.967117 0.0760171 1.05258 0.121206L9.65832 4.67718C9.73969 4.72021 9.80779 4.78462 9.85529 4.86347C9.90278 4.94232 9.92788 5.03263 9.92788 5.12468C9.92788 5.21673 9.90278 5.30704 9.85529 5.38589C9.80779 5.46474 9.73969 5.52914 9.65832 5.57218L1.05258 10.1282C0.967167 10.1733 0.870604 10.1931 0.774299 10.1852C0.677995 10.1773 0.585973 10.1419 0.509105 10.0834C0.432237 10.0248 0.373734 9.94549 0.340508 9.85475C0.307282 9.76401 0.300722 9.66566 0.321601 9.57131L1.30974 5.12468L0.321601 0.678554C0.300653 0.584192 0.30716 0.485805 0.340351 0.395022C0.373542 0.30424 0.43203 0.224858 0.508902 0.16626V0.16626ZM2.2341 5.6309L1.54766 8.72035L7.38337 5.6309H2.2341ZM7.38337 4.61846H2.2341L1.54766 1.529L7.38337 4.61846Z"
                        fill="white" />
                    </svg>
                  </span>
                </div>
              </div> -->
              <div class="text-center mt-5">
                <p class="mb-0 text-green mx-4 fw-bolder">Project Status Approval</p>

                <div
                  class="d-flex justify-content-center main-a mx-3 p-2 mt-3 align-items-center"
                >
                  <div class="green-in">
                    <img src="~assets/images/bag-soc.png" alt="" />
                  </div>
                  <p class="mb-0 text-green mx-4 fs-7">
                    This Project has been marked as completed do you approve?
                  </p>
                  <p class="mb-0 mx-1">Yes</p>
                  <p class="mb-0 mx-1 green"><i class="fas fa-check"></i></p>
                  <p class="mb-0 mx-1">no</p>
                  <p class="mb-0 mx-1 text-danger"><i class="fas fa-times"></i></p>
                </div>
              </div>
              <div class="text-center main-a mx-3 p-3">
                <div class="d-flex justify-content-center p-2 mt-3 align-items-center">
                  <div class="green-in-2">
                    <img src="~assets/images/bag-soc.png" alt="" />
                  </div>
                  <p class="mb-0 text-green mx-4 fs-7">
                    Pls provide us a reason why you canceled the approval request
                  </p>
                </div>
                <div class="d-flex gap-3 justify-content-center flex-wrap">
                  <span class="my-2 bg-mus fw-bold"> Designs not completed </span>
                  <span class="my-2 bg-mus fw-bold"> Not as specified </span>
                  <span class="my-2 bg-mus fw-bold"> Did not revise project </span>
                  <span class="my-2 bg-mus fw-bold"> Features not as descrives </span>
                  <span class="my-2 bg-mus fw-bold"> others </span>
                  <span class="my-2 bg-mus fw-bold">
                    I want to open a Case against seller
                  </span>
                </div>
                <div class="text-center mt-2">
                  <button class="share_btn fs-7" style="border-radius: 3px">
                    Submit answer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="my-3"></div>
        </div>
        <div class="col-12 col-lg-4">
          <div>
            <div class="d-flex justify-content-between">
              <p class="fw-bolder mb-0 mt-2 for_pointer" v-b-modal.modal-center>
                Features
              </p>
              <p
                class="px-2 fw-bolder mb-0 mt-2 mini_noc_2 fs-8 py-1 green"
                v-b-modal.modal-center-9
              >
                New Features Request
              </p>
            </div>
            <div
              style="background-color: #f4f5f7; border-radius: 8.37209px"
              class="px-2 mt-3 py-3"
            >
              <div class="tabs-2 effect-3-2 mt-lg-2 mt-3 fs-7">
                <!-- tab-title -->
                <input
                  type="radio"
                  id="tab-1-2"
                  name="tab-effect-3-2"
                  checked="checked"
                />
                <span class="fw-bolder for_pointer fs-6">Features</span>

                <input type="radio" id="tab-2-2" name="tab-effect-3-2" />
                <span class="fw-bolder for_pointer fs-6 ps-lg-3">Pending Requests</span>

                <div class="line-2 ease"></div>

                <!-- tab-content-c3 -->
                <div class="tab-content-c3">
                  <!-- tab no 1 -->
                  <section id="tab-item-1">
                    <div>
                      <div class="boder_bg_shadow p-3 mt-2">
                        <div class="d-flex justify-content-between">
                          <div class="fw-bold">
                            <p class="fw-bolder">Sketch</p>
                            <p class="mb-0 opacity-7-iz">Start: 28th April, 2021</p>
                            <p class="mb-0 mt-2 fs-7 pointer">
                              Tasks: 7
                              <span
                                class="opacity-7-iz"
                                v-if="!show1"
                                @click="show1 = true"
                                id="myBtn"
                              >
                                <span id="dots">|</span> Click to Expand</span
                              >
                              <span
                                class="opacity-7-iz"
                                v-if="show1"
                                @click="show1 = false"
                                id="myBtn"
                              >
                                <span id="dots">|</span> Click to Show Less</span
                              >
                              <br />
                              <span id="more" v-if="show1">Content</span>
                            </p>
                            <p class="mb-0 fs-7">
                              Files: 7
                              <span
                                class="opacity-7-iz"
                                v-if="!show2"
                                @click="show2 = true"
                                id="myBtn1"
                              >
                                <span id="dots">|</span> Click to Expand</span
                              >
                              <span
                                class="opacity-7-iz"
                                v-if="show2"
                                @click="show2 = false"
                                id="myBtn"
                              >
                                <span id="dots">|</span> Click to Show Less</span
                              >
                              <br />
                              <span id="more" v-if="show2">Content</span>
                            </p>
                          </div>
                          <div class="fw-bold text-end">
                            <p class="mb-0">$49.04</p>
                            <p class="mb-0 opacity-7-iz">End: 30th April, 2021</p>
                          </div>
                        </div>
                      </div>
                      <div class="boder_bg_shadow p-3 mt-2">
                        <div class="d-flex justify-content-between">
                          <div class="fw-bold">
                            <p class="fw-bolder">Sketch</p>
                            <p class="mb-0 opacity-7-iz">Start: 27th April, 2021</p>
                            <p class="mb-0 mt-2 fs-7">
                              Tasks: 7
                              <span
                                class="opacity-7-iz"
                                v-if="!show3"
                                @click="show3 = true"
                                id="myBtn1"
                              >
                                <span id="dots">|</span> Click to Expand</span
                              >
                              <span
                                class="opacity-7-iz"
                                v-if="show3"
                                @click="show3 = false"
                                id="myBtn"
                              >
                                <span id="dots">|</span> Click to Show Less</span
                              >
                              <br />
                              <span id="more" v-if="show3">Content</span>
                            </p>
                            <p class="mb-0 fs-7">
                              Files: 7
                              <span
                                class="opacity-7-iz"
                                v-if="!show4"
                                @click="show4 = true"
                                id="myBtn1"
                              >
                                <span id="dots">|</span> Click to Expand</span
                              >
                              <span
                                class="opacity-7-iz"
                                v-if="show4"
                                @click="show4 = false"
                                id="myBtn"
                              >
                                <span id="dots">|</span> Click to Show Less</span
                              >
                              <br />
                              <span id="more" v-if="show4">Content</span>
                            </p>
                          </div>
                          <div class="fw-bold text-end">
                            <p class="mb-0">$49.04</p>
                            <p class="mb-0 opacity-7-iz">End: 30th April, 2021</p>
                          </div>
                        </div>
                      </div>

                      <div class="boder_bg_shadow p-3 mt-2">
                        <div class="d-flex justify-content-between">
                          <div class="fw-bold">
                            <p class="fw-bolder">Sketch</p>
                            <p class="mb-0 opacity-7-iz">Start: 27th April, 2021</p>
                            <p class="mb-0 mt-2 fs-7">
                              Tasks: 7
                              <span
                                class="opacity-7-iz"
                                v-if="!show5"
                                @click="show5 = true"
                                id="myBtn1"
                              >
                                <span id="dots">|</span> Click to Expand</span
                              >
                              <span
                                class="opacity-7-iz"
                                v-if="show5"
                                @click="show5 = false"
                                id="myBtn"
                              >
                                <span id="dots">|</span> Click to Show Less</span
                              >
                              <br />
                              <span id="more" v-if="show5">Content</span>
                            </p>
                            <p class="mb-0 fs-7">
                              Files: 7
                              <span
                                class="opacity-7-iz"
                                v-if="!show6"
                                @click="show6 = true"
                                id="myBtn1"
                              >
                                <span id="dots">|</span> Click to Expand</span
                              >
                              <span
                                class="opacity-7-iz"
                                v-if="show6"
                                @click="show6 = false"
                                id="myBtn"
                              >
                                <span id="dots">|</span> Click to Show Less</span
                              >
                              <br />
                              <span id="more" v-if="show6">Content</span>
                            </p>
                          </div>
                          <div class="fw-bold text-end">
                            <p class="mb-0">$49.04</p>
                            <p class="mb-0 opacity-7-iz">End: 30th April, 2021</p>
                          </div>
                        </div>
                      </div>
                      <div class="boder_bg_shadow p-3 mt-2">
                        <div class="d-flex justify-content-between">
                          <div class="fw-bold">
                            <p class="fw-bolder">Sketch</p>
                            <p class="mb-0 opacity-7-iz">Start: 27th April, 2021</p>
                            <p class="mb-0 mt-2 fs-7">
                              Tasks: 7
                              <span
                                class="opacity-7-iz"
                                v-if="!show7"
                                @click="show7 = true"
                                id="myBtn1"
                              >
                                <span id="dots">|</span> Click to Expand</span
                              >
                              <span
                                class="opacity-7-iz"
                                v-if="show7"
                                @click="show7 = false"
                                id="myBtn"
                              >
                                <span id="dots">|</span> Click to Show Less</span
                              >
                              <br />
                              <span id="more" v-if="show7">Content</span>
                            </p>
                            <p class="mb-0 fs-7">
                              Files: 7
                              <span
                                class="opacity-7-iz"
                                v-if="!show8"
                                @click="show8 = true"
                                id="myBtn1"
                              >
                                <span id="dots">|</span> Click to Expand</span
                              >
                              <span
                                class="opacity-7-iz"
                                v-if="show8"
                                @click="show8 = false"
                                id="myBtn"
                              >
                                <span id="dots">|</span> Click to Show Less</span
                              >
                              <br />
                              <span id="more" v-if="show8">Content</span>
                            </p>
                          </div>
                          <div class="fw-bold text-end">
                            <p class="mb-0">$49.04</p>
                            <p class="mb-0 opacity-7-iz">End: 30th April, 2021</p>
                          </div>
                        </div>
                        <div>
                          <div class="d-flex mt-2">
                            <div class="mx-2 px-2 fw-bold py-2 chat_text_bg text-center">
                              <p class="mb-0 fs-8">Sketches</p>
                            </div>
                            <div class="mx-2 px-2 fw-bold py-2 chat_text_bg text-center">
                              <p class="mb-0 fs-8">Research work</p>
                            </div>
                            <div class="mx-2 fw-bold py-2 chat_text_bg text-center">
                              <p class="mb-0 fs-8">Research work</p>
                            </div>
                          </div>
                          <div class="d-flex mt-2">
                            <div class="mx-2 px-2 fw-bold py-2 chat_text_bg text-center">
                              <p class="mb-0 fs-8">Basic Sketches</p>
                            </div>
                            <div class="mx-2 px-2 fw-bold py-2 chat_text_bg text-center">
                              <p class="mb-0 fs-8">Designs</p>
                            </div>
                            <div class="mx-1 px-2 fw-bold py-2 chat_text_bg text-center">
                              <p class="mb-0 fs-8">Road Maps</p>
                            </div>
                            <!-- <div
                              class="mx-2 px-2 fw-bold py-2 chat_text_bg text-center"
                            >
                              <p class="mb-0 fs-8">arts</p>
                            </div> -->
                          </div>
                          <div class="mt-4">
                            <p class="mb-0 fw-bolder">
                              Files: 7
                              <span class="opacity-7-iz"> | Click to Collapse </span>
                            </p>
                            <hr />
                            <div class="d-flex">
                              <img
                                src="~assets/images/job_long_1.png"
                                class="chat_mini_img me-2"
                                alt="..."
                              />
                              <img
                                src="~assets/images/job2.png"
                                class="chat_mini_img mx-2"
                                alt="..."
                              />
                              <img
                                src="~assets/images/job3.png"
                                class="chat_mini_img mx-2"
                                alt="..."
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="boder_bg_shadow p-3 mt-2">
                        <div class="d-flex justify-content-between">
                          <div class="fw-bold">
                            <p class="fw-bolder">Sketch</p>
                            <p class="mb-0">Start: 27th April, 2021</p>
                            <p class="mb-0 mt-2 fs-7">
                              Tasks: 7
                              <span
                                class="opacity-7-iz"
                                v-if="!show9"
                                @click="show9 = true"
                                id="myBtn1"
                              >
                                <span id="dots">|</span> Click to Expand</span
                              >
                              <span
                                class="opacity-7-iz"
                                v-if="show9"
                                @click="show9 = false"
                                id="myBtn"
                              >
                                <span id="dots">|</span> Click to Show Less</span
                              >
                              <br />
                              <span id="more" v-if="show9">Content</span>
                            </p>
                            <p class="mb-0 fs-7">
                              Files: 7
                              <span class="opacity-7-iz"> | Click to Expand</span>
                            </p>
                          </div>
                          <div class="fw-bold text-end">
                            <p class="mb-0">$49.04</p>
                            <span
                              class="opacity-7-iz"
                              v-if="!show10"
                              @click="show10 = true"
                              id="myBtn1"
                            >
                              <span id="dots">|</span> Click to Expand</span
                            >
                            <span
                              class="opacity-7-iz"
                              v-if="show10"
                              @click="show10 = false"
                              id="myBtn"
                            >
                              <span id="dots">|</span> Click to Show Less</span
                            >
                            <br />
                            <span id="more" v-if="show10">Content</span>
                          </div>
                        </div>
                      </div>
                      <div class="mt-3">
                        <div class="d-flex justify-content-center align-items-center">
                          <p class="mini_arrow_bg text-center mx-1">
                            <i class="fs-6 pt-1 fas fa-angle-left"></i>
                          </p>
                          <p class="mini_arrow_bg text-center mx-1">
                            <i class="fs-6 pt-1 fas fa-angle-right"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section id="tab-item-2">
                    <div>
                      <div class="boder_bg_shadow p-3 mt-2">
                        <div class="d-flex justify-content-between">
                          <div class="fw-bold">
                            <p class="fw-bolder">Sketch</p>
                            <p class="mb-0">Start: 27th April, 2021</p>
                            <p class="mb-0 mt-2 fs-7">
                              Tasks: 7
                              <span class="opacity-7-iz"> | Click to Expand</span>
                            </p>
                            <p class="mb-0 fs-7">
                              Files: 7
                              <span class="opacity-7-iz"> | Click to Expand</span>
                            </p>
                          </div>
                          <div class="fw-bold text-end">
                            <p class="mb-0">$49.04</p>
                            <p class="mb-0 opacity-7-iz">End: 30th April, 2021</p>
                          </div>
                        </div>
                      </div>
                      <div class="boder_bg_shadow p-3 mt-2">
                        <div class="d-flex justify-content-between">
                          <div class="fw-bold">
                            <p class="fw-bolder">Sketch</p>
                            <p class="mb-0">Start: 27th April, 2021</p>
                            <p class="mb-0 mt-2 fs-7">
                              Tasks: 7
                              <span class="opacity-7-iz"> | Click to Expand</span>
                            </p>
                            <p class="mb-0 fs-7">
                              Files: 7
                              <span class="opacity-7-iz"> | Click to Expand</span>
                            </p>
                          </div>
                          <div class="fw-bold text-end">
                            <p class="mb-0">$49.04</p>
                            <p class="mb-0 opacity-7-iz">End: 30th April, 2021</p>
                          </div>
                        </div>
                      </div>

                      <div class="boder_bg_shadow p-3 mt-2">
                        <div class="d-flex justify-content-between">
                          <div class="fw-bold">
                            <p class="fw-bolder">Sketch</p>
                            <p class="mb-0">Start: 27th April, 2021</p>
                            <p class="mb-0 mt-2 fs-7">
                              Tasks: 7
                              <span class="opacity-7-iz"> | Click to Expand</span>
                            </p>
                            <p class="mb-0 fs-7">
                              Files: 7
                              <span class="opacity-7-iz"> | Click to Expand</span>
                            </p>
                          </div>
                          <div class="fw-bold text-end">
                            <p class="mb-0">$49.04</p>
                            <p class="mb-0 opacity-7-iz">End: 30th April, 2021</p>
                          </div>
                        </div>
                      </div>
                      <div class="boder_bg_shadow p-3 mt-2">
                        <div class="d-flex justify-content-between">
                          <div class="fw-bold">
                            <p class="fw-bolder">Sketch</p>
                            <p class="mb-0">Start: 27th April, 2021</p>
                            <p class="mb-0 mt-2 fs-7">
                              Tasks: 7
                              <span class="opacity-7-iz"> | Click to Expand</span>
                            </p>
                            <p class="mb-0 fs-7">
                              Files: 7
                              <span class="opacity-7-iz"> | Click to Expand</span>
                            </p>
                          </div>
                          <div class="fw-bold text-end">
                            <p class="mb-0">$49.04</p>
                            <p class="mb-0 opacity-7-iz">End: 30th April, 2021</p>
                          </div>
                        </div>
                        <div>
                          <div class="d-flex mt-2">
                            <div class="mx-2 px-2 fw-bold py-2 chat_text_bg text-center">
                              <p class="mb-0">Sketches</p>
                            </div>
                            <div class="mx-2 px-2 fw-bold py-2 chat_text_bg text-center">
                              <p class="mb-0">Research work</p>
                            </div>
                            <div class="mx-2 fw-bold py-2 chat_text_bg text-center">
                              <p class="mb-0">Research work</p>
                            </div>
                          </div>
                          <div class="d-flex mt-2">
                            <div class="mx-2 px-2 fw-bold py-2 chat_text_bg text-center">
                              <p class="mb-0">Basic Sketches</p>
                            </div>
                            <div class="mx-2 px-2 fw-bold py-2 chat_text_bg text-center">
                              <p class="mb-0">Designs</p>
                            </div>
                            <div class="mx-1 px-2 fw-bold py-2 chat_text_bg text-center">
                              <p class="mb-0">Road Maps</p>
                            </div>
                            <div class="mx-2 px-2 fw-bold py-2 chat_text_bg text-center">
                              <p class="mb-0">arts</p>
                            </div>
                          </div>
                          <div class="mt-4">
                            <p class="mb-0 fw-bolder">
                              Files: 7
                              <span class="opacity-7-iz"> | Click to Collapse </span>
                            </p>
                            <hr />
                            <div class="d-flex">
                              <img
                                src="~assets/images/job_long_1.png"
                                class="chat_mini_img me-2"
                                alt="..."
                              />
                              <img
                                src="~assets/images/job2.png"
                                class="chat_mini_img mx-2"
                                alt="..."
                              />
                              <img
                                src="~assets/images/job3.png"
                                class="chat_mini_img mx-2"
                                alt="..."
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="boder_bg_shadow p-3 mt-2">
                        <div class="d-flex justify-content-between">
                          <div class="fw-bold">
                            <p class="fw-bolder">Sketch</p>
                            <p class="mb-0">Start: 27th April, 2021</p>
                            <p class="mb-0 mt-2 fs-7">
                              Tasks: 7
                              <span class="opacity-7-iz"> | Click to Expand</span>
                            </p>
                            <p class="mb-0 fs-7">
                              Files: 7
                              <span class="opacity-7-iz"> | Click to Expand</span>
                            </p>
                          </div>
                          <div class="fw-bold text-end">
                            <p class="mb-0">$49.04</p>
                            <p class="mb-0 opacity-7-iz">End: 30th April, 2021</p>
                          </div>
                        </div>
                      </div>
                      <div class="mt-3">
                        <div class="d-flex justify-content-center align-items-center">
                          <p class="mini_arrow_bg text-center mx-1">
                            <i class="fs-6 pt-1 fas fa-angle-left"></i>
                          </p>
                          <p class="mini_arrow_bg text-center mx-1">
                            <i class="fs-6 pt-1 fas fa-angle-right"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- modals -->

    <b-modal id="modal-center-2" size="sm" hide-header hide-footer>
      <div>
        <ModalBtn id="modal-center-2" />
        <p class="text-center">Project Review</p>
        <div class="text-center">
          <img src="~assets/images/thumbs_up.png" alt="" />
        </div>
        <p class="fw-bolder text-center mb-1">
          Take out some time to review<br />your recently completed project
        </p>
        <p class="fw-lighter fs-7 text-center text-muted mb-5">Will only take a minute</p>
        <div class="text-center mb-5">
          <button class="search py-1 px-5" v-b-modal.modal-center-3>Start</button>
        </div>
      </div>
    </b-modal>

    <b-modal id="modal-center" size="sm" hide-header hide-footer>
      <div>
        <ModalBtn id="modal-center" />
        <p class="text-center">Project Review</p>
        <div class="text-center">
          <img src="~assets/images/smilie.png" alt="" />
        </div>
        <p class="fw-bolder text-center mb-1 fs-5">
          Take out some time to<br />review your seller
        </p>
        <p class="fw-lighter fs-7 text-center text-muted mb-5">Will only take a minute</p>
        <div class="text-center mb-5">
          <button class="search py-1 px-5" v-b-modal.modal-center-2>Start</button>
        </div>
      </div>
    </b-modal>

    <b-modal id="modal-center-3" size="md" hide-header hide-footer>
      <div>
        <div class="d-flex justify-content-between align-items-center border-bottom mx-3">
          <p class="text-muted for_pointer" @click="$bvModal.hide('modal-center-3')">
            Close
          </p>
          <p class="text-center">Project Review</p>
          <p class="green for_pointer" @click="ws_next_btn">Next</p>
        </div>
        <div class="ws-cs-next-btn">
          <VueSlickCarousel class="mb-5" :arrows="true" :dots="true">
            <div>
              <div class="d-flex justify-content-center align-items-center mt-4">
                <img src="~assets/images/services.png" alt="" />
              </div>
              <p class="fw-bolder text-center mb-1 fs-5">Services</p>
              <p class="fw-lighter fs-7 text-center text-muted mb-5">
                Kindly rate your sellers service
              </p>
              <div class="d-flex justify-content-around align-items-center mx-3 mb-3">
                <p class="mb-0">Politeness</p>
                <div class="rate ms-2">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="5 stars">5 stars</label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="4 stars">4 stars</label>
                  <input
                    type="radio"
                    id="star3"
                    checked="checked"
                    name="rate"
                    value="3"
                  />
                  <label for="star3" title="3 stars">3 stars</label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="2 stars">2 stars</label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="1 star">1 star</label>
                </div>
              </div>
              <div class="d-flex justify-content-around align-items-center mx-3 mb-3">
                <p class="mb-0">Longevity</p>
                <div class="rate ms-2">
                  <input type="radio" id="star10" name="rate2" value="5" />
                  <label for="star10" title="5 stars">5 stars</label>
                  <input type="radio" id="star9" name="rate2" value="4" />
                  <label for="star9" title="4 stars">4 stars</label>
                  <input type="radio" id="star8" name="rate2" value="3" />
                  <label for="star8" title="3 stars">3 stars</label>
                  <input type="radio" id="star7" name="rate2" value="2" />
                  <label for="star7" title="2 stars">2 stars</label>
                  <input type="radio" id="star6" name="rate2" value="1" />
                  <label for="star6" title="1 star">1 star</label>
                </div>
              </div>
              <div
                class="d-flex justify-content-around align-items-center mx-3 mb-5 pb-5"
              >
                <p class="mb-0">Satisfaction</p>
                <div class="rate">
                  <input type="radio" id="star15" name="rate3" value="5" />
                  <label for="star15" title="5 stars">5 stars</label>
                  <input type="radio" id="star14" name="rate3" value="4" />
                  <label for="star14" title="4 stars">4 stars</label>
                  <input type="radio" id="star13" name="rate3" value="3" />
                  <label for="star13" title="3 stars">3 stars</label>
                  <input type="radio" id="star12" name="rate3" value="2" />
                  <label for="star12" title="2 stars">2 stars</label>
                  <input type="radio" id="star11" name="rate3" value="1" />
                  <label for="star11" title="1 star">1 star</label>
                </div>
              </div>
            </div>

            <div>
              <div class="d-flex justify-content-center align-items-center mt-4">
                <img src="~assets/images/communication.png" alt="" />
              </div>
              <p class="fw-bolder text-center mb-1 fs-5">Communication</p>
              <p class="fw-lighter fs-7 text-center text-muted mb-5">
                Kindly rate your sellers service
              </p>
              <div class="d-flex justify-content-around align-items-center mx-3 mb-3">
                <p class="mb-0">Response Time</p>
                <div class="rate">
                  <input type="radio" id="star20" name="rate4" value="5" />
                  <label for="star20" title="5 stars">5 stars</label>
                  <input type="radio" id="star19" name="rate4" value="4" />
                  <label for="star19" title="4 stars">4 stars</label>
                  <input
                    type="radio"
                    id="star18"
                    checked="checked"
                    name="rate4"
                    value="3"
                  />
                  <label for="star18" title="3 stars">3 stars</label>
                  <input type="radio" id="star17" name="rate4" value="2" />
                  <label for="star17" title="2 stars">2 stars</label>
                  <input type="radio" id="star16" name="rate4" value="1" />
                  <label for="star16" title="1 star">1 star</label>
                </div>
              </div>
              <div class="d-flex justify-content-around align-items-center mx-3 mb-3">
                <p class="mb-0">Clarity</p>
                <div class="rate ps-5 ms-4">
                  <input type="radio" id="star25" name="rate5" value="5" />
                  <label for="star25" title="5 stars">5 stars</label>
                  <input type="radio" id="star24" name="rate5" value="4" />
                  <label for="star24" title="4 stars">4 stars</label>
                  <input type="radio" id="star23" name="rate5" value="3" />
                  <label for="star23" title="3 stars">3 stars</label>
                  <input type="radio" id="star22" name="rate5" value="2" />
                  <label for="star22" title="2 stars">2 stars</label>
                  <input type="radio" id="star21" name="rate5" value="1" />
                  <label for="star21" title="1 star">1 star</label>
                </div>
              </div>
              <div class="d-flex justify-content-around align-items-center mx-3 mb-3">
                <p class="mb-0">Completeness</p>
                <div class="rate ps-4">
                  <input type="radio" id="star30" name="rate6" value="5" />
                  <label for="star30" title="5 stars">5 stars</label>
                  <input type="radio" id="star29" name="rate6" value="4" />
                  <label for="star29" title="4 stars">4 stars</label>
                  <input type="radio" id="star28" name="rate6" value="3" />
                  <label for="star28" title="3 stars">3 stars</label>
                  <input type="radio" id="star27" name="rate6" value="2" />
                  <label for="star27" title="2 stars">2 stars</label>
                  <input type="radio" id="star26" name="rate6" value="1" />
                  <label for="star26" title="1 star">1 star</label>
                </div>
              </div>
              <div class="d-flex justify-content-around align-items-center mx-3 mb-3">
                <p class="mb-0">Courtesy</p>
                <div class="rate ms-5">
                  <input type="radio" id="star35" name="rate7" value="5" />
                  <label for="star35" title="5 stars">5 stars</label>
                  <input type="radio" id="star34" name="rate7" value="4" />
                  <label for="star34" title="4 stars">4 stars</label>
                  <input type="radio" id="star33" name="rate7" value="3" />
                  <label for="star33" title="3 stars">3 stars</label>
                  <input type="radio" id="star32" name="rate7" value="2" />
                  <label for="star32" title="2 stars">2 stars</label>
                  <input type="radio" id="star31" name="rate7" value="1" />
                  <label for="star31" title="1 star">1 star</label>
                </div>
              </div>
              <div class="d-flex justify-content-around align-items-center mx-3 mb-3">
                <p class="mb-0">Correctness</p>
                <div class="rate ms-4">
                  <input type="radio" id="star40" name="rate8" value="5" />
                  <label for="star40" title="5 stars">5 stars</label>
                  <input type="radio" id="star39" name="rate8" value="4" />
                  <label for="star39" title="4 stars">4 stars</label>
                  <input type="radio" id="star38" name="rate8" value="3" />
                  <label for="star38" title="3 stars">3 stars</label>
                  <input type="radio" id="star37" name="rate8" value="2" />
                  <label for="star37" title="2 stars">2 stars</label>
                  <input type="radio" id="star36" name="rate8" value="1" />
                  <label for="star36" title="1 star">1 star</label>
                </div>
              </div>
            </div>

            <div>
              <div class="d-flex justify-content-center align-items-center mt-4">
                <img src="~assets/images/delivery.png" alt="" />
              </div>
              <p class="fw-bolder text-center mb-1 fs-5">Delivery</p>
              <p class="fw-lighter fs-7 text-center text-muted mb-5">
                Kindly rate your sellers service
              </p>
              <div class="d-flex justify-content-around align-items-center mx-3 mb-3">
                <p class="mb-0">Timeliness</p>
                <div class="rate ps-5">
                  <input type="radio" id="star45" name="rate9" value="5" />
                  <label for="star45" title="5 stars">5 stars</label>
                  <input type="radio" id="star44" name="rate9" value="4" />
                  <label for="star44" title="4 stars">4 stars</label>
                  <input
                    type="radio"
                    id="star43"
                    checked="checked"
                    name="rate9"
                    value="3"
                  />
                  <label for="star43" title="3 stars">3 stars</label>
                  <input type="radio" id="star42" name="rate9" value="2" />
                  <label for="star42" title="2 stars">2 stars</label>
                  <input type="radio" id="star41" name="rate9" value="1" />
                  <label for="star41" title="1 star">1 star</label>
                </div>
              </div>
              <div class="d-flex justify-content-around align-items-center mx-3 mb-3">
                <p class="mb-0">Delivery Method</p>
                <div class="rate">
                  <input type="radio" id="star50" name="rate10" value="5" />
                  <label for="star50" title="5 stars">5 stars</label>
                  <input type="radio" id="star49" name="rate10" value="4" />
                  <label for="star49" title="4 stars">4 stars</label>
                  <input type="radio" id="star48" name="rate10" value="3" />
                  <label for="star48" title="3 stars">3 stars</label>
                  <input type="radio" id="star47" name="rate10" value="2" />
                  <label for="star47" title="2 stars">2 stars</label>
                  <input type="radio" id="star46" name="rate10" value="1" />
                  <label for="star46" title="1 star">1 star</label>
                </div>
              </div>
              <div class="d-flex justify-content-around align-items-center mx-3 mb-3">
                <p class="mb-0">Delivery Speed</p>
                <div class="rate ms-2">
                  <input type="radio" id="star55" name="rate11" value="5" />
                  <label for="star55" title="5 stars">5 stars</label>
                  <input type="radio" id="star54" name="rate11" value="4" />
                  <label for="star54" title="4 stars">4 stars</label>
                  <input type="radio" id="star53" name="rate11" value="3" />
                  <label for="star53" title="3 stars">3 stars</label>
                  <input type="radio" id="star52" name="rate11" value="2" />
                  <label for="star52" title="2 stars">2 stars</label>
                  <input type="radio" id="star51" name="rate11" value="1" />
                  <label for="star51" title="1 star">1 star</label>
                </div>
              </div>
              <div class="d-flex justify-content-around align-items-center mx-3 mb-3">
                <p class="mb-0">Satisfaction</p>
                <div class="rate ms-4 ps-3">
                  <input type="radio" id="star60" name="rate12" value="5" />
                  <label for="star60" title="5 stars">5 stars</label>
                  <input type="radio" id="star59" name="rate12" value="4" />
                  <label for="star59" title="4 stars">4 stars</label>
                  <input type="radio" id="star58" name="rate12" value="3" />
                  <label for="star58" title="3 stars">3 stars</label>
                  <input type="radio" id="star57" name="rate12" value="2" />
                  <label for="star57" title="2 stars">2 stars</label>
                  <input type="radio" id="star56" name="rate12" value="1" />
                  <label for="star56" title="1 star">1 star</label>
                </div>
              </div>
              <div class="d-flex justify-content-around align-items-center mx-3 mb-3">
                <p class="mb-0">Quality</p>
                <div class="rate ms-5 ps-4">
                  <input type="radio" id="star65" name="rate13" value="5" />
                  <label for="star65" title="5 stars">5 stars</label>
                  <input type="radio" id="star64" name="rate13" value="4" />
                  <label for="star64" title="4 stars">4 stars</label>
                  <input type="radio" id="star63" name="rate13" value="3" />
                  <label for="star63" title="3 stars">3 stars</label>
                  <input type="radio" id="star62" name="rate13" value="2" />
                  <label for="star62" title="2 stars">2 stars</label>
                  <input type="radio" id="star61" name="rate13" value="1" />
                  <label for="star61" title="1 star">1 star</label>
                </div>
              </div>
            </div>

            <div>
              <div class="d-flex justify-content-center align-items-center mt-4">
                <img src="~assets/images/faqs.png" alt="" />
              </div>
              <p class="fw-bolder text-center mb-1 fs-5">FAQS</p>
              <p class="fw-lighter fs-7 text-center text-muted mb-5">
                Kindly select an option
              </p>
              <p class="fw-bold text-center">Would you recommend “Seller” to others ?</p>
              <div class="d-flex justify-content-evenly align-items-center flex-wrap">
                <label id="my-radio" class="d-flex align-items-center me-lg-2 mx-2">
                  <p class="mb-0 mx-1 fw-bold me-3">Yes</p>
                  <input
                    type="radio"
                    checked="checked"
                    id="my-radio"
                    name="fav_language"
                    value="HTML"
                  />
                </label>
                <label id="my-radio" class="d-flex align-items-center mx-2">
                  <p class="mb-0 mx-1 fw-bold me-3">No</p>
                  <input type="radio" id="my-radio" name="fav_language" value="HTML" />
                </label>
              </div>
            </div>

            <div>
              <div class="d-flex justify-content-center align-items-center mt-4">
                <img src="~assets/images/comments.png" alt="" />
              </div>
              <p class="fw-bolder text-center mb-1 fs-5" v-b-modal.modal-center-4>
                Comments
              </p>
              <p class="fw-lighter fs-7 text-center text-muted mb-5">
                Tell us a litle about your experience
              </p>
              <textarea
                class="form-control form-control-2 px-4 mt-5"
                placeholder="Write a  review"
                id="exampleFormControlTextarea1"
                rows="5"
              ></textarea>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </b-modal>

    <b-modal id="modal-center-4" size="md" hide-header hide-footer>
      <ModalBtn />
      <div class="d-flex justify-content-between align-items-center">
        <p class="text-muted">Back</p>
        <p>Thanks !</p>
        <p></p>
      </div>
      <div class="d-flex justify-content-center align-items-center mt-4">
        <img src="~assets/images/ready.png" alt="" />
      </div>
      <p class="fw-bolder text-center mb-1 fs-5">Review Ready</p>
      <p class="fw-lighter fs-7 text-center text-muted mb-5">
        Hit the submit button to publish your reviews.<br />
        Note that published reviews cannot be edited.
      </p>
      <div class="text-center mb-5">
        <button class="search mt-5 px-5">Submit !</button>
      </div>
    </b-modal>

    <b-modal id="modal-center-9" hide-header hide-footer>
      <div class="p-2">
        <!-- <ModalBtn /> -->
        <div class="d-flex justify-content-between align-items-center mx-0 mx-lg-3 py-3">
          <p class="green fw-bold">New Features Request</p>
        </div>
        <div>
          <div class="form-group mx-0 mx-lg-3 py-2">
            <label for="exampleFormControlInput1" class="fw-bold my-3"
              >Features Name</label
            >
            <input
              type="email"
              class="form-control px-4 form-control-2"
              id="exampleFormControlInput1"
              placeholder="Enter a title e.g Logo Project"
            />
          </div>
          <div class="form-group mx-0 mx-lg-3 py-3">
            <label for="exampleFormControlInput1" class="fw-bold my-3"
              >Assign Resource(s) to Features</label
            >
            <select
              class="form-select form-control-4"
              aria-label="Default select example"
            >
              <option class="px-4" selected>@enter a name</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="form-group mx-0 mx-lg-3 py-3">
            <label for="exampleFormControlInput1" class="fw-bold my-3">Description</label>
            <textarea
              class="form-control form-control-2 px-4"
              placeholder="Brief info to help others uderstand your project better "
              id="exampleFormControlTextarea1"
              rows="5"
            ></textarea>
          </div>
          <div class="row px-lg-3 px-0">
            <div class="col-lg-6 col-md-6 col-12">
              <div class="form-group mx-0 py-3">
                <label for="exampleForm ControlInput1" class="fw-bold my-3"
                  >Add Sub-Category</label
                >
                <select
                  class="form-select form-control-4"
                  aria-label="Default select example"
                >
                  <option class="px-4" selected>Select a Subcategory</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <div class="form-group mx-0 py-3">
                <label for="exampleForm ControlInput1" class="fw-bold my-3">Budget</label>
                <select
                  class="form-select form-control-4"
                  aria-label="Default select example"
                >
                  <option class="px-4" selected>Enter an amount ($)</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div class="d-flex justify-content-between">
              <div class="form-group d-block mx-0">
                <div>
                  <label for="exampleForm ControlInput1" class="pt-2">Start Time</label>
                </div>
                <div>
                  <button class="mt-2 calendar_button fs-6 px-5">
                    9 : 00
                    <i class="far fa-clock ms-5 text-dark"></i>
                  </button>
                </div>
              </div>
              <div class="form-group d-block mx-0">
                <div>
                  <label for="exampleForm ControlInput1" class="pt-2">Start Time</label>
                </div>
                <div>
                  <button class="mt-2 calendar_button fs-6 px-5">
                    9 : 00
                    <i class="far fa-clock ms-5 text-dark"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="input-group py-2 px-3 my-2 box-shadow-iz d-none">
            <input
              style="padding: 10px"
              type="file"
              class="form-control border-0 text-dark px-3 bg-white"
              id="inputGroupFile02"
            />
            <label
              class="input-group-text bg-white text-danger fw-bold"
              style="cursor: pointer; padding: 10px"
              >Upload</label
            >
          </div>
          <div class="form-control-iz px-2 my-3">
            <div class="d-flex align-items-center justify-content-between h-100">
              <button @click="getFile()" class="btn btn-white btn-iz py-0 mb-0 fw-bold">
                <i class="fas fa-file-image fs-5"></i> &nbsp; Add files from my computer
              </button>

              <label
                class="border_right_iz text-danger fw-bold h-100 d-flex align-items-center px-3"
                style="cursor: pointer"
                >Upload</label
              >
            </div>
          </div>
          <div class="form-group d-flex justify-content-between flex-wrap pt-3">
            <div class="d-flex justify-content-center align-items-center">
              <label class="fw-bold">Tasks Lists</label>
              <i
                class="fas fa-info-circle opacity-7-iz mx-2"
                v-b-tooltip.hover
                title="Tooltip directive content"
              ></i>
            </div>
            <div
              class="d-flex justify-content-center align-items-center mt-2 mt-lg-0 mt-md-0"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="cursor: pointer"
              >
                <path
                  d="M12.0041 17.3497H1.95762C1.03287 17.3497 0.283203 16.6 0.283203 15.6752V5.62873H1.95762V15.6752H12.0041V17.3497ZM15.353 14.0008H5.30646C4.3817 14.0008 3.63204 13.2512 3.63204 12.3264V2.27989C3.63204 1.35513 4.3817 0.605469 5.30646 0.605469H15.353C16.2777 0.605469 17.0274 1.35513 17.0274 2.27989V12.3264C17.0274 13.2512 16.2777 14.0008 15.353 14.0008ZM5.30646 2.27989V12.3264H15.353V2.27989H5.30646ZM11.1669 10.652H9.49251V8.14035H6.98088V6.46593H9.49251V3.95431H11.1669V6.46593H13.6786V8.14035H11.1669V10.652Z"
                  fill="#34A853"
                />
              </svg>
              <label class="fw-bold green mx-2" style="cursor: pointer"
                >Add new task</label
              >
            </div>
          </div>
          <div class="d-flex py-2 flex-wrap">
            <span class="Feature_tab justify-content-center align-items-center m-1">
              <p class="mb-0 fw-bold fs-6">
                Sketches
                <i class="far fa-times-circle mx-1" style="cursor: pointer"></i>
              </p>
            </span>
            <span
              class="Feature_tab justify-content-center align-items-center m-1"
              v-for="task of tasks"
              :key="task"
            >
              <p class="mb-0 fw-bold fs-6">
                {{ task.title }}
                <i
                  @click="delTask(task.id)"
                  class="far fa-times-circle mx-1"
                  style="cursor: pointer"
                ></i>
              </p>
            </span>
          </div>
          <hr
            style="color: lightgrey; margin-bottom: 10px"
            class="mx-3 mx-lg-5 mx-md-5"
          />
          <div class="form-group py-3">
            <label for="exampleFormControlInput1" class="fw-bold my-3">Task Title</label>
            <input
              type="email"
              class="form-control px-4 form-control-2"
              id="exampleFormControlInput4"
              placeholder="Add a task title"
            />
          </div>
          <div class="form-group py-3">
            <label for="exampleFormControlInput1" class="fw-bold my-3">Description</label>
            <input
              type="email"
              class="form-control px-4 form-control-2"
              id="exampleFormControlInput5"
              placeholder="Add a description"
            />
            <div class="justify-content-end d-flex">
              <button class="btn fw-lighter btn-next mt-5" @click="showTask">
                Save task
              </button>
            </div>
          </div>
          <div>
            <button class="btn btn-next fw-lighter w-100 my-5" @click="showTask">
              Request Approval
            </button>
          </div>
        </div>

        <div></div>
      </div>
    </b-modal>
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
        arrows: false,
        dots: true,
        slidesToShow: 2,
      },
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      show9: false,
      show10: false,
      posts: [],
      tasks: [],
    };
  },

  methods: {
    async showTask() {
      let title = document.getElementById("exampleFormControlInput4").value;
      if (title === "") {
        alert("empty");
      } else {
        let obj = {
          title: title,
          id: Math.floor(Math.random() * 1000),
        };
        this.tasks.push(obj);
        document.getElementById("exampleFormControlInput4").value = "";
      }
    },
    delTask(e) {
      for (let i = 0; i < this.tasks.length; i++) {
        const element = this.tasks[i];
        if (element.id === e) {
          this.tasks.splice(i, 1);
        }
      }
    },
    getFile() {
      document.getElementById("inputGroupFile02").click();
    },
    async show() {
      var min = new Date().getMinutes();
      var sec = new Date().getSeconds();
      // console.log(min+ ":" + sec);
      // alert("hello");
      let text = document.getElementById("input").value;

      // alert(text);
      if (text === "") {
        alert("empty");
      } else {
        let obj = { msg: text, time: min + ":" + sec };
        this.posts.push(obj);

        document.getElementById("input").value = "";
        console.log(this.posts);
      }
      var element = document.querySelector("#scroll-a");
      element.click();
    },
  },
};
</script>
<style scoped>
.green-box {
  border: 1px solid #52be71 !important;
  background: transparent !important;
  padding: 10px;
  border-radius: 8px;
  border-bottom-left-radius: 0px;
}

.green-in {
  background: #52be71 !important;
  display: flex;
  padding: 20px;
  border-radius: 10px;
}
.green-in-2 {
  padding: 10px;
  background: #52be71 !important;
  display: flex;
  border-radius: 10px;
}
.main-a {
  background: #ffffff;
  box-shadow: 0px 1.11628px 5.5814px rgba(20, 20, 20, 0.1);
  border-radius: 8.37209px;
}
.bg-mus {
  background: #f4f5f7;
  border-radius: 25px;
  padding: 8px;
}
</style>
