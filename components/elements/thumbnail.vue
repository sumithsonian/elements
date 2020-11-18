<template>
  <img :src="src" :alt="alt" :class="imgClass" />
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
    imgClass() {
      if (this.size === '' && this.sharp === 'circle') {
        return 'thumbnail--circle'
      } else if (this.size === 'small' && this.sharp === 'circle') {
        return 'thumbnail--circleSmall'
      } else if (this.size === 'large' && this.sharp === 'circle') {
        return 'thumbnail--circleLarge'
      } else if (this.size === 'small' && this.sharp === '') {
        return 'thumbnail--small'
      } else if (this.size === 'large' && this.sharp === '') {
        return 'thumbnail--large'
      } else {
        return 'thumbnail'
      }
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
