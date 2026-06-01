import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/1e8cde08-419c-4da0-892f-78281648c1b5/files/c773ce82-add9-4466-af8a-e4c3965ef868.jpg';

const NAV = [
  { id: 'about', label: 'О Анне' },
  { id: 'services', label: 'Услуги' },
  { id: 'gallery', label: 'Расклады' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'booking', label: 'Запись' },
  { id: 'contacts', label: 'Контакты' },
];

const SERVICES = [
  {
    icon: 'Heart',
    title: 'Расклад на отношения',
    desc: 'Узнаете чувства партнёра, перспективы союза и путь к гармонии.',
    duration: '60 мин',
    price: '3 500 ₽',
  },
  {
    icon: 'Compass',
    title: 'Жизненный путь',
    desc: 'Направление, предназначение и ключевые повороты вашей судьбы.',
    duration: '90 мин',
    price: '5 000 ₽',
  },
  {
    icon: 'Coins',
    title: 'Финансы и карьера',
    desc: 'Денежные потоки, рабочие решения и время для важных шагов.',
    duration: '60 мин',
    price: '4 000 ₽',
  },
  {
    icon: 'Moon',
    title: 'Расклад на год',
    desc: 'Подробная карта 12 месяцев — события, риски и возможности.',
    duration: '120 мин',
    price: '7 500 ₽',
  },
  {
    icon: 'Sparkles',
    title: 'Быстрый вопрос',
    desc: 'Один точный вопрос — один ясный ответ от карт здесь и сейчас.',
    duration: '30 мин',
    price: '2 000 ₽',
  },
  {
    icon: 'Eye',
    title: 'Глубокая диагностика',
    desc: 'Энергетика, блоки и кармические узлы вашей ситуации.',
    duration: '90 мин',
    price: '6 000 ₽',
  },
];

const GALLERY = [
  { icon: 'Sun', title: 'Кельтский крест', tag: '10 карт' },
  { icon: 'Star', title: 'Звезда судьбы', tag: '7 карт' },
  { icon: 'Heart', title: 'Расклад на любовь', tag: '5 карт' },
  { icon: 'Moon', title: 'Лунный цикл', tag: '12 карт' },
];

const REVIEWS = [
  {
    name: 'Екатерина',
    text: 'Анна увидела то, о чём я не говорила вслух. Расклад попал в самую точку и дал силы двигаться дальше.',
  },
  {
    name: 'Дмитрий',
    text: 'Скептически относился к Таро, но консультация удивила точностью. Решение по работе оказалось верным.',
  },
  {
    name: 'Марина',
    text: 'Тёплая, чуткая и невероятно точная. После сессии стало спокойно на душе. Обязательно вернусь.',
  },
];

const SLOTS = [
  { day: 'Пн', date: '2 июня', free: 3 },
  { day: 'Вт', date: '3 июня', free: 1 },
  { day: 'Ср', date: '4 июня', free: 0 },
  { day: 'Чт', date: '5 июня', free: 4 },
  { day: 'Пт', date: '6 июня', free: 2 },
];

const Stars = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {Array.from({ length: 40 }).map((_, i) => (
      <span
        key={i}
        className="absolute rounded-full bg-gold-soft animate-twinkle"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          animationDelay: `${Math.random() * 3}s`,
        }}
      />
    ))}
  </div>
);

const Index = () => {
  const [selected, setSelected] = useState<number | null>(3);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="bg-mystic min-h-screen text-foreground font-body relative overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-night-deep/60 border-b border-gold/10">
        <nav className="container mx-auto flex items-center justify-between h-16 px-6">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2">
            <Icon name="Moon" className="text-gold animate-float" size={22} />
            <span className="font-display text-2xl tracking-wide text-gradient-gold">Анна · Таро</span>
          </button>
          <div className="hidden md:flex items-center gap-8 text-sm text-foreground/70">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="hover:text-gold transition-colors"
              >
                {n.label}
              </button>
            ))}
          </div>
          <Button
            onClick={() => scrollTo('booking')}
            className="bg-gold hover:bg-gold-soft text-night font-medium rounded-full px-5"
          >
            Записаться
          </Button>
        </nav>
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center pt-16">
        <Stars />
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="animate-fade-up flex items-center gap-2 text-gold/80 text-sm tracking-[0.3em] uppercase mb-6">
              <span className="h-px w-8 bg-gold/50" /> Таролог · эзотерик
            </div>
            <h1
              className="font-display text-5xl md:text-7xl leading-[1.05] mb-6 animate-fade-up"
              style={{ animationDelay: '0.1s', opacity: 0 }}
            >
              Карты знают <br />
              <span className="text-gradient-gold italic">ваш путь</span>
            </h1>
            <p
              className="text-foreground/70 text-lg max-w-md mb-8 animate-fade-up"
              style={{ animationDelay: '0.25s', opacity: 0 }}
            >
              Анна читает Таро более 9 лет. Помогает обрести ясность в любви,
              деньгах и судьбе — мягко, честно и без страха.
            </p>
            <div
              className="flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: '0.4s', opacity: 0 }}
            >
              <Button
                onClick={() => scrollTo('booking')}
                className="bg-gold hover:bg-gold-soft text-night font-medium rounded-full px-7 h-12 animate-glow"
              >
                Записаться на расклад
              </Button>
              <Button
                onClick={() => scrollTo('services')}
                variant="outline"
                className="border-gold/40 text-gold hover:bg-gold/10 hover:text-gold-soft rounded-full px-7 h-12 bg-transparent"
              >
                Смотреть услуги
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <div className="absolute -inset-6 rounded-full bg-gold/10 blur-3xl" />
            <div className="absolute inset-0 rounded-[2rem] border border-gold/20 animate-spin-slow" />
            <img
              src={HERO_IMG}
              alt="Таролог Анна"
              className="relative rounded-[2rem] w-full object-cover aspect-square shadow-2xl shadow-black/60"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 relative">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: '9+', l: 'лет практики' },
              { n: '2 400', l: 'раскладов' },
              { n: '780', l: 'клиентов' },
              { n: '4.9', l: 'средний рейтинг' },
            ].map((s) => (
              <div key={s.l} className="glass-gold rounded-2xl p-6 text-center transition-colors">
                <div className="font-display text-4xl text-gradient-gold">{s.n}</div>
                <div className="text-foreground/60 text-sm mt-1">{s.l}</div>
              </div>
            ))}
          </div>
          <div>
            <p className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-4">О Анне</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Проводник между <span className="text-gradient-gold italic">вопросом</span> и ответом
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Я начала изучать Таро как способ услышать себя — и со временем это
              стало моим призванием. Карты не предсказывают неизбежное, они
              показывают возможности и помогают сделать осознанный выбор.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              На консультации нет осуждения и страшилок. Только бережный
              разговор, честные образы карт и поддержка на вашем пути.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-4">Услуги</p>
            <h2 className="font-display text-4xl md:text-5xl">
              Выберите <span className="text-gradient-gold italic">свой расклад</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="glass-gold rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <Icon name={s.icon} className="text-gold" size={24} />
                </div>
                <h3 className="font-display text-2xl mb-2">{s.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-5">{s.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gold/10">
                  <span className="flex items-center gap-1.5 text-foreground/60 text-sm">
                    <Icon name="Clock" size={15} className="text-gold/70" /> {s.duration}
                  </span>
                  <span className="font-display text-xl text-gradient-gold">{s.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-4">Галерея</p>
            <h2 className="font-display text-4xl md:text-5xl">
              Авторские <span className="text-gradient-gold italic">расклады</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY.map((g) => (
              <div
                key={g.title}
                className="relative aspect-[3/4] rounded-2xl glass-gold overflow-hidden flex flex-col items-center justify-center gap-4 transition-all hover:-translate-y-1 group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-night-deep/80 to-transparent" />
                <Icon
                  name={g.icon}
                  className="text-gold relative z-10 group-hover:animate-float"
                  size={48}
                />
                <div className="relative z-10 text-center">
                  <div className="font-display text-2xl">{g.title}</div>
                  <div className="text-foreground/50 text-sm">{g.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-4">Отзывы</p>
            <h2 className="font-display text-4xl md:text-5xl">
              Слова <span className="text-gradient-gold italic">благодарности</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div key={r.name} className="glass-gold rounded-2xl p-7 transition-colors">
                <div className="flex gap-1 mb-4 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="Star" size={16} fallback="Star" />
                  ))}
                </div>
                <p className="text-foreground/75 leading-relaxed italic mb-5">«{r.text}»</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center font-display text-gold">
                    {r.name[0]}
                  </div>
                  <span className="font-medium">{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-28">
        <div className="container mx-auto px-6">
          <div className="glass-gold rounded-3xl p-8 md:p-14 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative">
              <p className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-4 text-center">Запись</p>
              <h2 className="font-display text-4xl md:text-5xl text-center mb-3">
                Выберите <span className="text-gradient-gold italic">свободный день</span>
              </h2>
              <p className="text-foreground/60 text-center mb-10">
                Консультации длятся 30–120 минут. Слоты обновляются ежедневно.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
                {SLOTS.map((s, i) => {
                  const full = s.free === 0;
                  const active = selected === i;
                  return (
                    <button
                      key={s.date}
                      disabled={full}
                      onClick={() => setSelected(i)}
                      className={`rounded-2xl p-4 text-center transition-all border ${
                        full
                          ? 'opacity-40 cursor-not-allowed border-foreground/10'
                          : active
                          ? 'border-gold bg-gold/15 -translate-y-1'
                          : 'border-gold/15 hover:border-gold/40 hover:-translate-y-0.5'
                      }`}
                    >
                      <div className="text-foreground/60 text-xs uppercase tracking-wide">{s.day}</div>
                      <div className="font-display text-xl my-1">{s.date}</div>
                      <div className={`text-xs ${full ? 'text-foreground/40' : 'text-gold'}`}>
                        {full ? 'нет мест' : `${s.free} свободно`}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-foreground/70 text-sm">
                  <Icon name="CalendarCheck" size={18} className="text-gold" />
                  {selected !== null && SLOTS[selected].free > 0
                    ? `Выбрано: ${SLOTS[selected].date} · осталось ${SLOTS[selected].free}`
                    : 'Выберите день для записи'}
                </div>
                <Button className="bg-gold hover:bg-gold-soft text-night font-medium rounded-full px-8 h-12">
                  Подтвердить запись
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS / FOOTER */}
      <footer id="contacts" className="py-20 border-t border-gold/10">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Moon" className="text-gold" size={22} />
              <span className="font-display text-2xl text-gradient-gold">Анна · Таро</span>
            </div>
            <p className="text-foreground/60 text-sm max-w-xs">
              Мистические расклады и бережные консультации онлайн и в Москве.
            </p>
          </div>
          <div>
            <h4 className="font-display text-xl mb-4 text-gold">Контакты</h4>
            <ul className="space-y-3 text-foreground/70 text-sm">
              <li className="flex items-center gap-3">
                <Icon name="Instagram" size={18} className="text-gold/70" />
                <a
                  href="https://www.instagram.com/anyayaninas/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  @anyayaninas
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Send" size={18} className="text-gold/70" /> Telegram
              </li>
              <li className="flex items-center gap-3">
                <Icon name="MapPin" size={18} className="text-gold/70" /> Москва · онлайн
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xl mb-4 text-gold">Часы приёма</h4>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li className="flex justify-between"><span>Пн — Пт</span><span className="text-gold/80">11:00 — 21:00</span></li>
              <li className="flex justify-between"><span>Сб — Вс</span><span className="text-gold/80">12:00 — 18:00</span></li>
            </ul>
          </div>
        </div>
        <div className="hairline h-px my-10 container mx-auto" />
        <p className="text-center text-foreground/40 text-xs">
          © {new Date().getFullYear()} Анна · Таро. Сделано с любовью к звёздам.
        </p>
      </footer>
    </div>
  );
};

export default Index;
