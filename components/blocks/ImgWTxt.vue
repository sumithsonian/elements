<template>
  <div class="imgWTxt">
    <div class="imgWTxt__img">
      <ElementsImg :src="src" :alt="alt" />
    </div>
    <div class="imgWTxt__txt">
      <ElementsTxt>
        <slot class="imgWTxt__txt" />
      </ElementsTxt>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: false, default: 'img' },
  },
}
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
