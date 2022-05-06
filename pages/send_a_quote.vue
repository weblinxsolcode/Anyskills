<template>
  <div>
    <Nav />
    <ServicesNav />

    <CreategigNav />

    <div class="container px-2 px-md-5 px-lg-5 mt-3 mb-5 pb-5">
      <div class="d-flex align-items-center">
        <NuxtLink to="/graphics_design_jobs">
          <p class="mb-0 gray">Graphic</p>
        </NuxtLink>
        <i class="fas fa-angle-right gray ms-2"></i>
        <p class="mb-0 ms-2 fw-bold text-muted">Logo Design</p>
      </div>

      <div class="d-flex align-items-center mt-3">
        <img src="~assets/images/Profile_Pic.png" width="40px" alt="" />
        <p class="mb-0 fw-bold ms-2">Victor Okoye</p>
        <div class="ms-3 ms-md-4 ms-lg-4 d-flex align-items-center">
          <img src="~assets/images/star.png" alt="" />
          <img src="~assets/images/star.png" alt="" />
          <img src="~assets/images/star.png" alt="" />
          <img src="~assets/images/star.png" alt="" />
          <img src="~assets/images/star.png" alt="" />
          <p class="mb-0 text-warning ms-2">
            5.0 <span class="gray">(43)</span>
          </p>
        </div>
      </div>

      <div
        class="d-flex align-items-center justify-content-center justify-content-lg-start flex-wrap mt-4"
      >
        <div class="d-flex align-items-center flex-wrap">
          <a href="#overview">
            <p
              class="fs-6 gig_details gig_detail_active pb-2 gig_detail_1"
              @click="tab('gig_detail_1')"
            >
              Overview
            </p>
          </a>
          <a href="#description">
            <p
              class="fs-6 gig_details pb-2 gig_detail_2"
              @click="tab('gig_detail_2')"
            >
              Description
            </p>
          </a>
          <a href="#seller">
            <p
              class="fs-6 gig_details pb-2 gig_detail_3"
              @click="tab('gig_detail_3')"
            >
              About The Buyer
            </p>
          </a>
          <a href="#recommend">
            <p
              class="fs-6 gig_details pb-2 gig_detail_5"
              @click="tab('gig_detail_5')"
            >
              Recommendations
            </p>
          </a>
          <a href="#reviews">
            <p
              class="fs-6 gig_details pb-2 gig_detail_6"
              @click="tab('gig_detail_6')"
            >
              Reviews
            </p>
          </a>
        </div>
      </div>
      <hr style="margin-top: -6px" />

      <VueSlickCarousel id="overview" class="logo_slide mt-5">
        <div class="logo_slide">
          <img src="~assets/images/gig1.png" alt="" />
        </div>
        <div class="logo_slide">
          <img src="~assets/images/gig1.png" alt="" />
        </div>
        <div class="logo_slide">
          <img src="~assets/images/gig1.png" alt="" />
        </div>
        <div class="logo_slide">
          <img src="~assets/images/gig1.png" alt="" />
        </div>
        <div class="logo_slide">
          <img src="~assets/images/gig1.png" alt="" />
        </div>
      </VueSlickCarousel>

      <div
        class="d-flex justify-content-between align-items-center align-items-lg-start flex-wrap mt-5"
      >
        <div class="d-flex align-items-center mt-3">
          <img src="~assets/images/Profile_Pic.png" width="40px" alt="" />
          <div>
            <p class="mb-0 fw-bold ms-2">Victor Okoye</p>
            <div class="ms-2 d-flex align-items-center">
              <img src="~assets/images/star.png" alt="" />
              <img src="~assets/images/star.png" alt="" />
              <img src="~assets/images/star.png" alt="" />
              <img src="~assets/images/star.png" alt="" />
              <img src="~assets/images/star.png" alt="" />
              <p class="mb-0 text-warning ms-2 fs-6">
                5.0 <span class="gray">(43)</span>
              </p>
            </div>
          </div>
        </div>

        <div class="d-flex align-items-start mt-3">
          <div class="d-flex align-items-center mx-2 for_pointer">
            <i class="fas fa-heart fs-5"></i>
            <p class="mb-0 ms-2">43</p>
          </div>
          <div class="d-flex align-items-center mx-2 for_pointer">
            <i class="far fa-eye fs-5"></i>
            <p class="mb-0 ms-2">300</p>
          </div>
        </div>

        <div class="d-flex align-items-start mt-3">
          <div class="mx-3 d-flex align-items-end flex-column">
            <i
              class="fas fa-ellipsis-h fs-4 for_pointer"
              @click="reportModal"
            ></i>
            <div id="report_modal">
              <div
                class="mb-2 d-flex justify-content-between align-items-center for_pointer"
              >
                <p class="mb-0 fs-6">Edit</p>
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.70679 0.293763C6.89426 0.481291 6.99957 0.735599 6.99957 1.00076C6.99957 1.26593 6.89426 1.52024 6.70679 1.70776L3.41379 5.00076H8.99979C11.1215 5.00076 13.1564 5.84362 14.6566 7.34391C16.1569 8.8442 16.9998 10.879 16.9998 13.0008V17.0008C16.9998 17.266 16.8944 17.5203 16.7069 17.7079C16.5194 17.8954 16.265 18.0008 15.9998 18.0008C15.7346 18.0008 15.4802 17.8954 15.2927 17.7079C15.1051 17.5203 14.9998 17.266 14.9998 17.0008V13.0008C14.9998 11.4095 14.3676 9.88334 13.2424 8.75812C12.1172 7.6329 10.5911 7.00076 8.99979 7.00076H3.41379L6.70679 10.2938C6.88894 10.4824 6.98974 10.735 6.98746 10.9972C6.98518 11.2594 6.88001 11.5102 6.6946 11.6956C6.5092 11.881 6.25838 11.9862 5.99619 11.9884C5.73399 11.9907 5.48139 11.8899 5.29279 11.7078L0.292786 6.70776C0.105315 6.52024 0 6.26593 0 6.00076C0 5.7356 0.105315 5.48129 0.292786 5.29376L5.29279 0.293763C5.48031 0.106292 5.73462 0.000976562 5.99979 0.000976562C6.26495 0.000976562 6.51926 0.106292 6.70679 0.293763V0.293763Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div
                class="mb-2 d-flex justify-content-between align-items-center for_pointer"
              >
                <p class="mb-0 fs-6">Delete</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.2932 3.2928C14.1057 3.48034 14.0004 3.73466 14.0004 3.99984C14.0004 4.26501 14.1057 4.51933 14.2932 4.70687L17.5862 8.00003H12.0002C9.87848 8.00003 7.84365 8.84293 6.34336 10.3433C4.84307 11.8437 4.00021 13.8786 4.00021 16.0004V20.0006C4.00021 20.2658 4.10557 20.5202 4.29311 20.7078C4.48064 20.8953 4.735 21.0007 5.00021 21.0007C5.26543 21.0007 5.51978 20.8953 5.70732 20.7078C5.89486 20.5202 6.00021 20.2658 6.00021 20.0006V16.0004C6.00021 14.409 6.63235 12.8828 7.75757 11.7576C8.88279 10.6323 10.4089 10.0001 12.0002 10.0001H17.5862L14.2932 13.2933C14.1111 13.4819 14.0103 13.7345 14.0125 13.9967C14.0148 14.2589 14.12 14.5098 14.3054 14.6952C14.4908 14.8806 14.7416 14.9858 15.0038 14.988C15.266 14.9903 15.5186 14.8895 15.7072 14.7074L20.7072 9.70711C20.8947 9.51958 21 9.26526 21 9.00008C21 8.7349 20.8947 8.48058 20.7072 8.29304L15.7072 3.2928C15.5197 3.10532 15.2654 3 15.0002 3C14.735 3 14.4807 3.10532 14.2932 3.2928Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div
                class="d-flex justify-content-between align-items-center for_pointer"
              >
                <p class="mb-0 fs-6">Mark as inactiive</p>
                <i class="far fa-clone ms-4"></i>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center mx-2 for_pointer">
            <i class="dark_green fas fa-share-alt fs-5"></i>
            <p class="mb-0 ms-2 fw-bold">share</p>
          </div>
        </div>
      </div>

      <div
        class="d-flex justify-content-center justify-content-lg-between align-items-start flex-wrap mt-5"
        id="description"
      >
        <div class="mt-5 mx-2">
          <p class="fs-4 fw-bold">Comic Designs illustrations</p>
          <div class="mt-3">
            <p class="fw-bold">Job Description</p>
            <p class="fs-6 text-muted">
              Do you want some Anime & Japanese looks streetwear <br />
              t-shirts designs that will sell ?
            </p>
          </div>
          <p class="m-0 fw-bolder">Features</p>
          <div class="pt-1">
            <nav class="nav1">
              <label for="touch1"
                ><span class="Drop_head">
                  <div class="d-flex">
                    <div>
                      <i class="fas fa-angle-right mx-1"></i>
                    </div>
                    1 Initial concept
                  </div>
                </span></label
              >
              <input type="checkbox" id="touch1" />

              <ul class="slide px-4 mb-0">
                <li>Double Sketch</li>
              </ul>
            </nav>
            <nav class="nav1">
              <label for="touch2"
                ><span class="Drop_head">
                  <div class="d-flex">
                    <div>
                      <i class="fas fa-angle-right mx-1" id="r1"></i>
                      <i class="fas fa-angle-down mx-1 d-none" id="d1"></i>
                    </div>
                    Source File
                  </div>
                </span></label
              >
              <input type="checkbox" id="touch2" />

              <ul class="slide px-4 mb-0">
                <li>Double Sketch</li>
              </ul>
            </nav>
            <nav class="nav1">
              <label for="touch3"
                ><span class="Drop_head"
                  ><i class="fas fa-angle-right mx-1"></i>
                  High Resolution
                </span></label
              >
              <input type="checkbox" id="touch3" />

              <ul class="slide px-4 mb-0">
                <li>Double Sketch</li>
              </ul>
            </nav>
            <nav class="nav1">
              <label for="touch4"
                ><span class="Drop_head"
                  ><i class="fas fa-angle-right mx-1"></i>
                  Enhanced Detailing
                </span></label
              >
              <input type="checkbox" id="touch4" />

              <ul class="slide px-4 mb-0">
                <li>Double Sketch</li>
              </ul>
            </nav>
            <nav class="nav1">
              <label for="touch5"
                ><span class="Drop_head"
                  ><i class="fas fa-angle-right mx-1"></i>
                  Commercial Use
                </span></label
              >
              <input type="checkbox" id="touch5" />

              <ul class="slide px-4 mb-0">
                <li>Double Sketch</li>
              </ul>
            </nav>
          </div>
          <p class="fw-bold mb-0 mt-3">Job Category</p>
          <p class="fs-6">Design</p>
          <p class="fw-bold mb-0 mt-3">Location</p>
          <p class="fs-6">Nigeria</p>
          <p class="fw-bold mb-0 mt-3">Delivery Option</p>
          <p class="fs-6">Online</p>
          <p class="fw-bold mb-0 mt-3">Delivery Date</p>
          <p class="fs-6">18 Aug, 2021 - 30 Aug, 2021</p>
          <div class="d-flex align-items-center flex-wrap">
            <div class="rounded-pill deliver_time m-1">
              <p class="mb-0 fs-7">Mon | 9:00am - 22:00pm</p>
            </div>
            <div class="rounded-pill deliver_time m-1">
              <p class="mb-0 fs-7">Tues | 9:00am - 22:00pm</p>
            </div>
            <div class="rounded-pill deliver_time m-1">
              <p class="mb-0 fs-7">Wed | 9:00am - 22:00pm</p>
            </div>
          </div>
        </div>

        <div class="mt-5" style="width: 19rem">
          <div class="for_shadow">
            <div class="d-flex justify-content-around align-items-start">
              <div class="text-start">
                <p class="mb-1 fs-6 fw-bold text-danger">Budget:</p>
                <p class="fw-bold fs-5">$933.00</p>
              </div>
              <div>
                <p class="mb-0 fw-bold">Ends in</p>
                <div class="d-flex justify-content-around align-items-center">
                  <div class="text-center mx-1">
                    <p class="mb-0 fw-bold fs-4">23</p>
                    <p class="fs-7 text-muted">Days</p>
                  </div>
                  <div class="text-center mx-1">
                    <p class="mb-0 fw-bold fs-4">15</p>
                    <p class="fs-7 text-muted">Hours</p>
                  </div>
                  <div class="text-center mx-1">
                    <p class="mb-0 fw-bold fs-4">20</p>
                    <p class="fs-7 text-muted">Minutes</p>
                  </div>
                  <div class="text-center mx-1">
                    <p class="mb-0 fw-bold fs-4">59</p>
                    <p class="fs-7 text-muted">Seconds</p>
                  </div>
                </div>
              </div>
            </div>
            <button class="pay mt-3" v-b-modal.modal-sm.modal-center-1>
              Send a Quote
            </button>
            <b-modal
              id="modal-center-1"
              title="Send a quote"
              centered
              size="sm"
            >
              <div class="form-group mx-2 pb-3">
                <label for="exampleFormControlInput3" class="fw-bold mb-3"
                  >Budget Amount</label
                >
                <input
                  type="email"
                  class="form-control px-4 form-control-2"
                  id="exampleFormControlInput3"
                  placeholder="Amount"
                />
              </div>
              <p class="green my-3 mx-2" v-b-modal.modal-sm.modal-center-2>
                Advance Quote
                <i
                  class="fas fa-info-circle gray ms-3"
                  v-b-tooltip.hover
                  title="Tooltip directive content"
                ></i>
              </p>
              <hr />
              <button class="pay_btn my-3">Send Quote</button>
              <button class="for_cancel" type="button">cancel</button>
            </b-modal>
            <b-modal
              id="modal-center-2"
              title="Send advance quote"
              centered
              size="sm"
            >
              <div class="form-group mx-2 pb-3">
                <label for="exampleFormControlInput1" class="fw-bold mb-3"
                  >Budget Type</label
                >
                <select
                  class="form-select form-control-2"
                  aria-label="Default select example"
                >
                  <option class="px-4" selected>Select a category</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div class="form-group mx-2 py-3">
                <label for="exampleFormControlInput3" class="fw-bold my-3"
                  >Budget Amount</label
                >
                <input
                  type="email"
                  class="form-control px-4 form-control-2"
                  id="exampleFormControlInput3"
                  placeholder="Amount"
                />
              </div>
              <div
                class="form-group d-flex justify-content-between flex-wrap mx-2 pt-3"
              >
                <div class="d-flex justify-content-center align-items-center">
                  <label class="fw-bold">Features</label>
                  <i class="fas fa-info-circle gray mx-2" v-b-tooltip.hover title="Tooltip directive content"></i>
                </div>
              </div>
              <div class="form-group mx-2 py-2">
                <div class="d-flex mb-0">
                  <label class="fw-light fs-6"
                    >Features List |<span class="gray mx-2"
                      >Click on a feature to add tasks</span
                    ></label
                  >
                </div>
              </div>
              <div class="d-flex flex-wrap">
                <span
                  class="Feature_tab justify-content-center align-items-center mx-1 mt-2"
                >
                  <p class="mb-0">
                    Designs <Span class="gray mx-1"> ($60)</Span>
                    <i
                      class="far fa-times-circle mx-1"
                      style="cursor: pointer"
                    ></i>
                  </p>
                </span>
                <span
                  class="Feature_tab justify-content-center align-items-center mx-1 mt-2"
                >
                  <p class="mb-0">
                    Revisions <Span class="gray mx-1">($10)</Span>
                    <i
                      class="far fa-times-circle mx-1"
                      style="cursor: pointer"
                    ></i>
                  </p>
                </span>
                <span
                  class="Feature_tab justify-content-center align-items-center mx-1 mt-2"
                >
                  <p class="mb-0">
                    Enhanced Detailing <Span class="gray mx-1"> ($45)</Span>
                    <i
                      class="far fa-times-circle mx-1"
                      style="cursor: pointer"
                    ></i>
                  </p>
                </span>
                <span
                  class="Feature_tab justify-content-center align-items-center mx-1 mt-2"
                  v-for="post of posts"
                  :key="post"
                >
                  <p class="mb-0">
                    {{ post.name }}
                    <Span class="gray mx-1"> ({{ post.cost }})</Span>
                    <i
                      @click="del(post.id)"
                      class="far fa-times-circle mx-1"
                      style="cursor: pointer"
                    ></i>
                  </p>
                </span>
              </div>
              <hr />
              <div class="d-flex justify-content-end align-items-center">
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
                  >Add new Feature</label
                >
              </div>
              <button class="pay_btn my-3">Send Quote</button>
              <button class="for_cancel" type="button">cancel</button>
            </b-modal>
          </div>
          <p class="mb-0 fw-bold mt-3">Participants</p>
          <div>
            <div class="participants for_shadow mt-3">
              <div class="dropbtn">
                <div class="d-flex align-items-center">
                  <img
                    src="~assets/images/Profile_Pic.png"
                    width="40px"
                    alt=""
                  />
                  <div>
                    <p class="mb-0 fw-bold ms-2">Victor Okoye</p>
                    <p class="mb-0 fs-7 gray ms-2">Oct 8, 2021 at 10:44am</p>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="text-end">
                    <p class="mb-0 fw-bold">$320</p>
                    <p class="mb-0 gray fs-7">Budget: $933.00</p>
                  </div>
                  <i class="fas fa-angle-right mx-2"></i>
                </div>
              </div>
              <div class="participants_content">
                <p class="fs-7">Features</p>
                <div class="d-flex align-items-center flex-wrap">
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Sketches</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Research work</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Research work</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Basic Sketches</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Designs</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Road Maps</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">arts</p>
                  </div>
                </div>
                <div
                  class="mt-3 d-flex justify-content-around align-items-center"
                >
                  <button class="search">Accept Bid</button>
                  <button class="black_btn">Cancel</button>
                </div>
              </div>
            </div>
            <div class="participants for_shadow mt-3">
              <div class="dropbtn">
                <div class="d-flex align-items-center">
                  <img
                    src="~assets/images/Profile_Pic.png"
                    width="40px"
                    alt=""
                  />
                  <div>
                    <p class="mb-0 fw-bold ms-2">Victor Okoye</p>
                    <p class="mb-0 fs-7 gray ms-2">Oct 8, 2021 at 10:44am</p>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="text-end">
                    <p class="mb-0 fw-bold">$320</p>
                    <p class="mb-0 gray fs-7">Budget: $933.00</p>
                  </div>
                  <i class="fas fa-angle-right mx-2"></i>
                </div>
              </div>
              <div class="participants_content">
                <p class="fs-7">Features</p>
                <div class="d-flex align-items-center flex-wrap">
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Sketches</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Research work</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Research work</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Basic Sketches</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Designs</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Road Maps</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">arts</p>
                  </div>
                </div>
                <div
                  class="mt-3 d-flex justify-content-around align-items-center"
                >
                  <button class="search">Accept Bid</button>
                  <button class="black_btn">Cancel</button>
                </div>
              </div>
            </div>
            <div class="participants for_shadow mt-3">
              <div class="dropbtn">
                <div class="d-flex align-items-center">
                  <img
                    src="~assets/images/Profile_Pic.png"
                    width="40px"
                    alt=""
                  />
                  <div>
                    <p class="mb-0 fw-bold ms-2">Victor Okoye</p>
                    <p class="mb-0 fs-7 gray ms-2">Oct 8, 2021 at 10:44am</p>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="text-end">
                    <p class="mb-0 fw-bold">$320</p>
                    <p class="mb-0 gray fs-7">Budget: $933.00</p>
                  </div>
                  <i class="fas fa-angle-right mx-2"></i>
                </div>
              </div>
              <div class="participants_content">
                <p class="fs-7">Features</p>
                <div class="d-flex align-items-center flex-wrap">
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Sketches</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Research work</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Research work</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Basic Sketches</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Designs</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Road Maps</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">arts</p>
                  </div>
                </div>
                <div
                  class="mt-3 d-flex justify-content-around align-items-center"
                >
                  <button class="search">Accept Bid</button>
                  <button class="black_btn">Cancel</button>
                </div>
              </div>
            </div>
            <div class="participants for_shadow mt-3">
              <div class="dropbtn">
                <div class="d-flex align-items-center">
                  <img
                    src="~assets/images/Profile_Pic.png"
                    width="40px"
                    alt=""
                  />
                  <div>
                    <p class="mb-0 fw-bold ms-2">Victor Okoye</p>
                    <p class="mb-0 fs-7 gray ms-2">Oct 8, 2021 at 10:44am</p>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="text-end">
                    <p class="mb-0 fw-bold">$320</p>
                    <p class="mb-0 gray fs-7">Budget: $933.00</p>
                  </div>
                  <i class="fas fa-angle-right mx-2"></i>
                </div>
              </div>
              <div class="participants_content">
                <p class="fs-7">Features</p>
                <div class="d-flex align-items-center flex-wrap">
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Sketches</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Research work</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Research work</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Basic Sketches</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Designs</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Road Maps</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">arts</p>
                  </div>
                </div>
                <div
                  class="mt-3 d-flex justify-content-around align-items-center"
                >
                  <button class="search">Accept Bid</button>
                  <button class="black_btn">Cancel</button>
                </div>
              </div>
            </div>
            <div class="participants for_shadow mt-3">
              <div class="dropbtn">
                <div class="d-flex align-items-center">
                  <img
                    src="~assets/images/Profile_Pic.png"
                    width="40px"
                    alt=""
                  />
                  <div>
                    <p class="mb-0 fw-bold ms-2">Victor Okoye</p>
                    <p class="mb-0 fs-7 gray ms-2">Oct 8, 2021 at 10:44am</p>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="text-end">
                    <p class="mb-0 fw-bold">$320</p>
                    <p class="mb-0 gray fs-7">Budget: $933.00</p>
                  </div>
                  <i class="fas fa-angle-right mx-2"></i>
                </div>
              </div>
              <div class="participants_content">
                <p class="fs-7">Features</p>
                <div class="d-flex align-items-center flex-wrap">
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Sketches</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Research work</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Research work</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Basic Sketches</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Designs</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Road Maps</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">arts</p>
                  </div>
                </div>
                <div
                  class="mt-3 d-flex justify-content-around align-items-center"
                >
                  <button class="search">Accept Bid</button>
                  <button class="black_btn">Cancel</button>
                </div>
              </div>
            </div>
            <div class="participants for_shadow mt-3">
              <div class="dropbtn">
                <div class="d-flex align-items-center">
                  <img
                    src="~assets/images/Profile_Pic.png"
                    width="40px"
                    alt=""
                  />
                  <div>
                    <p class="mb-0 fw-bold ms-2">Victor Okoye</p>
                    <p class="mb-0 fs-7 gray ms-2">Oct 8, 2021 at 10:44am</p>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="text-end">
                    <p class="mb-0 fw-bold">$320</p>
                    <p class="mb-0 gray fs-7">Budget: $933.00</p>
                  </div>
                  <i class="fas fa-angle-right mx-2"></i>
                </div>
              </div>
              <div class="participants_content">
                <p class="fs-7">Features</p>
                <div class="d-flex align-items-center flex-wrap">
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Sketches</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Research work</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Research work</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Basic Sketches</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Designs</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Road Maps</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">arts</p>
                  </div>
                </div>
                <div
                  class="mt-3 d-flex justify-content-around align-items-center"
                >
                  <button class="search">Accept Bid</button>
                  <button class="black_btn">Cancel</button>
                </div>
              </div>
            </div>
            <div class="participants for_shadow mt-3">
              <div class="dropbtn">
                <div class="d-flex align-items-center">
                  <img
                    src="~assets/images/Profile_Pic.png"
                    width="40px"
                    alt=""
                  />
                  <div>
                    <p class="mb-0 fw-bold ms-2">Victor Okoye</p>
                    <p class="mb-0 fs-7 gray ms-2">Oct 8, 2021 at 10:44am</p>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="text-end">
                    <p class="mb-0 fw-bold">$320</p>
                    <p class="mb-0 gray fs-7">Budget: $933.00</p>
                  </div>
                  <i class="fas fa-angle-right mx-2"></i>
                </div>
              </div>
              <div class="participants_content">
                <p class="fs-7">Features</p>
                <div class="d-flex align-items-center flex-wrap">
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Sketches</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Research work</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Research work</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Basic Sketches</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Designs</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">Road Maps</p>
                  </div>
                  <div class="rounded-pill deliver_time px-2 py-1 m-1">
                    <p class="mb-0 fs-7">arts</p>
                  </div>
                </div>
                <div
                  class="mt-3 d-flex justify-content-around align-items-center"
                >
                  <button class="search">Accept Bid</button>
                  <button class="black_btn">Cancel</button>
                </div>
              </div>
            </div>
          </div>

          <div class="container mt-5">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a class="page-link m-1 py-1 px-2 prev"
                    ><i class="fas fa-angle-left text-white"></i
                  ></a>
                </li>
                <div class="pages">
                  <li class="page-item m-1">
                    <a class="page-link py-1 px-2" href="#">1</a>
                  </li>
                  <li class="page-item m-1">
                    <a class="page-link py-1 px-2" href="#">2</a>
                  </li>
                  <li class="page-item m-1">
                    <a class="page-link py-1 px-2" href="#">...</a>
                  </li>
                  <li class="page-item m-1">
                    <a class="page-link py-1 px-2" href="#">9</a>
                  </li>
                  <li class="page-item m-1">
                    <a class="page-link py-1 px-2" href="#">10</a>
                  </li>
                </div>
                <li class="page-item">
                  <a class="page-link m-1 next py-1 px-2"
                    ><i class="fas fa-angle-right text-white"></i
                  ></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div class="mx-3 mt-5" id="seller">
        <p class="fw-bold">About The Buyer</p>
        <div
          class="d-flex justify-content-center justify-content-lg-start align-items-start"
        >
          <img src="~assets/images/Victor.png" alt="" />
          <div class="ms-2">
            <p class="mb-0 fw-bold">Victor Okoye</p>
            <p class="mb-1 fs-6">Graphic Designer</p>
            <div class="d-flex justify-content-start align-items-center">
              <img src="~assets/images/star.png" alt="" />
              <p class="text-warning ms-2 mb-0">5.0</p>
            </div>
            <button class="mt-2 click_btn">Go to profile</button>
          </div>
        </div>
      </div>

      <p class="fw-bold mt-5 mx-3" id="recommend">Recommended For You</p>
      <div
        class="recommendations mx-3 justify-content-md-start justify-content-lg-start"
      >
        <div class="card gigs" style="width: 15rem">
          <img src="~assets/images/job1.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <p class="card-title fw-bold mb-0">John Creta</p>

              <div class="d-flex justify-content-center align-items-center">
                <i class="fas fa-share-alt"></i>
              </div>
            </div>
            <div
              class="mt-3 card-text d-flex justify-content-start align-items-center"
            >
              <i class="fas fa-heart"></i>
              <p class="fw-bold ms-2 mb-0">43</p>
              <i class="far fa-eye ms-3"></i>
              <p class="fw-bold ms-2 mb-0">300</p>
              <i class="fas fa-info-circle ms-3"></i>
            </div>
            <hr style="width: 100%" />
            <div
              class="mb-0 mt-3 d-flex justify-content-end align-items-center"
            >
              <p class="mb-0 text-danger">Budget :</p>
              <p class="fw-bold ms-2 mb-0">$23</p>
            </div>
          </div>
        </div>

        <div class="card gigs" style="width: 15rem">
          <img src="~assets/images/job2.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <p class="card-title fw-bold mb-0">John Creta</p>

              <div class="d-flex justify-content-center align-items-center">
                <i class="fas fa-share-alt"></i>
              </div>
            </div>
            <div
              class="mt-3 card-text d-flex justify-content-start align-items-center"
            >
              <i class="fas fa-heart"></i>
              <p class="fw-bold ms-2 mb-0">43</p>
              <i class="far fa-eye ms-3"></i>
              <p class="fw-bold ms-2 mb-0">300</p>
              <i class="fas fa-info-circle ms-3"></i>
            </div>
            <hr style="width: 100%" />
            <div
              class="mb-0 mt-3 d-flex justify-content-end align-items-center"
            >
              <p class="mb-0 text-danger">Budget :</p>
              <p class="fw-bold ms-2 mb-0">$23</p>
            </div>
          </div>
        </div>

        <div class="card gigs" style="width: 15rem">
          <img src="~assets/images/job3.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <p class="card-title fw-bold mb-0">John Creta</p>

              <div class="d-flex justify-content-center align-items-center">
                <i class="fas fa-share-alt"></i>
              </div>
            </div>
            <div
              class="mt-3 card-text d-flex justify-content-start align-items-center"
            >
              <i class="fas fa-heart"></i>
              <p class="fw-bold ms-2 mb-0">43</p>
              <i class="far fa-eye ms-3"></i>
              <p class="fw-bold ms-2 mb-0">300</p>
              <i class="fas fa-info-circle ms-3"></i>
            </div>
            <hr style="width: 100%" />
            <div
              class="mb-0 mt-3 d-flex justify-content-end align-items-center"
            >
              <p class="mb-0 text-danger">Budget :</p>
              <p class="fw-bold ms-2 mb-0">$23</p>
            </div>
          </div>
        </div>

        <div class="card gigs" style="width: 15rem">
          <img src="~assets/images/gig4.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <p class="card-title fw-bold mb-0">John Creta</p>

              <div class="d-flex justify-content-center align-items-center">
                <i class="fas fa-share-alt"></i>
              </div>
            </div>
            <div
              class="mt-3 card-text d-flex justify-content-start align-items-center"
            >
              <i class="fas fa-heart"></i>
              <p class="fw-bold ms-2 mb-0">43</p>
              <i class="far fa-eye ms-3"></i>
              <p class="fw-bold ms-2 mb-0">300</p>
              <i class="fas fa-info-circle ms-3"></i>
            </div>
            <hr style="width: 100%" />
            <div
              class="mb-0 mt-3 d-flex justify-content-end align-items-center"
            >
              <p class="mb-0 text-danger">Budget :</p>
              <p class="fw-bold ms-2 mb-0">$23</p>
            </div>
          </div>
        </div>
      </div>

      <div id="reviews" class="mx-3 mt-5">
        <p class="fw-bold">Reviews</p>
        <div class="d-flex justify-content-between flex-wrap">
          <div class="d-flex align-items-start">
            <p class="me-3 mb-0">300 Reviews</p>
            <img src="~assets/images/star.png" alt="" />
            <img src="~assets/images/star.png" alt="" />
            <img src="~assets/images/star.png" alt="" />
            <img src="~assets/images/star.png" alt="" />
            <img src="~assets/images/star.png" alt="" />
            <p class="text-warning ms-2 mb-0">4.9</p>
          </div>

          <div class="d-flex">
            <p class="fs-6 mb-0">Sort By</p>
            <select class="fs-6 ms-2 sorting">
              <option name="Most relevant" id="">Most relevant</option>
              <option name="Popularity" id="">Popularity</option>
              <option name="Date & Time" id="">Date & Time</option>
            </select>
          </div>
        </div>

        <div
          class="d-flex align-items-start justify-content-center justify-content-md-center justify-content-lg-start flex-wrap mt-4"
        >
          <div>
            <div class="profile_star">
              <p class="mb-0 text-info">5 Stars</p>
              <b-progress
                height="7px"
                :value="value"
                :max="max"
                class="mx-1"
              ></b-progress>
              <p class="mb-0 text-info">(200)</p>
            </div>
            <div class="profile_star">
              <p class="mb-0 text-info">4 Stars</p>
              <b-progress
                height="7px"
                :value="value2"
                :max="max"
                class="mx-1"
              ></b-progress>
              <p class="mb-0 text-info">(50)</p>
            </div>
            <div class="profile_star">
              <p class="mb-0 text-info">3 Stars</p>
              <b-progress
                height="7px"
                :value="value3"
                :max="max"
                class="mx-1"
              ></b-progress>
              <p class="mb-0 text-info">(30)</p>
            </div>
            <div class="profile_star">
              <p class="mb-0 text-info">2 Stars</p>
              <b-progress
                height="7px"
                :value="value4"
                :max="max"
                class="mx-1"
              ></b-progress>
              <p class="mb-0 text-info">(16)</p>
            </div>
            <div class="profile_star">
              <p class="mb-0 text-info">1 Stars</p>
              <b-progress
                height="7px"
                :value="value5"
                :max="max"
                class="mx-2"
              ></b-progress>
              <p class="mb-0 text-info">(4)</p>
            </div>
          </div>

          <div class="ms-0 ms-md-3 ms-lg-5 mt-4 mt-md-0 mt-lg-0">
            <p class="fw-bold">Rating Breakdown</p>
            <div class="rating_breakdown">
              <div class="rating_breakdowns gray fs-6">
                <p>Seller communication</p>
                <div class="d-flex align-items-start">
                  <p>4.9</p>
                  <img class="mt-1 ms-1" src="~assets/images/star.png" alt="" />
                </div>
              </div>
              <div class="rating_breakdowns gray fs-6">
                <p>Recommend to a friend</p>
                <div class="d-flex align-items-start">
                  <p>4.6</p>
                  <img class="mt-1 ms-1" src="~assets/images/star.png" alt="" />
                </div>
              </div>
              <div class="rating_breakdowns gray fs-6">
                <p>Service as described</p>
                <div class="d-flex align-items-start">
                  <p>4.7</p>
                  <img class="mt-1 ms-1" src="~assets/images/star.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex align-items-center mt-4">
          <label class="switch fs-6 me-2 mb-2 mb-lg-0">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <p class="mb-0 fs-6">Show only reviews with delivery images (32)</p>
        </div>
      </div>

      <hr />

      <div class="d-flex justify-content-between align-items-start mt-4">
        <div class="d-flex justify-content-center align-items-center">
          <img src="~assets/images/Victor.png" alt="" />
          <div class="ms-2">
            <p class="mb-0 fw-bold">Prodigy Dan</p>
            <p class="mb-1 fs-6">Abuja, Nigeria</p>
            <div class="d-flex justify-content-start align-items-center">
              <img src="~assets/images/star.png" alt="" />
              <p class="text-warning ms-2 mb-0">5.0</p>
            </div>
          </div>
        </div>
        <p class="mb-0 gray">1 week ago</p>
      </div>
      <p class="text-muted mx-3 mt-2">
        Gotta hand it to gusjafar, they really know how to make a design fleshed
        out and look excellent! Enjoyed working with them along the way, and
        would recommend them to anyone looking for a unique design for their own
        clothing.
      </p>

      <hr />

      <div class="d-flex justify-content-between align-items-start mt-4">
        <div class="d-flex justify-content-center align-items-center">
          <img src="~assets/images/Victor.png" alt="" />
          <div class="ms-2">
            <p class="mb-0 fw-bold">Prodigy Dan</p>
            <p class="mb-1 fs-6">Abuja, Nigeria</p>
            <div class="d-flex justify-content-start align-items-center">
              <img src="~assets/images/star.png" alt="" />
              <p class="text-warning ms-2 mb-0">5.0</p>
            </div>
          </div>
        </div>
        <p class="mb-0 gray">1 week ago</p>
      </div>
      <p class="text-muted mx-3 mt-2">
        Gotta hand it to gusjafar, they really know how to make a design fleshed
        out and look excellent! Enjoyed working with them along the way, and
        would recommend them to anyone looking for a unique design for their own
        clothing.
      </p>
    </div>

    <Footer />
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
      value: 23,
      max: 50,
      value2: 11,
      value3: 8,
      value4: 5,
      value5: 3,
      settings: {
        arrows: true,
        dots: false,
        slidesToShow: 1,
      },
    };
  },
  methods: {
    tab(ele) {
      document.querySelectorAll(".gig_details").forEach((element) => {
        element.classList.remove("gig_detail_active");
      });
      document.querySelector("." + ele).classList.add("gig_detail_active");
    },
    async reportModal() {
      if (document.getElementById("report_modal").style.display === "none") {
        document.getElementById("report_modal").style.display = "block";
      } else {
        document.getElementById("report_modal").style.display = "none";
      }
    },
  },
};
</script>
