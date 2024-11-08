import { Request, Response } from "express";
import { ListOrdersSevice } from "../../services/order/ListOrdersSevice";

class ListOrdersController{
    async handle(req:Request, res: Response){
        const listordersService = new ListOrdersSevice()

        const orders = await listordersService.execute()

        return res.json(orders)
    }
}

export {ListOrdersController}