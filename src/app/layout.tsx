import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'alexH的个人主页',
    template: '%s | 视觉应用',
  },
  description:
    '视觉应用是专注于前端开发与用户体验设计的个人作品集，展示最新的Web开发技术与创意设计。',
  keywords: [
    '视觉应用',
    '前端开发',
    'UI/UX设计',
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    '作品集',
  ],
  authors: [{ name: 'My Team', url: 'https://my-profie-site.vercel.app' }],
  generator: '视觉应用',
  // icons: {
  //   icon: '',
  // },
  openGraph: {
    title: '视觉应用 | 专注前端开发与设计',
    description:
      '我正在使用扣子编程 Vibe Coding，让创意瞬间上线。告别拖拽，拥抱心流。',
    url: 'https://code.coze.cn',
    siteName: '视觉应用',
    locale: 'zh_CN',
    type: 'website',
    // images: [
    //   {
    //     url: '',
    //     width: 1200,
    //     height: 630,
    //     alt: '扣子编程 - 你的 AI 工程师',
    //   },
    // ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Coze Code | Your AI Engineer is Here',
  //   description:
  //     'Build and deploy full-stack applications through AI conversation. No env setup, just flow.',
  //   // images: [''],
  // },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="en">
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
