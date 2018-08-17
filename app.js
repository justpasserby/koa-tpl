import Koa from 'koa';
import bodyParser from "koa-bodyparser";
import router from "./app/router";
import {
  connect
} from "./app/init";

(async () => {
  await connect();
})();
  
const app = new Koa();

app.use(bodyParser());

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8080);