import Router from "koa-router";
import hello from "./controllers/userInfo";

const router = new Router();

router.get("/", hello.getUser)

export default router;