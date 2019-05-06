<template>
  <!-- окно изменения карт -->
  <div class="edit-win">
    <div class="edit-win-content">
      <div class="text-header">введите новые данные</div>

      <!-- Форма ввода заголовка карты -->
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">заголовок карты</span>
        </div>
        <!-- editItem.theme полученная из App.vue переменная со значением темы-->
        <input
          type="text"
          class="form-control"
          placeholder="Имя пользователя"
          aria-label="Имя пользователя"
          aria-describedby="basic-addon1"
          :value="editItem.theme"
          ref="theme"
        >
      </div>
      
      <!-- форма ввода для значения карты на английском языке-->
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">текст на английском</span>
        </div>
        <!-- editItem.sourceText полученная из App.vue переменная со значением текста на английском-->
        <input
          type="text"
          class="form-control"
          placeholder="Имя пользователя"
          aria-label="Имя пользователя"
          aria-describedby="basic-addon1"
          :value="editItem.sourceText"
          ref="sourceText"
        >
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">текст на русском</span>
        </div>
        <!-- editItem.translation полученная из App.vue переменная со значением текста на русском-->
        <input
          type="text"
          class="form-control"
          placeholder="Имя пользователя"
          aria-label="Имя пользователя"
          aria-describedby="basic-addon1"
          :value="editItem.translation"
          ref="translation"
        >
      </div>

      <!-- Кнопки обработки событий "Изменить" и "Отменить"-->
      <div class="btns">
        <div class="btn btn-primary btn-change" @click="changeCard()">Изменить</div>
        <div class="btn btn-primary btn-cancel" @click="cancel()">отменить</div>
      </div>
    </div>
  </div>
</template>

<script src="./Edit.js"></script>

<style src="./Edit.css"></style>
