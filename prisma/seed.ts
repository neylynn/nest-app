// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.user.upsert({
    where: { name: 'Tester 1' },
    update: {},
    create: {
      name: 'Tester 1',
      email: 'user1@gmail.com',
    },
  });

  const post2 = await prisma.user.upsert({
    where: { name: "Tester 2" },
    update: {},
    create: {
      name: "Tester 2",
      email: 'user2@gmail.com',
    },
  });

  const post3 = await prisma.user.upsert({
    where: { name: "Tester 3" },
    update: {},
    create: {
      name: "Tester 3",
      email: 'user3@gmail.com',
    },
  });

  console.log({ post1, post2, post3 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });