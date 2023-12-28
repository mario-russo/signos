<template>
  <div class="newsletter">
    <div class="container m-auto">
      <div class="row justify-content-center">
        <div class="col-xl-7 col-lg-7">
          <div class="section-title text-center">
            <h2>Horóscopo Newslatter</h2>
            <p>Receba nossos Hosróscopos diário através do E-mail</p>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-xl-7 col-lg-7">
          <form class="newsletter-form">
            <input type="email" placeholder="Enter your email..." required />
            <button type="submit">Enviar E-mail</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  outline: none;
}

a,
a:active,
a:focus {
  color: #6f6f6f;
  text-decoration: none;
  transition-timing-function: ease-in-out;
  -ms-transition-timing-function: ease-in-out;
  -moz-transition-timing-function: ease-in-out;
  -webkit-transition-timing-function: ease-in-out;
  -o-transition-timing-function: ease-in-out;
  transition-duration: 0.2s;
  -ms-transition-duration: 0.2s;
  -moz-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.section-title h2 {
  font-size: 36px;
  font-weight: 700;
  background-image: -webkit-linear-gradient(-30deg, #052157 0%, #91039f 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 14px;
}

.newsletter {
  padding: 5% 0 5%;
  background: url("~/assets/img/horos2.jpg") no-repeat center center;
  background-size: cover;
  position: relative;
  z-index: 2;
  min-height: 600px;
}

.newsletter:after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: -webkit-linear-gradient(-30deg, #91039f 0%, #052157 100%);
  opacity: 0.8;
  z-index: -1;
}

.newsletter .section-title {
  margin-bottom: 59px;
}

.newsletter .section-title h2 {
  background-image: -webkit-linear-gradient(-30deg, #ffffff 0%, #ffffff 100%);
}

.newsletter .section-title p {
  color: #fff;
}

.newsletter .newsletter-form {
  background: -webkit-linear-gradient(-30deg, #91039f 0%, #052157 100%);
  position: relative;
  height: 60px;
  padding-left: 10px;
  z-index: 2;
}

.newsletter .newsletter-form:after {
  position: absolute;
  content: "";
  left: -2px;
  right: -2px;
  top: -2px;
  bottom: -2px;
  background: -webkit-linear-gradient(-30deg, #91039f 0%, #91039f 100%);
  z-index: -1;
}

.newsletter .newsletter-form input {
  width: 100%;
  height: 100%;
  border: none;
  padding: 30px;
  background: #3f1667;
  color: #fff;
  padding-right: 200px;
}

.newsletter .newsletter-form input::-webkit-input-placeholder {
  color: #fff;
  opacity: 0.6;
}

.newsletter .newsletter-form input:-ms-input-placeholder {
  color: #fff;
  opacity: 0.6;
}

.newsletter .newsletter-form input::-ms-input-placeholder {
  color: #fff;
  opacity: 0.6;
}

.newsletter .newsletter-form input::placeholder {
  color: #fff;
  opacity: 0.6;
}

.newsletter .newsletter-form button {
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  width: 170px;
  background: -webkit-linear-gradient(-30deg, #91039f 0%, #052157 100%);
  outline: none;
  border: none;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
}

.newsletter .newsletter-form button:hover {
  background: -webkit-linear-gradient(-30deg, #052157 0%, #91039f 100%);
}
</style>
