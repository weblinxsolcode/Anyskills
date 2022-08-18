<template>
  <div>
    <Nav />
    <ServicesNav />
    <CreategigNav />
    <div class="container px-lg-3 showing_search_for">
      <p style="margin-top: 80px" class="fw-bolder fs-3">Showing search results for</p>
      <div class="filters justify-content-lg-between">
        <div class="d-flex justify-content-center align-items-center flex-wrap mt-3">
          <select
            class="form-select fs-6 me-2 mb-2 mb-lg-0"
            aria-label="Default select example"
            style="width: max-content"
          >
            <option selected>Seller Details</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select
            class="form-select fs-6 me-2 mb-2 mb-lg-0"
            aria-label="Default select example"
            style="width: max-content"
          >
            <option selected>Budget</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select
            class="form-select fs-6 me-2 mb-2 mb-lg-0"
            aria-label="Default select example"
            style="width: max-content"
          >
            <option selected>Delivery Time</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select
            class="form-select fs-6 me-2 mb-2 mb-lg-0"
            aria-label="Default select example"
            style="width: max-content"
          >
            <option selected>No of Services</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div class="d-flex align-items-center me-2">
            <label class="switch fs-6 me-2 mb-2 mb-lg-0">
              <input type="checkbox" />
              <span class="slider slider_iz round"></span>
            </label>
            <p class="mb-0 fs-6">Local Services</p>
          </div>
          <div class="d-flex align-items-center me-2">
            <label class="switch fs-6 me-2 mb-2 mb-lg-0">
              <input type="checkbox" />
              <span class="slider slider_iz round"></span>
            </label>
            <p class="mb-0 fs-6">Online Services</p>
          </div>
        </div>

        <div class="d-flex justify-content-center align-items-center mt-3">
          <div
            class="d-flex justify-content-center align-items-center gray d-none d-lg-flex"
            style="cursor: pointer"
            id="list_color"
            @click="listView"
          >
            <i class="fas fa-list"></i>
            <p class="mb-0 ms-1">List View</p>
          </div>
          <div
            class="d-flex justify-content-center align-items-center ms-3 green d-none d-lg-flex"
            style="cursor: pointer"
            id="grid_color"
            @click="gridView"
          >
            <i class="fas fa-th-large"></i>
            <p class="mb-0 ms-1">Grid View</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="d-flex justify-content-center my-5">
        <div class="for_shadow" style="boder-radius: 5px; z-index: 3">
          <input
            id="toggle-on"
            class="toggle toggle-left"
            name="toggle"
            v-model="toogleLine"
            value="0"
            type="radio"
            checked
          />
          <label for="toggle-on" class="btn1">Basic</label>
          <input
            id="toggle-off"
            class="toggle toggle-right"
            name="toggle"
            v-model="toogleLine"
            value="1"
            type="radio"
          />
          <span class="vl" v-if="toogleLine == 0"></span>
          <label for="toggle-off" class="btn1"> Auctions</label>
        </div>
      </div>
      <div class="container designs_main justify-content-evenly mt-5">
        <div
          class="graphics_tabs mt-5 pt-2 d-flex justify-content-start align-items-start flex-column col-12 col-md-2 col-lg-1"
        >
          <NuxtLink to="/search_for_jobs">
            <div class="jobs_tab jgu_active" id="jobs_tab">
              <p class="mb-0 text-white">Jobs (454)</p>
            </div>
          </NuxtLink>
          <NuxtLink to="/search_for_gigs">
            <div class="gigs_tab" id="gigs_tab">
              <p class="mb-0">Gigs (10)</p>
            </div>
          </NuxtLink>
          <div class="users_tab" id="users_tab">
            <p class="mb-0 gray-bg text-dark">Users (64)</p>
          </div>
        </div>

        <div
          class="d-flex justify-content-center flex-column col-12 col-md-7 col-lg-9 ps-lg-5"
        >
          <p class="text-muted">2,905 services available</p>
          <div
            class="mygigs justify-content-center justify-content-lg-start grid_view"
            id="grid"
          >
            <div class="card gigs" style="width: 15rem">
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
                    <div
                      class="d-flex justify-content-start align-items-start flex-column"
                    >
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

            <div class="card gigs" style="width: 15rem">
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
                    <div
                      class="d-flex justify-content-start align-items-start flex-column"
                    >
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

            <div class="card gigs" style="width: 15rem">
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
              <div class="export">
                <img width="30px" src="~assets/images/export_icon.png" alt="" />
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center">
                    <img width="45px" src="~assets/images/Profile_Pic.png" alt="" />
                    <div
                      class="d-flex justify-content-start align-items-start flex-column"
                    >
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

            <div class="card gigs" style="width: 15rem">
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
                    <div
                      class="d-flex justify-content-start align-items-start flex-column"
                    >
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

            <div class="card gigs" style="width: 15rem">
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
                    <div
                      class="d-flex justify-content-start align-items-start flex-column"
                    >
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

            <div class="card gigs" style="width: 15rem">
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
              <div class="export">
                <img width="30px" src="~assets/images/export_icon.png" alt="" />
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center">
                    <img width="45px" src="~assets/images/Profile_Pic.png" alt="" />
                    <div
                      class="d-flex justify-content-start align-items-start flex-column"
                    >
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

            <div class="card gigs" style="width: 15rem">
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
                    <div
                      class="d-flex justify-content-start align-items-start flex-column"
                    >
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

            <div class="card gigs" style="width: 15rem">
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
                    <div
                      class="d-flex justify-content-start align-items-start flex-column"
                    >
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

            <div class="card gigs" style="width: 15rem">
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
              <div class="export">
                <img width="30px" src="~assets/images/export_icon.png" alt="" />
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center">
                    <img width="45px" src="~assets/images/Profile_Pic.png" alt="" />
                    <div
                      class="d-flex justify-content-start align-items-start flex-column"
                    >
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
          <div class="list_view" id="list">
            <div class="card search_gigs mb-lg-5 mb-3">
              <div style="width: 14rem">
                <VueSlickCarousel>
                  <div>
                    <img
                      src="~assets/images/job_long_1.png"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div>
                    <img
                      src="~assets/images/job_long_1.png"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div>
                    <img
                      src="~assets/images/job_long_1.png"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div>
                    <img
                      src="~assets/images/job_long_1.png"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                </VueSlickCarousel>
                <div class="export2">
                  <img width="30px" src="~assets/images/export_icon.png" alt="" />
                </div>
              </div>
              <div
                class="card-body d-flex justify-content-between align-items-start flex-column"
              >
                <div
                  class="w-100 d-flex justify-content-between align-items-center flex-wrap"
                >
                  <div class="d-flex align-items-center">
                    <img width="45px" src="~assets/images/Profile_Pic.png" alt="" />
                    <div
                      class="d-flex justify-content-start align-items-start flex-column"
                    >
                      <p class="card-title mb-0 ms-2 fw-bold text-success">Job Title</p>
                      <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">Victor Okoye</p>
                    </div>
                  </div>
                  <div class="d-flex">
                    <i class="fas fa-share-alt fs-5"> </i>
                  </div>
                </div>

                <div class="w-100">
                  <hr class="opacity_001 text-muted" style="width: 100%" />
                  <div class="d-flex justify-content-between align-items-end">
                    <div
                      class="card-text d-flex justify-content-start align-items-center"
                    >
                      <i class="fas fa-heart fs_izhan_custom"></i>
                      <p class="fw-bold ms-1 mb-0 fs_izhan_custom">43</p>
                      <i class="far fa-eye ms-2 fs_izhan_custom"></i>
                      <p class="fw-bold ms-1 mb-0 fs_izhan_custom">300</p>
                      <i class="fas fa-info-circle ms-2 fs_izhan_custom"></i>
                      <p class="fw-bold ms-1 mb-0 fs_izhan_custom">300</p>
                    </div>
                    <div class="mb-0 d-flex gap-3">
                      <p class="mb-0 text-danger text-end fs_izhan_custom">Budget/hr</p>
                      <p class="fw-bold mb-0 text-end fs_izhan_custom">$233.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card search_gigs mb-lg-5 mb-3">
              <div style="width: 14rem">
                <VueSlickCarousel>
                  <div>
                    <img
                      src="~assets/images/job_long_1.png"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div>
                    <img
                      src="~assets/images/job_long_1.png"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div>
                    <img
                      src="~assets/images/job_long_1.png"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div>
                    <img
                      src="~assets/images/job_long_1.png"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                </VueSlickCarousel>
                <div class="export2">
                  <img width="30px" src="~assets/images/export_icon.png" alt="" />
                </div>
              </div>
              <div
                class="card-body d-flex justify-content-between align-items-start flex-column"
              >
                <div
                  class="w-100 d-flex justify-content-between align-items-center flex-wrap"
                >
                  <div class="d-flex align-items-center">
                    <img width="45px" src="~assets/images/Profile_Pic.png" alt="" />
                    <div
                      class="d-flex justify-content-start align-items-start flex-column"
                    >
                      <p class="card-title mb-0 ms-2 fw-bold text-success">Job Title</p>
                      <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">Victor Okoye</p>
                    </div>
                  </div>
                  <div class="d-flex">
                    <i class="fas fa-share-alt fs-5"> </i>
                  </div>
                </div>

                <div class="w-100">
                  <hr class="opacity_001 text-muted" style="width: 100%" />
                  <div class="d-flex justify-content-between align-items-end">
                    <div
                      class="card-text d-flex justify-content-start align-items-center"
                    >
                      <i class="fas fa-heart fs_izhan_custom"></i>
                      <p class="fw-bold ms-1 mb-0 fs_izhan_custom">43</p>
                      <i class="far fa-eye ms-2 fs_izhan_custom"></i>
                      <p class="fw-bold ms-1 mb-0 fs_izhan_custom">300</p>
                      <i class="fas fa-info-circle ms-2 fs_izhan_custom"></i>
                      <p class="fw-bold ms-1 mb-0 fs_izhan_custom">300</p>
                    </div>
                    <div class="mb-0 d-flex gap-3">
                      <p class="mb-0 text-danger text-end fs_izhan_custom">Budget/hr</p>
                      <p class="fw-bold mb-0 text-end fs_izhan_custom">$233.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card search_gigs mb-lg-5 mb-3">
              <div style="width: 14rem">
                <VueSlickCarousel>
                  <div>
                    <img
                      src="~assets/images/job_long_1.png"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div>
                    <img
                      src="~assets/images/job_long_1.png"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div>
                    <img
                      src="~assets/images/job_long_1.png"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div>
                    <img
                      src="~assets/images/job_long_1.png"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                </VueSlickCarousel>
                <div class="export2">
                  <img width="30px" src="~assets/images/export_icon.png" alt="" />
                </div>
              </div>
              <div
                class="card-body d-flex justify-content-between align-items-start flex-column"
              >
                <div
                  class="w-100 d-flex justify-content-between align-items-center flex-wrap"
                >
                  <div class="d-flex align-items-center">
                    <img width="45px" src="~assets/images/Profile_Pic.png" alt="" />
                    <div
                      class="d-flex justify-content-start align-items-start flex-column"
                    >
                      <p class="card-title mb-0 ms-2 fw-bold text-success">Job Title</p>
                      <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">Victor Okoye</p>
                    </div>
                  </div>
                  <div class="d-flex">
                    <i class="fas fa-share-alt fs-5"> </i>
                  </div>
                </div>

                <div class="w-100">
                  <hr class="opacity_001 text-muted" style="width: 100%" />
                  <div class="d-flex justify-content-between align-items-end">
                    <div
                      class="card-text d-flex justify-content-start align-items-center"
                    >
                      <i class="fas fa-heart fs_izhan_custom"></i>
                      <p class="fw-bold ms-1 mb-0 fs_izhan_custom">43</p>
                      <i class="far fa-eye ms-2 fs_izhan_custom"></i>
                      <p class="fw-bold ms-1 mb-0 fs_izhan_custom">300</p>
                      <i class="fas fa-info-circle ms-2 fs_izhan_custom"></i>
                      <p class="fw-bold ms-1 mb-0 fs_izhan_custom">300</p>
                    </div>
                    <div class="mb-0 d-flex gap-3">
                      <p class="mb-0 text-danger text-end fs_izhan_custom">Budget/hr</p>
                      <p class="fw-bold mb-0 text-end fs_izhan_custom">$233.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card search_gigs mb-lg-5 mb-3">
              <div style="width: 14rem">
                <VueSlickCarousel>
                  <div>
                    <img
                      src="~assets/images/job_long_1.png"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div>
                    <img
                      src="~assets/images/job_long_1.png"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div>
                    <img
                      src="~assets/images/job_long_1.png"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div>
                    <img
                      src="~assets/images/job_long_1.png"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                </VueSlickCarousel>
                <div class="export2">
                  <img width="30px" src="~assets/images/export_icon.png" alt="" />
                </div>
              </div>
              <div
                class="card-body d-flex justify-content-between align-items-start flex-column"
              >
                <div
                  class="w-100 d-flex justify-content-between align-items-center flex-wrap"
                >
                  <div class="d-flex align-items-center">
                    <img width="45px" src="~assets/images/Profile_Pic.png" alt="" />
                    <div
                      class="d-flex justify-content-start align-items-start flex-column"
                    >
                      <p class="card-title mb-0 ms-2 fw-bold text-success">Job Title</p>
                      <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">Victor Okoye</p>
                    </div>
                  </div>
                  <div class="d-flex">
                    <i class="fas fa-share-alt fs-5"> </i>
                  </div>
                </div>

                <div class="w-100">
                  <hr class="opacity_001 text-muted" style="width: 100%" />
                  <div class="d-flex justify-content-between align-items-end">
                    <div
                      class="card-text d-flex justify-content-start align-items-center"
                    >
                      <i class="fas fa-heart fs_izhan_custom"></i>
                      <p class="fw-bold ms-1 mb-0 fs_izhan_custom">43</p>
                      <i class="far fa-eye ms-2 fs_izhan_custom"></i>
                      <p class="fw-bold ms-1 mb-0 fs_izhan_custom">300</p>
                      <i class="fas fa-info-circle ms-2 fs_izhan_custom"></i>
                      <p class="fw-bold ms-1 mb-0 fs_izhan_custom">300</p>
                    </div>
                    <div class="mb-0 d-flex gap-3">
                      <p class="mb-0 text-danger text-end fs_izhan_custom">Budget/hr</p>
                      <p class="fw-bold mb-0 text-end fs_izhan_custom">$233.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card search_gigs mb-lg-5 mb-3">
              <div style="width: 14rem">
                <VueSlickCarousel>
                  <div>
                    <img
                      src="~assets/images/job_long_1.png"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div>
                    <img
                      src="~assets/images/job_long_1.png"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div>
                    <img
                      src="~assets/images/job_long_1.png"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div>
                    <img
                      src="~assets/images/job_long_1.png"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                </VueSlickCarousel>
                <div class="export2">
                  <img width="30px" src="~assets/images/export_icon.png" alt="" />
                </div>
              </div>
              <div
                class="card-body d-flex justify-content-between align-items-start flex-column"
              >
                <div
                  class="w-100 d-flex justify-content-between align-items-center flex-wrap"
                >
                  <div class="d-flex align-items-center">
                    <img width="45px" src="~assets/images/Profile_Pic.png" alt="" />
                    <div
                      class="d-flex justify-content-start align-items-start flex-column"
                    >
                      <p class="card-title mb-0 ms-2 fw-bold text-success">Job Title</p>
                      <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">Victor Okoye</p>
                    </div>
                  </div>
                  <div class="d-flex">
                    <i class="fas fa-share-alt fs-5"> </i>
                  </div>
                </div>

                <div class="w-100">
                  <hr class="opacity_001 text-muted" style="width: 100%" />
                  <div class="d-flex justify-content-between align-items-end">
                    <div
                      class="card-text d-flex justify-content-start align-items-center"
                    >
                      <i class="fas fa-heart fs_izhan_custom"></i>
                      <p class="fw-bold ms-1 mb-0 fs_izhan_custom">43</p>
                      <i class="far fa-eye ms-2 fs_izhan_custom"></i>
                      <p class="fw-bold ms-1 mb-0 fs_izhan_custom">300</p>
                      <i class="fas fa-info-circle ms-2 fs_izhan_custom"></i>
                      <p class="fw-bold ms-1 mb-0 fs_izhan_custom">300</p>
                    </div>
                    <div class="mb-0 d-flex gap-3">
                      <p class="mb-0 text-danger text-end fs_izhan_custom">Budget/hr</p>
                      <p class="fw-bold mb-0 text-end fs_izhan_custom">$233.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="graphics_side_tab mt-5 col-12 col-md-3 col-lg-2">
          <p class="green fw-bold fs-4">Graphics</p>
          <NuxtLink to="/logo_design">
            <p class="text-muted" style="opacity: 0.3">Logo Design</p>
          </NuxtLink>
          <p class="text-muted" style="opacity: 0.3">Game Design</p>
          <p class="text-muted" style="opacity: 0.3">Graphic for Streamers</p>
          <p class="text-muted" style="opacity: 0.3">illustrations</p>
          <p class="text-muted" style="opacity: 0.3">Brochure Design</p>
          <p class="text-muted" style="opacity: 0.3">Flyer Design</p>
          <p class="text-muted" style="opacity: 0.3">Book & Album Covers</p>
          <p class="text-muted" style="opacity: 0.3">Packaging Design</p>
          <p class="text-muted" style="opacity: 0.3">Storyboards</p>
        </div>
      </div>
    </div>

    <div class="container mt-5 pt-5">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link m-1 m-lg-2 m-md-2 prev"
              ><i class="fas fa-angle-left text-white"></i
            ></a>
          </li>
          <div class="pages">
            <li class="page-item m-1 m-lg-2 m-md-2">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item m-1 m-lg-2 m-md-2">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item m-1 m-lg-2 m-md-2 d-none d-md-block d-lg-block">
              <a class="page-link" href="#">...</a>
            </li>
            <li class="page-item m-1 m-lg-2 m-md-2">
              <a class="page-link" href="#">9</a>
            </li>
            <li class="page-item m-1 m-lg-2 m-md-2">
              <a class="page-link" href="#">10</a>
            </li>
          </div>
          <li class="page-item">
            <a class="page-link m-1 m-lg-2 m-md-2 next"
              ><i class="fas fa-angle-right text-white"></i
            ></a>
          </li>
        </ul>
      </nav>
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
      settings: {
        arrows: true,
        dots: false,
        slidesToShow: 2,
      },
      toogleLine: 0,
    };
  },
  methods: {
    async listView() {
      document.getElementById("grid").style.display = "none";
      document.getElementById("list").style.display = "block";
      document.getElementById("list").style.margin = "0px 30px 0px 0px";
      document.getElementById("list_color").style.color = "#52BE71";
      document.getElementById("grid_color").style.color = "#C4CDD5";
    },
    async gridView() {
      document.getElementById("list").style.display = "none";
      document.getElementById("grid").style.display = "flex";
      document.getElementById("grid_color").style.color = "#52BE71";
      document.getElementById("list_color").style.color = "#C4CDD5";
    },
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
