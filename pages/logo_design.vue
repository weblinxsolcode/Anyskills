<template>
  <div>
    <Nav />
    <ServicesNav />

    <CreategigNav />

    <div class="container px-4 mt-3">
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
        <span class="vl_gray mx-2 ms-lg-3"></span>
        <div class="ms-3 ms-md-4 ms-lg-2 d-flex align-items-center">
          <img src="~assets/images/star.png" alt="" />
          <img src="~assets/images/star.png" alt="" />
          <img src="~assets/images/star.png" alt="" />
          <img src="~assets/images/star.png" alt="" />
          <img src="~assets/images/star.png" alt="" />
          <p class="mb-0 text-warning ms-2">5.0 <span class="gray">(43)</span></p>
        </div>
      </div>

      <div
        class="d-flex align-items-center justify-content-center justify-content-lg-between flex-wrap mt-4"
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
            <p class="fs-6 gig_details pb-2 gig_detail_2" @click="tab('gig_detail_2')">
              Description
            </p>
          </a>
          <a href="#seller">
            <p class="fs-6 gig_details pb-2 gig_detail_3" @click="tab('gig_detail_3')">
              About The Seller
            </p>
          </a>
          <a href="#compare">
            <p class="fs-6 gig_details pb-2 gig_detail_4" @click="tab('gig_detail_4')">
              Compare Packages
            </p>
          </a>
          <a href="#recommend">
            <p class="fs-6 gig_details pb-2 gig_detail_5" @click="tab('gig_detail_5')">
              Recommendations
            </p>
          </a>
          <a href="#reviews">
            <p class="fs-6 gig_details pb-2 gig_detail_6" @click="tab('gig_detail_6')">
              Reviews
            </p>
          </a>
        </div>
        <div
          class="d-flex align-items-center justify-content-center flex-wrap my-3 my-lg-0"
        >
          <div class="gray d-flex align-items-center mx-2 for_pointer">
            <i class="fas fa-heart fs-5"></i>
            <p class="mb-0 ms-2">43</p>
          </div>
          <div class="gray d-flex align-items-center mx-2 for_pointer">
            <i class="far fa-eye fs-5"></i>
            <p class="mb-0 ms-2">300</p>
          </div>
          <div class="gray d-flex align-items-center mx-2 for_pointer">
            <i class="fas fa-flag fs-5"></i>
          </div>
          <div class="gray d-flex align-items-center mx-2 for_pointer">
            <svg
              width="30"
              height="21"
              viewBox="0 0 32 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.107 20.1662H24.0156V15.5291H19.3786V12.4378H24.0156V7.8007H27.107V12.4378H31.7441V15.5291H27.107V20.1662ZM16.2872 15.5291H0.830322V12.4378H16.2872V15.5291ZM20.9243 9.34639H0.830322V6.25501H20.9243V9.34639ZM20.9243 3.16364H0.830322V0.0722656H20.9243V3.16364Z"
                fill="#C4C4C4"
              />
            </svg>
          </div>
          <div class="dark_green d-flex align-items-center mx-2 for_pointer">
            <i class="fas fa-share-alt fs-5"></i>
          </div>
        </div>
      </div>
    </div>
    <hr class="mx-auto" style="margin-top: -6px; width: 100%" />
    <div class="container px-4 mb-5 pb-5">
      <div
        class="d-flex align-items-start justify-content-center justify-content-md-between justify-content-lg-between flex-wrap mt-4"
      >
        <div class="card overview_card" style="width: 25rem">
          <div class="card-body">
            <VueSlickCarousel id="overview">
              <div>
                <img src="~assets/images/gig1.png" class="card-img-top" alt="..." />
              </div>
              <div>
                <img src="~assets/images/gig1.png" class="card-img-top" alt="..." />
              </div>
              <div>
                <img src="~assets/images/gig1.png" class="card-img-top" alt="..." />
              </div>
              <div>
                <img src="~assets/images/gig1.png" class="card-img-top" alt="..." />
              </div>
            </VueSlickCarousel>
            <div class="mt-3" id="description">
              <p class="fw-bold">Gig Description</p>
              <p class="fs-6 text-muted">
                Do you want some Anime & Japanese looks streetwear t-shirts designs that
                will sell ?
              </p>
            </div>
            <p class="text-muted fs-6">Are you into</p>
            <div class="text-muted">
              <ul class="m-0 fs-6">
                <li>Japan Streetwear</li>
                <li>Japan culture</li>
                <li>Japan Anime</li>
                <li>Japan Hypebeast</li>
                <li>Original Anime Character</li>
                <li>or Asia looks Tshirt Design</li>
              </ul>
            </div>
            <p class="text-muted fs-6 my-3">I can do tees, hoodies design.</p>
            <p class="text-muted fs-6 my-3">
              deliver to you with high-resolution 300 dpi artwork in AI, PSD, PNG, JPG,
              EPS, or PDF.
            </p>
          </div>
        </div>

        <div class="card mt-3" style="width: 18rem">
          <input class="radio" checked="checked" id="one" name="group" type="radio" />
          <input class="radio" id="two" name="group" type="radio" />
          <input class="radio" id="three" name="group" type="radio" />
          <div class="text-center">
            <div class="d-flex justify-content-center">
              <div>
                <label
                  class="logo_gig_pak logo_pak_active"
                  id="ones-tab"
                  for="one"
                  @click="packages('ones-tab')"
                  >Basic
                </label>
              </div>

              <div>
                <label
                  class="logo_gig_pak"
                  id="two-tab"
                  for="two"
                  @click="packages('two-tab')"
                  >Standard</label
                >
              </div>

              <div>
                <label
                  class="logo_gig_pak"
                  id="three-tab"
                  for="three"
                  @click="packages('three-tab')"
                  >Premium</label
                >
              </div>
            </div>
          </div>

          <div class="panels">
            <div class="panel" id="one-panel">
              <div class="card-body pb-0 px-0">
                <div class="mx-3">
                  <div class="d-flex justify-content-between">
                    <p class="">Basic Package</p>
                    <p class="fw-bold">$60</p>
                  </div>
                  <p class="text-muted fs-6">
                    Graphic and Text -Use up to 3 Color Only. File Send in AI/PSD, PNG,
                    JPG.
                  </p>
                  <div class="d-flex justify-content-between">
                    <p class="">Est. Delivery days</p>
                    <p class="fw-bold">5 Days</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="">No. of Revisions</p>
                    <p class="fw-bold">3</p>
                  </div>

                  <div class="justify-content-between pt-1">
                    <nav class="nav1">
                      <label for="touch1"
                        ><span class="Drop_head">
                          <div class="d-flex">
                            <div>
                              <i @click="click" class="fas fa-angle-right mx-1"></i>
                            </div>
                            1 Initial concept
                          </div>
                        </span></label
                      >
                      <input type="checkbox" id="touch1" />

                      <ul id="togglehideshow" class="slideed ps-4 mb-0">
                        <li><a href="#">Double Sketch</a></li>
                        <p class="mb-0">$10</p>
                      </ul>
                    </nav>
                    <!-- <nav class="nav1">
                <label for="touch1"
                  ><span class="Drop_head">
                    <div class="d-flex">
                      <div>
                        <i @click="click" class="fas fa-angle-right mx-1"></i>
                      </div>
                      Designs
                    </div>
                  </span></label
                >
                <input type="checkbox" id="touch1" />

                <ul class="slideed px-4 mb-0">
                  <li><a href="#"> Invoice </a></li>
                  <li><a href="#">Design</a></li>
                </ul>
              </nav> -->
                    <nav class="nav1">
                      <label for="touch2"
                        ><span class="Drop_head">
                          <div class="d-flex">
                            <div>
                              <i
                                @click="click"
                                class="fas fa-angle-right mx-1"
                                id="r1"
                              ></i>
                              <i class="fas fa-angle-down mx-1 d-none" id="d1"></i>
                            </div>
                            Source File
                          </div>
                        </span></label
                      >
                      <input type="checkbox" id="touch2" />

                      <ul class="slideed ps-4 mb-0">
                        <li>Double Sketch</li>
                        <p class="mb-0">$10</p>
                      </ul>
                    </nav>
                    <nav class="nav1">
                      <label for="touch3"
                        ><span class="Drop_head"
                          ><i @click="click" class="fas fa-angle-right mx-1"></i>
                          High Resolution
                        </span></label
                      >
                      <input type="checkbox" id="touch3" />

                      <ul class="slideed ps-4 mb-0 w-100 d-flex justify-content-between">
                        <li>Double Sketch</li>
                        <p class="mb-0">$10</p>
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

                      <ul class="slideed ps-4 mb-0 w-100 d-flex justify-content-between">
                        <li>Double Sketch</li>
                        <p class="mb-0">$10</p>
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

                      <ul class="slideed ps-4 mb-0 w-100 d-flex justify-content-between">
                        <li>Double Sketch</li>
                        <p class="mb-0">$10</p>
                      </ul>
                    </nav>
                  </div>
                  <p class="green text-center my-4 fw-bold for_pointer">
                    Compare Packages
                  </p>
                </div>
                <button class="pay">Pay $60 for basic package</button>
              </div>
            </div>

            <div class="panel" id="two-panel">
              <div class="card-body pb-0 px-0">
                <div class="mx-3">
                  <div class="d-flex justify-content-between">
                    <p class="">Standard Package</p>
                    <p class="fw-bold">$60</p>
                  </div>
                  <p class="text-muted fs-6">
                    Graphic and Text -Use up to 3 Color Only. File Send in AI/PSD, PNG,
                    JPG.
                  </p>
                  <div class="d-flex justify-content-between">
                    <p class="">Est. Delivery days</p>
                    <p class="fw-bold">5 Days</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="">No. of Revisions</p>
                    <p class="fw-bold">3</p>
                  </div>

                  <div class="justify-content-between pt-1">
                    <nav class="nav1">
                      <label for="touch1"
                        ><span class="Drop_head">
                          <div class="d-flex">
                            <div>
                              <i @click="click" class="fas fa-angle-right mx-1"></i>
                            </div>
                            1 Initial concept
                          </div>
                        </span></label
                      >
                      <input type="checkbox" id="touch1" />

                      <ul id="togglehideshow" class="slideed ps-4 mb-0">
                        <li><a href="#">Double Sketch</a></li>
                        <p class="mb-0">$10</p>
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

                      <ul class="slideed ps-4 mb-0 w-100 d-flex justify-content-between">
                        <li>Double Sketch</li>
                        <p class="mb-0">$10</p>
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

                      <ul class="slideed ps-4 mb-0 w-100 d-flex justify-content-between">
                        <li>Double Sketch</li>
                        <p class="mb-0">$10</p>
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

                      <ul class="slideed ps-4 mb-0 w-100 d-flex justify-content-between">
                        <li>Double Sketch</li>
                        <p class="mb-0">$10</p>
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

                      <ul class="slideed ps-4 mb-0 w-100 d-flex justify-content-between">
                        <li>Double Sketch</li>
                        <p class="mb-0">$10</p>
                      </ul>
                    </nav>
                  </div>
                  <p class="green text-center my-4 fw-bold for_pointer">
                    Compare Packages
                  </p>
                </div>
                <button class="pay">Pay $60 for standard package</button>
              </div>
            </div>

            <div class="panel" id="three-panel">
              <div class="card-body pb-0 px-0">
                <div class="mx-3">
                  <div class="d-flex justify-content-between">
                    <p class="">Premium Package</p>
                    <p class="fw-bold">$60</p>
                  </div>
                  <p class="text-muted fs-6">
                    Graphic and Text -Use up to 3 Color Only. File Send in AI/PSD, PNG,
                    JPG.
                  </p>
                  <div class="d-flex justify-content-between">
                    <p class="">Est. Delivery days</p>
                    <p class="fw-bold">5 Days</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="">No. of Revisions</p>
                    <p class="fw-bold">3</p>
                  </div>

                  <div class="justify-content-between pt-1">
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

                      <ul class="slideed ps-4 mb-0 w-100 d-flex justify-content-between">
                        <li>Double Sketch</li>
                        <p class="mb-0">$10</p>
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

                      <ul class="slideed ps-4 mb-0 w-100 d-flex justify-content-between">
                        <li>Double Sketch</li>
                        <p class="mb-0">$10</p>
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

                      <ul class="slideed ps-4 mb-0 w-100 d-flex justify-content-between">
                        <li>Double Sketch</li>
                        <p class="mb-0">$10</p>
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

                      <ul class="slideed ps-4 mb-0 w-100 d-flex justify-content-between">
                        <li>Double Sketch</li>
                        <p class="mb-0">$10</p>
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

                      <ul class="slideed ps-4 mb-0 w-100 d-flex justify-content-between">
                        <li>Double Sketch</li>
                        <p class="mb-0">$10</p>
                      </ul>
                    </nav>
                  </div>
                  <p class="green text-center my-4 fw-bold for_pointer">
                    Compare Packages
                  </p>
                </div>
                <button class="pay">Pay $60 for premium package</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mx-3 mt-4" id="seller">
        <p class="fw-bold">About The Seller</p>
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

      <div class="mx-3 mt-5" id="compare">
        <p class="fw-bold">Compare Packages</p>
        <div class="compare_packages justify-content-lg-start">
          <div class="package">
            <div class="Package_description">
              <p class="mb-0 text-muted">Package</p>
            </div>
            <div class="Revisions">
              <p class="mb-0 text-muted">Revisions</p>
            </div>
            <div class="Delivery_time">
              <p class="mb-0 text-muted">Delivery Time</p>
            </div>
            <div class="select_option">
              <p class="text-muted" style="visibility: hidden">$20</p>
              <button class="btn-next" style="visibility: hidden">Select</button>
            </div>
          </div>

          <div class="package">
            <div class="Package_description">
              <p class="text-muted">$20</p>
              <p class="fw-bold text-muted">Basic</p>
              <p class="fw-bold text-muted">PACKAGE CONTENT</p>
              <p class="mb-0 text-muted">1 Initial concept</p>
              <p class="mb-0 text-muted">Source File</p>
              <p class="mb-0 text-muted">High Resolution</p>
              <p class="mb-0 text-muted">Double-Sided</p>
              <p class="mb-0 text-muted">Enhanced Detailing</p>
              <p class="mb-0 text-muted">Commercial Use</p>
            </div>
            <div class="Revisions text-center">
              <p class="mb-0 text-muted">9</p>
            </div>
            <div class="Delivery_time text-center">
              <p class="mb-0 text-muted">4 days</p>
            </div>
            <div class="select_option text-center">
              <p class="text-muted">$20</p>
              <button class="btn-next">Select</button>
            </div>
          </div>

          <div class="package">
            <div class="Package_description">
              <p class="text-muted">$40</p>
              <p class="fw-bold text-muted">Standard</p>
              <p class="fw-bold text-muted">PACKAGE CONTENT</p>
              <p class="mb-0 text-muted">1 Initial concept</p>
              <p class="mb-0 text-muted">Source File</p>
              <p class="mb-0 text-muted">High Resolution</p>
              <p class="mb-0 text-muted">Double-Sided</p>
              <p class="mb-0 text-muted">Enhanced Detailing</p>
              <p class="mb-0 text-muted">Commercial Use</p>
            </div>
            <div class="Revisions text-center">
              <p class="mb-0 text-muted">12</p>
            </div>
            <div class="Delivery_time text-center">
              <p class="mb-0 text-muted">5 days</p>
            </div>
            <div class="select_option text-center">
              <p class="text-muted">$40</p>
              <button class="btn-next">Select</button>
            </div>
          </div>

          <div class="package">
            <div class="Package_description">
              <p class="text-muted">$50</p>
              <p class="fw-bold text-muted">Premium</p>
              <p class="fw-bold text-muted">PACKAGE CONTENT</p>
              <p class="mb-0 text-muted">1 Initial concept</p>
              <p class="mb-0 text-muted">Source File</p>
              <p class="mb-0 text-muted">High Resolution</p>
              <p class="mb-0 text-muted">Double-Sided</p>
              <p class="mb-0 text-muted">Enhanced Detailing</p>
              <p class="mb-0 text-muted">Commercial Use</p>
            </div>
            <div class="Revisions text-center">
              <p class="mb-0 text-muted">20</p>
            </div>
            <div class="Delivery_time text-center">
              <p class="mb-0 text-muted">5 days</p>
            </div>
            <div class="select_option text-center">
              <p class="text-muted">$50</p>
              <button class="btn-next">Select</button>
            </div>
          </div>
        </div>
      </div>

      <p class="fw-bold mt-5 mx-3" id="recommend">Recommended For You</p>
      <div class="recommendations mx-3 justify-content-md-start justify-content-lg-start">
        <div class="card gigs" style="width: 17rem">
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
          <div class="export">
            <img width="30px" src="~assets/images/export_icon.png" alt="" />
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <img width="45px" src="~assets/images/Profile_Pic.png" alt="" />
                <div class="d-flex justify-content-start align-items-start flex-column">
                  <p class="card-title mb-0 ms-2 fw-bold">Logo Design</p>
                  <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">Victor Okoye</p>
                </div>
              </div>
            </div>
            <div class="d-flex mt-2">
              <p class="mb-0 gray">Est. Delivery Time:</p>
              <p class="ms-2 green fw-bold">5 Days</p>
            </div>
            <hr style="width: 100%; margin-top: -8px" />
            <div class="d-flex justify-content-between align-items-start">
              <div class="card-text d-flex justify-content-start align-items-start">
                <img src="~assets/images/star.png" class="mt-1" alt="" />
                <p class="text-warning mb-0 ms-1">5.0</p>
              </div>
              <div class="mb-0 d-flex flex-column">
                <p class="mb-0 text-danger text-start fs-6">Starting at</p>
                <p class="fw-bold mb-0 text-start">$233.00</p>
              </div>
            </div>
          </div>
        </div>

        <div class="card gigs" style="width: 17rem">
          <VueSlickCarousel>
            <div>
              <img src="~assets/images/job2.png" class="card-img-top" alt="..." />
            </div>
            <div>
              <img src="~assets/images/job2.png" class="card-img-top" alt="..." />
            </div>
            <div>
              <img src="~assets/images/job2.png" class="card-img-top" alt="..." />
            </div>
            <div>
              <img src="~assets/images/job2.png" class="card-img-top" alt="..." />
            </div>
          </VueSlickCarousel>
          <div class="export">
            <img width="30px" src="~assets/images/export_icon.png" alt="" />
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <img width="45px" src="~assets/images/Profile_Pic.png" alt="" />
                <div class="d-flex justify-content-start align-items-start flex-column">
                  <p class="card-title mb-0 ms-2 fw-bold">Graphic Design</p>
                  <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">Victor Okoye</p>
                </div>
              </div>
            </div>
            <div class="d-flex mt-2">
              <p class="mb-0 gray">Est. Delivery Time:</p>
              <p class="ms-2 green fw-bold">5 Days</p>
            </div>
            <hr style="width: 100%; margin-top: -8px" />
            <div class="d-flex justify-content-between align-items-start">
              <div class="card-text d-flex justify-content-start align-items-start">
                <img src="~assets/images/star.png" class="mt-1" alt="" />
                <p class="text-warning mb-0 ms-1">5.0</p>
              </div>
              <div class="mb-0 d-flex flex-column">
                <p class="mb-0 text-danger text-start fs-6">Starting at</p>
                <p class="fw-bold mb-0 text-start">$233.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
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
            Gotta hand it to gusjafar, they really know how to make a design fleshed out
            and look excellent! Enjoyed working with them along the way, and would
            recommend them to anyone looking for a unique design for their own clothing.
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
            Gotta hand it to gusjafar, they really know how to make a design fleshed out
            and look excellent! Enjoyed working with them along the way, and would
            recommend them to anyone looking for a unique design for their own clothing.
          </p>
        </div>
      </div>
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
    async packages(e) {
      document.getElementsByClassName("logo_gig_pak").forEach((element) => {
        element.classList.remove("logo_pak_active");
      });
      document.getElementById(e).classList.add("logo_pak_active");
    },
    async myFunctionIz() {
      var x = document.getElementById("togglehideshow");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },
  },
};
</script>
