<template>
  <b-container class="window-height content-style">
    <h3 class="members-text">Members</h3>
    <b-row class="members-decription">
      <p>
        This project is for the final output of class HUMALIT YY1 where the
        group would be tackling the question “ How can Philippine narratives of
        antiquity be made relevant to contemporary Philippine life, culture, and
        concerns?”
      </p>
    </b-row>
    <!-- Row 1 -->
    <b-row class="members-image-row">
      <b-col cols="3" v-for="row1 in rows1" :key="row1">
        <b-row>
          <b-col>
            <b-img center :src="row1.image" class="members-image" />
            <p class="members-text">{{ row1.name }}</p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <!-- Row 2 -->
    <b-row class="members-image-row">
      <b-col cols="3" v-for="row2 in rows2" :key="row2">
        <b-row>
          <b-col>
            <b-img center :src="row2.image" class="members-image" />
            <p class="members-text">{{ row2.name }}</p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import studentGirl from "../resources/studentGirl.png";
import studentBoy from "../resources/studentBoy.png";

export default {
  data() {
    return {
      rows1: [
        { id: 1, name: "Charles Navarro", image: studentBoy },
        { id: 2, name: "Karl Russell See", image: studentBoy },
        { id: 3, name: "Ian Bergantinos", image: studentBoy },
        { id: 5, name: "Alvin Tiu", image: studentBoy },
      ],
      rows2: [
        { id: 4, name: "Miguel Tablante", image: studentBoy },
        { id: 6, name: "Benjo Kasala", image: studentBoy },
        { id: 7, name: "Michiko Young Go", image: studentGirl },
      ],
    };
  },
};
</script>

<style scoped>
.members-text {
  text-align: center;
  padding-bottom: 20px;
}
.members-decription {
  padding-bottom: 50px;
}
.members-image-row {
  place-content: center;
}
.members-image {
  height: 15vh;
}
.members-text {
  text-align: center;
}
</style>
