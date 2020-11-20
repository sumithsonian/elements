<template>
  <div class="imgWTxt">
    <div class="imgWTxt__img">
      <slot name="img" />
    </div>
    <div class="imgWTxt__txt">
      <slot name="txt" class="imgWTxt__txt" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '~/assets/scss/_settings.scss';

.imgWTxt {
  display: flex;
  &__txt {
    margin-left: $space;
  }
}
</style>
