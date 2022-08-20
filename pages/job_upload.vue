<template>
  <div>
    <Nav />

    <ServicesNav />

    <CreategigNav />

    <div
      class="container px-lg-3 d-flex justify-content-center justify-content-lg-between justify-content-md-between flex-wrap"
    >
      <div class="content d-flex flex-wrap">
        <p class="green mx-3 mx-lg-2 mx-md-0 fw-bold">Basic Info</p>
        <div class="d-flex mx-3 mx-lg-2 mb-2 for_pointer">
          <i class="fas green fa-check-circle cheak_icon me-1 py-1"></i>
          <p class="mb-0 green">Location & Schedule</p>
        </div>
        <div class="d-flex mx-3 mx-lg-2 mb-2 for_pointer">
          <i class="fas green fa-check-circle cheak_icon me-1 py-1"></i>
          <p class="m-0 green">Packages & Pricing</p>
        </div>
        <div class="d-flex mx-3 mx-lg-2 mb-2 for_pointer">
          <i class="fas green fa-check-circle cheak_icon me-1 py-1"></i>
          <p class="m-0 green">Uploads</p>
        </div>
        <div class="d-flex mx-3 mx-lg-2 mb-2 for_pointer">
          <i class="fas gray fa-check-circle cheak_icon me-1 py-1"></i>
          <p class="m-0 gray">Publish</p>
        </div>
      </div>
      <div class="text-center mt-3 mt-lg-0">
        <NuxtLink to="/job_package">
          <button type="submit" class="back_button mx-2">
            <i class="fas fa-angle-left mx-lg-1 mx-0"></i>
            Back
          </button></NuxtLink
        >
        <NuxtLink to="/job_publish">
          <button type="submit" class="next_button mx-2">
            Next
            <i class="fas fa-angle-right"></i></button
        ></NuxtLink>
      </div>
    </div>

    <hr style="margin-top: 0px; color: lightgrey" />
    <div class="mt-5">
      <p
        class="fw-bolder fs-1 text-center green mb-0"
        style="color: #34a853; font-size: 35px"
      >
        Post a Job
      </p>
      <p class="text-center text-muted">Post a job , and let us get it done for you.</p>
    </div>
    <div
      class="container px-0 px-lg-5 pt-4 justify-content-center flex-wrap col-12 col-lg-7"
    >
      <div class="left_card pb-4">
        <div class="card">
          <div class="card-body">
            <div class="justify-content-center">
              <div class="">
                <p class="fw-bolder fs-5 text-center green mb-2 pt-2">Upload Image</p>
                <p class="text-center fs-6 text-muted pb-3">
                  Upload iamges that might help clients understand your job
                </p>
                <p class="fs-6 text-center text-danger mb-0" style="cursor: pointer">
                  Max number of images (3)
                </p>
                <div class="my-5 mb-3 container">
                  <div class="input-group py-2 d-none">
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
                  <div class="mx-lg-2">
                    <div class="form-control-iz px-2 mx-lg-4">
                      <div
                        class="d-flex align-items-center justify-content-between h-100"
                      >
                        <button
                          @click="getFile()"
                          class="btn btn-white btn-iz py-0 mb-0 fw-bold"
                        >
                          <i class="fas fa-file-image fs-5"></i> &nbsp; Add files from my
                          computer
                        </button>

                        <label
                          class="border_right_iz text-danger fw-bold h-100 d-flex align-items-center px-3"
                          style="cursor: pointer"
                          >Upload</label
                        >
                      </div>
                    </div>
                  </div>

                  <p class="text-center fs-6 fw-bold text-black pt-4 mt-2">Preview</p>
                  <div class="d-flex flex-wrap justify-content-around d-flex w-100">
                    <div
                      class="uploads_img_div uploads_img_div_iz graphics_tabs d-flex justify-content-center align-items-start py-2 mb-3 px-2"
                      style="cursor: pointer"
                    >
                      <img src="~assets/images/gig1.png" class="w-100" alt="" />
                    </div>
                    <div
                      class="uploads_img_div uploads_img_div_iz graphics_tabs d-flex justify-content-center align-items-start mb-3 py-2 px-2"
                      style="cursor: pointer"
                    >
                      <img src="~assets/images/job2.png" class="w-100" alt="" />
                    </div>
                    <div
                      class="uploads_img_div uploads_img_div_iz graphics_tabs d-flex justify-content-center align-items-start mb-3 py-2 px-2"
                      style="cursor: pointer"
                    >
                      <img src="~assets/images/gig4.png" class="w-100" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <hr style="color: lightgrey" class="my-4" /> -->

        <hr style="color: lightgrey; margin-bottom: 60px; margin-top: 60px" class="" />
        <div class="conatiner d-flex justify-content-between mt-5">
          <NuxtLink to="/job_package">
            <button class="btn btn-back">Back</button>
          </NuxtLink>
          <NuxtLink to="/job_publish">
            <button class="btn btn-next">Next</button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
export default {
  methods: {
    getFile() {
      document.getElementById("inputGroupFile02").click();
    },
  },
};
</script>
//
