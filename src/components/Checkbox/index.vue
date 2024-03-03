<template>
  <div
    class="group relative inline-flex w-6 cursor-pointer items-center justify-center text-primary"
    @click="checked = !checked"
  >
    <CheckBoxOutlineIcon v-if="!checked" class="w-6" data-testid="unchecked" />
    <CheckBoxIcon v-else class="w-6" data-testid="checked" />
    <div
      class="pointer-events-none absolute h-9 w-9 rounded-full bg-primary opacity-0 transition-all group-hover:opacity-25"
    />
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import CheckBoxIcon from '@/icons/CheckBox/index.vue'
import CheckBoxOutlineIcon from '@/icons/CheckBoxOutline/index.vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const checked = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
  }
})
</script>
