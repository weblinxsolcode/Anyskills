<template>
  <div>
    <Nav />
    <ServicesNav />
    <CreategigNav />
    <div class="container">
      <div class="d-lg-flex d-block gap-2">
        <div class="">
          <Dashboard />
        </div>
        <div class="bg-mycon w-100 px-3 py-2">
          <div class="row align-items-center">
            <div class="ps-lg-4 ps-0">
              <h3 class="fw-bold">My Wallet</h3>
              <div class="form-box">
                <div class="button-box d-flex">
                  <div id="btn"></div>
                  <button
                    type="button"
                    class="toggle-btn text-light"
                    id="toggle-btn-c"
                    @click="leftClick"
                  >
                    Payment Settings
                  </button>
                  <button
                    type="button"
                    class="toggle-btn"
                    id="toggle-btn-c-2"
                    @click="rightClick"
                  >
                    Payment History
                  </button>
                </div>
              </div>
              <div class="Remove_right_Iz">
                <p class="text-start">
                  View your payment activity and the current balance of your Anyskills
                  account. View our <a href="#">Privacy Policy</a>.
                </p>
                <h1 class="pt-4">$0.00</h1>
                <div class="px-2 box_shadow_light_iz px-3 py-3 mt-lg-5 mt-3 rounded-3">
                  <div class="d-flex align-items-center justify-content-between">
                    <div><h6 class="fw-bolder mb-0">Payment Method</h6></div>
                    <div>
                      <p class="btn_green_payment mb-0 for_pointer">Add a new card</p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center gap-3 mt-4 pb-2 flex-wrap">
                    <div class="w-45 box_shadow_light_iz rounded-3 py-2 px-3">
                      <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center gap-1">
                          <div>
                            <img
                              class="w-75"
                              src="~assets/images/mastercard_pay.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p class="mb-0">7812 2139 0823 XXXX</p>
                          </div>
                        </div>
                        <div>
                          <i class="fas fa-pencil-alt fs-7"></i>
                        </div>
                      </div>
                    </div>
                    <div class="w-45 box_shadow_light_iz rounded-3 py-3 px-3">
                      <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center gap-1">
                          <div>
                            <img class="w-75" src="~assets/images/visa_pay.png" alt="" />
                          </div>
                          <div>
                            <p class="mb-0">7812 2139 0823 XXXX</p>
                          </div>
                        </div>
                        <div>
                          <i class="fas fa-pencil-alt fs-7"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="px-2 box_shadow_light_iz px-3 py-3 mt-lg-3 mt-3 rounded-3">
                  <div
                    class="d-flex align-items-center justify-content-lg-start justify-content-center"
                  >
                    <div>
                      <h6 class="fw-bolder mb-0">Billing Information</h6>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center gap-3 mt-4 pb-2 flex-wrap">
                    <div class="w-90 box_shadow_light_iz rounded-3 py-2 px-3">
                      <div class="d-flex align-items-center justify-content-between">
                        <div>
                          <h4 class="fw-bolder">Pro dee</h4>
                        </div>
                        <div class="d-flex gap-3">
                          <div>
                            <p class="text-danger mb-0 fs-7">
                              <span>
                                <i class="fas fa-square text-danger fs-7 me-1"></i
                              ></span>
                              DELETE
                            </p>
                          </div>
                          <div>
                            <p class="mb-0 fs-7">EDIT</p>
                          </div>
                        </div>
                      </div>
                      <p
                        class="text-lg-start text-center text-muted fs-7 opacity_01 mb-1"
                      >
                        Card Name: Varing Burrito
                      </p>
                      <p
                        class="text-lg-start text-center text-muted fs-7 opacity_01 mb-1"
                      >
                        Card Number: 2837783
                      </p>
                      <p
                        class="text-lg-start text-center text-muted fs-7 opacity_01 mb-1"
                      >
                        VAT Number: FRB1235476
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Remove_left_Iz">
                <div class="box_shadow_light_iz mt-3 px-4 py-4">
                  <div class="d-flex justify-content-between">
                    <div>
                      <p class="fs-5 fw-bolder">Payment History</p>
                    </div>
                    <div>
                      <p class="fs-6">
                        <span><i class="fas fa-calendar me-2"></i> </span> View All
                      </p>
                    </div>
                  </div>
                  <p class="fs-7 text-uppercase fw-bold">Newest</p>
                  <div class="d-flex justify-content-between flex-wrap">
                    <div class="d-flex gap-3 align-items-center">
                      <div class="arrow_circle_iz_p">
                        <span class="arrow_circle_iz"
                          ><i class="fas fa-arrow-down fs-7"></i
                        ></span>
                      </div>
                      <div>
                        <p class="mb-0">You</p>
                        <p class="mb-0">27 March 2020, at 12:30 PM</p>
                      </div>
                    </div>
                    <div>
                      <p class="mb-0">-$2500</p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between flex-wrap mt-3">
                    <div class="d-flex gap-3 align-items-center">
                      <div class="arrow_circle_iz2_p">
                        <span class="arrow_circle_iz2"
                          ><i class="fas fa-arrow-up fs-7"></i
                        ></span>
                      </div>
                      <div>
                        <p class="mb-0">Joe Petsi</p>
                        <p class="mb-0">27 March 2020, at 12:30 PM</p>
                      </div>
                    </div>
                    <div>
                      <p class="mb-0 text_green_iz fw-bold">+$2500</p>
                    </div>
                  </div>
                  <p class="fs-7 text-uppercase fw-bold mt-5 mb-3">yesterday</p>
                  <div class="d-flex justify-content-between flex-wrap mt-3">
                    <div class="d-flex gap-3 align-items-center">
                      <div class="arrow_circle_iz2_p">
                        <span class="arrow_circle_iz2"
                          ><i class="fas fa-arrow-up fs-7"></i
                        ></span>
                      </div>
                      <div>
                        <p class="mb-0">Joe Petsi</p>
                        <p class="mb-0">27 March 2020, at 12:30 PM</p>
                      </div>
                    </div>
                    <div>
                      <p class="mb-0 text_green_iz fw-bold">+$800</p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between flex-wrap mt-3 mb-5">
                    <div class="d-flex gap-3 align-items-center">
                      <div class="arrow_circle_iz2_p">
                        <span class="arrow_circle_iz2"
                          ><i class="fas fa-arrow-up fs-7"></i
                        ></span>
                      </div>
                      <div>
                        <p class="mb-0">Joe Petsi</p>
                        <p class="mb-0">27 March 2020, at 12:30 PM</p>
                      </div>
                    </div>
                    <div>
                      <p class="mb-0 text_green_iz fw-bold">+$1700</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal v-model="modalShow" hide-header id="Modal1_edu">
      <p class="text_green_iz">Payment Methods</p>
      <span class="alt_hr"></span>
      <p class="fs-7 mt-3">
        Add or manage payment methods associated with yourAnyskills Account.
      </p>
      <div class="d-flex align-items-center gap-4">
        <div>
          <input type="radio" name="fav_language" id="" />
        </div>
        <div>
          <img src="~assets/images/visa_pay.png" alt="" />
        </div>
      </div>
      <!-- <p class="mt-3 fs-7">School*</p> -->

      <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass"
        >Expiration</label
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

      <div class="d-flex gap-3">
        <div class="w-100">
          <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass"
            >Expiration
          </label>
          <input
            class="input_settings_1 w-100 d-block text-dark"
            placeholder="MM/YY"
            type="text"
            name="Old_pass"
          />
        </div>

        <div class="w-100">
          <label class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7" for="Old_pass">CVV</label>
          <input
            class="input_settings_1 d-block text-dark"
            placeholder="CVV"
            type="text"
            name="Old_pass"
          />
        </div>
      </div>
      <div class="d-flex align-items-center gap-4 mt-5">
        <div>
          <input type="radio" name="fav_language" id="" />
        </div>
        <div>
          <img src="~assets/images/mastercard_pay.png" alt="" />
        </div>
      </div>
      <div class="d-flex align-items-center gap-4">
        <div>
          <input type="radio" name="fav_language" id="" />
        </div>
        <div>
          <img src="~assets/images/paypal_pay.png" alt="" />
        </div>
      </div>
      <div class="d-flex align-items-center gap-4">
        <div>
          <input type="radio" name="fav_language" id="" />
        </div>
        <div>
          <img src="~assets/images/bitcoin_pay.png" alt="" />
        </div>
      </div>
      <div class="d-flex align-items-center gap-4">
        <div>
          <input type="radio" name="fav_language" id="" />
        </div>
        <div>
          <img src="~assets/images/strip_pay.png" alt="" />
        </div>
      </div>
      <div class="d-flex w-100 mt-4">
        <div class="w-100">
          <a
            href="#"
            @click="$bvModal.hide('Modal1_edu')"
            class="btn w-100 btn_green_setting_iz"
            >Save</a
          >
        </div>
      </div>
    </b-modal>
    <Footer />
  </div>
</template>
<style scoped>
.button-box {
  width: auto;
  margin: 35px auto;
  position: relative;
  border-radius: 10px;
  background: #fff;
  /* border: 2px solid; */
}

.toggle-btn {
  padding: 5px;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
  text-align: center;
}

#btn {
  left: 0;
  top: 0;
  margin-bottom: 10px;
  position: absolute;
  width: 130px;
  height: 43px;
  margin-left: -2px;
  margin-top: -5px;
  background: #52be71;
  border-radius: 10px;
  transition: 0.5s;
}

.Remove_left_Iz {
  display: none;
}
</style>
<script>
export default {
  data() {
    return {
      modalShow: false,
      isChecked: false,
    };
  },
  methods: {
    async leftClick() {
      document.getElementById("btn").style.left = "0";
      document.getElementById("toggle-btn-c").classList.add("text-light");
      document.getElementById("toggle-btn-c-2").classList.remove("text-light");
      document.querySelector(".Remove_right_Iz").style.display = "block";
      document.querySelector(".Remove_left_Iz").style.display = "none";

      this.isChecked = false;
    },
    async rightClick() {
      document.getElementById("btn").style.left = "132px";
      document.getElementById("toggle-btn-c").classList.remove("text-light");
      document.getElementById("toggle-btn-c-2").classList.add("text-light");
      document.querySelector(".Remove_left_Iz").style.display = "block";
      document.querySelector(".Remove_right_Iz").style.display = "none";
      this.isChecked = true;

      //   document.getElementById("toggle-btn-c-2").style.toggleClass.color = "white";
    },
  },
};
</script>
