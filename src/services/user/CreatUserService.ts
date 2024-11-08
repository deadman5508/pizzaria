import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUserService{
    async execute({name, email, password}:UserRequest){

        //verificar se enviou email
        if(!email){
            throw new Error('email incorrect (Você não digitou um email valido)')            
        }


        //verificar se ja existe este email
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })
        if(userAlreadyExists){
            throw new Error('User already exists(usuario já existe)')
        }
            //criptografia opcional impossivel de saber a senha original
        const passhash = await hash(password,8)

        const user = await prismaClient.user.create({
            data:{
                name:name,
                email:email,
                password:passhash,
            },
            select:{
                id:true,
                name:true,
                email:true,
                created_at:true,
            },
            
        })



        return user;
    }
}
export {CreateUserService}