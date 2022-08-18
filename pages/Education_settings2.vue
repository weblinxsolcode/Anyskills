<template>
  <div>
    <Nav />
    <ServicesNav />
    <CreategigNav />
    <div class="container">
      <div class="row mx-0 pt-5 flex-wrap align-items-top">
        <div class="col-lg-4">
          <NotificationTab />
        </div>
        <div class="col-lg-8 col-12">
          <div class="bg-white boder_bg_shadow p-3">
            <div class="d-flex justify-content-between">
              <div>
                <p class="text_green_iz font_custom_iz mb-0 fw-bolder">Education</p>
              </div>

              <div>
                <p
                  class="text_green_iz font_custom_iz mb-0 fw-bolder"
                  @click="modalShow = !modalShow"
                >
                  + Add Education
                </p>
              </div>
            </div>
            <div>
              <span class="line mx-4 my-3"> </span>
            </div>

            <div class="my-4 py-3">
              <p class="text-center fst-italic text_light_opacity_iz">
                You have not added an education yet
              </p>
            </div>
            <div>
              <span class="line mx-4 my-3"> </span>
            </div>
            <div class="mt-3 mt-lg-0 d-flex justify-content-end">
              <div class="d-flex align-items-center gap-2">
                <div>
                  <p class="mb-0 fst-italic">Rows per page:</p>
                </div>
                <div>
                  <select name="aga" class="text_green_iz p-2 rounded-3" id="">
                    <option value="0">1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                    <option selected value="4">5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5 mx-2">
        <div class="col-lg-4">
          <div class="width_iz_custom_setting"></div>
        </div>
        <div class="col-lg-8 col-12">
          <div class="bg-white boder_bg_shadow p-3">
            <div class="d-flex justify-content-between">
              <div>
                <p class="text_green_iz font_custom_iz mb-0 fw-bolder">Certification</p>
              </div>

              <div>
                <p
                  class="text_green_iz font_custom_iz mb-0 fw-bolder"
                  @click="modalShow2 = !modalShow2"
                >
                  + Add Certification
                </p>
                <b-modal v-model="modalShow2" hide-header centered id="Modal1_iz2">
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="text_green_iz pt-3">New certification</p>
                    <ModalBtn id="Modal1_iz2" />
                  </div>
                  <!-- <p class="mt-3 fs-7">School*</p> -->
                  <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass"
                    >Awarding body</label
                  >
                  <select
                    class="input_settings_2 border_iz_custom_setting w-100 d-block text-dark"
                    name="Old_pass"
                  >
                    <option value="0" selected>Select Awarding body</option>
                    <option value="1">Select Awarding body</option>
                    <option value="2">Select Awarding body</option>
                  </select>

                  <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass"
                    >Certification/Award</label
                  >
                  <select
                    class="input_settings_2 border_iz_custom_setting w-100 d-block text-dark"
                    name="Old_pass"
                  >
                    <option value="0" selected>Select Certification/Award</option>
                    <option value="1">Select Certification/Award</option>
                    <option value="2">Select Certification/Award</option>
                  </select>
                  <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass"
                    >Reference Number</label
                  >
                  <input
                    class="input_settings_2 bg-white border_iz_custom_setting w-100 d-block text-dark"
                    placeholder="Enter a reference number"
                    type="text"
                    name="Old_pass"
                  />
                  <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass"
                    >Date</label
                  >
                  <div class="d-flex gap-3">
                    <select
                      class="input_settings_1 w-100 d-block text-dark"
                      placeholder="e.g oxford"
                      type="date"
                      name="Old_pass"
                    >
                      <option value="0" selected>Month</option>
                      <option value="0">Month</option>
                    </select>

                    <select
                      class="input_settings_1 w-100 d-block text-dark"
                      placeholder="e.g oxford"
                      type="date"
                      name="Old_pass"
                    >
                      <option value="0" selected>year</option>
                      <option value="0">year</option>
                    </select>
                  </div>
                  <!-- <label
                    class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7"
                    for="Old_pass"
                    >End date*</label
                  >
                  <div class="d-flex gap-3">
                    <select
                      class="input_settings_1 w-100 d-block text-dark"
                      placeholder="e.g oxford"
                      type="date"
                      name="Old_pass"
                    >
                      <option value="0" selected>Month</option>
                      <option value="0">Month</option>
                    </select>

                    <select
                      class="input_settings_1 w-100 d-block text-dark"
                      placeholder="e.g oxford"
                      type="date"
                      name="Old_pass"
                    >
                      <option value="0" selected>year</option>
                      <option value="0">year</option>
                    </select>
                  </div> -->
                  <div class="d-flex justify-content-end mt-4">
                    <div>
                      <a
                        href="#"
                        @click="
                          modalShow3 = !modalShow3;
                          $bvModal.hide('Modal1_iz2');
                        "
                        class="btn btn_green_setting_iz"
                        >Save</a
                      >
                    </div>
                  </div>
                </b-modal>
                <b-modal v-model="modalShow3" hide-header centered id="Modal1_iz">
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="text_green_iz text-center fs-5">Confirm Email Change</p>
                    <ModalBtn id="Modal1_iz" />
                  </div>
                  <p class="text-center">
                    If you change your email, you can’t change it again <br />
                    for 2 weeks after you confirm this change.
                  </p>

                  <div class="d-flex justify-content-center mt-4">
                    <div>
                      <a
                        href="#"
                        @click="
                          $bvModal.hide('Modal1_iz');
                          $bvModal.hide('Modal1_iz2');
                        "
                        class="btn btn_green_setting_iz"
                        >Confirm</a
                      >
                    </div>
                  </div>
                  <div class="d-flex justify-content-center mt-3 pb-4">
                    <div>
                      <a
                        href="#"
                        @click="
                          $bvModal.hide('Modal1_iz');
                          $bvModal.hide('Modal1_iz2');
                        "
                        class="text-dark"
                        >Cancel</a
                      >
                    </div>
                  </div>
                </b-modal>
                <b-modal v-model="modalShow4" hide-header centered id="Modal1_iz2">
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="text_green_iz">Edit certification</p>
                    <ModalBtn id="Modal1_iz2" />
                  </div>
                  <!-- <p class="mt-3 fs-7">School*</p> -->
                  <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass"
                    >Awarding body</label
                  >
                  <select
                    class="input_settings_2 border_iz_custom_setting w-100 d-block text-dark"
                    name="Old_pass"
                  >
                    <option value="0" selected>Select Awarding body</option>
                    <option value="1">Select Awarding body</option>
                    <option value="2">Select Awarding body</option>
                  </select>

                  <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass"
                    >Certification/Award</label
                  >
                  <select
                    class="input_settings_2 border_iz_custom_setting w-100 d-block text-dark"
                    name="Old_pass"
                  >
                    <option value="0" selected>Select Certification/Award</option>
                    <option value="1">Select Certification/Award</option>
                    <option value="2">Select Certification/Award</option>
                  </select>
                  <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass"
                    >Reference Number</label
                  >
                  <input
                    class="input_settings_2 bg-white border_iz_custom_setting w-100 d-block text-dark"
                    placeholder="Enter a reference number"
                    type="text"
                    name="Old_pass"
                  />
                  <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass"
                    >Date</label
                  >
                  <div class="d-flex gap-3">
                    <select
                      class="input_settings_1 w-100 d-block text-dark"
                      placeholder="e.g oxford"
                      type="date"
                      name="Old_pass"
                    >
                      <option value="0" selected>Month</option>
                      <option value="0">Month</option>
                    </select>

                    <select
                      class="input_settings_1 w-100 d-block text-dark"
                      placeholder="e.g oxford"
                      type="date"
                      name="Old_pass"
                    >
                      <option value="0" selected>year</option>
                      <option value="0">year</option>
                    </select>
                  </div>
                  <!-- <label
                    class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7"
                    for="Old_pass"
                    >End date*</label
                  >
                  <div class="d-flex gap-3">
                    <select
                      class="input_settings_1 w-100 d-block text-dark"
                      placeholder="e.g oxford"
                      type="date"
                      name="Old_pass"
                    >
                      <option value="0" selected>Month</option>
                      <option value="0">Month</option>
                    </select>

                    <select
                      class="input_settings_1 w-100 d-block text-dark"
                      placeholder="e.g oxford"
                      type="date"
                      name="Old_pass"
                    >
                      <option value="0" selected>year</option>
                      <option value="0">year</option>
                    </select>
                  </div> -->
                  <div class="d-flex justify-content-end mt-4">
                    <div>
                      <a
                        href="#"
                        @click="
                          modalShow3 = !modalShow3;
                          $bvModal.hide('Modal1_iz2');
                        "
                        class="btn btn_green_setting_iz"
                        >Save</a
                      >
                    </div>
                  </div>
                </b-modal>
              </div>
            </div>
            <div>
              <span class="line mx-4 my-3"> </span>
            </div>
            <div class="my-4 py-3">
              <p class="text-center fst-italic text_light_opacity_iz">
                You have not added any certifications yet
              </p>
            </div>
            <div>
              <span class="line mx-4 my-3"> </span>
            </div>
            <div class="mt-3 mt-lg-0 d-flex justify-content-end">
              <div class="d-flex align-items-center gap-2">
                <div>
                  <p class="fst-italic mb-0 fw-bold">Rows per page:</p>
                </div>
                <div>
                  <select name="aga" class="text_green_iz p-2 rounded-3" id="">
                    <option value="0">1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                    <option value="4" selected>5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <!-- modals -->
    <b-modal v-model="modalShow" hide-header id="Modal1_edu">
      <div class="d-flex justify-content-between align-items-center">
        <p class="text_green_iz pt-3">New education</p>
        <ModalBtn id="Modal1_edu" />
      </div>

      <!-- <p class="mt-3 fs-7">School*</p> -->
      <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass">School*</label>
      <input
        class="input_settings_2 bg-white border_iz_custom_setting rounded-3 w-100 d-block text-dark"
        placeholder="e.g oxford"
        type="text"
        name="Old_pass"
      />
      <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass">Degree*</label>
      <input
        class="input_settings_2 input_settings_2 bg-white border_iz_custom_setting rounded-3 w-100 d-block text-dark"
        placeholder="Select country"
        type="text"
        name="Old_pass"
      />
      <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass"
        >Field of Study*</label
      >
      <input
        class="input_settings_2 input_settings_2 bg-white border_iz_custom_setting rounded-3 w-100 d-block text-dark"
        placeholder="Field"
        type="text"
        name="Old_pass"
      />
      <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass"
        >Start date*</label
      >
      <div class="d-flex gap-3">
        <select
          class="input_settings_1 w-100 d-block text-dark"
          placeholder="e.g oxford"
          type="date"
          name="Old_pass"
        >
          <option value="0" selected>Month</option>
          <option value="0">Month</option>
        </select>

        <select
          class="input_settings_1 w-100 d-block text-dark"
          placeholder="e.g oxford"
          type="date"
          name="Old_pass"
        >
          <option value="0" selected>year</option>
          <option value="0">year</option>
        </select>
      </div>
      <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass"
        >End date*</label
      >
      <div class="d-flex gap-3">
        <select
          class="input_settings_1 w-100 d-block text-dark"
          placeholder="e.g oxford"
          type="date"
          name="Old_pass"
        >
          <option value="0" selected>Month</option>
          <option value="0">Month</option>
        </select>

        <select
          class="input_settings_1 w-100 d-block text-dark"
          placeholder="e.g oxford"
          type="date"
          name="Old_pass"
        >
          <option value="0" selected>year</option>
          <option value="0">year</option>
        </select>
      </div>
      <div class="d-flex justify-content-end mt-4">
        <div>
          <a
            href="#"
            @click="$bvModal.hide('Modal1_edu')"
            class="btn btn_green_setting_iz"
            >Save</a
          >
        </div>
      </div>
    </b-modal>
    <b-modal v-model="modalShow5" hide-header id="Modal2_edu">
      <p class="text_green_iz pt-3">Edit education</p>
      <!-- <p class="mt-3 fs-7">School*</p> -->
      <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass">School*</label>
      <input
        class="input_settings_2 w-100 d-block text-dark"
        placeholder="e.g oxford"
        type="text"
        name="Old_pass"
      />
      <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass">Degree*</label>
      <input
        class="input_settings_2 w-100 d-block text-dark"
        placeholder="Select country"
        type="text"
        name="Old_pass"
      />
      <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass"
        >Field of Study*</label
      >
      <input
        class="input_settings_2 w-100 d-block text-dark"
        placeholder="Field"
        type="text"
        name="Old_pass"
      />
      <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass"
        >Start date*</label
      >
      <div class="d-flex gap-3">
        <select
          class="input_settings_1 w-100 d-block text-dark"
          placeholder="e.g oxford"
          type="date"
          name="Old_pass"
        >
          <option value="0" selected>Month</option>
          <option value="0">Month</option>
        </select>

        <select
          class="input_settings_1 w-100 d-block text-dark"
          placeholder="e.g oxford"
          type="date"
          name="Old_pass"
        >
          <option value="0" selected>year</option>
          <option value="0">year</option>
        </select>
      </div>
      <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass"
        >End date*</label
      >
      <div class="d-flex gap-3">
        <select
          class="input_settings_1 w-100 d-block text-dark"
          placeholder="e.g oxford"
          type="date"
          name="Old_pass"
        >
          <option value="0" selected>Month</option>
          <option value="0">Month</option>
        </select>

        <select
          class="input_settings_1 w-100 d-block text-dark"
          placeholder="e.g oxford"
          type="date"
          name="Old_pass"
        >
          <option value="0" selected>year</option>
          <option value="0">year</option>
        </select>
      </div>
      <div class="d-flex justify-content-end mt-4">
        <div>
          <a
            href="#"
            @click="$bvModal.hide('Modal1_edu')"
            class="btn btn_green_setting_iz"
            >Save</a
          >
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modalShow: false,
      modalShow2: false,
      modalShow3: false,
      modalShow4: false,
      modalShow5: false,
    };
  },
};
</script>
