<template>
  <div class="navBar-div">
    <b-nav vertical>
      <b-row v-for="content in contents" :key="content.key">
        <!-- <b-col cols="4">
          <b-img right :src="content.image" style="height:30px;" />
        </b-col> -->
        <b-col>
          <b-nav-item>{{ content.name }}</b-nav-item>
        </b-col>
      </b-row>
    </b-nav>
  </div>
</template>

<script>
import members from "../assets/community.png";
import text from "../assets/font.png";
import home from "../assets/home.png";
import video from "../assets/video-player.png";
export default {
  name: "SideNav",
  components: {},
  data() {
    return {
      contents: [
        { key: 1, image: home, name: "Home", link: "/" },
        { key: 2, image: text, name: "Text", link: "/text" },
        { key: 3, image: video, name: "Video", link: "/video" },
        { key: 4, image: members, name: "Members", link: "/members" },
      ],
    };
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
</style>
