<template>
  <div>
    <div class="filters justify-content-lg-between">
      <div class="d-flex justify-content-center align-items-center flex-wrap mt-3">
        <select
          class="form-select fs-6 me-2 mb-2 mb-lg-0"
          aria-label="Default select example"
          style="width: max-content"
        >
          <option selected>Seller Details</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select
          class="form-select fs-6 me-2 mb-2 mb-lg-0"
          aria-label="Default select example"
          style="width: max-content"
        >
          <option selected>Budget</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select
          class="form-select fs-6 me-2 mb-2 mb-lg-0"
          aria-label="Default select example"
          style="width: max-content"
        >
          <option selected>Delivery Time</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select
          class="form-select fs-6 me-2 mb-2 mb-lg-0"
          aria-label="Default select example"
          style="width: max-content"
        >
          <option selected>No of Services</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div class="d-flex align-items-center me-2">
          <label class="switch fs-6 me-2 mb-2 mb-lg-0">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <p class="mb-0 fs-6">Local Services</p>
        </div>
        <div class="d-flex align-items-center me-2">
          <label class="switch fs-6 me-2 mb-2 mb-lg-0">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <p class="mb-0 fs-6">Online Services</p>
        </div>
      </div>

      <div class="d-flex justify-content-center align-items-center mt-3">
        <div
          class="d-flex justify-content-center align-items-center"
          style="cursor: pointer"
        >
          <i class="fas fa-list gray"></i>
          <p class="mb-0 ms-1 gray">List View</p>
        </div>
        <div
          class="d-flex justify-content-center align-items-center ms-3"
          style="cursor: pointer"
        >
          <i class="fas fa-th-large green"></i>
          <p class="mb-0 green ms-1">Grid View</p>
        </div>
      </div>
    </div>
  </div>
</template>