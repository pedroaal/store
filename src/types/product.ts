export interface IProduct {
  id?: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  categoryId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICartProduct extends IProduct {
  quantity: number;
}