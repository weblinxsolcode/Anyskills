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
            <div class="d-flex justify-content-between mb-3">
              <div>
                <p class="text_green_iz font_custom_iz mb-0 fw-bolder">Employment</p>
              </div>

              <div>
                <p
                  class="text_green_iz font_custom_iz for_pointer mb-0 fw-bolder"
                  @click="modalShow6 = !modalShow6"
                >
                  + Add Employment
                </p>
              </div>
            </div>
            <div>
              <span class="line mx-4 my-3"> </span>
            </div>
            <div class="d-flex flex-column">
              <div class="border_iz_custom_setting">
                <div
                  class="bg-dark px-4 rounded-3 d-flex py-3 gap-lg-5 gap-3 border_bottom_custom_2"
                >
                  <div>
                    <p class="text-white mb-0 fw-bold">Company</p>
                  </div>
                  <div>
                    <p class="text-white mb-0 fw-bold ms-lg-5">Rate</p>
                  </div>
                  <div>
                    <p class="text-white mb-0 fw-bold">Country</p>
                  </div>
                  <div>
                    <p class="text-white mb-0 fw-bold ms-5 ps-3">Year</p>
                  </div>
                </div>
                <div
                  class="bg-white ps-3 rounded-3 d-flex py-3 gap-lg-5 gap-3 border_bottom_custom_2"
                >
                  <div>
                    <p class="text-dark mb-0 fw-bold">Oxford University</p>
                  </div>
                  <div>
                    <p class="text-dark mb-0 fw-bold">100</p>
                  </div>
                  <div>
                    <p class="text-dark mb-0 fw-bold">Computer Science</p>
                  </div>
                  <div>
                    <p class="text-dark mb-0 fw-bold">2018-2018</p>
                  </div>
                  <div>
                    <i class="fas fa-pen"></i>
                  </div>
                  <div>
                    <i class="fas fa-trash"></i>
                  </div>
                </div>
                <div
                  class="bg-white ps-3 rounded-3 d-flex py-3 gap-lg-5 gap-3 border_bottom_custom_2"
                >
                  <div>
                    <p class="text-dark mb-0 fw-bold">Oxford University</p>
                  </div>
                  <div>
                    <p class="text-dark mb-0 fw-bold">100</p>
                  </div>
                  <div>
                    <p class="text-dark mb-0 fw-bold">Computer Science</p>
                  </div>
                  <div>
                    <p class="text-dark mb-0 fw-bold">2018-2018</p>
                  </div>
                  <div>
                    <i class="fas fa-pen"></i>
                  </div>
                  <div>
                    <i class="fas fa-trash"></i>
                  </div>
                </div>
                <div
                  class="bg-white ps-3 rounded-3 d-flex py-3 gap-lg-5 gap-3 border_bottom_custom_2"
                >
                  <div>
                    <p class="text-dark mb-0 fw-bold">Oxford University</p>
                  </div>
                  <div>
                    <p class="text-dark mb-0 fw-bold">100</p>
                  </div>
                  <div>
                    <p class="text-dark mb-0 fw-bold">Computer Science</p>
                  </div>
                  <div>
                    <p class="text-dark mb-0 fw-bold">2018-2018</p>
                  </div>
                  <div>
                    <i class="fas fa-pen"></i>
                  </div>
                  <div>
                    <i class="fas fa-trash"></i>
                  </div>
                </div>
                <div
                  class="bg-white ps-3 rounded-3 d-flex py-3 gap-lg-5 gap-3 border_bottom_custom_2"
                >
                  <div>
                    <p class="text-dark mb-0 fw-bold">Oxford University</p>
                  </div>
                  <div>
                    <p class="text-dark mb-0 fw-bold">100</p>
                  </div>
                  <div>
                    <p class="text-dark mb-0 fw-bold">Computer Science</p>
                  </div>
                  <div>
                    <p class="text-dark mb-0 fw-bold">2018-2018</p>
                  </div>
                  <div>
                    <i class="fas fa-pen"></i>
                  </div>
                  <div>
                    <i class="fas fa-trash"></i>
                  </div>
                </div>
                <div
                  class="bg-white ps-3 rounded-3 d-flex py-3 gap-lg-5 gap-3 border_bottom_custom_2"
                >
                  <div>
                    <p class="text-dark mb-0 fw-bold">Oxford University</p>
                  </div>
                  <div>
                    <p class="text-dark mb-0 fw-bold">100</p>
                  </div>
                  <div>
                    <p class="text-dark mb-0 fw-bold">Computer Science</p>
                  </div>
                  <div>
                    <p class="text-dark mb-0 fw-bold">2018-2018</p>
                  </div>
                  <div>
                    <i class="fas fa-pen"></i>
                  </div>
                  <div>
                    <i class="fas fa-trash"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-3 mt-lg-5 d-flex justify-content-end">
              <div class="d-flex align-items-center gap-2">
                <div><p class="text-dark mb-0 fw-bold">Rows per page:</p></div>
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
    </div>
    <Footer />
    <!-- modals -->
    <b-modal v-model="modalShow6" hide-header id="Modal1_employ">
      <div class="d-flex justify-content-between align-items-center">
        <p class="text_green_iz fs-5">New Employment</p>
        <ModalBtn id="Modal1_employ" />
      </div>
      <!-- <p class="mt-3 fs-7">School*</p> -->
      <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass">Company</label>
      <input
        class="input_settings_2 w-100 d-block text-dark"
        placeholder="Company Name"
        type="text"
        name="Old_pass"
      />
      <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass">Role</label>
      <input
        class="input_settings_2 w-100 d-block text-dark"
        placeholder="Select certification/award"
        type="text"
        name="Old_pass"
      />
      <!-- <label
                    class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7"
                    for="Old_pass"
                    >Field of Study*</label
                  >
                  <input
                    class="input_settings_2 w-100 d-block text-dark"
                    placeholder="Field"
                    type="text"
                    name="Old_pass"
                  > -->

      <div class="d-flex align-items-center gap-3">
        <div class="w-100">
          <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass"
            >Country</label
          >
          <select
            class="input_settings_1 w-100 d-block text-dark"
            placeholder="e.g oxford"
            type="date"
            name="Old_pass"
          >
            <option value="0" selected>Select Country</option>
            <option value="0">Select Country</option>
          </select>
        </div>

        <div class="w-100">
          <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass2"
            >State</label
          >
          <select
            class="input_settings_1 w-100 d-block text-dark"
            placeholder="e.g oxford"
            type="date"
            name="Old_pass2"
          >
            <option value="0" selected>Select State</option>
            <option value="0">Select State</option>
          </select>
        </div>
      </div>

      <div class="d-flex gap-3">
        <div class="w-100">
          <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass"
            >Start date*</label
          >
          <input
            class="input_settings_1 bg-white border_iz_custom_setting w-100 d-block text-dark"
            type="text"
            placeholder="Year"
            onfocus="(this.type='date')"
            name="Old_pass"
          />
        </div>
        <div class="w-100">
          <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass"
            >End date*</label
          >
          <input
            class="input_settings_1 bg-white border_iz_custom_setting w-100 d-block text-dark"
            type="text"
            placeholder="Year"
            onfocus="(this.type='date')"
            name="Old_pass"
          />
        </div>
      </div>
      <div class="d-flex justify-content-start gap-3 mt-3">
        <div>
          <label class="switch_1 fs-6 me-2 mb-2 mb-lg-0"
            ><input type="checkbox" /> <span class="slider_1 round_1"></span
          ></label>
        </div>
        <div><p class="mb-0 opacity-7-iz fs-6">I currently work there</p></div>
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
      modalShow6: false,
    };
  },
};
</script>
