import type { ProductWidgetColor } from '@/resources/interfaces/product-widget.interface'

export const PRODUCT_WIDGET_COLOR: Record<ProductWidgetColor, { color: string; text: string }> = {
  blue: {
    color: '#2E3A8C',
    text: '#FFF'
  },
  green: {
    color: '#3B755F',
    text: '#FFF'
  },
  beige: {
    color: '#F2EBDB',
    text: '#3B755F'
  },
  white: {
    color: '#FFF',
    text: '#3B755F'
  },
  black: {
    color: '#000',
    text: '#FFF'
  }
}
