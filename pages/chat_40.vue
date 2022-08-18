<template>
  <div>
    <Nav />

    <ServicesNav />

    <CreategigNav />
    <div class="container">
      <div class="row px-4" style="margin-bottom: 30px">
        <!-- first col -->
        <div class="col-12 col-lg-3 col-md-3">
          <div class="text-center d-block">
            <div>
              <img src="~assets/images/chat_40_pro.png" class="img-fluid" alt="" />
            </div>
            <p class="fs-5 fw-bolder mb-0">Prodigy Dan</p>
            <p class="fs-7 opacity_01">My Account</p>
          </div>
          <div class="chat_col_1">
            <p class="mb-0 py-2 text-dark">
              Recently Chats <i class="mx-1 pt-2 fas fa-angle-down"></i>
            </p>
            <!-- modal 1 add chat start -->

            <b-modal id="modal-center" size="sm" hide-footer>
              <div>
                <p class="text-center fw-bolder">New Chat</p>
                <div class="form-group has-search">
                  <span class="text-dark py-1 fa fa-search form-control-feedback"></span>
                  <input
                    type="Search"
                    class="form-control form-select-2 fs-6 text-dark"
                    placeholder="Search"
                  />
                  <hr style="color: lightgrey" />

                  <div class="mini_chat mt-2">
                    <div class="text-start px-5">
                      <p class="fs-7 green py-3">
                        <svg
                          class="mx-1"
                          width="15"
                          height="16"
                          viewBox="0 0 15 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.5924 6.85625H11.0648V4.56494H8.77354V3.0374H11.0648V0.746094H12.5924V3.0374H14.8837V4.56494H12.5924V6.85625Z"
                            fill="#52BE71"
                          />
                          <path
                            d="M14.1199 8.38379H12.5924V10.6751H4.44602C4.11536 10.6742 3.79349 10.7815 3.5295 10.9806L1.89961 12.2026V3.0374H7.246V1.50986H1.89961C1.05597 1.50986 0.37207 2.19377 0.37207 3.0374V15.2577L4.03817 12.5082C4.30229 12.3093 4.62408 12.202 4.95469 12.2026H12.5924C13.436 12.2026 14.1199 11.5187 14.1199 10.6751V8.38379Z"
                            fill="#52BE71"
                          />
                        </svg>

                        New Chat
                      </p>
                    </div>
                  </div>
                  <div class="mini_chat mt-2" v-b-modal.modal-center-3>
                    <div class="text-start px-5">
                      <p id="show-btn" class="fs-7 green py-3">
                        <i class="fa fa-user ms-1 me-2" aria-hidden="true"></i>

                        New Group
                      </p>
                    </div>
                  </div>
                  <div class="mt-2 mini_chat scroll_over_fllow_m">
                    <p class="text-dark fw-bold">Frequently Contacted</p>
                    <div class="d-flex mt-1 justify-content-between">
                      <div class="d-flex">
                        <img
                          src="~assets/images/chat_40_pro.png"
                          class="img-fluid rounded-circle"
                          style="height: 40px; width: 40px"
                          alt=""
                        />
                        <div class="mx-2">
                          <p class="fs-6 fw-bolder mb-0">Mary Anther</p>
                          <p class="fs-7 text-muted">Live for the story...Malesuada ..</p>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex mt-1 justify-content-between">
                      <div class="d-flex">
                        <img
                          src="~assets/images/chat_40_pro.png"
                          class="img-fluid rounded-circle"
                          style="height: 40px; width: 40px"
                          alt=""
                        />
                        <div class="mx-2">
                          <p class="fs-6 fw-bolder mb-0">Mary Anther</p>
                          <p class="fs-7 text-muted">Live for the story...Malesuada ..</p>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex mt-1 justify-content-between">
                      <div class="d-flex">
                        <img
                          src="~assets/images/chat_40_pro.png"
                          class="img-fluid rounded-circle"
                          style="height: 40px; width: 40px"
                          alt=""
                        />
                        <div class="mx-2">
                          <p class="fs-6 fw-bolder mb-0">Mary Anther</p>
                          <p class="fs-7 text-muted">Live for the story...Malesuada ..</p>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex mt-1 justify-content-between">
                      <div class="d-flex">
                        <img
                          src="~assets/images/chat_40_pro.png"
                          class="img-fluid rounded-circle"
                          style="height: 40px; width: 40px"
                          alt=""
                        />
                        <div class="mx-2">
                          <p class="fs-6 fw-bolder mb-0">Mary Anther</p>
                          <p class="fs-7 text-muted">Live for the story...Malesuada ..</p>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex mt-1 justify-content-between">
                      <div class="d-flex">
                        <img
                          src="~assets/images/chat_40_pro.png"
                          class="img-fluid rounded-circle"
                          style="height: 40px; width: 40px"
                          alt=""
                        />
                        <div class="mx-2">
                          <p class="fs-6 fw-bolder mb-0">Mary Anther</p>
                          <p class="fs-7 text-muted">Live for the story...Malesuada ..</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-modal>

            <!-- modal 1 add chat end -->

            <!-- modal 2 add group start -->

            <b-modal id="modal-center-3" size="sm" hide-footer>
              <div>
                <div
                  class="d-flex justify-content-between align-items-center mx-0 mx-lg-3 py-3"
                >
                  <p class="fs-7 gray" modal-cancel>Cancel</p>
                  <p class="fs-6 dark fw-bolder">New Group</p>
                  <p class="fs-7 green">Next</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                  <div class="round_img_m text-center mt-5">
                    <i class="round_img_m_icon far fa-image my-auto"></i>
                  </div>
                </div>
                <p class="fs-5 text-center my-3 fw-bolder">Upload Photo</p>
                <hr style="color: lightgrey" />
                <div>
                  <form>
                    <div class="form-group py-3">
                      <label for="exampleFormControlInput1" class="fw-bold my-3"
                        >Group Name</label
                      >
                      <input
                        type="text"
                        class="form-control px-4 form-control-2"
                        placeholder="Group Name"
                      />
                    </div>

                    <div class="form-group py-3">
                      <label for="exampleFormControlInput1" class="fw-bold my-3"
                        >Description</label
                      >
                      <textarea
                        class="form-control form-control-2 px-4"
                        placeholder="Enter a brief description of your group  "
                        id="exampleFormControlTextarea1"
                        rows="5"
                      ></textarea>
                    </div>
                    <div class="py-3">
                      <p class="w-100 fw-light btn btn-next" v-b-modal.modal-center-2>
                        Next
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </b-modal>

            <!-- modal 2 add group end -->

            <!-- modal 3 add  Participants start -->
            <b-modal id="modal-center-2" size="sm" hide-footer>
              <div>
                <div
                  class="d-flex justify-content-between align-items-center mx-0 mx-lg-3 py-3"
                >
                  <p class="fs-7 gray">Cancel</p>
                  <p class="fs-6 dark fw-bolder">Add Participants</p>
                  <p class="fs-7 green">Create</p>
                </div>
                <div class="form-group has-search">
                  <span class="text-dark py-1 fa fa-search form-control-feedback"></span>
                  <input
                    type="Search"
                    class="form-control form-select-2 fs-6 text-dark"
                    placeholder="Search"
                  />
                  <hr style="color: lightgrey" />

                  <div class="mt-2 mini_chat scroll_over_fllow_m">
                    <p class="text-dark fw-bold">Connections</p>
                    <div class="d-flex mt-1 justify-content-between">
                      <div class="d-flex">
                        <img
                          src="~assets/images/chat_40_pro.png"
                          class="img-fluid rounded-circle"
                          style="height: 40px; width: 40px"
                          alt=""
                        />
                        <div class="mx-2">
                          <p class="fs-6 fw-bolder mb-0">Mary Anther</p>
                          <p class="fs-7 text-muted">Live for the story...Malesuada ..</p>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex mt-1 justify-content-between">
                      <div class="d-flex">
                        <img
                          src="~assets/images/chat_40_pro.png"
                          class="img-fluid rounded-circle"
                          style="height: 40px; width: 40px"
                          alt=""
                        />
                        <div class="mx-2">
                          <p class="fs-6 fw-bolder mb-0">Mary Anther</p>
                          <p class="fs-7 text-muted">Live for the story...Malesuada ..</p>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex mt-1 justify-content-between">
                      <div class="d-flex">
                        <img
                          src="~assets/images/chat_40_pro.png"
                          class="img-fluid rounded-circle"
                          style="height: 40px; width: 40px"
                          alt=""
                        />
                        <div class="mx-2">
                          <p class="fs-6 fw-bolder mb-0">Mary Anther</p>
                          <p class="fs-7 text-muted">Live for the story...Malesuada ..</p>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex mt-1 justify-content-between">
                      <div class="d-flex">
                        <img
                          src="~assets/images/chat_40_pro.png"
                          class="img-fluid rounded-circle"
                          style="height: 40px; width: 40px"
                          alt=""
                        />
                        <div class="mx-2">
                          <p class="fs-6 fw-bolder mb-0">Mary Anther</p>
                          <p class="fs-7 text-muted">Live for the story...Malesuada ..</p>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex mt-1 justify-content-between">
                      <div class="d-flex">
                        <img
                          src="~assets/images/chat_40_pro.png"
                          class="img-fluid rounded-circle"
                          style="height: 40px; width: 40px"
                          alt=""
                        />
                        <div class="mx-2">
                          <p class="fs-6 fw-bolder mb-0">Mary Anther</p>
                          <p class="fs-7 text-muted">Live for the story...Malesuada ..</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-modal>

            <!-- modal 3 add  Participants end -->

            <div class="d-flex justify-content-between">
              <h5 class="fw-bolder py-3">Chats</h5>
              <div id="show-btn" v-b-modal.modal-center>
                <p class="fs-7 green py-3">
                  <svg
                    class="mx-1"
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5924 6.85625H11.0648V4.56494H8.77354V3.0374H11.0648V0.746094H12.5924V3.0374H14.8837V4.56494H12.5924V6.85625Z"
                      fill="#52BE71"
                    />
                    <path
                      d="M14.1199 8.38379H12.5924V10.6751H4.44602C4.11536 10.6742 3.79349 10.7815 3.5295 10.9806L1.89961 12.2026V3.0374H7.246V1.50986H1.89961C1.05597 1.50986 0.37207 2.19377 0.37207 3.0374V15.2577L4.03817 12.5082C4.30229 12.3093 4.62408 12.202 4.95469 12.2026H12.5924C13.436 12.2026 14.1199 11.5187 14.1199 10.6751V8.38379Z"
                      fill="#52BE71"
                    />
                  </svg>

                  New Chat
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="form-group has-search">
              <span class="text-dark py-1 ps-3 fa fa-search form-control-feedback"></span>
              <input
                type="Search"
                class="form-control ps-5 form-select-2 fs-6 text-dark"
                placeholder="Search"
              />
            </div>
            <!-- chat profiles -->
            <div class="mt-5 scroll_over_fllow">
              <div class="d-flex justify-content-between">
                <div class="d-flex">
                  <img
                    src="~assets/images/09.png"
                    class="img-fluid rounded-circle"
                    style="height: 40px; width: 40px"
                    alt=""
                  />
                  <div class="mx-2">
                    <p class="fs-6 fw-bolder mb-0">Mary Anther</p>
                    <p class="fs-7 opacity_01">Live for the story...Malesuada ..</p>
                  </div>
                  <p class="fs-7 px-3 opacity_01">11:59</p>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="d-flex">
                  <img
                    src="~assets/images/01.png"
                    class="img-fluid rounded-circle"
                    style="height: 40px; width: 40px"
                    alt=""
                  />
                  <div class="mx-2">
                    <p class="fs-6 fw-bolder mb-0">Mary Anther</p>
                    <p class="fs-7 opacity_01">Live for the story...Malesuada ..</p>
                  </div>
                  <p class="fs-7 px-3 opacity_01">11:59</p>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="d-flex">
                  <img
                    src="~assets/images/02.png"
                    class="img-fluid rounded-circle"
                    style="height: 40px; width: 40px"
                    alt=""
                  />
                  <div class="mx-2">
                    <p class="fs-6 fw-bolder mb-0">Mary Anther</p>
                    <p class="fs-7 opacity_01">Live for the story...Malesuada ..</p>
                  </div>
                  <p class="fs-7 px-3 opacity_01">11:59</p>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="d-flex">
                  <img
                    src="~assets/images/03.png"
                    class="img-fluid rounded-circle"
                    style="height: 40px; width: 40px"
                    alt=""
                  />
                  <div class="mx-2">
                    <p class="fs-6 fw-bolder mb-0">Mary Anther</p>
                    <p class="fs-7 opacity_01">Live for the story...Malesuada ..</p>
                  </div>
                  <p class="fs-7 px-3 opacity_01">11:59</p>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="d-flex">
                  <img
                    src="~assets/images/04.png"
                    class="img-fluid rounded-circle"
                    style="height: 40px; width: 40px"
                    alt=""
                  />
                  <div class="mx-2">
                    <p class="fs-6 fw-bolder mb-0">Mary Anther</p>
                    <p class="fs-7 opacity_01">Live for the story...Malesuada ..</p>
                  </div>
                  <p class="fs-7 px-3 opacity_01">11:59</p>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="d-flex">
                  <img
                    src="~assets/images/05.png"
                    class="img-fluid rounded-circle"
                    style="height: 40px; width: 40px"
                    alt=""
                  />
                  <div class="mx-2">
                    <p class="fs-6 fw-bolder mb-0">Mary Anther</p>
                    <p class="fs-7 opacity_01">Live for the story...Malesuada ..</p>
                  </div>
                  <p class="fs-7 px-3 opacity_01">11:59</p>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="d-flex">
                  <img
                    src="~assets/images/06.png"
                    class="img-fluid rounded-circle"
                    style="height: 40px; width: 40px"
                    alt=""
                  />
                  <div class="mx-2">
                    <p class="fs-6 fw-bolder mb-0">Mary Anther</p>
                    <p class="fs-7 opacity_01">Live for the story...Malesuada ..</p>
                  </div>
                  <p class="fs-7 px-3 opacity_01">11:59</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- chat message sec  -->
        <div
          id="main_mess"
          class="px-0 col-12 col-lg-9 col-md-9 mt-4 mt-lg-0 mt-md-0 boder_left_chat"
        >
          <div
            class="mx-3 py-3 d-flex justify-content-between align-items-center flex-warp"
          >
            <div class="">
              <h6 class="fw-bold mb-0">Mary Anther</h6>
            </div>
            <div class="form-group has-search">
              <span class="text-dark ps-3 py-1 fa fa-search form-control-feedback"></span>
              <input
                type="Search"
                class="form-control ps-5 form-select-2 fs-6 text-dark"
                placeholder="Search"
              />
            </div>
          </div>
          <div class="mx-2 chat_col_2 scroll_over_fllow_2">
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
                      <i class="mx-2 fas fa-ellipsis-v" @click="reportModal"></i>
                      <div id="report_modal_2">
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

                          <div
                            class="d-flex align-items-center justify-content-between"
                            @click="sideBar"
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
                      vestibulum, ad laoreet egestas congue donec et commodo tortor, nunc
                      ad placerat nisl, , commodo nisl.
                    </p>
                  </div>

                  <img
                    src="~assets/images/Profile_Pic.png"
                    class="img-fluid mx-1 rounded-circle"
                    style="height: 40px; width: 40px"
                    @click="sidebar_pro"
                    alt=""
                  />
                </div>
                <p class="mb-0 mx-5 px-2 fs-7 text_light_opacity_iz">
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
                    <p class="mx-3 py-2 mb-0 text-start">
                      Malesuada dui sagittis platea dictumst suspendisse justo platea
                      lacus aenean fames.
                    </p>
                  </div>
                </div>
                <p class="mb-0 mx-5 px-2 fs-7 text_light_opacity_iz">11:59</p>
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
                      <i class="mx-2 fas fa-ellipsis-v" @click="reportModal2"></i>
                      <div id="report_modal_3">
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

                          <div
                            class="d-flex align-items-center justify-content-between"
                            @click="sideBar"
                          >
                            <p class="mb-0">Info</p>
                            <i class="pe-1 fas fa-info"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mx-3 text-start d-flex align-items-center py-2 pe-lg-5">
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
                      <p class="mb-0 ms-3">
                        References.zip <br class="d-lg-block d-none" />
                        Attached files
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
                <p class="mb-0 mx-5 px-2 fs-7 text_light_opacity_iz">
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
                    <p class="mx-3 mb-0 text-start py-2">
                      Thanks Man<i class="mx-2 text-warning far fa-thumbs-up"></i>
                    </p>
                  </div>
                </div>
                <p class="mb-0 mx-5 px-2 fs-7 text_light_opacity_iz">11:59</p>
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
                      <i class="mx-2 fas fa-ellipsis-v" @click="reportModal3"></i>
                      <div id="report_modal_4">
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

                          <div
                            class="d-flex align-items-center justify-content-between"
                            @click="sideBar"
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
                <p class="mb-0 mx-5 px-2 fs-7 text_light_opacity_iz">
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
                    <p class="mx-3 mb-0 text-start py-2">
                      Thanks Man<i class="mx-2 text-warning far fa-thumbs-up"></i>
                    </p>
                  </div>
                </div>
                <p class="mb-0 mx-5 px-2 fs-7 text_light_opacity_iz">11:59</p>
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
                  <i @click="reportModal4" class="mx-2 fas fa-ellipsis-v"></i>

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

                  <div
                    class="d-flex align-items-center justify-content-between"
                    @click="sideBar"
                  >
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
          </div>
          <!-- message box -->
          <div class="mx-3 my-2 d-flex align-items-top full_text_box ps-2 pt-4">
            <div class="write_msg me-3 w-75">
              <b-form-input
                class="form-control-5 text-dark"
                id="input"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                placeholder="Write a comment..."
                maxlength="200"
                style="400px"
              ></b-form-input>
            </div>
            <!-- message text icon -->
            <span class="mx-lg-2 mt-1 send_icon_bg">
              <i class="far fa-smile fs-4"></i>
            </span>
            <span class="mx-lg-2 mt-1 send_icon_bg">
              <i class="fas fa-image fs-4"></i>
            </span>
            <span class="mx-lg-2 mt-1 send_icon_bg_2" @click="show">
              <svg
                width="25"
                height="25"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.508902 0.16626C0.585763 0.107619 0.677808 0.0722135 0.774154 0.0642295C0.8705 0.0562455 0.967117 0.0760171 1.05258 0.121206L9.65832 4.67718C9.73969 4.72021 9.80779 4.78462 9.85529 4.86347C9.90278 4.94232 9.92788 5.03263 9.92788 5.12468C9.92788 5.21673 9.90278 5.30704 9.85529 5.38589C9.80779 5.46474 9.73969 5.52914 9.65832 5.57218L1.05258 10.1282C0.967167 10.1733 0.870604 10.1931 0.774299 10.1852C0.677995 10.1773 0.585973 10.1419 0.509105 10.0834C0.432237 10.0248 0.373734 9.94549 0.340508 9.85475C0.307282 9.76401 0.300722 9.66566 0.321601 9.57131L1.30974 5.12468L0.321601 0.678554C0.300653 0.584192 0.30716 0.485805 0.340351 0.395022C0.373542 0.30424 0.43203 0.224858 0.508902 0.16626V0.16626ZM2.2341 5.6309L1.54766 8.72035L7.38337 5.6309H2.2341ZM7.38337 4.61846H2.2341L1.54766 1.529L7.38337 4.61846Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
        </div>
        <!-- col-3 info  -->
        <div id="info_mess" style="display: none" class="col-12 col-lg-3 col-md-3">
          <div class="d-flex justify-content-center align-items-center">
            <div>
              <h1 class="mt-2 ms-5 ps-3 text-center fs-5 fw-bolder">Chat Info</h1>
            </div>
            <div class="text-end">
              <i class="py-3 ms-5 fs-4 px-3 fa fa-times" @click="sideBarhide"></i>
            </div>
          </div>
          <hr />
          <div class="d-flex justify-content-around">
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
            <p class="fw-bolder fs-6">Read</p>
            <p class="text-muted fs-7">Yesterday</p>
            <p class="fw-bolder fs-7">11:27 PM</p>
          </div>
          <div class="d-flex justify-content-around">
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
                  fill="#ccc"
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
            <p class="fw-bolder fs-6">Delivered</p>
            <p class="text-muted fs-7">Yesterday</p>
            <p class="fw-bolder fs-7">11:27 PM</p>
          </div>
        </div>
        <!-- col-3 profile  -->
        <div id="profile_sec" style="display: none" class="col-12 col-lg-3 col-md-3">
          <div class="row align-items-top">
            <div class="col-10 text-center ms-lg-3 d-block mt-3">
              <div>
                <img src="~assets/images/chat_40_pro.png" style="width: 40%" alt="" />
              </div>
              <p class="fs-5 fw-bolder mb-0">Mary Anther</p>
              <p class="fs-6 opacity-7-iz">@Maryanther</p>
            </div>
            <div class="d-flex col-1 justify-content-center mx-auto">
              <i class="py-3 opacity-7-iz fs-4 fa fa-times" @click="sidebar_pro"></i>
            </div>
          </div>
          <hr />
          <div class="mt-4">
            <h5 class="fs-5 pb-2 fw-bolder">Shared Files</h5>

            <div
              class="d-flex justify-content-start align-items-center bg-white rounded p-2"
            >
              <div class="ps-3">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 10 11"
                  fill="none"
                  class=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.1139 5.18336C0.87396 4.94946 0.68285 4.67024 0.551659 4.3619C0.420469 4.05356 0.351808 3.72224 0.349661 3.38716C0.347514 3.05208 0.411924 2.71991 0.539153 2.40991C0.666382 2.09992 0.853898 1.81827 1.09082 1.58131C1.32775 1.34435 1.60937 1.1568 1.91935 1.02952C2.22932 0.90225 2.56149 0.837794 2.89657 0.839893C3.23165 0.841993 3.56298 0.910606 3.87133 1.04175C4.17969 1.1729 4.45894 1.36397 4.69288 1.60388L8.27286 5.18285C8.41393 5.32389 8.52583 5.49132 8.60219 5.6756C8.67855 5.85988 8.71786 6.0574 8.71788 6.25687C8.71791 6.45635 8.67864 6.65387 8.60233 6.83817C8.52601 7.02247 8.41415 7.18993 8.27311 7.331C8.13208 7.47206 7.96465 7.58397 7.78036 7.66033C7.59608 7.73668 7.39857 7.776 7.19909 7.77602C6.99962 7.77604 6.8021 7.73678 6.6178 7.66046C6.4335 7.58415 6.26604 7.47228 6.12497 7.33125L2.546 3.75127C2.49575 3.70509 2.45537 3.64922 2.42726 3.58704C2.39916 3.52485 2.38391 3.45762 2.38245 3.3894C2.38099 3.32117 2.39334 3.25335 2.41875 3.19002C2.44417 3.12669 2.48213 3.06915 2.53035 3.02086C2.57857 2.97257 2.63606 2.93453 2.69935 2.90902C2.76265 2.88352 2.83045 2.87107 2.89868 2.87244C2.96691 2.8738 3.03416 2.88895 3.09639 2.91697C3.15861 2.94498 3.21453 2.98529 3.26078 3.03547L6.84077 6.61495C6.93624 6.70716 7.06411 6.75819 7.19684 6.75703C7.32957 6.75588 7.45654 6.70264 7.55039 6.60878C7.64425 6.51493 7.69749 6.38796 7.69864 6.25523C7.6998 6.1225 7.64877 5.99463 7.55656 5.89916L3.97759 2.31968C3.69276 2.03485 3.30645 1.87483 2.90364 1.87483C2.50084 1.87483 2.11453 2.03485 1.8297 2.31968C1.54487 2.6045 1.38486 2.99081 1.38486 3.39362C1.38486 3.79643 1.54487 4.18274 1.8297 4.46757L6.12497 8.76284C6.31343 8.95146 6.54823 9.08714 6.80576 9.15623C7.06329 9.22532 7.33447 9.22539 7.59203 9.15643C7.8496 9.08747 8.08447 8.95192 8.27303 8.7634C8.46159 8.57488 8.59719 8.34003 8.66619 8.08248C8.7014 7.95335 8.78631 7.84341 8.90236 7.77671C9.01841 7.71002 9.15615 7.69201 9.28545 7.72661C9.41475 7.76121 9.52508 7.84561 9.59232 7.96135C9.65955 8.07708 9.67821 8.21474 9.64421 8.3442C9.52929 8.77346 9.30339 9.16491 8.9892 9.47918C8.67502 9.79345 8.28363 10.0195 7.8544 10.1345C7.42516 10.2495 6.9732 10.2495 6.54397 10.1345C6.11474 10.0194 5.72335 9.79342 5.40918 9.47914L1.1139 5.18336V5.18336Z"
                    fill="black"
                  ></path>
                </svg>
              </div>

              <div class="ps-4">
                <p class="mb-0">
                  References.zip <br />
                  Attached files
                </p>
              </div>
            </div>
            <div
              class="d-flex justify-content-start mt-2 align-items-center bg-white p-2 rounded"
            >
              <div class="ps-3">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 10 11"
                  fill="none"
                  class=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.1139 5.18336C0.87396 4.94946 0.68285 4.67024 0.551659 4.3619C0.420469 4.05356 0.351808 3.72224 0.349661 3.38716C0.347514 3.05208 0.411924 2.71991 0.539153 2.40991C0.666382 2.09992 0.853898 1.81827 1.09082 1.58131C1.32775 1.34435 1.60937 1.1568 1.91935 1.02952C2.22932 0.90225 2.56149 0.837794 2.89657 0.839893C3.23165 0.841993 3.56298 0.910606 3.87133 1.04175C4.17969 1.1729 4.45894 1.36397 4.69288 1.60388L8.27286 5.18285C8.41393 5.32389 8.52583 5.49132 8.60219 5.6756C8.67855 5.85988 8.71786 6.0574 8.71788 6.25687C8.71791 6.45635 8.67864 6.65387 8.60233 6.83817C8.52601 7.02247 8.41415 7.18993 8.27311 7.331C8.13208 7.47206 7.96465 7.58397 7.78036 7.66033C7.59608 7.73668 7.39857 7.776 7.19909 7.77602C6.99962 7.77604 6.8021 7.73678 6.6178 7.66046C6.4335 7.58415 6.26604 7.47228 6.12497 7.33125L2.546 3.75127C2.49575 3.70509 2.45537 3.64922 2.42726 3.58704C2.39916 3.52485 2.38391 3.45762 2.38245 3.3894C2.38099 3.32117 2.39334 3.25335 2.41875 3.19002C2.44417 3.12669 2.48213 3.06915 2.53035 3.02086C2.57857 2.97257 2.63606 2.93453 2.69935 2.90902C2.76265 2.88352 2.83045 2.87107 2.89868 2.87244C2.96691 2.8738 3.03416 2.88895 3.09639 2.91697C3.15861 2.94498 3.21453 2.98529 3.26078 3.03547L6.84077 6.61495C6.93624 6.70716 7.06411 6.75819 7.19684 6.75703C7.32957 6.75588 7.45654 6.70264 7.55039 6.60878C7.64425 6.51493 7.69749 6.38796 7.69864 6.25523C7.6998 6.1225 7.64877 5.99463 7.55656 5.89916L3.97759 2.31968C3.69276 2.03485 3.30645 1.87483 2.90364 1.87483C2.50084 1.87483 2.11453 2.03485 1.8297 2.31968C1.54487 2.6045 1.38486 2.99081 1.38486 3.39362C1.38486 3.79643 1.54487 4.18274 1.8297 4.46757L6.12497 8.76284C6.31343 8.95146 6.54823 9.08714 6.80576 9.15623C7.06329 9.22532 7.33447 9.22539 7.59203 9.15643C7.8496 9.08747 8.08447 8.95192 8.27303 8.7634C8.46159 8.57488 8.59719 8.34003 8.66619 8.08248C8.7014 7.95335 8.78631 7.84341 8.90236 7.77671C9.01841 7.71002 9.15615 7.69201 9.28545 7.72661C9.41475 7.76121 9.52508 7.84561 9.59232 7.96135C9.65955 8.07708 9.67821 8.21474 9.64421 8.3442C9.52929 8.77346 9.30339 9.16491 8.9892 9.47918C8.67502 9.79345 8.28363 10.0195 7.8544 10.1345C7.42516 10.2495 6.9732 10.2495 6.54397 10.1345C6.11474 10.0194 5.72335 9.79342 5.40918 9.47914L1.1139 5.18336V5.18336Z"
                    fill="black"
                  ></path>
                </svg>
              </div>

              <div class="ps-4">
                <p class="mb-0">
                  References.zip <br />
                  Attached files
                </p>
              </div>
            </div>
            <h5 class="fs-5 fw-bolder pt-3">Photos</h5>

            <div class="d-flex justify-content-between gap-1">
              <div>
                <img src="~assets/images/g-1.png" class="img-fluid" alt="" />
              </div>
              <div>
                <img src="~assets/images/g-2.png" class="img-fluid" alt="" />
              </div>
              <div>
                <img src="~assets/images/g-3.png" class="img-fluid" alt="" />
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
  data() {
    return {
      modalShow: false,
    };
  },
};
</script>

<script>
export default {
  data: () => ({
    posts: [],
  }),
  methods: {
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
        // console.log(this.posts);
      }
    },

    async sideBar() {
      var x = document.getElementById("info_mess");
      if (x.style.display == "none") {
        document.getElementById("main_mess").classList.remove("col-lg-9");
        document.getElementById("main_mess").classList.add("col-lg-6");
        document.getElementById("info_mess").style.display = "block";
        // x.style.display = "block";
      } else {
        document.getElementById("main_mess").classList.remove("col-lg-6");
        document.getElementById("main_mess").classList.add("col-lg-9");
        x.style.display = "none";
      }
    },
    async sideBarhide() {
      var x = document.getElementById("info_mess");
      if (x.style.display == "none") {
        document.getElementById("main_mess").classList.remove("col-lg-9");
        document.getElementById("main_mess").classList.add("col-lg-6");
        document.getElementById("info_mess").style.display = "block";
        // x.style.display = "block";
      } else {
        document.getElementById("main_mess").classList.remove("col-lg-6");
        document.getElementById("main_mess").classList.add("col-lg-9");
        x.style.display = "none";
      }
    },
    async sidebar_pro() {
      var x = document.getElementById("profile_sec");
      if (x.style.display == "none") {
        document.getElementById("main_mess").classList.remove("col-lg-9");
        document.getElementById("main_mess").classList.add("col-lg-6");
        document.getElementById("profile_sec").style.display = "block";
        // x.style.display = "block";
      } else {
        document.getElementById("profile_sec").classList.remove("col-lg-6");
        document.getElementById("main_mess").classList.add("col-lg-9");
        x.style.display = "none";
      }
    },
    async reportModal() {
      if (document.getElementById("report_modal_2").style.display === "none") {
        document.getElementById("report_modal_2").style.display = "block";
      } else {
        document.getElementById("report_modal_2").style.display = "none";
      }
    },
    async reportModal2() {
      if (document.getElementById("report_modal_3").style.display === "none") {
        document.getElementById("report_modal_3").style.display = "block";
      } else {
        document.getElementById("report_modal_3").style.display = "none";
      }
    },
    async reportModal3() {
      if (document.getElementById("report_modal_4").style.display === "none") {
        document.getElementById("report_modal_4").style.display = "block";
      } else {
        document.getElementById("report_modal_4").style.display = "none";
      }
    },
    async reportModal4() {
      if (document.getElementById("report_modal_5").style.display === "none") {
        document.getElementById("report_modal_5").style.display = "block";
      } else {
        document.getElementById("report_modal_5").style.display = "none";
      }
    },
  },
};
</script>
