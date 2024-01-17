#

# 설치
0. 템플릿 선정 [링크](https://vercel.com/templates/next.js?utm_source=next-site&utm_medium=navbar&utm_campaign=home)
1. /next.config.js [참고](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
```js
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images: {
      unoptimized: true,
    }
  }
   
module.exports = nextConfig
```
2. npm run build
3. npx serve ./dist
4. .gitignore
```js
# next.js
/.next/
/out/
/dist/
```