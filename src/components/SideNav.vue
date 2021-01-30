<template>
  <div class="navBar-div">
    <h5>Traditions and Subversions</h5>
    <b-row v-for="content in contents" :key="content.key">
      <router-link :to="content.link">
        <p class="sideNav-name">{{ content.name }}</p>
      </router-link>
    </b-row>
  </div>
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
  padding: 0px 15px;
  padding-top: 15px;
  padding-bottom: 5px;
  border-radius: 5px;
  border-style: solid;
  border-width: thin;
  border-color: #c4c4c4;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);
  /* background-color: lightgrey; */
}
.sideNav-name {
  color: #b8b08d;
  font-weight: bold;
}
.sideNav-name:hover {
  color: #aca174;
}
</style>
