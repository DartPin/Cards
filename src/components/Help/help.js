export default {
  name: "Help",
  props: ["HelpActive"], // HelpActive булевое значение которое отвечает за отображение окна помощи
  data() {
    return {
    };
  },
  methods: {
    // обработка закрытия окна при нажатии на "закрыть"
    On: function () {
      this.HelpActive = !this.HelpActive;
      this.$emit('value', this.HelpActive)
    }
  }
};