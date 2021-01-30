<template>
  <b-container class="navBar-div">
    <span class="sideNav-title">Traditions and Subversions</span>
    <b-row
      style="paddingTop:15px"
      v-for="content in contents"
      :key="content.key"
    >
      <b-col cols="2" style="align-self: center;">🌟</b-col>
      <b-col>
        <router-link :to="content.link">
          <span class="sideNav-name">{{ content.name }}</span>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "SideNav",
  components: {},
  data() {
    return {
      contents: [
        { key: 1, name: "Dasalan and Tocsohan", link: "/maintext" },
        {
          key: 2,
          name: "Culture: Being Forgotten? & The Main RRL",
          link: "/supportingtext",
        },
        { key: 3, name: "Filipino National Heroes Rap", link: "/video1" },
        { key: 4, name: "Proud of My Accent", link: "/video2" },
        { key: 5, name: "Filipino Christmas", link: "/video3" },
      ],
    };
  },
  methods: {
    print() {
      alert("clicked");
    },
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
}
.sideNav-title {
  font-size: 12px;
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
</style>
