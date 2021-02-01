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
        <b-col cols="3" class="app-sideNavbar">
          <SideNav />
        </b-col>
        <!-- Pages -->
        <b-col>
          <router-view />
        </b-col>
      </b-row>
    </b-container>
    <!-- Footer -->
    <div class="app-footer">
      <span v-for="(title, index) in titles" :key="index"> {{ title }} • </span>
      <div class="app-title">HUMALIT GROUP 3 - YY1</div>
      <span v-for="(member, index) in members" :key="index" class="app-title">
        {{ member }}
        <span v-if="index !== members.length - 1"> | </span>
      </span>
    </div>
  </div>
</template>

<script>
import SideNav from "./components/SideNav";
export default {
  name: "App",
  components: {
    SideNav,
  },
  data() {
    return {
      titles: [
        "Dasalan and Tocsohan",
        "Culture: Being Forgotten? & The Main RRL",
        "Filipino National Heroes Rap",
        "Proud of My Accent",
        "Filipino Christmas",
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
</style>
