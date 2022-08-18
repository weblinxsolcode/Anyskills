<template>
  <div>
    <Nav />

    <ServicesNav />

    <CreategigNav />

    <div
      class="container px-lg-3 ps-lg-4 d-flex justify-content-center justify-content-lg-between justify-content-md-between flex-wrap"
    >
      <div class="content d-flex flex-wrap">
        <p class="green mx-3 mx-lg-0 mx-md-0 fw-bold">Basic Info</p>
        <div class="d-flex mx-3 mb-2 for_pointer">
          <i class="fas green fa-check-circle cheak_icon me-1 py-1"></i>
          <p class="mb-0 green">Packages & Pricing</p>
        </div>
        <div class="d-flex mx-3 mb-2 for_pointer">
          <i class="fas green fa-check-circle cheak_icon me-1 py-1"></i>
          <p class="m-0 green">Uploads</p>
        </div>
        <div class="d-flex mx-3 mb-2 for_pointer">
          <i class="fas green fa-check-circle cheak_icon me-1 py-1"></i>
          <p class="m-0 green">Requirements</p>
        </div>
        <div class="d-flex mx-3 mb-2 for_pointer">
          <i class="fas green fa-check-circle cheak_icon me-1 py-1"></i>
          <p class="m-0 green">Publish</p>
        </div>
      </div>
      <div class="text-center mt-3 mt-lg-0">
        <NuxtLink to="/gig_requirements">
          <button type="submit" class="back_button mx-2">
            <i class="fas fa-angle-left mx-lg-1 mx-0"></i>
            Back
          </button></NuxtLink
        >
        <button type="submit" class="next_button mx-2">
          Next
          <i class="fas fa-angle-right"></i>
        </button>
      </div>
    </div>

    <hr class="mt-0" style="color: lightgrey" />

    <div
      class="container px-0 px-lg-5 pt-4 justify-content-center flex-wrap col-12 col-lg-6"
    >
      <div class="left_card pb-4">
        <div class="card55">
          <div class="card-body d-felx">
            <div class="text-center">
              <img src="~assets/images/gig_publish_img.png" class="img-fluid" alt="" />
            </div>
            <div class="justify-content-center">
              <div class="mt-3">
                <p style="color: #34a853" class="fw-bolder fs-3 text-center green mb-0">
                  It’s Now Live!
                </p>
                <p class="text-center fw-bold fs-6 mx-lg-5 px-lg-5 fw-light">
                  Our studies show that promoted Gigs are 3 times more likely to sell
                </p>

                <div class="container d-flex justify-content-center">
                  <div
                    class="input-group mx-lg-5 mx-md-5 px-lg-4 px-md-4 mx-0 px-0 d-flex justify-content-center"
                  >
                    <div
                      class="form-control bg-white form-control-2 fs-7 px-3"
                      style="border: 1px solid #ccc"
                    >
                      http://www.anyskills.co.uk/new?32345
                    </div>
                    <button
                      class="input-group-text fw-bolder green"
                      style="boder-right: 1px soild gray"
                    >
                      Copy link
                    </button>
                  </div>
                </div>
                <div class="container d-block justify-content-center">
                  <p class="text-center text-muted mt-4">
                    Share on social media platforms
                  </p>
                  <div class="icon text-center">
                    <i
                      class="fab fa-instagram text-danger fs-4 mx-2 rounded-circle p-2"
                      style="background-color: lightgray; cursor: pointer"
                    ></i>
                    <img
                      src="~assets/images/icon_2.png"
                      class="fs-4 mx-2 rounded-circle mb-2 p-2 img-fluid"
                      style="background-color: lightgray; cursor: pointer"
                      width="40px"
                      alt=""
                    />
                    <i
                      class="fab fa-twitter text-info fs-4 rounded-circle mx-2 p-2"
                      style="background-color: lightgray; cursor: pointer"
                    ></i>
                    <i
                      class="fab fa-youtube text-danger fs-4 rounded-circle mx-2 p-2"
                      style="background-color: lightgray; cursor: pointer"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
