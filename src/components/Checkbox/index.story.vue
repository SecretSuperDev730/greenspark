<template>
  <Story title="atoms/Checkbox">
    <Variant title="default">
      <div class="p-10">
        <Checkbox
          v-model="checked"
          class="text-primary"
          @update:model-value="logEvent('change', { value: $event })"
        />
      </div>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { logEvent } from 'histoire/client'
import Checkbox from './index.vue'

const checked = ref(false)
</script>
