<template>
  <div>
    <Nav />
    <ServicesNav />

    <CreategigNav />

    <div class="container mt-5">
      <p class="fw-bold fs-2 text-center green mb-0">Graphics & Designs</p>
      <p class="text-center text-muted">
        Browse these sub-categories for Jobs, Gigs and Users' Profiles
      </p>
      <div style="margin-top: 80px">
        <div class="designs_main">
          <div
            class="
              graphics_tabs
              mt-5
              pt-2
              d-flex
              justify-content-center
              align-items-center
              flex-column
              col-12 col-md-1 col-lg-1
            "
          >
            <NuxtLink to="/graphics_design_jobs">
              <div class="jobs_tab" id="jobs_tab" @click="Jobs454">
                <p class="mb-0 gray-bg">Jobs (454)</p>
              </div>
            </NuxtLink>
            <NuxtLink to="/graphics_design_gigs">
              <div class="gigs_tab jgu_active" id="gigs_tab" @click="gigs10">
                <p class="mb-0">Gigs (10)</p>
              </div>
            </NuxtLink>
            <NuxtLink to="/graphics_design_users">
              <div class="users_tab" id="users_tab" @click="Users64">
                <p class="mb-0 gray-bg">Users (64)</p>
              </div>
            </NuxtLink>
          </div>

          <div
            class="
              d-flex
              justify-content-center
              flex-wrap
              mt-5
              col-12 col-md-9 col-lg-9
            "
          >
            <div class="card gigs" style="width: 15rem">
              <VueSlickCarousel>
                <div>
                  <img
                    src="~assets/images/job1.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/job1.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/job1.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/job1.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
              </VueSlickCarousel>
              <div class="export">
                <img width="30px" src="~assets/images/export_icon.png" alt="" />
              </div>
              <NuxtLink to="/gig_details">
                <div class="card-body">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <img
                        width="45px"
                        src="~assets/images/Profile_Pic.png"
                        alt=""
                      />
                      <div
                        class="
                          d-flex
                          justify-content-start
                          align-items-start
                          flex-column
                        "
                      >
                        <p class="card-title mb-0 ms-2 fw-bold">Logo Design</p>
                        <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                          Victor Okoye
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <p class="mb-0 gray">Est. Delivery Time:</p>
                    <p class="ms-2 green fw-bold">5 Days</p>
                  </div>
                  <hr style="width: 100%; margin-top: -8px" />
                  <div class="d-flex justify-content-between align-items-start">
                    <div
                      class="
                        card-text
                        d-flex
                        justify-content-start
                        align-items-start
                      "
                    >
                      <img src="~assets/images/star.png" class="mt-1" alt="" />
                      <p class="text-warning mb-0 ms-1">5.0</p>
                    </div>
                    <div class="mb-0 d-flex flex-column">
                      <p class="mb-0 text-danger text-start fs-6">
                        Starting at
                      </p>
                      <p class="fw-bold mb-0 text-start">$233.00</p>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>

            <div class="card gigs" style="width: 15rem">
              <VueSlickCarousel>
                <div>
                  <img
                    src="~assets/images/job2.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/job2.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/job2.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/job2.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
              </VueSlickCarousel>
              <div class="export">
                <img width="30px" src="~assets/images/export_icon.png" alt="" />
              </div>
              <NuxtLink to="/gig_details">
                <div class="card-body">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <img
                        width="45px"
                        src="~assets/images/Profile_Pic.png"
                        alt=""
                      />
                      <div
                        class="
                          d-flex
                          justify-content-start
                          align-items-start
                          flex-column
                        "
                      >
                        <p class="card-title mb-0 ms-2 fw-bold">
                          Graphic Design
                        </p>
                        <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                          Victor Okoye
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <p class="mb-0 gray">Est. Delivery Time:</p>
                    <p class="ms-2 green fw-bold">5 Days</p>
                  </div>
                  <hr style="width: 100%; margin-top: -8px" />
                  <div class="d-flex justify-content-between align-items-start">
                    <div
                      class="
                        card-text
                        d-flex
                        justify-content-start
                        align-items-start
                      "
                    >
                      <img src="~assets/images/star.png" class="mt-1" alt="" />
                      <p class="text-warning mb-0 ms-1">5.0</p>
                    </div>
                    <div class="mb-0 d-flex flex-column">
                      <p class="mb-0 text-danger text-start fs-6">
                        Starting at
                      </p>
                      <p class="fw-bold mb-0 text-start">$233.00</p>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>

            <div class="card gigs" style="width: 15rem">
              <VueSlickCarousel>
                <div>
                  <img
                    src="~assets/images/gig4.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/gig4.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/gig4.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/gig4.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
              </VueSlickCarousel>
              <div class="export">
                <img width="30px" src="~assets/images/export_icon.png" alt="" />
              </div>
              <NuxtLink to="/gig_details">
                <div class="card-body">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <img
                        width="45px"
                        src="~assets/images/Profile_Pic.png"
                        alt=""
                      />
                      <div
                        class="
                          d-flex
                          justify-content-start
                          align-items-start
                          flex-column
                        "
                      >
                        <p class="card-title mb-0 ms-2 fw-bold">
                          Graphic Design
                        </p>
                        <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                          Victor Okoye
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <p class="mb-0 gray">Est. Delivery Time:</p>
                    <p class="ms-2 green fw-bold">5 Days</p>
                  </div>
                  <hr style="width: 100%; margin-top: -8px" />
                  <div class="d-flex justify-content-between align-items-start">
                    <div
                      class="
                        card-text
                        d-flex
                        justify-content-start
                        align-items-start
                      "
                    >
                      <img src="~assets/images/star.png" class="mt-1" alt="" />
                      <p class="text-warning mb-0 ms-1">5.0</p>
                    </div>
                    <div class="mb-0 d-flex flex-column">
                      <p class="mb-0 text-danger text-start fs-6">
                        Starting at
                      </p>
                      <p class="fw-bold mb-0 text-start">$233.00</p>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>

            <div class="card gigs" style="width: 15rem">
              <VueSlickCarousel>
                <div>
                  <img
                    src="~assets/images/job1.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/job1.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/job1.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/job1.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
              </VueSlickCarousel>
              <div class="export">
                <img width="30px" src="~assets/images/export_icon.png" alt="" />
              </div>
              <NuxtLink to="/gig_details">
                <div class="card-body">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <img
                        width="45px"
                        src="~assets/images/Profile_Pic.png"
                        alt=""
                      />
                      <div
                        class="
                          d-flex
                          justify-content-start
                          align-items-start
                          flex-column
                        "
                      >
                        <p class="card-title mb-0 ms-2 fw-bold">Logo Design</p>
                        <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                          Victor Okoye
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <p class="mb-0 gray">Est. Delivery Time:</p>
                    <p class="ms-2 green fw-bold">5 Days</p>
                  </div>
                  <hr style="width: 100%; margin-top: -8px" />
                  <div class="d-flex justify-content-between align-items-start">
                    <div
                      class="
                        card-text
                        d-flex
                        justify-content-start
                        align-items-start
                      "
                    >
                      <img src="~assets/images/star.png" class="mt-1" alt="" />
                      <p class="text-warning mb-0 ms-1">5.0</p>
                    </div>
                    <div class="mb-0 d-flex flex-column">
                      <p class="mb-0 text-danger text-start fs-6">
                        Starting at
                      </p>
                      <p class="fw-bold mb-0 text-start">$233.00</p>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>

            <div class="card gigs" style="width: 15rem">
              <VueSlickCarousel>
                <div>
                  <img
                    src="~assets/images/job2.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/job2.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/job2.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/job2.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
              </VueSlickCarousel>
              <div class="export">
                <img width="30px" src="~assets/images/export_icon.png" alt="" />
              </div>
              <NuxtLink to="/gig_details">
                <div class="card-body">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <img
                        width="45px"
                        src="~assets/images/Profile_Pic.png"
                        alt=""
                      />
                      <div
                        class="
                          d-flex
                          justify-content-start
                          align-items-start
                          flex-column
                        "
                      >
                        <p class="card-title mb-0 ms-2 fw-bold">
                          Graphic Design
                        </p>
                        <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                          Victor Okoye
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <p class="mb-0 gray">Est. Delivery Time:</p>
                    <p class="ms-2 green fw-bold">5 Days</p>
                  </div>
                  <hr style="width: 100%; margin-top: -8px" />
                  <div class="d-flex justify-content-between align-items-start">
                    <div
                      class="
                        card-text
                        d-flex
                        justify-content-start
                        align-items-start
                      "
                    >
                      <img src="~assets/images/star.png" class="mt-1" alt="" />
                      <p class="text-warning mb-0 ms-1">5.0</p>
                    </div>
                    <div class="mb-0 d-flex flex-column">
                      <p class="mb-0 text-danger text-start fs-6">
                        Starting at
                      </p>
                      <p class="fw-bold mb-0 text-start">$233.00</p>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>

            <div class="card gigs" style="width: 15rem">
              <VueSlickCarousel>
                <div>
                  <img
                    src="~assets/images/gig4.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/gig4.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/gig4.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/gig4.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
              </VueSlickCarousel>
              <div class="export">
                <img width="30px" src="~assets/images/export_icon.png" alt="" />
              </div>
              <NuxtLink to="/gig_details">
                <div class="card-body">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <img
                        width="45px"
                        src="~assets/images/Profile_Pic.png"
                        alt=""
                      />
                      <div
                        class="
                          d-flex
                          justify-content-start
                          align-items-start
                          flex-column
                        "
                      >
                        <p class="card-title mb-0 ms-2 fw-bold">
                          Graphic Design
                        </p>
                        <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                          Victor Okoye
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <p class="mb-0 gray">Est. Delivery Time:</p>
                    <p class="ms-2 green fw-bold">5 Days</p>
                  </div>
                  <hr style="width: 100%; margin-top: -8px" />
                  <div class="d-flex justify-content-between align-items-start">
                    <div
                      class="
                        card-text
                        d-flex
                        justify-content-start
                        align-items-start
                      "
                    >
                      <img src="~assets/images/star.png" class="mt-1" alt="" />
                      <p class="text-warning mb-0 ms-1">5.0</p>
                    </div>
                    <div class="mb-0 d-flex flex-column">
                      <p class="mb-0 text-danger text-start fs-6">
                        Starting at
                      </p>
                      <p class="fw-bold mb-0 text-start">$233.00</p>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>

            <div class="card gigs" style="width: 15rem">
              <VueSlickCarousel>
                <div>
                  <img
                    src="~assets/images/job1.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/job1.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/job1.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/job1.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
              </VueSlickCarousel>
              <div class="export">
                <img width="30px" src="~assets/images/export_icon.png" alt="" />
              </div>
              <NuxtLink to="/gig_details">
                <div class="card-body">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <img
                        width="45px"
                        src="~assets/images/Profile_Pic.png"
                        alt=""
                      />
                      <div
                        class="
                          d-flex
                          justify-content-start
                          align-items-start
                          flex-column
                        "
                      >
                        <p class="card-title mb-0 ms-2 fw-bold">Logo Design</p>
                        <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                          Victor Okoye
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <p class="mb-0 gray">Est. Delivery Time:</p>
                    <p class="ms-2 green fw-bold">5 Days</p>
                  </div>
                  <hr style="width: 100%; margin-top: -8px" />
                  <div class="d-flex justify-content-between align-items-start">
                    <div
                      class="
                        card-text
                        d-flex
                        justify-content-start
                        align-items-start
                      "
                    >
                      <img src="~assets/images/star.png" class="mt-1" alt="" />
                      <p class="text-warning mb-0 ms-1">5.0</p>
                    </div>
                    <div class="mb-0 d-flex flex-column">
                      <p class="mb-0 text-danger text-start fs-6">
                        Starting at
                      </p>
                      <p class="fw-bold mb-0 text-start">$233.00</p>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>

            <div class="card gigs" style="width: 15rem">
              <VueSlickCarousel>
                <div>
                  <img
                    src="~assets/images/job2.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/job2.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/job2.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/job2.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
              </VueSlickCarousel>
              <div class="export">
                <img width="30px" src="~assets/images/export_icon.png" alt="" />
              </div>
              <NuxtLink to="/gig_details">
                <div class="card-body">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <img
                        width="45px"
                        src="~assets/images/Profile_Pic.png"
                        alt=""
                      />
                      <div
                        class="
                          d-flex
                          justify-content-start
                          align-items-start
                          flex-column
                        "
                      >
                        <p class="card-title mb-0 ms-2 fw-bold">
                          Graphic Design
                        </p>
                        <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                          Victor Okoye
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <p class="mb-0 gray">Est. Delivery Time:</p>
                    <p class="ms-2 green fw-bold">5 Days</p>
                  </div>
                  <hr style="width: 100%; margin-top: -8px" />
                  <div class="d-flex justify-content-between align-items-start">
                    <div
                      class="
                        card-text
                        d-flex
                        justify-content-start
                        align-items-start
                      "
                    >
                      <img src="~assets/images/star.png" class="mt-1" alt="" />
                      <p class="text-warning mb-0 ms-1">5.0</p>
                    </div>
                    <div class="mb-0 d-flex flex-column">
                      <p class="mb-0 text-danger text-start fs-6">
                        Starting at
                      </p>
                      <p class="fw-bold mb-0 text-start">$233.00</p>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>

            <div class="card gigs" style="width: 15rem">
              <VueSlickCarousel>
                <div>
                  <img
                    src="~assets/images/gig4.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/gig4.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/gig4.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="~assets/images/gig4.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
              </VueSlickCarousel>
              <div class="export">
                <img width="30px" src="~assets/images/export_icon.png" alt="" />
              </div>
              <NuxtLink to="/gig_details">
                <div class="card-body">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <img
                        width="45px"
                        src="~assets/images/Profile_Pic.png"
                        alt=""
                      />
                      <div
                        class="
                          d-flex
                          justify-content-start
                          align-items-start
                          flex-column
                        "
                      >
                        <p class="card-title mb-0 ms-2 fw-bold">
                          Graphic Design
                        </p>
                        <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                          Victor Okoye
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <p class="mb-0 gray">Est. Delivery Time:</p>
                    <p class="ms-2 green fw-bold">5 Days</p>
                  </div>
                  <hr style="width: 100%; margin-top: -8px" />
                  <div class="d-flex justify-content-between align-items-start">
                    <div
                      class="
                        card-text
                        d-flex
                        justify-content-start
                        align-items-start
                      "
                    >
                      <img src="~assets/images/star.png" class="mt-1" alt="" />
                      <p class="text-warning mb-0 ms-1">5.0</p>
                    </div>
                    <div class="mb-0 d-flex flex-column">
                      <p class="mb-0 text-danger text-start fs-6">
                        Starting at
                      </p>
                      <p class="fw-bold mb-0 text-start">$233.00</p>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>

          <div class="graphics_side_tab mt-5 col-12 col-md-2 col-lg-2">
            <p class="green fw-bold fs-4">Graphics</p>
            <NuxtLink to="/logo_design">
              <p class="text-muted">Logo Design</p>
            </NuxtLink>
            <p class="text-muted">Game Design</p>
            <p class="text-muted">Graphic for Streamers</p>
            <p class="text-muted">illustrations</p>
            <p class="text-muted">Brochure Design</p>
            <p class="text-muted">Flyer Design</p>
            <p class="text-muted">Book & Album Covers</p>
            <p class="text-muted">Packaging Design</p>
            <p class="text-muted">Storyboards</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5">
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
    };
  },
};
</script>
