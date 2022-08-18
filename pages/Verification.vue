<template>
  <div>
    <Loginbtn />
    <ServicesNav />
    <div
      class="container px-0 mt-5 px-lg-5 pt-4 pt-lg-0 justify-content-center flex-wrap col-12 w_55"
    >
      <div class="left_card pb-0">
        <div class="card">
          <div class="card-body px-lg-5">
            <div class="container">
              <div class="container pb-5 pb-lg-0">
                <div class="justify-content-center">
                  <div class="mt-3">
                    <p
                      class="fw-bolder text-center green mb-0"
                      style="color: #34a853; font-size: 36px"
                    >
                      Verification
                    </p>
                    <p class="text-center mt-3 color_light_gray">
                      Please verify your account in order for us to activate your
                      account.<br />
                      We've sent a code to your email address and mobile number.
                    </p>
                  </div>
                  <form>
                    <div>
                      <label for="exampleFormControlInput1" class="fw-bold my-3"
                        >Select a Method of Verification</label
                      >
                      <select
                        class="form-select form-control-2 bg-white box-shadow-iz2"
                        aria-label="Default select example"
                      >
                        <option class="px-4" selected>Email</option>
                        <option value="1">Number</option>
                      </select>
                    </div>
                  </form>

                  <div class="form-group mx-0 mx-lg-3 mt-3 text-center py-3">
                    <NuxtLink to="/VeriCode">
                      <button class="btn btn-next fw-lighter w-50 bg_green_new">
                        Submit
                      </button>
                    </NuxtLink>
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
