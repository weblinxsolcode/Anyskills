<template>
  <div>
    <Nav />

    <ServicesNav />

    <CreategigNav />

    <div
      class="container px-lg-3 ps-lg-4 d-flex justify-content-center justify-content-lg-between justify-content-md-between flex-wrap"
    >
      <div class="content d-flex flex-wrap">
        <p class="green mx-3 mx-lg-0 mx-md-0 fw-bold">Basic Info</p>
        <div class="d-flex mx-3 mb-2 for_pointer">
          <i class="fas green fa-check-circle cheak_icon me-1 py-1"></i>
          <p class="mb-0 green">Packages & Pricing</p>
        </div>
        <div class="d-flex mx-3 mb-2 for_pointer">
          <i class="fas gray fa-check-circle cheak_icon me-1 py-1"></i>
          <p class="m-0 gray">Uploads</p>
        </div>
        <div class="d-flex mx-3 mb-2 for_pointer">
          <i class="fas gray fa-check-circle cheak_icon me-1 py-1"></i>
          <p class="m-0 gray">Requirements</p>
        </div>
        <div class="d-flex mx-3 mb-2 for_pointer">
          <i class="fas gray fa-check-circle cheak_icon me-1 py-1"></i>
          <p class="m-0 gray">Publish</p>
        </div>
      </div>
      <div class="text-center mt-3 mt-lg-0">
        <NuxtLink to="/create_gig">
          <button type="submit" class="back_button mx-2">
            <i class="fas fa-angle-left mx-lg-1 mx-0"></i>
            Back
          </button></NuxtLink
        >
        <NuxtLink to="/gig_upload">
          <button type="submit" class="next_button mx-2">
            Next
            <i class="fas fa-angle-right"></i></button
        ></NuxtLink>
      </div>
    </div>

    <hr class="mt-0" style="color: lightgrey" />
    <div class="mt-5">
      <p
        class="fw-bolder text-center green mb-0 pt-5"
        style="color: #34a853; font-size: 36px"
      >
        Create a gig
      </p>
      <p class="text-center text-muted">
        Create a gig and let skill users send your a quote
      </p>
    </div>
    <div
      class="container px-0 px-lg-5 pt-4 justify-content-center flex-wrap col-12 col-lg-7"
    >
      <div class="left_card pb-4">
        <div class="card">
          <div class="card-body">
            <div class="justify-content-center">
              <div class="">
                <p class="fs-5 text-center green mb-0 pt-3 pb-1" style="color: #34a853">
                  Select Package
                </p>
                <p class="text-center fs-6 text-muted pb-3">
                  Choose a package to end details and features. You can add to all
                  packages
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

                  <div class="container text-center px-0">
                    <div
                      class="d-flex px-0 px-lg-5 justify-content-center justify-content-lg-between flex-wrap"
                    >
                      <div>
                        <label
                          class="tab_gig_pak mx-0 mt-2 mt-lg-0 mt-md-0 mx-lg-0 mx-md-2"
                          id="one-tab"
                          for="one"
                          @click="basic"
                          >Basic
                        </label>
                      </div>

                      <div>
                        <label
                          class="tab_gig_pak mx-0 mt-2 mt-lg-0 mt-md-0 mx-lg-0 mx-md-2"
                          id="two-tab"
                          for="two"
                          @click="Standard"
                          >Standard</label
                        >
                      </div>

                      <div>
                        <label
                          class="tab_gig_pak mx-0 mt-2 mt-lg-0 mt-md-0 mx-lg-0 mx-md-2"
                          id="three-tab"
                          for="three"
                          @click="Premium"
                          >Premium</label
                        >
                      </div>
                    </div>
                  </div>

                  <div class="panels">
                    <div class="panel" id="one-panel">
                      <div class="justify-content-center">
                        <form>
                          <div class="form-group mx-3 mx-lg-5 mx-md-5 py-3">
                            <label for="exampleFormControlInput1" class="fw-bold my-3"
                              >Description</label
                            >
                            <textarea
                              class="form-control form-control-2 px-4 iz_custom_placeholder"
                              placeholder="Provide a brief ingo about your basic package "
                              id="exampleFormControlTextarea1"
                              rows="5"
                            ></textarea>
                          </div>
                          <div class="form-group mx-3 mx-lg-5 mx-md-5 py-3">
                            <label for="exampleFormControlInput1" class="fw-bold my-3"
                              >Estimated Delivery Days</label
                            >
                            <select
                              class="form-select form-control-4 px-4"
                              aria-label="Default select example"
                            >
                              <option class="" selected>Sellect days</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </select>
                          </div>
                          <div class="form-group mx-3 mx-lg-5 mx-md-5 py-3">
                            <label for="exampleFormControlInput1" class="fw-bold my-3"
                              >No of Revisions</label
                            >
                            <input
                              type="email"
                              class="form-control px-4 form-control-2 iz_custom_placeholder"
                              id="exampleFormControlInput1"
                              placeholder="Enter an amount"
                            />
                          </div>
                          <div class="form-group mx-3 mx-lg-5 mx-md-5 py-3">
                            <label for="exampleFormControlInput1" class="fw-bold my-3"
                              >Amount ($)</label
                            >
                            <input
                              type="email"
                              class="form-control px-4 form-control-2 iz_custom_placeholder"
                              id="exampleFormControlInput1"
                              placeholder="Enter an amount"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="panel" id="two-panel">
                      <div class="justify-content-center">
                        <form>
                          <div class="form-group mx-3 mx-lg-5 mx-md-5 py-3">
                            <label for="exampleFormControlInput1" class="fw-bold my-3"
                              >Description</label
                            >
                            <textarea
                              class="form-control iz_custom_placeholder form-control-2 px-4"
                              placeholder="Provide a brief ingo about your basic package "
                              id="exampleFormControlTextarea1"
                              rows="5"
                            ></textarea>
                          </div>
                          <div class="form-group mx-3 mx-lg-5 mx-md-5 py-3">
                            <label for="exampleFormControlInput1" class="fw-bold my-3"
                              >Estimated Delivery Days</label
                            >
                            <select
                              class="form-select form-control-4 px-4"
                              aria-label="Default select example"
                            >
                              <option class="" selected>Sellect days</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </select>
                          </div>
                          <div class="form-group mx-3 mx-lg-5 mx-md-5 py-3">
                            <label for="exampleFormControlInput1" class="fw-bold my-3"
                              >No of Revisions</label
                            >
                            <input
                              type="email"
                              class="form-control iz_custom_placeholder px-4 form-control-2"
                              id="exampleFormControlInput1"
                              placeholder="Enter an amount"
                            />
                          </div>
                          <div class="form-group mx-3 mx-lg-5 mx-md-5 py-3">
                            <label for="exampleFormControlInput1" class="fw-bold my-3"
                              >Amount ($)</label
                            >
                            <input
                              type="email"
                              class="form-control iz_custom_placeholder px-4 form-control-2"
                              id="exampleFormControlInput1"
                              placeholder="Enter an amount"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="panel" id="three-panel">
                      <div class="justify-content-center">
                        <form>
                          <div class="form-group mx-3 mx-lg-5 mx-md-5 py-3">
                            <label for="exampleFormControlInput1" class="fw-bold my-3"
                              >Description</label
                            >
                            <textarea
                              class="form-control iz_custom_placeholder form-control-2 px-4"
                              placeholder="Provide a brief ingo about your basic package "
                              id="exampleFormControlTextarea1"
                              rows="5"
                            ></textarea>
                          </div>
                          <div class="form-group mx-3 mx-lg-5 mx-md-5 py-3">
                            <label for="exampleFormControlInput1" class="fw-bold my-3"
                              >Estimated Delivery Days</label
                            >
                            <select
                              class="form-select form-control-4 px-4"
                              aria-label="Default select example"
                            >
                              <option class="" selected>Sellect days</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </select>
                          </div>
                          <div class="form-group mx-3 mx-lg-5 mx-md-5 py-3">
                            <label for="exampleFormControlInput1" class="fw-bold my-3"
                              >No of Revisions</label
                            >
                            <input
                              type="email"
                              class="form-control px-4 form-control-2 iz_custom_placeholder"
                              id="exampleFormControlInput1"
                              placeholder="Enter an amount"
                            />
                          </div>
                          <div class="form-group mx-3 mx-lg-5 mx-md-5 py-3">
                            <label for="exampleFormControlInput1" class="fw-bold my-3"
                              >Amount ($)</label
                            >
                            <input
                              type="email"
                              class="form-control px-4 form-control-2 iz_custom_placeholder"
                              id="exampleFormControlInput1"
                              placeholder="Enter an amount"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr style="color: lightgrey" class="my-4" />

        <div class="card" id="basic_card_1">
          <div class="card-body">
            <div
              class="form-group d-flex justify-content-between flex-wrap mx-3 mx-lg-5 mx-md-5 pt-3"
            >
              <div class="d-flex justify-content-center align-items-center">
                <label class="fw-bold">Features</label>
                <i
                  class="fas fa-info-circle gray mx-2"
                  v-b-tooltip.hover
                  title="Tooltip directive content"
                ></i>
              </div>
              <div
                class="d-flex justify-content-center align-items-center mt-2 mt-lg-0 mt-md-0"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style="cursor: pointer"
                >
                  <path
                    d="M12.0041 17.3497H1.95762C1.03287 17.3497 0.283203 16.6 0.283203 15.6752V5.62873H1.95762V15.6752H12.0041V17.3497ZM15.353 14.0008H5.30646C4.3817 14.0008 3.63204 13.2512 3.63204 12.3264V2.27989C3.63204 1.35513 4.3817 0.605469 5.30646 0.605469H15.353C16.2777 0.605469 17.0274 1.35513 17.0274 2.27989V12.3264C17.0274 13.2512 16.2777 14.0008 15.353 14.0008ZM5.30646 2.27989V12.3264H15.353V2.27989H5.30646ZM11.1669 10.652H9.49251V8.14035H6.98088V6.46593H9.49251V3.95431H11.1669V6.46593H13.6786V8.14035H11.1669V10.652Z"
                    fill="#34A853"
                  />
                </svg>
                <label
                  class="fw-bold green mx-2"
                  @click="Toggleshowiz = !Toggleshowiz"
                  style="cursor: pointer"
                  >Add new Feature</label
                >
              </div>
            </div>
            <div id="hideshow1">
              <div class="form-group mx-3 mx-lg-5 mx-md-5 py-2">
                <div class="d-flex mb-0">
                  <label class="fw-light"
                    >Features List |<span class="gray mx-2"
                      >Click on a feature to add tasks</span
                    ></label
                  >
                </div>
              </div>
              <div class="d-flex mx-3 mx-lg-5 mx-md-5 py-2 flex-wrap">
                <span
                  class="Feature_tab justify-content-center align-items-center mx-1 mt-2"
                >
                  <p class="mb-0">
                    Designs <Span class="gray mx-1"> ($60)</Span>
                    <i class="far fa-times-circle mx-1" style="cursor: pointer"></i>
                  </p>
                </span>
                <span
                  class="Feature_tab justify-content-center align-items-center mx-1 mt-2"
                >
                  <p class="mb-0">
                    Revisions <Span class="gray mx-1">($10)</Span>
                    <i class="far fa-times-circle mx-1" style="cursor: pointer"></i>
                  </p>
                </span>
                <span
                  class="Feature_tab justify-content-center align-items-center mx-1 mt-2"
                >
                  <p class="mb-0">
                    Enhanced Detailing <Span class="gray mx-1"> ($45)</Span>
                    <i class="far fa-times-circle mx-1" style="cursor: pointer"></i>
                  </p>
                </span>
                <span
                  class="Feature_tab justify-content-center align-items-center mx-1 mt-2"
                  v-for="post of posts"
                  :key="post"
                >
                  <p class="mb-0">
                    {{ post.name }}
                    <Span class="gray mx-1"> ({{ post.cost }})</Span>
                    <i
                      @click="del(post.id)"
                      class="far fa-times-circle mx-1"
                      style="cursor: pointer"
                    ></i>
                  </p>
                </span>
              </div>

              <hr
                style="color: lightgrey; margin-bottom: 10px"
                class="mx-3 mx-lg-5 mx-md-5"
              />
              <div v-if="Toggleshowiz">
                <div class="form-group mx-3 mx-lg-5 mx-md-5 py-3">
                  <label for="exampleFormControlInput2" class="fw-bold my-3">Name</label>
                  <input
                    type="email"
                    class="form-control px-4 form-control-2 iz_custom_placeholder"
                    id="exampleFormControlInput2"
                    placeholder="Give your task a name"
                  />
                </div>
                <div class="form-group mx-3 mx-lg-5 mx-md-5 py-3">
                  <label for="exampleFormControlInput3" class="fw-bold my-3"
                    >Cost ($)</label
                  >
                  <input
                    type="email"
                    class="form-control px-4 form-control-2 iz_custom_placeholder"
                    id="exampleFormControlInput3"
                    placeholder="Enter an amount for your task"
                  />
                  <div class="justify-content-end d-flex">
                    <button class="btn btn-next my-5" @click="show">Save</button>
                  </div>
                </div>
              </div>

              <div v-else></div>
            </div>
          </div>
        </div>

        <div class="card" id="basic_card_2">
          <div class="card-body">
            <div
              class="form-group d-flex justify-content-between flex-wrap mx-3 mx-lg-5 mx-md-5 pt-3"
            >
              <div class="d-flex justify-content-center align-items-center">
                <label class="fw-bold">Features</label>
                <i
                  class="fas fa-info-circle gray mx-2"
                  v-b-tooltip.hover
                  title="Tooltip directive content"
                ></i>
              </div>
              <div
                class="d-flex justify-content-center align-items-center mt-2 mt-lg-0 mt-md-0"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style="cursor: pointer"
                >
                  <path
                    d="M12.0041 17.3497H1.95762C1.03287 17.3497 0.283203 16.6 0.283203 15.6752V5.62873H1.95762V15.6752H12.0041V17.3497ZM15.353 14.0008H5.30646C4.3817 14.0008 3.63204 13.2512 3.63204 12.3264V2.27989C3.63204 1.35513 4.3817 0.605469 5.30646 0.605469H15.353C16.2777 0.605469 17.0274 1.35513 17.0274 2.27989V12.3264C17.0274 13.2512 16.2777 14.0008 15.353 14.0008ZM5.30646 2.27989V12.3264H15.353V2.27989H5.30646ZM11.1669 10.652H9.49251V8.14035H6.98088V6.46593H9.49251V3.95431H11.1669V6.46593H13.6786V8.14035H11.1669V10.652Z"
                    fill="#34A853"
                  />
                </svg>
                <label
                  class="fw-bold green mx-2"
                  @click="Toggleshowiz2 = !Toggleshowiz2"
                  style="cursor: pointer"
                  >Add new Feature</label
                >
              </div>
            </div>
            <div class="form-group mx-3 mx-lg-5 mx-md-5 py-2">
              <div class="d-flex mb-0">
                <label class="fw-light"
                  >Features List |<span class="gray mx-2"
                    >Click on a feature to add tasks</span
                  ></label
                >
              </div>
            </div>
            <div class="d-flex mx-3 mx-lg-5 mx-md-5 py-2 flex-wrap">
              <span
                class="Feature_tab justify-content-center align-items-center mx-1 mt-2"
              >
                <p class="mb-0">
                  Designs <Span class="gray mx-1"> ($60)</Span>
                  <i class="far fa-times-circle mx-1" style="cursor: pointer"></i>
                </p>
              </span>
              <span
                class="Feature_tab justify-content-center align-items-center mx-1 mt-2"
              >
                <p class="mb-0">
                  Revisions <Span class="gray mx-1">($10)</Span>
                  <i class="far fa-times-circle mx-1" style="cursor: pointer"></i>
                </p>
              </span>
              <span
                class="Feature_tab justify-content-center align-items-center mx-1 mt-2"
              >
                <p class="mb-0">
                  Enhanced Detailing <Span class="gray mx-1"> ($45)</Span>
                  <i class="far fa-times-circle mx-1" style="cursor: pointer"></i>
                </p>
              </span>
              <span
                class="Feature_tab justify-content-center align-items-center mx-1 mt-2"
                v-for="post of posts"
                :key="post"
              >
                <p class="mb-0">
                  {{ post.name }}
                  <Span class="gray mx-1"> ({{ post.cost }})</Span>
                  <i
                    @click="del(post.id)"
                    class="far fa-times-circle mx-1"
                    style="cursor: pointer"
                  ></i>
                </p>
              </span>
            </div>

            <hr
              style="color: lightgrey; margin-bottom: 10px"
              class="mx-3 mx-lg-5 mx-md-5"
            />
            <div v-if="Toggleshowiz2">
              <div class="form-group mx-3 mx-lg-5 mx-md-5 py-3">
                <label for="exampleFormControlInput7" class="fw-bold my-3">Name</label>
                <input
                  type="email"
                  class="form-control px-4 iz_custom_placeholder form-control-2"
                  id="exampleFormControlInput7"
                  placeholder="Give your task a name"
                />
              </div>
              <div class="form-group mx-3 mx-lg-5 mx-md-5 py-3">
                <label for="exampleFormControlInput8" class="fw-bold my-3"
                  >Cost ($)</label
                >
                <input
                  type="email"
                  class="form-control iz_custom_placeholder px-4 form-control-2"
                  id="exampleFormControlInput8"
                  placeholder="Enter an amount for your task"
                />
                <div class="justify-content-end d-flex">
                  <button class="btn btn-next my-5" @click="show2">Save</button>
                </div>
              </div>
            </div>
            <div v-else></div>
          </div>
        </div>

        <div class="card" id="basic_card_3">
          <div class="card-body">
            <div
              class="form-group d-flex justify-content-between flex-wrap mx-3 mx-lg-5 mx-md-5 pt-3"
            >
              <div class="d-flex justify-content-center align-items-center">
                <label class="fw-bold">Features</label>
                <i
                  class="fas fa-info-circle gray mx-2"
                  v-b-tooltip.hover
                  title="Tooltip directive content"
                ></i>
              </div>
              <div
                class="d-flex justify-content-center align-items-center mt-2 mt-lg-0 mt-md-0"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style="cursor: pointer"
                >
                  <path
                    d="M12.0041 17.3497H1.95762C1.03287 17.3497 0.283203 16.6 0.283203 15.6752V5.62873H1.95762V15.6752H12.0041V17.3497ZM15.353 14.0008H5.30646C4.3817 14.0008 3.63204 13.2512 3.63204 12.3264V2.27989C3.63204 1.35513 4.3817 0.605469 5.30646 0.605469H15.353C16.2777 0.605469 17.0274 1.35513 17.0274 2.27989V12.3264C17.0274 13.2512 16.2777 14.0008 15.353 14.0008ZM5.30646 2.27989V12.3264H15.353V2.27989H5.30646ZM11.1669 10.652H9.49251V8.14035H6.98088V6.46593H9.49251V3.95431H11.1669V6.46593H13.6786V8.14035H11.1669V10.652Z"
                    fill="#34A853"
                  />
                </svg>
                <label
                  class="fw-bold green mx-2"
                  @click="Toggleshowiz3 = !Toggleshowiz3"
                  style="cursor: pointer"
                  >Add new Feature</label
                >
              </div>
            </div>
            <div class="form-group mx-3 mx-lg-5 mx-md-5 py-2">
              <div class="d-flex mb-0">
                <label class="fw-light"
                  >Features List |<span class="gray mx-2"
                    >Click on a feature to add tasks</span
                  ></label
                >
              </div>
            </div>
            <div class="d-flex mx-3 mx-lg-5 mx-md-5 py-2 flex-wrap">
              <span
                class="Feature_tab justify-content-center align-items-center mx-1 mt-1"
              >
                <p class="mb-0">
                  Designs <Span class="gray mx-1"> ($60)</Span>
                  <i class="far fa-times-circle mx-1" style="cursor: pointer"></i>
                </p>
              </span>
              <span
                class="Feature_tab justify-content-center align-items-center mx-1 mt-1"
              >
                <p class="mb-0">
                  Revisions <Span class="gray mx-1">($10)</Span>
                  <i class="far fa-times-circle mx-1" style="cursor: pointer"></i>
                </p>
              </span>
              <span
                class="Feature_tab justify-content-center align-items-center mx-1 mt-1"
              >
                <p class="mb-0">
                  Enhanced Detailing <Span class="gray mx-1"> ($45)</Span>
                  <i class="far fa-times-circle mx-1" style="cursor: pointer"></i>
                </p>
              </span>
              <span
                class="Feature_tab justify-content-center align-items-center mx-1 mt-2"
                v-for="post of posts"
                :key="post"
              >
                <p class="mb-0">
                  {{ post.name }}
                  <Span class="gray mx-1"> ({{ post.cost }})</Span>
                  <i
                    @click="del(post.id)"
                    class="far fa-times-circle mx-1"
                    style="cursor: pointer"
                  ></i>
                </p>
              </span>
            </div>
            <hr
              style="color: lightgrey; margin-bottom: 10px"
              class="mx-3 mx-lg-5 mx-md-5"
            />
            <div v-if="Toggleshowiz3">
              <div class="form-group mx-3 mx-lg-5 mx-md-5 py-3">
                <label for="exampleFormControlInput" class="fw-bold my-3">Name</label>
                <input
                  type="email"
                  class="form-control px-4 form-control-2 iz_custom_placeholder"
                  id="exampleFormControlInput5"
                  placeholder="Design"
                />
              </div>
              <div class="form-group mx-3 mx-lg-5 mx-md-5 py-3">
                <label for="exampleFormControlInput" class="fw-bold my-3">Cost ($)</label>
                <input
                  type="email"
                  class="form-control px-4 form-control-2 iz_custom_placeholder"
                  id="exampleFormControlInput6"
                  placeholder="60"
                />
              </div>
              <div class="justify-content-end d-flex">
                <button class="btn btn-next my-5" @click="show1">Save</button>
              </div>
            </div>
            <div v-else></div>
            <hr
              style="color: lightgrey; margin-bottom: 60px"
              class="mx-3 mx-lg-5 mx-md-5"
            />

            <div
              class="form-group d-flex justify-content-between flex-wrap mx-3 mx-lg-5 mx-md-5 pt-3"
            >
              <div class="d-flex justify-content-center align-items-center">
                <label class="fw-bold">Tasks Lists</label>
                <i
                  class="fas fa-info-circle gray mx-2"
                  v-b-tooltip.hover
                  title="Tooltip directive content"
                ></i>
              </div>
              <div
                class="d-flex justify-content-center align-items-center mt-2 mt-lg-0 mt-md-0"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style="cursor: pointer"
                >
                  <path
                    d="M12.0041 17.3497H1.95762C1.03287 17.3497 0.283203 16.6 0.283203 15.6752V5.62873H1.95762V15.6752H12.0041V17.3497ZM15.353 14.0008H5.30646C4.3817 14.0008 3.63204 13.2512 3.63204 12.3264V2.27989C3.63204 1.35513 4.3817 0.605469 5.30646 0.605469H15.353C16.2777 0.605469 17.0274 1.35513 17.0274 2.27989V12.3264C17.0274 13.2512 16.2777 14.0008 15.353 14.0008ZM5.30646 2.27989V12.3264H15.353V2.27989H5.30646ZM11.1669 10.652H9.49251V8.14035H6.98088V6.46593H9.49251V3.95431H11.1669V6.46593H13.6786V8.14035H11.1669V10.652Z"
                    fill="#34A853"
                  />
                </svg>
                <label
                  class="fw-bold green mx-2"
                  @click="Toggleshowiz4 = !Toggleshowiz4"
                  style="cursor: pointer"
                  >Add new task</label
                >
              </div>
            </div>
            <div class="d-flex mx-3 mx-lg-5 mx-md-5 py-2 flex-wrap">
              <span class="Feature_tab justify-content-center align-items-center m-1">
                <p class="mb-0 fw-bold fs-6">
                  Sketches
                  <i class="far fa-times-circle mx-1" style="cursor: pointer"></i>
                </p>
              </span>
              <span
                class="Feature_tab justify-content-center align-items-center m-1"
                v-for="task of tasks"
                :key="task"
              >
                <p class="mb-0 fw-bold fs-6">
                  {{ task.title }}
                  <i
                    @click="delTask(task.id)"
                    class="far fa-times-circle mx-1"
                    style="cursor: pointer"
                  ></i>
                </p>
              </span>
            </div>
            <hr
              style="color: lightgrey; margin-bottom: 10px"
              class="mx-3 mx-lg-5 mx-md-5"
            />
            <div v-if="Toggleshowiz4">
              <div class="form-group mx-3 mx-lg-5 mx-md-5 py-3">
                <label for="exampleFormControlInput1" class="fw-bold my-3"
                  >Task Title</label
                >
                <input
                  type="email"
                  class="form-control px-4 form-control-2 iz_custom_placeholder"
                  id="exampleFormControlInput4"
                  placeholder="Add a task title"
                />
              </div>
              <div class="form-group mx-3 mx-lg-5 mx-md-5 py-3">
                <label for="exampleFormControlInput1" class="fw-bold my-3"
                  >Description</label
                >
                <input
                  type="email"
                  class="form-control px-4 form-control-2 iz_custom_placeholder"
                  id="exampleFormControlInput5"
                  placeholder="Add a description"
                />
                <div class="justify-content-end d-flex">
                  <button class="btn btn-next my-5" @click="showTask">Save task</button>
                </div>
              </div>
            </div>
            <div v-else></div>
          </div>
        </div>
        <hr style="color: lightgrey; margin-bottom: 60px; margin-top: 60px" class="" />
        <div class="conatiner d-flex justify-content-between mt-5">
          <NuxtLink to="/create_gig">
            <button class="btn btn-back">Back</button>
          </NuxtLink>
          <NuxtLink to="/gig_upload">
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
  data: () => ({
    posts: [],
    tasks: [],
    Toggleshowiz: false,
    Toggleshowiz2: false,
    Toggleshowiz3: false,
    Toggleshowiz4: false,
  }),
  methods: {
    async basic() {
      if ((document.getElementById("basic_card_1").style.display = "block")) {
        document.getElementById("one-tab").style.background = "white";
        document.getElementById("one-tab").style.border = "2px solid #52be71";
        document.getElementById("two-tab").style.background = "#dfe3e8";
        document.getElementById("two-tab").style.border = "none";
        document.getElementById("one-tab").style.fontWeight = "bold";
        document.getElementById("two-tab").style.fontWeight = "400";
        document.getElementById("three-tab").style.fontWeight = "400";
        document.getElementById("one-tab").style.color = "#000";
        document.getElementById("two-tab").style.color = "#626568";
        document.getElementById("three-tab").style.color = "#626568";
        document.getElementById("three-tab").style.background = "#dfe3e8";
        document.getElementById("three-tab").style.border = "none";
        document.getElementById("basic_card_2").style.display = "none";
        document.getElementById("basic_card_3").style.display = "none";
      } else if ((document.getElementById("basic_card_1").style.display = "none")) {
        document.getElementById("one-tab").style.fontWeight = "400";
        document.getElementById("one-tab").style.background = "#dfe3e8";
        document.getElementById("one-tab").style.border = "none";
        document.getElementById("basic_card_1").style.display = "block";
        document.getElementById("basic_card_2").style.display = "none";
        document.getElementById("basic_card_3").style.display = "none";
      }
    },
    async Standard() {
      if ((document.getElementById("basic_card_2").style.display = "block")) {
        document.getElementById("two-tab").style.background = "white";
        document.getElementById("two-tab").style.border = "2px solid #52be71";
        document.getElementById("three-tab").style.background = "#dfe3e8";
        document.getElementById("three-tab").style.border = "none";
        document.getElementById("one-tab").style.fontWeight = "400";
        document.getElementById("two-tab").style.fontWeight = "bold";
        document.getElementById("three-tab").style.fontWeight = "400";
        document.getElementById("one-tab").style.color = "#626568";
        document.getElementById("two-tab").style.color = "#000";
        document.getElementById("three-tab").style.color = "#626568";
        document.getElementById("one-tab").style.background = "#dfe3e8";
        document.getElementById("one-tab").style.border = "none";
        document.getElementById("basic_card_1").style.display = "none";
        document.getElementById("basic_card_3").style.display = "none";
      } else if ((document.getElementById("basic_card_2").style.display = "none")) {
        document.getElementById("two-tab").style.background = "#dfe3e8";
        document.getElementById("two-tab").style.border = "none";
        document.getElementById("basic_card_2").style.display = "block";
        document.getElementById("basic_card_1").style.display = "none";
        document.getElementById("two-tab").style.fontWeight = "light";
        document.getElementById("basic_card_3").style.display = "none";
      }
    },
    async Premium() {
      document.getElementById("three-tab").style.background = "white";
      document.getElementById("three-tab").style.border = "2px solid #52be71";
      document.getElementById("two-tab").style.background = "#dfe3e8";
      document.getElementById("two-tab").style.border = "none";
      document.getElementById("one-tab").style.fontWeight = "400";
      document.getElementById("two-tab").style.fontWeight = "400";
      document.getElementById("three-tab").style.fontWeight = "bold";
      document.getElementById("one-tab").style.color = "#626568";
      document.getElementById("two-tab").style.color = "#626568";
      document.getElementById("three-tab").style.color = "#000";
      document.getElementById("one-tab").style.background = "#dfe3e8";
      document.getElementById("one-tab").style.border = "none";
      document.getElementById("basic_card_1").style.display = "none";
      document.getElementById("basic_card_2").style.display = "none";
      document.getElementById("basic_card_3").style.display = "block";
    },
    async show() {
      let name = document.getElementById("exampleFormControlInput2").value;
      let cost = document.getElementById("exampleFormControlInput3").value;
      if (name === "" || cost === "") {
        alert("empty");
      } else {
        let obj = {
          name: name,
          cost: cost,
          id: Math.floor(Math.random() * 100),
        };
        this.posts.push(obj);
        document.getElementById("exampleFormControlInput2").value = "";
        document.getElementById("exampleFormControlInput3").value = "";
      }
    },
    async Toggleshowiz() {
      let x = document.getElementById("hideshow1");
      if (x.style.display == "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    },
    del(e) {
      for (let i = 0; i < this.posts.length; i++) {
        const element = this.posts[i];
        if (element.id === e) {
          this.posts.splice(i, 1);
        }
      }
    },
    async show1() {
      let name = document.getElementById("exampleFormControlInput5").value;
      let cost = document.getElementById("exampleFormControlInput6").value;
      if (name === "" || cost === "") {
        alert("empty");
      } else {
        let obj = {
          name: name,
          cost: cost,
          id: Math.floor(Math.random() * 100),
        };
        this.posts.push(obj);
        document.getElementById("exampleFormControlInput5").value = "";
        document.getElementById("exampleFormControlInput6").value = "";
      }
    },
    async show2() {
      let name = document.getElementById("exampleFormControlInput7").value;
      let cost = document.getElementById("exampleFormControlInput8").value;
      if (name === "" || cost === "") {
        alert("empty");
      } else {
        let obj = {
          name: name,
          cost: cost,
          id: Math.floor(Math.random() * 100),
        };
        this.posts.push(obj);
        document.getElementById("exampleFormControlInput7").value = "";
        document.getElementById("exampleFormControlInput8").value = "";
      }
    },
    del(e) {
      for (let i = 0; i < this.posts.length; i++) {
        const element = this.posts[i];
        if (element.id === e) {
          this.posts.splice(i, 1);
        }
      }
    },
    async showTask() {
      let title = document.getElementById("exampleFormControlInput4").value;
      if (title === "") {
        alert("empty");
      } else {
        let obj = {
          title: title,
          id: Math.floor(Math.random() * 1000),
        };
        this.tasks.push(obj);
        document.getElementById("exampleFormControlInput4").value = "";
      }
    },
    delTask(e) {
      for (let i = 0; i < this.tasks.length; i++) {
        const element = this.tasks[i];
        if (element.id === e) {
          this.tasks.splice(i, 1);
        }
      }
    },
  },
};
</script>
