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
  data() {
    return {
      svgClassIsActive: false
    };
  },
  methods: {
    drawCircle() {
      let skillBlock = this.$refs.skillBlock;
      let bottomPosition =
        window.innerHeight - skillBlock.getBoundingClientRect().bottom;
      this.svgClassIsActive = bottomPosition > 0;
    }
  },
  created() {
    window.addEventListener("scroll", this.drawCircle);
  },
  mounted() {
    this.drawCircle();
  },
  destroyed() {
    window.removeEventListener("scroll", this.drawCircle);
  },
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
