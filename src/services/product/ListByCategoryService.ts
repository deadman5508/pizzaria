import prismaClient from "../../prisma";

interface ProductRequest{
    category_id:string
}

class ListByCategoryService{
    async execute({category_id}:ProductRequest){
         const fiindByCategory = await prismaClient.product.findMany({
            where:{
                category_id:category_id
            }
         })
         return fiindByCategory
    }
}

export {ListByCategoryService}