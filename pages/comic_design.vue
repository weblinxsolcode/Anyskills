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
        class="d-flex justify-content-between align-items-start flex-wrap mt-5"
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

        <div class="d-flex mt-3">
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
            <i class="fas fa-ellipsis-h fs-4 for_pointer" @click="reportModal"></i>
            <div id="report_modal">
              <div
                class="mb-2 d-flex justify-content-between align-items-center for_pointer"
              >
                <p class="mb-0 fs-6">Report</p>
                <i class="fas fa-flag"></i>
              </div>
              <div class="d-flex justify-content-between align-items-center for_pointer">
                <p class="mb-0 fs-6">
                  Mark as <br />
                  inappropraite
                </p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="ms-3"
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
          <div
            class="for_shadow d-flex justify-content-around align-items-start"
          >
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
