import axios from   "axios"

export default {
    name: "NewCard",
    props: ["collums"],
    data() {
        return {

        };
    },
    methods: {
        changeCard() {
            var edIt = {};

            edIt.theme = this.$refs.theme.value;
            edIt.sourceText = this.$refs.sourceText.value;
            edIt.translation = this.$refs.translation.value;
            edIt.clr = Math.floor(Math.random() * 5);
            edIt.lang = true;
            this.collums[2].push(edIt)
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