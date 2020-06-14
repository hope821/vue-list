<template>
  <div>
    <list-item 
      v-for="(item, index) in posts"
      :itemName="item.name"
      :itemYear="item.year"
      :itemColor="item.color"
      :itemPantoneValue="item.pan"
      :key="index"
    />
  </div>
</template>

<script>
import ListItem from './ListItem';
import {mapState} from 'vuex'

export default {
  components: {
    ListItem
  },
  mounted() {
    this.$store.dispatch('loadDatas')
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