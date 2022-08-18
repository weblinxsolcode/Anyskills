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
            <div class="ps-4">
              <div class="row mx-0">
                <div class="col-lg-5 col-12">
                  <h4 class="text-dark fw-bolder">Meetup & Diary</h4>
                  <button
                    v-b-modal.Modal_1
                    to="#"
                    class="mt-4 btn btn-next border_radius_iz"
                  >
                    + Add new event
                  </button>
                  <div class="mt-4 bg-white w-100 boder_bg_shadow py-2">
                    <b-row class="justify-content-center">
                      <b-col md="auto">
                        <b-calendar
                          v-model="value"
                          @context="onContext"
                          locale="en-US"
                          class="text-white mx-0 px-0"
                        ></b-calendar>
                      </b-col>
                      <!-- <div class="d-flex justify-content-between">
                                <div class="form-group d-block mx-0">
                                  <div>
                                    <label
                                      for="exampleForm ControlInput1"
                                      class="pt-2"
                                      >Start Time</label
                                    >
                                  </div>
                                  <div>
                                    <button
                                      class="mt-2 calendar_button fs-6 px-2"
                                    >
                                      9 : 00
                                      <i
                                        class="far fa-clock ms-5 text-dark"
                                      ></i>
                                    </button>
                                  </div>
                                </div>
                                <div class="form-group d-block mx-0">
                                  <div>
                                    <label
                                      for="exampleForm ControlInput1"
                                      class="pt-2"
                                      >Start Time</label
                                    >
                                  </div>
                                  <div>
                                    <button
                                      class="mt-2 calendar_button fs-6 px-2"
                                    >
                                      9 : 00
                                      <i
                                        class="far fa-clock ms-5 text-dark"
                                      ></i>
                                    </button>
                                  </div>
                                </div>
                              </div> -->
                    </b-row>
                  </div>
                  <div class="mt-5">
                    <h3 class="text-dark">
                      Upcoming Events
                      <span><i class="fas fa-angle-down ms-5 ps-5"></i></span>
                    </h3>
                    <p class="text-muted opacity_01 fs-7">Tommorow</p>
                    <div class="boder_bg_shadow mt-4">
                      <div class="row">
                        <div class="col-5">
                          <img
                            src="~assets/images/soc_event_01.png"
                            class="mx-3 my-3"
                            alt=""
                          />
                        </div>
                        <div class="col-7 mt-3 px-4">
                          <div class="d-flex justify-content-between">
                            <p class="fs-7 mb-0">7 Aug, 2019 - 14 Aug, 2019</p>
                            <span
                              ><i class="gray fs-5 fas fa-ellipsis-v"></i
                            ></span>
                          </div>
                          <p class="fs-6 fw-bolder mb-0">
                            NYSC, Pre-service & I.T Internship
                          </p>
                          <p class="mb-0 fs-7 gray">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. I
                          </p>
                          <p class="mb-0 fs-7 fw-bold">| 10:00 - 12:00PM</p>
                        </div>
                      </div>
                    </div>
                    <div class="boder_bg_shadow mt-4 mb-4">
                      <div class="row">
                        <div class="col-5">
                          <img
                            src="~assets/images/soc_event_01.png"
                            class="mx-3 my-3"
                            alt=""
                          />
                        </div>
                        <div class="col-7 mt-3 px-4">
                          <div class="d-flex justify-content-between">
                            <p class="fs-7 mb-0">7 Aug, 2019 - 14 Aug, 2019</p>
                            <span
                              ><i class="gray fs-5 fas fa-ellipsis-v"></i
                            ></span>
                          </div>
                          <p class="fs-6 fw-bolder mb-0">
                            NYSC, Pre-service & I.T Internship
                          </p>
                          <p class="mb-0 fs-7 gray">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. I
                          </p>
                          <p class="mb-0 fs-7 fw-bold">| 10:00 - 12:00PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7 col-12">
                  <div class="gap-5">
                    <div class="button-box justify-content-start d-flex">
                      <div id="btn"></div>
                      <button
                        type="button"
                        class="toggle-btn text-light ms-0"
                        id="toggle-btn-c"
                        @click="leftClick"
                      >
                        Days
                      </button>
                      <button
                        type="button"
                        class="toggle-btn"
                        id="toggle-btn-c-2"
                        @click="rightClick"
                      >
                        Week
                      </button>
                      <button
                        type="button"
                        class="toggle-btn"
                        id="toggle-btn-c-3"
                        @click="rightClick3"
                      >
                        Months
                      </button>
                      <button
                        type="button"
                        class="toggle-btn"
                        id="toggle-btn-c-4"
                        @click="rightClick4"
                      >
                        Years
                      </button>
                    </div>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h4 class="fw-bolder">Events Schedule</h4>
                    </div>
                    <div>
                      <div class="bg-white box-shadow-iz rounded-3 p-2">
                        <span><i class="fas fa-angle-left"></i></span>
                        <span
                          ><i class="fas fa-calendar mx-1 opacity_01"></i
                        ></span>
                        <span class="me-1 opacity_01"
                          >15 August - 26 August</span
                        >
                        <span><i class="fas fa-angle-right"></i></span>
                      </div>
                    </div>
                  </div>
                  <p class="text-center text_green_iz fw-bolder mt-4">
                    15 August 2022
                  </p>
                 <div>
                   <Calander />
                 </div>
                </div>
                <b-modal id="Modal_1" hide-footer>
                  <div>
                    <div
                      class="d-flex align-items-center mx-0 mx-lg-3 py- gap-3"
                    >
                      <div>
                        <p class="fs-7 gray" modal-cancel>Cancel</p>
                      </div>
                      <div class="text-center ms-5 ps-4">
                        <p class="fs-6 dark fw-bolder ms-5">Create Events</p>
                      </div>
                    </div>
                    <div
                      class="d-flex justify-content-center align-items-center"
                    >
                      <div class="round_img_m text-center mt-5">
                        <i class="round_img_m_icon far fa-image my-auto"></i>
                      </div>
                    </div>
                    <p class="fs-5 text-center my-3 fw-bolder">Upload Photo</p>
                    <hr style="color: lightgrey" />
                    <div>
                      <form>
                        <div class="form-group py-3">
                          <label
                            for="exampleFormControlInput1"
                            class="fw-bold my-3"
                            >Event Name</label
                          >
                          <input
                            type="text"
                            class="form-control px-4 form-control-2 bg-white box_shadow_light_iz border_radius_iz"
                            placeholder="Enter Event name"
                          />
                        </div>

                        <div class="d-flex gap-3">
                          <div class="w-100">
                            <label
                              class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7"
                              for="Old_pass"
                              >Start date*</label
                            >
                            <input
                              class="input_settings_1 w-100 d-block text-dark bg-white box_shadow_light_iz border_radius_iz"
                              placeholder="e.g oxford"
                              type="date"
                              name="Old_pass"
                            />
                          </div>
                          <div class="w-100">
                            <label
                              class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7"
                              for="Old_pass"
                              >End date*</label
                            >

                            <input
                              class="input_settings_1 d-block text-dark bg-white box_shadow_light_iz border_radius_iz"
                              placeholder="e.g oxford"
                              type="date"
                              name="Old_pass"
                            />
                          </div>
                        </div>
                        <div class="d-flex gap-3">
                          <div class="w-100">
                            <label
                              class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7"
                              for="Old_pass"
                              >Start time*</label
                            >
                            <input
                              class="input_settings_1 w-100 d-block text-dark bg-white box_shadow_light_iz border_radius_iz"
                              placeholder="e.g oxford"
                              type="time"
                              name="Old_pass"
                            />
                          </div>
                          <div class="w-100">
                            <label
                              class="d-block fs-6 fw-bolder pb-2 mt-3 fs-7"
                              for="Old_pass"
                              >End time*</label
                            >

                            <input
                              class="input_settings_1 d-block text-dark bg-white box_shadow_light_iz border_radius_iz"
                              placeholder="e.g oxford"
                              type="time"
                              name="Old_pass"
                            />
                          </div>
                        </div>
                        <div
                          class="bg-white box_shadow_light_iz h_add_iz border_radius_2_iz mx-auto mt-5"
                        >
                          <div class="button-box justify-content-center d-flex">
                            <div id="btn2"></div>
                            <button
                              type="button"
                              class="toggle-btn-2 text-light ms-0"
                              id="toggle-btn-c_iz1"
                              @click="leftClick_iz_1"
                            >
                              Event
                            </button>
                            <span class="vl-2 opacity_01 ms-3"></span>
                            <button
                              type="button"
                              class="toggle-btn-2"
                              id="toggle-btn-c-2_iz2"
                              @click="rightClick_iz2"
                            >
                              Reminders
                            </button>
                            <span class="vl-2 opacity_01 ms-3"></span>
                            <button
                              type="button"
                              class="toggle-btn-2"
                              id="toggle-btn-c-3_iz3"
                              @click="rightClick_iz3"
                            >
                              Task
                            </button>
                          </div>
                        </div>

                        <div class="form-group py-3">
                          <label
                            for="exampleFormControlInput1"
                            class="fw-bold my-3"
                            >Connections</label
                          >
                          <input
                            class="form-control form-control-2 px-4 bg-white box_shadow_light_iz rounded-3"
                            placeholder="Add connection use @ to add "
                            type="text"
                            id="exampleFormControlTextarea1"
                            rows="5"
                          />
                        </div>
                        <div class="form-group py-3">
                          <label
                            for="exampleFormControlInput1"
                            class="fw-bold my-3"
                            >Location</label
                          >
                          <select
                            class="d-block w-100 form-control-2 ps-2 pe-4 bg-white box_shadow_light_iz rounded-3"
                            placeholder="Add connection use @ to add "
                            type="text"
                            id="exampleFormControlTextarea1"
                            rows="5"
                          >
                            <option value="0" selected>Set location</option>
                          </select>
                        </div>
                        <div class="form-group py-3">
                          <label
                            for="exampleFormControlInput1"
                            class="fw-bold my-3"
                            >Description</label
                          >
                          <textarea
                            class="form-control form-control-2 px-4"
                            placeholder="Enter a brief description of your group  "
                            id="exampleFormControlTextarea1"
                            rows="5"
                          ></textarea>
                        </div>
                        <div class="d-flex gap-3">
                          <label class="switch_1 fs-6 me-2 mb-2 mb-lg-0"
                            ><input
                              type="checkbox"
                              checked
                              @click="timeShow1" />
                            <span class="slider_1 round_1"></span
                          ></label>
                          <label for="exampleForm ControlInput1" class=""
                            >Set reminder</label
                          >
                        </div>
                        <div class="d-flex gap-3">
                          <label class="switch_1 fs-6 me-2 mb-2 mb-lg-0"
                            ><input type="checkbox" @click="timeShow1" />
                            <span class="slider_1 round_1"></span
                          ></label>
                          <label for="exampleForm ControlInput1" class=""
                            >Continous Event</label
                          >
                        </div>
                        <div class="py-3 mt-4">
                          <p
                            class="w-100 fw-light btn btn-next"
                            v-b-modal.modal-center-2
                          >
                            Add Event
                          </p>
                        </div>
                      </form>
                   
                    </div>
                  </div>
                </b-modal>
              </div>
            </div>
          </div>

    

        </div>
      </div>
    </div>

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
  padding: 5px 20px;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  color: #849aa9;

  font-weight: bolder;
  position: relative;
  text-align: center;
}
.toggle-btn-2 {
  padding: 5px 20px;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  color: rgb(157, 156, 156);

  font-weight: bolder;
  position: relative;
  text-align: center;
}

#btn {
  left: 0px;
  top: 0;
  margin-bottom: 10px;
  position: absolute;
  width: 80px;
  height: 43px;
  margin-left: -2px;
  margin-top: -5px;
  background: #52be71;
  border-radius: 10px;
  transition: 0.5s;
}
#btn2 {
  left: 0px;
  top: 0;
  margin-bottom: 10px;
  position: absolute;
  width: 85px;
  height: 43px;
  margin-left: -2px;
  margin-top: -5px;
  background: #52be71;
  border-radius: 20px;
  transition: 0.5s;
}
.text-light {
  opacity: 1;
}
.Remove_left_Iz {
  display: none;
}
.h_add_iz {
  height: 40px;
  align-items: center;
  display: flex;
  /* margin:20px 0px; */
  width: 300px;
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
      document.getElementById("btn").style.left = "0px";
      document.getElementById("toggle-btn-c").classList.add("text-light");
      document.getElementById("toggle-btn-c-2").classList.remove("text-light");
      document.getElementById("toggle-btn-c-3").classList.remove("text-light");
      document.getElementById("toggle-btn-c-4").classList.remove("text-light");

      this.isChecked = false;
    },
    async rightClick() {
      document.getElementById("btn").style.left = "75px";
      document.getElementById("toggle-btn-c").classList.remove("text-light");
      document.getElementById("toggle-btn-c-3").classList.remove("text-light");
      document.getElementById("toggle-btn-c-4").classList.remove("text-light");
      document.getElementById("toggle-btn-c-2").classList.add("text-light");

      this.isChecked = true;

      //   document.getElementById("toggle-btn-c-2").style.toggleClass.color = "white";
    },
    async rightClick3() {
      document.getElementById("btn").style.left = "160px";
      document.getElementById("btn").width = "65px";
      document.getElementById("toggle-btn-c").classList.remove("text-light");
      document.getElementById("toggle-btn-c-2").classList.remove("text-light");
      document.getElementById("toggle-btn-c-4").classList.remove("text-light");
      document.getElementById("toggle-btn-c-3").classList.add("text-light");

      this.isChecked = true;

      //   document.getElementById("toggle-btn-c-2").style.toggleClass.color = "white";
    },
    async rightClick4() {
      document.getElementById("btn").style.left = "245px";
      document.getElementById("toggle-btn-c").classList.remove("text-light");
      document.getElementById("toggle-btn-c-2").classList.remove("text-light");
      document.getElementById("toggle-btn-c-3").classList.remove("text-light");
      document.getElementById("toggle-btn-c-4").classList.add("text-light");

      this.isChecked = true;

      //   document.getElementById("toggle-btn-c-2").style.toggleClass.color = "white";
    },
    // New
    async leftClick_iz_1() {
      document.getElementById("btn2").style.left = "0px";
      document.getElementById("toggle-btn-c_iz1").classList.add("text-light");
      document
        .getElementById("toggle-btn-c-2_iz2")
        .classList.remove("text-light");
      document
        .getElementById("toggle-btn-c-3_iz3")
        .classList.remove("text-light");
      // document.getElementById("toggle-btn-c-4").classList.remove("text-light");

      this.isChecked = false;
    },
    async rightClick_iz2() {
      document.getElementById("btn2").style.left = "115px";
      document
        .getElementById("toggle-btn-c_iz1")
        .classList.remove("text-light");
      document
        .getElementById("toggle-btn-c-3_iz3")
        .classList.remove("text-light");
      // document.getElementById("toggle-btn-c-4").classList.remove("text-light");
      document.getElementById("toggle-btn-c-2_iz2").classList.add("text-light");

      this.isChecked = true;

      //   document.getElementById("toggle-btn-c-2").style.toggleClass.color = "white";
    },
    async rightClick_iz3() {
      document.getElementById("btn2").style.left = "230px";
      document.getElementById("btn2").width = "65px";
      document
        .getElementById("toggle-btn-c_iz1")
        .classList.remove("text-light");
      document
        .getElementById("toggle-btn-c-2_iz2")
        .classList.remove("text-light");
      // document.getElementById("toggle-btn-c-4").classList.remove("text-light");
      document.getElementById("toggle-btn-c-3_iz3").classList.add("text-light");

      this.isChecked = true;

      //   document.getElementById("toggle-btn-c-2").style.toggleClass.color = "white";
    },
  },
};
</script>