<template>
  <div id="app" class="container py-5">
    <!-- <h1 class="text-center">Vuejs Todo app</h1> -->

    <div class="conatiner">
      <fieldset :disabled="loading">
        <div class="row">
          <div class="col-sm-8">
            <div class="row">
              <div class="col sm-4">
                <div class="card shadow rounded">
                  <h6 class="card-header">Create New People</h6>
                  <div class="card-body">
                    <form
                      action="https://crud-backend-people.herokuapp.com/api/people"
                      method="POST"
                    >
                      <div class="form-group">
                        <label for="name">Your Name: </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          placeholder="People"
                          v-model="name"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <label for="email">Your Email: </label>
                        <br />
                        <input
                          id="email"
                          type="email"
                          name="email"
                          aria-describedby="emailHelp"
                          placeholder="people@mail.com"
                          v-model="email"
                          required
                        />
                      </div>
                      <button
                        class="btn btn-primary"
                        type="button"
                        @click="createData"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col sm-4">
                <div class="card shadow rounded">
                  <h6 class="card-header">Update Single People</h6>
                  <div class="card-body">
                    <form action="/" method="POST">
                      <div class="form-group">
                        <label for="ID">Id: </label>
                        <br />
                        <input
                          id="ID"
                          type="text"
                          name="ID"
                          placeholder="ID"
                          v-model="u_id"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <label for="name">New Name: </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          placeholder="New Name"
                          v-model="u_name"
                          required
                        />
                      </div>
                      <button
                        class="btn btn-primary"
                        type="button"
                        @click="updateData"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col sm-4">
                <div class="card shadow rounded">
                  <h6 class="card-header">Read Single People</h6>
                  <div class="card-body">
                    <form action="/" method="POST">
                      <div class="form-group">
                        <label for="ID">Id: </label>
                        <input
                          id="ID"
                          type="text"
                          name="ID"
                          placeholder="ID"
                          v-model="r_id"
                          required
                        />
                      </div>
                      <button
                        class="btn btn-primary"
                        type="button"
                        @click="fetchData"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col sm-4">
                <div class="card shadow rounded">
                  <h6 class="card-header">Delete Single People</h6>
                  <div class="card-body">
                    <form action="/" method="POST">
                      <div class="form-group">
                        <label for="ID">Id: </label>
                        <input
                          id="ID"
                          type="text"
                          name="ID"
                          placeholder="ID"
                          v-model="d_id"
                          required
                        />
                      </div>
                      <button
                        class="btn btn-primary"
                        type="button"
                        @click="deleteData"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col sm-4">
                <div class="card shadow rounded">
                  <h6 class="card-header">Read All People</h6>
                  <div class="card-body">
                    <form action="/" method="POST">
                      <button
                        class="btn btn-primary"
                        type="button"
                        @click="fetchAllData"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card shadow rounded">
              <h6 class="card-header">Response</h6>
              <div class="card-body">
                <h6 class="card-title">
                  Message:
                  <span :style="{ color: textColor }">{{ Message }}</span>
                </h6>
                <p
                  class="card-subtitle mb-2"
                  v-if="Request"
                  style="color: blue"
                >
                  Request: {{ Request }}
                </p>
                <div class="overflow-auto">
                  <p class="card-text" v-if="Results">Result: {{ Results }}</p>
                </div>
                <div class="loader" v-if="loading"></div>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      loading: false,
      r_id: "0",
      d_id: "",
      u_id: "",
      u_name: "",
      name: "",
      email: "",
      textColor: "",
      Message: "",
      Request: {},
      Results: [],
    };
  },
  methods: {
    fetchAllData() {
      this.loading = true;
      this.axios
        .get("https://crud-backend-people.herokuapp.com/api/people")
        .then((response) => {
          this.Results = response.data.Result;
          this.Message = response.data.Message;
          this.Request = response.data.Request;
          this.textColor = "green";
          console.log(response.data);
        })
        .catch((err) => {
          this.Message = err;
          this.Results = [];
          this.Request = {};
          this.textColor = "red";
        })
        .finally(() => {
          this.loading = false;
        });
    },
    createData() {
      this.loading = true;
      this.axios
        .post("https://crud-backend-people.herokuapp.com/api/people", {
          name: this.name,
          email: this.email,
        })
        .then((response) => {
          this.Results = response.data.Result;
          this.Message = response.data.Message;
          this.Request = response.data.Request;
          this.textColor = "green";
          console.log(response.data);
        })
        .catch((err) => {
          this.Message = err;
          this.Results = [];
          this.Request = {};
          this.textColor = "red";
        })
        .finally(() => {
          this.loading = false;
        });
    },
    fetchData() {
      this.loading = true;
      this.axios
        .get(
          "https://crud-backend-people.herokuapp.com/api/people/" + this.r_id
        )
        .then((response) => {
          this.Results = response.data.Result;
          this.Message = response.data.Message;
          this.Request = response.data.Request;
          this.textColor = "green";
          console.log(response.data);
        })
        .catch((err) => {
          this.Message = err;
          this.Results = [];
          this.Request = {};
          this.textColor = "red";
        })
        .finally(() => {
          this.loading = false;
        });
    },
    updateData() {
      this.loading = true;
      this.axios
        .put(
          "https://crud-backend-people.herokuapp.com/api/people/" + this.u_id,
          {
            newName: this.u_name,
          }
        )
        .then((response) => {
          this.Results = response.data.Result;
          this.Message = response.data.Message;
          this.Request = response.data.Request;
          this.textColor = "green";
          console.log(response.data);
        })
        .catch((err) => {
          this.Message = err;
          this.Results = [];
          this.Request = {};
          this.textColor = "red";
        })
        .finally(() => {
          this.loading = false;
        });
    },
    deleteData() {
      this.loading = true;
      this.axios
        .delete(
          "https://crud-backend-people.herokuapp.com/api/remove/" + this.d_id
        )
        .then((response) => {
          this.Results = response.data.Result;
          this.Message = response.data.Message;
          this.Request = response.data.Request;
          this.textColor = "green";
          console.log(response.data);
        })
        .catch((err) => {
          this.Message = err;
          this.Results = [];
          this.Request = {};
          this.textColor = "red";
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style>
.card {
  margin-bottom: 25px;
}
.loader {
  /* Loader Div Class */
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  background-color: #eceaea;
  background-image: url("./assets/download.gif");
  background-size: 50px;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 10000000;
  opacity: 0.4;
  filter: alpha(opacity=40);
}
</style>

