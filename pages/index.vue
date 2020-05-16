<template>
  <div class="container">
      <div>
       <form class="form-inline" v-on:submit.prevent="onSubmit">
  <label for="title">Title:</label>
  <input type="title" id="title" placeholder="Enter title" name="title" v-model="title">
  <label for="description">Description:</label>
  <input type="description" id="description" placeholder="Description" name="description" v-model="description">

  <button type="submit">Submit</button>
</form> 
{{notes}}

  </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data(){
    return {
      title : '',
      description: ''
    }
  },
  computed: {
    ...mapState(['notes'])
  },
  methods: {
    onSubmit(){
      let {title, description} = this.$data;
      this.$store.commit('addNote', {title,description})

    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
 /* Style the form - display items horizontally */
.form-inline {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

/* Add some margins for each label */
.form-inline label {
  margin: 5px 10px 5px 0;
}

/* Style the input fields */
.form-inline input {
  vertical-align: middle;
  margin: 5px 10px 5px 0;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
}

/* Style the submit button */
.form-inline button {
  padding: 10px 20px;
  background-color: dodgerblue;
  border: 1px solid #ddd;
  color: white;
}

.form-inline button:hover {
  background-color: royalblue;
}

/* Add responsiveness - display the form controls vertically instead of horizontally on screens that are less than 800px wide */
@media (max-width: 800px) {
  .form-inline input {
    margin: 10px 0;
  }

  .form-inline {
    flex-direction: column;
    align-items: stretch;
  }
} 
</style>
