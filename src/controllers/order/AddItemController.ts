import { json, Request, Response } from "express";
import { AdditemService } from "../../services/order/AddItemService";

class AddItemController{
    async handle(req:Request, res:Response){
        const {order_id, product_id, ammount} = req.body
        
        const addItem = new AdditemService()

        const order = await addItem.execute({
            order_id,
            product_id,
            ammount
        })
        return res.json(order)

    }
}
export {AddItemController}