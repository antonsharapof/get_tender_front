<template>
    <b-container fluid>
        <b-row>
            <b-col cols="12" sm="12" md="3" lg="2">
                <TenderFilter />
            </b-col>
            <b-col cols="12" sm="12" md="9" lg="10">
                <TenderCard  v-for="tender in allTenders" :key="tender.tender_number" v-bind:tender="tender" class="m-2"/>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import TenderFilter from '@/components/tenders/TenderFilter';
import TenderCard from '@/components/tenders/TenderCard';


export default {
    components: {TenderFilter, TenderCard},
    // mounted() {
    //     this.$store.dispatch('getUser');
    //     this.$store.dispatch('getTenders');
    // },  
    computed: {
        allTenders() {
            return this.$store.getters.getTenders
        },
    },
}

</script>

<style lang="scss">
</style>

