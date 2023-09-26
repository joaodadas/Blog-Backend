import bcrypt from "bcrypt";

export const encryptPassword = async (password: string) => {
  console.log("Entrou");
  try {
    password = "Newpassword";
    const newPassword = await bcrypt.hash(password, 10);

    console.log(newPassword);
    return newPassword;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (
  usePassword: string,
  inputPassword: string
) => {
  const isCorrect = bcrypt.compare(usePassword, inputPassword);

  return isCorrect;
};

encryptPassword("sdadasdasdasdasd");
