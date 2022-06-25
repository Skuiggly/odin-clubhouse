import express from "express"
import path from "path"
import dotenv from "dotenv"
import logger from "morgan"
import cookieParser from "cookie-parser"

/* Import routers */
import indexRouter from "./routes/indexRouter"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
/* Middleware */
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", indexRouter)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})