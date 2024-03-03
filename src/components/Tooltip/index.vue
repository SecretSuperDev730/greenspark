<template>
  <div
    :class="[
      'relative inline-flex justify-center',
      disabled ? 'pointer-events-none' : 'cursor-pointer'
    ]"
    @mouseover="onShow"
    @mouseout="onHide"
  >
    <slot></slot>
    <div
      :class="[
        'typo-sm absolute -top-2 w-max max-w-62 -translate-y-full cursor-default bg-white px-4 py-2 shadow-card transition-all',
        !disabled && open ? '' : 'pointer-events-none opacity-0',
        !interactive && 'pointer-events-none'
      ]"
      data-testid="tooltip"
      @mouseover="onHover"
    >
      <slot name="tooltip">{{ title }}</slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  interactive: {
    type: Boolean,
    default: true
  },
  leaveDelay: {
    type: Number,
    default: 300
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const open = ref(false)
const timer = ref()

const onShow = () => {
  open.value = true
  if (timer.value) {
    clearTimeout(timer.value)
    timer.value = undefined
  }
}

const onHide = () => {
  if (!timer.value) {
    timer.value = setTimeout(() => {
      open.value = false
    }, props.leaveDelay)
  }
}

const onHover = () => {
  if (!props.interactive) {
    return
  }

  open.value = true
  if (timer.value) {
    clearTimeout(timer.value)
    timer.value = undefined
  }
}
</script>
