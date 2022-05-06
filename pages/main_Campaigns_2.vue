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
                 
                  name="fav_language"
                  value="HTML"
                />
                <p class="mb-0 mx-1 fw-bold radio_content_color">AD Info</p>
              </label>
            </NuxtLink>
            <NuxtLink to="/main_campaigns_4">
              <label id="my-radio" class="d-flex my-3 align-items-center mx-2">
                <input
                  type="checkbox"
                  id="my-radio"
                 
                  name="fav_language"
                  value="HTML"
                />
                <p class="mb-0 mx-1 fw-bold radio_content_color">Audience</p>
              </label>
            </NuxtLink>
            <NuxtLink to="/main_campaigns_5">
              <label id="checkbox" class="d-flex my-3 align-items-center mx-2">
                <input
                  type="checkbox"
                  name="fav_language"
                  
                  value="HTML"
                />

                <p class="mb-0 mx-1 fw-bold radio_content_color">Budget & Schedule</p>
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
              <h3 class="fw-bolder">Objectives</h3>
              <button class="campaigns_btn px-4 py-1 fs-7">
                Save as draft
              </button>
            </div>
            <p class="com_color fs-7 mt-2">
              What is your objective for creating the campaign
            </p>
          </div>
          <div class="boder_bg_shadow mt-3 p-lg-3 p-1">
            <div class="container px-0">
              <p class="mb-0 fw-bolder green">Campaign Objectives</p>
              <p class="com_color fs-7 mt-">Choose a campaign objectives</p>

              <div class="d-flex justify-content-start flex-wrap">
                <label
                  id="my-radio"
                  class="d-flex align-items-center me-lg-2 mx-2"
                >
                  <input
                    type="radio"
                    checked="checked"
                    id="my-radio"
                    name="fav_language"
                    value="HTML"
                  />
                  <p class="mb-0 mx-1 fw-bold">Awareness</p>
                </label>
                <label id="my-radio" class="d-flex align-items-center mx-2">
                  <input
                    type="radio"
                    id="my-radio"
                    name="fav_language"
                    value="HTML"
                  />
                  <p class="mb-0 mx-1 fw-bold">Consideration</p>
                </label>
                <label id="my-radio" class="d-flex align-items-center mx-2">
                  <input
                    type="radio"
                    id="my-radio"
                    name="fav_language"
                    value="HTML"
                  />
                  <p class="mb-0 mx-1 fw-bold">Conversion</p>
                </label>
              </div>

              <div class="">
                <div class="form-group py-3">
                  <label for="exampleForm ControlInput1" class="fw-bold my-3"
                    >Campaign Type</label
                  >
                  <select
                    class="form-select form-select-2"
                    aria-label="Default select example"
                  >
                    <option class="px-4 text-dark" selected>Awareness</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="form-group py-3">
                  <label for="exampleFormControlInput10" class="fw-bold"
                    >Campaign Title</label
                  >
                  <p class="my-3 fs-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta eligendi enim
                  </p>
                  <input
                    type="email"
                    class="form-control px-4 form-control-2"
                    id="exampleFormControlInput10"
                    placeholder="New Campaign Title"
                  />
                </div>
              </div>
              <div class="mt-lg-5 mt-0 pt-lg-5 pt-0 pb-5">
                <div class="conatiner d-flex justify-content-between pt-5 mt-5">
                  <NuxtLink to="/main_campaigns_2">
                    <button class="btn btn-back">Back</button>
                  </NuxtLink>

                  <NuxtLink to="/main_campaigns_3">
                    <button class="btn btn-next">AD Info</button>
                  </NuxtLink>
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
