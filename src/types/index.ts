export interface User {
  _id: string;
  name: string;
  email: string;
}

export interface Member extends User {
  dietaryRestrictions: string;
}

export interface RegisterRequest extends Pick<User, 'name' | 'email'> {
  password: string;
}

export interface RegisterResponse {
  message: string;
  user: User;
}

export type LoginRequest = Pick<RegisterRequest, 'email' | 'password'>;

export interface LoginResponse extends RegisterResponse {
  accessToken: string;
}

export interface GetMealDetailsResponse {
  meals: string[];
  createdAt: string;
  updatedAt: string;
}

export type Discount = {
  amount: number;
  percentage: number;
};

export type Product = {
  id: number;
  title: string;
  srcUrl: string;
  gallery?: string[];
  price: number;
  discount: Discount;
  rating: number;
  attributes?: string[];
  quantity?: number;
  size?: string;
  color?: string;
  isInCart?: boolean;
  isInWishlist?: boolean;
  isInFavorites?: boolean;
  isInHistory?: boolean;
  isInMealPlan?: boolean;
  isInMealHistory?: boolean;
};

export type Color = {
  name: string;
  code: string;
};