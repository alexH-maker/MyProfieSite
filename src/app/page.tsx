'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Mail, Linkedin, MapPin, ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary/20 shadow-xl">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="头像" />
            <AvatarFallback className="text-3xl">张三</AvatarFallback>
          </Avatar>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              你好，我是张三
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              全栈开发工程师 / 技术爱好者 / 开源贡献者
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>北京，中国</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Button size="lg" className="gap-2">
              <Mail className="w-4 h-4" />
              联系我
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <ExternalLink className="w-4 h-4" />
              查看简历
            </Button>
          </div>

          <div className="flex gap-6 mt-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:example@email.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <Card className="max-w-4xl mx-auto border-none shadow-lg bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-3xl">关于我</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4 text-base leading-relaxed">
            <p>
              我是一名充满激情的全栈开发工程师，拥有5年的软件开发经验。专注于构建高性能、用户友好的Web应用程序。
            </p>
            <p>
              我热爱技术，喜欢探索新的技术栈和工具。在工作中，我注重代码质量和用户体验，致力于交付高质量的软件产品。
            </p>
            <p>
              业余时间，我喜欢阅读技术博客、参与开源项目、以及分享我的技术见解。我相信技术可以改变世界，并愿意为此贡献自己的力量。
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">技术栈</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend */}
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="text-2xl">🎨</span> 前端开发
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Vue.js</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Redux</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Backend */}
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="text-2xl">⚙️</span> 后端开发
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Express</Badge>
                  <Badge variant="secondary">FastAPI</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Tools & Others */}
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="text-2xl">🛠️</span> 工具 & 其他
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">CI/CD</Badge>
                  <Badge variant="secondary">Linux</Badge>
                  <Badge variant="secondary">Nginx</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">项目作品</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <Card className="border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl">电商平台系统</CardTitle>
                <CardDescription>全栈电商解决方案</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  一个功能完整的电商平台，包含用户管理、商品管理、购物车、订单系统、支付集成等核心功能。
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">Stripe</Badge>
                </div>
                <div className="flex gap-3 pt-2">
                  <Button size="sm" variant="outline" className="gap-2">
                    <ExternalLink className="w-3 h-3" />
                    演示
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Github className="w-3 h-3" />
                    源码
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl">任务管理应用</CardTitle>
                <CardDescription>团队协作工具</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  一个现代化的任务管理应用，支持团队协作、任务分配、进度跟踪、实时通知等功能。
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                  <Badge variant="outline">Socket.io</Badge>
                </div>
                <div className="flex gap-3 pt-2">
                  <Button size="sm" variant="outline" className="gap-2">
                    <ExternalLink className="w-3 h-3" />
                    演示
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Github className="w-3 h-3" />
                    源码
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl">数据可视化仪表板</CardTitle>
                <CardDescription>数据分析平台</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  一个交互式数据可视化仪表板，支持多种图表类型、实时数据更新、自定义报表导出。
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Vue.js</Badge>
                  <Badge variant="outline">D3.js</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">FastAPI</Badge>
                </div>
                <div className="flex gap-3 pt-2">
                  <Button size="sm" variant="outline" className="gap-2">
                    <ExternalLink className="w-3 h-3" />
                    演示
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Github className="w-3 h-3" />
                    源码
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card className="border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl">博客系统</CardTitle>
                <CardDescription>个人博客平台</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  一个支持Markdown编辑、代码高亮、评论系统、RSS订阅的现代博客平台。
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">MDX</Badge>
                  <Badge variant="outline">Prisma</Badge>
                  <Badge variant="outline">Vercel</Badge>
                </div>
                <div className="flex gap-3 pt-2">
                  <Button size="sm" variant="outline" className="gap-2">
                    <ExternalLink className="w-3 h-3" />
                    演示
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Github className="w-3 h-3" />
                    源码
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-muted/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">联系方式</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            如果你有任何问题或想与我合作，欢迎随时联系我！
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Mail className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">邮箱</h3>
                <p className="text-sm text-muted-foreground">example@email.com</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Github className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-sm text-muted-foreground">@username</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Linkedin className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">张三</p>
              </CardContent>
            </Card>
          </div>

          <Button size="lg" className="mt-8 gap-2">
            <Mail className="w-4 h-4" />
            发送邮件
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground text-sm">
        <p>© 2024 张三. All rights reserved.</p>
        <p className="mt-2">用 ❤️ 和 Next.js 构建</p>
      </footer>
    </div>
  );
}
