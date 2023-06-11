const faker = require('faker');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const seedData = [
    { email: _email(), name: _name() },
    {email: _email(), name: _name()  },
    // Add more seed objects as needed
  ];

const seedUserData = async () => {
    try {
      for (const data of seedData) {
        await prisma.user.create({
          data,
        });
      }
  
      console.log('Data seeding complete.');
    } catch (error) {
      console.error('Error seeding data:', error);
    } finally {
      await prisma.$disconnect();
    }
  };
  seedUserData();
