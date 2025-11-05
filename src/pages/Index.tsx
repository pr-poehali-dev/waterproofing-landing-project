import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Наш менеджер свяжется с вами в течение 30 минут",
    });
    setFormData({ name: '', phone: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white/80 backdrop-blur-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Shield" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-foreground">ATTIKKA WPC</span>
          </div>
          <Button size="lg" className="hidden md:flex">
            <Icon name="Phone" className="mr-2" size={18} />
            +7 (495) 123-45-67
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-muted to-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm">
                ✓ Гарантия 25+ лет
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Сократите затраты на ремонт кровли <span className="text-primary">на 60%</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональная гидроизоляция для кровли, мокрых точек и пожарных резервуаров. 
                Решение с доказанной эффективностью для строителей и подрядчиков.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Droplets" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">100%</div>
                    <div className="text-sm text-muted-foreground">Водонепроницаемость</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon name="Clock" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">25+ лет</div>
                    <div className="text-sm text-muted-foreground">Срок службы</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Zap" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">3 часа</div>
                    <div className="text-sm text-muted-foreground">Быстрый монтаж</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="text-lg px-8">
                  Получить расчёт стоимости
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="FileText" className="mr-2" size={20} />
                  Технические характеристики
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/e5b8321d-c01b-4118-8b8a-6d9de88ef83c/files/0e0dd432-f41f-4882-96e0-834e9ee94cb6.jpg"
                alt="Применение гидроизоляционного материала"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              3 критичные проблемы профессионалов
            </h2>
            <p className="text-xl text-muted-foreground">
              Которые решает ATTIKKA WPC
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-6">
                  <Icon name="AlertTriangle" className="text-destructive" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Повторные протечки через 2-3 года
                </h3>
                <p className="text-muted-foreground mb-6">
                  Традиционные материалы (битум, рубероид) теряют свойства через 3-5 лет. 
                  Вы тратите деньги на повторный ремонт и теряете репутацию.
                </p>
                <div className="flex items-center gap-2 text-destructive font-semibold">
                  <Icon name="TrendingDown" size={20} />
                  <span>Убыток до 250 000 ₽ на объект</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-6">
                  <Icon name="Timer" className="text-destructive" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Долгий и сложный монтаж
                </h3>
                <p className="text-muted-foreground mb-6">
                  Стандартная укладка требует 5-7 дней, специального оборудования и высокой квалификации. 
                  Срываются сроки, растут затраты на рабочих.
                </p>
                <div className="flex items-center gap-2 text-destructive font-semibold">
                  <Icon name="Users" size={20} />
                  <span>3-4 дополнительных смены</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-6">
                  <Icon name="ThermometerSnowflake" className="text-destructive" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Зависимость от погоды и сезона
                </h3>
                <p className="text-muted-foreground mb-6">
                  Нельзя работать при температуре ниже +5°C или в дождь. 
                  Простои в холодное время года снижают выручку на 40%.
                </p>
                <div className="flex items-center gap-2 text-destructive font-semibold">
                  <Icon name="Calendar" size={20} />
                  <span>Только 6 месяцев в году</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/e5b8321d-c01b-4118-8b8a-6d9de88ef83c/files/86262294-10d6-4de1-aeb3-de7e5efa21d7.jpg"
                alt="Материал ATTIKKA WPC"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary rounded-full text-white font-semibold text-sm">
                УНИКАЛЬНОЕ РЕШЕНИЕ
              </div>
              <h2 className="text-4xl font-bold text-foreground">
                Композитная мембрана ATTIKKA WPC
              </h2>
              <p className="text-xl text-muted-foreground">
                Инновационный материал на основе древесно-полимерного композита с гидрофобными добавками. 
                Запатентованная технология, проверенная на 2000+ объектах.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Монтаж за 3 часа без специнструмента</h4>
                    <p className="text-muted-foreground">
                      Работает обычная бригада из 2 человек. Не нужны газовые горелки, спецтехника и сложная подготовка.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Работает при любой температуре: от -40°C до +80°C</h4>
                    <p className="text-muted-foreground">
                      Монтаж зимой и летом. Увеличьте количество заказов круглый год.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Гарантия 25 лет без повторного ремонта</h4>
                    <p className="text-muted-foreground">
                      Экономия для заказчика 60% на эксплуатации. Юридическая гарантия с договором и страховкой.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Увеличивает вашу маржинальность на 35%</h4>
                    <p className="text-muted-foreground">
                      Быстрая укладка = меньше затрат на труд. Премиум-позиционирование = выше цена работ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary font-semibold text-sm mb-4">
              РЕАЛЬНЫЙ КЕЙС
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Торговый центр "Метрополис", 8000 м²
            </h2>
            <p className="text-xl text-muted-foreground">
              Москва, 2023 год
            </p>
          </div>

          <div className="mb-12">
            <img 
              src="https://cdn.poehali.dev/projects/e5b8321d-c01b-4118-8b8a-6d9de88ef83c/files/bd5b4051-b2a1-4b0c-a402-60c14e30a185.jpg"
              alt="Кейс: до и после"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>

          <Card className="border-2">
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Было:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Icon name="X" className="text-destructive flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Протечки каждые 2-3 года</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="X" className="text-destructive flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Затраты на ремонт: 1.2 млн ₽/год</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="X" className="text-destructive flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Ущерб товарам: до 500 000 ₽</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="X" className="text-destructive flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Ремонт летом: остановка торговли</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Стало:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Монтаж за 14 дней (вместо 45)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Гарантия 25 лет без обслуживания</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">0 протечек за 2 года эксплуатации</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Работа без остановки торговли</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">60%</div>
                    <div className="text-muted-foreground">Экономия на эксплуатации</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">3x</div>
                    <div className="text-muted-foreground">Быстрее монтаж</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">4.8 млн ₽</div>
                    <div className="text-muted-foreground">Сохранено за 4 года</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="form" className="py-20 px-4 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Получите техническую спецификацию и расчёт стоимости
            </h2>
            <p className="text-xl opacity-90">
              + Бесплатный выезд технолога на объект для оценки
            </p>
          </div>

          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="bg-secondary/10 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name="Gift" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Бонус при заявке сегодня:
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="text-secondary" size={18} />
                        <span>Подробная техническая документация (PDF, 45 страниц)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="text-secondary" size={18} />
                        <span>Бесплатный выезд технолога на ваш объект</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="text-secondary" size={18} />
                        <span>Индивидуальный расчёт стоимости с учётом сложности</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="text-secondary" size={18} />
                        <span>Доступ к базе знаний для подрядчиков</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Ваше имя *</label>
                    <Input 
                      required
                      placeholder="Иван Петров"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Телефон *</label>
                    <Input 
                      required
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Компания</label>
                  <Input 
                    placeholder="ООО «Строймонтаж»"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Описание проекта</label>
                  <Textarea 
                    placeholder="Укажите тип объекта, площадь кровли, сроки..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg h-14 bg-secondary hover:bg-secondary/90">
                  <Icon name="Send" className="mr-2" size={20} />
                  Получить спецификацию и расчёт
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Shield" size={28} />
                <span className="text-xl font-bold">ATTIKKA WPC</span>
              </div>
              <p className="text-sm opacity-80">
                Профессиональные решения для гидроизоляции с 2010 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p>+7 (495) 123-45-67</p>
                <p>info@attikka.ru</p>
                <p>Москва, ул. Примерная, 123</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Решения</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p>Кровля</p>
                <p>Мокрые точки</p>
                <p>Пожарные резервуары</p>
                <p>Промышленные объекты</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Документы</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p>Сертификаты</p>
                <p>Гарантия</p>
                <p>Технические характеристики</p>
                <p>Политика конфиденциальности</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-60">
            <p>© 2024 ATTIKKA WPC. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
