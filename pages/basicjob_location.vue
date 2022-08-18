<template>
  <div>
    <Nav />

    <ServicesNav />

    <CreategigNav />

    <div
      class="container px-lg-3 d-flex justify-content-center justify-content-lg-between flex-wrap"
    >
      <div class="content d-flex flex-wrap">
        <p class="green mx-3 mx-lg-2 mx-md-0 fw-bold">Basic Info</p>
        <div class="d-flex mx-3 mx-lg-2 mb-2 for_pointer">
          <i class="fas green fa-check-circle cheak_icon me-1 py-1"></i>
          <p class="mb-0 green">Location & Schedule</p>
        </div>
        <div class="d-flex mx-3 mx-lg-2 mb-2 for_pointer">
          <i class="fas gray fa-check-circle cheak_icon me-1 py-1"></i>
          <p class="m-0 gray">Packages & Pricing</p>
        </div>
        <div class="d-flex mx-3 mx-lg-2 mb-2 for_pointer">
          <i class="fas gray fa-check-circle cheak_icon me-1 py-1"></i>
          <p class="m-0 gray">Uploads</p>
        </div>
        <div class="d-flex mx-3 mx-lg-2 mb-2 for_pointer">
          <i class="fas gray fa-check-circle cheak_icon me-1 py-1"></i>
          <p class="m-0 gray">Publish</p>
        </div>
      </div>
      <div class="text-center mt-3 mt-lg-0">
        <NuxtLink to="/post_job">
          <button type="submit" class="back_button mx-2">
            <i class="fas fa-angle-left mx-lg-1 mx-0"></i>
            Back
          </button></NuxtLink
        >
        <NuxtLink to="/job_package">
          <button type="submit" class="next_button mx-2">
            Next
            <i class="fas fa-angle-right"></i></button
        ></NuxtLink>
      </div>
    </div>
    <div class="demo"></div>
    <hr style="margin-top: 0px; color: lightgrey" />
    <div class="text-center">
      <div id="top_btn" class="for_hide mt-3 mt-lg-0 one_set_btn">
        <button class="px-4 mx-2">One off Job</button>
        <button class="mx-2">Set custom days</button>
      </div>
    </div>
    <div class="mt-5">
      <p
        class="fw-bolder fs-1 text-center green mb-0"
        style="color: #34a853; font-size: 35px"
      >
        Post a Job
      </p>
      <p class="text-center text-muted">Post a job , and let us get it done for you.</p>
      <p class="fw-bolder fs-5 text-center text-black mb-0">Basic Job</p>
      <hr
        style="color: lightgrey; margin-top: 60px"
        class="mx-auto w-50 col-lg-7 col-12"
      />
    </div>

    <div
      class="container px-0 px-lg-5 pt-4 justify-content-center flex-wrap col-12 col-lg-7"
    >
      <div class="left_card pb-4">
        <div class="card">
          <div class="card-body">
            <div class="container">
              <div class="container pb-4">
                <div class="justify-content-center">
                  <form>
                    <div class="form-group mx-0 mx-lg-3 py-3">
                      <label for="exampleForm ControlInput1" class="fw-bold my-2"
                        >Delivery Option</label
                      >
                      <p for="exampleForm ControlInput1" class="mt-0 fs-7 text-muted">
                        Select delivery type
                      </p>

                      <select
                        class="form-select form-control-4"
                        aria-label="Default select example"
                        id="joblocation"
                        @click="drop"
                      >
                        <option class="px-4" value="on-site-job" selected>
                          On-site Job
                        </option>
                        <option value="online">Online</option>
                      </select>
                    </div>
                    <div id="hide_items">
                      <div class="form-group mx-0 mx-lg-3 py-3">
                        <label for="exampleForm ControlInput1" class="fw-bold my-3"
                          >Country</label
                        >
                        <select
                          class="form-select form-control-4"
                          aria-label="Default select example"
                        >
                          <option class="px-4" selected>Select a Country</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div class="row px-lg-3 px-0">
                        <div class="col-lg-6 col-md-6 col-12">
                          <div class="form-group mx-0 py-3">
                            <label for="exampleForm ControlInput1" class="fw-bold my-3"
                              >State</label
                            >
                            <select
                              class="form-select form-control-4"
                              aria-label="Default select example"
                            >
                              <option class="px-4" selected>Select a State</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                          <div class="form-group mx-0 py-3">
                            <label for="exampleForm ControlInput1" class="fw-bold my-3"
                              >City</label
                            >
                            <select
                              class="form-select form-control-4"
                              aria-label="Default select example"
                            >
                              <option class="px-4" selected>Select a City</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="form-group mx-0 mx-lg-3 py-3">
                        <label for="exampleForm ControlInput1" class="fw-bold my-3"
                          >Delivery Address</label
                        >
                        <input
                          type="email"
                          class="form-control-2 iz_custom_placeholder form-control px-4"
                          id="exampleForm ControlInput1 "
                          placeholder="Enter a title e.g Logo Project"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- card 2 -->
        <div class="card mt-4 mt-lg-5 mt-md-5">
          <div class="card-body">
            <div class="container">
              <div class="container pb-4">
                <div class="justify-content-center">
                  <div class="form-group mx-0 mx-lg-3 py-3">
                    <label for="exampleForm ControlInput1" class="fw-bold my-2"
                      >Delivery Date(s) Option</label
                    >
                    <p
                      style="color: #bcbcbc"
                      for="exampleForm ControlInput1"
                      class="mt-0 fs-7"
                    >
                      Select a one off job or define custom hours specific to some days.
                    </p>
                  </div>
                  <div class="div">
                    <div class="warpper">
                      <input
                        class="radio"
                        checked="checked"
                        id="one"
                        name="group"
                        type="radio"
                      />
                      <input class="radio" id="two" name="group" type="radio" />
                      <input class="radio" id="three" name="group" type="radio" />

                      <div class="container text-center">
                        <div
                          class="d-flex justify-content-center justify-content-lg-between jus flex-wrap"
                        >
                          <div>
                            <label
                              class="tab_gig_pak mt-2 mt-lg-0 mt-md-0 fs-6"
                              id="one-tab"
                              for="one"
                              @click="basic"
                              >Single Day Delivery
                            </label>
                          </div>

                          <div>
                            <label
                              class="tab_gig_pak mx-1 mt-2 mt-lg-0 mt-md-0 mx-lg-2 mx-md-2 fs-6"
                              id="two-tab"
                              for="two"
                              @click="Standard"
                              >Weekly Jobs</label
                            >
                          </div>

                          <div>
                            <label
                              class="tab_gig_pak mx-0 mt-2 mt-lg-0 mt-md-0 mx-lg-2 mx-md-2 fs-6"
                              id="three-tab"
                              for="three"
                              @click="Premium"
                              >Set custom days</label
                            >
                          </div>
                        </div>
                      </div>

                      <div class="panels">
                        <div class="panel" id="one-panel">
                          <div class="form-group mx-0 mx-lg-3 py-2">
                            <label for="exampleForm ControlInput1" class="fw-bold my-2"
                              >Desired Delivery Date</label
                            >
                            <p
                              for="exampleForm ControlInput1"
                              class="mt-0 fs-7 text-muted"
                            >
                              Select a desired delivery date for your project
                            </p>
                          </div>
                          <div class="form-group mx-0 mx-lg-3">
                            <button
                              style="color: #bcbcbc"
                              v-b-modal.modal-sm.modal-center-2
                              class="calendar_button fs-6"
                            >
                              Set a start date
                              <i class="far fa-calendar-alt mx-3 text-dark"></i>
                            </button>
                          </div>
                          <b-modal
                            class="w-100 text-center"
                            id="modal-center-2"
                            centered
                            size="sm"
                          >
                            <b-row>
                              <p class="d-flex justify-content-start align-items-center">
                                Select the date(s) you want to assign specific hours
                              </p>

                              <b-col md="auto">
                                <b-calendar
                                  v-model="value"
                                  @context="onContext"
                                  locale="en-US"
                                  class="text-white mx-0 px-0"
                                ></b-calendar>
                              </b-col>
                              <div class="d-flex justify-content-between">
                                <div class="form-group d-block mx-0">
                                  <div>
                                    <label for="exampleForm ControlInput1" class="pt-2"
                                      >Start Time</label
                                    >
                                  </div>
                                  <div>
                                    <button class="mt-2 calendar_button fs-6 px-2">
                                      9 : 00
                                      <i class="far fa-clock ms-5 text-dark"></i>
                                    </button>
                                  </div>
                                </div>
                                <div class="form-group d-block mx-0">
                                  <div>
                                    <label for="exampleForm ControlInput1" class="pt-2"
                                      >Start Time</label
                                    >
                                  </div>
                                  <div>
                                    <button class="mt-2 calendar_button fs-6 px-2">
                                      9 : 00
                                      <i class="far fa-clock ms-5 text-dark"></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </b-row>

                            <!-- <b-row>
                              <b-col md="auto">
                                <b-time
                                  v-model="value"
                                  locale="en"
                                  @context="onContext"
                                ></b-time>
                              </b-col>
                            </b-row> -->
                          </b-modal>
                          <div class="flex-wrap mx-0 mx-lg-3 mt-5 d-flex">
                            <div>
                              <label class="switch_1 fs-6 me-2 mb-2 mb-lg-0"
                                ><input type="checkbox" checked @click="timeShow1" />
                                <span class="slider_1 round_1"></span
                              ></label>
                              <label for="exampleForm ControlInput1" class=""
                                >Delivery by Specific time</label
                              >
                            </div>
                            <div class="mx-lg-4 mx-md-4 mx-0">
                              <label class="switch_1 fs-6 me-2 mb-2 mb-lg-0"
                                ><input type="checkbox" @click="timeShow2" />
                                <span class="slider_1 round_1"></span
                              ></label>
                              <label for="exampleForm ControlInput1" class=""
                                >Delivery by time range</label
                              >
                            </div>
                            <p class="mt-0 fs-7 pt-3 text-muted">
                              Delivery by Specific time
                            </p>
                          </div>
                          <div id="time1" class="form-group mx-0 mx-lg-3">
                            <button
                              v-b-modal.modal-sm.modal-center-2
                              class="calendar_button fs-6 px-4"
                            >
                              9 : 00
                              <i class="far fa-clock ms-5 text-dark"></i>
                            </button>
                            <label
                              for="exampleForm ControlInput1"
                              class="mx-lg-4 mx-2 pt-2"
                              >30th Aug, 2021 , 9:00AM</label
                            >
                          </div>
                          <div
                            id="time2"
                            class="form-group mt-2 mx-0 m-x-lg-3 justify-content-around for_hide"
                          >
                            <button
                              v-b-modal.modal-sm.modal-center-2
                              class="calendar_button mx-lg-3 mx-1 fs-6 px-4"
                            >
                              10 : 00
                              <i class="far fa-clock ms-5 text-dark"></i>
                            </button>
                            <button
                              v-b-modal.modal-sm.modal-center-2
                              class="calendar_button mx-1 fs-6 px-4"
                            >
                              10 : 00
                              <i class="far fa-clock ms-5 mx-1 text-dark"></i>
                            </button>
                            <label
                              for="exampleForm ControlInput1"
                              class="mx-lg-2 fs-7 pt-2"
                              >30th Aug, 2021,9:00AM-22:00PM</label
                            >
                          </div>
                        </div>
                        <div class="panel" id="two-panel">
                          <div class="d-flex my-4">
                            <div>
                              <div class="form-group mx-0 mx-lg-3 pt-2">
                                <label for="exampleForm ControlInput1" class="my-1"
                                  >Start Date</label
                                >
                                <p for="exampleForm ControlInput1" class="mt-0 fs-7 gray">
                                  Select your desired week’s start date
                                </p>
                              </div>
                              <div
                                v-b-modal.modal-sm.modal-center-2
                                class="form-group mx-0 mx-lg-3"
                              >
                                <button class="calendar_button px-4 fs-6 text-secondary">
                                  18 Aug, 2021
                                  <i class="far fa-calendar-alt mx-3 text-dark"></i>
                                </button>
                              </div>
                            </div>
                            <div>
                              <div class="form-group mx-0 mx-lg-3 pt-2">
                                <label for="exampleForm ControlInput1" class="my-1"
                                  >End Date</label
                                >
                                <p for="exampleForm ControlInput1" class="mt-0 fs-7 gray">
                                  Select your desired week’s end date
                                </p>
                              </div>
                              <div
                                v-b-modal.modal-sm.modal-center-2
                                class="form-group mx-0 mx-lg-3"
                              >
                                <button class="calendar_button px-4 fs-6 text-secondary">
                                  30 Aug, 2021
                                  <i class="far fa-calendar-alt mx-3 text-dark"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="panel" id="three-panel">
                          <div>
                            <div class="form-group mx-0 mx-lg-3 pt-4">
                              <label for="exampleForm ControlInput1" class="my-1 fw-bold"
                                >Custom Dates</label
                              >
                              <p for="exampleForm ControlInput1" class="mt-0 fs-7 gray">
                                Select desired custom dates
                              </p>
                            </div>
                            <div class="form-group mx-0 mx-lg-3">
                              <button
                                v-b-modal.modal-sm.modal-center-2
                                class="calendar_button ps-4 pe-3 fs-6 text-secondary"
                              >
                                18 Aug, 2021

                                <i
                                  class="far fa-calendar-alt text-end ps-5 pe-0 text-dark"
                                ></i>
                              </button>

                              <hr style="color: lightgrey; margin-top: 60px" />

                              <div class="justify-content-center">
                                <div class="form-group mx-0 py-3">
                                  <label
                                    for="exampleForm ControlInput1"
                                    class="fw-bold my-2"
                                    >Custom Dates & Times</label
                                  >
                                  <p
                                    for="exampleForm ControlInput1"
                                    class="mt-0 fs-7 gray"
                                  >
                                    Set your weekly hours
                                  </p>
                                  <div class="d-block justify-content-center">
                                    <div
                                      class="d-flex justify-content-lg-start mt-2 justify-content-center align-items-center flex-wrap"
                                    >
                                      <div class="px-3 px-lg-0">
                                        <label><span>18th Aug, 2021</span></label>
                                      </div>
                                      <div class="d-lg-flex d-block">
                                        <div
                                          class="form-group mx-0 mx-lg-3 d-flex flex-wrap"
                                        >
                                          <button
                                            v-b-modal.modal-sm.modal-center-2
                                            class="calendar_button fs-6 px-4"
                                          >
                                            9 : 00
                                            <i class="far fa-clock ms-5 text-dark"></i>
                                          </button>
                                        </div>
                                        <div
                                          class="form-group mx-0 mx-lg-3 mt-lg-0 mt-md-0 mt-3 d-flex flex-wrap"
                                        >
                                          <button
                                            v-b-modal.modal-sm.modal-center-2
                                            class="calendar_button fs-6 px-4"
                                          >
                                            22:00
                                            <i class="far fa-clock ms-5 text-dark"></i>
                                          </button>
                                        </div>
                                      </div>
                                      <div class="px-3 px-lg-0">
                                        <label
                                          ><i class="far fa-trash-alt gray"></i
                                        ></label>
                                      </div>
                                    </div>
                                    <div
                                      class="d-flex mt-lg-2 mt-4 justify-content-lg-start justify-content-center align-items-center flex-wrap"
                                    >
                                      <div class="px-3 px-lg-0">
                                        <label><span>18th Aug, 2021</span></label>
                                      </div>
                                      <div class="d-lg-flex d-block">
                                        <div
                                          class="form-group mx-0 mx-lg-3 d-flex flex-wrap"
                                        >
                                          <button
                                            v-b-modal.modal-sm.modal-center-2
                                            class="calendar_button fs-6 px-4"
                                          >
                                            9 : 00
                                            <i class="far fa-clock ms-5 text-dark"></i>
                                          </button>
                                        </div>
                                        <div
                                          class="form-group mx-0 mx-lg-3 mt-lg-0 mt-md-0 mt-3 d-flex flex-wrap"
                                        >
                                          <button
                                            v-b-modal.modal-sm.modal-center-2
                                            class="calendar_button fs-6 px-4"
                                          >
                                            22:00
                                            <i class="far fa-clock ms-5 text-dark"></i>
                                          </button>
                                        </div>
                                      </div>
                                      <div class="px-3 px-lg-0">
                                        <label
                                          ><i class="far fa-trash-alt gray"></i
                                        ></label>
                                      </div>
                                    </div>
                                    <div
                                      class="d-flex mt-lg-2 mt-4 justify-content-lg-start justify-content-center align-items-center flex-wrap"
                                    >
                                      <div class="px-3 px-lg-0">
                                        <label><span>18th Aug, 2021</span></label>
                                      </div>
                                      <div class="d-lg-flex d-block">
                                        <div
                                          class="form-group mx-0 mx-lg-3 d-flex flex-wrap"
                                        >
                                          <button
                                            v-b-modal.modal-sm.modal-center-2
                                            class="calendar_button fs-6 px-4"
                                          >
                                            9 : 00
                                            <i class="far fa-clock ms-5 text-dark"></i>
                                          </button>
                                        </div>
                                        <div
                                          class="form-group mx-0 mx-lg-3 mt-lg-0 mt-md-0 mt-3 d-flex flex-wrap"
                                        >
                                          <button
                                            v-b-modal.modal-sm.modal-center-2
                                            class="calendar_button fs-6 px-4"
                                          >
                                            22:00
                                            <i class="far fa-clock ms-5 text-dark"></i>
                                          </button>
                                        </div>
                                      </div>
                                      <div class="px-3 px-lg-0">
                                        <label
                                          ><i class="far fa-trash-alt gray"></i
                                        ></label>
                                      </div>
                                    </div>
                                    <div
                                      class="d-flex mt-lg-2 mt-4 justify-content-lg-start justify-content-center align-items-center flex-wrap"
                                    >
                                      <div class="px-3 px-lg-0">
                                        <label><span>18th Aug, 2021</span></label>
                                      </div>
                                      <div class="d-lg-flex d-block">
                                        <div
                                          class="form-group mx-0 mx-lg-3 d-flex flex-wrap"
                                        >
                                          <button
                                            v-b-modal.modal-sm.modal-center-2
                                            class="calendar_button fs-6 px-4"
                                          >
                                            9 : 00
                                            <i class="far fa-clock ms-5 text-dark"></i>
                                          </button>
                                        </div>
                                        <div
                                          class="form-group mx-0 mx-lg-3 mt-lg-0 mt-md-0 mt-3 d-flex flex-wrap"
                                        >
                                          <button
                                            v-b-modal.modal-sm.modal-center-2
                                            class="calendar_button fs-6 px-4"
                                          >
                                            22:00
                                            <i class="far fa-clock ms-5 text-dark"></i>
                                          </button>
                                        </div>
                                      </div>
                                      <div class="px-3 px-lg-0">
                                        <label
                                          ><i class="far fa-trash-alt gray"></i
                                        ></label>
                                      </div>
                                    </div>
                                    <div
                                      class="d-flex mt-lg-2 mt-4 justify-content-lg-start justify-content-center align-items-center flex-wrap"
                                    >
                                      <div class="px-3 px-lg-0">
                                        <label><span>18th Aug, 2021</span></label>
                                      </div>
                                      <div class="d-lg-flex d-block">
                                        <div
                                          class="form-group mx-0 mx-lg-3 d-flex flex-wrap"
                                        >
                                          <button
                                            v-b-modal.modal-sm.modal-center-2
                                            class="calendar_button fs-6 px-4"
                                          >
                                            9 : 00
                                            <i class="far fa-clock ms-5 text-dark"></i>
                                          </button>
                                        </div>
                                        <div
                                          class="form-group mx-0 mx-lg-3 mt-lg-0 mt-md-0 mt-3 d-flex flex-wrap"
                                        >
                                          <button
                                            v-b-modal.modal-sm.modal-center-2
                                            class="calendar_button fs-6 px-4"
                                          >
                                            22:00
                                            <i class="far fa-clock ms-5 text-dark"></i>
                                          </button>
                                        </div>
                                      </div>
                                      <div class="px-3 px-lg-0">
                                        <label
                                          ><i class="far fa-trash-alt gray"></i
                                        ></label>
                                      </div>
                                    </div>
                                    <div
                                      class="d-flex mt-lg-2 mt-4 justify-content-lg-start justify-content-center align-items-center flex-wrap"
                                    >
                                      <div class="px-3 px-lg-0">
                                        <label><span>18th Aug, 2021</span></label>
                                      </div>
                                      <div class="d-lg-flex d-block">
                                        <div
                                          class="form-group mx-0 mx-lg-3 d-flex flex-wrap"
                                        >
                                          <button
                                            v-b-modal.modal-sm.modal-center-2
                                            class="calendar_button fs-6 px-4"
                                          >
                                            9 : 00
                                            <i class="far fa-clock ms-5 text-dark"></i>
                                          </button>
                                        </div>
                                        <div
                                          class="form-group mx-0 mx-lg-3 mt-lg-0 mt-md-0 mt-3 d-flex flex-wrap"
                                        >
                                          <button
                                            v-b-modal.modal-sm.modal-center-2
                                            class="calendar_button fs-6 px-4"
                                          >
                                            22:00
                                            <i class="far fa-clock ms-5 text-dark"></i>
                                          </button>
                                        </div>
                                      </div>
                                      <div class="px-3 px-lg-0">
                                        <label
                                          ><i class="far fa-trash-alt gray"></i
                                        ></label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                class="d-flex justify-content-center justify-content-lg-end justify-content-md-end align-items-center"
                              >
                                <button
                                  v-b-modal.modal-sm.modal-center-2
                                  class="create_gig fw-light px-4 mx-2 mt-3"
                                >
                                  Add new date
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="dateSec" class="for_hide card">
          <div class="card-body">
            <div class="container">
              <div class="container pb-4">
                <div class="justify-content-center">
                  <div class="form-group mx-0 mx-lg-3 py-3">
                    <label for="exampleForm ControlInput1" class="fw-bold my-2"
                      >Weeks | 18 Aug, 2021 - 30 Aug, 2021</label
                    >
                    <p for="exampleForm ControlInput1" class="mt-0 fs-7 gray">
                      Set your weekly hours for your selected date range
                    </p>

                    <div
                      class="d-flex justify-content-lg-start justify-content-center align-items-center flex-wrap"
                    >
                      <div class="checkbox">
                        <input type="checkbox" id="checkbox2" name="" value="" />
                        <label for="checkbox2"><span>MON</span></label>
                      </div>
                      <div class="d-lg-flex d-block">
                        <div class="form-group mx-0 mx-lg-3 d-flex flex-wrap">
                          <button
                            v-b-modal.modal-sm.modal-center-2
                            class="calendar_button fs-6 px-5 px-lg-4"
                          >
                            9 : 00
                            <i class="far fa-clock ms-5 text-dark"></i>
                          </button>
                        </div>
                        <div
                          class="form-group mx-0 mx-lg-3 mt-lg-0 mt-md-0 mt-3 d-flex flex-wrap"
                        >
                          <button
                            v-b-modal.modal-sm.modal-center-2
                            class="calendar_button fs-6 px-5 px-lg-4"
                          >
                            22:00
                            <i class="far fa-clock ms-5 text-dark"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      class="d-flex justify-content-lg-start mt-2 justify-content-center align-items-center flex-wrap"
                    >
                      <div class="checkbox">
                        <input type="checkbox" id="checkbox3" name="" value="" />
                        <label for="checkbox3"><span>TUE</span></label>
                      </div>
                      <div class="d-lg-flex d-block">
                        <div class="form-group mx-0 mx-lg-3 d-flex flex-wrap">
                          <button
                            v-b-modal.modal-sm.modal-center-2
                            class="calendar_button fs-6 px-5 px-lg-4"
                          >
                            9 : 00
                            <i class="far fa-clock ms-5 text-dark"></i>
                          </button>
                        </div>
                        <div
                          class="form-group mx-0 mx-lg-3 mt-lg-0 mt-md-0 mt-3 d-flex flex-wrap"
                        >
                          <button
                            v-b-modal.modal-sm.modal-center-2
                            class="calendar_button fs-6 px-5 px-lg-4"
                          >
                            22:00
                            <i class="far fa-clock ms-5 text-dark"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      class="d-flex justify-content-lg-start mt-2 justify-content-center align-items-center flex-wrap"
                    >
                      <div class="checkbox">
                        <input type="checkbox" id="checkbox4" name="" value="" />
                        <label for="checkbox4"><span>WED</span></label>
                      </div>
                      <div class="d-lg-flex d-block">
                        <div class="form-group mx-0 mx-lg-3 d-flex flex-wrap">
                          <button
                            v-b-modal.modal-sm.modal-center-2
                            class="calendar_button fs-6 px-5 px-lg-4"
                          >
                            9 : 00
                            <i class="far fa-clock ms-5 text-dark"></i>
                          </button>
                        </div>
                        <div
                          class="form-group mx-0 mx-lg-3 mt-lg-0 mt-md-0 mt-3 d-flex flex-wrap"
                        >
                          <button
                            v-b-modal.modal-sm.modal-center-2
                            class="calendar_button fs-6 px-5 px-lg-4"
                          >
                            22:00
                            <i class="far fa-clock ms-5 text-dark"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      class="d-flex justify-content-lg-start mt-2 justify-content-center align-items-center flex-wrap"
                    >
                      <div class="checkbox">
                        <input type="checkbox" id="checkbox5" name="" value="" />
                        <label for="checkbox5"><span>THU</span></label>
                      </div>

                      <div class="d-lg-flex d-block">
                        <div class="form-group mx-0 mx-lg-3 d-flex flex-wrap">
                          <button
                            v-b-modal.modal-sm.modal-center-2
                            class="calendar_button fs-6 px-5 px-lg-4"
                          >
                            9 : 00
                            <i class="far fa-clock ms-5 text-dark"></i>
                          </button>
                        </div>
                        <div
                          class="form-group mx-0 mx-lg-3 mt-lg-0 mt-md-0 mt-3 d-flex flex-wrap"
                        >
                          <button
                            v-b-modal.modal-sm.modal-center-2
                            class="calendar_button fs-6 px-5 px-lg-4"
                          >
                            22:00
                            <i class="far fa-clock ms-5 text-dark"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      class="d-flex justify-content-lg-start mt-2 justify-content-center align-items-center flex-wrap"
                    >
                      <div class="checkbox">
                        <input type="checkbox" id="checkbox6" name="" value="" />
                        <label for="checkbox6"><span>FRI</span></label>
                      </div>
                      <div class="d-lg-flex d-block">
                        <div class="form-group mx-0 mx-lg-3 d-flex flex-wrap">
                          <button
                            v-b-modal.modal-sm.modal-center-2
                            class="calendar_button fs-6 px-5 px-lg-4"
                          >
                            9 : 00
                            <i class="far fa-clock ms-5 text-dark"></i>
                          </button>
                        </div>
                        <div
                          class="form-group mx-0 mx-lg-3 mt-lg-0 mt-md-0 mt-3 d-flex flex-wrap"
                        >
                          <button
                            v-b-modal.modal-sm.modal-center-2
                            class="calendar_button fs-6 px-5 px-lg-4"
                          >
                            22:00
                            <i class="far fa-clock ms-5 text-dark"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      class="d-flex justify-content-lg-start mt-2 justify-content-center align-items-center flex-wrap"
                    >
                      <div class="checkbox">
                        <input type="checkbox" id="checkbox7" name="" value="" />
                        <label for="checkbox7"><span>SAT</span></label>
                      </div>
                      <div class="d-lg-flex d-block">
                        <div class="form-group mx-0 mx-lg-3 d-flex flex-wrap">
                          <button
                            v-b-modal.modal-sm.modal-center-2
                            class="calendar_button fs-6 px-5 px-lg-4"
                          >
                            9 : 00
                            <i class="far fa-clock ms-5 text-dark"></i>
                          </button>
                        </div>
                        <div
                          class="form-group mx-0 mx-lg-3 mt-lg-0 mt-md-0 mt-3 d-flex flex-wrap"
                        >
                          <button
                            v-b-modal.modal-sm.modal-center-2
                            class="calendar_button fs-6 px-5 px-lg-4"
                          >
                            22:00
                            <i class="far fa-clock ms-5 text-dark"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      class="d-flex justify-content-lg-start mt-2 justify-content-center align-items-center flex-wrap"
                    >
                      <div class="checkbox">
                        <input type="checkbox" id="checkbox8" />
                        <label for="checkbox8"><span>SUN</span></label>
                      </div>
                      <div class="d-lg-flex d-block">
                        <div class="form-group mx-0 mx-lg-3 d-flex flex-wrap">
                          <button
                            v-b-modal.modal-sm.modal-center-2
                            class="calendar_button fs-6 px-5 px-lg-4"
                          >
                            9 : 00
                            <i class="far fa-clock ms-5 text-dark"></i>
                          </button>
                        </div>
                        <div
                          class="form-group mx-0 mx-lg-3 mt-lg-0 mt-md-0 mt-3 d-flex flex-wrap"
                        >
                          <button
                            v-b-modal.modal-sm.modal-center-2
                            class="calendar_button fs-6 px-5 px-lg-4"
                          >
                            22:00
                            <i class="far fa-clock ms-5 text-dark"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr style="color: lightgrey; margin-top: 60px" />
        <div class="conatiner d-flex justify-content-between mt-5">
          <NuxtLink to="/post_job">
            <button class="btn btn-back">Back</button>
          </NuxtLink>

          <NuxtLink to="/job_package">
            <button class="btn btn-next">Next</button>
          </NuxtLink>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
<script>
export default {
  methods: {
    async timeShow1() {
      if (document.getElementById("time1").style.display == "block") {
        document.getElementById("time1").style.display = "none";
      } else {
        document.getElementById("time1").style.display = "block";
      }
    },
    async timeShow2() {
      if (document.getElementById("time2").style.display == "none") {
        document.getElementById("time2").style.display = "block";
      } else {
        document.getElementById("time2").style.display = "none";
      }
    },

    async basic() {
      if ((document.getElementById("dateSec").style.display = "none")) {
        document.getElementById("one-tab").style.background = "white";
        document.getElementById("one-tab").style.border = "1px solid #52be71";
        document.getElementById("two-tab").style.background = "#fff";
        document.getElementById("two-tab").style.border = "1px solid #ccc";
        document.getElementById("three-tab").style.background = "#fff";
        document.getElementById("three-tab").style.border = "1px solid #ccc";
        document.getElementById("dateSec").style.display = "none";
        document.getElementById("top_btn").style.display = "none";
      } else if ((document.getElementById("dateSec").style.display = "none")) {
        document.getElementById("one-tab").style.background = "#fff";
        document.getElementById("one-tab").style.border = "1px solid #ccc";
        document.getElementById("dateSec").style.display = "none";
        document.getElementById("top_btn").style.display = "none";
      }
    },
    async Standard() {
      if ((document.getElementById("dateSec").style.display = "none")) {
        document.getElementById("two-tab").style.background = "white";
        document.getElementById("two-tab").style.border = "1px solid #52be71";
        document.getElementById("three-tab").style.background = "#fff";
        document.getElementById("three-tab").style.border = "1px solid #ccc";
        document.getElementById("one-tab").style.background = "#fff";
        document.getElementById("one-tab").style.border = "1px solid #ccc";
        document.getElementById("dateSec").style.display = "block";
        document.getElementById("top_btn").style.display = "none";
      } else if ((document.getElementById("dateSec").style.display = "block")) {
        document.getElementById("one-tab").style.background = "#fff";
        document.getElementById("one-tab").style.border = "1px solid #ccc";
        document.getElementById("dateSec").style.display = "none";
        document.getElementById("top_btn").style.display = "none";
      }
    },
    async Premium() {
      document.getElementById("three-tab").style.background = "white";
      document.getElementById("three-tab").style.border = "1px solid #52be71";
      document.getElementById("two-tab").style.background = "#fff";
      document.getElementById("two-tab").style.border = "1px solid #ccc ";
      document.getElementById("one-tab").style.background = "#fff";
      document.getElementById("one-tab").style.border = "1px solid #ccc";
      document.getElementById("dateSec").style.display = "1px solid #ccc";
      document.getElementById("top_btn").style.display = "block";
    },
    async drop() {
      var select = document.getElementById("joblocation");
      var value = select.options[select.selectedIndex].value;
      // console.log(value);
      if (value == "online") {
        var a = document.getElementById("hide_items");
        // console.log(a);
        // alert("online");
        document.getElementById("hide_items").style.display = "none";
      } else {
        document.getElementById("hide_items").style.display = "block";
      }
    },
  },
};
</script>
