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
              你好，我是HN
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              机器人视觉工程师 / 技术爱好者 / 视觉工程应用
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>上海杨浦，中国</span>
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
              我是一名充满激情的视觉工程师，拥有5年的视觉开发经验。专注于构建高性能、沉浸式的视觉体验与实时渲染应用。
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 工业相机与硬件 */}
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="text-2xl">📷</span> 工业相机与硬件
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">2D工业相机</Badge>
                  <Badge variant="secondary">3D视觉相机</Badge>
                  <Badge variant="secondary">智能相机</Badge>
                  <Badge variant="secondary">运动控制</Badge>
                  <Badge variant="secondary">光源控制器</Badge>
                </div>
              </CardContent>
            </Card>

            {/* 视觉软件与平台 */}
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="text-2xl">🔧</span> 视觉软件与平台
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">智能视觉软件Cognex VisionPro</Badge>
                  <Badge variant="secondary">深度学习平台Cognex Deep Learning</Badge>
                  <Badge variant="secondary">传统算法库OpenCV</Badge>
                  <Badge variant="secondary">机器人通讯ROS</Badge>
                </div>
              </CardContent>
            </Card>

            {/* 编程与开发 */}
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="text-2xl">💻</span> 编程与开发
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">C++</Badge>
                  <Badge variant="secondary">C#</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Mech-Eye API</Badge>
                  <Badge variant="secondary">Qt</Badge>
                  <Badge variant="secondary">TCP/IP</Badge>
                  <Badge variant="secondary">Modbus</Badge>
                </div>
              </CardContent>
            </Card>

            {/* 标定与工具 */}
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="text-2xl">🛠️</span> 标定与工具
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">手眼标定</Badge>
                  <Badge variant="secondary">棋盘格标定</Badge>
                  <Badge variant="secondary">圆点标定板</Badge>
                  <Badge variant="secondary">球棒标定</Badge>
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
                <CardTitle className="text-xl">视觉引导机器人码垛</CardTitle>
                <CardDescription>智能仓储物流自动化解决方案</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  基于3D视觉引导的机器人自动码垛系统，实现纸箱/袋装物料的精准识别、姿态估计与最优码放路径规划，支持混码、拆码及多SKU动态调度。
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Mech-Eye</Badge>
                  <Badge variant="outline">Mech-Vision</Badge>
                  <Badge variant="outline">C++</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">ROS</Badge>
                  <Badge variant="outline">ABB</Badge>
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
                <CardTitle className="text-xl">机器人无序抓取工件上下料</CardTitle>
                <CardDescription>Bin Picking智能制造核心应用</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  针对深筐散乱堆叠工件的3D视觉引导抓取系统，集成碰撞检测、抓取姿态生成与运动规划算法，实现CNC机床、压铸机的全自动上下料。
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Photoneo</Badge>
                  <Badge variant="outline">HALCON</Badge>
                  <Badge variant="outline">Cognex Deep Learning</Badge>
                  <Badge variant="outline">C#</Badge>
                  <Badge variant="outline">WPF</Badge>
                  <Badge variant="outline">KUKA</Badge>
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
                <CardTitle className="text-xl">视觉引导定位装配</CardTitle>
                <CardDescription>高精度装配对位系统</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  亚毫米级精度的2D/3D视觉定位系统，用于汽车零部件、3C电子等精密装配场景，实现销孔对位、轴孔装配、贴合对位等复杂工艺。
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Basler</Badge>
                  <Badge variant="outline">Cognex VisionPro</Badge>
                  <Badge variant="outline">VisionMaster</Badge>
                  <Badge variant="outline">C++</Badge>
                  <Badge variant="outline">Qt</Badge>
                  <Badge variant="outline">EtherCAT</Badge>
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
                <CardTitle className="text-xl">视觉引导钢板加工</CardTitle>
                <CardDescription>重工业板材智能分拣与切割</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  大型钢板/型材的3D视觉识别与引导系统，支持激光切割、等离子切割、坡口加工等工艺，实现来料定位、余料管理、切割路径优化与自动分拣。
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Hikrobot</Badge>
                  <Badge variant="outline">Mech-DLK</Badge>
                  <Badge variant="outline">OpenCV</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Modbus</Badge>
                  <Badge variant="outline">Docker</Badge>
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
                <p className="text-sm text-muted-foreground">h15296356826@126.com</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Github className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-sm text-muted-foreground">@alexH-maker</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Linkedin className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">HN Huang</p>
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
        <p>© 2026 HN Huang. All rights reserved.</p>
        <p className="mt-2">用 Next.js 构建</p>
      </footer>
    </div>
  );
}
