<template>
  <div>
    <h5> Internship form </h5>
    <form novalidate>
      <div class="row">
        <div class="col-md-6">
          <div><strong> Personal Information </strong></div>
          <div class="form-group">
            <label class="m-2" for="name">Name</label>
            <input id="name" type="text" class="form-control m-2" placeholder="Your name">
          </div>
          <div class="form-group">
            <label class="m-2" for="surname">Surname</label>
            <input id="surname" type="text" class="form-control m-2" placeholder="Your surname">
          </div>
          <div class="form-group">
            <label class="m-2" for="adress">Adress</label>
            <input id="adress" type="text" class="form-control m-2" placeholder="Your adress">
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label class="m-2" for="adress">City</label>
              <input id="city" type="text" class="form-control m-2" placeholder="Your city">
            </div>
            <div class="form-group col-md-4">
              <label class="m-2" for="Province">Province</label>
              <input id="Province" type="text" class="form-control m-2" placeholder="Your province">
            </div>
            <div class="form-group col-md-3">
              <label class="m-2" for="zipcode">Postal code</label>
              <input id="zipcode" type="number" class="form-control m-2" placeholder="Your postal code">
            </div>
          </div>
          <div class="form-group">
            <label class="m-2" for="birth-date">Date of Birth</label>
            <date-picker v-model="date" type="date" class="form-control m-2"></date-picker>
          </div>
          </div>
        <div class="col-md-6">
          <div><strong> School Information </strong></div>
            <div class="form-group">
            <label class="m-2" for="school">School name</label>
            <input id="school" type="text" class="form-control my-2" placeholder="School name">
          </div>
          <div class="form-group">
            <label class="m-2" for="school-adress">School adress</label>
            <input id="school-adress" type="text" class="form-control my-2" placeholder="School adress">
          </div>
          <div class="form-group">
            <label class="m-2" for="department">Department</label>
            <select id="department" class="form-select my-2">
              <option value="" selected disabled>Choose your department</option>
              <option value="1">Business</option>
              <option value="2">Digital</option>
              <option value="3">Education</option>
              <option value="4">Healthcare</option>
              <option value="5">School of arts</option>
              <option value="6">Music</option>
              <option value="7">Social work</option>
            </select>
          </div>
          <div class="form-group">
            <label class="m-2" for="course">Course</label>
            <select id="course" class="form-select my-2">
              <option value="" selected disabled>Choose your course</option>
              <option value="1">Selected department course 1</option>
              <option value="2">Selected department course 2</option>
              <option value="3">Selected department course 3</option>
              <option value="4">Selected department course 4</option>
              <option value="5">Selected department course 5</option>
              <option value="6">Selected department course 6</option>
              <option value="7">Selected department course 7</option>
            </select>
          </div>
        </div>
        </div>
    </form>
  </div>
</template>

<script>
import DatePicker from 'vue3-datepicker'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    DatePicker
  },
  data(){
    return {
      date: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
