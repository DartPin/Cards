<template>
    <div class="b-popup" v-bind:style="{display: HelpActive}">
      <img class = "close-img" src="..\assets\close.png" alt="" @click="help()">
      <div class="b-popup-content">
        Описание и руководство к использованию <br>
        ● На основе предложенного макета в проекте создана HTML страница с тремя колонками для элементов с текстом, олицетворяющих карточки с лексикой. Структура карточки позволяет разместить текст заголовка и текст содержания. Карточки разного цвета, как продемонстрировано на макете. <br>
        ● Предложенные к заданию данные содержат список тем, фраз на иностранном языке и соответствующих им переводов. Программным образом выполнено наполнение колонки карточками, используя тексты на иностранном языке. Цвет, а также тексты для заголовков и содержания выбраны случайным образом из предложенных к заданию данных. Использованны все данные, при этом первая колонка содержит от трех до пяти карточек(согласно заданию). Карточки упорядочены в каждой колонке по количеству слов - от большего к меньшему. <br>
        ● Реализовано интерактивное поведение карточек: <br>
        ○ Подсветка при наведение курсора; <br>
        ○ Одинарное нажатие меняет текст содержания карточки на соответствующий перевод. Обратное изменение происходит через определенный интервал времени - 6 секунд; <br>
        ○ Двойное нажатие удаляет карточку. <br>
        {{HelpActive}}
      </div>
    
    </div>
</template>

<script>

export default {
  name: "Help",
  props: ["HelpActive"],
  data() {
    return {
    };
  },
  computed:{
    help: function(){
      this.HelpActive = "none";
      this.$emit('value', this.HelpActive)
    }
  }
};
</script>

<style>
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
.close-img{
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 19%;
  margin-top: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: transform 1s ease;
}
.close-img:hover{
  transform: rotateY(360deg);
}
</style>
