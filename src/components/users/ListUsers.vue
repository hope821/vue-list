<template>
  <div>
    <list-users-item 
      v-for="(item, index) in posts"
      :itemEmail="item.email"
      :itemFirstName="item.first_name"
      :itemLastName="item.last_name"
      :itemAvatar="item.avatar"
      :key="index"
    />
    <button type="button" class="more" @click="getMore">더보기</button>
  </div>
</template>

<script>
import ListUsersItem from './ListUsersItem';
import {mapState} from 'vuex'
import axios from 'axios'

export default {
  components: {
    ListUsersItem
  },
  mounted() {
    this.$store.dispatch('loadUsers')
  },
  computed: {
    ...mapState([
      'posts'
    ])
  },
  data: function() {
    return {
      listPage: 1
    }
  },
  methods: {
    getMore() {
      axios
        .get('https://reqres.in/api/users?page=2')
        .then(moreData => {
          this.posts.push(...moreData.data.data)
          console.log('추가')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style>
.more {display: block; width: 100%; height: 50px; margin-top: 10px; border: 0 none; font-weight: bold; background-color: #fee500; cursor: pointer}
</style>