<template>
  <div class="boxshadow12311 mb-3">
    <div class="container padding_18">
      <b-navbar toggleable="lg" type="tranparent" variant="transparent">
        <NuxtLink to="/">
          <img src="~assets/images/Anyskills_Logo.png" alt="" />
        </NuxtLink>

        <b-navbar-toggle target="nav-collapse"
          ><i class="fas fa-bars fs-2"></i
        ></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ms-auto d-flex align-items-center">
            <b-nav-item>
              <img src="~assets/images/map.png" alt="" />
              Anyskills Map
            </b-nav-item>

            <b-nav-item>
              <NuxtLink to="/social_home_main">
                <img src="~assets/images/network.png" alt="" />
                My social Network
              </NuxtLink>
            </b-nav-item>

            <b-nav-item>
              <img src="~assets/images/notify.png" alt="" />
              Notifications
            </b-nav-item>
            <b-nav-item>
              <NuxtLink to="/chat_40">
                <img src="~assets/images/chat.png" alt="" />
                Chats
              </NuxtLink>
            </b-nav-item>

            <b-nav-item>
              <NuxtLink to="/Account_settings">
                <img class="width_img_iz_123" src="~assets/images/Profile_Pic.png" alt=""
              /></NuxtLink>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <!-- <hr style="margin-top: 5px; color: lightgrey" /> -->
  </div>
</template>
