
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Навигация */}
      <header className="container mx-auto py-6 px-4 md:px-0">
        <nav className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">
            <span className="text-gold">SMM</span>
            <span className="text-foreground">Pro</span>
          </a>
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#services" className="text-foreground/80 hover:text-gold transition">Услуги</a>
            <a href="#programs" className="text-foreground/80 hover:text-gold transition">Программы</a>
            <a href="#benefits" className="text-foreground/80 hover:text-gold transition">Преимущества</a>
          </div>
          <Button className="bg-gold text-purple-dark hover:bg-gold/90">Связаться с нами</Button>
        </nav>
      </header>

      {/* Герой-секция */}
      <section className="bg-diagonal-lines bg-purple-dark py-20 md:py-28 hero-glow">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Корпоративное обучение <span className="text-gradient">SMM</span> и работе в соцсетях
              </h1>
              <p className="text-lg text-foreground/80 mb-8">
                Увеличьте эффективность вашего бизнеса с помощью профессионального обучения сотрудников современным навыкам продвижения в социальных сетях.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gold text-purple-dark hover:bg-gold/90 px-8 py-6 rounded-lg text-base">
                  Запросить программу
                </Button>
                <Button variant="outline" className="border-gold text-gold hover:bg-purple-medium px-8 py-6 rounded-lg text-base">
                  Узнать стоимость
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="rounded-2xl overflow-hidden card-highlight p-1 bg-gradient-to-tr from-purple-light via-gold/20 to-purple-light">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" 
                  alt="Корпоративное обучение SMM" 
                  className="rounded-2xl shadow-xl w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок "Почему выбирают нас" */}
      <section className="py-20 bg-purple-dark" id="benefits">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-3xl font-bold text-center mb-12">Почему компании выбирают наше обучение</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none bg-card shadow-lg hover:shadow-xl transition card-highlight">
              <CardContent className="pt-6">
                <div className="rounded-full bg-gold/20 w-12 h-12 flex items-center justify-center mb-4">
                  <Icon name="Sparkles" className="text-gold h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gold">Практический подход</h3>
                <p className="text-foreground/80">Более 70% обучения состоит из практических заданий и разбора реальных кейсов.</p>
              </CardContent>
            </Card>
            
            <Card className="border-none bg-card shadow-lg hover:shadow-xl transition card-highlight">
              <CardContent className="pt-6">
                <div className="rounded-full bg-gold/20 w-12 h-12 flex items-center justify-center mb-4">
                  <Icon name="GraduationCap" className="text-gold h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gold">Экспертные преподаватели</h3>
                <p className="text-foreground/80">Наши специалисты имеют более 7 лет опыта работы с крупнейшими брендами России.</p>
              </CardContent>
            </Card>
            
            <Card className="border-none bg-card shadow-lg hover:shadow-xl transition card-highlight">
              <CardContent className="pt-6">
                <div className="rounded-full bg-gold/20 w-12 h-12 flex items-center justify-center mb-4">
                  <Icon name="BarChart" className="text-gold h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gold">Измеримые результаты</h3>
                <p className="text-foreground/80">Проверка усвоения материала и разработка плана действий для вашей компании.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Блок "Программы обучения" */}
      <section className="py-20 bg-purple-medium" id="programs">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-3xl font-bold text-center mb-12">Программы корпоративного обучения</h2>
          
          <Tabs defaultValue="basic" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8 bg-purple-dark">
              <TabsTrigger value="basic" className="data-[state=active]:bg-gold data-[state=active]:text-purple-dark">Базовый курс</TabsTrigger>
              <TabsTrigger value="advanced" className="data-[state=active]:bg-gold data-[state=active]:text-purple-dark">Продвинутый курс</TabsTrigger>
              <TabsTrigger value="expert" className="data-[state=active]:bg-gold data-[state=active]:text-purple-dark">Экспертный курс</TabsTrigger>
            </TabsList>
            
            <TabsContent value="basic">
              <Card className="border-none bg-card shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-4 text-gold">Базовый курс SMM</h3>
                  <p className="text-foreground/80 mb-4">Идеально подходит для начинающих команд и сотрудников, которым необходимо освоить основы SMM.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <div className="rounded-full bg-gold/20 w-6 h-6 flex items-center justify-center mr-2">
                        <Icon name="Check" className="text-gold h-4 w-4" />
                      </div>
                      <span>Основы стратегии присутствия в социальных сетях</span>
                    </li>
                    <li className="flex items-center">
                      <div className="rounded-full bg-gold/20 w-6 h-6 flex items-center justify-center mr-2">
                        <Icon name="Check" className="text-gold h-4 w-4" />
                      </div>
                      <span>Создание и планирование контента</span>
                    </li>
                    <li className="flex items-center">
                      <div className="rounded-full bg-gold/20 w-6 h-6 flex items-center justify-center mr-2">
                        <Icon name="Check" className="text-gold h-4 w-4" />
                      </div>
                      <span>Работа с основными платформами (ВКонтакте, Telegram, Дзен)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="rounded-full bg-gold/20 w-6 h-6 flex items-center justify-center mr-2">
                        <Icon name="Check" className="text-gold h-4 w-4" />
                      </div>
                      <span>Начальная аналитика эффективности</span>
                    </li>
                  </ul>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-foreground/60">Длительность:</span>
                      <span className="font-medium ml-2 text-gold">16 часов</span>
                    </div>
                    <Button className="bg-gold text-purple-dark hover:bg-gold/90">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="advanced">
              <Card className="border-none bg-card shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-4 text-gold">Продвинутый курс SMM</h3>
                  <p className="text-foreground/80 mb-4">Для команд с базовым опытом, которые хотят углубить свои знания и навыки.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <div className="rounded-full bg-gold/20 w-6 h-6 flex items-center justify-center mr-2">
                        <Icon name="Check" className="text-gold h-4 w-4" />
                      </div>
                      <span>Углубленная работа со стратегией и контент-планом</span>
                    </li>
                    <li className="flex items-center">
                      <div className="rounded-full bg-gold/20 w-6 h-6 flex items-center justify-center mr-2">
                        <Icon name="Check" className="text-gold h-4 w-4" />
                      </div>
                      <span>Таргетированная реклама и продвижение</span>
                    </li>
                    <li className="flex items-center">
                      <div className="rounded-full bg-gold/20 w-6 h-6 flex items-center justify-center mr-2">
                        <Icon name="Check" className="text-gold h-4 w-4" />
                      </div>
                      <span>Комьюнити-менеджмент и работа с аудиторией</span>
                    </li>
                    <li className="flex items-center">
                      <div className="rounded-full bg-gold/20 w-6 h-6 flex items-center justify-center mr-2">
                        <Icon name="Check" className="text-gold h-4 w-4" />
                      </div>
                      <span>Расширенная аналитика и отчетность</span>
                    </li>
                  </ul>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-foreground/60">Длительность:</span>
                      <span className="font-medium ml-2 text-gold">24 часа</span>
                    </div>
                    <Button className="bg-gold text-purple-dark hover:bg-gold/90">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="expert">
              <Card className="border-none bg-card shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-4 text-gold">Экспертный курс SMM</h3>
                  <p className="text-foreground/80 mb-4">Комплексная программа для опытных команд и руководителей SMM-отдела.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <div className="rounded-full bg-gold/20 w-6 h-6 flex items-center justify-center mr-2">
                        <Icon name="Check" className="text-gold h-4 w-4" />
                      </div>
                      <span>Построение комплексной стратегии присутствия бренда</span>
                    </li>
                    <li className="flex items-center">
                      <div className="rounded-full bg-gold/20 w-6 h-6 flex items-center justify-center mr-2">
                        <Icon name="Check" className="text-gold h-4 w-4" />
                      </div>
                      <span>Управление кризисными коммуникациями</span>
                    </li>
                    <li className="flex items-center">
                      <div className="rounded-full bg-gold/20 w-6 h-6 flex items-center justify-center mr-2">
                        <Icon name="Check" className="text-gold h-4 w-4" />
                      </div>
                      <span>Оптимизация воронки продаж через социальные сети</span>
                    </li>
                    <li className="flex items-center">
                      <div className="rounded-full bg-gold/20 w-6 h-6 flex items-center justify-center mr-2">
                        <Icon name="Check" className="text-gold h-4 w-4" />
                      </div>
                      <span>Интеграция SMM с общей маркетинговой стратегией</span>
                    </li>
                  </ul>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-foreground/60">Длительность:</span>
                      <span className="font-medium ml-2 text-gold">32 часа</span>
                    </div>
                    <Button className="bg-gold text-purple-dark hover:bg-gold/90">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Блок "Наши услуги" */}
      <section className="py-20 bg-purple-dark" id="services">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-3xl font-bold text-center mb-12">Формат проведения обучения</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-gold/20 bg-card hover:border-gold/60 transition duration-300 card-highlight">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-gold/20 w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-gold h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gold">Очные тренинги</h3>
                <p className="text-foreground/80">Проводим занятия в вашем офисе или в нашем учебном центре в Москве.</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gold/20 bg-card hover:border-gold/60 transition duration-300 card-highlight">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-gold/20 w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Monitor" className="text-gold h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gold">Онлайн-обучение</h3>
                <p className="text-foreground/80">Дистанционный формат с интерактивными занятиями в режиме реального времени.</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gold/20 bg-card hover:border-gold/60 transition duration-300 card-highlight">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-gold/20 w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Blend" className="text-gold h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gold">Смешанный формат</h3>
                <p className="text-foreground/80">Комбинация очных занятий и онлайн-поддержки для максимальной эффективности.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Блок "Кейсы и результаты" */}
      <section className="py-20 bg-purple-medium">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-3xl font-bold text-center mb-12">Результаты наших клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden bg-card border-none shadow-lg">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-dark to-transparent opacity-60"></div>
                <img 
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Кейс 1" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2 text-gold">ООО "Технопром"</h3>
                <p className="text-foreground/80 mb-4">
                  После обучения команды из 5 человек, компания увеличила охват в социальных сетях на 83% и конверсию из соцсетей на 32%.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/60">Промышленность</span>
                  <Button variant="link" className="text-gold p-0">Подробнее</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden bg-card border-none shadow-lg">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-dark to-transparent opacity-60"></div>
                <img 
                  src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Кейс 2" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2 text-gold">Сеть клиник "МедЭксперт"</h3>
                <p className="text-foreground/80 mb-4">
                  Обучили отдел маркетинга, что привело к увеличению трафика из социальных сетей на 65% и росту записей через соцсети на 47%.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/60">Медицина</span>
                  <Button variant="link" className="text-gold p-0">Подробнее</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA блок */}
      <section className="py-20 bg-gradient-to-r from-purple-dark to-purple-medium relative overflow-hidden">
        <div className="absolute inset-0 bg-diagonal-lines opacity-20"></div>
        <div className="absolute top-[-50px] right-[-50px] w-[300px] h-[300px] bg-gold opacity-5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 md:px-0 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы повысить эффективность вашего SMM?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-foreground/80">
            Запросите индивидуальное предложение для вашей компании. Мы подберем оптимальную программу обучения под ваши задачи.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gold text-purple-dark hover:bg-gold/90 px-8 py-6 rounded-lg text-base font-medium">
              Запросить предложение
            </Button>
            <Button variant="outline" className="border-gold text-gold hover:bg-purple-medium px-8 py-6 rounded-lg text-base font-medium">
              Заказать обратный звонок
            </Button>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-purple-dark py-12 border-t border-gold/10">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-gold">SMM</span>
                <span className="text-foreground">Pro</span>
              </h3>
              <p className="mb-4 text-foreground/80">
                Профессиональное обучение SMM и работе в социальных сетях для корпоративных клиентов.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-foreground/60 hover:text-gold">
                  <Icon name="Facebook" />
                </a>
                <a href="#" className="text-foreground/60 hover:text-gold">
                  <Icon name="Instagram" />
                </a>
                <a href="#" className="text-foreground/60 hover:text-gold">
                  <Icon name="Linkedin" />
                </a>
                <a href="#" className="text-foreground/60 hover:text-gold">
                  <Icon name="Twitter" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gold">Услуги</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-foreground/80 hover:text-gold transition">Корпоративное обучение</a></li>
                <li><a href="#" className="text-foreground/80 hover:text-gold transition">Консультации</a></li>
                <li><a href="#" className="text-foreground/80 hover:text-gold transition">Аудит SMM</a></li>
                <li><a href="#" className="text-foreground/80 hover:text-gold transition">Разработка стратегии</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gold">Компания</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-foreground/80 hover:text-gold transition">О нас</a></li>
                <li><a href="#" className="text-foreground/80 hover:text-gold transition">Наша команда</a></li>
                <li><a href="#" className="text-foreground/80 hover:text-gold transition">Карьера</a></li>
                <li><a href="#" className="text-foreground/80 hover:text-gold transition">Блог</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gold/10 text-center">
            <p className="text-foreground/60">&copy; {new Date().getFullYear()} SMMPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
