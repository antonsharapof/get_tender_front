<template>
    <b-row>
        <b-col cols="12" v-for="f in filter" :key="f.name" class="filter__item border-bottom">
            <b-form-group :label=f.name>
                <b-form-checkbox-group
                  :id=f.name
                  v-model="f.check_data"
                  :options="f.list"
                  :name = f.name
                ></b-form-checkbox-group>
            </b-form-group>
        </b-col>
        <b-col cols="12" class="mt-3">
            <b-button variant="secondary" v-on:click="get_filtered_data(check_data)">Поиск</b-button> 
        </b-col>
    </b-row>
</template>

<style lang="scss" scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css');

</style>

 <script>
 export default {
    data() {
    return {
      filter: [
          {
              name: 'Вид закупки',
              list: ['44-ФЗ\nЭлектронный аукцион', '223-ФЗ'],
              check_data: []
          },
          {
              name: 'Этап закупки',
              list: ['Подача заявок', 'Работа комиссии', 'Закупка завершена', 'Закупка отменена'],
              check_data: []
          },
          {
              name: 'Площадка',
              list: ['Ртс-Тендер', 'Сбербанк-Аст'],
              check_data: []
          }
      ],
    //   tender_type: ['44-ФЗ\nЭлектронный аукцион', '223-ФЗ'],
    //   tender_stage: ['Подача заявок', 'Работа комиссии', 'Закупка завершена', 'Закупка отменена'],
    //   tender_market: ['Ртс-Тендер', 'Сбербанк-Аст'],
    //   check_data: {
    //         type: [],
    //         status: [],
    //         market: [],
    //   },
    }
  },
    computed: {
        get_check_data() {
            return this.check_data;
        },
  },
    methods: {
        get_filtered_data() {
            let filter_data = {type: this.check_data.type,
                               status: this.check_data.status};
            for (let key in filter_data) {  
                if (filter_data[key].length === 0) {
                    delete filter_data[key]
                }
            }
            this.$store.dispatch('getFilteredTenders', filter_data);
        },
    }
 }
 </script>

 <style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');

    .filter__item {
        font-family: 'Roboto Slab', serif;
    }
 </style>