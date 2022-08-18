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
                  <input type="checkbox"  id="checkbox" />
                  <label for="checkbox"></label>
                </div>
                <p class="mb-0 mx-1 fw-bold radio_content_color">AD Info</p>
              </label>
            </NuxtLink>
            <NuxtLink to="/main_campaigns_4">
              <label id="my-radio" class="d-flex my-3 align-items-center mx-2">
                <div class="round me-2">
                  <input type="checkbox"  id="checkbox" />
                  <label for="checkbox"></label>
                </div>
                <p class="mb-0 mx-1 fw-bold radio_content_color">Audience</p>
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
        <div class="col-12 col-lg-6">
          <div>
            <h4 class="fw-bolder mt-3"  >Create New Campaign</h4>

            <div class="d-flex mt-5 justify-content-between">
              <h4 class="fw-bolder" style="font-size: 24px;" >Objectives</h4>
              <button class="campaigns_btn px-4 py-1 fs-6 fw-bold">
                Save as draft
              </button>
            </div>
            <p class="com_color fs-7 mt-2">
              What is your objective for creating the campaign
            </p>
          </div>
          <div class="boder_bg_shadow boder_bg_shadow-2 mt-3 px-lg-5 py-lg-4 p-1">
            <div class="container px-0">
              <p class="mb-0 fw-bolder green">Campaign Objectives</p>
              <p class="com_color fs-7 mt-">Choose a campaign objectives</p>

              <div class="d-flex justify-content-start flex-wrap">
                <label
                  id="my-radio"
                  class="d-flex align-items-center me-lg-2"
                >
                  <input
                    type="radio"
                    checked
                    class="m-0 "
                    id="my-radio"
                    name="fav_language"
                    value="HTML"
                  />
                  <p class="mb-0 mx-1 fw-bold"    >Awareness</p>
                </label>
                <label id="my-radio" class="d-flex align-items-center mx-2">
                  <input
                    type="radio"
                    id="my-radio"
                    name="fav_language"
                    value="HTML"
                  />
                  <p class="mb-0 mx-1 fw-bold " >Consideration</p>
                </label>
                <label id="my-radio" class="d-flex align-items-center mx-2">
                  <input
                    type="radio"
                    id="my-radio"
                    name="fav_language"
                    value="HTML"
                  />
                  <p class="mb-0 mx-1 fw-bold "  >Conversion</p>
                </label>
              </div>

              <div class="">
                <div class="form-group py-3">
                  <label for="exampleForm ControlInput1" class="fw-bold my-3"
                    >Campaign Type</label
                  >
                  <select
                    class="form-select form-select-2-iz fw-bolder"
                    aria-label="Default select example"
                  >
                    <option class="px-4 text-dark " selected>Awareness</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="form-group py-3">
                  <label for="exampleFormControlInput10" class="fw-bold"
                    >Campaign Title</label
                  >
                  <p class="my-3 fs-7 text_light_opacity_iz">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta eligendi enim
                  </p>
                  <input
                    type="email"
                    class="form-control px-4 form-control-2 iz_custom_placeholder"
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
  </div>
</template>
<script>
