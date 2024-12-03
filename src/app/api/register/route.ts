import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const { username, password, email } = await request.json();

  // Validar que todos los campos estén presentes
  if (!username || !password) {
    return NextResponse.json(
      { message: "Nombre de usuario y contraseña son obligatorios" },
      { status: 400 }
    );
  }

  // Verificar si el usuario ya existe
  const existingUser = await prisma.user.findUnique({
    where: { username },
  });

  if (existingUser) {
    return NextResponse.json(
      { message: "El usuario ya existe" },
      { status: 400 }
    );
  }

  // Encriptar la contraseña
  const hashedPassword = await bcrypt.hash(password, 10);

  // Crear el nuevo usuario

  try {
    const user = await prisma.user.create({
      data: {
        username: username,
        password: hashedPassword,
        email: email ?? getRandomId(6) + "@example.com",
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error al crear el usuario" },
      { status: 500 }
    );
  }
}

function getRandomId(extension: number) {
  const randomId = Math.floor(Math.random() * 10 ** extension);
  return randomId.toString();
}
