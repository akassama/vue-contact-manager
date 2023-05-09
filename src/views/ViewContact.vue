<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">View Contact</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta dolores, excepturi
          harum impedit maiores similique sint soluta vel? Asperiores consectetur dolores fuga fugit iste labore laborum
          quos unde voluptate.</p>
      </div>
    </div>
  </div>

  <div class="container mt-3">
    <div class="row align-items-center">
        <div class="col-md-4">
          <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" class="contact-img-lg img-fluid">
        </div>
        <div class="col-md-6">
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
            <li class="list-group-item">
              Company: <span class="fw-bold">Company</span>
            </li>
            <li class="list-group-item">
              Title: <span class="fw-bold">Title</span>
            </li>
            <li class="list-group-item">
              Group: <span class="fw-bold">Group</span>
            </li>
          </ul>
        </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <router-link to="/" class="btn btn-success">
          <i class=""></i>
          Back
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ViewContact'
  }
</script>

<style scoped>

</style>
