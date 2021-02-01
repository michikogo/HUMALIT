<template>
  <b-container class="navBar-div">
    <span class="sideNav-title">{{ title }}</span>
    <b-row
      style="paddingTop:15px"
      v-for="content in contents"
      :key="content.key"
    >
      <b-col>
        <router-link :to="content.section" @click="section(content.section)">
          <span class="sideNav-name">{{ content.name }}</span>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "MainSideNav",
  props: {
    title: String,
    contents: Object,
  },
};
</script>

<style scoped>
.navBar-div {
  padding: 15px;
  border-radius: 5px;
  border-style: solid;
  border-width: thin;
  border-color: #c4c4c4;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);
  /* background-color: lightgrey; */

  /* position: fixed;
  width: 35vh; */
}
.sideNav-title {
  /* font-size: 12px; */
  font-weight: bold;
}
.sideNav-name {
  color: #b8b08d;
  font-weight: bold;
}
.sideNav-bar {
  border-bottom: 1px solid #b8b08d;
}
.sideNav-name:hover {
  color: #aca174;
}
.sideNav-name:active {
  font-size: bold;
}
</style>
