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
          <i class="fas gray fa-check-circle cheak_icon me-1 py-1"></i>
          <p class="mb-0 gray">Location & Schedule</p>
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
        <button type="submit" class="back_button mx-2">
          <i class="fas fa-angle-left mx-lg-1 mx-0"></i>
          Back
        </button>
        <NuxtLink to="/basicjob_location">
          <button type="submit" class="next_button mx-2">
            Next
            <i class="fas fa-angle-right"></i>
          </button>
        </NuxtLink>
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
                      <label for="exampleFormControlInput1" class="fw-bold my-3"
                        >Job Title</label
                      >
                      <input
                        type="email"
                        class="form-control iz_custom_placeholder px-4 form-control-2"
                        id="exampleFormControlInput1"
                        placeholder="Enter a title e.g Logo Project"
                      />
                    </div>

                    <div class="form-group mx-0 mx-lg-3 py-3">
                      <label for="exampleFormControlInput1" class="fw-bold my-3"
                        >Description</label
                      >
                      <textarea
                        class="form-control iz_custom_placeholder form-control-2 px-4"
                        placeholder="Brief info to help others uderstand your project better "
                        id="exampleFormControlTextarea1"
                        rows="5"
                      ></textarea>
                    </div>
                    <div class="form-group mx-0 mx-lg-3 py-3">
                      <label for="exampleFormControlInput1" class="fw-bold my-3"
                        >Job Category</label
                      >
                      <select
                        class="form-select px-4 form-control-4"
                        aria-label="Default select example"
                      >
                        <option class="" selected>Select a category</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="form-group mx-0 mx-lg-3 py-3">
                      <label for="exampleFormControlInput1" class="fw-bold my-3"
                        >Location</label
                      >
                      <select
                        class="form-select px-4 form-control-4"
                        aria-label="Default select example"
                      >
                        <option class="" selected>Select a Location</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="form-group mx-0 mx-lg-3 py-3">
                      <label for="exampleFormControlInput1" class="fw-bold my-3"
                        >Select Job Type</label
                      >
                      <p style="cursor: pointer" class="text-danger">
                        Basic jobs allows skill owners to send unique quotes, Auctions
                        allow users to send unique bids with realtime bids.
                      </p>
                      <div class="conatiner d-flex justify-content-between mt-5">
                        <button class="btn post_job_btn col-5">Basic</button>

                        <button style="color: #626568" class="post_job_btn_auction col-5">
                          Auction
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr style="color: lightgrey; margin-top: 60px" />
        <div class="conatiner d-flex justify-content-between mt-5">
          <button class="btn btn-back">Back</button>
          <NuxtLink to="/basicjob_location">
            <button class="btn btn-next">Next</button>
          </NuxtLink>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
