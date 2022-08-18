<template>
  <div>
    <Nav />
    <ServicesNav />

    <CreategigNav />
    <div class="container">
       <div
          class="row mx-0 pt-5  flex-wrap align-items-top gap-lg-5"
        >
          <NotificationTab />
        <div
          class="
            settings_menu
            bg-white
            boder_bg_shadow
            px-lg-5 px-3
            py-3 py-lg-4
            col-lg-7 col-12
          "
        >
          <p
            class="
              text_green_iz
              fs-5
              mb-0
              pb-3
              border_bottom_custom_2
              fw-bolder
            "
          >
            Change Password
          </p>
          <div
            class="
              d-flex
              justify-content-lg-start justify-content-center
              mt-3
              flex-wrap
              w-100
            "
          >
            <div class="w-100">
              <label class="d-block fs-6 fw-bolder pb-2" for="Old_pass"
                >Old Password</label
              >
              <input
                class="input_settings_1 w-100 d-block"
                placeholder="Enter Old Password"
                type="password"
                name="Old_pass"
              />
            </div>
          </div>
          <div class="d-flex justify-content-between mt-3 flex-wrap">
            <div class="w-45">
              <label class="d-block fs-6 fw-bolder pb-2" for="n_pass"
                >New Password</label
              >
              <input
                class="input_settings_1 d-block"
                placeholder="Enter New Password"
                type="password"
                name="n_pass"
              />
            </div>
            <div class="w-45">
              <label class="d-block fs-6 fw-bolder pb-2" for="confirm_p"
                >Confirm Password</label
              >
              <input
                class="input_settings_1 d-block"
                placeholder="Confirm Password"
                type="password"
                name="confirm_p"
              />
            </div>
          </div>
          <!-- BTN ADD -->
          <div
            class="
              d-flex
              justify-content-lg-end justify-content-center
              gap-2
              w-100
              mt-4
            "
          >
            <div>
              <a href="#" class="btn btn_white_setting_iz">Discard Changes</a>
            </div>
            <div><a href="#" class="btn btn_green_setting_iz">Save</a></div>
          </div>
          <p
            class="
              text_green_iz
              font_custom_iz
              mb-0
              pb-3
              mt-5
              border_bottom_custom_2
              fw-bolder
            "
          >
            Security Questions
          </p>
          <div class="d-flex justify-content-between mt-3 flex-wrap">
            <div class="w-45">
              <label class="d-block fs-6 fw-bolder pb-2" for="Q_1"
                >Question 1</label
              >
              <select
                class="input_settings_1 d-block"
                placeholder="Enter New
              Password"
                type="select"
                name="Q_1"
              >
                <option value="0" selected>Choose a security question</option>
              </select>
            </div>
            <div class="w-45">
              <label class="d-block fs-6 fw-bolder pb-2" for="Enter_Answer1"
                >Enter Answer</label
              >
              <input
                class="input_settings_1 d-block"
                placeholder="Enter Answer"
                type="text"
                name="Enter_Answer1"
              />
            </div>
          </div>
          <div class="d-flex justify-content-between mt-3 flex-wrap">
            <div class="w-45">
              <label class="d-block fs-6 fw-bolder pb-2" for="Q_1"
                >Question 2</label
              >
              <select
                class="input_settings_1 d-block"
                placeholder="Enter New
              Password"
                type="select"
                name="Q_1"
              >
                <option value="0" selected>Choose a security question</option>
              </select>
            </div>
            <div class="w-45">
              <label class="d-block fs-6 fw-bolder pb-2" for="Enter_Answer1"
                >Enter Answer</label
              >
              <input
                class="input_settings_1 d-block"
                placeholder="Enter Answer"
                type="text"
                name="Enter_Answer1"
              />
            </div>
          </div>
          <!-- <div class="d-flex justify-content-between mt-3 flex-wrap">
            <div class="w-45">
              <label class="d-block fs-6 fw-bolder pb-2" for="Location"
                >Location (State,Country)</label
              >
              <input
                class="input_settings_1 d-block"
                placeholder="E.g London, Uk"
                type="text"
                name="Location"
              />
            </div>
            <div class="w-45">
              <label class="d-block fs-6 fw-bolder pb-2" for="pf_link"
                >Portfolio Link</label
              >
              <input
                class="input_settings_1 d-block"
                placeholder="Please provide link to your portfolio"
                type="text"
                name="pf_link"
              />
            </div>
          </div>
          <div class="d-flex w-100 mt-3">
            <div class="w-100">
              <p class="d-block fs-6 fw-bolder pb-2 mb-0">About you</p>
              <textarea
                class="w-100 fs-6 d-block px-3 py-2 height_custom_iz_text_area"
                placeholder="Write a brief information about yourself"
                type="text"
                name="About"
              />
            </div>
          </div>
          <div class="d-flex justify-content-between mt-3 flex-wrap">
            <div class="w-45">
              <label class="d-block fs-6 fw-bolder pb-2" for="Language"
                >Languages</label
              >
              <input
                class="input_settings_1 d-block"
                placeholder="Abuja"
                type="text"
                name="Language"
              />
            </div>
            <div class="w-45">
              <label class="d-block fs-6 fw-bolder pb-2" for="State"
                >State</label
              >
              <input
                class="input_settings_1 d-block"
                placeholder="Abuja"
                type="text"
                name="State"
              />
            </div>
          </div>
          <div class="d-flex justify-content-between mt-3 flex-wrap">
            <div class="w-45">
              <label class="d-block fs-6 fw-bolder pb-2" for="Country"
                >Country</label
              >
              <input
                class="input_settings_1 d-block"
                placeholder="Nigeria"
                type="text"
                name="Country"
              />
            </div>
            <div class="w-45">
              <label class="d-block fs-6 fw-bolder pb-2" for="Postal"
                >Postal Code</label
              >
              <input
                class="input_settings_1 d-block"
                placeholder="8004"
                type="text"
                name="Postal"
              />
            </div>
          </div> -->
          <div
            class="
              d-flex
              justify-content-lg-end justify-content-center
              gap-2
              w-100
              mt-4
            "
          >
            <div>
              <a href="#" class="btn btn_white_setting_iz">Discard Changes</a>
            </div>
            <div><a href="#" class="btn btn_green_setting_iz">Save</a></div>
          </div>
          <p
            class="
              text_green_iz
              font_custom_iz
              mb-0
              pb-3
              mt-5
              border_bottom_custom_2
              fw-bolder
            "
          >
            Account Recovery
          </p>

          <div
            class="
              d-flex
              justify-content-between
              align-items-end
              mt-3
              flex-wrap
            "
          >
            <div class="w-75">
              <label class="d-block fs-6 fw-bolder pb-2" for="recovery_1"
                >Recovery Phone Number</label
              >
              <input
                class="input_settings_1 w-100 d-block"
                placeholder="Enter a Phone Number"
                type="number"
                name="recovery_1"
              />
            </div>
            <div
              class="w-25 d-flex justify-content-lg-end justify-content-center"
            >
              <div><a href="#" class="btn btn_green_setting_iz">Verify</a></div>
            </div>
          </div>
          <div
            class="
              d-flex
              justify-content-between
              align-items-end
              mt-3
              flex-wrap
              w-100
            "
          >
            <div class="w-75">
              <label class="d-block fs-6 fw-bolder pb-2" for="recovery_1"
                >Recovery Email Address</label
              >
              <input
                class="input_settings_1 w-100 d-block"
                placeholder="Enter an Email Address"
                type="number"
                name="recovery_1"
              />
            </div>
            <div
              class="w-25 d-flex justify-content-lg-end justify-content-center"
            >
              <div><a href="#" class="btn btn_green_setting_iz">Verify</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>