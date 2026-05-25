import { prisma } from "../src/db/prisma";
import { hashPassword } from "../src/utils/hash";

const TEST_USER = {
  name: "Usuario Teste",
  email: "user.test@gamil.com",
  cpf: "12345678909",
  password: "test@123",
};

async function main() {
  const hashedPassword = await hashPassword(TEST_USER.password);

  await prisma.user.upsert({
    where: { email: TEST_USER.email },
    update: {
      name: TEST_USER.name,
      cpf: TEST_USER.cpf,
      hashPassword: hashedPassword,
    },
    create: {
      name: TEST_USER.name,
      email: TEST_USER.email,
      cpf: TEST_USER.cpf,
      hashPassword: hashedPassword,
    },
  });

  console.log(`Seed completed for ${TEST_USER.email}`);
}

main()
  .catch((error) => {
    console.error("Error seeding test user:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
