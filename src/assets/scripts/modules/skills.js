import Vue from "vue";

// Vue.component("skillsRow", {
//   props: {
//     skill: {
//       type: Object,
//       default: {}
//     }
//   },
//   template: "#skills-group"
// });

const skill = {
  props: ["skillName", "skillPercents"],
  template: "#skill"
};

const skillsRow = {
  template: "#skills-group",
  components: {
    skill
  },
  props: {
    skill: Object
  }
};

new Vue({
  el: "#skills-container",
  components: {
    skillsRow
  },
  data: {
    skills: {}
  },
  created() {
    this.skills = require("../../../data/skils");
    console.log(this.skills);
  },
  template: "#skills-block"
});
