import axios from "axios"
import Help from '../Help/Help.vue'
import Edit from '../Edit/Edit.vue'
import AddCard from "../NewCard/NewCard.vue"

export default {
  name: "app",
  components: {
    Help,
    Edit,
    AddCard
  },
  data() {
    return {
      dateToday: "", // получит значение даты при загрузке приложения
      HelpActive: false, // отвечает за то показано ли окно помощи или нет
      addActive: false, // отвечает за то показано ли окно добавления карты или нет
      msg: "", // получит значение массива карт с сервера при загрузке приложения
      months: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"], 
      skin: 0, // порядковый номер скина для прилодения
      backgroundClrs: [
        {
          background: "#fffadc",
          cardclr: ["#bb81b3", "#f0d4a5", "#f0ca29", "#b6c939", "#cc566e"],
          headerFontClr: "#30549e",
          dateBack: "#32549c",
          headerBackground: "#fffadc",
        },
        {
          background: "#fefefe",
          cardclr: ["#b3d8f5", "#c3127c", "#a72638", "#018ccf", "#35c3ff"],
          headerFontClr: "#32549b",
          dateBack: "#c32228",
          headerBackground: "#dcdcdc"
        },
        {
          background: "#dbe9d8",
          cardclr: ["#fefefe", "#cc566e", "#a6254c", "#8bbb89", "#9c79b1"],
          headerFontClr: "#5b5b5b",
          dateBack: "#2a683f",
          headerBackground: "#b4d2ae"
        }

      ],//массив свойств скинов для приложения
      collums: [[], [], []], // пустой массив куда распределятся данные карточек с сервера
      editItem: {}, // получит свойства с окна изменения карты
      showEdit: false, // отвечает за то показано ли окно редактированя карты или нет
    };
  },

  // обработка событий при загрузке приложения

  mounted: function () {
    axios.get("http://localhost:8081/").then(response => {
      this.msg = response.data; // получаем данные с сервера
 
      var fcl = Math.floor(Math.random() * 3) + 3; // Переменная для определения количества каточек в первом столбце
      //обработка перемешивания всех карточек в рандомном порядке
      function compareRandom(a, b) {
        return Math.random() - 0.5;
      }

      this.msg.sort(compareRandom);
      //распределение карточек по трем столбцам
      for (var i=0; i < this.msg.length - 1; i++) {
        if (i < fcl) { //если i  меньше fcl то добавляем в первый столбец
          this.msg[i].text = this.msg[i].sourceText; 
          this.msg[i].lang = true;
          this.msg[i].clr = Math.floor(Math.random() * 5); //присваиваем рандомное значение фона
          this.msg[i].leave = false;
          this.collums[0].push(this.msg[i]); // добавляем в первую колонку
        } else { // если i больше чем мест в первой колонке то поочереди добавляем во вторую и третью
          this.msg[i].text = this.msg[i].sourceText;
          this.msg[i].lang = true;
          this.msg[i].clr = Math.floor(Math.random() * 5);
          this.msg[i].leave = false;
          this.collums[1].push(this.msg[i]); //добавление во вторую колонку
          i++;
          this.msg[i].text = this.msg[i].sourceText;
          this.msg[i].lang = true;
          this.msg[i].clr = Math.floor(Math.random() * 5);
          this.msg[i].leave = false;
          this.collums[2].push(this.msg[i]); //добавление в третью колонку
        }

      }
      // сортировка карточек в столбце по длинне текста на английском языке от меньшего к большему
      this.collums.forEach(el => {
        el.sort(function (a, b) {
          return a.sourceText.length - b.sourceText.length;
        });
      });

      // получение и обработка значения даты для заголовка
      var date = new Date();
      var dayToday = date.getDate()
      var monthToday = date.getMonth()
      this.dateToday = dayToday + " " + this.months[monthToday]
    });
  },
  methods: {
    //удаление карточки по даблклику по столбцам
    deleteEvent: function (index, ind) {

      this.collums[ind].splice(index, 1);

    },
    //изменение языка по клику с русского на английский с возвращением английского языка через 3 секунды
    cngLng: function (index, ind) {
      var set;
      var stack = this.collums[ind][index].sourceText; //сохраняем значение текста на английском
      if (this.collums[ind][index].lang === true) { // если сейчас текст на английском
        this.collums[ind][index].sourceText = this.collums[ind][index].translation; // переводим на русский
        this.collums[ind][index].lang = !this.collums[ind][index].lang; //передаем значение false или true в стиль карточки для ее поворота
        var self = this;
        set = setTimeout(function () {
          self.collums[ind][index].sourceText = stack; //возвращаем английский язык
          self.collums[ind][index].lang = !self.collums[ind][index].lang // передаем значение false или true в стиль карточки для ее поворота
        }, 3000);
      }
    },


    // вывод окна помощи
    helpOn() {
      this.HelpActive = !this.HelpActive
    },
    // вывод окна редактирования карты
    addOn() {
      this.addActive = !this.addActive
    },

    // обработчик изменения скина приложения
    changeSkin: function () {
      this.skin += 1
      if (this.skin === 3) { // если достигает последнего скина то следующий снова будет первый
        this.skin = 0;
      }
    },

    // получение значения редактируемой карты и открытие окна редактирования
    editCard(index, ind) {
      this.editItem.theme = this.collums[ind][index].theme;
      this.editItem.sourceText = this.collums[ind][index].sourceText;
      this.editItem.translation = this.collums[ind][index].translation;
      this.editItem.index = index;
      this.editItem.ind = ind;
      this.showEdit = true
    }
  }
};