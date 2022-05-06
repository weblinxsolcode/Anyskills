<template>
  <div>
    <Network />
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-3">
          <div class="d-block justify-content-center radio_content_color fs-6">
            <NuxtLink to="/main_campaigns_2">
              <label id="my-radio" class="d-flex my-3 align-items-center mx-2">
                <input
                  type="checkbox"
                  checked
                  id="my-radio-2"
                  name="fav_language"
                  value="HTML"
                />
                <p class="mb-0 mx-1 fw-bold green">Objectives</p>
              </label>
            </NuxtLink>
            <NuxtLink to="/main_campaigns_3">
              <label id="my-radio" class="d-flex my-3 align-items-center mx-2">
                <input
                  type="checkbox"
                  id="my-radio"
                  checked
                  name="fav_language"
                  value="HTML"
                />
                <p class="mb-0 mx-1 fw-bold green">AD Info</p>
              </label>
            </NuxtLink>
            <NuxtLink to="/main_campaigns_4">
              <label id="my-radio" class="d-flex my-3 align-items-center mx-2">
                <input
                  type="checkbox"
                  id="my-radio"
                  name="fav_language"
                  value="HTML"
                  checked
                />
                <p class="mb-0 mx-1 fw-bold green">Audience</p>
              </label>
            </NuxtLink>
            <NuxtLink to="/main_campaigns_5">
              <label id="checkbox" class="d-flex my-3 align-items-center mx-2">
                <input type="checkbox" name="fav_language" value="HTML" />

                <p class="mb-0 mx-1 fw-bold radio_content_color">
                  Budget & Schedule
                </p>
              </label>
            </NuxtLink>

            <NuxtLink to="/main_campaigns_6">
              <label id="my-radio" class="d-flex my-3 align-items-center mx-2">
                <input
                  type="checkbox"
                  id="my-radio"
                  name="fav_language"
                  value="HTML"
                />
                <p class="mb-0 mx-1 fw-bold radio_content_color">
                  Social Networks
                </p>
              </label>
            </NuxtLink>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div>
            <h3 class="fw-bolder">Create New Campaign</h3>

            <div class="d-flex mt-4 justify-content-between">
              <h3 class="fw-bolder">Audience</h3>
              <button class="campaigns_btn px-4 py-1 fs-7">
                Save as draft
              </button>
            </div>
            <p class="com_color fs-7 mt-2">Select your target audience</p>
          </div>
          <div class="boder_bg_shadow mt-3 p-lg-5 p-1">
            <div class="container px-0 text-lg-start text-center">
              <p class="mb-0 fs-6 fw-bolder">Age Bracket</p>
              <p class="gray fs-7 mt-">
                Age range of people you want to see your ad
              </p>

              <div class="container px-0">
                <div class="row">
                  <div class="col-lg-5 col-12">
                    <div class="form-group py-3">
                      <select
                        class="form-select form-select-2"
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
                      <p class="fw-bold mt-1 fs-2">-</p>
                    </div>
                  </div>
                  <div class="col-lg-5 col-12">
                    <div class="form-group py-3">
                      <select
                        class="form-select text-dark form-select-2"
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
                <p class="gray fs-7">
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
                  <hr style="color: #c4cdd5; height: 2px" class="my-0" />
                </div>
                <div class="mt-lg-4 mt-2 ">
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
</template>
<script>
