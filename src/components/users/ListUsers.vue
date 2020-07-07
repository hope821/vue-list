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
    <button type="button" class="more" @click="getMore" :class="{hide:btnHide}">더보기</button>
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
      loadPage: 2,
      btnHide: false
    }
  },
  methods: {
    getMore() {
      let loadPage = this.loadPage++;
      axios
        .get('https://reqres.in/api/users?page=' + loadPage)
        .then(moreData => {
          if (loadPage <= moreData.data.total_pages) {
            this.posts.push(...moreData.data.data)
            console.log(loadPage + '번째 페이지 추가')
            console.log('total page = ' + moreData.data.total_pages)
            if (loadPage === moreData.data.total_pages) {
              this.btnHide = true
            } else {
              return
            }
          } else {
            return
          }
        })
        .catch(error => {
          console.log(error)
        });
    }
  }
}
</script>

<style>
.more {display: block; width: 100%; height: 50px; margin-top: 10px; border: 0 none; font-weight: bold; background-color: #fee500; cursor: pointer}
.hide {display: none}
</style>