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
      <b-col cols="6" sm="3" v-for="row1 in rows1" :key="row1">
        <b-row>
          <b-col class="members-div">
            <b-img center fluid :src="row1.image" class="members-image" />
            <p class="members-text">{{ row1.name }}</p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <!-- Row 2 -->
    <b-row class="members-image-row ">
      <b-col cols="6" sm="3" v-for="row2 in rows2" :key="row2">
        <b-row>
          <b-col class="members-div">
            <b-img center fluid :src="row2.image" class="members-image" />
            <p class="members-text">{{ row2.name }}</p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import bergantinos from "../resources/BERGANTINOS.jpg";
import kasala from "../resources/KASALA.jpg";
import see from "../resources/SEE.jpg";
import tablante from "../resources/Tablante.jpg";
import tiu from "../resources/TIU_HUMALIT.jpg";
import navarro from "../resources/Navarro.jpg";
import go from "../resources/Go.jpg";
export default {
  data() {
    return {
      rows1: [
        { id: 1, name: "Charles Navarro", image: navarro },
        { id: 2, name: "Karl Russell See", image: see },
        { id: 3, name: "Ian Bergantinos", image: bergantinos },
        { id: 5, name: "Alvin Tiu", image: tiu },
      ],
      rows2: [
        { id: 4, name: "Miguel Tablante", image: tablante },
        { id: 6, name: "Benjo Kasala", image: kasala },
        { id: 7, name: "Michiko Young Go", image: go },
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
  /* height: 25vh; */
}
.members-text {
  text-align: center;
}
.members-div {
  padding: 15px !important;
}
</style>
