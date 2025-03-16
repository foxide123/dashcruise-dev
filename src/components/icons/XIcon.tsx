<script setup lang="ts">

const props = withDefaults(
  defineProps<{
    color?: string;
    size?: string;
  }>(),
  {
    color: "text-carrot-500",
    size: "text-2xl",
  }
);
</script>

<template>
  <font-awesome-icon :icon="['fas', 'x']" :class="['mr-5', props.size, props.color]" />
</template>
