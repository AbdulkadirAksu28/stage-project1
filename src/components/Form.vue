<template>
  <!-- Page content-->
  <section class="py-5">
    <div class="container px-5">
      <!-- Contact form-->
      <div class="bg-light rounded-3 py-5 px-4 px-md-6 mb-5">
        <div class="text-center mb-5">
          <div class="feature bg-dark bg-gradient text-white rounded-3 mb-3">
            <i class="bi bi-envelope"></i>
          </div>
          <h1 class="fw-bolder">Get in touch</h1>
          <p class="lead fw-normal text-muted mb-0">
            We'd love to hear from you
          </p>
        </div>
        <div class="row gx-5 justify-content-center">
          <div class="col-lg-8 col-xl-12">
            <!-- * * * * * * * * * * * * * * *-->
            <!-- * * SB Forms Contact Form * *-->
            <!-- * * * * * * * * * * * * * * *-->
            <!-- This form is pre-integrated with SB Forms.-->
            <!-- To make this form functional, sign up at-->
            <!-- https://startbootstrap.com/solution/contact-forms-->
            <!-- to get an API token!-->
            <div>
              <form
                novalidate
                id="contactForm"
                data-sb-form-api-token="API_TOKEN"
              >
                <div class="row all">
                  <div class="col-md-1"></div>
                  <div class="col-md-5">
                    <div><strong> Personal Information </strong></div>
                    <div class="form-group">
                      <label class="m-2" for="name">Name</label>
                      <input
                        id="name"
                        type="text"
                        class="form-control mb-2"
                        placeholder="Your name"
                        v-model="info.name"
                      />
                      <span class="text-danger" v-if="v$.name.$error"
                        >{{ v$.name.$errors[0].$message }}
                      </span>
                    </div>

                    <div class="form-group">
                      <label class="m-2" for="surname">Surname</label>
                      <input
                        id="surname"
                        type="text"
                        class="form-control mb-2"
                        placeholder="Your surname"
                        v-model="info.surname"
                      />
                      <span class="text-danger" v-if="v$.surname.$error"
                        >{{ v$.surname.$errors[0].$message }}
                      </span>
                    </div>

                    <div class="form-group">
                      <label class="m-2" for="email">Email</label>
                      <input
                        id="email"
                        type="text"
                        class="form-control mb-2"
                        placeholder="Your email"
                        v-model="info.email"
                      />
                      <span class="text-danger" v-if="v$.email.$error"
                        >{{ v$.email.$errors[0].$message }}
                      </span>
                    </div>

                    <div class="form-group">
                      <label class="m-2" for="adress">Adress</label>
                      <input
                        id="adress"
                        type="text"
                        class="form-control mb-2"
                        placeholder="Your adress"
                        v-model="info.adress"
                      />
                      <span class="text-danger" v-if="v$.adress.$error"
                        >{{ v$.adress.$errors[0].$message }}
                      </span>
                    </div>
                    <div class="row">
                      <div class="form-group col-md-4">
                        <label class="m-2" for="city">City</label>
                        <input
                          id="city"
                          type="text"
                          class="form-control mb-2"
                          placeholder="Your city"
                          v-model="info.city"
                        />
                        <span class="small text-danger" v-if="v$.city.$error"
                          >{{ v$.city.$errors[0].$message }}
                        </span>
                      </div>
                      <div class="form-group col-md-5">
                        <label class="m-2" for="province">Province</label>
                        <select
                          id="province"
                          type="text"
                          class="form-select mb-2"
                          v-model="info.province"
                        >
                          <option v-for="p in provinces" :key="p.name">
                            {{ p.name }}
                          </option>
                        </select>
                        <span
                          class="small text-danger"
                          v-if="v$.province.$error"
                          >{{ v$.province.$errors[0].$message }}
                        </span>
                      </div>
                      <div class="form-group col-md-3">
                        <label class="m-2" for="zipcode">Zip</label>
                        <input
                          id="zipcode"
                          type="number"
                          class="form-control mb-2"
                          placeholder="e.g.3550"
                          v-model="info.zip"
                        />
                        <span class="small text-danger" v-if="v$.zip.$error"
                          >{{ v$.zip.$errors[0].$message }}
                        </span>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="m-2" for="birth-date">Date of Birth</label>
                      <input
                        type="date"
                        id="start"
                        name="trip-start"
                        class="form-control mb-2"
                        min="1980-01-01"
                        :max="nowDate"
                        v-model="info.birth"
                      />
                      <span class="text-danger" v-if="v$.birth.$error"
                        >{{ v$.birth.$errors[0].$message }}
                      </span>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div><strong> School Information </strong></div>
                    <div class="form-group">
                      <label class="m-2" for="school">School name</label>
                      <input
                        id="school"
                        type="text"
                        class="form-control mb-2"
                        placeholder="School name"
                        v-model="info.schoolName"
                      />
                      <span class="text-danger" v-if="v$.schoolName.$error"
                        >{{ v$.schoolName.$errors[0].$message }}
                      </span>
                    </div>
                    <div class="form-group">
                      <label class="m-2" for="school-adress"
                        >School adress</label
                      >
                      <input
                        id="school-adress"
                        type="text"
                        class="form-control mb-2"
                        placeholder="School adress"
                        v-model="info.schoolAdress"
                      />
                      <span class="text-danger" v-if="v$.schoolAdress.$error"
                        >{{ v$.schoolAdress.$errors[0].$message }}
                      </span>
                    </div>
                    <div class="row">
                      <div class="form-group col-md-4">
                        <label class="m-2" for="school-city">City</label>
                        <input
                          id="city"
                          type="text"
                          class="form-control mb-2"
                          placeholder="School city"
                          v-model="info.schoolCity"
                        />
                        <span
                          class="small text-danger"
                          v-if="v$.schoolCity.$error"
                          >{{ v$.schoolCity.$errors[0].$message }}
                        </span>
                      </div>
                      <div class="form-group col-md-5">
                        <label class="m-2" for="school-province"
                          >Province</label
                        >
                        <select
                          id="school-province"
                          type="text"
                          class="form-select mb-2"
                          v-model="info.schoolProvince"
                        >
                          <option v-for="p in provinces" :key="p.name">
                            {{ p.name }}
                          </option>
                        </select>
                        <span
                          class="small text-danger"
                          v-if="v$.schoolProvince.$error"
                          >{{ v$.schoolProvince.$errors[0].$message }}
                        </span>
                      </div>
                      <div class="form-group col-md-3">
                        <label class="m-2" for="school-zip">Zip</label>
                        <input
                          id="school-zip"
                          type="number"
                          class="form-control mb-2"
                          placeholder="e.g.3500"
                          v-model="info.schoolZip"
                        />
                        <span
                          class="small text-danger"
                          v-if="v$.schoolZip.$error"
                          >{{ v$.schoolZip.$errors[0].$message }}
                        </span>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="m-2" for="department">Department</label>
                      <select
                        id="department"
                        class="form-select mb-2"
                        @change="onSelectChange()"
                        v-model="info.department"
                      >
                        <option value="" selected disabled>
                          Choose your department
                        </option>
                        <option
                          v-for="d in departments"
                          :key="d.name"
                          :value="d.name"
                        >
                          {{ d.name }}
                        </option>
                      </select>
                      <span class="text-danger" v-if="v$.department.$error"
                        >{{ v$.department.$errors[0].$message }}
                      </span>
                    </div>
                    <div class="form-group">
                      <label class="m-2" for="course">Course</label>
                      <select
                        id="course"
                        class="form-select mb-2"
                        v-model="info.course"
                        disabled
                      >
                        <option value="" selected disabled>
                          Choose your course
                        </option>
                      </select>
                      <span class="text-danger" v-if="v$.course.$error"
                        >{{ v$.course.$errors[0].$message }}
                      </span>
                    </div>
                    <div class="form-group">
                      <label class="py-2" for="status">Status</label>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="full-time"
                        v-model="info.status"
                        checked
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        Full-time
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="part-time"
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        Part-time
                      </label>
                    </div>
                  </div>
                  </div>
                  <div class="row all">
                    <div class="col-md-1"></div>
                    <div class="col-md-5 form-group button mt-4">
                      <input
                        @click="submitForm"
                        type="button"
                        value="Submit"
                        class="btn btn-dark"
                      />
                    </div>
                  </div>
                </div>
              </form>
              <!-- <div>
                <pre>{{ info }}</pre>
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <!-- Contact cards-->
      <div class="row gx-5 row-cols-2 row-cols-lg-4 py-5">
        <div class="col">
          <div class="feature bg-dark bg-gradient text-white rounded-3 mb-3">
            <i class="bi bi-chat-dots"></i>
          </div>
          <div class="h5 mb-2">Chat with us</div>
          <p class="text-muted mb-0">
            Chat live with one of our support specialists.
          </p>
        </div>
        <div class="col">
          <div class="feature bg-dark bg-gradient text-white rounded-3 mb-3">
            <i class="bi bi-people"></i>
          </div>
          <div class="h5">Ask the community</div>
          <p class="text-muted mb-0">
            Explore our community forums and communicate with other users.
          </p>
        </div>
        <div class="col">
          <div class="feature bg-dark bg-gradient text-white rounded-3 mb-3">
            <i class="bi bi-question-circle"></i>
          </div>
          <div class="h5">Support center</div>
          <p class="text-muted mb-0">
            Browse FAQ's and support articles to find solutions.
          </p>
        </div>
        <div class="col">
          <div class="feature bg-dark bg-gradient text-white rounded-3 mb-3">
            <i class="bi bi-telephone"></i>
          </div>
          <div class="h5">Call us</div>
          <p class="text-muted mb-0">
            Call us during normal business hours at (555) 892-9403.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import { computed, reactive } from "vue";
import provinces from "@/lookup/provinces";
import departments from "@/lookup/departments";
import useVuelidate from "@vuelidate/core";
import { required, email, alpha, numeric } from "@vuelidate/validators";

export default {
  name: "Form",
  props: {
    msg: String,
  },
  components: {},
  data() {
    return {
      nowDate: new Date().toISOString().slice(0, 10),
    };
  },
  setup() {
    const info = reactive({
      name: "",
      surname: "",
      email: "",
      birth: "",
    });

    const rules = computed(() => {
      return {
        name: { required, alpha },
        surname: { required, alpha },
        email: { required, email },
        adress: { required },
        city: { required },
        province: { required },
        birth: { required },
        zip: { required, numeric },
        schoolName: { required },
        schoolAdress: { required, alpha },
        schoolCity: { required },
        schoolProvince: { required },
        schoolZip: { required, numeric },
        department: { required },
        course: { required },
      };
    });

    const v$ = useVuelidate(rules, info);
    return {
      provinces,
      departments,
      info,
      v$,
    };
  },
  methods: {
    onSelectChange: function () {
      var d = document.getElementById("department").value;
      var v = departments.find((x) => x.name == d);
      console.log(v.courses);
      var select = document.getElementById("course");
      select.disabled = false;
      select.options.length = 0;

      for (var i = 0; i < v.courses.length; i++) {
        var opt = v.courses[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
      }
    },
    submitForm() {
      console.log(this.v$);
      this.v$.$validate();
      if (!this.v$.$error) {
        window.location.reload();
        // console.log(info)
      }
      // else {
      //   alert("fail");
      // }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.feature {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  font-size: 1.5rem;
}
.small {
  font-size: 13px;
}

.button {
  text-align: left;
}

.all {
  text-align: left;
}

.mx-6 {
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
