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
          <i class="fas green fa-check-circle cheak_icon me-1 py-1"></i>
          <p class="m-0 green">Packages & Pricing</p>
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
        <NuxtLink to="/basicjob_location">
          <button type="submit" class="back_button mx-2">
            <i class="fas fa-angle-left mx-lg-1 mx-0"></i>
            Back
          </button></NuxtLink
        >
        <NuxtLink to="/job_upload">
          <button type="submit" class="next_button mx-2">
            Next
            <i class="fas fa-angle-right"></i></button
        ></NuxtLink>
      </div>
    </div>

    <hr style="margin-top: 0px; color: lightgrey" />
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
        style="color: lightgrey; margin-top: 30px"
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
              <div class="container pb-5">
                <div class="justify-content-center">
                  <form>
                    <div class="form-group mx-0 mx-lg-3 py-3">
                      <label for="exampleForm ControlInput1" class="fw-bold my-2"
                        >Payment type</label
                      >
                      <select
                        class="form-select form-control-4"
                        aria-label="Default select example"
                      >
                        <option class="px-4" selected>Select payment type</option>
                        <option value="1">Online</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>

                    <div class="form-group mx-0 mx-lg-3 py-3">
                      <label for="exampleForm ControlInput1" class="fw-bold my-3"
                        >Enter Budget ($)</label
                      >
                      <input
                        type="text"
                        class="form-control-2 form-control px-4 iz_custom_placeholder"
                        id="exampleForm ControlInput1 "
                        placeholder="Enter an amount"
                      />
                    </div>
                    <div class="form-group mx-0 mx-lg-3 py-3">
                      <label for="exampleForm ControlInput1" class="fw-bold my-3"
                        >Set hour pay</label
                      >
                      <input
                        type="text"
                        class="form-control-2 form-control px-4 iz_custom_placeholder"
                        id="exampleForm ControlInput1 "
                        placeholder="Enter an amount"
                      />
                    </div>
                    <div class="form-group mx-0 mx-lg-3 py-3">
                      <label for="exampleForm ControlInput1" class="fw-bold green mt-3"
                        >Amount ($)</label
                      >
                      <p class="mb-0 text-danger fs-7" style="cursor: pointer">
                        Budget/ht
                      </p>
                      <input
                        type="text"
                        class="form-control-2 border_iz_gray rounded-1 mt-3 w-50 form-control gray px-4 iz_custom_placeholder"
                        id="exampleForm ControlInput1 "
                        placeholder="$22.00"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr style="color: lightgrey" class="my-5" />

        <!-- card 2 -->

        <div class="card">
          <div class="card-body">
            <div
              class="form-group d-flex justify-content-between flex-wrap mx-3 mx-lg-5 mx-md-5 pt-3"
            >
              <div class="d-flex justify-content-center align-items-center">
                <label class="fw-bold">Features</label>
                <i class="fas fa-info-circle gray mx-2"></i>
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
                  @click="hideShow11 = !hideShow11"
                  style="cursor: pointer"
                  >Add new Feature</label
                >
              </div>
            </div>
            <div v-if="hideShow11">
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
              <div class="form-group mx-3 mx-lg-5 mx-md-5 py-3">
                <label for="exampleFormControlInput2" class="fw-bold my-3">Name</label>
                <input
                  type="email"
                  class="form-control iz_custom_placeholder px-4 form-control-2"
                  id="exampleFormControlInput2"
                  placeholder="Design"
                />
              </div>
              <div class="form-group mx-3 mx-lg-5 mx-md-5 py-3">
                <label for="exampleFormControlInput3" class="fw-bold my-3"
                  >Cost ($)</label
                >
                <input
                  type="email"
                  class="form-control iz_custom_placeholder px-4 form-control-2"
                  id="exampleFormControlInput3"
                  placeholder="60"
                />
                <div class="">
                  <div class="justify-content-end d-flex">
                    <button id="clickonme" class="btn btn-next my-5" @click="show">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div v-else></div>
            <div>
              <div class="form-group">
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
                      @click="hideShow12 = !hideShow12"
                      style="cursor: pointer"
                      >Add new task</label
                    >
                  </div>
                </div>
                <div v-if="hideShow12">
                  <div class="d-flex mx-3 mx-lg-5 mx-md-5 py-2 flex-wrap">
                    <span
                      class="Feature_tab justify-content-center align-items-center m-1"
                    >
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
                  <div class="form-group mx-3 mx-lg-5 mx-md-5 py-3">
                    <label for="exampleFormControlInput10" class="fw-bold my-3"
                      >Task Title</label
                    >
                    <input
                      type="email"
                      class="form-control px-4 iz_custom_placeholder form-control-2"
                      id="exampleFormControlInput10"
                      placeholder="Add a task title"
                    />
                  </div>
                  <div class="form-group mx-3 mx-lg-5 mx-md-5 py-3">
                    <label for="exampleFormControlInput10" class="fw-bold my-3"
                      >Description</label
                    >
                    <input
                      type="email"
                      class="form-control px-4 iz_custom_placeholder form-control-2"
                      id="exampleFormControlInput101"
                      placeholder="Add a description"
                    />
                    <div class="justify-content-end d-flex">
                      <button class="btn btn-next my-5" @click="showTask">
                        Save task
                      </button>
                    </div>
                  </div>
                </div>
                <div v-else></div>
              </div>
            </div>
          </div>
        </div>

        <hr style="color: lightgrey; margin-top: 60px" />
        <div class="conatiner d-flex justify-content-between mt-5">
          <NuxtLink to="/basicjob_location">
            <button class="btn btn-back">Back</button>
          </NuxtLink>
          <NuxtLink to="/job_upload">
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
    hideShow11: false,
    hideShow12: false,
  }),
  methods: {
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
    del(e) {
      // this.posts[0].remove();
      for (let i = 0; i < this.posts.length; i++) {
        const element = this.posts[i];
        if (element.id === e) {
          this.posts.splice(i, 1);
          // console.log(element);
        }
      }
    },
    async showTask() {
      let title = document.getElementById("exampleFormControlInput10").value;

      if (title === "") {
        document.getElementById("clickonme").click;
        // alert("empty");
      } else {
        document.getElementById("clickonme").click;
        let obj = {
          title: title,
          id: Math.floor(Math.random() * 1000),
        };
        this.tasks.push(obj);
        document.getElementById("exampleFormControlInput10").value = "";
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
