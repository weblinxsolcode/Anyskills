<template>
  <div>
    <Nav />
    <ServicesNav />
    <CreategigNav />
    <div class="d-flex">
      <div class="ms-5 dashboard_sidebar for_shadow p-2">
        <b-input-group class="w-100">
          <template #prepend>
            <b-input-group-text style="border: none"
              ><i class="fas fa-search py-1"></i
            ></b-input-group-text>
          </template>
          <b-form-input
            placeholder="Search"
            style="border: none"
          ></b-form-input>
        </b-input-group>
        <hr class="text-muted">
        <b-dropdown
          id="dropdown-1"
          class="project_drop"
          variant="link"
          toggle-class="text-decoration-none"
        >
          <template #button-content>
            <i class="fas fa-suitcase fs-5 green"></i>
            <span class="mb-0 green ms-3 me-5">Projects</span>
          </template>
          <b-dropdown-item><ul><li>Live</li></ul></b-dropdown-item>
          <b-dropdown-item><ul><li>Completed</li></ul></b-dropdown-item>
          <b-dropdown-item><ul><li>Paused</li></ul></b-dropdown-item>
          <b-dropdown-item><ul><li>canceled</li></ul></b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="container px-lg-5 dashboard">hsgd</div>
    </div>

    <Footer />
  </div>
</template>
