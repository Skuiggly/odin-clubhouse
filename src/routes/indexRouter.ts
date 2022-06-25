import express, { Request, Response } from "express"

const router = express.Router()

router.get("/", (req: Request, res: Response) => {
  res.render("index", {
    title: "hello world"
  })
})

export default router