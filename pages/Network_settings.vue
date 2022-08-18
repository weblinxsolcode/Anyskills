<template>
  <div>
    <Nav />
    <ServicesNav />
    <CreategigNav />
    <div class="container">
      <div class="row mx-0 pt-5 flex-wrap align-items-top">
        <div class="col-lg-4">
          <NotificationTab />
        </div>
        <div class="col-lg-8 col-12">
          <div class="bg-white boder_bg_shadow px-3 py-3 px-lg-5 py-lg-5">
            <p
              class="text_green_iz font_custom_iz mb-3 pb-4 border_bottom_custom_2 fw-bolder"
            >
              Social Network Settings
            </p>

            <div></div>

            <div class="d-flex flex-column">
              <p class="text_green_iz fw-bold mb-0">My wall</p>
              <p class="text-dark fw-bold mt-3">Who can view my wall?</p>
              <div class="d-flex gap-3 d-flex flex-wrap">
                <label id="my-radio" class="d-flex align-items-center me-lg-2">
                  <input
                    type="radio"
                    checked
                    class="m-0"
                    id="my-radio"
                    name="fav_language"
                    value="HTML"
                  />
                  <p class="mb-0 mx-1 fw-bold">Everyone</p>
                </label>
                <label id="my-radio" class="d-flex align-items-center me-lg-2">
                  <input
                    type="radio"
                    checked
                    class="m-0"
                    id="my-radio"
                    name="fav_language"
                    value="HTML"
                  />
                  <p class="mb-0 mx-1 fw-bold">Contacts only</p>
                </label>
                <label id="my-radio" class="d-flex align-items-center me-lg-2">
                  <input
                    type="radio"
                    checked
                    class="m-0"
                    id="my-radio"
                    name="fav_language"
                    value="HTML"
                  />
                  <p class="mb-0 mx-1 fw-bold">Contacts and connections</p>
                </label>
                <label id="my-radio" class="d-flex align-items-center me-lg-2">
                  <input
                    type="radio"
                    checked
                    class="m-0"
                    id="my-radio"
                    name="fav_language"
                    value="HTML"
                  />
                  <p class="mb-0 mx-1 fw-bold">Just me</p>
                </label>
              </div>
              <p class="text-dark fw-bold mt-5">Who can post my wall?</p>
              <div class="d-flex gap-3 d-flex flex-wrap">
                <label id="my-radio" class="d-flex align-items-center me-lg-2">
                  <input
                    type="radio"
                    checked
                    class="m-0"
                    id="my-radio"
                    name="fav_language2"
                    value="HTML"
                  />
                  <p class="mb-0 mx-1 fw-bold">Everyone</p>
                </label>
                <label id="my-radio" class="d-flex align-items-center me-lg-2">
                  <input
                    type="radio"
                    checked
                    class="m-0"
                    id="my-radio"
                    name="fav_language2"
                    value="HTML"
                  />
                  <p class="mb-0 mx-1 fw-bold">Contacts only</p>
                </label>
                <label id="my-radio" class="d-flex align-items-center me-lg-2">
                  <input
                    type="radio"
                    checked
                    class="m-0"
                    id="my-radio"
                    name="fav_language2"
                    value="HTML"
                  />
                  <p class="mb-0 mx-1 fw-bold">Contacts and connections</p>
                </label>
                <label id="my-radio" class="d-flex align-items-center me-lg-2">
                  <input
                    type="radio"
                    checked
                    class="m-0"
                    id="my-radio"
                    name="fav_language2"
                    value="HTML"
                  />
                  <p class="mb-0 mx-1 fw-bold">Just me</p>
                </label>
              </div>
              <hr class="mt-4" />
              <p class="text_green_iz fw-bold mb-0">My Post</p>
              <p class="text-dark fw-bold mt-3">Who can see my posts?</p>
              <div class="d-flex gap-3 d-flex flex-wrap">
                <label id="my-radio" class="d-flex align-items-center me-lg-2">
                  <input
                    type="radio"
                    checked
                    class="m-0"
                    id="my-radio"
                    name="fav_language5"
                    value="HTML"
                  />
                  <p class="mb-0 mx-1 fw-bold">Everyone</p>
                </label>
                <label id="my-radio" class="d-flex align-items-center me-lg-2">
                  <input
                    type="radio"
                    checked
                    class="m-0"
                    id="my-radio"
                    name="fav_language5"
                    value="HTML"
                  />
                  <p class="mb-0 mx-1 fw-bold">Contacts only</p>
                </label>
                <label id="my-radio" class="d-flex align-items-center me-lg-2">
                  <input
                    type="radio"
                    checked
                    class="m-0"
                    id="my-radio"
                    name="fav_language5"
                    value="HTML"
                  />
                  <p class="mb-0 mx-1 fw-bold">Contacts and connections</p>
                </label>
                <label id="my-radio" class="d-flex align-items-center me-lg-2">
                  <input
                    type="radio"
                    checked
                    class="m-0"
                    id="my-radio"
                    name="fav_language5"
                    value="HTML"
                  />
                  <p class="mb-0 mx-1 fw-bold">Just me</p>
                </label>
              </div>
              <p class="text-dark fw-bold mt-5">Who can like my posts?</p>
              <div class="d-flex gap-3 d-flex flex-wrap">
                <label id="my-radio" class="d-flex align-items-center me-lg-2">
                  <input
                    type="radio"
                    checked
                    class="m-0"
                    id="my-radio"
                    name="fav_language4"
                    value="HTML"
                  />
                  <p class="mb-0 mx-1 fw-bold">Everyone</p>
                </label>
                <label id="my-radio" class="d-flex align-items-center me-lg-2">
                  <input
                    type="radio"
                    checked
                    class="m-0"
                    id="my-radio"
                    name="fav_language4"
                    value="HTML"
                  />
                  <p class="mb-0 mx-1 fw-bold">Contacts only</p>
                </label>
                <label id="my-radio" class="d-flex align-items-center me-lg-2">
                  <input
                    type="radio"
                    checked
                    class="m-0"
                    id="my-radio"
                    name="fav_language4"
                    value="HTML"
                  />
                  <p class="mb-0 mx-1 fw-bold">Contacts and connections</p>
                </label>
                <label id="my-radio" class="d-flex align-items-center me-lg-2">
                  <input
                    type="radio"
                    checked
                    class="m-0"
                    id="my-radio"
                    name="fav_language4"
                    value="HTML"
                  />
                  <p class="mb-0 mx-1 fw-bold">Just me</p>
                </label>
              </div>
              <p class="text-dark fw-bold mt-5">Who can comment on my posts?</p>
              <div class="d-flex gap-3 d-flex flex-wrap">
                <label id="my-radio" class="d-flex align-items-center me-lg-2">
                  <input
                    type="radio"
                    checked
                    class="m-0"
                    id="my-radio"
                    name="fav_language3"
                    value="HTML"
                  />
                  <p class="mb-0 mx-1 fw-bold">Everyone</p>
                </label>
                <label id="my-radio" class="d-flex align-items-center me-lg-2">
                  <input
                    type="radio"
                    checked
                    class="m-0"
                    id="my-radio"
                    name="fav_language3"
                    value="HTML"
                  />
                  <p class="mb-0 mx-1 fw-bold">Contacts only</p>
                </label>
                <label id="my-radio" class="d-flex align-items-center me-lg-2">
                  <input
                    type="radio"
                    checked
                    class="m-0"
                    id="my-radio"
                    name="fav_language3"
                    value="HTML"
                  />
                  <p class="mb-0 mx-1 fw-bold">Contacts and connections</p>
                </label>
                <label id="my-radio" class="d-flex align-items-center me-lg-2">
                  <input
                    type="radio"
                    checked
                    class="m-0"
                    id="my-radio"
                    name="fav_language3"
                    value="HTML"
                  />
                  <p class="mb-0 mx-1 fw-bold">Just me</p>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
