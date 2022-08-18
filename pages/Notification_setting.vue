<template>
  <div>
    <Nav />
    <ServicesNav />
    <CreategigNav />

    <div class="container">
      <div
        class="row mx-0 pt-5 justify-content-between flex-wrap align-items-top gap-lg-5"
      >
        <NotificationTab />

        <div class="col-lg-8 col-12 px-0 mt-lg-0 mt-3">
          <div class="bg-white boder_bg_shadow px-lg-5 px-2 py-3 py-lg-5">
            <p class="text_green_iz fs-5 mb-3 pb-2 border_bottom_custom_2 fw-bolder">
              Notifications Settings
            </p>

            <div></div>

            <div class="d-flex flex-column">
              <p class="text_green_iz fw-bold mb-0">Email Notifications</p>
              <div class="d-flex gap-5 align-items-start mt-3">
                <div><p class="text-dark fw-bold">Email me when:</p></div>
                <div>
                  <div class="d-flex flex-column ms-lg-5 ps-lg-5 gap-3 d-flex flex-wrap">
                    <label
                      id="my-radio"
                      class="d-flex align-items-center me-lg-2 label_iz"
                    >
                      <input
                        type="radio"
                        class="m-0 d-none"
                        id="my-radio"
                        name="fav_language5"
                        value="HTML"
                      />
                      <p class="mb-0 mx-1 fw-light">I have a new follower</p>
                    </label>
                    <label
                      id="my-radio"
                      class="d-flex align-items-center me-lg-2 label_iz"
                    >
                      <input
                        type="radio"
                        class="m-0 d-none"
                        id="my-radio"
                        name="fav_language4"
                        value="HTML"
                      />
                      <p class="mb-0 mx-1 fw-light">I have a new message</p>
                    </label>
                    <label
                      id="my-radio"
                      class="d-flex align-items-center me-lg-2 label_iz"
                    >
                      <input
                        type="radio"
                        class="m-0 d-none"
                        id="my-radio"
                        name="fav_language3"
                        value="HTML"
                      />
                      <p class="mb-0 mx-1 fw-light">There is a newsletter</p>
                    </label>
                    <label
                      id="my-radio"
                      class="d-flex align-items-center me-lg-2 label_iz"
                    >
                      <input
                        type="radio"
                        class="m-0 d-none"
                        id="my-radio"
                        name="fav_language2"
                        value="HTML"
                      />
                      <p class="mb-0 mx-1 fw-light">A payment is due</p>
                    </label>
                  </div>
                </div>
              </div>
              <hr class="my-3" />
              <p class="text_green_iz fw-bold mb-0">Onsite Notifications</p>
              <div class="d-flex gap-5 align-items-start mt-3">
                <div><p class="text-dark fw-bold">Notify me when:</p></div>
                <div>
                  <div class="d-flex flex-column ms-lg-5 ps-lg-5 gap-3 d-flex flex-wrap">
                    <label
                      id="my-radio"
                      class="d-flex align-items-center me-lg-2 label_iz"
                    >
                      <input
                        type="radio"
                        class="m-0 d-none"
                        id="my-radio"
                        name="fav_language"
                        value="HTML"
                      />
                      <p class="mb-0 mx-1 fw-light">I have new bids</p>
                    </label>
                    <label
                      id="my-radio"
                      class="d-flex align-items-center me-lg-2 label_iz"
                    >
                      <input
                        type="radio"
                        class="m-0 d-none"
                        id="my-radio"
                        name="fav_language9"
                        value="HTML"
                      />
                      <p class="mb-0 mx-1 fw-light">
                        Someone adds my auction to their watchlist
                      </p>
                    </label>
                    <label
                      id="my-radio"
                      class="d-flex align-items-center me-lg-2 label_iz"
                    >
                      <input
                        type="radio"
                        class="m-0 d-none"
                        id="my-radio"
                        name="fav_language6"
                        value="HTML"
                      />
                      <p class="mb-0 mx-1 fw-light">When I recieve payments</p>
                    </label>
                    <label
                      id="my-radio"
                      class="d-flex align-items-center me-lg-2 label_iz"
                    >
                      <input
                        type="radio"
                        class="m-0 d-none"
                        id="my-radio"
                        name="fav_language7"
                        value="HTML"
                      />
                      <p class="mb-0 mx-1 fw-light">When I make payments</p>
                    </label>
                    <label
                      id="my-radio"
                      class="d-flex align-items-center me-lg-2 label_iz"
                    >
                      <input
                        type="radio"
                        class="m-0 d-none"
                        id="my-radio"
                        name="fav_language8"
                        value="HTML"
                      />
                      <p class="mb-0 mx-1 fw-light">When I new payment details</p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
