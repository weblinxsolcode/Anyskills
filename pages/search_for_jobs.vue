<template>
  <div>
    <Nav />
    <ServicesNav />
    <CreategigNav />
    <div class="container px-lg-5 showing_search_for">
      <p class="fw-bolder fs-3">Showing search results for</p>
      <div class="filters justify-content-lg-between">
        <div
          class="d-flex justify-content-center align-items-center flex-wrap mt-3"
        >
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
              <span class="slider round"></span>
            </label>
            <p class="mb-0 fs-6">Local Services</p>
          </div>
          <div class="d-flex align-items-center me-2">
            <label class="switch fs-6 me-2 mb-2 mb-lg-0">
              <input type="checkbox" />
              <span class="slider round"></span>
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

    <!-- <div class="text-center mt-5 graphics_tabs">
      <NuxtLink to="#">
        <button class="basic">Basic</button>
      </NuxtLink>
      <NuxtLink to="#">
        <button class="auction"><span class="me-4">|</span> Auctions</button>
      </NuxtLink>
    </div> -->
<div class="d-flex justify-content-center align-items-center mt-5">
        <div class="for_shadow" style="boder-radius: 5px">
          <input
            id="toggle-on"
            @click="hello"
            class="toggle toggle-left"
            name="toggle"
            value="false"
            type="radio"
            checked
          />


          <label for="toggle-on" class="btn1">Basic</label>

          <input
            id="toggle-off"
            class="toggle toggle-right"
            name="toggle"
            value="true"
            type="radio"
          />
       
       
            <label for="toggle-off" class="btn1" >Auctions</label>
         
        </div>
      </div>
    <div class="container designs_main justify-content-around mt-5">
      <div
        class="graphics_tabs mt-5 pt-2 d-flex justify-content-center align-items-center flex-column col-12 col-md-2 col-lg-2"
      >
        <div class="jobs_tab jgu_active" id="jobs_tab">
          <p class="mb-0">Jobs (454)</p>
        </div>
        <NuxtLink to="/search_for_gigs">
          <div class="gigs_tab" id="gigs_tab">
            <p class="mb-0">Gigs (10)</p>
          </div>
        </NuxtLink>
        <div class="users_tab" id="users_tab">
          <p class="mb-0">Users (64)</p>
        </div>
      </div>

      <div
        class="d-flex justify-content-start flex-column col-12 col-md-7 col-lg-7 mt-5 mt-md-0 mt-lg-0"
      >
        <p class="text-muted">2,905 services available</p>
        <div
          class="mygigs justify-content-center justify-content-lg-start grid_view"
          id="grid"
        >
          <div class="card gigs" style="width: 17rem">
            <div>
              <img
                src="~assets/images/job1.png"
                class="card-img-top"
                alt="..."
              />
            </div>
            <div class="export">
              <i class="fas fa-star text-white"></i>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <img
                    width="45px"
                    src="~assets/images/Profile_Pic.png"
                    alt=""
                  />
                  <div
                    class="d-flex justify-content-start align-items-start flex-column"
                  >
                    <p class="card-title mb-0 ms-2 fw-bold green">Title</p>
                    <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                      Victor Okoye
                    </p>
                  </div>
                </div>
                <i class="fas fa-share-alt"></i>
              </div>
              <hr style="width: 100%" />
              <div
                class="d-flex justify-content-between align-items-end flex-wrap"
              >
                <div class="d-flex justify-content-start align-items-center">
                  <i class="fas fa-heart"></i>
                  <p class="fw-bold ms-1 mb-0">43</p>
                  <i class="far fa-eye ms-2"></i>
                  <p class="fw-bold ms-1 mb-0">300</p>
                  <i class="fas fa-info-circle ms-2"></i>
                  <p class="fw-bold ms-1 mb-0">300</p>
                </div>
                <div
                  class="card-text d-flex justify-content-center align-items-center flex-column"
                >
                  <p class="mb-0 text-danger">Budget/hr</p>
                  <p class="fw-bold ms-2 mb-0">$233.00</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card gigs" style="width: 17rem">
            <div>
              <img
                src="~assets/images/job1.png"
                class="card-img-top"
                alt="..."
              />
            </div>
            <div class="export">
              <i class="fas fa-star text-white"></i>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <img
                    width="45px"
                    src="~assets/images/Profile_Pic.png"
                    alt=""
                  />
                  <div
                    class="d-flex justify-content-start align-items-start flex-column"
                  >
                    <p class="card-title mb-0 ms-2 fw-bold green">Title</p>
                    <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                      Victor Okoye
                    </p>
                  </div>
                </div>
                <i class="fas fa-share-alt"></i>
              </div>
              <hr style="width: 100%" />
              <div
                class="d-flex justify-content-between align-items-end flex-wrap"
              >
                <div class="d-flex justify-content-start align-items-center">
                  <i class="fas fa-heart"></i>
                  <p class="fw-bold ms-1 mb-0">43</p>
                  <i class="far fa-eye ms-2"></i>
                  <p class="fw-bold ms-1 mb-0">300</p>
                  <i class="fas fa-info-circle ms-2"></i>
                  <p class="fw-bold ms-1 mb-0">300</p>
                </div>
                <div
                  class="card-text d-flex justify-content-center align-items-center flex-column"
                >
                  <p class="mb-0 text-danger">Budget/hr</p>
                  <p class="fw-bold ms-2 mb-0">$233.00</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card gigs" style="width: 17rem">
            <div>
              <img
                src="~assets/images/job1.png"
                class="card-img-top"
                alt="..."
              />
            </div>
            <div class="export">
              <i class="fas fa-star text-white"></i>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <img
                    width="45px"
                    src="~assets/images/Profile_Pic.png"
                    alt=""
                  />
                  <div
                    class="d-flex justify-content-start align-items-start flex-column"
                  >
                    <p class="card-title mb-0 ms-2 fw-bold green">Title</p>
                    <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                      Victor Okoye
                    </p>
                  </div>
                </div>
                <i class="fas fa-share-alt"></i>
              </div>
              <hr style="width: 100%" />
              <div
                class="d-flex justify-content-between align-items-end flex-wrap"
              >
                <div class="d-flex justify-content-start align-items-center">
                  <i class="fas fa-heart"></i>
                  <p class="fw-bold ms-1 mb-0">43</p>
                  <i class="far fa-eye ms-2"></i>
                  <p class="fw-bold ms-1 mb-0">300</p>
                  <i class="fas fa-info-circle ms-2"></i>
                  <p class="fw-bold ms-1 mb-0">300</p>
                </div>
                <div
                  class="card-text d-flex justify-content-center align-items-center flex-column"
                >
                  <p class="mb-0 text-danger">Budget/hr</p>
                  <p class="fw-bold ms-2 mb-0">$233.00</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card gigs" style="width: 17rem">
            <div>
              <img
                src="~assets/images/job1.png"
                class="card-img-top"
                alt="..."
              />
            </div>
            <div class="export">
              <i class="fas fa-star text-white"></i>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <img
                    width="45px"
                    src="~assets/images/Profile_Pic.png"
                    alt=""
                  />
                  <div
                    class="d-flex justify-content-start align-items-start flex-column"
                  >
                    <p class="card-title mb-0 ms-2 fw-bold green">Title</p>
                    <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                      Victor Okoye
                    </p>
                  </div>
                </div>
                <i class="fas fa-share-alt"></i>
              </div>
              <hr style="width: 100%" />
              <div
                class="d-flex justify-content-between align-items-end flex-wrap"
              >
                <div class="d-flex justify-content-start align-items-center">
                  <i class="fas fa-heart"></i>
                  <p class="fw-bold ms-1 mb-0">43</p>
                  <i class="far fa-eye ms-2"></i>
                  <p class="fw-bold ms-1 mb-0">300</p>
                  <i class="fas fa-info-circle ms-2"></i>
                  <p class="fw-bold ms-1 mb-0">300</p>
                </div>
                <div
                  class="card-text d-flex justify-content-center align-items-center flex-column"
                >
                  <p class="mb-0 text-danger">Budget/hr</p>
                  <p class="fw-bold ms-2 mb-0">$233.00</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card gigs" style="width: 17rem">
            <div>
              <img
                src="~assets/images/job1.png"
                class="card-img-top"
                alt="..."
              />
            </div>
            <div class="export">
              <i class="fas fa-star text-white"></i>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <img
                    width="45px"
                    src="~assets/images/Profile_Pic.png"
                    alt=""
                  />
                  <div
                    class="d-flex justify-content-start align-items-start flex-column"
                  >
                    <p class="card-title mb-0 ms-2 fw-bold green">Title</p>
                    <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                      Victor Okoye
                    </p>
                  </div>
                </div>
                <i class="fas fa-share-alt"></i>
              </div>
              <hr style="width: 100%" />
              <div
                class="d-flex justify-content-between align-items-end flex-wrap"
              >
                <div class="d-flex justify-content-start align-items-center">
                  <i class="fas fa-heart"></i>
                  <p class="fw-bold ms-1 mb-0">43</p>
                  <i class="far fa-eye ms-2"></i>
                  <p class="fw-bold ms-1 mb-0">300</p>
                  <i class="fas fa-info-circle ms-2"></i>
                  <p class="fw-bold ms-1 mb-0">300</p>
                </div>
                <div
                  class="card-text d-flex justify-content-center align-items-center flex-column"
                >
                  <p class="mb-0 text-danger">Budget/hr</p>
                  <p class="fw-bold ms-2 mb-0">$233.00</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card gigs" style="width: 17rem">
            <div>
              <img
                src="~assets/images/job1.png"
                class="card-img-top"
                alt="..."
              />
            </div>
            <div class="export">
              <i class="fas fa-star text-white"></i>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <img
                    width="45px"
                    src="~assets/images/Profile_Pic.png"
                    alt=""
                  />
                  <div
                    class="d-flex justify-content-start align-items-start flex-column"
                  >
                    <p class="card-title mb-0 ms-2 fw-bold green">Title</p>
                    <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                      Victor Okoye
                    </p>
                  </div>
                </div>
                <i class="fas fa-share-alt"></i>
              </div>
              <hr style="width: 100%" />
              <div
                class="d-flex justify-content-between align-items-end flex-wrap"
              >
                <div class="d-flex justify-content-start align-items-center">
                  <i class="fas fa-heart"></i>
                  <p class="fw-bold ms-1 mb-0">43</p>
                  <i class="far fa-eye ms-2"></i>
                  <p class="fw-bold ms-1 mb-0">300</p>
                  <i class="fas fa-info-circle ms-2"></i>
                  <p class="fw-bold ms-1 mb-0">300</p>
                </div>
                <div
                  class="card-text d-flex justify-content-center align-items-center flex-column"
                >
                  <p class="mb-0 text-danger">Budget/hr</p>
                  <p class="fw-bold ms-2 mb-0">$233.00</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card gigs" style="width: 17rem">
            <div>
              <img
                src="~assets/images/job1.png"
                class="card-img-top"
                alt="..."
              />
            </div>
            <div class="export">
              <i class="fas fa-star text-white"></i>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <img
                    width="45px"
                    src="~assets/images/Profile_Pic.png"
                    alt=""
                  />
                  <div
                    class="d-flex justify-content-start align-items-start flex-column"
                  >
                    <p class="card-title mb-0 ms-2 fw-bold green">Title</p>
                    <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                      Victor Okoye
                    </p>
                  </div>
                </div>
                <i class="fas fa-share-alt"></i>
              </div>
              <hr style="width: 100%" />
              <div
                class="d-flex justify-content-between align-items-end flex-wrap"
              >
                <div class="d-flex justify-content-start align-items-center">
                  <i class="fas fa-heart"></i>
                  <p class="fw-bold ms-1 mb-0">43</p>
                  <i class="far fa-eye ms-2"></i>
                  <p class="fw-bold ms-1 mb-0">300</p>
                  <i class="fas fa-info-circle ms-2"></i>
                  <p class="fw-bold ms-1 mb-0">300</p>
                </div>
                <div
                  class="card-text d-flex justify-content-center align-items-center flex-column"
                >
                  <p class="mb-0 text-danger">Budget/hr</p>
                  <p class="fw-bold ms-2 mb-0">$233.00</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card gigs" style="width: 17rem">
            <div>
              <img
                src="~assets/images/job1.png"
                class="card-img-top"
                alt="..."
              />
            </div>
            <div class="export">
              <i class="fas fa-star text-white"></i>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <img
                    width="45px"
                    src="~assets/images/Profile_Pic.png"
                    alt=""
                  />
                  <div
                    class="d-flex justify-content-start align-items-start flex-column"
                  >
                    <p class="card-title mb-0 ms-2 fw-bold green">Title</p>
                    <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                      Victor Okoye
                    </p>
                  </div>
                </div>
                <i class="fas fa-share-alt"></i>
              </div>
              <hr style="width: 100%" />
              <div
                class="d-flex justify-content-between align-items-end flex-wrap"
              >
                <div class="d-flex justify-content-start align-items-center">
                  <i class="fas fa-heart"></i>
                  <p class="fw-bold ms-1 mb-0">43</p>
                  <i class="far fa-eye ms-2"></i>
                  <p class="fw-bold ms-1 mb-0">300</p>
                  <i class="fas fa-info-circle ms-2"></i>
                  <p class="fw-bold ms-1 mb-0">300</p>
                </div>
                <div
                  class="card-text d-flex justify-content-center align-items-center flex-column"
                >
                  <p class="mb-0 text-danger">Budget/hr</p>
                  <p class="fw-bold ms-2 mb-0">$233.00</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card gigs" style="width: 17rem">
            <div>
              <img
                src="~assets/images/job1.png"
                class="card-img-top"
                alt="..."
              />
            </div>
            <div class="export">
              <i class="fas fa-star text-white"></i>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <img
                    width="45px"
                    src="~assets/images/Profile_Pic.png"
                    alt=""
                  />
                  <div
                    class="d-flex justify-content-start align-items-start flex-column"
                  >
                    <p class="card-title mb-0 ms-2 fw-bold green">Title</p>
                    <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                      Victor Okoye
                    </p>
                  </div>
                </div>
                <i class="fas fa-share-alt"></i>
              </div>
              <hr style="width: 100%" />
              <div
                class="d-flex justify-content-between align-items-end flex-wrap"
              >
                <div class="d-flex justify-content-start align-items-center">
                  <i class="fas fa-heart"></i>
                  <p class="fw-bold ms-1 mb-0">43</p>
                  <i class="far fa-eye ms-2"></i>
                  <p class="fw-bold ms-1 mb-0">300</p>
                  <i class="fas fa-info-circle ms-2"></i>
                  <p class="fw-bold ms-1 mb-0">300</p>
                </div>
                <div
                  class="card-text d-flex justify-content-center align-items-center flex-column"
                >
                  <p class="mb-0 text-danger">Budget/hr</p>
                  <p class="fw-bold ms-2 mb-0">$233.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="list_view" id="list">
          <div class="card search_gigs">
            <div style="width: 13rem">
              <div>
                <img
                  src="~assets/images/job_long_1.png"
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <div class="export3">
                <i class="fas fa-star text-white"></i>
              </div>
            </div>
            <div
              class="card-body d-flex justify-content-between align-items-start flex-column"
            >
              <div
                class="w-100 d-flex justify-content-between align-items-center flex-wrap"
              >
                <div class="d-flex align-items-center">
                  <img
                    width="45px"
                    src="~assets/images/Profile_Pic.png"
                    alt=""
                  />
                  <div
                    class="d-flex justify-content-start align-items-start flex-column"
                  >
                    <p class="card-title mb-0 ms-2 fw-bold green">Job TItle</p>
                    <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                      Victor Okoye
                    </p>
                  </div>
                </div>
                <i class="fas fa-share-alt for_pointer"></i>
              </div>

              <div class="w-100">
                <hr style="width: 100%" />
                <div
                  class="d-flex justify-content-between align-items-start flex-wrap"
                >
                  <div class="d-flex justify-content-start align-items-center">
                    <i class="fas fa-heart"></i>
                    <p class="fw-bold ms-1 mb-0">43</p>
                    <i class="far fa-eye ms-2"></i>
                    <p class="fw-bold ms-1 mb-0">300</p>
                    <i class="fas fa-info-circle ms-2"></i>
                    <p class="fw-bold ms-1 mb-0">300</p>
                    <p class="mb-0 ms-3 fw-bold">$233.00</p>
                  </div>
                  <div
                    class="card-text d-flex justify-content-center align-items-center"
                  >
                    <p class="mb-0 text-danger">Budget/hr</p>
                    <p class="fw-bold ms-2 mb-0">$233.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card search_gigs">
            <div style="width: 13rem">
              <div>
                <img
                  src="~assets/images/job_long_1.png"
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <div class="export3">
                <i class="fas fa-star text-white"></i>
              </div>
            </div>
            <div
              class="card-body d-flex justify-content-between align-items-start flex-column"
            >
              <div
                class="w-100 d-flex justify-content-between align-items-center flex-wrap"
              >
                <div class="d-flex align-items-center">
                  <img
                    width="45px"
                    src="~assets/images/Profile_Pic.png"
                    alt=""
                  />
                  <div
                    class="d-flex justify-content-start align-items-start flex-column"
                  >
                    <p class="card-title mb-0 ms-2 fw-bold green">Job TItle</p>
                    <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                      Victor Okoye
                    </p>
                  </div>
                </div>
                <i class="fas fa-share-alt for_pointer"></i>
              </div>

              <div class="w-100">
                <hr style="width: 100%" />
                <div
                  class="d-flex justify-content-between align-items-start flex-wrap"
                >
                  <div class="d-flex justify-content-start align-items-center">
                    <i class="fas fa-heart"></i>
                    <p class="fw-bold ms-1 mb-0">43</p>
                    <i class="far fa-eye ms-2"></i>
                    <p class="fw-bold ms-1 mb-0">300</p>
                    <i class="fas fa-info-circle ms-2"></i>
                    <p class="fw-bold ms-1 mb-0">300</p>
                    <p class="mb-0 ms-3 fw-bold">$233.00</p>
                  </div>
                  <div
                    class="card-text d-flex justify-content-center align-items-center"
                  >
                    <p class="mb-0 text-danger">Budget/hr</p>
                    <p class="fw-bold ms-2 mb-0">$233.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card search_gigs">
            <div style="width: 13rem">
              <div>
                <img
                  src="~assets/images/job_long_1.png"
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <div class="export3">
                <i class="fas fa-star text-white"></i>
              </div>
            </div>
            <div
              class="card-body d-flex justify-content-between align-items-start flex-column"
            >
              <div
                class="w-100 d-flex justify-content-between align-items-center flex-wrap"
              >
                <div class="d-flex align-items-center">
                  <img
                    width="45px"
                    src="~assets/images/Profile_Pic.png"
                    alt=""
                  />
                  <div
                    class="d-flex justify-content-start align-items-start flex-column"
                  >
                    <p class="card-title mb-0 ms-2 fw-bold green">Job TItle</p>
                    <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                      Victor Okoye
                    </p>
                  </div>
                </div>
                <i class="fas fa-share-alt for_pointer"></i>
              </div>

              <div class="w-100">
                <hr style="width: 100%" />
                <div
                  class="d-flex justify-content-between align-items-start flex-wrap"
                >
                  <div class="d-flex justify-content-start align-items-center">
                    <i class="fas fa-heart"></i>
                    <p class="fw-bold ms-1 mb-0">43</p>
                    <i class="far fa-eye ms-2"></i>
                    <p class="fw-bold ms-1 mb-0">300</p>
                    <i class="fas fa-info-circle ms-2"></i>
                    <p class="fw-bold ms-1 mb-0">300</p>
                    <p class="mb-0 ms-3 fw-bold">$233.00</p>
                  </div>
                  <div
                    class="card-text d-flex justify-content-center align-items-center"
                  >
                    <p class="mb-0 text-danger">Budget/hr</p>
                    <p class="fw-bold ms-2 mb-0">$233.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card search_gigs">
            <div style="width: 13rem">
              <div>
                <img
                  src="~assets/images/job_long_1.png"
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <div class="export3">
                <i class="fas fa-star text-white"></i>
              </div>
            </div>
            <div
              class="card-body d-flex justify-content-between align-items-start flex-column"
            >
              <div
                class="w-100 d-flex justify-content-between align-items-center flex-wrap"
              >
                <div class="d-flex align-items-center">
                  <img
                    width="45px"
                    src="~assets/images/Profile_Pic.png"
                    alt=""
                  />
                  <div
                    class="d-flex justify-content-start align-items-start flex-column"
                  >
                    <p class="card-title mb-0 ms-2 fw-bold green">Job TItle</p>
                    <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                      Victor Okoye
                    </p>
                  </div>
                </div>
                <i class="fas fa-share-alt for_pointer"></i>
              </div>

              <div class="w-100">
                <hr style="width: 100%" />
                <div
                  class="d-flex justify-content-between align-items-start flex-wrap"
                >
                  <div class="d-flex justify-content-start align-items-center">
                    <i class="fas fa-heart"></i>
                    <p class="fw-bold ms-1 mb-0">43</p>
                    <i class="far fa-eye ms-2"></i>
                    <p class="fw-bold ms-1 mb-0">300</p>
                    <i class="fas fa-info-circle ms-2"></i>
                    <p class="fw-bold ms-1 mb-0">300</p>
                    <p class="mb-0 ms-3 fw-bold">$233.00</p>
                  </div>
                  <div
                    class="card-text d-flex justify-content-center align-items-center"
                  >
                    <p class="mb-0 text-danger">Budget/hr</p>
                    <p class="fw-bold ms-2 mb-0">$233.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card search_gigs">
            <div style="width: 13rem">
              <div>
                <img
                  src="~assets/images/job_long_1.png"
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <div class="export3">
                <i class="fas fa-star text-white"></i>
              </div>
            </div>
            <div
              class="card-body d-flex justify-content-between align-items-start flex-column"
            >
              <div
                class="w-100 d-flex justify-content-between align-items-center flex-wrap"
              >
                <div class="d-flex align-items-center">
                  <img
                    width="45px"
                    src="~assets/images/Profile_Pic.png"
                    alt=""
                  />
                  <div
                    class="d-flex justify-content-start align-items-start flex-column"
                  >
                    <p class="card-title mb-0 ms-2 fw-bold green">Job TItle</p>
                    <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                      Victor Okoye
                    </p>
                  </div>
                </div>
                <i class="fas fa-share-alt for_pointer"></i>
              </div>

              <div class="w-100">
                <hr style="width: 100%" />
                <div
                  class="d-flex justify-content-between align-items-start flex-wrap"
                >
                  <div class="d-flex justify-content-start align-items-center">
                    <i class="fas fa-heart"></i>
                    <p class="fw-bold ms-1 mb-0">43</p>
                    <i class="far fa-eye ms-2"></i>
                    <p class="fw-bold ms-1 mb-0">300</p>
                    <i class="fas fa-info-circle ms-2"></i>
                    <p class="fw-bold ms-1 mb-0">300</p>
                    <p class="mb-0 ms-3 fw-bold">$233.00</p>
                  </div>
                  <div
                    class="card-text d-flex justify-content-center align-items-center"
                  >
                    <p class="mb-0 text-danger">Budget/hr</p>
                    <p class="fw-bold ms-2 mb-0">$233.00</p>
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
            <li
              class="page-item m-1 m-lg-2 m-md-2 d-none d-md-block d-lg-block"
            >
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
    };
  },
  methods: {
    async listView() {
      document.getElementById("grid").style.display = "none";
      document.getElementById("list").style.display = "block";
      document.getElementById("list_color").style.color = "#52BE71";
      document.getElementById("grid_color").style.color = "#C4CDD5";
    },
    async gridView() {
      document.getElementById("list").style.display = "none";
      document.getElementById("grid").style.display = "flex";
      document.getElementById("grid_color").style.color = "#52BE71";
      document.getElementById("list_color").style.color = "#C4CDD5";
    },
  },
};
</script>
