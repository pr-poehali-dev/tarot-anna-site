import { useState } from 'react';
import Icon from '@/components/ui/icon';

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
  { num: '01', title: 'Расклад на отношения', desc: 'Чувства партнёра, перспективы союза и путь к гармонии.', duration: '60 мин', price: '3 500 ₽' },
  { num: '02', title: 'Жизненный путь', desc: 'Направление, предназначение и ключевые повороты судьбы.', duration: '90 мин', price: '5 000 ₽' },
  { num: '03', title: 'Финансы и карьера', desc: 'Денежные потоки, рабочие решения и время для шагов.', duration: '60 мин', price: '4 000 ₽' },
  { num: '04', title: 'Расклад на год', desc: 'Карта 12 месяцев — события, риски и возможности.', duration: '120 мин', price: '7 500 ₽' },
  { num: '05', title: 'Быстрый вопрос', desc: 'Один точный вопрос — один ясный ответ здесь и сейчас.', duration: '30 мин', price: '2 000 ₽' },
  { num: '06', title: 'Глубокая диагностика', desc: 'Энергетика, блоки и кармические узлы ситуации.', duration: '90 мин', price: '6 000 ₽' },
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

const Index = () => {
  const [selected, setSelected] = useState<number | null>(3);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="bg-cream min-h-screen text-ink font-body antialiased">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 bg-cream/80 backdrop-blur-md border-b border-ink/8">
        <nav className="max-w-6xl mx-auto flex items-center justify-between h-20 px-6 lg:px-8">
          <button onClick={() => scrollTo('hero')} className="font-display text-2xl tracking-tight">
            Анна<span className="text-clay"> · Таро</span>
          </button>
          <div className="hidden md:flex items-center gap-9 text-sm text-ink/60">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="hover:text-ink transition-colors">
                {n.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollTo('booking')}
            className="text-sm border border-ink/20 rounded-full px-5 py-2.5 hover:bg-ink hover:text-cream transition-colors"
          >
            Записаться
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section id="hero" className="max-w-6xl mx-auto px-6 lg:px-8 pt-40 pb-28">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7 animate-fade-up">
            <p className="text-clay text-xs tracking-[0.35em] uppercase mb-8">Таролог · с 2016 года</p>
            <h1 className="font-display font-light text-6xl md:text-8xl leading-[0.95] tracking-tight">
              Ясность<br />в каждой<br /><span className="italic text-clay">карте</span>
            </h1>
            <p className="text-ink/60 text-lg max-w-md mt-10 leading-relaxed">
              Бережные расклады Таро для тех, кто ищет ответы о любви, деле и
              судьбе. Без страха и осуждения — только честный разговор.
            </p>
            <div className="flex items-center gap-8 mt-10">
              <button
                onClick={() => scrollTo('booking')}
                className="bg-ink text-cream rounded-full px-8 py-4 text-sm tracking-wide hover:bg-clay transition-colors"
              >
                Записаться на расклад
              </button>
              <button onClick={() => scrollTo('services')} className="text-sm border-b border-ink/30 pb-1 hover:border-ink transition-colors">
                Услуги и цены
              </button>
            </div>
          </div>
          <div className="md:col-span-5 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img src={HERO_IMG} alt="Таролог Анна" className="w-full h-full object-cover grayscale-[15%]" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-ink/8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-clay text-xs tracking-[0.35em] uppercase">О Анне</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display font-light text-4xl md:text-5xl leading-tight mb-10">
              Проводник между вопросом и ответом
            </h2>
            <p className="text-ink/70 text-lg leading-relaxed mb-6 max-w-xl">
              Я начала изучать Таро как способ услышать себя — и со временем это
              стало моим призванием. Карты не предсказывают неизбежное, они
              показывают возможности и помогают сделать осознанный выбор.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-14 pt-10 border-t border-ink/8">
              {[
                { n: '9+', l: 'лет практики' },
                { n: '2 400', l: 'раскладов' },
                { n: '4.9', l: 'рейтинг' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display font-light text-5xl">{s.n}</div>
                  <div className="text-ink/50 text-sm mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-ink/8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-28">
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="font-display font-light text-4xl md:text-5xl">Услуги</h2>
            <p className="text-clay text-xs tracking-[0.35em] uppercase hidden sm:block">Цены и длительность</p>
          </div>
          <div className="border-t border-ink/8">
            {SERVICES.map((s) => (
              <div
                key={s.num}
                className="group grid md:grid-cols-12 gap-4 items-center py-8 border-b border-ink/8 hover:bg-cream-deep/60 transition-colors -mx-6 px-6 lg:-mx-8 lg:px-8"
              >
                <span className="md:col-span-1 text-clay/70 font-display text-xl">{s.num}</span>
                <h3 className="md:col-span-4 font-display text-2xl md:text-3xl font-light group-hover:text-clay transition-colors">{s.title}</h3>
                <p className="md:col-span-4 text-ink/55 text-sm leading-relaxed">{s.desc}</p>
                <span className="md:col-span-2 text-ink/50 text-sm flex items-center gap-2">
                  <Icon name="Clock" size={14} /> {s.duration}
                </span>
                <span className="md:col-span-1 font-display text-2xl text-right">{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="border-t border-ink/8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-28">
          <h2 className="font-display font-light text-4xl md:text-5xl mb-16">Авторские расклады</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/8 border border-ink/8">
            {GALLERY.map((g, i) => (
              <div key={g.title} className="bg-cream aspect-square p-8 flex flex-col justify-between group hover:bg-cream-deep transition-colors">
                <span className="font-display text-clay/60 text-xl">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <div className="font-display text-2xl font-light mb-1 group-hover:text-clay transition-colors">{g.title}</div>
                  <div className="text-ink/40 text-sm">{g.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="border-t border-ink/8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-28">
          <h2 className="font-display font-light text-4xl md:text-5xl mb-16">Отзывы</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {REVIEWS.map((r) => (
              <div key={r.name}>
                <Icon name="Quote" size={28} className="text-clay/50 mb-6" />
                <p className="font-display text-2xl font-light leading-snug mb-8">{r.text}</p>
                <div className="flex items-center gap-3 pt-6 border-t border-ink/8">
                  <span className="w-8 h-8 rounded-full bg-cream-deep flex items-center justify-center font-display text-clay">{r.name[0]}</span>
                  <span className="text-sm text-ink/60">{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="border-t border-ink/8 bg-ink text-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-28">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <p className="text-clay-soft text-xs tracking-[0.35em] uppercase mb-8">Запись</p>
              <h2 className="font-display font-light text-5xl md:text-6xl leading-[0.95]">
                Выберите<br />свободный<br /><span className="italic text-clay-soft">день</span>
              </h2>
              <p className="text-cream/50 mt-8 leading-relaxed max-w-sm">
                Консультации длятся 30–120 минут. Свободные слоты обновляются ежедневно.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-px bg-cream/15 border border-cream/15 mb-8">
                {SLOTS.map((s, i) => {
                  const full = s.free === 0;
                  const active = selected === i;
                  return (
                    <button
                      key={s.date}
                      disabled={full}
                      onClick={() => setSelected(i)}
                      className={`p-6 text-center transition-colors ${
                        full
                          ? 'bg-ink text-cream/25 cursor-not-allowed'
                          : active
                          ? 'bg-cream text-ink'
                          : 'bg-ink hover:bg-ink/60'
                      }`}
                    >
                      <div className="text-xs uppercase tracking-wide opacity-60">{s.day}</div>
                      <div className="font-display text-xl my-2">{s.date}</div>
                      <div className={`text-xs ${full ? '' : active ? 'text-clay' : 'text-clay-soft'}`}>
                        {full ? 'нет мест' : `${s.free} свободно`}
                      </div>
                    </button>
                  );
                })}
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-cream/15">
                <span className="text-cream/60 text-sm">
                  {selected !== null && SLOTS[selected].free > 0
                    ? `Выбрано: ${SLOTS[selected].date} · осталось ${SLOTS[selected].free}`
                    : 'Выберите день для записи'}
                </span>
                <button className="bg-cream text-ink rounded-full px-8 py-4 text-sm tracking-wide hover:bg-clay-soft transition-colors">
                  Подтвердить запись
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS / FOOTER */}
      <footer id="contacts" className="border-t border-ink/8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 grid md:grid-cols-3 gap-12">
          <div>
            <div className="font-display text-3xl mb-4">Анна<span className="text-clay"> · Таро</span></div>
            <p className="text-ink/50 text-sm max-w-xs leading-relaxed">
              Расклады и бережные консультации онлайн и в Москве.
            </p>
          </div>
          <div>
            <p className="text-clay text-xs tracking-[0.35em] uppercase mb-6">Контакты</p>
            <ul className="space-y-3 text-ink/70 text-sm">
              <li>
                <a href="https://www.instagram.com/anyayaninas/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-clay transition-colors">
                  <Icon name="Instagram" size={16} /> @anyayaninas
                </a>
              </li>
              <li className="flex items-center gap-3"><Icon name="Send" size={16} /> Telegram</li>
              <li className="flex items-center gap-3"><Icon name="MapPin" size={16} /> Москва · онлайн</li>
            </ul>
          </div>
          <div>
            <p className="text-clay text-xs tracking-[0.35em] uppercase mb-6">Часы приёма</p>
            <ul className="space-y-2 text-ink/70 text-sm">
              <li className="flex justify-between max-w-[200px]"><span>Пн — Пт</span><span className="text-ink/50">11:00 — 21:00</span></li>
              <li className="flex justify-between max-w-[200px]"><span>Сб — Вс</span><span className="text-ink/50">12:00 — 18:00</span></li>
            </ul>
          </div>
        </div>
        <div className="hairline h-px max-w-6xl mx-auto" />
        <p className="text-center text-ink/35 text-xs py-8">
          © {new Date().getFullYear()} Анна · Таро
        </p>
      </footer>
    </div>
  );
};

export default Index;
