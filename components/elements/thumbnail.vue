<template>
  <img :src="src" :alt="alt" :class="className" />
</template>

<script>
export default {
  props: {
    src: { type: String, required: true },
    alt: { type: String, default: 'img' },
    size: { type: String, default: '' },
    sharp: { type: String, default: '' },
  },
  computed: {
    className() {
      return this.$toBem('thumbnail', null, [this.sharp, this.size])
    },
  },
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/_settings.scss';

.thumbnail {
  display: inline-block;
  border-radius: $radius;
  width: $size;
  height: $size;
  object-fit: cover;
  &--small {
    @extend .thumbnail;
    width: $sizeS;
    height: $sizeS;
  }
  &--large {
    @extend .thumbnail;
    width: $sizeL;
    height: $sizeL;
  }
  &--circle {
    width: $size;
    height: $size;
    border-radius: $size;

    &Small {
      @extend .thumbnail;
      width: $sizeS;
      height: $sizeS;
      border-radius: $sizeS;
    }
    &Large {
      @extend .thumbnail;
      width: $sizeL;
      height: $sizeL;
      border-radius: $sizeL;
    }
  }
}
</style>
