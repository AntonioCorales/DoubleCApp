import bcrypt from "bcrypt";

export default function compare(password: string, hash: string) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, isValid) => {
      if (err) return reject(err);
      resolve(isValid);
    });
  });
}