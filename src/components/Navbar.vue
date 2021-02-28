<template>
<div>
  <b-navbar toggleable="sm" type="dark" variant="dark">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <b-navbar-brand>Get Tenders</b-navbar-brand>

    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-text  v-for="link in links" :key="link.name" class="mr-3">
        <li>
          <router-link
              tag="a"
              :to=link.link
              exact
              active-class="active"
          >
              <a href="#">{{link.name}}</a>
          </router-link>
        </li>
        </b-nav-text>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>


<script>
 export default {
    data() {
    return {
        links: [
            {
                name: 'Аналитика',
                link: '/analytics',
            },
                        {
                name: 'Новости',
                link: '/news',
            },
                        {
                name: 'Тендеры',
                link: '/tenders',
            },
        ]
    }
  },
    computed: {
  },
    methods: {
    }
 }
 </script>

