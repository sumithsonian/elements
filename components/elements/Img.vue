<template>
  <img :src="src" :alt="alt" class="img" />
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

.img {
  display: inline-block;
  border-radius: $radius;
}
</style>
