<template>
    <div id="resultsCont">
        <h1>Results</h1>
        {{getTickets}}
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

    export default {
        name:'Results',
        mounted(){
            this.generateData();
        },
        methods:{
            ...mapActions(['generateData']),
        },
        computed:{
            ...mapGetters(['getTickets']),
        }
    }
</script>

<style lang="scss" scoped>

</style>