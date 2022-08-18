<template>
  <div>
    <Loginbtn />
    <ServicesNav />

    <div
      class="container px-0 px-lg-5 pt-4 pt-lg-0 justify-content-center flex-wrap col-12 col-lg-6"
    >
      <div class="left_card pb-4">
        <div class="card55">
          <div class="card-body d-felx pt-lg-0">
            <div class="text-center">
              <div class="mt-5">
                <p
                  class="fw-bolder text-center green mb-0"
                  style="color: #34a853; font-size: 36px"
                >
                  Verification Successful
                </p>
                <p class="text-center mt-2 mb-4 text-dark">
                  You have successfully verified your account.<br />
                  Proceed to login and enjoy the best platform for artisans.
                </p>
              </div>
              <img
                src="~assets/images/gig_publish_img.png"
                class="img-fluid mt-2 mb-4"
                alt=""
              />
            </div>
            <div class="form-group mx-0 mx-lg-3 text-center py-3">
              <NuxtLink to="/Login">
                <button class="btn btn-next fw-lighter bg_green_new w-50">
                  Login Account
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
