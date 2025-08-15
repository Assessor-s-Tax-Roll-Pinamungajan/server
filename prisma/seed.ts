import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        username: "Buns",
        password: "buns123"
      },
      {
        username: "Patrick",
        password: "pat123"
      }
    ]

  });


  console.log('✅ Seed data inserted!');
}

seed()
  .catch((e) => {
    console.error('❌ Error in seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


  // {
  //   username: "Buns",
  //   password: "buns123"
  // },
  // {
  //   username: "Patrick",
  //   password: "pat123"
  // }