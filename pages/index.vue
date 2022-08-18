<template>
  <div>
    <Loginbtn />
    <ServicesNav />

    <!-- carousel -->

    <div class="bg-back2">
      <div class="container-fulid bg-back">
        <div class="container mt-lg-5">
          <div class="row mx-0 my-lg-5 align-items-center my-md-3 my-3">
            <div class="col-12 col-g-6 col-md-6">
              <h1 class="fw-bold home_heading green ban_head mt-lg-5">Best Jobs.</h1>
              <h1 class="fw-bold home_heading green ban_head">Best Artisans.</h1>
              <h1 class="fw-bold home_heading green ban_head">All in one place.</h1>
              <div class="all_search mt-3">
                <div class="form-group has-searches w-100">
                  <span class="text-dark py-1 fa fa-search form-control-feedback"></span>
                  <input
                    type="text"
                    class="form-control form-select-2 fs-6 text-dark"
                    placeholder="Search of Jobs & services e.g Painter,designer, e.t.c"
                  />
                </div>
                <button class="search ms-2">Search</button>
              </div>
            </div>
            <div
              class="col-12 col-md-6 d-flex justify-content-center col-lg-6 d-none d-md-block d-lg-block"
            >
              <!-- <VueSlickCarousel :slidesToShow="1" :arrows="false" :autoplay="true" :dots="false"> -->
              <!-- <div class="d-flex justify-content-center" id="div-1">
              <img
                width="300px"
                class="illustration"
                src="~assets/images/illustrations.png"
                alt=""
                id="myimg"
              />
            </div>
            <div class="d-flex justify-content-center" id="div-1">
              <img
                width="400px"
                class="illustration"
                src="~assets/images/gig_publish_img.png"
                alt=""
                id="myimg"
              />
            </div> -->

              <!-- </VueSlickCarousel> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- categories -->
    <div class="container px-3 px-lg-5 mt-5">
      <p class="fs-3 home_heading">Our Popular Categories</p>
      <div class="text-center">
        <div class="">
          <div
            class="d-flex justify-content-center justify-content-lg-between justify-content-md-between flex-wrap"
          >
            <div class="categ1 for_shadow">
              <img class="mb-2" width="37px" src="~assets/images/Bag.png" alt="" />
              <p class="mb-0 fs-6 fw-bold">Accounting & Finance</p>
              <p class="gray fs-7 mb-0 fw-500">2590 Open positions</p>
            </div>
            <div class="categ1 for_shadow">
              <img class="mb-2" width="37px" src="~assets/images/sales.png" alt="" />
              <p class="mb-0 fs-6 fw-bold">Sales & Marketing</p>
              <p class="gray fs-7 mb-0 fw-500">2590 Open positions</p>
            </div>
            <div class="categ1 for_shadow">
              <img class="mb-2" width="37px" src="~assets/images/rocket.png" alt="" />
              <p class="mb-0 fs-6 fw-bold">Information Technology</p>
              <p class="gray fs-7 mb-0 fw-500">2590 Open positions</p>
            </div>

            <div class="categ1 for_shadow">
              <img class="mb-2" width="37px" src="~assets/images/rocket.png" alt="" />
              <p class="mb-0 fs-6 fw-bold">Food Service</p>
              <p class="gray fs-7 mb-0 fw-500">2590 Open positions</p>
            </div>
          </div>
          <div
            class="d-flex justify-content-center justify-content-lg-between justify-content-md-between flex-wrap"
          >
            <div class="categ1 for_shadow">
              <img class="mb-2" width="37px" src="~assets/images/Bag.png" alt="" />
              <p class="mb-0 fs-6 fw-bold">Design & Art</p>
              <p class="gray fs-7 mb-0 fw-500">2590 Open positions</p>
            </div>
            <div class="categ1 for_shadow">
              <img class="mb-2" width="37px" src="~assets/images/Bag.png" alt="" />
              <p class="mb-0 fs-6 fw-bold">Automotive</p>
              <p class="gray fs-7 mb-0 fw-500">2590 Open positions</p>
            </div>
            <div class="categ1 for_shadow">
              <img class="mb-2" width="37px" src="~assets/images/Bag.png" alt="" />
              <p class="mb-0 fs-6 fw-bold">Healthcare</p>
              <p class="gray fs-7 mb-0 fw-500">2590 Open positions</p>
            </div>
            <div class="categ1 for_shadow">
              <img class="mb-2" width="37px" src="~assets/images/Bag.png" alt="" />
              <p class="mb-0 fs-6 fw-bold">Information Construction</p>
              <p class="gray fs-7 mb-0 fw-500">2590 Open positions</p>
            </div>
          </div>
        </div>
        <button class="search mt-4" style="font-size: 15px; font-weight: lighter">
          Browse all categories
        </button>
      </div>
    </div>

    <!-- recent jons -->
    <div
      class="container-fulid text-center px-3 px-lg-5 mt-5 pt-5"
      style="background-color: #fbfbfb"
    >
      <div class="container pb-5">
        <p class="fs-3 home_heading">Recent Jobs</p>
        <div class="d-flex justify-content-center align-items-center mt-4">
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
        <div class="recent_jobs mt-5">
          <div class="feature_jobs for_shadow col-12 col-md-5 col-lg-5 my-3">
            <div class="d-flex justify_content-center align-items-center">
              <img src="~assets/images/job_mem1.png" alt="" />
              <div class="ms-2">
                <p class="mb-0 fw-bold">Social Media Specialist</p>
                <p class="mb-0 gray fs-7 text-start">StarArt, New York, NY, USA</p>
              </div>
            </div>
            <div>
              <p class="mb-0 text-danger fw-bold ms-5 ms-lg-0 ps-2 ps-lg-0">
                Budget : <span class="text-black">$345</span>
              </p>
            </div>
          </div>
          <div class="feature_jobs for_shadow col-12 col-md-5 col-lg-5 my-3">
            <div class="d-flex justify_content-center align-items-center">
              <img src="~assets/images/job_mem2.png" alt="" />
              <div class="ms-2">
                <p class="mb-0 fw-bold">Social Media Specialist</p>
                <p class="mb-0 gray fs-7 text-start">StarArt, New York, NY, USA</p>
              </div>
            </div>
            <div>
              <p class="mb-0 text-danger fw-bold ms-5 ms-lg-0 ps-2 ps-lg-0">
                Budget : <span class="text-black">$345</span>
              </p>
            </div>
          </div>
          <div class="feature_jobs for_shadow col-12 col-md-5 col-lg-5 my-3">
            <div class="d-flex justify_content-center align-items-center">
              <img src="~assets/images/job_mem3.png" alt="" />
              <div class="ms-2">
                <p class="mb-0 fw-bold">Social Media Specialist</p>
                <p class="mb-0 gray fs-7 text-start">StarArt, New York, NY, USA</p>
              </div>
            </div>
            <div>
              <p class="mb-0 text-danger fw-bold ms-5 ms-lg-0 ps-2 ps-lg-0">
                Budget : <span class="text-black">$345</span>
              </p>
            </div>
          </div>
          <div class="feature_jobs for_shadow col-12 col-md-5 col-lg-5 my-3">
            <div class="d-flex justify_content-center align-items-center">
              <img src="~assets/images/job_mem4.png" alt="" />
              <div class="ms-2">
                <p class="mb-0 fw-bold">Social Media Specialist</p>
                <p class="mb-0 gray fs-7 text-start">StarArt, New York, NY, USA</p>
              </div>
            </div>
            <div>
              <p class="mb-0 text-danger fw-bold ms-5 ms-lg-0 ps-2 ps-lg-0">
                Budget : <span class="text-black">$345</span>
              </p>
            </div>
          </div>
        </div>
        <button class="btn post_job_btn px-5 fw-bold dark_green mt-5">
          Show more jobs
        </button>
      </div>
    </div>

    <!-- welcome -->
    <div class="welcome" style="background-color: #be1e2e !important">
      <div class="container text-center px-3 px-lg-5 pt-5 py-5">
        <p class="fs-2 fw-bolder text-white mb-2">Welcome to anyskills</p>
        <p class="gray fs-6">
          A place where leading employers are already<br />
          looking for your talent and experience.
        </p>
        <div class="statistics mt-5">
          <div class="col-12 col-md-3 col-lg-3">
            <p class="fs-6 mb-5 text-light">Only relevant and verified vacancies 24/7</p>
            <p class="mb-0 fs-2 text-light fw-bold">300</p>
            <p class="mb-0 fs-7 text-light">Jobs Everyday</p>
          </div>
          <div class="col-0 col-md-1 col-lg-1 text-light">|</div>
          <div class="col-12 col-md-3 col-lg-3">
            <p class="fs-6 mb-5 text-light">More than 3.8 million visitors every day</p>
            <p class="mb-0 fs-2 text-light fw-bold">300+</p>
            <p class="mb-0 fs-7 text-light">Current Resumes</p>
          </div>
          <div class="col-0 col-md-1 col-lg-1 text-light">|</div>
          <div class="col-12 col-md-3 col-lg-3">
            <p class="fs-6 mb-5 text-light">Leading recruiting website in the US</p>
            <p class="mb-0 fs-2 text-light fw-bold">800</p>
            <p class="mb-0 fs-7 text-light">Companies</p>
          </div>
        </div>
      </div>
    </div>

    <!-- how it works -->
    <div class="container text-center px-3 px-lg-5 mt-5">
      <p class="fs-3 home_heading text-center">How it works</p>
      <div class="d-flex align-items-center flex-wrap">
        <div class="col-lg-6 col-12">
          <img src="~assets/images/dots.png" class="d-lg-block d-none" alt="" />
        </div>
        <div class="col-lg-6 col-12">
          <div class="ms-5">
            <p class="mb-0 text-lg-start text-center green fw-bold">1. Post a job</p>
            <p class="gray fs-7 text-lg-start text-center">Easy search by category</p>
            <p class="mb-0 text-lg-start text-center green fw-bold">
              2. Accept Quotes & Bids
            </p>
            <p class="gray fs-7 text-lg-start text-center">Choose a suitable job</p>
            <p class="mb-0 text-lg-start text-center green fw-bold">
              3. Kickoff Projects
            </p>
            <p class="gray fs-7 text-lg-start text-center">Get a personal job offer</p>
          </div>
        </div>
      </div>
    </div>

    <!-- success stories -->
    <div class="success_stories">
      <div class="container text-center px-3 px-lg-5 mt-3 py-5">
        <p class="fs-3 home_heading">Success Stories</p>
        <div class="mt-5 d-flex justify-content-around align-items-center flex-wrap">
          <div class="story_teller my-3">
            <div class="story">
              <p class="text-black fw-bolder fs-6">Incredible Experience</p>
              <p class="text-black fs-8">
                We had an incredible experience working withanyskills and were impressed
                they made such a big difference in only three weeks. Our team is so
                grateful for the wonderful improvements they made and their ability to get
                familiar with the concept so quickly.
              </p>
              <img class="down" src="~assets/images/down.png" alt="" />
            </div>
            <div class="mt-4 d-flex justify-content-center align-items-center">
              <img src="~assets/images/story.png" alt="" />
              <div class="ms-2">
                <p class="mb-0 fw-bold fs-6">Prodigy Dan</p>
                <p class="mb-0 fs-6">Visual Artist</p>
              </div>
            </div>
          </div>
          <div class="story_teller my-3">
            <div class="story">
              <p class="text-black fw-bold fs-6">
                Dependable, Responsive, Professional Partner
              </p>
              <p class="text-black fs-7">
                Tellvalley has collaborated withAnyskills for several projects such. The
                experience has been pleasant, professional and exceeding our expectations.
              </p>
              <img class="down" src="~assets/images/down.png" alt="" />
            </div>
            <div class="mt-4 d-flex justify-content-center align-items-center">
              <img src="~assets/images/story.png" alt="" />
              <div class="ms-2">
                <p class="mb-0 fw-bold fs-6">TellValley Studios</p>
                <p class="mb-0 fs-6">Creative Agency</p>
              </div>
            </div>
          </div>
          <div class="story_teller my-3">
            <div class="story">
              <p class="text-black fw-bold fs-6">
                Dependable, Responsive, Professional Partner
              </p>
              <p class="text-black fs-7">
                Tellvalley has collaborated withAnyskills for several projects such. The
                experience has been pleasant, professional and exceeding our expectations.
              </p>
              <img class="down" src="~assets/images/down.png" alt="" />
            </div>
            <div class="mt-4 d-flex justify-content-center align-items-center">
              <img src="~assets/images/story.png" alt="" />
              <div class="ms-2">
                <p class="mb-0 fw-bold fs-6">Victor Okoye</p>
                <p class="mb-0 fs-6">Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- companies -->
    <div class="container text-center px-3 px-lg-5 mt-5">
      <p class="fs-3 fw-bold">Companies we have helped</p>
      <VueSlickCarousel :arrows="false" :dots="true">
        <div
          class="helped_companies justify-content-md-between justify-content-lg-between mt-4"
        >
          <img src="~assets/images/microsoft.png" alt="" />
          <img src="~assets/images/google.png" alt="" />
          <img src="~assets/images/airbnb.png" alt="" />
          <img src="~assets/images/hubspot.png" alt="" />
          <img src="~assets/images/valley.png" class="logo-44" alt="" />
        </div>
        <div
          class="helped_companies justify-content-md-between justify-content-lg-between mt-4"
        >
          <img src="~assets/images/microsoft.png" alt="" />
          <img src="~assets/images/google.png" alt="" />
          <img src="~assets/images/airbnb.png" alt="" />
          <img src="~assets/images/hubspot.png" alt="" />
          <img src="~assets/images/valley.png" class="logo-44" alt="" />
        </div>
        <div
          class="helped_companies justify-content-md-between justify-content-lg-between mt-4"
        >
          <img src="~assets/images/microsoft.png" alt="" />
          <img src="~assets/images/google.png" alt="" />
          <img src="~assets/images/airbnb.png" alt="" />
          <img src="~assets/images/hubspot.png" alt="" />
          <img src="~assets/images/valley.png" class="logo-44" alt="" />
        </div>
      </VueSlickCarousel>
      <div></div>
    </div>

    <!-- news letter -->
    <div class="news_letter py-5 mt-5">
      <div class="container subscription text-center px-3 px-lg-5 py-5">
        <div class="col-12 col-lg-3 my-4">
          <img width="100%" src="~assets/images/newsPlane.png" alt="" />
        </div>
        <div class="text-start col-12 col-lg-7">
          <p class="green fs-3 home_heading">Subscribe to newsletter</p>
          <p class="fw-bold fs-6">
            Get the latest news and interesting offers on the anyskills community
          </p>
          <div class="d-flex">
            <b-form-input
              style="
                border-radius: 2px !important ;
                height: 40px !important;
                border: 0.5px solid #dddddd;
                font-size: 10px !important;
              "
              v-model="text"
              placeholder="Your e-mail address"
            >
            </b-form-input>
            <button
              class="search px-4 ms-0 ms-lg-3"
              style="border-radius: 2px; font-size: 15px"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<style scoped></style>
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
        slidesToShow: 3,
      },
      toogleLine: 0,
    };
  },

  methods: {
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
