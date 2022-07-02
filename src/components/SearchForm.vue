<template>
    <div class="d-flex flex-column m-auto">
        <label for="origin" class="text-start">Origin City</label>
        <input id="origin" class="form-control mb-4" type="text">
        <label for="destination" class="text-start">Destination City</label>
        <input id="destination" class="form-control mb-4" type="text">
        <label for="departureDate" class="text-start">Departure Date</label>
        <input id="departureDate" class="form-control mb-4" type="text">
        <label for="arrivalDate" class="text-start">Arrival Date</label>
        <input id="arrivalDate" class="form-control mb-4" type="text">
        <button class="btn btn-dark m-auto border-0 py-3 px-5">Find my plane</button>
    </div>
</template>

<script>
    export default {
        name:'SearchForm'
    }
</script>

<style lang="css" scoped>
    .btn-dark{
        width: fit-content !important;
        font-size:18px;
        border-radius:15px;
        transition: all .5s ease-in-out;
    }
    .btn-dark:hover{
        transform: translateY(-4px);
    }
</style>