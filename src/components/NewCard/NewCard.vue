<template>
  <div class="edit-win">
      <div class="edit-win-content">
      <div class="text-header">введите новые данные</div>
    
    <!-- форма ввода значения заголовка карты -->
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">заголовок карты</span>
      </div>
      <input
        type="text"
        class="form-control"
        aria-describedby="basic-addon1"
        ref="theme"
      >
    </div>

    <!-- форма ввода значения текста на английском -->
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">текст на английском</span>
      </div>
      <input
        type="text"
        class="form-control"
        aria-describedby="basic-addon1"
        ref="sourceText"
      >
    </div>

    <!-- форма ввода значения текста на русском -->
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">текст на русском</span>
      </div>
      <input
        type="text"
        class="form-control"
        aria-describedby="basic-addon1"
        ref="translation"
      >
    </div>

    <!-- кнопки сохранить и отменить для окна новой карты -->
    <div class="btns">
        <div class="btn btn-primary btn-change" @click="changeCard()">Сохранить</div>
        <div class="btn btn-primary btn-cancel" @click="cancel()">отменить</div>
    </div>
    
    </div>
  </div>
</template>

<script src="./NewCard.js"></script>

<style src="./NewCard.css"></style>
