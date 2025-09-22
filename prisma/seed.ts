import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  // Seed users for verification testing
  await prisma.anislag.createMany({
    data:[
      
    ]
  });

  // Seed anislag data if needed
  await prisma.anislag.createMany({
    data: []
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

// Example users
// { username: "Buns", password: "buns123" }
// { username: "Patrick", password: "pat123" }