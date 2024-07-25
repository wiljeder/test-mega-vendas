import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import * as bcrypt from 'bcrypt';

(async () => {
  const prisma = new PrismaClient();

  try {
    await prisma.contacts.deleteMany();
    await prisma.groups.deleteMany();
    await prisma.user.deleteMany();

    // usuario de teste
    const tester = await prisma.user.create({
      data: {
        name: 'Test User',
        username: 'tester',
        hashedPassword: bcrypt.hashSync('123456', 10),
      },
    });

    // grupos
    const groupsData = Array.from({ length: 20 }, (_) => ({
      name: faker.company.name(),
      ownerId: tester.id,
    }));

    const groups = await prisma.groups.createManyAndReturn({
      data: groupsData,
    });

    const contactsData = Array.from({ length: 2000 }, (_) => ({
      name: faker.person.fullName(),
      phone: faker.phone.number(),
      groupId: groups[Math.floor(Math.random() * groups.length)].id,
    }));

    // contatos
    await prisma.contacts.createMany({
      data: contactsData,
    });

    console.log('Database seeded successfully');
  } catch (error) {
    console.log('Error seeding database:', error);
  }
})();
