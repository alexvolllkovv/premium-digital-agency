import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "../server/routers.js";
import { createContext } from "../server/_core/context.js";

export default createExpressMiddleware({
  router: appRouter,
  createContext,
});
