<template>
    <b-row class="tender__card shadow mt-2">
        <b-col class="tender__card__header" cols="12" lg="12">
            <p>{{tender["tender_number"]}}</p>
        </b-col>
        <b-col class="tender__card__left" cols="12" lg="6">
           <p>{{tender["Объект закупки"]}}</p>
        </b-col>
        <b-col class="tender__card__right" cols="12" lg="6">
           <p>{{tender["start_price"]}}</p>
           <p>Окончание подачи заявок {{tender["Окончание подачи заявок"]}}</p>
        </b-col>
        <b-col class="tender__card__footer" cols="12">
            <p>{{tender["Почтовый адрес"]}}</p>
            <p>{{tender["Номер контактного телефон"]}}</p>
        </b-col>
    </b-row>
</template>

<script>
export default {
    props: ['tender'],
    computed: {
    },
    data() {
      return {
      }
    },

}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');

    .tender__card {
        font-family: 'Roboto Slab', serif;
    }
    .tender__card__header {
        background-color: #3B5367;
        color: white;
    }
    .tender__card__left {
        background-color: #F2FAFF;
    }
    .tender__card__right {
        background-color: #3BB7B4;
        color: white;
    }
    .tender__card__footer {
        background-color: #009DF8;
        color: white;
    }
</style>