<template>
  <div id="app">
    <header class="header">
      <div class="date">
        <h4>
          <b>{{showDate}}</b>
        </h4>
      </div>
      <h1 style="color: #0078bf">
        <b>New phrases for today</b>
      </h1>
      <img class="help-img" src="src\assets\help.png" alt="Помощь" @click="helpOn()">
    </header>

    <div class="container">
      <div class="row">
        <div class="col col-xs col-md">
          <div
            class="card"
            style="width: 18rem;"
            :style="{background: item.clr}"
            v-for="(item, index) of firstcol"
            :key="msg.id"
            @click="cngLngFC(index)"
            @dblclick="deleteEventFC(index)"
            :class="{rotate: item.lang}"
          >
            <img
              class="rot-img"
              src="src\assets\rotate.png"
              alt="поворот карты"
              @click="cngLngFC(index)"
            >
            <div class="card-body">
              <h5 class="card-title">{{item.theme}}</h5>
              <p class="card-text">{{item.sourceText}}</p>
            </div>
          </div>
        </div>
        <div class="col col-xs col-md">
          <div
            class="card"
            style="width: 18rem;"
            v-bind:style="{background: item.clr}"
            v-for="(item, index) of seccol"
            :key="seccol.index"
            @click="cngLngSC(index)"
            @dblclick="deleteEventSC(index)"
            :class="{rotate: item.lang}"
          >
            <img
              class="rot-img"
              src="src\assets\rotate.png"
              alt="поворот карты"
              @click="cngLngSC(index)"
            >
            <div class="card-body">
              <h5 class="card-title">{{item.theme}}</h5>
              <p class="card-text">{{item.sourceText}}</p>
            </div>
          </div>
        </div>
        <div class="col col-xs col-md">
          <div
            class="card"
            style="width: 18rem;"
            v-bind:style = "{background: item.clr}"
            v-for = "(item, index) of thirdcol"
            :key = "msg.id"
            @click = "cngLngTC(index)"
            @dblclick="deleteEventTC(index)"
            :class="{rotate: item.lang}"
          >
            <img
              class="rot-img"
              src="src\assets\rotate.png"
              alt="поворот карты"
              @click="cngLngTC(index)"
            >
            <div class="card-body">
              <h5 class="card-title">{{item.theme}}</h5>
              <p class="card-text">{{item.sourceText}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show='HelpActive'>
      <Help :HelpActive = "HelpActive"  @value = 'HelpActive = $event'></Help>
    </div>
    {{HelpActive}}
    
  </div>
</template>

<script>
import Help from './components/Help.vue'

export default {
  name: "app",
  components: {
    Help
  },
  data() {
    return {
      HelpActive: false,
      isActive: false,
      msg: [
        {
          theme: "Conversation",
          sourceText: "Do you speak a language other than English?",
          translation: "Говоришь ли ты на другом языке кроме английского?"
        },
        {
          theme: "Eating out",
          sourceText: "Excuse me. We would like to order, please.",
          translation: "Извините, мы бы хотели сделать заказ."
        },
        {
          theme: "Eating out",
          sourceText: "A table for two, please.",
          translation: "Столик на двоих, пожалуйста."
        },
        {
          theme: "Eating out",
          sourceText: "Is there a house specialty?",
          translation: "Есть ли у заведения фирменное блюдо?"
        },
        {
          theme: "Eating out",
          sourceText: "Goodbye, please come again.",
          translation: "До свидания, приходите ещë."
        },
        {
          theme: "Eating out",
          sourceText: "Excuse me, could you bring some more sugar, please?",
          translation: "Извините, могли бы вы принести сахар, пожалуйста."
        },
        {
          theme: "At the station",
          sourceText: "Where can I buy a bus ticket?",
          translation: "Где я могу купить билет на автобус?"
        },
        {
          theme: "At the station",
          sourceText: "Three tickets, please.",
          translation: "Три билета, пожалуйста."
        },
        {
          theme: "At the station",
          sourceText: "I would like to reserve a seat.",
          translation: "Я хочу забронировать место."
        },
        {
          theme: "Travel",
          sourceText: "Could you please show me where it is on the map?",
          translation: "Могли бы вы, пожалуйста, показать мне это на карте?"
        },
        {
          theme: "Travel",
          sourceText: "Is it far from here?",
          translation: "Это далеко отсюда?"
        },
        {
          theme: "Travel",
          sourceText: "Go straight and then turn right.",
          translation: "Идите прямо, а затем поверните направо."
        },
        {
          theme: "At the doctor",
          sourceText: "I need a sick note. It has gotten worse.",
          translation: "Мне нужна медицинская справка. Мне стало хуже."
        },
        {
          theme: "At the hotel",
          sourceText: "The heating does not work and my neighbour is too loud.",
          translation: "Тут не работает отопление и мой сосед слишком шумный."
        },
        {
          theme: "At the hotel",
          sourceText:
            "I would like to change my room, because I requested a room with a view.",
          translation:
            "Я хочу поменять свой номер, поскольку я просил комнату с красивым видом."
        },
        {
          theme: "At the hotel",
          sourceText: "I want to make a reservation for the room.",
          translation: "Я хочу забронировать номер."
        },
        {
          theme: "At the shopping mall",
          sourceText: "Can I try it on?",
          translation: "Можно я это примерю?"
        },
        {
          theme: "At the shopping mall",
          sourceText: "I would like another color.",
          translation: "Я бы хотел другой цвет."
        },
        {
          theme: "At the shopping mall",
          sourceText: "Where is the cashdesk?",
          translation: "Где касса?"
        },
        {
          theme: "At the shopping mall",
          sourceText: "I find it too expensive.",
          translation: "Я считаю, что это слишком дорого."
        },
        {
          theme: "At the shopping mall",
          sourceText: "I would like to return my purchase and get a refund.",
          translation: "Я хочу вернуть свою покупку и получить деньги обратно."
        }
      ],
      firstcol: [],
      seccol: [],
      thirdcol: [],
      text: "",
      clrs: ["", "#96a3f1", "#f19696", "#a1f196", "#717271"],
      showDate: "31 JAN"
    };
  },
  mounted: function() {
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
        this.msg[i].clr = this.clrs[Math.floor(Math.random() * 5)];
        this.firstcol.push(this.msg[i]);
      } else {
        this.msg[i].text = this.msg[i].sourceText;
        this.msg[i].lang = true;
        this.msg[i].clr = this.clrs[Math.floor(Math.random() * 5)];
        this.seccol.push(this.msg[i]);
        i++;
        this.msg[i].text = this.msg[i].sourceText;
        this.msg[i].lang = true;
        this.msg[i].clr = this.clrs[Math.floor(Math.random() * 5)];
        this.thirdcol.push(this.msg[i]);
      }
    }
    // сортировка карточек в столбце
    this.firstcol.sort(function(a, b) {
      return a.sourceText.length - b.sourceText.length;
    });
    this.seccol.sort(function(a, b) {
      return a.sourceText.length - b.sourceText.length;
    });
    this.thirdcol.sort(function(a, b) {
      return a.sourceText.length - b.sourceText.length;
    });
  },
  methods: {
    //удаление карточки по даблклику по столбцам
    deleteEventFC: function(index) {
      this.firstcol.splice(index, 1);
    },
    deleteEventSC: function(index) {
      this.seccol.splice(index, 1);
    },
    deleteEventTC: function(index) {
      this.thirdcol.splice(index, 1);
    },
    //изменение языка по клику с русского на английский с возвращением английского языка через 3 секунды
    cngLngFC: function(index) {
      var set;
      var stack = this.firstcol[index].sourceText;
      if (this.firstcol[index].lang === true) {
        this.firstcol[index].sourceText = this.firstcol[index].translation;
        this.firstcol[index].lang = !this.firstcol[index].lang;
        var self = this;
        var set = setTimeout(function() {
          self.firstcol[index].sourceText = stack;
          self.firstcol[index].lang = !self.firstcol[index].lang;
        }, 6000);
      } else {
        clearTimeout(set);
      }
    },
    cngLngSC: function(index) {
      var set;
      var stack = this.seccol[index].sourceText;
      if (this.seccol[index].lang === true) {
        this.seccol[index].sourceText = this.seccol[index].translation;
        this.seccol[index].lang = !this.seccol[index].lang;
        var self = this;
        var set = setTimeout(function() {
          self.seccol[index].sourceText = stack;
          self.seccol[index].lang = !self.seccol[index].lang;
        }, 6000);
      } else {
        clearTimeout(set);
      }
    },
    cngLngTC: function(index) {
      var set;
      var stack = this.thirdcol[index].sourceText;
      if (this.thirdcol[index].lang === true) {
        this.thirdcol[index].sourceText = this.thirdcol[index].translation;
        this.thirdcol[index].lang = !this.thirdcol[index].lang;
        var self = this;
        var set = setTimeout(function() {
          self.thirdcol[index].sourceText = stack;
          self.thirdcol[index].lang = !self.thirdcol[index].lang;
        }, 6000);
      } else {
        clearTimeout(set);
        //this.thirdcol[index].sourceText = stack;
        //alert(this.thirdcol[index].sourceText)
        //this.thirdcol[index].lang = this.thirdcol[index].lang;
      }
    },
    helpOn(){
      this.HelpActive = !this.HelpActive
    }
  },
  computed:{
    
  }  
};
</script>

<style>
.card {
  position: relative;
  transition: transform 1s ease;
}
.rotate {
  transform: rotateY(360deg);
}
.card {
  margin: 0px 0px 10px 0px;
}
.card:hover {
  padding: 15px;
  box-shadow: 0px 0px 20px 4px #144d98;
  border-radius: 5px;
  cursor: pointer;
}
.show {
  display: none;
}
h1 {
  margin: -50px 0 30px 130px;
}
.date {
  width: 60px;
  height: 60px;
  background: #0078bf;
  margin: 50px 0 0 0;
  color: #ffffff;
  text-align: center;
}
.rot-img {
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 20px;
  margin-top: 20px;
  width: 20px;
  height: 20px;
}
.rot-img:hover {
  cursor: pointer;
}
.help-img {
  position: absolute;
  right: 0;
  margin: -80px 80px 0 0;
  transition: transform 1s ease;
  cursor: pointer;
}
.help-img:hover{
  transform: rotateZ(360deg)
}
.header {
  position: relative;
}


.b-popup {
  width: 100%;
  height: 2000px;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: fixed;
  top: 0px;
}
.b-popup .b-popup-content {
  margin: 40px auto 0px auto;
  width: 60%;
  height: 60%px;
  padding: 10px;
  background-color: #e3f4f8;
  border-radius: 5px;
  box-shadow: 0px 0px 20px 4px #144d98;
}
</style>
