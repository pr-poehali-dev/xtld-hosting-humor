import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "⚠️ Сообщение отправлено. Наверное.",
      description: "Если сервер не упал — ответим в течение недели. Или месяца.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-primary glitch">XTLD.RU</span>
            <span className="text-xs text-destructive font-bold">BETA∞</span>
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-sm hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">О нас</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-primary transition-colors">Контакты</button>
          </div>
        </nav>
      </header>

      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 border border-destructive/50 rounded-full bg-destructive/10">
            <Icon name="AlertTriangle" size={16} className="text-destructive" />
            <span className="text-sm font-semibold text-destructive">Работает. Пока не упадёт.</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 glitch">
            XTLD.RU
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-muted-foreground max-w-3xl mx-auto">
            Хостинг <span className="text-primary font-bold">по-братски</span> на подручных средствах
          </p>

          <div className="max-w-2xl mx-auto space-y-4 mb-12">
            <p className="text-lg text-foreground/80">«Мы не обещаем аптайм. Мы обещаем эмоции.»</p>
            <p className="text-lg text-foreground/80">«Настоящий DevOps плачет, когда видит наш DNS.»</p>
            <p className="text-lg text-foreground/80">«Где топ-левел — не предел.»</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
              onClick={() => scrollToSection('contact')}
            >
              <Icon name="Rocket" size={20} className="mr-2" />
              Попробовать бесплатно
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-destructive text-destructive hover:bg-destructive/10"
              onClick={() => scrollToSection('about')}
            >
              <Icon name="Skull" size={20} className="mr-2" />
              История провала
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-primary/30 bg-card/50">
              <CardContent className="pt-6">
                <Icon name="Zap" size={32} className="text-primary mb-4 mx-auto" />
                <h3 className="font-bold text-lg mb-2">Скорость света*</h3>
                <p className="text-sm text-muted-foreground">*если звёзды сошлись и сервер не в свопе</p>
              </CardContent>
            </Card>

            <Card className="border-destructive/30 bg-card/50">
              <CardContent className="pt-6">
                <Icon name="ShieldAlert" size={32} className="text-destructive mb-4 mx-auto" />
                <h3 className="font-bold text-lg mb-2">99.9% аптайма**</h3>
                <p className="text-sm text-muted-foreground">**за последние 10 минут работы</p>
              </CardContent>
            </Card>

            <Card className="border-primary/30 bg-card/50">
              <CardContent className="pt-6">
                <Icon name="Activity" size={32} className="text-primary mb-4 mx-auto" />
                <h3 className="font-bold text-lg mb-2">Честный мониторинг</h3>
                <p className="text-sm text-muted-foreground">Покажем всё. Даже когда стыдно.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              История создания <span className="text-destructive">под столом</span>
            </h2>
            <p className="text-xl text-muted-foreground">Один человек, железо из 2012 года, и много упорства</p>
          </div>

          <div className="space-y-8">
            <Card className="border-l-4 border-l-primary bg-card/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl">🍺</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">2012: Начало пути</h3>
                    <p className="text-muted-foreground">
                      Один энтузиаст решил: «Зачем платить за хостинг, если есть старый десктоп?». 
                      Десктоп на Intel i3-2120 2012 года нашёл своё призвание.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-destructive bg-card/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Первый сервер: i3-2120</h3>
                    <p className="text-muted-foreground">
                      Десктоп под столом. Никакого дата-центра — только комната и вентилятор. 
                      Работал круглосуточно. Отключения света — единственный враг.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary bg-card/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl">🔥</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Апгрейд 2017: Супермикро</h3>
                    <p className="text-muted-foreground">
                      Переезд на Supermicro 2011 года выпуска. Но с важным апгрейдом — прошивка BIOS от 2017 года. 
                      Всё так же под столом. Всё так же в рабочем состоянии.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-destructive bg-card/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Сегодня: Всё там же</h3>
                    <p className="text-muted-foreground">
                      Никаких облаков. Сервер по-прежнему под столом. Мониторинг — телеграм-бот. 
                      Но зато честно, дёшево и с гарантией отсутствия гарантий.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-6 border-2 border-dashed border-primary/30 rounded-lg bg-primary/5">
            <p className="text-center text-lg">
              <span className="font-bold text-primary">XTLD.RU</span> — лаборатория доменов, DNS и безумия. 
              <br className="hidden md:block" />
              Хостинг, где X — это неизвестная стабильность.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4 border-t border-border">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Связаться с нами
            </h2>
            <p className="text-xl text-muted-foreground">Если осмелитесь доверить нам свой проект</p>
          </div>

          <Card className="bg-card/50">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Иван Иванович"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-background min-h-32"
                  />
                </div>

                <div className="p-4 border border-destructive/50 rounded bg-destructive/10">
                  <div className="flex gap-2 mb-2">
                    <Icon name="AlertTriangle" size={20} className="text-destructive flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-destructive text-sm">Дисклеймер</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Отправляя форму, вы соглашаетесь с тем, что мы можем ответить через неделю. Или не ответить вообще, 
                        если сервер упадёт. Но мы очень стараемся!
                      </p>
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                  size="lg"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить в неизвестность
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 text-center space-y-4">
            <p className="text-muted-foreground">Или пишите напрямую:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:support@xtld.ru" className="flex items-center gap-2 text-primary hover:underline">
                <Icon name="Mail" size={20} />
                support@xtld.ru
              </a>
              <a href="https://t.me/xtld" className="flex items-center gap-2 text-primary hover:underline">
                <Icon name="Send" size={20} />
                @xtld
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground mb-2">
            © 2024 XTLD.RU — хостинг под столом
          </p>
          <p className="text-xs text-muted-foreground">
            Сделано с любовью, болью и Stack Overflow
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;