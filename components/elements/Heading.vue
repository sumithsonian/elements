<template>
  <compnent :is="tagName" :class="className"><slot /></compnent>
</template>

<script>
export default {
  props: {
    level: { type: Number, required: true },
  },
  computed: {
    className() {
      return 'heading--' + this.level
    },
    tagName() {
      return 'h' + this.level
    },
  },
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/_settings.scss';

.heading {
  &--1 {
    font-size: $fontXXL;
  }
  &--2 {
    font-size: $fontXL;
  }
  &--3 {
    font-size: $fontL;
  }
  &--4,
  &--5,
  &--6 {
    font-size: $font;
  }
}
</style>
