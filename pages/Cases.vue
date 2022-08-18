<template>
  <div>
    <Nav />
    <ServicesNav />
    <CreategigNav />
    <div class="container">
      <div class="d-lg-flex d-block gap-2">
        <div class="">
          <Dashboard />
        </div>
        <div class="w-100 px-3 py-2 scroll-div">
          <div class="row align-items-center">
            <div class="col-lg-6 col-12">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <p class="mb-0 fw-bolder fs-5">Cases</p>
                </div>
                <div>
                  <button class="dashed-btn" v-b-modal.modal-1>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    Report a case
                  </button>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div
                class="bigSearch-main d-flex justify-content-between align-items-center"
              >
                <input type="search" class="bigSearch w-100" placeholder="Search" />
                <span class="ms-3">
                  <i class="fa fa-search"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="">
            <div class="d-flex flex-lg-row flex-column justify-content-lg-between mt-3">
              <ColorTab content="All Cases" bgcolor="" icon="" />
              <ColorTab content="Open" bgcolor="#E1F5FD" icon="" fun="tab1" />
              <ColorTab content="Closed or resolved" bgcolor="#E4F3E5" icon="" />
              <ColorTab content="Canceled" bgcolor="#F2E7FC" icon="" />
              <ColorTab content="Escalated" bgcolor="#FBEDE7" icon="" />
            </div>
            <div>
              <div class="mt-2">
                <div class="bg-line head row align-items-center mx-0">
                  <div class="col-1 d-flex justify-content-end">
                    <p class="mb-0 text-end">
                      <input
                        type="checkbox"
                        id="my-radio-2"
                        name="fav_language"
                        value="HTML"
                        class=""
                      />
                    </p>
                  </div>
                  <div class="col-3 text-center">
                    <p class="mb-0">Case Against</p>
                  </div>
                  <div class="col-2 text-center">
                    <p class="mb-0">Status</p>
                  </div>
                  <div class="col-2 text-center">
                    <p class="mb-0">Category</p>
                  </div>
                  <div class="col-2 text-center">
                    <p class="mb-0">Date</p>
                  </div>
                  <div class="col-2 text-center">
                    <p class="mb-0">Action</p>
                  </div>
                </div>
              </div>
              <Crud-list bgcolor="#F2E7FC" txtcolor="#8C18E2" Status="In Progress" />
              <Crud-list bgcolor="#E1F5FD" txtcolor="#4A4DE6" Status="Open" />
              <Crud-list bgcolor="#E4F3E5" txtcolor="#4CAF50" Status="Close" />
              <Crud-list bgcolor="#FBEDE7" txtcolor="#FF6422" Status="Escalated" />
              <Crud-list bgcolor="#F2E7FC" txtcolor="#8C18E2" Status="In Progress" />
              <Crud-list bgcolor="#E1F5FD" txtcolor="#4A4DE6" Status="Open" />
              <Crud-list bgcolor="#E4F3E5" txtcolor="#4CAF50" Status="Close" />
              <Crud-list bgcolor="#FBEDE7" txtcolor="#FF6422" Status="Escalated" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <b-modal id="modal-1" hide-header title="BootstrapVue">
        <div class="p-2">
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <p class="fs-7 gray">Cancel</p>
            </div>
            <div class="text-center">
              <p class="fs-5 dark fw-bolder">Report a case</p>
            </div>

            <div>
              <p class="fs-7 gray invisible">Cancel</p>
            </div>
          </div>
          <form>
            <div
              class="bg-white box_shadow_light_iz h_add_iz border_radius_2_iz mx-auto"
            ></div>

            <div class="form-group py-3">
              <label for="exampleFormControlInput1" class="fw-bold my-3"
                >Case Against</label
              >
              <input
                class="form-control form-control-2 px-4 rounded-3"
                placeholder="@ "
                type="text"
                id="exampleFormControlTextarea1"
                rows="5"
              />
            </div>

            <div class="form-group py-3">
              <label for="exampleFormControlInput1" class="fw-bold my-3"
                >Description</label
              >
              <textarea
                class="form-control form-control-2 px-4"
                placeholder="Describe the issue you have."
                id="exampleFormControlTextarea1"
                rows="5"
              ></textarea>
            </div>
            <div class="form-group py-3">
              <label for="exampleFormControlInput1" class="fw-bold">Case Type</label>
              <p class="fw-light text-muted">
                Please select why you want to raise a dispute.
              </p>
              <select
                class="d-block w-100 form-control-2 box-shadow-iz bg-white ps-2 pe-4 rounded-3"
                placeholder="Please select why you want to raise a dispute."
                type="text"
                id="exampleFormControlTextarea1"
                rows="5"
              >
                <option value="0" selected>Set location</option>
              </select>
            </div>
            <div class="form-group py-3">
              <label for="exampleFormControlInput1" class="fw-bold">Other Reasons</label>
              <p class="fw-lighter text-muted">
                If you couldn’t find a reason in our list please provide it below.
              </p>
              <input
                class="form-control form-control-2 px-4 rounded-3"
                placeholder="Emter other reasons"
                type="text"
                id="exampleFormControlTextarea1"
                rows="5"
              />
            </div>
            <div class="py-3 mt-4">
              <p class="w-100 fw-light btn btn-next">Report Case</p>
            </div>
          </form>
        </div>
      </b-modal>
    </div>

    <Footer />
  </div>
</template>
<style scoped>
.dashed-btn {
  background: transparent;
  border: 2px dotted #d6d6d8 !important;
  border-radius: 5px;
  padding: 6px 10px;
  color: #d6d6d8;
  width: 100% !important;
}
.bigSearch-main {
  background: #f8f8fa;
  border-radius: 4.88px;
  padding: 6px 20px;
}
.bigSearch-main input {
  background: transparent !important;
  border: none !important;
}
</style>
<script>
export default {
  methods: {},
};
</script>
