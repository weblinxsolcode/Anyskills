<template>
  <div>
    <Loginbtn />
    <ServicesNav />
    <div
      class="container px-0 mt-5 px-lg-5 pt-4 pt-lg-0 justify-content-center flex-wrap col-12 w_55"
    >
      <div class="left_card pb-4 px-lg-4">
        <div class="card">
          <div class="card-body">
            <div class="container">
              <div class="container pb-5 pb-lg-0">
                <div class="justify-content-center">
                  <div class="mt-5 mt-lg-4">
                    <p
                      class="fw-bolder text-center green mb-0"
                      style="color: #34a853; font-size: 36px"
                    >
                      Register
                    </p>
                    <p class="text-center mt-3 color_light_gray">
                      Create account to start connecting with the best artisans.
                    </p>
                  </div>
                  <form>
                    <div class="form-group mx-0 mx-lg-3 py-3">
                      <div class="d-lg-flex d-block gap-4">
                        <div>
                          <label
                            for="exampleFormControlInput1"
                            class="fw-bold my-3"
                            >Email address</label
                          >
                          <input
                            type="email"
                            class="form-control px-4 form-control-2 placeholder11"
                            id="exampleFormControlInput1"
                            placeholder="Email address"
                          />
                        </div>
                        <div>
                          <label
                            for="exampleFormControlInput1"
                            class="fw-bold my-3"
                            >Phone Number</label
                          >
                          <div class="d-flex align-items-center">
                            
                              <select name="cars" id="cars">
                                <option >+92</option>
                                <option>+91</option>
                                <option >+94</option>
                                <option>+93</option>
                              </select>
                              <input
                                type="number"
                                class="form-control w-100 px-4 form-control-2 placeholder11"
                                id="exampleFormControlInput1"
                                placeholder="Phone Number"
                              />
                          
                           
                              
                           
                          </div>
                        </div>
                      </div>
                    </div>

                          <div class="form-group mx-0 mx-lg-3 py-3 ">
                            <label
                              for="exampleFormControlInput1"
                              class="fw-bold my-3 "
                            >
                              Password
                            
                            </label>
                            <div class="form-control-5   " >
                            <div class="d-flex align-items-center">
                              <input
                                type="password"
                                class="form-control bg-tran w-100 px-4 form-control-2 "
                               
                                id="myInput"
                                placeholder="Password"
                              /> 
                              <p class="mb-0 mx-2 " @click="toggleEye"  >
                              <i id="myEye" class="fas fa-eye green"></i>
                              <!-- <i class="fas fa-eye-slash"></i> -->
                            </p>
                            </div>
                           
                          
                      </div>
                      
                    </div>

                              <div class="form-group mx-0 mx-lg-3 py-3 ">
                            <label
                              for="exampleFormControlInput1"
                              class="fw-bold my-3 "
                            >
                              Confirm password
                            
                            </label>
                            <div class="form-control-5   " >
                            <div class="d-flex align-items-center">
                              <input
                                type="password"
                                class="form-control bg-tran w-100 px-4 form-control-2 "
                               
                                id="myInput2"
                                placeholder="Confirm Password"
                              /> 
                              <p class="mb-0 mx-2 " @click="toggleEye2"  >
                              <i id="myEye2" class="fas fa-eye green"></i>
                              <!-- <i class="fas fa-eye-slash"></i> -->
                            </p>
                            </div>
                           
                          
                      </div>
                      
                    </div>
                    <div class="form-group mx-0 mx-lg-3 text-center py-3">
                      <NuxtLink to="/SetupAcc" >
                      <button class="btn btn-next w-50 bg_green_new">Continue</button>
                      </NuxtLink>
                      <i>
                        <p class="mt-4  ">
                          Already have an account?  
                          <NuxtLink to="/Login" >
                          <span class="green pointer">Login</span>
                          </NuxtLink>
                        </p>
                      </i>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BtnSection topic="Signup" hed="Register" />
      </div>

    </div>

    <Footer />
  </div>
</template>
<script>
export default {
 methods:{
        async  toggleEye(){
        var x = document.getElementById("myInput");
        var element = document.getElementById("myEye");
      //  alert()
        if (x.type === "password") {
          x.type = "text";
          element.classList.add("fa-eye-slash");
          element.classList.remove("fa-eye");
        } else {
          x.type = "password";
          element.classList.remove("fa-eye-slash");
          element.classList.add("fa-eye");
        }

      },
       async  toggleEye2(){
        var x = document.getElementById("myInput2");
        var element = document.getElementById("myEye2");
      //  alert()
        if (x.type === "password") {
          x.type = "text";
          element.classList.add("fa-eye-slash");
          element.classList.remove("fa-eye");
        } else {
          x.type = "password";
          element.classList.remove("fa-eye-slash");
          element.classList.add("fa-eye");
        }

      },

 }
}
</script>

<style  scoped>
.form-control-5{
background: #FFFFFF;
box-shadow: 0px 2.23256px 5.5814px rgba(0, 0, 0, 0.1);
border-radius: 2.7907px;
}

</style>>
  
</style>