<template>
  <div class="typo-sm flex flex-col gap-2.5">
    <div
      class="flex items-center gap-3 rounded-md p-3"
      :style="{ background: theme.color, color: theme.text }"
    >
      <Logo :width="40" />
      <div>
        <div class="text-xs">This product {{ widget.action }}</div>
        <div class="mt-1 text-lg font-bold">{{ widget.amount }} {{ widget.type }}</div>
      </div>
    </div>

    <div class="flex items-center justify-between gap-4">
      <div class="flex items-start gap-0.5">
        <span>Link to Public Profile</span>
        <Tooltip title="This is tooltip!" :disabled="!widget.linked">
          <InfoCircleIcon class="-mt-0.5 w-3 text-primary" />
          <template #tooltip>
            <div class="flex flex-col items-center gap-3 py-4 text-center">
              <p>
                This widget links directly to your public profile so that you can easily share your
                impact with your customers. Turn it off here if you do not want the badge to link to
                it.
              </p>
              <a
                class="typo-link text-primary"
                href="https://vuejs.org/guide/introduction.html"
                target="_blank"
              >
                View Public Profile
              </a>
            </div>
          </template>
        </Tooltip>
      </div>
      <Checkbox
        :model-value="widget.linked"
        @update:model-value="onFieldUpdate('linked', $event)"
      />
    </div>

    <div class="flex items-center justify-between gap-4">
      <span>Badge colour</span>
      <ColorSelect
        :model-value="widget.selectedColor"
        :options="colorOptions"
        @update:model-value="onFieldUpdate('selectedColor', $event)"
      />
    </div>

    <div class="flex items-center justify-between gap-4">
      <span>Activate badge</span>
      <Switch :model-value="widget.active" @update:model-value="onFieldUpdate('active', $event)" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, type PropType } from 'vue'
import Logo from '@/components/Logo/index.vue'
import Checkbox from '@/components/Checkbox/index.vue'
import ColorSelect from '@/components/ColorSelect/index.vue'
import Switch from '@/components/Switch/index.vue'
import Tooltip from '@/components/Tooltip/index.vue'
import InfoCircleIcon from '@/icons/InfoCircle/index.vue'
import type { IProductWidget } from '@/resources/interfaces'
import { PRODUCT_WIDGET_COLOR } from '@/resources/constants'

const props = defineProps({
  widget: {
    type: Object as PropType<IProductWidget>,
    required: true
  }
})

const emit = defineEmits(['update'])

const theme = computed(
  () => PRODUCT_WIDGET_COLOR[props.widget?.selectedColor] || PRODUCT_WIDGET_COLOR.blue
)

const colorOptions = Object.entries(PRODUCT_WIDGET_COLOR).map(([key, colors]) => ({
  color: colors.color,
  value: key
}))

const onFieldUpdate = (field: keyof IProductWidget, value: unknown) => {
  emit('update', {
    ...props.widget,
    [field]: value
  })
}
</script>
