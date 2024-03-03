<template>
  <Story title="molecules/ProductWidget">
    <Variant title="default">
      <div class="p-10">
        <ProductWidget class="text-primary" :widget="widget" @update="widget = $event" />
      </div>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProductWidget from './index.vue'
import type { IProductWidget } from '@/resources/interfaces'

const widget = ref<IProductWidget>({
  id: 1,
  type: 'plastic bottles',
  amount: 100,
  action: 'collects',
  active: true,
  linked: true,
  selectedColor: 'green'
})
</script>
