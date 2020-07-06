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
  </div>
</template>

<script>
import ListUsersItem from './ListUsersItem';
import {mapState} from 'vuex'

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
  }
}
</script>

<style>

</style>