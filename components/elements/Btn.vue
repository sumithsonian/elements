<template>
  <nuxt-link to="/" :class="btnClass"><slot /></nuxt-link>
</template>

<script>
export default {
  props: {
    size: { type: String, default: '' },
    sharp: { type: String, default: '' },
  },
  computed: {
    btnClass() {
      if (this.size === '' && this.sharp === 'block') {
        return 'btn--block'
      } else if (this.size === 'small' && this.sharp === 'block') {
        return 'btn--blockSmall'
      } else if (this.size === 'large' && this.sharp === 'block') {
        return 'btn--blockLarge'
      } else if (this.size === 'small' && this.sharp === '') {
        return 'btn--small'
      } else if (this.size === 'large' && this.sharp === '') {
        return 'btn--large'
      } else {
        return 'btn'
      }
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
