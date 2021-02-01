<template>
  <div>
    <!-- Header -->
    <b-navbar class="app-header">
      <b-row style="width: 100%">
        <!-- Home Page -->
        <b-col cols="6">
          <router-link to="/">
            <b-navbar-brand class="app-title">
              HUMALIT GROUP 3 - YY1
            </b-navbar-brand>
          </router-link>
        </b-col>
        <b-col style="text-align: right;">
          <router-link to="/members">
            <b-navbar-brand class="app-title"> Members</b-navbar-brand>
          </router-link>
        </b-col>
      </b-row>
    </b-navbar>

    <!-- Content -->
    <b-container class="bv-example-row">
      <b-row>
        <!-- Side Nav -->
        <!-- <b-col cols="3" class="app-sideNavbar">
          <SideNav />
        </b-col> -->
        <!-- Pages -->
        <b-col>
          <router-view />
        </b-col>
      </b-row>
    </b-container>

    <!-- Footer -->
    <div class="app-footer">
      <div class="app-title">HUMALIT GROUP 3 - YY1</div>
      <div>
        <span v-for="(member, index) in members" :key="index" class="app-title">
          {{ member }}
          <span v-if="index !== members.length - 1"> | </span>
        </span>
      </div>
      <div>
        <span v-for="(title, index) in titles" :key="index">
          <router-link :to="title.link">
            <span class="app-text">{{ title.title }}</span>
          </router-link>
          <span v-if="index !== titles.length - 1"> • </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// import SideNav from "./components/SideNav";
export default {
  name: "App",
  // components: {
  //   SideNav,
  // },
  data() {
    return {
      titles: [
        { title: "Dasalan and Tocsohan", link: "/maintext" },
        {
          title: "Culture: Being Forgotten? & The Main RRL",
          link: "/supportingtext",
        },
        { title: "Filipino National Heroes Rap", link: "/video1" },
        { title: "Proud of My Accent", link: "/video2" },
        { title: "Filipino Christmas", link: "/video3" },
      ],
      members: [
        "Bergantinos",
        "Go",
        "Kasala",
        "Navarro",
        "See",
        "Tablante",
        "Tiu",
      ],
    };
  },
};
</script>

<style>
.app-title {
  color: white !important;
}
.app-header {
  background-color: #b8b08d;
  margin-bottom: 30px;
}
.app-sideNavbar {
  padding-right: 25px !important;
}
.app-footer {
  background-color: #b8b08d;
  margin-top: 30px;
  padding: 15px;
  text-align: center;
  /* font-weight: bold;
  font-size: large; */
  /* display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap; */
}
.app-text {
  color: white;
}
.app-text:hover {
  color: wheat;
  font-weight: bold;
}
</style>
