<template>
  <div class="index container">
    <div class="card" v-for="item in smoothies" :key="item.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteSmoothie(item.id)">delete</i>
        <h2 class="indigo-text">{{item.title}}</h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in item.ingredients" :key="index">
            <span class="chip">{{ing}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/init";
export default {
  data() {
    return {
      smoothies: [
        // {
        //   title: "Ninja-Brew",
        //   slug: "ninja-brew",
        //   ingredients: ["bannana", "coffee", "milk"],
        //   id: "1"
        // },
        // {
        //   title: "Morning Mood",
        //   slug: "morning-mood",
        //   ingredients: ["mango", "lime", "plum"],
        //   id: "2"
        // }
      ]
    };
  },
  methods: {
    deleteSmoothie(id) {


      this.smoothies = this.smoothies.filter(item => {
        return item.id != id;
      });
    }
  },
  created(){
    // fetch data from firestore
    db.collection('firebase').get()
    .then(snapshot => {
      snapshot.forEach()
    })
  }
};
</script>

<style>
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
.index h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}
.index .ingredients {
  margin: 30px auto;
}
.index .ingredients li {
  display: inline-block;
}
.index .delete {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #ccc;
  font-size: 1.4em;
}
</style>