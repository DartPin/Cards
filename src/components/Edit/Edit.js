import axios from   "axios"

export default {
    name: "Edit",
    props: ["editItem", "collums"],
    data() {
        return {

        };
    },
    methods: {
        changeCard() {
            var edIt = {};

            this.collums[this.editItem.ind][this.editItem.index].theme = this.$refs.theme.value;
            this.collums[this.editItem.ind][this.editItem.index].sourceText = this.$refs.sourceText.value;
            this.collums[this.editItem.ind][this.editItem.index].translation = this.$refs.translation.value;
            this.$emit('value', this.collums);
            this.$emit('valcan', false);
            axios
                .post(`http://localhost:8081/`, {
                    body: this.collums
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(e => {
                    this.errors.push(e);
                });
        },
        cancel() {

            this.$emit('valcan', false);
        }
    }
};