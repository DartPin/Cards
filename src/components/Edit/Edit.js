import axios from "axios"

export default {
    name: "Edit",
    props: ["editItem", "collums"],//  editItem - переменная со значением данных редактируемой карты, collums - массив в котором содержиться данные карточек на стороне клиента
    data() {
        return {

        };
    },
    methods: {
        changeCard() {
            // присваиваем нужной карте в массиве colums новых значений
            this.collums[this.editItem.ind][this.editItem.index].theme = this.$refs.theme.value;
            this.collums[this.editItem.ind][this.editItem.index].sourceText = this.$refs.sourceText.value;
            this.collums[this.editItem.ind][this.editItem.index].translation = this.$refs.translation.value;
            this.$emit('value', this.collums);// возвращение измененного массива в App.vue
            this.$emit('valcan', false); // передача значения для закрытия окна редактирования
            axios // отправка измененного массива со картами на сервер
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
            // нажатие кнопки "отмена"
            this.$emit('valcan', false);
        }
    }
};