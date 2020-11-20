<template>
  <nuxt-link to="/" :class="className"><slot /></nuxt-link>
</template>

<script>
export default {
  props: {
    size: { type: String, default: '' },
    sharp: { type: String, default: '' },
  },
  computed: {
    className() {
      return this.$toBem('btn', null, [this.sharp, this.size])
    },
  },
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/_settings.scss';

.btn {
  display: inline-block;
  font-size: $font;
  padding: $space $space * 2;
  text-align: center;
  border: 1px solid #000;
  border-radius: $radius;

  &--small {
    @extend .btn;
    padding: $spaceS $spaceS * 2;
  }
  &--large {
    @extend .btn;
    padding: $spaceL $spaceL * 2;
  }
  &--block {
    @extend .btn;
    display: block;

    &Small {
      @extend .btn--block;
      padding: $spaceS $spaceS * 2;
    }
    &Large {
      @extend .btn--block;
      padding: $spaceL $spaceL * 2;
    }
  }
}
</style>
