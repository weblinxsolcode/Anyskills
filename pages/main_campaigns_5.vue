<template>
  <div>
    <Network />
    <div class="soc-light-bg-2" >

    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-3 mt-lg-5 pt-lg-4">
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
                  <input type="checkbox"  checked id="checkbox" />
                  <label for="checkbox"></label>
                </div>
                <p class="mb-0 mx-1 fw-bold green">AD Info</p>
              </label>
            </NuxtLink>
            <NuxtLink to="/main_campaigns_4">
              <label id="my-radio" class="d-flex my-3 align-items-center mx-2">
                <div class="round me-2">
                  <input type="checkbox"  checked id="checkbox" />
                  <label for="checkbox"></label>
                </div>
                <p class="mb-0 mx-1 fw-bold green">Audience</p>
              </label>
            </NuxtLink>
            <NuxtLink to="/main_campaigns_5">
              <label id="checkbox" class="d-flex my-3 align-items-center mx-2">
               <div class="round me-2">
                  <input type="checkbox" checked  id="checkbox" />
                  <label for="checkbox"></label>
                </div>

                <p class="mb-0 mx-1 fw-bold green">
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

            <div class="d-flex mt-4 pt-3 justify-content-between">
              <h4 class="fw-bolder">Budget & Schedules</h4>
              <button class="campaigns_btn px-4 py-1 fs-6 fw-bolder">
                Save as draft
              </button>
            </div>
            <p class="com_color fs-7 mt-0">
              What is your objective for creating the campaign
            </p>
          </div>
          <div class="boder_bg_shadow boder_bg_shadow-2 mt-3 px-lg-5 py-lg-4 p-1">
            <div class="container px-0">
              <p class="mb-0 fw-bolder">Budget Mode</p>
              <p class="com_color fs-7">Select Mode</p>

              <div class="">
                <div class="form-group">
                  <select
                    class="form-select form-select-ulu"
                    aria-label="Default select example"
                  >
                    <option class="px-4 text-dark" selected>0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">4</option>
                    <option value="3">5</option>
                  </select>
                </div>
                <div class="form-group mt-2 py-3">
                  <label for="exampleFormControlInput10" class="fw-bold"
                    >Amount</label
                  >

                  <input
                    type="num"
                    class="form-control"
                    style="color: red"
                    id="exampleFormControlInput10"
                    placeholder="0"
                  />
                </div>
                <div>
                  <p class="fw-bold mb-0">Schedule</p>
                  <p class="gray fs-7">Set Schedule</p>
                  <div class="px-0 d-flex align-items-center">
                    <input
                      type="radio"
                      id="my-radio"
                      name="fav_language"
                      value="HTML"
                    />
                    <p class="gray fs-7 mb-0 mt-1">
                      Continously run my Ads starting from today
                    </p>
                  </div>
                  <div class="mt-1 px-0 d-flex align-items-center">
                    <input
                      type="radio"
                      id="my-radio"
                      name="fav_language"
                      value="HTML"
                    />
                    <p class="gray fs-7 mb-0 mt-1">
                      I want to set start and end dates
                    </p>
                  </div>
                </div>
                <div class="container px-0">
                  <div class="row">
                    <div class="col-lg-6 col-12">
                      <div class="form-group py-3">
                        <select
                          class="form-select form-select-3-iz"
                          aria-label="Default select example"
                        >
                          <option class="px-4 text-dark" selected>
                            Estimated Start Date
                          </option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="3">4</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-lg-6 col-12">
                      <div class="form-group py-3">
                        <select
                          class="form-select text-dark form-select-3-iz"
                          aria-label="Default select example"
                        >
                          <option class="px-4 text-dark" selected>
                            Estimated Start Date
                          </option>
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
              </div>
              <div class="mt-lg-4 mt-0 pb-3">
                <div class="mt-lg-5 px-1 mt-2">
                  <hr style="color: #c4cdd5; height: 2px" class="my-0" />
                </div>
                <div class="mt-lg-4 mt-2">
                  <div class="conatiner d-flex justify-content-between">
                    <NuxtLink to="/main_campaigns_4">
                      <button class="btn btn-back">Back</button>
                    </NuxtLink>
                    <NuxtLink to="/main_campaigns_6">
                      <button class="btn btn-next">Social Networks</button>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="col-lg-3 col-"></div> -->
      </div>
    </div>
    <Footer />
    </div>
  </div>
</template>
<script>
