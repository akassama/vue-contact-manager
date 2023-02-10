<template>
    <div class="row justify-content-center">
      <div class="col-md-4">
          <form @submit="onSubmit" class="add-form">
              <div class="container-fluid mt-3 w3-border w3-padding w3-round ws-grey">
                  <div class="mb-3 mt-3">
                      <label for="name" class="fxorm-label">Name:</label>
                      <input type="text" class="form-control" v-model="name" name="name" placeholder="Enter Your Name">
                  </div>
                  <div class="mb-3">
                      <label for="age" class="form-label">Age:</label>
                      <input type="text" class="form-control" v-model="age" name="age" placeholder="Enter Your Age">
                  </div>
                  <button type="submit" class="btn btn-primary mb-3">Submit</button>
              </div>
          </form>
      </div>
    </div>
  </template>
    
  <script>
      export default {
          name : 'AddInformation',
          data (){
              return {
                  name : '',
                  age : '',
              }
          },
          methods : {
              onSubmit(e){
                  e.preventDefault()
                  if(!this.name){
                      alert('Please Add a Name')
                      return
                  }
                  const NewInformation = {
                      id: Math.floor(Math.random() * 100000),
                      name : this.name,
                      age : this.age,
                      reminder : this.reminder
                  }
                  this.$emit('add-information', NewInformation)
                  this.name = ' ',
                  this.age = ' '
              }
          }
      }
  </script>
    <style scoped>
    </style>
    