const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');
const prisma = new PrismaClient();

async function main() {
  console.log('❌ ❌ ❌ Deleting all records... ❌ ❌ ❌');
  await prisma.punchCard.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.coffeeShop.deleteMany();

  console.log('☕ ☕ ☕ Seeding coffee shops... ☕ ☕ ☕');

  // Create Admin Coffee Shop
  const adminCoffeeShop = await prisma.coffeeShop.create({
    data: {
      name: 'Admin',
      userName: 'admin',
      description: 'Admin',
      contact: '0',
      address: 'Unknown', // Ensure address field is included
      passwordDigest: 'password',
    },
  });

  // Create 15 Random Coffee Shops
  const coffeeShops = await Promise.all(
    Array.from({ length: 15 }).map(() =>
      prisma.coffeeShop.create({
        data: {
          name: faker.company.name(),
          userName: faker.internet.email(),
          description: faker.company.catchPhrase(),
          address: faker.location.streetAddress(),
          contact: faker.phone.number(),
          passwordDigest: 'password',
        },
      })
    )
  );

  console.log('👨 👩 Seeding customers... 👨 👩');

  // Create 30 Customers
  const customers = await Promise.all(
    Array.from({ length: 30 }).map(() =>
      prisma.customer.create({
        data: {
          name: faker.person.firstName(),
          contact: faker.phone.number(),
          userName: faker.internet.email(),
          photo: `https://randomuser.me/api/portraits/med/men/${Math.floor(Math.random() * 75) + 1}.jpg`,
        },
      })
    )
  );

  console.log('💳 💳 💳 Seeding punch cards... 💳 💳 💳');

  // Create 50 Random Punch Cards
  await Promise.all(
    Array.from({ length: 50 }).map(() =>
      prisma.punchCard.create({
        data: {
          coffeeShopId:
            coffeeShops[Math.floor(Math.random() * coffeeShops.length)].id,
          customerId:
            customers[Math.floor(Math.random() * customers.length)].id,
          counter: faker.number.int({ min: 1, max: 9 }),
        },
      })
    )
  );

  // Create 10 Punch Cards for Admin Coffee Shop
  await Promise.all(
    Array.from({ length: 10 }).map(() =>
      prisma.punchCard.create({
        data: {
          coffeeShopId: adminCoffeeShop.id,
          customerId:
            customers[Math.floor(Math.random() * customers.length)].id,
          counter: faker.number.int({ min: 1, max: 9 }),
        },
      })
    )
  );

  console.log('✅ Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
