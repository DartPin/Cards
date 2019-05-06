import axios from   "axios"

export default {
    name: "NewCard",
    props: ["collums"], // массив colums содержит в себе всю информацию о картах на стороне клиента
    data() {
        return {

        };
    },
    methods: {
        // функция добавления новой карты
        changeCard() {
            var edIt = {}; //пустой временный объект куда добавятся все значения новой карты

            //присвоения  значений карты из формы ввода
            edIt.theme = this.$refs.theme.value;
            edIt.sourceText = this.$refs.sourceText.value;
            edIt.translation = this.$refs.translation.value;
            // присвоение значений оформления и свойства отвечающего за проверку языка текста на карте
            edIt.clr = Math.floor(Math.random() * 5); 
            edIt.lang = true;

            this.collums[2].push(edIt) // добавление новой карты в общий массив карт
            this.$emit('value', this.collums); //передача массива карт в App.vue
            this.$emit('valcan', false); // передача переменной отвечающей за закрытие окна редактирования после нажатия кнопки сохранить
            
            // отправка измененного массива на серверную часть
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
        
        //функция обработки закрытия окна редактирования при нажатии кнопки "отменить"
        cancel() {

            this.$emit('valcan', false);
        }
    }
};