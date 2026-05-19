
import React, { useEffect } from 'react';
import { Header } from './Header';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { SeoBlock } from './SeoBlock';
import { Language } from '../utils/translations';
import { FloatingContact } from './FloatingContact';
import { EuAdvancedLogisticsGuide } from './EuAdvancedLogisticsGuide';
import { DestinationTemplate } from './DestinationTemplate';
import { Check, ShieldCheck, Plane, Truck, Anchor, Zap, Box, Send, MapPin, ArrowRight } from 'lucide-react';

interface EuShippingPageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onBack?: () => void;
  onNavigate?: (page: string) => void;
}

export const EuShippingPage: React.FC<EuShippingPageProps> = ({ language, setLanguage, onBack, onNavigate }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const content = {
        en: {
            badge: "Europe Direct Line",
            titlePrefix: "Shipping from China to",
            titleHighlight: "Europe: Professional DDP",
            subtitle: <>Stop worrying about customs, import VAT, and supplier mistakes. We provide a secure bridge between your Chinese manufacturers and your EU destination - all duties and taxes paid upfront, no charges on delivery. No minimum weight requirement — we ship from <span className="bg-brand-yellow px-1.5 py-0.5 rounded text-brand-dark font-bold whitespace-nowrap">0.1 kg</span>.</>,
            introTitle: "Seamless Logistics Across the European Union",
            introText: "Whether you are shipping to Germany, France, Italy, Spain, Poland, or any other EU member state, HappyBox provides a streamlined logistics experience. We specialize in DDP (Delivered Duty Paid) shipping. What this means for you: the price you pay includes ocean/rail/air freight, customs clearance, and all import duties and VAT. No hidden fees, no surprise invoices from local tax authorities.",
            methodsTitle: "Our Shipping Methods & Rates",
            methods: [
                {
                    icon: Plane,
                    title: "Air Freight",
                    tag: "Priority Delivery",
                    desc: "Electronics, fashion, and high-value goods.",
                    price: "From €9/kg",
                    speed: "6–10 days",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: Truck,
                    title: "Rail Freight",
                    tag: "Best Value",
                    desc: "The sweet spot between cost and speed. Eco-friendly and reliable for commercial cargo.",
                    price: "From €2.5/kg",
                    speed: "18–24 days",
                    color: "bg-orange-50 text-orange-600"
                },
                {
                    icon: Anchor,
                    title: "Sea Freight",
                    tag: "Economy",
                    desc: "Bulk orders, furniture, and heavy machinery.",
                    price: "From €1.1/kg",
                    speed: "35–45 days",
                    color: "bg-teal-50 text-teal-600"
                }
            ],
            whyTitle: "HappyBox: Your Local Office in Shenzhen",
            whyIntro: "We act as your eyes and ears in China so you never need to fly there.",
            benefits: [
                {
                    icon: Box,
                    title: "Order Consolidation",
                    desc: "We collect goods from 1688, Alibaba, and Taobao at our Shenzhen warehouse and ship them as one cargo to reduce your costs."
                },
                {
                    icon: ShieldCheck,
                    title: "Strict Quality Inspection",
                    desc: "We provide photos, videos, and technical checks before the cargo leaves China. If it's broken, it stays in China - not on a ship to Rotterdam."
                },
                {
                    icon: Zap,
                    title: "Total VAT & Customs Management",
                    desc: "We use our own EORI number and handle all EU customs paperwork. You don't deal with any of it."
                },
                {
                    icon: MapPin,
                    title: "EU-Wide Door-to-Door Delivery",
                    desc: "Final-mile delivery to your warehouse or home via DHL, DPD, or UPS - anywhere in all 27 member states."
                }
            ],
            fearsTitle: "Solving Your Biggest Importing Fears",
            fearsList: [
                { q: "What if my supplier sends defective goods?", a: "Our Shenzhen warehouse is your quality buffer. We inspect every shipment with photos and technical checks before it leaves China. Defective items go back to the factory immediately." },
                { q: "What if the cargo is lost or damaged?", a: "We provide All-Risk cargo insurance. If your goods are lost or damaged in transit, you receive a 100% refund of the declared value. No fine print." },
                { q: "Am I too small for you?", a: <>Our minimums are accessible: from <span className="bg-brand-yellow px-1.5 py-0.5 rounded text-brand-dark font-bold whitespace-nowrap">0.1 kg</span> for Air and from 1 CBM for Sea. Startups and established brands get the same service level.</> },
                { q: "What about Chinese holidays and EU port delays?", a: "Chinese New Year, Golden Week, and seasonal port congestion are predictable. We plan your shipment calendar around them so you never run out of stock." }
            ],
            stepsTitle: "How to Get Started",
            steps: [
                "Get your Shenzhen warehouse address",
                "Order from your suppliers",
                "We inspect and confirm",
                "Pay and track to your door"
            ],
            cta: "Get a Free Shipping Quote",
            back: "Back to Home"
        },
        ru: {
            badge: "Прямая линия в Европу",
            titlePrefix: "Доставка из Китая в",
            titleHighlight: "Европу: Профессиональный DDP",
            subtitle: <>Забудьте о таможне, НДС и ошибках поставщиков. Мы обеспечиваем надежный мост между китайскими фабриками и Европой - все налоги и пошлины включены в цену, никаких доплат при получении. Нет минимального веса — доставляем от <span className="bg-brand-yellow px-1.5 py-0.5 rounded text-brand-dark font-bold whitespace-nowrap">0.1 кг</span>.</>,
            introTitle: "Бесшовная логистика по всему Евросоюзу",
            introText: "Отправляете ли вы в Германию, Францию, Италию, Испанию, Польшу или любую другую страну ЕС - процесс остается стабильным. Мы специализируемся на доставке DDP (Delivered Duty Paid). Это значит, что цена включает фрахт, таможенную очистку и уплату всех ввозных пошлин и НДС. Никаких скрытых платежей или неожиданных счетов от местных налоговых органов.",
            methodsTitle: "Наши тарифы и способы доставки",
            methods: [
                {
                    icon: Plane,
                    title: "Авиадоставка",
                    tag: "Приоритет",
                    desc: "Электроника, мода и дорогостоящие товары.",
                    price: "От €9/кг",
                    speed: "6–10 дней",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: Truck,
                    title: "Ж/Д доставка",
                    tag: "Оптимально",
                    desc: "Идеальный баланс цены и скорости. Надежно для коммерческих грузов.",
                    price: "От €2.5/кг",
                    speed: "18–24 дня",
                    color: "bg-orange-50 text-orange-600"
                },
                {
                    icon: Anchor,
                    title: "Морская доставка",
                    tag: "Эконом",
                    desc: "Объемные партии, мебель, тяжелое оборудование.",
                    price: "От €1.1/кг",
                    speed: "35–45 дней",
                    color: "bg-teal-50 text-teal-600"
                }
            ],
            whyTitle: "HappyBox: Ваш местный офис в Шэньчжэне",
            whyIntro: "Мы - ваши глаза и уши в Китае. Вам больше не нужно туда летать.",
            benefits: [
                {
                    icon: Box,
                    title: "Консолидация заказов",
                    desc: "Мы собираем товары с 1688, Alibaba и Taobao на нашем складе и отправляем их одним грузом для экономии на доставке."
                },
                {
                    icon: ShieldCheck,
                    title: "Строгий контроль качества",
                    desc: "Предоставляем фото, видео и технические проверки до отправки. Брак остается в Китае, а не плывет в Европу."
                },
                {
                    icon: Zap,
                    title: "Полное управление НДС и Таможней",
                    desc: "Используем собственный EORI номер и решаем все вопросы с таможней ЕС. Вам не о чем беспокоиться."
                },
                {
                    icon: MapPin,
                    title: "Доставка до двери",
                    desc: "Финальная доставка на ваш склад или дом местными курьерами (DHL, DPD, UPS) по всем 27 странам ЕС."
                }
            ],
            fearsTitle: "Решение ваших главных страхов при импорте",
            fearsList: [
                { q: "А что если поставщик пришлет брак?", a: "Наш склад в Шэньчжэне служит буфером качества. Мы проверяем каждую партию с фотоотчетами до отправки из Китая. Бракованный товар немедленно возвращается на фабрику." },
                { q: "А что если груз потеряется или повредится?", a: "Мы предоставляем страховку от всех рисков (All-Risk). В случае порчи или утери груза в пути, вы получаете 100% возврат заявленной стоимости. Никакого мелкого шрифта." },
                { q: "Я не слишком маленький клиент для вас?", a: <>У нас реалистичные минимумы: от <span className="bg-brand-yellow px-1.5 py-0.5 rounded text-brand-dark font-bold whitespace-nowrap">0.1 кг</span> для авиа и от 1 куба (CBM) для моря. И стартапы, и крупные бренды получают одинаково высокий уровень сервиса.</> },
                { q: "А как же праздники и задержки в портах?", a: "Китайский Новый год, Золотая Неделя и пробки в портах можно предвидеть. Мы планируем календарь отправок так, чтобы у вас всегда был товар на складе." }
            ],
            stepsTitle: "Как начать",
            steps: [
                "Получите адрес нашего склада в Шэньчжэне",
                "Сделайте заказ у поставщиков",
                "Мы проверяем и подтверждаем груз",
                "Оплачивайте и отслеживайте доставку до двери"
            ],
            cta: "Рассчитать стоимость",
            back: "На главную"
        }
    };

    // Add amazon block to EU
    const fullContent = {
        en: {
            ...content.en,
            amazonBlock: {
                titlePrefix: "Shipping to",
                titleHighlight: "Amazon FBA Europe",
                desc: "Specialized rates, prep services, and direct delivery to FBA warehouses in Germany, France, and Poland.",
                link: "/amazon",
                cta: "Learn More"
            }
        },
        ru: {
            ...content.ru,
            amazonBlock: {
                titlePrefix: "Вам нужна доставка на",
                titleHighlight: "Amazon FBA Europe",
                desc: "Специальные условия, маркировка и доставка напрямую на склады FBA в Германии, Франции и Польше.",
                link: "/ru/amazon",
                cta: "Подробнее"
            }
        }
    };

    return (
        <DestinationTemplate
            language={language}
            setLanguage={setLanguage}
            onBack={onBack}
            onNavigate={onNavigate}
            content={fullContent}
            guideComponent={<EuAdvancedLogisticsGuide language={language} />}
        />
    );
};
