
import prismaClient from "../../prisma";

interface ItemRequest{
    order_id:string;
    product_id:string;
    ammount:number;
}


class AdditemService{
    async execute({order_id, product_id, ammount}:ItemRequest){
        const order = await prismaClient.item.create({
            data:{
                order_id:order_id,
                product_id: product_id,
                ammount
            }
        })
        return order
    }
}
export {AdditemService}