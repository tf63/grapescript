import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()

// モデル投入用のデータ定義
const userData: Prisma.UserCreateInput[] = [
    {
        name: 'hoge1',
        email: 'hoge1@example.com'
    },
    {
        name: 'hoge2',
        email: 'hoge2@example.com'
    },
    {
        name: 'hoge3',
        email: 'hoge3@example.com'
    }
]

const todoData: Prisma.TodoCreateInput[] = [
    {
        title: 'タスク1',
        completed: false
    },
    {
        title: 'タスク2',
        completed: false
    },
    {
        title: 'タスク3',
        completed: false
    }
]

const transfer = async () => {
    const users = []
    for (const data of userData) {
        const user = prisma.user.upsert({ where: { email: data.email }, update: {}, create: data })
        users.push(user)
    }
    return await prisma.$transaction(users)
}

const transfer_todo = async () => {
    await prisma.todo.createMany({ data: todoData })
}

// 定義されたデータを実際のモデルへ登録する処理
const main = async () => {
    console.log(`Start seeding ...`)

    await transfer()
    await transfer_todo()

    console.log(`Seeding finished.`)
}

// 処理開始
main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
