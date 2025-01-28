import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './models/cart.model';

@Injectable()
export class CartService {

  constructor(
    @InjectModel(Cart) private cartModel: typeof Cart
  ) { }

  create(createCartDto: CreateCartDto) {
    try {

      return this.cartModel.create(createCartDto)

    } catch (error) {
      return { error: error.message }
    }
  }

  findAll() {
    try {
      return this.cartModel.findAll()

    } catch (error) {
      return { error: error.message }

    }
  }

  findOne(id: number) {
    try {
      return this.cartModel.findByPk(id)
    } catch (error) {
      return { error: error.message }
    }
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    try {
      const cart = await this.cartModel.findByPk(id)
      if(!cart?.dataValues){
        return {message : "cart not found"} 
      }
      
      await cart.update({...updateCartDto})
      
      return {message : "cart updated", cart}
       
    } catch (error) {
      return {error:error.message} 
    }
  }
  
  async remove(id: number) {
    try {
      const cart = await this.cartModel.findByPk(id)
      if(!cart?.dataValues){
        return {message : "cart not found"} 
      }
      
      await cart.destroy()
      
      return {message : "cart deleted"}
  
    } catch (error) {
      return {error:error.message} 
    }
  }
}
