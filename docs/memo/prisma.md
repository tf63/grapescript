### prismaのメモ

**概要**
- ORMツール
- https://zenn.dev/kanasugi/articles/a082bd39c5bdf2

**型補間**
- マイグレーションすると`@prisma/client`がimportされるっぽい
```
    import { PrismaClient, Prisma } from '@prisma/client'
```

- 型補間の利用
- 勝手に色々作成されている
```
    const prisma = new PrismaClient()
    prisma.<テーブル名>
    Prisma.<テーブル名>CreateInput[]
```

**seeding**
- nextのコンパイラではts-nodeを実行できないっぽい (https://zenn.dev/damono999/articles/bd203095b7b883)
- 

- https://m-shige1979.hatenablog.com/entry/2021/11/20/213051
- https://github.com/prisma/prisma-examples/blob/latest/typescript/graphql/prisma/seed.ts