import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/SendOrderService";

class SendOrderControler{
    async handle(req:Request, res:Response){
        const {order_id}= req.body

        const senOrder = new SendOrderService()

        const order = await senOrder.execute({
            order_id
        })
        return res.json(order)
    }
}
export {SendOrderControler}