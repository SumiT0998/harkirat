import { PrismaClient } from "@prisma/client";
import { log } from "console";

const prisma = new PrismaClient();

async function Insertuser(
  username: string,
  password: string,
  firstname: string,
  lastname: string
) {
  const res = await prisma.user.create({
    data: {
      username,
      password,
      firstname,
      lastname,
    },
    select: {
      id: true,
      password: true,
      firstname:true,
      lastname:true
    },
  });
  console.log(res);
}

Insertuser("sum@gmail.com", "312312", "suit", "bsht");


