import Router from "express"
import PostController_C from "../Controller/PostController_C.js";
import PostController_D from "../Controller/PostController_D.js";

const router = new Router()

router.post('/c', PostController_C.create)
router.get('/c', PostController_C.getAll)
router.get('/c/:id', PostController_C.getOne)
router.put('/c', PostController_C.update)
router.delete('/c/:id', PostController_C.delete)

router.post('/d', PostController_D.create)
router.get('/d', PostController_D.getAll)
router.get('/d/:id', PostController_D.getOne)
router.put('/d', PostController_D.update)
router.delete('/d/:id', PostController_D.delete)



export default router;

