import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      firstName: 'Alice',
      lastName: 'Wonderland',
      posts: {
        create: {
          title: 'Check out Prisma with Next.js',
          content: `Prisma it's easy with Next.js https://www.prisma.io/nextjs`
        }
      }
    }
  })

  await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      email: 'bob@prisma.io',
      firstName: 'Bob',
      lastName: 'Builder',
      posts: {
        create: [
          {
            title: 'Follow Prisma on Twitter',
            content: 'Go to this twitter https://twitter.com/prisma'
          },
          {
            title: 'Follow Nexus on Twitter',
            content: 'Go to this twitter https://twitter.com/nexusgql'
          }
        ]
      }
    }
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
