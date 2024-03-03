<template>
  <div class="inline-flex flex-wrap items-center gap-1">
    <div
      v-for="option in options"
      :key="option.value"
      :class="['h-4 w-4 cursor-pointer', option.value === activeColor && 'border-2 border-gray']"
      :style="{ background: option.color }"
      data-testid="color-option"
      @click="activeColor = option.value"
    />
  </div>
</template>
<script setup lang="ts">
import { computed, type PropType } from 'vue'
import type { IColorSelectOption } from './types'

const props = defineProps({
  modelValue: {
    type: String,
    default: undefined
  },
  options: {
    type: Array as PropType<IColorSelectOption[]>,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const activeColor = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
  }
})
</script>
