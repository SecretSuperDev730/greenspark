<template>
  <Story title="atoms/Tooltip">
    <Variant title="default">
      <div class="flex h-screen w-full items-center justify-center">
        <Tooltip title="This is tooltip!">
          <InfoCircleIcon class="w-6 text-primary" />
        </Tooltip>
      </div>
    </Variant>

    <Variant title="customized">
      <div class="flex h-screen w-full items-center justify-center">
        <Tooltip title="This is tooltip!">
          <InfoCircleIcon class="w-6 text-primary" />
          <template #tooltip>
            <div class="flex flex-col items-center gap-3 py-4 text-center">
              <p>
                This widget links directly to your public profile so that you can easily share your
                impact with your customers. Turn it off here if you do not want the badge to link to
                it.
              </p>
              <span class="typo-link text-primary">View Public Profile</span>
            </div>
          </template>
        </Tooltip>
      </div>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { logEvent } from 'histoire/client'
import Tooltip from './index.vue'
import InfoCircleIcon from '@/icons/InfoCircle/index.vue'

const checked = ref(false)
</script>
