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
              <div class="jobs_tab" id="jobs_tab">
                <p class="mb-0 gray-bg">Jobs (454)</p>
              </div>
            </NuxtLink>
            <NuxtLink to="/graphics_design_gigs">
              <div class="gigs_tab" id="gigs_tab">
                <p class="mb-0 gray-bg">Gigs (10)</p>
              </div>
            </NuxtLink>
            <NuxtLink to="/graphics_design_users">
              <div class="users_tab jgu_active" id="users_tab">
                <p class="mb-0">Users (64)</p>
              </div>
            </NuxtLink>
          </div>

          <div
            class="
              d-flex
              justify-content-lg-end justify-content-center
              gap-2
              flex-wrap
              mt-5
              col-12 col-md-11 col-lg-11
            "
          >
            <div class="card gigs box-shadow-iz" style="width: 14.5rem">
              <img
                src="~assets/images/user1.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p
                  class="text-center mb-0 ms-2 fs-6 fw-bold"
                  style="margin-top: -5px"
                >
                  Victor Okoye
                </p>
                <p class="green text-center fs-6 mb-1">Graphic Designer</p>
                <div class="d-flex justify-content-center align-items-center">
                  <img src="~assets/images/star.png" alt="" />
                  <p class="mb-0 text-warning ms-1">5.0</p>
                </div>
              </div>
            </div>
            <div class="card gigs box-shadow-iz" style="width: 14.5rem">
              <img
                src="~assets/images/user2.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p
                  class="text-center mb-0 ms-2 fs-6 fw-bold"
                  style="margin-top: -5px"
                >
                  Victor Okoye
                </p>
                <p class="green text-center fs-6 mb-1">Graphic Designer</p>
                <div class="d-flex justify-content-center align-items-center">
                  <img src="~assets/images/star.png" alt="" />
                  <p class="mb-0 text-warning ms-1">5.0</p>
                </div>
              </div>
            </div>
            <div class="card gigs box-shadow-iz" style="width: 14.5rem">
              <img
                src="~assets/images/user3.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p
                  class="text-center mb-0 ms-2 fs-6 fw-bold"
                  style="margin-top: -5px"
                >
                  Victor Okoye
                </p>
                <p class="green text-center fs-6 mb-1">Graphic Designer</p>
                <div class="d-flex justify-content-center align-items-center">
                  <img src="~assets/images/star.png" alt="" />
                  <p class="mb-0 text-warning ms-1">5.0</p>
                </div>
              </div>
            </div>
            <div class="card gigs box-shadow-iz" style="width: 14.5rem">
              <img
                src="~assets/images/user4.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p
                  class="text-center mb-0 ms-2 fs-6 fw-bold"
                  style="margin-top: -5px"
                >
                  Victor Okoye
                </p>
                <p class="green text-center fs-6 mb-1">Graphic Designer</p>
                <div class="d-flex justify-content-center align-items-center">
                  <img src="~assets/images/star.png" alt="" />
                  <p class="mb-0 text-warning ms-1">5.0</p>
                </div>
              </div>
            </div>
            <div class="card gigs box-shadow-iz" style="width: 14.5rem">
              <img
                src="~assets/images/user1.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p
                  class="text-center mb-0 ms-2 fs-6 fw-bold"
                  style="margin-top: -5px"
                >
                  Victor Okoye
                </p>
                <p class="green text-center fs-6 mb-1">Graphic Designer</p>
                <div class="d-flex justify-content-center align-items-center">
                  <img src="~assets/images/star.png" alt="" />
                  <p class="mb-0 text-warning ms-1">5.0</p>
                </div>
              </div>
            </div>
            <div class="card gigs box-shadow-iz" style="width: 14.5rem">
              <img
                src="~assets/images/user2.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p
                  class="text-center mb-0 ms-2 fs-6 fw-bold"
                  style="margin-top: -5px"
                >
                  Victor Okoye
                </p>
                <p class="green text-center fs-6 mb-1">Graphic Designer</p>
                <div class="d-flex justify-content-center align-items-center">
                  <img src="~assets/images/star.png" alt="" />
                  <p class="mb-0 text-warning ms-1">5.0</p>
                </div>
              </div>
            </div>
            <div class="card gigs box-shadow-iz" style="width: 14.5rem">
              <img
                src="~assets/images/user3.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p
                  class="text-center mb-0 ms-2 fs-6 fw-bold"
                  style="margin-top: -5px"
                >
                  Victor Okoye
                </p>
                <p class="green text-center fs-6 mb-1">Graphic Designer</p>
                <div class="d-flex justify-content-center align-items-center">
                  <img src="~assets/images/star.png" alt="" />
                  <p class="mb-0 text-warning ms-1">5.0</p>
                </div>
              </div>
            </div>
            <div class="card gigs box-shadow-iz" style="width: 14.5rem">
              <img
                src="~assets/images/user4.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p
                  class="text-center mb-0 ms-2 fs-6 fw-bold"
                  style="margin-top: -5px"
                >
                  Victor Okoye
                </p>
                <p class="green text-center fs-6 mb-1">Graphic Designer</p>
                <div class="d-flex justify-content-center align-items-center">
                  <img src="~assets/images/star.png" alt="" />
                  <p class="mb-0 text-warning ms-1">5.0</p>
                </div>
              </div>
            </div>
            <div class="card gigs box-shadow-iz" style="width: 14.5rem">
              <img
                src="~assets/images/user1.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p
                  class="text-center mb-0 ms-2 fs-6 fw-bold"
                  style="margin-top: -5px"
                >
                  Victor Okoye
                </p>
                <p class="green text-center fs-6 mb-1">Graphic Designer</p>
                <div class="d-flex justify-content-center align-items-center">
                  <img src="~assets/images/star.png" alt="" />
                  <p class="mb-0 text-warning ms-1">5.0</p>
                </div>
              </div>
            </div>
            <div class="card gigs box-shadow-iz" style="width: 14.5rem">
              <img
                src="~assets/images/user2.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p
                  class="text-center mb-0 ms-2 fs-6 fw-bold"
                  style="margin-top: -5px"
                >
                  Victor Okoye
                </p>
                <p class="green text-center fs-6 mb-1">Graphic Designer</p>
                <div class="d-flex justify-content-center align-items-center">
                  <img src="~assets/images/star.png" alt="" />
                  <p class="mb-0 text-warning ms-1">5.0</p>
                </div>
              </div>
            </div>
            <div class="card gigs box-shadow-iz" style="width: 14.5rem">
              <img
                src="~assets/images/user3.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p
                  class="text-center mb-0 ms-2 fs-6 fw-bold"
                  style="margin-top: -5px"
                >
                  Victor Okoye
                </p>
                <p class="green text-center fs-6 mb-1">Graphic Designer</p>
                <div class="d-flex justify-content-center align-items-center">
                  <img src="~assets/images/star.png" alt="" />
                  <p class="mb-0 text-warning ms-1">5.0</p>
                </div>
              </div>
            </div>
            <div class="card gigs box-shadow-iz" style="width: 14.5rem">
              <img
                src="~assets/images/user4.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p
                  class="text-center mb-0 ms-2 fs-6 fw-bold"
                  style="margin-top: -5px"
                >
                  Victor Okoye
                </p>
                <p class="green text-center fs-6 mb-1">Graphic Designer</p>
                <div class="d-flex justify-content-center align-items-center">
                  <img src="~assets/images/star.png" alt="" />
                  <p class="mb-0 text-warning ms-1">5.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5 pt-5">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link border-custom-iz m-1 m-lg-2 m-md-2 prev"
              ><i class="fas fa-angle-left text-white"></i
            ></a>
          </li>
          <div class="pages">
            <li class="page-item m-1 m-lg-2 m-md-2">
              <a class="page-link iz_active" href="#">1</a>
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
            <a class="page-link border-custom-iz m-1 m-lg-2 m-md-2 next"
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
