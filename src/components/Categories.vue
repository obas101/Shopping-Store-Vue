<template>
  <div>
    <h4><strong>Categories</strong></h4>
    <b-list-group>
      <b-list-group-item class="list-style" href="#">Pams</b-list-group-item>
      <b-list-group-item class="list-style" href="#">Sandals</b-list-group-item>
      <b-list-group-item class="list-style" href="#">Casual</b-list-group-item>
      <b-list-group-item class="list-style" href="#">Boots</b-list-group-item>
      <b-list-group-item class="list-style" href="#"
        >Formal Shoes</b-list-group-item
      >
      <b-list-group-item class="list-style" href="#"
        >Loafers and Slip-ons</b-list-group-item
      >
      <b-list-group-item class="list-style" href="#">Canvas</b-list-group-item>
      <b-list-group-item class="list-style" href="#"
        >Boat Shoes</b-list-group-item
      >
      <b-list-group-item class="list-style" href="#"
        >Work and Safety</b-list-group-item
      >
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "Categories",
};
</script>

<style scoped>
.list-style {
  background: #212529;
  color: white;
  text-align: left;
}
</style>