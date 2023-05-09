<template>
    <div class="container">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold mt-3">
            Contact Manager
            <router-link to="/contacts/add" class="btn btn-success btn-sm">
              <i class="fas fa-plus"></i>
              New
            </router-link>
          </p>
          <p class="fst-italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eaque repellat pariatur et reiciendis optio, natus facere repellendus quasi. Tempore at asperiores iusto. Itaque dolores reprehenderit impedit, porro accusamus ad?
          </p>
          <form action="">
            <div class="col-md-6">
              <div class="row">
                <div class="col">
                  <input type="text" class="form-control" placeholder="Search name" />
                </div>
                <div class="col">
                  <input type="submit" class="btn btn-outline-dark">
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-6">
          <div class="card my-2 list-group-item-success shadow-lg">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-sm-4 mt-1r">
                  <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" class="contact-img img-fluid">
                </div>
                <div class="col-sm-7 mt-1">
                    <ul class="list-group">
                      <li class="list-group-item">
                        Name: <span class="fw-bold">Laiman</span>
                      </li>
                      <li class="list-group-item">
                        Email: <span class="fw-bold">akassama@yahoo.com</span>
                      </li>
                      <li class="list-group-item">
                        Mobile: <span class="fw-bold">7258667</span>
                      </li>
                    </ul>
                </div>
                <div class="col-sm-1 mt-1 d-flex flex-column justify-content-center align-items-center">
                  <router-link to="/contacts/view/:contactId" class="btn btn-warning my-1">
                    <i class="fas fa-eye"></i>
                  </router-link>
                  <router-link to="/contacts/edit/:contactId" class="btn btn-primary my-1">
                    <i class="fas fa-pen"></i>
                  </router-link>
                  <button class="btn btn-danger my-1">
                    <i class="fas fa-trash"></i>
                  </button>
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
      name: 'ContactManager'
    }
  </script>
  <style scoped>
  </style>
  