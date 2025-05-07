
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Навигация */}
      <header className="container mx-auto py-4 px-4 md:px-0">
        <nav className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-primary">SMM<span className="text-purple-600">Pro</span></a>
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#services" className="text-gray-700 hover:text-purple-600 transition">Услуги</a>
            <a href="#programs" className="text-gray-700 hover:text-purple-600 transition">Программы</a>
            <a href="#benefits" className="text-gray-700 hover:text-purple-600 transition">Преимущества</a>
            <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition">Отзывы</a>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">Связаться с нами</Button>
        </nav>
      </header>

      {/* Герой-секция */}
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Корпоративное обучение <span className="text-purple-600">SMM</span> и работе в соцсетях
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Увеличьте эффективность вашего бизнеса с помощью профессионального обучения сотрудников современным навыкам продвижения в социальных сетях.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-base">
                  Запросить программу
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-lg text-base">
                  Узнать стоимость
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" 
                alt="Корпоративное обучение SMM" 
                className="rounded-lg shadow-xl w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Блок "Почему выбирают нас" */}
      <section className="py-16 bg-white" id="benefits">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-3xl font-bold text-center mb-12">Почему компании выбирают наше обучение</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition">
              <CardContent className="pt-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Icon name="Sparkles" className="text-purple-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Практический подход</h3>
                <p className="text-gray-600">Более 70% обучения состоит из практических заданий и разбора реальных кейсов.</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition">
              <CardContent className="pt-6">
                <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Icon name="GraduationCap" className="text-blue-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Экспертные преподаватели</h3>
                <p className="text-gray-600">Наши специалисты имеют более 7 лет опыта работы с крупнейшими брендами России.</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition">
              <CardContent className="pt-6">
                <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Icon name="BarChart" className="text-green-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Измеримые результаты</h3>
                <p className="text-gray-600">Проверка усвоения материала и разработка плана действий для вашей компании.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Блок "Программы обучения" */}
      <section className="py-16 bg-gray-50" id="programs">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-3xl font-bold text-center mb-12">Программы корпоративного обучения</h2>
          
          <Tabs defaultValue="basic" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="basic">Базовый курс</TabsTrigger>
              <TabsTrigger value="advanced">Продвинутый курс</TabsTrigger>
              <TabsTrigger value="expert">Экспертный курс</TabsTrigger>
            </TabsList>
            
            <TabsContent value="basic">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-4">Базовый курс SMM</h3>
                  <p className="text-gray-600 mb-4">Идеально подходит для начинающих команд и сотрудников, которым необходимо освоить основы SMM.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Icon name="Check" className="text-green-500 mr-2 h-5 w-5" />
                      <span>Основы стратегии присутствия в социальных сетях</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="text-green-500 mr-2 h-5 w-5" />
                      <span>Создание и планирование контента</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="text-green-500 mr-2 h-5 w-5" />
                      <span>Работа с основными платформами (ВКонтакте, Telegram, Дзен)</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="text-green-500 mr-2 h-5 w-5" />
                      <span>Начальная аналитика эффективности</span>
                    </li>
                  </ul>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-gray-500">Длительность:</span>
                      <span className="font-medium ml-2">16 часов</span>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="advanced">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-4">Продвинутый курс SMM</h3>
                  <p className="text-gray-600 mb-4">Для команд с базовым опытом, которые хотят углубить свои знания и навыки.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Icon name="Check" className="text-green-500 mr-2 h-5 w-5" />
                      <span>Углубленная работа со стратегией и контент-планом</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="text-green-500 mr-2 h-5 w-5" />
                      <span>Таргетированная реклама и продвижение</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="text-green-500 mr-2 h-5 w-5" />
                      <span>Комьюнити-менеджмент и работа с аудиторией</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="text-green-500 mr-2 h-5 w-5" />
                      <span>Расширенная аналитика и отчетность</span>
                    </li>
                  </ul>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-gray-500">Длительность:</span>
                      <span className="font-medium ml-2">24 часа</span>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="expert">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-4">Экспертный курс SMM</h3>
                  <p className="text-gray-600 mb-4">Комплексная программа для опытных команд и руководителей SMM-отдела.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Icon name="Check" className="text-green-500 mr-2 h-5 w-5" />
                      <span>Построение комплексной стратегии присутствия бренда</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="text-green-500 mr-2 h-5 w-5" />
                      <span>Управление кризисными коммуникациями</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="text-green-500 mr-2 h-5 w-5" />
                      <span>Оптимизация воронки продаж через социальные сети</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="text-green-500 mr-2 h-5 w-5" />
                      <span>Интеграция SMM с общей маркетинговой стратегией</span>
                    </li>
                  </ul>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-gray-500">Длительность:</span>
                      <span className="font-medium ml-2">32 часа</span>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Блок "Наши услуги" */}
      <section className="py-16 bg-white" id="services">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-3xl font-bold text-center mb-12">Формат проведения обучения</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-gray-100 hover:border-purple-200 transition duration-300">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-purple-100 w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-purple-600 h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Очные тренинги</h3>
                <p className="text-gray-600">Проводим занятия в вашем офисе или в нашем учебном центре в Москве.</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-100 hover:border-purple-200 transition duration-300">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-purple-100 w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Monitor" className="text-purple-600 h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Онлайн-обучение</h3>
                <p className="text-gray-600">Дистанционный формат с интерактивными занятиями в режиме реального времени.</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-100 hover:border-purple-200 transition duration-300">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-purple-100 w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Blend" className="text-purple-600 h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Смешанный формат</h3>
                <p className="text-gray-600">Комбинация очных занятий и онлайн-поддержки для максимальной эффективности.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Блок "Кейсы и результаты" */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-3xl font-bold text-center mb-12">Результаты наших клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Кейс 1" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">ООО "Технопром"</h3>
                <p className="text-gray-600 mb-4">
                  После обучения команды из 5 человек, компания увеличила охват в социальных сетях на 83% и конверсию из соцсетей на 32%.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Промышленность</span>
                  <Button variant="link" className="text-purple-600 p-0">Подробнее</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Кейс 2" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Сеть клиник "МедЭксперт"</h3>
                <p className="text-gray-600 mb-4">
                  Обучили отдел маркетинга, что привело к увеличению трафика из социальных сетей на 65% и росту записей через соцсети на 47%.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Медицина</span>
                  <Button variant="link" className="text-purple-600 p-0">Подробнее</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Блок "Отзывы" */}
      <section className="py-16 bg-white" id="testimonials">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-3xl font-bold text-center mb-12">Что говорят наши клиенты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Icon name="Star" className="text-yellow-400 h-5 w-5" />
                  <Icon name="Star" className="text-yellow-400 h-5 w-5" />
                  <Icon name="Star" className="text-yellow-400 h-5 w-5" />
                  <Icon name="Star" className="text-yellow-400 h-5 w-5" />
                  <Icon name="Star" className="text-yellow-400 h-5 w-5" />
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Наша команда маркетинга применила полученные знания сразу после тренинга. Особенно ценными оказались практические советы по работе с аудиторией."
                </p>
                <div className="flex items-center">
                  <div className="rounded-full bg-gray-200 w-10 h-10 flex items-center justify-center mr-3">
                    <span className="font-medium text-gray-600">ИС</span>
                  </div>
                  <div>
                    <p className="font-medium">Ирина Смирнова</p>
                    <p className="text-sm text-gray-500">Директор по маркетингу, ГК "Вектор"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Icon name="Star" className="text-yellow-400 h-5 w-5" />
                  <Icon name="Star" className="text-yellow-400 h-5 w-5" />
                  <Icon name="Star" className="text-yellow-400 h-5 w-5" />
                  <Icon name="Star" className="text-yellow-400 h-5 w-5" />
                  <Icon name="Star" className="text-yellow-400 h-5 w-5" />
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Преподаватели поделились множеством инсайдерских лайфхаков, которые мы не смогли бы узнать самостоятельно. Рентабельность наших рекламных кампаний выросла в 2 раза."
                </p>
                <div className="flex items-center">
                  <div className="rounded-full bg-gray-200 w-10 h-10 flex items-center justify-center mr-3">
                    <span className="font-medium text-gray-600">АК</span>
                  </div>
                  <div>
                    <p className="font-medium">Алексей Козлов</p>
                    <p className="text-sm text-gray-500">SMM-специалист, "ИнтерТрейд"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Icon name="Star" className="text-yellow-400 h-5 w-5" />
                  <Icon name="Star" className="text-yellow-400 h-5 w-5" />
                  <Icon name="Star" className="text-yellow-400 h-5 w-5" />
                  <Icon name="Star" className="text-yellow-400 h-5 w-5" />
                  <Icon name="Star" className="text-gray-300 h-5 w-5" />
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Индивидуальный подход к нашей компании впечатлил. Тренеры предварительно изучили нашу нишу и предложили действительно работающие стратегии."
                </p>
                <div className="flex items-center">
                  <div className="rounded-full bg-gray-200 w-10 h-10 flex items-center justify-center mr-3">
                    <span className="font-medium text-gray-600">ЕП</span>
                  </div>
                  <div>
                    <p className="font-medium">Елена Петрова</p>
                    <p className="text-sm text-gray-500">HR-директор, "СтройГрад"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA блок */}
      <section className="py-16 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы повысить эффективность вашего SMM?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Запросите индивидуальное предложение для вашей компании. Мы подберем оптимальную программу обучения под ваши задачи.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-base font-medium">
              Запросить предложение
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-purple-600 px-8 py-3 rounded-lg text-base font-medium">
              Заказать обратный звонок
            </Button>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">SMM<span className="text-purple-400">Pro</span></h3>
              <p className="mb-4">
                Профессиональное обучение SMM и работе в социальных сетях для корпоративных клиентов.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <Icon name="Facebook" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Icon name="Instagram" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Icon name="Linkedin" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Icon name="Twitter" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Услуги</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Корпоративное обучение</a></li>
                <li><a href="#" className="hover:text-white transition">Консультации</a></li>
                <li><a href="#" className="hover:text-white transition">Аудит SMM</a></li>
                <li><a href="#" className="hover:text-white transition">Разработка стратегии</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Компания</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">О нас</a></li>
                <li><a href="#" className="hover:text-white transition">Наша команда</a></li>
                <li><a href="#" className="hover:text-white transition">Карьера</a></li>
                <li><a href="#" className="hover:text-white transition">Блог</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Контакты</h3>
              <address className="not-italic">
                <p className="mb-2 flex items-center">
                  <Icon name="MapPin" className="mr-2 h-5 w-5" />
                  <span>Москва, ул. Ленина, 123</span>
                </p>
                <p className="mb-2 flex items-center">
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  <span>+7 (495) 123-45-67</span>
                </p>
                <p className="mb-2 flex items-center">
                  <Icon name="Mail" className="mr-2 h-5 w-5" />
                  <span>info@smmpro.ru</span>
                </p>
              </address>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; {new Date().getFullYear()} SMMPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
