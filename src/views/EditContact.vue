<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Edit Contact</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta dolores, excepturi
          harum impedit maiores similique sint soluta vel? Asperiores consectetur dolores fuga fugit iste labore laborum
          quos unde voluptate.</p>
      </div>
    </div>
  </div>

  <div class="container mt-3">
    <div class="row">
      <div class="col-md-3">
        <form action="">
          <div class="mb-2">
            <input type="text" class="form-control" id="Name" name="Name" placeholder="Name"/>
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" id="PhotoUrl" name="PhotoUrl" placeholder="Photo URL"/>
          </div>
          <div class="mb-2">
            <input type="email" class="form-control" id="Email" name="Email" placeholder="Email"/>
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" id="Mobile" name="Mobile" placeholder="Mobile"/>
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" id="Name" name="Name" placeholder="Company"/>
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" id="Title" name="Title" placeholder="Title"/>
          </div>
          <div class="mb-2">
            <select class="form-control" name="Group" id="Group">
              <option value="">Select group</option>
            </select>
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-success" value="Update"/>
          </div>
        </form>
      </div>
      <div class="col-md-4">
        <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" class="contact-img img-fluid">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditContact'
}
</script>
<style scoped>
</style>
  