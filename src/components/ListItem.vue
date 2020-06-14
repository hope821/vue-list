<template>
  <dl>
    <dt>name</dt>
    <dd>{{itemName}}</dd>
    <dt>year</dt>
    <dd>{{itemYear}}</dd>
    <dt>color</dt>
    <dd>{{itemColor}}</dd>
    <dt>pantone_value</dt>
    <dd>{{itemPantoneValue}}</dd>
  </dl>
</template>

<script>
export default {
  props: ['itemName', 'itemYear', 'itemColor', 'itemPantoneValue']
}
</script>

<style>
dl {padding: 10px; border: 1px solid #666}
dl + dl {margin-top: 10px}
</style>
