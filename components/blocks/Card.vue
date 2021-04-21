<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '~/assets/scss/_settings.scss';

.card {
  border: 1px solid #000;
}
</style>
