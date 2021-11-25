<template>
  <body class="d-flex flex-column">
    <main class="flex-shrink-0">
      <NavigationBar/>
      <Form msg="Welcome to our first internship project" />
    </main>
    <FooterComponent />
  </body>

  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
    rel="stylesheet"
  />
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import Form from "./components/Form.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    Form,
    FooterComponent,
    NavigationBar
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>
