学習メモ

## メモ化
関数や変数の値を保持し、同一の呼び出しがあったときにその値を返す（再利用する）仕組み。

## useCallback
コールバック関数をメモ化し、その関数を返すフック。
useCallback(関数, [])
第1引数にメモ化する関数を指定
第2引数に配列を指定

再描画が行われる際のuseCallbackの挙動は以下のようになる
　再描画前と再描画後で配列の中の値が同じ→メモ化時に作成した関数を返す
　再描画前と再描画後で配列の中の値が異なる→新しく関数を作成し、それを返す

基本的に、再描画に伴う不要な関数の再作成を防ぐためにuseCallbackが使われる

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
