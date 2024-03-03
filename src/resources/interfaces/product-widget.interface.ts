export type ProductWidgetType = 'carbon' | 'plastic bottles' | 'trees'
export type ProductWidgetAction = 'collects' | 'plants' | 'offsets'
export type ProductWidgetColor = 'white' | 'black' | 'blue' | 'green' | 'beige'

export interface IProductWidget {
  id: number
  type: ProductWidgetType
  amount: number
  action: ProductWidgetAction
  active: boolean
  linked: boolean
  selectedColor: ProductWidgetColor
}
