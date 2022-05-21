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
      <div class="d-flex justify-content-center align-items-center mt-5">
        <div class="for_shadow" style="boder-radius: 5px">
          <input
            id="toggle-on"
            
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
       
       
            <span class="vl"></span> <label for="toggle-off" class="btn1" >Auctions</label>
         
        </div>
      </div>
      
      <div class="designs_main">

        <div
          class="graphics_tabs mt-5 pt-2 d-flex justify-content-center align-items-center flex-column col-12 col-md-1 col-lg-1"
        >
          <NuxtLink to="/graphics_design_jobs">
            <div class="jobs_tab jgu_active" id="jobs_tab" @click="Jobs454">
              <p class="mb-0">Jobs (454)</p>
            </div>
          </NuxtLink>
          <NuxtLink to="/graphics_design_gigs">
            <div class="gigs_tab" id="gigs_tab" @click="gigs10">
              <p class="mb-0">Gigs (10)</p>
            </div>
          </NuxtLink>
          <NuxtLink to="/graphics_design_users">
            <div class="users_tab" id="users_tab" @click="Users64">
              <p class="mb-0">Users (64)</p>
            </div>
          </NuxtLink>
        </div>

        <div class="mygigs mt-5 col-12 col-md-9 col-lg-9">
          <NuxtLink to="/gig_details">
            <div class="card gigs" style="width: 15rem">
              <img
                src="~assets/images/job1.png"
                class="card-img-top"
                alt="..."
              />
              <div class="export">
              <i class="fas fa-star text-white"></i>
            </div>
              <div class="card-body">
                <div class="d-flex justify-content- align-items-center">
                  <div class="d-flex align-items-center">
                    <img
                      width="45px"
                      src="~assets/images/Profile_Pic.png"
                      alt=""
                    />
                    <div
                      class="d-flex justify-content-start align-items-start flex-column"
                    >
                      <p class="card-title mb-0 ms-2 dark_green fs-5">Title</p>
                      <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                        Victor Okoye
                      </p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center align-items-center">
                    <i class="fas fa-share-alt text-muted"></i>
                  </div>
                </div>
                <hr style="width: 100%" />
                <div class="d-flex justify-content-between align-items-end">
                  <div
                    class="card-text d-flex justify-content-start align-items-center"
                  >
                    <i class="fas fa-heart fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">43</p>
                    <i class="far fa-eye ms-2 fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">300</p>
                    <i class="fas fa-info-circle ms-2 fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">300</p>
                  </div>
                  <div class="mb-0 d-flex flex-column">
                    <p class="mb-0 text-danger text-start fs-6">Budget/hr</p>
                    <p class="fw-bold mb-0 text-start">$233.00</p>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>

          <NuxtLink to="/gig_details">
            <div class="card gigs" style="width: 15rem">
              <img
                src="~assets/images/job2.png"
                class="card-img-top"
                alt="..."
              />
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
                      <p class="card-title mb-0 ms-2 dark_green fs-5">Title</p>
                      <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                        Victor Okoye
                      </p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center align-items-center">
                    <i class="fas fa-share-alt text-muted"></i>
                  </div>
                </div>
                <hr style="width: 100%" />
                <div class="d-flex justify-content-between align-items-end">
                  <div
                    class="card-text d-flex justify-content-start align-items-center"
                  >
                    <i class="fas fa-heart fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">43</p>
                    <i class="far fa-eye ms-2 fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">300</p>
                    <i class="fas fa-info-circle ms-2 fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">300</p>
                  </div>
                  <div class="mb-0 d-flex flex-column">
                    <p class="mb-0 text-danger text-start fs-6">Budget/hr</p>
                    <p class="fw-bold mb-0 text-start">$233.00</p>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>

          <NuxtLink to="/gig_details">
            <div class="card gigs" style="width: 15rem">
              <img
                src="~assets/images/job3.png"
                class="card-img-top"
                alt="..."
              />
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
                      <p class="card-title mb-0 ms-2 dark_green fs-5">Title</p>
                      <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                        Victor Okoye
                      </p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center align-items-center">
                    <i class="fas fa-share-alt text-muted"></i>
                  </div>
                </div>
                <hr style="width: 100%" />
                <div class="d-flex justify-content-between align-items-end">
                  <div
                    class="card-text d-flex justify-content-start align-items-center"
                  >
                    <i class="fas fa-heart fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">43</p>
                    <i class="far fa-eye ms-2 fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">300</p>
                    <i class="fas fa-info-circle ms-2 fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">300</p>
                  </div>
                  <div class="mb-0 d-flex flex-column">
                    <p class="mb-0 text-danger text-start fs-6">Budget/hr</p>
                    <p class="fw-bold mb-0 text-start">$233.00</p>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>

          <NuxtLink to="/gig_details">
            <div class="card gigs" style="width: 15rem">
              <img
                src="~assets/images/job1.png"
                class="card-img-top"
                alt="..."
              />
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
                      <p class="card-title mb-0 ms-2 dark_green fs-5">Title</p>
                      <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                        Victor Okoye
                      </p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center align-items-center">
                    <i class="fas fa-share-alt text-muted"></i>
                  </div>
                </div>
                <hr style="width: 100%" />
                <div class="d-flex justify-content-between align-items-end">
                  <div
                    class="card-text d-flex justify-content-start align-items-center"
                  >
                    <i class="fas fa-heart fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">43</p>
                    <i class="far fa-eye ms-2 fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">300</p>
                    <i class="fas fa-info-circle ms-2 fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">300</p>
                  </div>
                  <div class="mb-0 d-flex flex-column">
                    <p class="mb-0 text-danger text-start fs-6">Budget/hr</p>
                    <p class="fw-bold mb-0 text-start">$233.00</p>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>

          <NuxtLink to="/gig_details">
            <div class="card gigs" style="width: 15rem">
              <img
                src="~assets/images/job2.png"
                class="card-img-top"
                alt="..."
              />
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
                      <p class="card-title mb-0 ms-2 dark_green fs-5">Title</p>
                      <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                        Victor Okoye
                      </p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center align-items-center">
                    <i class="fas fa-share-alt text-muted"></i>
                  </div>
                </div>
                <hr style="width: 100%" />
                <div class="d-flex justify-content-between align-items-end">
                  <div
                    class="card-text d-flex justify-content-start align-items-center"
                  >
                    <i class="fas fa-heart fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">43</p>
                    <i class="far fa-eye ms-2 fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">300</p>
                    <i class="fas fa-info-circle ms-2 fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">300</p>
                  </div>
                  <div class="mb-0 d-flex flex-column">
                    <p class="mb-0 text-danger text-start fs-6">Budget/hr</p>
                    <p class="fw-bold mb-0 text-start">$233.00</p>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>

          <NuxtLink to="/gig_details">
            <div class="card gigs" style="width: 15rem">
              <img
                src="~assets/images/job3.png"
                class="card-img-top"
                alt="..."
              />
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
                      <p class="card-title mb-0 ms-2 dark_green fs-5">Title</p>
                      <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                        Victor Okoye
                      </p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center align-items-center">
                    <i class="fas fa-share-alt text-muted"></i>
                  </div>
                </div>
                <hr style="width: 100%" />
                <div class="d-flex justify-content-between align-items-end">
                  <div
                    class="card-text d-flex justify-content-start align-items-center"
                  >
                    <i class="fas fa-heart fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">43</p>
                    <i class="far fa-eye ms-2 fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">300</p>
                    <i class="fas fa-info-circle ms-2 fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">300</p>
                  </div>
                  <div class="mb-0 d-flex flex-column">
                    <p class="mb-0 text-danger text-start fs-6">Budget/hr</p>
                    <p class="fw-bold mb-0 text-start">$233.00</p>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>

          <NuxtLink to="/gig_details">
            <div class="card gigs" style="width: 15rem">
              <img
                src="~assets/images/job1.png"
                class="card-img-top"
                alt="..."
              />
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
                      <p class="card-title mb-0 ms-2 dark_green fs-5">Title</p>
                      <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                        Victor Okoye
                      </p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center align-items-center">
                    <i class="fas fa-share-alt text-muted"></i>
                  </div>
                </div>
                <hr style="width: 100%" />
                <div class="d-flex justify-content-between align-items-end">
                  <div
                    class="card-text d-flex justify-content-start align-items-center"
                  >
                    <i class="fas fa-heart fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">43</p>
                    <i class="far fa-eye ms-2 fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">300</p>
                    <i class="fas fa-info-circle ms-2 fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">300</p>
                  </div>
                  <div class="mb-0 d-flex flex-column">
                    <p class="mb-0 text-danger text-start fs-6">Budget/hr</p>
                    <p class="fw-bold mb-0 text-start">$233.00</p>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>

          <NuxtLink to="/gig_details">
            <div class="card gigs" style="width: 15rem">
              <img
                src="~assets/images/job2.png"
                class="card-img-top"
                alt="..."
              />
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
                      <p class="card-title mb-0 ms-2 dark_green fs-5">Title</p>
                      <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                        Victor Okoye
                      </p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center align-items-center">
                    <i class="fas fa-share-alt text-muted"></i>
                  </div>
                </div>
                <hr style="width: 100%" />
                <div class="d-flex justify-content-between align-items-end">
                  <div
                    class="card-text d-flex justify-content-start align-items-center"
                  >
                    <i class="fas fa-heart fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">43</p>
                    <i class="far fa-eye ms-2 fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">300</p>
                    <i class="fas fa-info-circle ms-2 fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">300</p>
                  </div>
                  <div class="mb-0 d-flex flex-column">
                    <p class="mb-0 text-danger text-start fs-6">Budget/hr</p>
                    <p class="fw-bold mb-0 text-start">$233.00</p>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>

          <NuxtLink to="/gig_details">
            <div class="card gigs" style="width: 15rem">
              <img
                src="~assets/images/job3.png"
                class="card-img-top"
                alt="..."
              />
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
                      <p class="card-title mb-0 ms-2 dark_green fs-5">Title</p>
                      <p class="mb-0 ms-2 fs-6" style="margin-top: -5px">
                        Victor Okoye
                      </p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center align-items-center">
                    <i class="fas fa-share-alt text-muted"></i>
                  </div>
                </div>
                <hr style="width: 100%" />
                <div class="d-flex justify-content-between align-items-end">
                  <div
                    class="card-text d-flex justify-content-start align-items-center"
                  >
                    <i class="fas fa-heart fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">43</p>
                    <i class="far fa-eye ms-2 fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">300</p>
                    <i class="fas fa-info-circle ms-2 fs-6"></i>
                    <p class="fw-bold ms-1 mb-0 fs-6">300</p>
                  </div>
                  <div class="mb-0 d-flex flex-column">
                    <p class="mb-0 text-danger text-start fs-6">Budget/hr</p>
                    <p class="fw-bold mb-0 text-start">$233.00</p>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
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
// export default {
//   methods: {
//     async gigs10() {
//       document.getElementById("jobs_tab").style.background = "white";
//       document.getElementById("jobs_tab").style.color = "black";
//       document.getElementById("gigs_tab").style.background = "#52BE71";
//       document.getElementById("gigs_tab").style.color = "white";
//       document.getElementById("users_tab").style.background = "white";
//       document.getElementById("users_tab").style.color = "black";
//       // alert("hello");
//     },
//     async Jobs454() {
//       document.getElementById("jobs_tab").style.background = "#52BE71";
//       document.getElementById("jobs_tab").style.color = "white";
//       document.getElementById("gigs_tab").style.background = "white";
//       document.getElementById("gigs_tab").style.color = "black";
//       document.getElementById("users_tab").style.background = "white";
//       document.getElementById("users_tab").style.color = "black";
//     },
//     async Users64() {
//       document.getElementById("jobs_tab").style.background = "white";
//       document.getElementById("jobs_tab").style.color = "black";
//       document.getElementById("gigs_tab").style.background = "white";
//       document.getElementById("gigs_tab").style.color = "black";
//       document.getElementById("users_tab").style.background = "#52BE71";
//       document.getElementById("users_tab").style.color = "white";
//     },
//   },
// };
//
</script>
