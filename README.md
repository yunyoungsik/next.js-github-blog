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
5. github에 업로드 후 settings에서 Pages에서 Build and deployment의 Source를 Github Actions로 설정 후 config를 눌러 nextjs.yml을 생성함
6. nextjs.yml
```js
- name: Static HTML export with Next.js //삭제
run: ${{ steps.detect-package-manager.outputs.runner }} next export //삭제

with:
path: ./out // dist로 변경
```