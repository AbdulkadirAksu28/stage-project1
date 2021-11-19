<template>
  <div>
    <form novalidate>
      <div class="row all">
        <div class="col-md-1"></div>
        <div class="col-md-5">
          <div><strong> Personal Information </strong></div>
          <div class="form-group">
            <label class="m-2" for="name">Name</label>
            <input id="name" type="text" class="form-control mb-2" placeholder="Your name" v-model="info.name">
          </div>
          <div class="form-group">
            <label class="m-2" for="surname">Surname</label>
            <input id="surname" type="text" class="form-control mb-2" placeholder="Your surname" v-model="info.surname">
          </div>
          <div class="form-group">
            <label class="m-2" for="adress">Adress</label>
            <input id="adress" type="text" class="form-control mb-2" placeholder="Your adress" v-model="info.adress">
          </div>
          <div class="row">
            <div class="form-group col-md-5">
              <label class="m-2" for="city">City</label>
              <input id="city" type="text" class="form-control mb-2" placeholder="Your city" v-model="info.city">
            </div>
            <div class="form-group col-md-5">
              <label class="m-2" for="province">Province</label>
              <select id="province" type="text" class="form-select mb-2" v-model="info.province">
                <option v-for="p in provinces" :key="p.name">{{p.name}} </option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label class="m-2" for="zipcode">Zip</label>
              <input id="zipcode" type="number" class="form-control mb-2" placeholder="e.g.3550" v-model="info.zip">
            </div>
          </div>
          <div class="form-group">
            <label class="m-2" for="birth-date">Date of Birth</label>
            <input type="date" id="start" name="trip-start" class="form-control mb-2" min="1950-01-01" max="2021-11-19" v-model="info.birth">
          </div>
          <div class="form-group button my-3">
            <input type="submit" value="Submit" class="btn btn-dark">
          </div>
          </div>
        <div class="col-md-5">
          <div><strong> School Information </strong></div>
            <div class="form-group">
            <label class="m-2" for="school">School name</label>
            <input id="school" type="text" class="form-control mb-2" placeholder="School name" v-model="info.schoolName">
          </div>
          <div class="form-group">
            <label class="m-2" for="school-adress">School adress</label>
            <input id="school-adress" type="text" class="form-control mb-2" placeholder="School adress" v-model="info.schoolAdress">
          </div>
            <div class="row">
            <div class="form-group col-md-5">
              <label class="m-2" for="school-city">City</label>
              <input id="city" type="text" class="form-control mb-2" placeholder="School city" v-model="info.schoolCity">
            </div>
            <div class="form-group col-md-5">
              <label class="m-2" for="school-province">Province</label>
              <select id="school-province" type="text" class="form-select mb-2" v-model="info.schoolProvince">
                <option v-for="p in provinces" :key="p.name">{{p.name}} </option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label class="m-2" for="school-zip">Zip</label>
              <input id="school-zip" type="number" class="form-control mb-2" placeholder="e.g.3500" v-model="info.schoolZip">
            </div>
          </div>
          <div class="form-group">
            <label class="m-2" for="department">Department</label>
            <select id="department" class="form-select mb-2" v-model="info.department">
              <option value="" selected disabled>Choose your department</option>
              <option v-for="d in departments" :key="d.name" :value="d.name">{{d.name}} </option>
            </select>
          </div>
          <div class="form-group">
            <label class="m-2" for="course">Course</label>
            <select id="course" class="form-select mb-2" v-model="info.course">
              <option value="" selected disabled>Choose your course</option>
              <option v-for="c in courses" :key="c.info.department" :value="c.name">{{c.info.department[i]}} </option>
              
            </select>
          </div>
        </div>
        </div>
    </form>
    <div><pre>{{info}}</pre></div>
  </div>
</template>

<script>
import {ref} from "vue";
import provinces from "@/lookup/provinces";
import departments from "@/lookup/departments";
import courses from "@/lookup/courses";

export default {
  name: 'Form',
  props: {
    msg: String
  },
  components:{

  },
  data(){
    return {
      date: ''
    }
  },
  setup(){
    const info = ref({
      birth: "1998-08-02"
    });
    return{
      info,
      provinces,
      departments,
      courses
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.button{
  text-align: left;
}

.all{
  text-align: left;
}

.mx-6{
    margin-right: 2.2rem !important;
    margin-left: 2.2rem !important;
}
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
