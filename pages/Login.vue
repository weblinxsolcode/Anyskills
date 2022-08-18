<template>
  <div>
    <Loginbtn />
    <ServicesNav />
    <div
      class="container px-0 mt-5 px-lg-5 pt-4 pt-lg-0 justify-content-center flex-wrap col-12 w_55"
    >
      <div class="left_card pb-4 px-lg-4">
        <div class="card">
          <div class="card-body">
            <div class="container">
              <div class="container pb-5 pb-lg-0">
                <div class="justify-content-center">
                  <div class="mt-5 mt-lg-3">
                    <p
                      class="fw-bolder text-center green mb-0"
                      style="color: #34a853; font-size: 36px"
                    >
                      Login
                    </p>
                    <!-- Izhan -->
                    <p class="text-center mt-3 color_light_gray">
                      Login to your account to<br />
                      start connecting with the best artisans.e
                    </p>
                  </div>
                  <form>
                    <div class="form-group mx-0 mx-lg-3 py-3">
                      <label for="exampleFormControlInput1" class="fw-bold my-3"
                        >Email address or username</label
                      >
                      <input
                        type="email"
                        class="form-control px-4 form-control-2 placeholder11"
                        id="exampleFormControlInput1"
                        placeholder="Email address or username"
                      />
                    </div>

                    <div class="form-group mx-0 mx-lg-3 py-3">
                      <label
                        for="exampleFormControlInput1"
                        class="fw-bold my-3 d-flex align-items-center justify-content-between"
                      >
                        <div>Password</div>
                        <div class="green pointer">
                          <i> Forget Password ? </i>
                        </div>
                      </label>
                      <input
                        type="password"
                        class="form-control px-4 form-control-2 placeholder11"
                        id="exampleFormControlInput1"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-group mx-0 mx-lg-3 text-center py-3">
                      <button class="btn btn-next w-50 bg_green_new">Login</button>
                      <i>
                        <p class="mt-4">
                          Don't have an account?
                          <NuxtLink to="/Register">
                            <span class="green pointer">Sign up</span>
                          </NuxtLink>
                        </p>
                      </i>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BtnSection topic="Login" hed="Login" />
      </div>
    </div>
    <Footer />
  </div>
</template>
