<template>
  <div>
    <NavMini />
    <div class="container">
      <div class="row mx-lg-4 mx-0 mx-md-0">
        <div class="col-12 col-lg-6 col-md-6">
          <div class="d-flex fw-bolder align-items-center">
            <i class="fas fa-angle-left"></i>
            <p class="mb-0 mx-3 for_pointer">Back</p>
          </div>
          <div class="fw-bolder mt-lg-5 text-lg-start text-center mt-3">
            <p class="mb-0 fw-bolder">Event Details</p>
            <hr style="color: lightgrey" />

            <h2 class="fw-bolder mt-lg-2 mt-1">
              Enriching lives and <br class="d-lg-block d-none" />
              the world
            </h2>
            <p class="mb-0 fs-7" style="opacity: 0.6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit adipiscing
              bibendum platea tellus vestibulum, dolor neque. Varius elementum et
              adipiscing odio tellus. Tortor nunc pharetra dictum enim, luctus praesent
              nisi, accumsan. Posuere praesent sapien in ultrices arcu
              <br class="d-lg-block d-none" />
              pulvinar quis.
            </p>
          </div>
          <div class="fw-bold mt-lg-4 mt-2 p-lg-3 p-2 boder_bg_shadow">
            <div class="row p-3">
              <div class="col-5">
                <p class="mb-0">Date :</p>
                <p class="mb-0">Time :</p>
                <p class="mb-0">Location :</p>
              </div>
              <div class="col-6">
                <p class="mb-0">7 Aug, 2019 - 14 Aug, 2019</p>
                <p class="mb-0">10:00 - 12:00PM</p>
                <p class="mb-0">Lagos, Nigeria</p>
              </div>
            </div>
            <div>
              <div class="row">
                <div class="col-lg-6 col-12 text-center">
                  <button class="attending_btn">I am attending</button>
                </div>
                <div
                  class="for_pointer gray col-lg-6 col-12 text-lg-start text-center mt-lg-2 my-4"
                >
                  Set Reminder
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 col-md-6">
          <img src="~assets/images/soc_event_details.png" class="img-fluid" alt="" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
