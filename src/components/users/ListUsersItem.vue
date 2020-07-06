<template>
  <div class="item">
    <dl class="avatar">
      <dt>avatar</dt>
      <dd><img :src="itemAvatar" alt=""></dd>
    </dl>
    <dl>
      <dt>name</dt>
      <dd>{{itemFirstName}} {{itemLastName}}</dd>
    </dl>
    <dl>
      <dt>email</dt>
      <dd>{{itemEmail}}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ['itemEmail', 'itemFirstName', 'itemLastName', 'itemAvatar']
}
</script>

<style>
.item {position: relative; display: flex; flex-direction: column; justify-content: center; height: 80px; padding: 10px 10px 10px 80px; border: 1px solid #666; box-sizing: border-box}
.item + .item {margin-top: 10px}
.item dl {overflow: hidden; margin: 0}
.item dt {float: left; margin-right: 10px; font-weight: bold}
.item dd {margin: 0}
.avatar {position: absolute; top: 9px; left: 10px}
.avatar dt {display: none;}
.avatar img {width:60px; height: 60px}
</style>
