<template>
  <div id="app" :style="{background: backgroundClrs[skin].background}">
    <header class="header">
      <div class="date" :style="{background: backgroundClrs[skin].dateBack}">
        <h4>
          <b>{{dateToday}}</b>
        </h4>
      </div>
      <h1 :style="{color: backgroundClrs[skin].headerFontClr}">
        <b>New Phrases for Today</b>
      </h1>
      <div class="change-skin" @click="changeSkin(skin)"> <div class="circle-font" style="padding: 0 0 3px 0" >skin</div> </div>
      <div class="help-img" @click="helpOn()"> <div class="circle-font" style="font-weight: bold; font-size: 30px;" >?</div> </div>
    </header>

    <div class="container">
      <div class="row">
        <div class="col col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <div
            class="card"
            style="width: 18rem;"
            :style="{background: backgroundClrs[skin].cardclr[item.clr]}"
            v-for="(item, index) of firstcol"
            :key="msg.id"
            @click="cngLngFC(index)"
            @dblclick="deleteEventFC(index)"
            :class="{rotate: item.lang}"
          >
            <img
              class="rot-img"
              src="src\components\Img\rotate.png"
              alt="поворот карты"
              @click="cngLngFC(index)"
            >
            <div class="card-body">
              <h5 class="card-title">{{item.theme}}</h5>
              <p class="card-text">{{item.sourceText}}</p>
            </div>
          </div>
        </div>
        <div class="col col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <div
            class="card"
            style="width: 18rem;"
            v-bind:style="{background: backgroundClrs[skin].cardclr[item.clr]}"
            v-for="(item, index) of seccol"
            :key="seccol.index"
            @click="cngLngSC(index)"
            @dblclick="deleteEventSC(index)"
            :class="{rotate: item.lang}"
          >
            <img
              class="rot-img"
              src="src\components\Img\rotate.png"
              alt="поворот карты"
              @click="cngLngSC(index)"
            >
            <div class="card-body">
              <h5 class="card-title">{{item.theme}}</h5>
              <p class="card-text">{{item.sourceText}}</p>
            </div>
          </div>
        </div>
        <div class="col col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <div
            class="card"
            style="width: 18rem;"
            v-bind:style="{background: backgroundClrs[skin].cardclr[item.clr]}"
            v-for="(item, index) of thirdcol"
            :key="msg.id"
            @click="cngLngTC(index)"
            @dblclick="deleteEventTC(index)"
            :class="{rotate: item.lang}"
          >
            <img
              class="rot-img"
              src="src\components\Img\rotate.png"
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
    <div v-show="HelpActive">
      <Help :HelpActive="HelpActive" @value="HelpActive = $event"></Help>
    </div>
  </div>
</template>

<script src="./components/App/app.js"></script>

<style src="./components/App/app.css"></style>
