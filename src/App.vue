<template>
  <div>
    <!-- Header -->
    <b-navbar class="app-header">
      <!-- Home Page -->
      <router-link to="/">
        <b-navbar-brand> HUMALIT GROUP 3 - YY1</b-navbar-brand>
      </router-link>
    </b-navbar>

    <!-- Content -->
    <b-container class="bv-example-row">
      <b-row>
        <!-- Side Nav -->
        <b-col cols="3" class="app-sideNavbar">
          <SideNav />
        </b-col>
        <!-- Pages -->
        <b-col class="app-sideNavbar">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
    <!-- Footer -->
    <div class="app-footer">
      <div>HUMALIT GROUP 3 - YY1</div>
      <span>Bergantinos, Go, Kasala, Navarro, See, Tablante, Tiu</span>
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
};
</script>

<style>
.app-header {
  background-color: #b8b08d;
  margin-bottom: 30px;
}
.app-sideNavbar {
  padding: 0px 25px !important;
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
