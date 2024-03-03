<template>
  <div
    class="group relative inline-flex h-5 w-10 cursor-pointer items-center"
    @click="active = !active"
  >
    <div
      :class="[
        'h-full w-full rounded-full border shadow-switch transition-all',
        active ? 'border-gray bg-primary' : 'border-primary-light bg-white'
      ]"
    />
    <div
      :class="[
        'absolute top-0 flex items-center justify-center transition-all',
        active ? 'left-full -translate-x-full' : 'left-0'
      ]"
    >
      <div
        class="pointer-events-none absolute h-8 w-8 rounded-full bg-primary opacity-0 transition-all group-hover:opacity-25"
      />
      <div
        :class="[
          'shadow-switch-thumb relative h-5 w-5 rounded-full border bg-white transition-all',
          active ? 'border-primary' : 'border-beige'
        ]"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const active = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
  }
})
</script>
