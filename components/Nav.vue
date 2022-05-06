<template>
  <div>
    <div class="container">
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
              <img src="~assets/images/network.png" alt="" />
              My social Network
            </b-nav-item>
            <b-nav-item>
              <img src="~assets/images/notify.png" alt="" />
              Notifications
            </b-nav-item>
            <b-nav-item>
              <img src="~assets/images/chat.png" alt="" />
              Chats
            </b-nav-item>
            <b-nav-item>
              <img src="~assets/images/Profile_Pic.png" alt="" />
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <hr style="margin-top: -19px; color: lightgrey" />
  </div>
</template>
