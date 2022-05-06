<template>
  <div>
    <Nav />

    <ServicesNav />

    <CreategigNav />

    <div
      class="container px-lg-5 d-flex justify-content-center justify-content-lg-between justify-content-md-between flex-wrap"
    >
      <div class="content d-flex flex-wrap">
        <p class="green mx-3 mx-lg-0 mx-md-0 fw-bold">Basic Info</p>
        <div class="d-flex mx-3 mb-2">
          <i class="fas green fa-check-circle cheak_icon me-1 py-1"></i>
          <p class="mb-0 green">Packages & Pricing</p>
        </div>
        <div class="d-flex mx-3 mb-2">
          <i class="fas green fa-check-circle cheak_icon me-1 py-1"></i>
          <p class="m-0 green">Uploads</p>
        </div>
        <div class="d-flex mx-3 mb-2">
          <i class="fas gray fa-check-circle cheak_icon me-1 py-1"></i>
          <p class="m-0 gray">Requirements</p>
        </div>
        <div class="d-flex mx-3 mb-2">
          <i class="fas gray fa-check-circle cheak_icon me-1 py-1"></i>
          <p class="m-0 gray">Publish</p>
        </div>
      </div>
      <div class="text-center mt-3 mt-lg-0">
        <button type="submit" class="back_button mx-2">
          <i class="fas fa-angle-left mx-lg-1 mx-0"></i>
          Back
        </button>
        <button type="submit" class="next_button mx-2">
          Next
          <i class="fas fa-angle-right"></i>
        </button>
      </div>
    </div>

    <hr style="color: lightgrey" />
    <div class="mt-5">
      <p class="fw-bolder fs-1 text-center green mb-0">Create a gig</p>
      <p class="text-center text-muted">
        Create a gig and let skill users send your a quote
      </p>
    </div>
    <div
      class="container px-0 px-lg-5 pt-4 justify-content-center flex-wrap col-12 col-lg-7"
    >
      <div class="left_card pb-4">
        <div class="card">
          <div class="card-body">
            <div class="justify-content-center">
              <div class="">
                <p class="fw-bolder fs-5 text-center green mb-0">
                  Upload Image
                </p>
                <p class="text-center fs-6 text-muted pb-3">
                  Upload iamges that might help clients understand your gig
                </p>
                <p
                  class="fs-6 text-center text-danger mb-0"
                  style="cursor: pointer"
                >
                  Max number of images (3)
                </p>
                <div class="my-5 container">
                  <div class="input-group py-2">
                    <input
                      type="file"
                      class="form-control form-control-3"
                      id="inputGroupFile02"
                    />
                    <label
                      class="input-group-text form-control-3 text-danger fw-bold"
                      style="cursor: pointer"
                      >Upload</label
                    >
                  </div>
                  <p class="text-center fs-5 text-black pt-4">Preview</p>
                  <div class="d-flex flex-wrap justify-content-around d-flex">
                    <div
                      class="uploads_img_div graphics_tabs d-flex justify-content-center align-items-start py-2 mb-3 px-2"
                      style="cursor: pointer"
                    >
                      <img
                        src="~assets/images/gig1.png"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div
                      class="uploads_img_div graphics_tabs d-flex justify-content-center align-items-start mb-3 py-2 px-2"
                      style="cursor: pointer"
                    >
                      <img
                        src="~assets/images/job2.png"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div
                      class="uploads_img_div graphics_tabs d-flex justify-content-center align-items-start mb-3 py-2 px-2"
                      style="cursor: pointer"
                    >
                      <img
                        src="~assets/images/gig4.png"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr style="color: lightgrey" class="my-4" />

        <hr
          style="color: lightgrey; margin-bottom: 60px; margin-top: 60px"
          class=""
        />
        <div class="conatiner d-flex justify-content-between mt-5">
          <NuxtLink to="/gig_packages">
            <button class="btn btn-back">Back</button>
          </NuxtLink>
          <NuxtLink to="/gig_requirements">
            <button class="btn btn-next">Next</button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

//

<script>
export default {
  methods: {
    async basic() {
      if ((document.getElementById("basic_card_1").style.display = "block")) {
        document.getElementById("basic_card_2").style.display = "none";
        document.getElementById("basic_card_3").style.display = "none";
      } else if (
        (document.getElementById("basic_card_1").style.display = "none")
      ) {
        document.getElementById("basic_card_1").style.display = "block";
        document.getElementById("basic_card_2").style.display = "none";
        document.getElementById("basic_card_3").style.display = "none";
      }
    },
    async Standard() {
      if ((document.getElementById("basic_card_2").style.display = "block")) {
        document.getElementById("basic_card_1").style.display = "none";
        document.getElementById("basic_card_3").style.display = "none";
      } else if (
        (document.getElementById("basic_card_2").style.display = "none")
      ) {
        document.getElementById("basic_card_2").style.display = "block";
        document.getElementById("basic_card_1").style.display = "none";
        document.getElementById("basic_card_3").style.display = "none";
      }
    },
    async Premium() {
      document.getElementById("basic_card_1").style.display = "none";
      document.getElementById("basic_card_2").style.display = "none";
      document.getElementById("basic_card_3").style.display = "block";
    },
  },
};
</script>
