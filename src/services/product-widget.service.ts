import axios from 'axios'
import type { IProductWidget } from '@/resources/interfaces'

export class ProductWidgetService {
  static getAll(): Promise<IProductWidget[]> {
    return axios.get('https://api.mocki.io/v2/016d11e8/product-widgets').then((res) => res.data)
  }
}
