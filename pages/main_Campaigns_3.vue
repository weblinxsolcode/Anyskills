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
              <label id="my-radio"  class="d-flex my-3 align-items-center mx-2">
                <div class="round me-2">
                  <input type="checkbox" checked id="checkbox" />
                  <label for="checkbox"></label>
                </div>
                <p class="mb-0 mx-1 fw-bold  green ">AD Info</p>
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
        <div class="col-12 col-lg-7">
          <div>
            <h4 class="fw-bolder mt-3">Create New Campaign</h4>
            <div class="d-flex mt-4 justify-content-between">
              <h4 class="fw-bolder ">AD Content</h4>
              <button class="campaigns_btn px-4 py-1 fs-6 fw-bolder">
                Save as draft
              </button>
            </div>
            <p class="com_color fs-7 mt-0">
              What is your objective for creating the campaign
            </p>
          </div>
          <div class="boder_bg_shadow boder_bg_shadow-2 mt-3 px-lg-5 py-lg-4 p-1">
            <div class="tabs effect-3 mt-lg-0 mt-3 fs-7">
              <!-- tab-title -->
              <input
                type="radio"
                id="tab-1"
                name="tab-effect-3"
                checked="checked"
              />
              <span class="fw-bolder">Post</span>

              <input type="radio" id="tab-2" name="tab-effect-3" />
              <span class="fw-bolder">Gig</span>

              <input type="radio" id="tab-3" name="tab-effect-3" />
              <span class="fw-bolder">Job</span>

              <input type="radio" id="tab-4" name="tab-effect-3" />
              <span class="fw-bolder">Dynamic</span>
              <div class="line ease"></div>
              <div class="z-line z-line-important"></div>

              <!-- tab-content-c3 -->
              <div class="tab-content-c3">
                <!-- tab no 1 -->
                <section id="tab-item-1">
                  <div class="form-group py-3">
                    <label for="exampleForm ControlInput1" class="fw-bold my-3"
                      >Campaign Type</label
                    >
                    <select
                      class="form-select form-select-3-iz text_light_opacity_iz"
                      aria-label="Default select example"
                    >
                      <option class="px-4 text_light_opacity_iz" selected>Start typing to search for an existing post
</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="mt-4 boder_bg_shadow  p-3">
                    <div
                      class="
                        px-2
                        d-flex
                        justify-content-between
                        align-items-center
                      "
                    >
                      <div class="d-flex align-items-center">
                        <img
                          src="~assets/images/soc_02.png"
                          class="img-fluid mt-1 mx-1 rounded"
                          style="height: 50px; width: 50px"
                          alt=""
                        />
                        <div class="mx-2">
                          <p class="mb-0 fw-bold">Victor Okoye</p>
                          <p class="mb-0 gray fs-7">15mins ago</p>
                        </div>
                      </div>
                      <i class="gray fas fa-ellipsis-h"></i>
                    </div>
                    <div class="align-items-center">
                      <p class="px-2 mt-2 mb-0 text_light_opacity_iz fw-lighter my-auto fs-6">
                        I love my new Collections &#128525; &#128525;
                      </p>
                      <p class="px-2 mb-0 blue my-auto fs-6">
                        #photos #wallpaper #new #models
                      </p>
                    </div>
                    <div class="row">
                      <div class="col-6">
                        <img
                          src="~assets/images/soc_p_01.png"
                          class="img-fluid mt-2"
                          alt=""
                        />
                      </div>
                      <div class="col-6">
                        <img
                          src="~assets/images/soc_p_02.png"
                          class="mt-2 img-fluid"
                          alt=""
                        />
                        <img
                          src="~assets/images/soc_p_03.png"
                          class="mt-2 mx-2 img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="comment_box d-flex mt-2 ms-2 p-3">
                      <div
                        class="
                          px-lg-2
                          mx-0
                          com_right_boder
                          d-flex
                          align-items-center
                        "
                      >
                        <i class="mx-lg-2 mx-0 com_color far fa-heart"></i>
                        <p class="mb-0 com_color">3.5k</p>
                      </div>
                      <div
                        class="
                          px-lg-2
                          com_right_boder
                          d-flex
                          align-items-center
                          flex-wrap
                        "
                      >
                        <svg
                          width="24"
                          class="mx-2"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.226229 22.2736L0.226201 22.2736C0.137256 22.4759 0.189384 22.7061 0.358855 22.8594C0.472052 22.9618 0.623974 23.0164 0.777742 23.0164C0.852437 23.0164 0.925882 23.0035 0.997952 22.9778L0.998101 22.9778L4.41616 21.7391C5.86112 22.5754 7.53614 23.0164 9.2798 23.0164C14.2929 23.0164 18.3766 19.3254 18.3766 14.7833C18.3766 10.2412 14.2929 6.55022 9.2798 6.55022C4.26674 6.55022 0.183031 10.2412 0.183031 14.7833C0.183031 16.3614 0.670255 17.8771 1.59375 19.1845L0.226229 22.2736ZM4.26428 20.6299L1.84775 21.5061L2.81428 19.3238L2.81431 19.3238C2.88876 19.1543 2.86461 18.962 2.75083 18.8135C1.84874 17.6337 1.37245 16.2396 1.37245 14.7833C1.37245 10.8423 4.9168 7.63168 9.2798 7.63168C13.6428 7.63168 17.1872 10.8423 17.1872 14.7833C17.1872 18.7243 13.6428 21.9349 9.2798 21.9349C7.66829 21.9349 6.12613 21.5034 4.82149 20.6869C4.7215 20.6234 4.6029 20.5913 4.48464 20.5913C4.41002 20.5913 4.33539 20.6042 4.26429 20.6299L4.26428 20.6299Z"
                            fill="#5D668A"
                            stroke="#5D668A"
                            stroke-width="0.055814"
                          />
                          <rect
                            x="10"
                            y="0.8125"
                            width="14"
                            height="14"
                            rx="7"
                            fill="#015CEE"
                          />
                          <path
                            d="M14.9597 6.0045C14.9597 5.1885 15.3077 4.3125 16.9277 4.3125C18.0557 4.3125 18.5117 4.9725 18.5117 5.6445C18.5117 6.6045 17.8637 7.0005 17.0117 7.0005H16.1717V7.9605H17.0597C17.8637 7.9605 18.8117 8.1885 18.8117 9.4845C18.8117 10.4805 18.2957 11.0205 16.8677 11.0205C15.2957 11.0205 14.7437 10.2045 14.7437 9.0045H13.6637C13.6637 10.8765 14.8397 11.9805 16.9517 11.9805C18.7277 11.9805 19.8917 11.1165 19.8917 9.4845C19.8917 8.5125 19.4957 7.7565 18.3197 7.4325V7.4085C19.1597 7.0725 19.5917 6.5205 19.5917 5.6445C19.5917 4.1805 18.3437 3.3525 16.9277 3.3525C14.8757 3.3525 13.8797 4.4805 13.8797 6.0045H14.9597Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                    
                  </div>
                  <div class="d-flex justify-content-between pt-5 mb-4">
                      <NuxtLink to="/main_campaigns_2">
                        <button class="btn btn-back">Back</button>
                      </NuxtLink>

                      <NuxtLink to="/main_campaigns_4">
                        <button class="btn btn-next" style="background-color:#34A853">Audience</button>
                      </NuxtLink>
                    </div>
                </section>
                <section id="tab-item-2">
                  <div class="form-group py-3">
                    <select
                      class="form-select form-select-3-iz text_light_opacity_iz"
                      aria-label="Default select example"
                    >
                      <option class="px-4 gray" selected>
                        Start typing to search for an existing post
                      </option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <p class="gray fs-6 mt-lg-5 mt-2 mx-2 px-0">
                      Most Recent Jobs
                    </p>

                    <div
                      class="
                        d-flex
                        justify-content-lg-between justify-content-center
                        flex-wrap
                      "
                    >
                      <div class="card_1">
                        <div class="card gigs width_1400" >
                          <img
                            src="~assets/images/job1.png"
                            class="card-img-top"
                            alt="..."
                          />

                          <div class="card-body p-0">
                            <div
                              class="px-2 mt-2 d-flex justify-content-between"
                            >
                              <p class="fs-6 px-0">John Creta</p>
                              <p class="fs-6 px-0">
                                <i
                                  class="fas fa-share-alt"
                                  style="color: #2e3a59"
                                ></i>
                              </p>
                            </div>
                            <div
                              style="color: #2e3a59"
                              class="d-flex justify-content-start"
                            >
                              <div>
                                <p>
                                  <i class="fas mt-1 fa-heart fs-6 ps-2"></i>
                                </p>
                              </div>
                              <div>
                                <p class="fw-bold mb-0 fs-6">43</p>
                              </div>
                              <div>
                                <p class="mb-0">
                                  <i class="far mt-1 fa-eye ms-2 fs-6"></i>
                                </p>
                              </div>
                              <div>
                                <p class="fw-bold ms-1 mb-0 fs-6">300</p>
                              </div>
                              <div>
                                <p class="mb-0">
                                  <i
                                    class="fas fa-info-circle mt-1 ms-2 fs-6"
                                  ></i>
                                </p>
                              </div>
                            </div>
                            <hr style="color: lightgrey" class="my-0" />

                            <div
                              class="
                                d-flex
                                justify-content-end
                                my-2
                                align-items-center
                              "
                            >
                              <p class="mb-0 text-danger text-start fs-6">
                                Budget:
                              </p>
                              <p class="fw-bold mb-0 text-start">$23</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card_1">
                        <div class="card gigs width_1400" >
                          <img
                            src="~assets/images/job1.png"
                            class="card-img-top"
                            alt="..."
                          />

                          <div class="card-body p-0">
                            <div
                              class="px-2 mt-2 d-flex justify-content-between"
                            >
                              <p class="fs-6 px-0">John Creta</p>
                              <p class="fs-6 px-0">
                                <i
                                  class="fas fa-share-alt"
                                  style="color: #2e3a59"
                                ></i>
                              </p>
                            </div>
                            <div
                              style="color: #2e3a59"
                              class="d-flex justify-content-start"
                            >
                              <div>
                                <p>
                                  <i class="fas mt-1 fa-heart fs-6 ps-2"></i>
                                </p>
                              </div>
                              <div>
                                <p class="fw-bold mb-0 fs-6">43</p>
                              </div>
                              <div>
                                <p class="mb-0">
                                  <i class="far mt-1 fa-eye ms-2 fs-6"></i>
                                </p>
                              </div>
                              <div>
                                <p class="fw-bold ms-1 mb-0 fs-6">300</p>
                              </div>
                              <div>
                                <p class="mb-0">
                                  <i
                                    class="fas fa-info-circle mt-1 ms-2 fs-6"
                                  ></i>
                                </p>
                              </div>
                            </div>
                            <hr style="color: lightgrey" class="my-0" />

                            <div
                              class="
                                d-flex
                                justify-content-end
                                my-2
                                align-items-center
                              "
                            >
                              <p class="mb-0 text-danger text-start fs-6">
                                Budget:
                              </p>
                              <p class="fw-bold mb-0 text-start">$23</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-lg-5 mt-0 pt-lg-5 pt-0 pb-5">
                      <div
                        class="
                          conatiner
                          d-flex
                          justify-content-between
                          pt-5
                          mt-5
                        "
                      >
                        <NuxtLink to="/main_campaigns_2">
                          <button class="btn btn-back">Back</button>
                        </NuxtLink>
                        <NuxtLink to="/main_campaigns_4">
                          <button class="btn btn-next">Audience</button>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </section>
                <section id="tab-item-3">
                  <div class="form-group py-3">
                    <select
                      class="form-select form-select-3-iz text_light_opacity_iz"
                      aria-label="Default select example"
                    >
                      <option class="px-4 gray" selected>
                        Start typing to search for an existing post
                      </option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <p class="gray fs-6 mt-lg-5 mt-2 mx-2 px-0">
                      Most Recent Jobs
                    </p>

                    <div
                      class="
                        d-flex
                        justify-content-lg-between justify-content-center
                        flex-wrap
                      "
                    >
                      <div class="card_1">
                        <div class="card gigs width_1400" >
                          <img
                            src="~assets/images/job1.png"
                            class="card-img-top"
                            alt="..."
                          />

                          <div class="card-body p-0">
                            <div
                              class="px-2 mt-2 d-flex justify-content-between"
                            >
                              <p class="fs-6 px-0">John Creta</p>
                              <p class="fs-6 px-0">
                                <i
                                  class="fas fa-share-alt"
                                  style="color: #2e3a59"
                                ></i>
                              </p>
                            </div>
                            <div
                              style="color: #2e3a59"
                              class="d-flex justify-content-start"
                            >
                              <div>
                                <p>
                                  <i class="fas mt-1 fa-heart fs-6 ps-2"></i>
                                </p>
                              </div>
                              <div>
                                <p class="fw-bold mb-0 fs-6">43</p>
                              </div>
                              <div>
                                <p class="mb-0">
                                  <i class="far mt-1 fa-eye ms-2 fs-6"></i>
                                </p>
                              </div>
                              <div>
                                <p class="fw-bold ms-1 mb-0 fs-6">300</p>
                              </div>
                              <div>
                                <p class="mb-0">
                                  <i
                                    class="fas fa-info-circle mt-1 ms-2 fs-6"
                                  ></i>
                                </p>
                              </div>
                            </div>
                            <hr style="color: lightgrey" class="my-0" />

                            <div
                              class="
                                d-flex
                                justify-content-end
                                my-2
                                align-items-center
                              "
                            >
                              <p class="mb-0 text-danger text-start fs-6">
                                Budget:
                              </p>
                              <p class="fw-bold mb-0 text-start">$23</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card_1">
                        <div class="card gigs width_1400" >
                          <img
                            src="~assets/images/job1.png"
                            class="card-img-top"
                            alt="..."
                          />

                          <div class="card-body p-0">
                            <div
                              class="px-2 mt-2 d-flex justify-content-between"
                            >
                              <p class="fs-6 px-0">John Creta</p>
                              <p class="fs-6 px-0">
                                <i
                                  class="fas fa-share-alt"
                                  style="color: #2e3a59"
                                ></i>
                              </p>
                            </div>
                            <div
                              style="color: #2e3a59"
                              class="d-flex justify-content-start"
                            >
                              <div>
                                <p>
                                  <i class="fas mt-1 fa-heart fs-6 ps-2"></i>
                                </p>
                              </div>
                              <div>
                                <p class="fw-bold mb-0 fs-6">43</p>
                              </div>
                              <div>
                                <p class="mb-0">
                                  <i class="far mt-1 fa-eye ms-2 fs-6"></i>
                                </p>
                              </div>
                              <div>
                                <p class="fw-bold ms-1 mb-0 fs-6">300</p>
                              </div>
                              <div>
                                <p class="mb-0">
                                  <i
                                    class="fas fa-info-circle mt-1 ms-2 fs-6"
                                  ></i>
                                </p>
                              </div>
                            </div>
                            <hr style="color: lightgrey" class="my-0" />

                            <div
                              class="
                                d-flex
                                justify-content-end
                                my-2
                                align-items-center
                              "
                            >
                              <p class="mb-0 text-danger text-start fs-6">
                                Budget:
                              </p>
                              <p class="fw-bold mb-0 text-start">$23</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-lg-5 mt-0 pt-lg-5 pt-0 pb-5">
                      <div
                        class="
                          conatiner
                          d-flex
                          justify-content-between
                          pt-5
                          mt-5
                        "
                      >
                        <NuxtLink to="/main_campaigns_3">
                          <button class="btn btn-back">Back</button>
                        </NuxtLink>
                        <NuxtLink to="/main_campaigns_4">
                          <button class="btn btn-next">Audience</button>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </section>
                <section id="tab-item-4">
                  <div class="form-group py-3">
                    <select
                      class="form-select form-select-3-iz text_light_opacity_iz"
                      aria-label="Default select example"
                    >
                      <option class="px-4 gray" selected>
                        Start typing to search for an existing post
                      </option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <p class="fw-bolder fs-6 mt-lg-4 mt-2  px-0">Media</p>
                    <p class="text_light_opacity_iz mb-4 ">
                      Upload images and videos as required to generate a dynamic
                      Ad
                    </p>
                    <div class="blue_boder">
                      <div
                        class="d-flex justify-content-center align-items-center"
                      >
                        <div class="my-5">
                          <img
                            src="~/assets/images/soc_gal_img.png"
                            class="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="text-center mb-5">
                        <p class="fs-4">
                          Drag & Drop or
                          <span style="color: #2cbfff"> Browse </span>
                        </p>
                        <p class="gray fs-6">
                          PNG , JPG & MP4 files aresupported. Keep size below
                          5mb
                        </p>
                      </div>
                    </div>

                    <div class="mt-4">
                      <p class="fw-bolder px-1 fs-6">Content</p>
                          <p class="text_light_opacity_iz px-1">
                        Input textual content for your Ad below
                      </p>
                      <div class="form-group mx-0 py-3">
                        <textarea
                          style="color: ##c4cdd5"
                          class="form-control form-control-2-iz iz_custom_placeholder px-4"
                          placeholder="Add texts"
                          id="exampleFormControlTextarea1"
                          rows="5"
                        ></textarea>
                      </div>
                    </div>
                    <div class="mt-lg-4 mt-3">
                      <p class="fw-bolder px-1 fs-6">Links</p>
                      <p class="text_light_opacity_iz px-1">
                        External links to be shown on your Ad
                      </p>
                      <div class="input-group mb-3 mx-0">
                        <span
                          class="input-group-text text-dark bg-gray"
                          id="basic-addon1"
                          >https://</span
                        >
                        <input
                          type="text"
                          class="form-control"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                    <div class="mt-lg-5 px-0 mt-2">
                      <hr style="color: #c4cdd5; height: 2px" class="my-0" />
                    </div>
                    <div class="mt-lg-4 mt-2 pb-5">
                      <div class="conatiner d-flex justify-content-between">
                        <NuxtLink to="/main_campaigns_3">
                          <button class="btn btn-back">Back</button>
                        </NuxtLink>
                        <NuxtLink to="/main_campaigns_4">
                          <button class="btn btn-next">Audience</button>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  </div>
</template>
<script>
