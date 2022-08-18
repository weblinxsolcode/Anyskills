<template>
  <div>
    <Loginbtn />
    <ServicesNav />
    <div
      class="container px-0 mt-5 px-lg-5 pt-4 pt-lg-0 justify-content-center flex-wrap col-12 col-lg-6"
    >
      <div class="left_card pb-4">
        <div class="card">
          <div class="card-body">
            <div class="container">
              <div class="container pb-4">
                <div class="justify-content-center">
                  <div class="mt-4">
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
                        >Enter Code</label
                      >
                      <input
                        type="number"
                        class="form-control px-4 form-control-2"
                        id="exampleFormControlInput1"
                        placeholder="Code"
                      />
                    </div>
                  </form>

                  <div
                    class="mx-0 mx-lg-3 py-3 d-flex justify-content-center align-items-center mt-3"
                  >
                    <i>
                      <p class="mb-0 pointer color_light_gray">
                        If you didnt receive a code, you can
                        <span class="green pointer"> request a new one.</span>
                      </p>
                    </i>
                  </div>
                  <div class="form-group mx-0 mx-lg-3 text-center py-3">
                    <NuxtLink to="/Verisucc">
                      <button class="btn btn-next fw-lighter w-50 bg_green_new">
                        Verify
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
