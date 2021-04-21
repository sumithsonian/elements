<template>
  <div class="bottomNav"><slot /></div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '~/assets/scss/_settings.scss';

.bottomNav {
  ul {
    display: flex;
    li {
      width: 25%;
      text-align: center;
      span {
        font-size: $fontXS;
      }
    }
  }
}
</style>
