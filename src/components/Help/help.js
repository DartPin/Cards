export default {
  name: "Help",
  props: ["HelpActive"],
  data() {
    return {
    };
  },
  methods: {
    On: function () {
      this.HelpActive = !this.HelpActive;
      this.$emit('value', this.HelpActive)
    }
  }
};