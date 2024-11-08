import {Router,Request,Response} from 'express';
import multer from 'multer';
import { CreatUserController } from './controllers/user/CreatUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './midlewares/isAuthenticated';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreatProductController } from './controllers/product/CreatProductController';
import ulploadconfig from './config/multer'
import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import { CreatOrderController } from './controllers/order/CreatOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { RemoveItemController } from './controllers/order/RemoveItemController';
import { SendOrderControler } from './controllers/order/SendOrderControler';
import { ListOrdersController } from './controllers/order/ListOrdersController';
import { DetailOrderController } from './controllers/order/DetailOrderController';
import { FinishOrderController } from './controllers/order/FinishOrderController';

const router = Router();

const upload = multer(ulploadconfig.upload('./tmp'))

           //--rotas User-
router.post('/users', new CreatUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

          // rotas de Categoria

router.post ('/category', isAuthenticated,new CreateCategoryController().handle)
router.get ('/category', isAuthenticated, new ListCategoryController().handle)

        
         //rotas dos produtos

//router.post('/product', isAuthenticated,upload.single('file'), new CreatProductController().handle)
router.post('/product', isAuthenticated, new CreatProductController().handle)
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)

        // rotas de order

router.post('/order', isAuthenticated, new CreatOrderController().handle)
router.delete('/order', isAuthenticated, new RemoveOrderController().handle)

router.post('/order/add', isAuthenticated, new AddItemController().handle)
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)
router.put('/order/send', isAuthenticated, new SendOrderControler().handle)

router.get('/orders', isAuthenticated, new ListOrdersController().handle)
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle)
router.put('/order/finish', isAuthenticated, new FinishOrderController().handle)
export { router };