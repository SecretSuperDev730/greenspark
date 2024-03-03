<template>
  <Story title="atoms/ColorSelect">
    <Variant title="default">
      <div class="p-10">
        <ColorSelect
          v-model="color"
          :options="options"
          @update:model-value="logEvent('change', { value: $event })"
        />
      </div>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { logEvent } from 'histoire/client'
import ColorSelect from './index.vue'
import { PRODUCT_WIDGET_COLOR } from '@/resources/constants'

const color = ref('blue')
const options = Object.entries(PRODUCT_WIDGET_COLOR).map(([key, colors]) => ({
  color: colors.color,
  value: key
}))
</script>
