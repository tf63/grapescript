import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
import { prisma } from '@/lib/Prisma'
import { Todo } from '@prisma/client'

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    let statusCode = 200
    const data = await prisma.todo
        .findMany({
            orderBy: { createdAt: 'desc' }
        })
        .catch((err) => {
            statusCode = 500
            console.log(err)
            return { error: 'Failed to read posts' }
        })
        .finally(async () => {
            await prisma.$disconnect()
        })

    return res.status(200).json(data)
}

const handler: NextApiHandler = (req, res) => {
    switch (req.method) {
        case 'GET':
            getHandler(req, res)
            break
        default:
            return res.status(405).json({ error: 'Method not allowed.' })
    }
}

export default handler
