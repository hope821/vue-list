<template>
  <dl>
    <dt>email</dt>
    <dd>{{itemEmail}}</dd>
    <dt>name</dt>
    <dd>{{itemFirstName}} {{itemLastName}}</dd>
    <dt>avatar</dt>
    <dd><img :src="itemAvatar" alt=""></dd>
  </dl>
</template>

<script>
export default {
  props: ['itemEmail', 'itemFirstName', 'itemLastName', 'itemAvatar']
}
</script>

<style>
dl {padding: 10px; border: 1px solid #666}
dl + dl {margin-top: 10px}
</style>
