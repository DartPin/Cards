<template>
  <div id="app" :style="{background: backgroundClrs[skin].background}">
    <header class="header">
      <div class="date" :style="{background: backgroundClrs[skin].dateBack}">
        <h4>
          <b>{{dateToday}}</b>
        </h4>
      </div>
      <h1 :style="{color: backgroundClrs[skin].headerFontClr, background: backgroundClrs[skin].headerBackground}">
        <b>New Phrases for Today</b>
      </h1>
      <div class="change-skin" @click="changeSkin(skin)" :style="{background: backgroundClrs[skin].dateBack}"> <div class="circle-font" style="padding: 0 0 3px 0" >skin</div> </div>
      <div class="help-img" @click="helpOn()" :style="{background: backgroundClrs[skin].dateBack}"> <div class="circle-font" style="font-weight: bold; font-size: 30px;" >?</div> </div>
    </header>

    <div class="container">
      <div class="row">
        <div class="col col-sm-12 col-md-12 col-lg-4 col-xl-4" v-for="(col, ind) of collums" :key="col.id">
          <div
            class="card"
            :style="{background: backgroundClrs[skin].cardclr[item.clr]}"
            v-for="(item, index) of col"
            :key="item.id"
            @click="cngLng(index, ind)"
            @dblclick="deleteEvent(index, ind)"
            :class="{rotate: item.lang}"
          > 
            <img
              class="rot-img"
              src="src\components\Img\rotate.png"
              alt="поворот карты"
              @click="cngLng(index, ind)"
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
