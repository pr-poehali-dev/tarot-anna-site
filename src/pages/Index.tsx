import { useState } from 'react';
import Icon from '@/components/ui/icon';

const PORTRAIT =
  'https://cdn.poehali.dev/projects/1e8cde08-419c-4da0-892f-78281648c1b5/files/c773ce82-add9-4466-af8a-e4c3965ef868.jpg';
const CARD_BACK =
  'https://cdn.poehali.dev/projects/1e8cde08-419c-4da0-892f-78281648c1b5/files/786efedd-1720-44d3-958f-aacab9545c3c.jpg';
const HANDS =
  'https://cdn.poehali.dev/projects/1e8cde08-419c-4da0-892f-78281648c1b5/files/2330c8dd-3508-4aab-bd27-5a6941c43111.jpg';

const NAV = [
  { id: 'about', label: 'О Анне' },
  { id: 'services', label: 'Услуги' },
  { id: 'gallery', label: 'Расклады' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'booking', label: 'Запись' },
  { id: 'contacts', label: 'Контакты' },
];

const SERVICES = [
  { icon: 'Heart', title: 'Расклад на отношения', desc: 'Чувства партнёра, перспективы союза и путь к гармонии.', duration: '60 мин', price: '3 500 ₽' },
  { icon: 'Compass', title: 'Жизненный путь', desc: 'Направление, предназначение и ключевые повороты судьбы.', duration: '90 мин', price: '5 000 ₽' },
  { icon: 'Coins', title: 'Финансы и карьера', desc: 'Денежные потоки, рабочие решения и время для шагов.', duration: '60 мин', price: '4 000 ₽' },
  { icon: 'CalendarRange', title: 'Расклад на год', desc: 'Карта 12 месяцев — события, риски и возможности.', duration: '120 мин', price: '7 500 ₽' },
  { icon: 'Sparkles', title: 'Быстрый вопрос', desc: 'Один точный вопрос — один ясный ответ здесь и сейчас.', duration: '30 мин', price: '2 000 ₽' },
  { icon: 'Eye', title: 'Глубокая диагностика', desc: 'Энергетика, блоки и кармические узлы ситуации.', duration: '90 мин', price: '6 000 ₽' },
];

const GALLERY = [
  { title: 'Кельтский крест', tag: '10 карт' },
  { title: 'Звезда судьбы', tag: '7 карт' },
  { title: 'Расклад на любовь', tag: '5 карт' },
  { title: 'Лунный цикл', tag: '12 карт' },
];

const REVIEWS = [
  { name: 'Екатерина', text: 'Анна увидела то, о чём я не говорила вслух. Расклад попал в точку и дал силы двигаться дальше.' },
  { name: 'Дмитрий', text: 'Скептически относился к Таро, но консультация удивила точностью. Решение по работе оказалось верным.' },
  { name: 'Марина', text: 'Тёплая, чуткая и невероятно точная. После сессии стало спокойно на душе. Обязательно вернусь.' },
];

const SLOTS = [
  { day: 'Пн', date: '2 июня', free: 3 },
  { day: 'Вт', date: '3 июня', free: 1 },
  { day: 'Ср', date: '4 июня', free: 0 },
  { day: 'Чт', date: '5 июня', free: 4 },
  { day: 'Пт', date: '6 июня', free: 2 },
];

const Stars = () => (
  <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
    {Array.from({ length: 60 }).map((_, i) => (
      <span
        key={i}
        className="absolute rounded-full bg-gold-soft animate-twinkle"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 2.5 + 1}px`,
          height: `${Math.random() * 2.5 + 1}px`,
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
    <div className="bg-mystic min-h-screen text-gold-soft font-body relative overflow-x-hidden">
      <Stars />

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 bg-night-deep/70 backdrop-blur-md border-b border-gold/10">
        <nav className="max-w-6xl mx-auto flex items-center justify-between h-20 px-6 lg:px-8">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2">
            <Icon name="Moon" className="text-gold animate-float" size={20} />
            <span className="font-display text-2xl tracking-tight text-gradient-gold">Анна · Таро</span>
          </button>
          <div className="hidden md:flex items-center gap-9 text-sm text-gold-soft/60">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="hover:text-gold transition-colors">
                {n.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollTo('booking')}
            className="text-sm bg-gold/10 border border-gold/30 rounded-full px-5 py-2.5 text-gold hover:bg-gold hover:text-night transition-colors"
          >
            Записаться
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section id="hero" className="relative z-10 min-h-screen flex items-center pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center w-full">
          <div className="relative z-10">
            <div className="animate-fade-up flex items-center gap-3 text-gold/80 text-xs tracking-[0.35em] uppercase mb-8">
              <span className="h-px w-10 bg-gold/50" /> Таролог · эзотерик
            </div>
            <h1 className="font-display font-light text-6xl md:text-8xl leading-[0.92] tracking-tight animate-fade-up text-glow" style={{ animationDelay: '0.1s', opacity: 0 }}>
              Загляни<br />в зеркало<br /><span className="italic text-gradient-gold">судьбы</span>
            </h1>
            <p className="text-gold-soft/65 text-lg max-w-md mt-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.25s', opacity: 0 }}>
              Бережные расклады Таро для тех, кто ищет ответы о любви, деле и
              судьбе. Без страха и осуждения — только свет истины.
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-10 animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <button
                onClick={() => scrollTo('booking')}
                className="bg-gold text-night font-medium rounded-full px-8 py-4 text-sm tracking-wide hover:bg-gold-soft transition-colors animate-glow"
              >
                Записаться на расклад
              </button>
              <button onClick={() => scrollTo('services')} className="text-sm text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors">
                Услуги и цены
              </button>
            </div>
          </div>

          {/* Floating tarot cards */}
          <div className="relative h-[460px] animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <div className="absolute inset-0 rounded-full bg-violet/20 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[230px] aspect-[2/3] rounded-2xl overflow-hidden border border-gold/30 shadow-2xl shadow-violet/40 z-20 animate-float">
              <img src={PORTRAIT} alt="Анна" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-[120%] -translate-y-[55%] -rotate-12 w-[180px] aspect-[2/3] rounded-2xl overflow-hidden border border-gold/25 shadow-xl z-10 animate-float" style={{ animationDelay: '1s' }}>
              <img src={CARD_BACK} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-1/2 left-1/2 translate-x-[20%] -translate-y-[45%] rotate-12 w-[180px] aspect-[2/3] rounded-2xl overflow-hidden border border-gold/25 shadow-xl z-10 animate-float" style={{ animationDelay: '2s' }}>
              <img src={HANDS} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 border-t border-gold/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-28 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-violet/20 blur-3xl rounded-full" />
              <img src={HANDS} alt="Расклад Таро" className="relative rounded-2xl w-full aspect-[4/5] object-cover border border-gold/20" />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-gold/80 text-xs tracking-[0.35em] uppercase mb-5">О Анне</p>
            <h2 className="font-display font-light text-4xl md:text-5xl leading-tight mb-8">
              Проводник между <span className="italic text-gradient-gold">вопросом</span> и ответом
            </h2>
            <p className="text-gold-soft/70 text-lg leading-relaxed mb-6">
              Я начала изучать Таро как способ услышать себя — и со временем это
              стало моим призванием. Карты не предсказывают неизбежное, они
              показывают возможности и помогают сделать осознанный выбор.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { n: '9+', l: 'лет практики' },
                { n: '2 400', l: 'раскладов' },
                { n: '4.9', l: 'рейтинг' },
              ].map((s) => (
                <div key={s.l} className="glass rounded-2xl p-5 text-center">
                  <div className="font-display font-light text-4xl text-gradient-gold">{s.n}</div>
                  <div className="text-gold-soft/55 text-sm mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative z-10 border-t border-gold/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-28">
          <div className="text-center mb-16">
            <p className="text-gold/80 text-xs tracking-[0.35em] uppercase mb-4">Услуги</p>
            <h2 className="font-display font-light text-5xl md:text-6xl">Выберите <span className="italic text-gradient-gold">свой расклад</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="glass rounded-2xl p-8 hover:-translate-y-1.5 group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-violet/20 flex items-center justify-center mb-6">
                  <Icon name={s.icon} className="text-gold" size={26} />
                </div>
                <h3 className="font-display text-2xl font-light mb-3 group-hover:text-gold transition-colors">{s.title}</h3>
                <p className="text-gold-soft/55 text-sm leading-relaxed mb-6">{s.desc}</p>
                <div className="flex items-center justify-between pt-5 border-t border-gold/10">
                  <span className="flex items-center gap-1.5 text-gold-soft/55 text-sm">
                    <Icon name="Clock" size={14} className="text-gold/70" /> {s.duration}
                  </span>
                  <span className="font-display text-2xl text-gradient-gold">{s.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="relative z-10 border-t border-gold/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-28">
          <div className="text-center mb-16">
            <p className="text-gold/80 text-xs tracking-[0.35em] uppercase mb-4">Галерея</p>
            <h2 className="font-display font-light text-5xl md:text-6xl">Авторские <span className="italic text-gradient-gold">расклады</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {GALLERY.map((g, i) => (
              <div key={g.title} className="relative aspect-[3/4] rounded-2xl overflow-hidden group border border-gold/15">
                <img src={CARD_BACK} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-night-deep via-night/40 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <span className="font-display text-gold/70 text-xl">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <div className="font-display text-2xl font-light mb-1">{g.title}</div>
                    <div className="text-gold-soft/50 text-sm">{g.tag}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="relative z-10 border-t border-gold/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-28">
          <div className="text-center mb-16">
            <p className="text-gold/80 text-xs tracking-[0.35em] uppercase mb-4">Отзывы</p>
            <h2 className="font-display font-light text-5xl md:text-6xl">Слова <span className="italic text-gradient-gold">благодарности</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div key={r.name} className="glass rounded-2xl p-8">
                <Icon name="Quote" size={28} className="text-gold/50 mb-5" />
                <p className="font-display text-xl font-light leading-relaxed mb-6 italic">{r.text}</p>
                <div className="flex items-center gap-3 pt-5 border-t border-gold/10">
                  <span className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center font-display text-gold">{r.name[0]}</span>
                  <span className="text-sm text-gold-soft/60">{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="relative z-10 border-t border-gold/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-28">
          <div className="glass rounded-3xl p-8 md:p-14 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-violet/25 blur-3xl" />
            <div className="relative">
              <div className="text-center mb-10">
                <p className="text-gold/80 text-xs tracking-[0.35em] uppercase mb-4">Запись</p>
                <h2 className="font-display font-light text-4xl md:text-5xl mb-3">Выберите <span className="italic text-gradient-gold">свободный день</span></h2>
                <p className="text-gold-soft/55">Консультации длятся 30–120 минут. Слоты обновляются ежедневно.</p>
              </div>

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
                          ? 'opacity-35 cursor-not-allowed border-gold/10'
                          : active
                          ? 'border-gold bg-gold/15 -translate-y-1'
                          : 'border-gold/15 hover:border-gold/40 hover:-translate-y-0.5'
                      }`}
                    >
                      <div className="text-gold-soft/55 text-xs uppercase tracking-wide">{s.day}</div>
                      <div className="font-display text-xl my-1">{s.date}</div>
                      <div className={`text-xs ${full ? 'text-gold-soft/40' : 'text-gold'}`}>
                        {full ? 'нет мест' : `${s.free} свободно`}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <span className="flex items-center gap-2 text-gold-soft/65 text-sm">
                  <Icon name="CalendarCheck" size={18} className="text-gold" />
                  {selected !== null && SLOTS[selected].free > 0
                    ? `Выбрано: ${SLOTS[selected].date} · осталось ${SLOTS[selected].free}`
                    : 'Выберите день для записи'}
                </span>
                <button className="bg-gold text-night font-medium rounded-full px-8 py-4 text-sm tracking-wide hover:bg-gold-soft transition-colors">
                  Подтвердить запись
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS / FOOTER */}
      <footer id="contacts" className="relative z-10 border-t border-gold/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Moon" className="text-gold" size={20} />
              <span className="font-display text-2xl text-gradient-gold">Анна · Таро</span>
            </div>
            <p className="text-gold-soft/50 text-sm max-w-xs leading-relaxed">
              Расклады и бережные консультации онлайн и в Москве.
            </p>
          </div>
          <div>
            <p className="text-gold/80 text-xs tracking-[0.35em] uppercase mb-6">Контакты</p>
            <ul className="space-y-3 text-gold-soft/70 text-sm">
              <li>
                <a href="https://www.instagram.com/anyayaninas/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-gold transition-colors">
                  <Icon name="Instagram" size={16} /> @anyayaninas
                </a>
              </li>
              <li className="flex items-center gap-3"><Icon name="Send" size={16} /> Telegram</li>
              <li className="flex items-center gap-3"><Icon name="MapPin" size={16} /> Москва · онлайн</li>
            </ul>
          </div>
          <div>
            <p className="text-gold/80 text-xs tracking-[0.35em] uppercase mb-6">Часы приёма</p>
            <ul className="space-y-2 text-gold-soft/70 text-sm">
              <li className="flex justify-between max-w-[200px]"><span>Пн — Пт</span><span className="text-gold-soft/50">11:00 — 21:00</span></li>
              <li className="flex justify-between max-w-[200px]"><span>Сб — Вс</span><span className="text-gold-soft/50">12:00 — 18:00</span></li>
            </ul>
          </div>
        </div>
        <div className="hairline h-px max-w-6xl mx-auto" />
        <p className="text-center text-gold-soft/35 text-xs py-8">
          © {new Date().getFullYear()} Анна · Таро. Сделано с любовью к звёздам.
        </p>
      </footer>
    </div>
  );
};

export default Index;
