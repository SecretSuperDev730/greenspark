import { defineStore } from 'pinia'
import type { IProductWidget } from '@/resources/interfaces'
import { ProductWidgetService } from '@/services'

export const useProductWidgetStore = defineStore('product-widget', {
  state: () => ({
    loading: false,
    productWidgets: [] as IProductWidget[]
  }),

  actions: {
    async load() {
      if (this.loading) {
        return
      }

      this.loading = true
      return ProductWidgetService.getAll()
        .then((data) => {
          this.productWidgets = data
        })
        .catch(() => {
          this.productWidgets = []
        })
        .finally(() => {
          this.loading = false
        })
    },
    update(widget: IProductWidget) {
      this.productWidgets = this.productWidgets.map((item) => {
        if (item.id === widget.id) {
          return widget
        }
        if (widget.active) {
          return { ...item, active: false }
        }
        return item
      })
    }
  }
})
