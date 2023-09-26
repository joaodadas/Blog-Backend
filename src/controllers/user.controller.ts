import { Request, Response } from "express";
import { createUser } from "../db/user.db";
import { encryptPassword } from "../helpers/bcrypt";

export async function handleCreateUser(req: Request, res: Response) {
  const { name, email, password, passwordConfirmation } = req.body;

  console.log("Chegou no controller");

  try {
    encryptPassword("sdadasdasdasdasd");

    if (!password || !email || !name) {
      return res.status(400).json({ message: "Preencha todos os campos" });
    }

    const emailRejex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!emailRejex.test(email)) {
      return res.status(400).json({ message: "Informe uma senha valida" });
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({ message: "Informe uma senha valida" });
    }

    if (password !== passwordConfirmation) {
      return res.status(400).json({ message: "As senhas devem ser iguais" });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
}
