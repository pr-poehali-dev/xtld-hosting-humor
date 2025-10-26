import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Xtld() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 py-16">
        
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-black text-orange-500 mb-4">
            X-TLD
          </h1>
          <p className="text-2xl md:text-3xl text-orange-300 font-bold mb-2">
            Хостинг по-братски из говна и палок
          </p>
          <p className="text-xl text-slate-300">
            Где X — это неизвестная стабильность
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-slate-900/50 border-orange-800 p-8 text-center backdrop-blur">
            <p className="text-3xl md:text-4xl font-bold text-orange-400">
              «Мы не обещаем аптайм.<br />Мы обещаем эмоции.»
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card className="bg-slate-900/50 border-orange-800 p-6 backdrop-blur hover:bg-slate-900/70 transition-all">
            <div className="flex items-start gap-4">
              <Icon name="Server" className="text-orange-500 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-orange-400 mb-2">
                  Pentium 3 под столом
                </h3>
                <p className="text-slate-300">
                  Шумит как самолёт, греется как обогреватель. Зато характер!
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-900/50 border-orange-800 p-6 backdrop-blur hover:bg-slate-900/70 transition-all">
            <div className="flex items-start gap-4">
              <Icon name="Globe" className="text-orange-500 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-orange-400 mb-2">
                  DNS из преисподней
                </h3>
                <p className="text-slate-300">
                  Настоящий DevOps плачет, когда видит наш DNS. Мы тоже.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-900/50 border-orange-800 p-6 backdrop-blur hover:bg-slate-900/70 transition-all">
            <div className="flex items-start gap-4">
              <Icon name="Zap" className="text-orange-500 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-orange-400 mb-2">
                  Работает до упаду
                </h3>
                <p className="text-slate-300">
                  X-TLD: работает, пока не упадёт. А потом поднимается. Иногда.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-900/50 border-orange-800 p-6 backdrop-blur hover:bg-slate-900/70 transition-all">
            <div className="flex items-start gap-4">
              <Icon name="Activity" className="text-orange-500 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-orange-400 mb-2">
                  VPN сквозь пространство
                </h3>
                <p className="text-slate-300">
                  PBR, OSPF, BGP — всё через VPN между столами. Магия!
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-900/50 border-orange-800 p-6 backdrop-blur hover:bg-slate-900/70 transition-all">
            <div className="flex items-start gap-4">
              <Icon name="FlaskConical" className="text-orange-500 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-orange-400 mb-2">
                  Лаборатория безумия
                </h3>
                <p className="text-slate-300">
                  X-TLD — лаборатория доменов, DNS и безумия. Эксперименты 24/7.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-900/50 border-orange-800 p-6 backdrop-blur hover:bg-slate-900/70 transition-all">
            <div className="flex items-start gap-4">
              <Icon name="TrendingUp" className="text-orange-500 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-orange-400 mb-2">
                  Топ-левел не предел
                </h3>
                <p className="text-slate-300">
                  Где топ-левел — это только начало приключений.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-orange-900/30 to-slate-900/30 border-orange-700 p-8 backdrop-blur">
            <h2 className="text-3xl font-bold text-orange-400 mb-6 text-center">
              Наша инфраструктура
            </h2>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-start gap-3">
                <Icon name="Check" className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                <p>2007 — Pentium 3, первый сайт друга</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Check" className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                <p>2012 — Апгрейд на i3-2120, всё ещё под столом</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Check" className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                <p>2017 — Настоящее серверное железо (2011 года)</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Check" className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                <p>Сегодня — Несколько серверов, VPN, маршрутизация, хаос</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Card className="inline-block bg-slate-900/50 border-orange-800 p-8 backdrop-blur">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">
              Вдруг захотите прикольнуться с хостингом?
            </h2>
            <p className="text-slate-300 mb-4">
              Это всё хобби-проект для себя, но могу внедрить<br />наработанные best practices где-нибудь.
            </p>
            <div className="flex items-center justify-center gap-2 text-orange-300">
              <Icon name="Mail" size={20} />
              <span className="text-lg">Свяжитесь, если не страшно</span>
            </div>
          </Card>
        </div>

        <div className="mt-16 text-center text-slate-500 text-sm">
          <p>X-TLD © 2007-2025 · Один человек · Много экспериментов</p>
        </div>
      </div>
    </div>
  );
}
