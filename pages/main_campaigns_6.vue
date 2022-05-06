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
                  checked
                  name="fav_language"
                  value="HTML"
                />
                <p class="mb-0 mx-1 fw-bold green">Audience</p>
              </label>
            </NuxtLink>
            <NuxtLink to="/main_campaigns_5">
              <label id="checkbox" class="d-flex my-3 align-items-center mx-2">
                <input
                  type="checkbox"
                  name="fav_language"
                  checked
                  value="HTML"
                />

                <p class="mb-0 mx-1 fw-bold green">Budget & Schedule</p>
              </label>
            </NuxtLink>

            <NuxtLink to="/main_campaigns_6">
              <label id="my-radio" class="d-flex my-3 align-items-center mx-2">
                <input
                  type="checkbox"
                  id="my-radio"
                  name="fav_language"
                  value="HTML"
                  checked
                />
                <p class="mb-0 mx-1 fw-bold green">
                  Social Networks
                </p>
              </label>
            </NuxtLink>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div>
            <h4 class="fw-bolder">Create New Campaign</h4>

            <div class="d-flex mt-5 justify-content-between">
              <h4 class="fw-bolder">Social Networks</h4>
              <button class="campaigns_btn px-4 py-1 fs-7">
                Save as draft
              </button>
            </div>
            <p class="radio_content_color fs-7 mb-0">
              Select Linked social networks
            </p>
          </div>
          <div class="boder_bg_shadow mt-3 p-lg-4 p-1">
            <div class="container px-0">
              <p class="fw-bolder mb-0 fs-6">Social Networks</p>
              <p class="radio_content_color fs-7">
                Select one or two social networks
              </p>
              <div class="d-block">
                <div class="d-flex my-1 justify-content-start align-items-center">
                  <input
                    type="checkbox"
                    id="my-radio-2"
                    name="fav_language"
                    value="HTML"
                  />
                  <p class="mb-0">Facebook</p>
                </div>
                <div class="d-flex  my-1 justify-content-start align-items-center">
                  <input
                    type="checkbox"
                    id="my-radio-2"
                    name="fav_language"
                    value="HTML"
                  />
                  <p class="mb-0">Twitter</p>
                </div>
                <div class="d-flex  my-1 justify-content-start align-items-center">
                  <input
                    type="checkbox"
                    id="my-radio-2"
                    name="fav_language"
                    value="HTML"
                  />
                  <p class="mb-0">Instagram</p>
                </div>
                <div class="d-flex  my-1 justify-content-start align-items-center">
                  <input
                    type="checkbox"
                    id="my-radio-2"
                    name="fav_language"
                    value="HTML"
                  />
                  <p class="mb-0">Youtube</p>
                </div>
                <div class="d-flex   my-1 justify-content-start align-items-center">
                  <input
                    type="checkbox"
                    id="my-radio-2"
                    name="fav_language"
                    value="HTML"
                  />
                  <p class="mb-0">Discord</p>
                </div>
                <div class="d-flex  my-1 justify-content-start align-items-center">
                  <input
                    type="checkbox"
                    id="my-radio-2"
                    name="fav_language"
                    value="HTML"
                  />
                  <p class="mb-0">Linkedin</p>
                </div>
              </div>

              <div class="mt-lg-4 mt-0 pb-3">
                <div class="mt-lg-5 px-1 mt-2">
                  <hr style="color: #c4cdd5; height: 2px" class="my-0" />
                </div>
                <div class="mt-lg-4 mt-2">
                  <div class="conatiner d-flex justify-content-between">
                    <NuxtLink to="/main_campaigns_5">
                      <button class="btn btn-back">Back</button>
                    </NuxtLink>
                    <NuxtLink to="/social_home_main_Campaigns">
                      <button class="btn btn-next">Finish</button>
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
</template>
<script>
