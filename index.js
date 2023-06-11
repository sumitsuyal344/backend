const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const PORT= 3000
const prisma = new PrismaClient();

const checkPrismaConnection = async () => {
    try {
      // Attempt to establish the Prisma connection
      await prisma.$connect();
      console.log('Prisma connection established successfully.');
  
      // Perform any additional checks or operations if needed
  
    } catch (error) {
      console.error('Error establishing Prisma connection:', error);
    } finally {
      // Close the Prisma connection and release resources
      await prisma.$disconnect();
      console.log('Prisma connection closed.');
    }
  };
  
  // Call the function to check the Prisma connection
  checkPrismaConnection();



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});