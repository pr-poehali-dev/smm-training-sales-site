import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Навигационная панель (фиксированная в стиле Apple) */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "nav-blur shadow-sm border-b border-gray-100" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto">
          <nav className="flex justify-between items-center h-16">
            <a href="/" className="text-xl font-semibold flex items-center space-x-1">
              <span className="text-apple-accent">SMM</span>
              <span className="text-secondary">Pro</span>
            </a>
            
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#benefits" className="text-apple-gray-medium hover:text-secondary text-sm transition">
                Преимущества
              </a>
              <a href="#programs" className="text-apple-gray-medium hover:text-secondary text-sm transition">
                Программы
              </a>
              <a href="#testimonials" className="text-apple-gray-medium hover:text-secondary text-sm transition">
                Форматы
              </a>
              <a href="#contact" className="text-apple-gray-medium hover:text-secondary text-sm transition">
                Контакты
              </a>
            </div>
            
            <Button 
              className="apple-button apple-button-primary hidden md:flex h-10"
            >
              Связаться с нами
            </Button>
            
            <button className="md:hidden text-secondary">
              <Icon name="Menu" className="h-6 w-6" />
            </button>
          </nav>
        </div>
      </header>

      {/* Первый экран / Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl animate-fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-5.5xl font-semibold tracking-tight leading-tight mb-6">
                Обучаем сотрудников <span className="text-gradient">SMM</span>. 
                <br className="hidden md:block" /> 
                Легко. Понятно. Эффективно.
              </h1>
              <p className="text-lg text-apple-gray-medium mb-8 max-w-reading">
                Современная программа корпоративного обучения, которая повышает эффективность работы с социальными сетями и приносит измеримые результаты.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Button 
                  className="apple-button apple-button-primary h-12 text-base font-normal"
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-up animate-delay-200">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Корпоративное обучение SMM" 
                className="w-full h-auto rounded-2xl device-shadow relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Логотипы клиентов */}
      <section className="py-16 bg-apple-gray-light">
        <div className="container mx-auto">
          <p className="text-center text-apple-gray-medium mb-10 text-sm uppercase tracking-widest">
            Нам доверяют ведущие компании России
          </p>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-24 bg-white" id="benefits">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4.5xl font-semibold tracking-tight mb-6">
              Почему компании выбирают наше обучение
            </h2>
            <p className="text-apple-gray-medium text-lg">
              Мы создали методологию, которая помогает сотрудникам любого уровня быстро освоить 
              принципы эффективного SMM и начать применять их на практике.
            </p>
          </div>

          <div className="benefits-grid">
            <Card className="border-none shadow-apple hover:shadow-apple-hover transition-all card-hover-effect bg-white rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="Sparkles" className="text-primary h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Практический подход</h3>
                <p className="text-apple-gray-medium">
                  Более 70% обучения состоит из практических заданий и разбора реальных кейсов.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-apple hover:shadow-apple-hover transition-all card-hover-effect bg-white rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="GraduationCap" className="text-primary h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Экспертные тренеры</h3>
                <p className="text-apple-gray-medium">
                  Наши специалисты имеют более 11 лет опыта работы с крупнейшими брендами России.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-apple hover:shadow-apple-hover transition-all card-hover-effect bg-white rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="BarChart" className="text-primary h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Измеримые результаты</h3>
                <p className="text-apple-gray-medium">
                  Проверка усвоения материала и разработка плана действий для вашей компании.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-apple hover:shadow-apple-hover transition-all card-hover-effect bg-white rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="Settings" className="text-primary h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Индивидуальный подход</h3>
                <p className="text-apple-gray-medium">
                  Программа адаптируется под особенности и потребности конкретной компании.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-apple hover:shadow-apple-hover transition-all card-hover-effect bg-white rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="Users" className="text-primary h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Адаптированная программа</h3>
                <p className="text-apple-gray-medium">
                  Программа, адаптированная специально для сотрудников именно вашей компании, учитывая уровень присутствия компании в соцсетях.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-apple hover:shadow-apple-hover transition-all card-hover-effect bg-white rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="ClipboardCheck" className="text-primary h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Правовые аспекты</h3>
                <p className="text-apple-gray-medium">
                  Программы специально адаптированы для присутствия компаний на российском рынке, учитывая правовые аспекты.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Программы обучения */}
      <section className="pt-20 pb-32 relative overflow-hidden" id="programs">
        <div className="absolute -top-96 -right-96 w-[800px] h-[800px] bg-primary/5 rounded-full"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4.5xl font-semibold tracking-tight mb-6">
              Программы корпоративного обучения
            </h2>
            <p className="text-apple-gray-medium text-lg">
              Выберите программу, которая соответствует уровню подготовки ваших сотрудников и бизнес-задачам компании.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-apple-hover transition-all p-1">
              <CardContent className="p-8">
                <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mb-5">
                  <Icon name="Rocket" className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Базовый курс</h3>
                <p className="text-apple-gray-medium mb-6">
                  Для начинающих команд и сотрудников, осваивающих основы SMM.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="rounded-full bg-green-100 w-5 h-5 flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="Check" className="text-green-600 h-3 w-3" />
                    </div>
                    <span className="text-sm text-apple-gray-medium">Основы работы в социальных сетях</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-green-100 w-5 h-5 flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="Check" className="text-green-600 h-3 w-3" />
                    </div>
                    <span className="text-sm text-apple-gray-medium">Создание и планирование контента</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-green-100 w-5 h-5 flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="Check" className="text-green-600 h-3 w-3" />
                    </div>
                    <span className="text-sm text-apple-gray-medium">Базовая аналитика и отчетность</span>
                  </li>
                </ul>
                <div className="flex flex-col">
                  <Button className="apple-button apple-button-primary w-full">
                    Узнать подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary rounded-2xl overflow-hidden shadow-apple hover:shadow-apple-hover transition-all relative p-1">
              <span className="absolute top-6 right-6 bg-primary text-white text-xs rounded-full px-3 py-1 font-medium">
                Популярный
              </span>
              <CardContent className="p-8">
                <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mb-5">
                  <Icon name="Zap" className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Продвинутый курс</h3>
                <p className="text-apple-gray-medium mb-6">
                  Для команд с базовым опытом, готовых к следующему шагу.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="rounded-full bg-green-100 w-5 h-5 flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="Check" className="text-green-600 h-3 w-3" />
                    </div>
                    <span className="text-sm text-apple-gray-medium">Разработка стратегии присутствия</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-green-100 w-5 h-5 flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="Check" className="text-green-600 h-3 w-3" />
                    </div>
                    <span className="text-sm text-apple-gray-medium">Таргетированная реклама</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-green-100 w-5 h-5 flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="Check" className="text-green-600 h-3 w-3" />
                    </div>
                    <span className="text-sm text-apple-gray-medium">Управление комьюнити</span>
                  </li>
                </ul>
                <div className="flex flex-col">
                  <Button className="apple-button apple-button-primary w-full">
                    Узнать подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-apple-hover transition-all p-1">
              <CardContent className="p-8">
                <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mb-5">
                  <Icon name="Award" className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Экспертный курс</h3>
                <p className="text-apple-gray-medium mb-6">
                  Для опытных команд и руководителей SMM-отделов.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="rounded-full bg-green-100 w-5 h-5 flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="Check" className="text-green-600 h-3 w-3" />
                    </div>
                    <span className="text-sm text-apple-gray-medium">Интеграция с маркетингом</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-green-100 w-5 h-5 flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="Check" className="text-green-600 h-3 w-3" />
                    </div>
                    <span className="text-sm text-apple-gray-medium">Управление командой SMM</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-green-100 w-5 h-5 flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="Check" className="text-green-600 h-3 w-3" />
                    </div>
                    <span className="text-sm text-apple-gray-medium">Кризисные коммуникации</span>
                  </li>
                </ul>
                <div className="flex flex-col">
                  <Button className="apple-button apple-button-primary w-full">
                    Узнать подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Форматы обучения */}
      <section className="py-20 bg-apple-gray-light" id="testimonials">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4.5xl font-semibold tracking-tight mb-6">
              Форматы проведения обучения
            </h2>
            <p className="text-apple-gray-medium text-lg">
              Выберите удобный формат обучения, который подойдет именно вашей компании.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-apple hover:shadow-apple-hover transition-all">
              <div className="mb-6">
                <Icon name="Users" className="text-primary h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Очное обучение</h3>
              <p className="text-apple-gray-medium">
                Интенсивное обучение в вашем офисе или нашем учебном центре. Прямое взаимодействие с тренером и другими участниками.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-apple hover:shadow-apple-hover transition-all">
              <div className="mb-6">
                <Icon name="Monitor" className="text-primary h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Онлайн-обучение</h3>
              <p className="text-apple-gray-medium">
                Гибкий формат онлайн-занятий с интерактивными элементами и постоянной поддержкой тренера.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-apple hover:shadow-apple-hover transition-all">
              <div className="mb-6">
                <Icon name="Blend" className="text-primary h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Смешанный формат</h3>
              <p className="text-apple-gray-medium">
                Комбинация очных встреч с онлайн-поддержкой и дополнительными материалами для максимальной эффективности.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary" id="contact">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4.5xl font-semibold text-white tracking-tight mb-8 max-w-2xl mx-auto">
            Готовы повысить эффективность вашего SMM?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Свяжитесь с нами для получения подробной информации. Мы подберем оптимальную программу под ваши задачи.
          </p>
          
          <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-apple">
            <div className="flex flex-col gap-6 text-left">
              <h3 className="text-xl font-semibold mb-2">Свяжитесь с нами:</h3>
              <div className="flex items-center gap-3">
                <Icon name="Phone" className="text-primary h-5 w-5" />
                <a href="tel:+79032113045" className="text-secondary hover:text-primary transition-colors">
                  8 (903) 211-30-45
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" className="text-primary h-5 w-5" />
                <a href="mailto:info@smmpro.ru" className="text-secondary hover:text-primary transition-colors">
                  info@smmpro.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-apple-gray-light py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-6">
                <span className="text-primary">SMM</span>
                <span className="text-secondary">Pro</span>
              </h3>
              <p className="text-apple-gray-medium mb-6">
                Профессиональное обучение SMM и работе в социальных сетях для корпоративных клиентов.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-apple-gray-medium hover:text-primary transition-colors">
                  <Icon name="Facebook" className="h-5 w-5" />
                </a>
                <a href="#" className="text-apple-gray-medium hover:text-primary transition-colors">
                  <Icon name="Instagram" className="h-5 w-5" />
                </a>
                <a href="#" className="text-apple-gray-medium hover:text-primary transition-colors">
                  <Icon name="Linkedin" className="h-5 w-5" />
                </a>
                <a href="#" className="text-apple-gray-medium hover:text-primary transition-colors">
                  <Icon name="Twitter" className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Программы</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-apple-gray-medium hover:text-primary transition-colors">Базовый курс</a></li>
                <li><a href="#" className="text-apple-gray-medium hover:text-primary transition-colors">Продвинутый курс</a></li>
                <li><a href="#" className="text-apple-gray-medium hover:text-primary transition-colors">Экспертный курс</a></li>
                <li><a href="#" className="text-apple-gray-medium hover:text-primary transition-colors">Индивидуальные программы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Компания</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-apple-gray-medium hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="text-apple-gray-medium hover:text-primary transition-colors">Преподаватели</a></li>
                <li><a href="#" className="text-apple-gray-medium hover:text-primary transition-colors">Карьера</a></li>
                <li><a href="#" className="text-apple-gray-medium hover:text-primary transition-colors">Блог</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Контакты</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Icon name="Mail" className="h-4 w-4 text-primary mr-2" />
                  <a href="mailto:info@smmpro.ru" className="text-apple-gray-medium hover:text-primary transition-colors">info@smmpro.ru</a>
                </li>
                <li className="flex items-center">
                  <Icon name="Phone" className="h-4 w-4 text-primary mr-2" />
                  <a href="tel:+79032113045" className="text-apple-gray-medium hover:text-primary transition-colors">8 (903) 211-30-45</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-apple-gray-medium mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} SMMPro. Все права защищены. ИП Роговцева Евгения Александровна
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-apple-gray-medium hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-sm text-apple-gray-medium hover:text-primary transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;