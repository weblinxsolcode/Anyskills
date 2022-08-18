<template>
  <div>
    <Network />
    <div class="soc-light-bg-2" >
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-3 mt-lg-5 pt-lg-2">
          <div class="d-block justify-content-center radio_content_color fs-6">
            <NuxtLink to="/main_campaigns_2">
              <label id="my-radio" class="d-flex my-3 align-items-center mx-2">
                <div class="round me-2">
                  <input type="checkbox" checked id="checkbox" />
                  <label for="checkbox"></label>
                </div>
                <p class="mb-0 mx-1 fw-bold green">Objectives</p>
              </label>
            </NuxtLink>
            <NuxtLink to="/main_campaigns_3">
              <label id="my-radio" class="d-flex my-3 align-items-center mx-2">
                <div class="round me-2">
                  <input type="checkbox" checked  id="checkbox" />
                  <label for="checkbox"></label>
                </div>
                <p class="mb-0 mx-1 fw-bold green">AD Info</p>
              </label>
            </NuxtLink>
            <NuxtLink to="/main_campaigns_4">
              <label id="my-radio" class="d-flex my-3 align-items-center mx-2">
                <div class="round me-2">
                  <input type="checkbox" checked id="checkbox" />
                  <label for="checkbox"></label>
                </div>
                <p class="mb-0 mx-1 fw-bold green">Audience</p>
              </label>
            </NuxtLink>
            <NuxtLink to="/main_campaigns_5">
              <label id="checkbox" class="d-flex my-3 align-items-center mx-2">
               <div class="round me-2">
                  <input type="checkbox"  id="checkbox" />
                  <label for="checkbox"></label>
                </div>

                <p class="mb-0 mx-1 fw-bold radio_content_color">
                  Budget & Schedule
                </p>
              </label>
            </NuxtLink>

            <NuxtLink to="/main_campaigns_6">
              <label id="my-radio" class="d-flex my-3 align-items-center mx-2">
                <div class="round me-2">
                  <input type="checkbox"  id="checkbox" />
                  <label for="checkbox"></label>
                </div>
                <p class="mb-0 mx-1 fw-bold radio_content_color">
                  Social Networks
                </p>
              </label>
            </NuxtLink>
          </div>
        </div>
        <div class="col-12 col-lg-7">
          <div>
            <h4 class="fw-bolder mt-3">Create New Campaign</h4>

            <div class="d-flex mt-5 justify-content-between">
              <h4 class="fw-bolder">Audience</h4>
              <button class="campaigns_btn px-4 py-1 fs-6 fw-bolder">
                Save as draft
              </button>
            </div>
            <p class="com_color fs-7 mt-2">Select your target audience</p>
          </div>
          <div class="boder_bg_shadow boder_bg_shadow-2 mt-3 px-lg-5 py-lg-4 p-1">
            <div class="container px-0 text-lg-start text-center">
              <p class="mb-0 fs-6 fw-bolder">Age Bracket</p>
              <p class="gray fs-7 mt-">
                Age range of people you want to see your ad
              </p>

              <div class="container px-0">
                <div class="row align-items-center">
                  <div class="col-lg-5 col-12">
                    <div class="form-group py-3">
                      <label for="form-1">From</label>
                      <select
                        class="form-select form-select-3-iz"
                        aria-label="Default select example"
                      >
                        <option class="px-4 text-dark" selected>0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-2">
                    <div class="text-center">
                      <p class=" mt-1 fs-2 pt-4">-</p>
                    </div>
                  </div>
                  <div class="col-lg-5 col-12">
                    <div class="form-group py-3">
                      <label for="form-1">To</label>
                      <select
                        class="form-select text-dark form-select-3-iz"
                        aria-label="Default select example"
                      >
                        <option class="px-4" selected>0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
              <div class="mt-lg-4 mt-2">
                <p class="mb-0 fs-6 fw-bolder">Gender</p>
                <p class="gray fs-7 mb-4 mt-2">
                  Select the preferered gender of your audience
                </p>
              </div>
              <div class="flex-warp d-flex justify-content-between">
                <div>
                  <button class="gender_btn active_gen_btn px-lg-5 px-4 py-1">
                    Male
                  </button>
                </div>
                <div>
                  <button class="gender_btn px-lg-5 px-4 py-1">Female</button>
                </div>
                <div>
                  <button class="gender_btn px-lg-5 px-4 py-1">Both</button>
                </div>
              </div>
              <div class="mt-lg-4 mt-0   pb-3">
                <div class="mt-lg-5 px-1 mt-2">
                  <!-- <hr style="color: #c4cdd5; height: 2px" class="my-0" /> -->
                </div>
                <div class="mt-lg-5 pt-lg-5 mt-2 ">
                  <div class="conatiner d-flex justify-content-between">
                    <NuxtLink to="/main_campaigns_3">
                      <button class="btn btn-back">Back</button>
                    </NuxtLink>
                    <NuxtLink to="/main_campaigns_5">
                      <button class="btn btn-next">Budget & Schedule</button>
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
  </div>
</template>
<script>
