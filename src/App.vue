<template>
  <div id="app" class="container py-5">
    <!-- <h1 class="text-center">Vuejs Todo app</h1> -->

    <div class="conatiner">
      <div class="row">
        <div class="col-sm-8">
          <div class="row">
            <div class="col sm-4">
              <div class="card shadow rounded">
				  <h6 class="card-header">Create New People</h6>
                <div class="card-body">
                  
                  <form action="http://localhost:3000/api/people" method="POST">
                    <div class="form-group">
                      <label for="name">Your Name: </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="People"
                        v-model="name"
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
              <h6 class="card-title">Message: <span :style="{color: textColor}">{{ Message }}</span></h6>
              <p class="card-subtitle mb-2" v-if="Request" style="color: blue;">
                Request: {{ Request }}
              </p>
			  <div class="overflow-auto">
              <p class="card-text" v-if="Results">Result: {{ Results }}</p>
			  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      r_id: "",
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
      this.axios
        .get("http://localhost:3000/api/people")
        .then((response) => {
          this.Results = response.data.Result;
          this.Message = response.data.Message;
          this.Request = response.data.Request;
		  this.textColor = 'green';
          console.log(response.data);
        })
        .catch((err) => {
          this.Message = err;
          this.Results = [];
		  this.textColor = 'red';
        });
    },
    createData() {
      this.axios
        .post("http://localhost:3000/api/people", {
          name: this.name,
          email: this.email,
        })
        .then((response) => {
          this.Results = response.data.Result;
          this.Message = response.data.Message;
          this.Request = response.data.Request;
		  this.textColor = 'green';
          console.log(response.data);
        })
        .catch((err) => {
          this.Message = err;
          this.Results = [];
		  this.textColor = 'red';
        });
    },
    fetchData() {
      this.axios
        .get("http://localhost:3000/api/people/" + this.r_id)
        .then((response) => {
          this.Results = response.data.Result;
          this.Message = response.data.Message;
          this.Request = response.data.Request;
		  this.textColor = 'green';
          console.log(response.data);
        })
        .catch((err) => {
          this.Message = err;
          this.Results = [];
		  this.textColor = 'red';
        });
    },
    updateData() {
      this.axios
        .put("http://localhost:3000/api/people/" + this.u_id, {
          newName: this.u_name,
        })
        .then((response) => {
          this.Results = response.data.Result;
          this.Message = response.data.Message;
          this.Request = response.data.Request;
		  this.textColor = 'green';
          console.log(response.data);
        })
        .catch((err) => {
          this.Message = err;
          this.Results = [];
		  this.textColor = 'red';
        });
    },
    deleteData() {
      this.axios
        .delete("http://localhost:3000/api/remove/" + this.d_id)
        .then((response) => {
          this.Results = response.data.Result;
          this.Message = response.data.Message;
          this.Request = response.data.Request;
		  this.textColor = 'green';
          console.log(response.data);
        })
        .catch((err) => {
          this.Message = err;
          this.Results = [];
		  this.textColor = 'red';
        });
    },
  },
};
</script>

<style>
.card {
  margin-bottom: 25px;
}
</style>

