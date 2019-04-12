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
      dateToday: "",
      HelpActive: false,
      addActive: false,
      isActive: false,
      msg:"",
      months:["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      text: "",
      skin: 0,
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

      ],
      collums:[[],[],[]],
      editItem: {},
      showEdit: false,
      leave: false
    };
  },
  mounted: function() {
    axios.get("http://localhost:8081/").then(response => {
      this.msg = response.data;
      
    var i = 0;
    var fcl = Math.floor(Math.random() * 3) + 3; // Переменная для определения количества каточек в первом столбце
    //обработка перемешивания всех карточек в рандомном порядке
    function compareRandom(a, b) {
      return Math.random() - 0.5;
    }

    this.msg.sort(compareRandom);
    //распределение карточек по трем столбцам
    for (i; i < this.msg.length - 1; i++) {
      if (i < fcl) {
        this.msg[i].text = this.msg[i].sourceText;
        this.msg[i].lang = true;
        this.msg[i].clr = Math.floor(Math.random() * 5);
        this.msg[i].leave = false;
        this.collums[0].push(this.msg[i]);
      } else {
        this.msg[i].text = this.msg[i].sourceText;
        this.msg[i].lang = true;
        this.msg[i].clr = Math.floor(Math.random() * 5);
        this.msg[i].leave = false;
        this.collums[1].push(this.msg[i]);
        i++;
        this.msg[i].text = this.msg[i].sourceText;
        this.msg[i].lang = true;
        this.msg[i].clr = Math.floor(Math.random() * 5);
        this.msg[i].leave = false;
        this.collums[2].push(this.msg[i]);
      }
      
    }
    // сортировка карточек в столбце
    this.collums.forEach(el => {
      el.sort(function(a, b) {
        return a.sourceText.length - b.sourceText.length;
      });
    });
            
    var date = new Date();
    var dayToday = date.getDate()
    var monthToday = date.getMonth()
    this.dateToday = dayToday + " " +this.months[monthToday]
  });     
  },
  methods: {
    //удаление карточки по даблклику по столбцам
    deleteEvent: function(index, ind) {
      
        this.collums[ind].splice(index, 1);
              
    },
    //изменение языка по клику с русского на английский с возвращением английского языка через 3 секунды
    cngLng: function(index, ind) {
      var set;
      var stack = this.collums[ind][index].sourceText;
      if (this.collums[ind][index].lang === true) {        
        this.collums[ind][index].sourceText = this.collums[ind][index].translation;
        this.collums[ind][index].lang = !this.collums[ind][index].lang;   
        var self = this;
        set = setTimeout(function() {
          self.collums[ind][index].sourceText = stack;
          self.collums[ind][index].lang = !self.collums[ind][index].lang
        }, 6000);     
      }
    },
    
   
    // вывод окна помощи
    helpOn(){
      this.HelpActive = !this.HelpActive
    },
    addOn(){
      this.addActive = !this.addActive
    },
    changeSkin:  function() {
      this.skin += 1
      if (this.skin === 3){
        this.skin = 0;
      }
      
    },
    editCard(index, ind){
      this.editItem.theme = this.collums[ind][index].theme;
      this.editItem.sourceText = this.collums[ind][index].sourceText;
      this.editItem.translation = this.collums[ind][index].translation;
      this.editItem.index = index;
      this.editItem.ind = ind;
      this.showEdit = true
    }
  },
  computed:{
    
  }
};