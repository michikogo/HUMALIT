<template>
  <div class="window-height">
    <b-row>
      <b-col cols="3">
        <SideNav title="Proud of My Accent" :contents="contents"
      /></b-col>
      <b-col class="content-pading">
        <b-row class="content-style">
          <h3>Proud of My Accent</h3>
          <div class="video-video">
            <iframe
              width="100%"
              height="349"
              src="https://www.youtube.com/embed/SaV4sFw5mAw"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
          <h5 class="video-analysis">Analysis</h5>
          <span>
            The video of Mikey Bustos focuses on the Filipino Accent. At the
            start of the video he stated that he can speak like an American,
            Australian, and Italian however, he wanted to use his own accent
            which is the filipino accent. Throughout the video he sings with a
            filipino accent which shows how this accent is different from other
            accents. The lyrics teach the listeners how to have a filipino
            accent for example v and b must sound the same. In the description
            box Mikey Bustos wrote “This is a song I wrote about accents. I'm
            super proud of my Filipino Accent.”. This video is not to make fun
            of the accent but to show that we should be proud of it. This video
            not only promotes the filipino accent but it promotes all accents in
            the world as it would be boring if we all had one accent. One line
            from the song also says that “I don’t care if you find my accent
            different cuz i'm one of a kind”, this song is all about accepting
            our accents because this is who we are and we should be proud of our
            accents as this represents our country.
          </span>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import SideNav from "../../components/SideNav.vue";
export default {
  name: "Video2",
  components: { SideNav },
  data() {
    return {
      contents: [{ key: 1, name: "Video", section: "/video1#video" }],
    };
  },
};
</script>
