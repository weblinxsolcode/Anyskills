<template>
  <div>
    <Nav />
    <ServicesNav />
    <CreategigNav />
    <div class="container px-lg-4">
      <div class="d-lg-flex d-block gap-3 flex-warp">
        <div class="">
          <Dashboard />
        </div>
        <div class="bg-mycon px-5 py-2 w-100">
          <div class="w_80">
            <div class="head">
              <p class="mb-0 fw-bolder text-dark fs-5">My Connections (360)</p>
            </div>
            <div class="d-lg-flex d-block justify-content-between align-items-center">
              <ConnectionBtn2 />
              <div>
                <SearchBar />
              </div>
            </div>

            <hr style="color: lightgrey" />

            <div class="w-100">
              <ConnUserlist />
              <ConnUserlist2 />
              <ConnUserlist />
              <ConnUserlist2 />
              <ConnUserlist />
              <ConnUserlist2 />
              <ConnUserlist />
              <ConnUserlist2 />
              <ConnUserlist />
              <ConnUserlist2 />
              <ConnUserlist />
              <div class="mt-3">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
