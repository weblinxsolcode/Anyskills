<template>
  <div>
    <Loginbtn />
    <ServicesNav />
    <div
      class="container px-0 mt-5 px-lg-5 pt-4 pt-lg-0 justify-content-center flex-wrap col-12 w_55"
    >
      <div class="left_card pb-0 px-lg-4 px-2">
        <div class="card">
          <div class="card-body">
            <div class="container">
              <div class="container pb-5 pb-lg-1">
                <div class="justify-content-center">
                  <div class="mt-4">
                    <p
                      class="fw-bolder text-center green mb-0"
                      style="color: #34a853; font-size: 36px"
                    >
                      Setup Account
                    </p>
                    <p class="text-center mt-3 color_light_gray">
                      Create account to start connecting with the best artisans.
                    </p>
                  </div>
                  <form>
                    <div class="form-group mx-0 mx-lg-3 py-3">
                      <div class="d-lg-flex d-block gap-4  gap-2">
                        <div>
                          <label for="exampleFormControlInput1" class="fw-bold my-3"
                            >Firstname</label
                          >
                          <input
                            type="email"
                            class="form-control px-4 form-control-2 placeholder11"
                            id="exampleFormControlInput1"
                            placeholder="Firstname"
                          />
                        </div>
                        <div>
                          <label for="exampleFormControlInput1" class="fw-bold my-3"
                            >Lastname</label
                          >
                          <input
                            type="email"
                            class="form-control px-4 form-control-2 placeholder11"
                            id="exampleFormControlInput1"
                            placeholder="Lastname"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-group mx-0 mx-lg-3 py-3">
                      <label for="exampleFormControlInput1" class="fw-bold my-3"
                        >Choose a User type</label
                      >
                      <select
                        class="form-select form-control-2 bg-white box-shadow-iz2"
                        aria-label="Default select example"
                      >
                        <option class="px-4" selected>Freelancer</option>
                        <option value="1">Client</option>
                      </select>
                    </div>
                    <div class="form-group mx-0 mx-lg-3 py-3">
                      <label for="exampleFormControlInput1" class="fw-bold my-3"
                        >What do you do?</label
                      >
                      <select
                        class="form-select form-control-2 bg-white box-shadow-iz2"
                        aria-label="Default select example"
                      >
                        <option class="px-4" selected>Web Developer</option>
                        <option value="1">GraphicDesigner</option>
                        <option value="2">Digital marketer</option>
                      </select>
                    </div>
                  </form>

                  <div
                    class="mx-0 mx-lg-3 py-3 d-flex justify-content-lg-between align-items-center"
                  >
                    <input
                      type="checkbox"
                      id="my-radio-2"
                      name="fav_language"
                      value="HTML"
                      class="pointer"
                    />

                    <i>
                      <p class="mb-0 fs-7 fw-bold pointer ps-2 ps-lg-2 pe-lg-5">
                        I have read and accepted
                        <span class="green"> Anyskills Privacy Policy</span> and
                        <span class="green"> Terms and Conditions Agreement</span>
                      </p>
                    </i>
                  </div>
                  <div class="form-group mx-0 mx-lg-3 text-center py-3">
                    <NuxtLink to="/Verification">
                      <button class="btn btn-next fw-lighter text-nowrap w_50 bg_green_new">
                        Create Account
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
