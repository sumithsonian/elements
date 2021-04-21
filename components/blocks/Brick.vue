<template>
  <div class="brick"><slot /></div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '~/assets/scss/_settings.scss';

.brick {
  margin: $space;
  background: #fff;
}
</style>
