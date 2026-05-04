import React from 'react';
import { BookOpen, AlertCircle } from 'lucide-react';
import { Language } from '../utils/translations';

interface CaAdvancedLogisticsGuideProps {
  language: Language;
}

export const CaAdvancedLogisticsGuide: React.FC<CaAdvancedLogisticsGuideProps> = ({ language }) => {

    const content = {
        en: {
            title: "China to Canada Shipping Guide 2026: Costs, Customs & Transit Times",
            subtitle: "The technical reference for Canadian importers who want to understand the full picture.",
            sections: [
                {
                    title: "1. Transit Options: Air vs. Sea",
                    items: [
                        { label: "Air Freight (6–10 days)", text: "Via Shenzhen (SZX) or Hong Kong (HKG) to Toronto Pearson (YYZ), Vancouver (YVR), or Montreal (YUL). The default for electronics, fashion, and anything time-sensitive. Volumetric weight applies — we repack at our Shenzhen warehouse before booking to minimize your chargeable weight. Lightweight but bulky goods (pillows, plush toys, textiles) can be vacuum-packed at our warehouse to reduce volume by up to 50%." },
                        { label: "Sea Freight (20–35 days)", text: "Via Vancouver or Prince Rupert, then rail to inland destinations. Most cost-effective for furniture, machinery, and bulk wholesale inventory. LCL for smaller volumes, FCL for full container loads." },
                        { label: "Quick reference:", text: "Electronics/fashion -> Air. Bulk/furniture -> Sea. Ontario/Quebec cost-sensitive -> Sea via Prince Rupert + rail. BC delivery -> Sea via Vancouver." }
                    ]
                },
                {
                    title: "2. Canadian Customs & Taxes: What You Actually Pay",
                    items: [
                        { label: "Canada Border Services Agency (CBSA)", text: "All imports into Canada are processed by the CBSA. Unlike the US, Canada has a very low de minimis threshold — duties and taxes apply to most commercial shipments regardless of value." },
                        { label: "The Canadian tax layers:", text: "• Customs Duty: 0–20% most goods\n• GST: Federal tax (5%)\n• HST: Combined federal + provincial (Ontario, Maritimes) 13–15%\n• PST: Provincial sales tax (BC, Saskatchewan, Manitoba)" },
                        { label: "How it stacks:", text: "Customs duty is applied to the CIF value first. GST/HST is then applied to the duty-paid value. In Ontario (13% HST) on a $10,000 CIF shipment with 5% duty: Duty = $500 → Tax base = $10,500 → HST = $1,365 → Total charges = $1,865." },
                        { label: "Business Number (BN) Requirement", text: "Commercial importers typically need a Canadian Business Number with an import-export account. For DDP shipments with HappyBox, we handle the entry using our own account — individual and private importers do not need to register separately." }
                    ]
                },
                {
                    title: "3. Canadian Import Duties 2026: The Full Picture",
                    items: [
                        { label: "Canada applies duties based on the CBSA Customs Tariff", text: "The applicable rate depends on your product's HS code. China is not a member of CPTPP, so MFN (Most Favoured Nation) rates apply." },
                        { label: "Canadian Surtaxes on Chinese Goods (2024–2026)", text: "Canada introduced 100% surtax on Chinese-made electric vehicles and 25% surtax on steel and aluminum products from China. Other categories are under review." },
                        { label: "Key duty ranges:", text: "Electronics: 0–5%, Clothing: 12–18%, Furniture: 0–9.5%, Footwear: 10–20%, Industrial machinery: 0%." }
                    ]
                },
                {
                    title: "4. Shipping from China to Canada by Product Type",
                    items: [
                        { label: "Electronics", text: "Air freight standard for high-value items. All electronics sold in Canada must comply with ISED standards. Lithium battery products require UN38.3 certification and MSDS documentation." },
                        { label: "Clothing & Textiles", text: "Canadian textile labeling law requires fiber content, care instructions, and country of origin — in both English and French for retail sale. Clothing carries some of the highest duty rates (12–18%)." },
                        { label: "Furniture", text: "Sea freight only. Solid wood packaging must meet ISPM-15 phytosanitary standards (heat treatment certification) to prevent the introduction of pests into Canadian forests — strictly enforced by CBSA." },
                        { label: "Health Products & Supplements", text: "Depending on the product, a Natural Product Number (NPN) or Medical Device License from Health Canada may be required before import." }
                    ]
                },
                {
                    title: "5. Canadian Ports and Air Hubs",
                    items: [
                        { label: "Port of Vancouver — Primary West Coast Gateway", text: "Canada's busiest port. Goods clear customs here and move east via CP or CN rail. Rail transit from Vancouver to Toronto: approx 5–7 days." },
                        { label: "Port of Prince Rupert — The Speed Alternative", text: "Less congested and offers a shorter rail distance to Central Canada. For Ontario/Quebec, Prince Rupert can cut total transit time by 2–3 days compared to Vancouver." },
                        { label: "Air Hubs", text: "Toronto Pearson (YYZ) for Central Canada, Vancouver International (YVR) for Western Canada, Montreal (YUL) for Eastern Canada." }
                    ]
                },
                {
                    title: "6. The Shenzhen Warehouse Workflow",
                    items: [
                        { label: "Incoming QC & Labeling Check", text: "We inspect for factory defects and verify quantities. We check for 'Made in China' labels — required by CBSA." },
                        { label: "Consolidation & Volumetric Optimization", text: "Hold goods up to 30 days for free. We repack to reduce volumetric weight. Vacuum packing available for textiles/plush toys." },
                        { label: "Export Documentation", text: "We generate Commercial Invoice, Packing List, and all documents required for Chinese customs and CBSA import entry." }
                    ]
                },
                {
                    title: "7. All-Risk Cargo Insurance",
                    items: [
                        { label: "Comprehensive Coverage", text: "We particularly recommend insurance for Canada given the long 4,000+ km rail journey from the West Coast to Toronto." },
                        { label: "What is covered", text: "Rail transit damage (vibration/load shifting), winter weather damage (cold damage to electronics/liquids during port dwell), General Average, and theft. Coverage from Shenzhen to your Canadian address." }
                    ]
                }
            ],
            readMore: "Read the Advanced Logistics Guide",
            hide: "Collapse Guide"
        },
        ru: {
            title: "Гид по доставке из Китая в Канаду 2026: цены, таможня и сроки",
            subtitle: "Технический справочник для канадских импортеров.",
            sections: [
                {
                    title: "1. Варианты транзита: Авиа vs Море",
                    items: [
                        { label: "Авиафрахт (6–10 дней)", text: "Вылеты из Шэньчжэня (SZX) или Гонконга (HKG) в аэропорты Торонто (YYZ), Ванкувера (YVR) или Монреаля (YUL). Основной выбор для электроники и моды. Легкие, но объемные товары (подушки, игрушки) упаковываем под вакуумом, сокращая объем до 50%." },
                        { label: "Морские перевозки (20–35 дней)", text: "Через порты Ванкувера или Принс-Руперта с последующей доставкой по железной дороге. Самый выгодный способ для мебели, оборудования и оптовых партий." }
                    ]
                },
                {
                    title: "2. Таможня и налоги в Канаде: реальные расходы",
                    items: [
                        { label: "CBSA (Пограничная служба Канады)", text: "В Канаде очень низкий порог беспошлинного ввоза (de minimis), поэтому налоги и пошлины начисляются практически на все коммерческие грузы." },
                        { label: "Налоговая структура:", text: "Пошлина: 0–20%. GST: Федеральный налог (5%). HST: Единый налог (13–15%). PST: Провинциальный налог (БК, Саскачеван)." },
                        { label: "Как это работает:", text: "Сначала на стоимость товара начисляется пошлина. Затем GST/HST начисляется на сумму стоимости товара и пошлины. В сервисе HappyBox DDP все эти расходы уже включены в ваш тариф." },
                        { label: "Бизнес-номер (BN)", text: "Вам не нужен канадский бизнес-номер импортера для доставки DDP с HappyBox — мы берем оформление на себя." }
                    ]
                },
                {
                    title: "3. Импортные пошлины и спецтарифы 2026",
                    items: [
                        { label: "Базовые пошлины", text: "Канада применяет пошлины на основе режима MFN. Типичные ставки: электроника 0–5%, одежда 12–18%, мебель 0–9.5%." },
                        { label: "Спецпошлины (сюртоксы) 2024–2026", text: "100% налог на электромобили китайского производства и 25% налог на изделия из стали и алюминия. Мы проверяем актуальность мер до отправки." }
                    ]
                },
                {
                    title: "4. Особенности логистики по типам товаров",
                    items: [
                        { label: "Электроника", text: "Должна соответствовать стандартам ISED (сертификация радиочастот). Для литиевых батарей нужны отчеты UN38.3 и MSDS." },
                        { label: "Одежда и текстиль", text: "Бирки должны быть на английском и французском, содержать состав и маркировку страны производства. Пошлины на одежду высокие (12–18%)." },
                        { label: "Мебель", text: "Деревянная упаковка должна иметь штамп термообработки ISPM-15, иначе CBSA может не допустить груз в страну." },
                        { label: "Товары для здоровья и БАДы", text: "Регулируются Health Canada. Может потребоваться номер NPN (Natural Product Number)." }
                    ]
                },
                {
                    title: "5. Крупнейшие порты и авиахабы",
                    items: [
                        { label: "Порт Ванкувера", text: "Главные ворота страны. Грузы проходят таможню здесь и далее следуют на восток по железной дороге (CP или CN). До Торонто — 5–7 дней." },
                        { label: "Порт Принс-Руперт", text: "Более быстрая альтернатива. Порт менее загружен, что сокращает срок доставки в центральную Канаду на 2–3 дня." },
                        { label: "Авиахабы", text: "Аэропорт Торонто (YYZ) для центральной части, Ванкувер (YVR) для запада." }
                    ]
                },
                {
                    title: "6. Складской цикл в Шэньчжэне",
                    items: [
                        { label: "Контроль и маркировка", text: "Проверяем товар на брак и наличие маркировки «Made in China» (обязательное требование CBSA)." },
                        { label: "Консолидация и упаковка", text: "Бесплатное хранение до 30 дней. Вакуумная упаковка для легких объемных грузов." },
                        { label: "Документация", text: "Готовим инвойсы и упаковочные листы для экспорта из Китая и импорта в Канаду." }
                    ]
                },
                {
                    title: "7. Страхование All-Risk",
                    items: [
                        { label: "Важность страховки", text: "Мы настоятельно рекомендуем страховку для Канады из-за длинного логистического плеча (ж/д путь 4000 км от Ванкувера до Торонто сопряжен с вибрациями)." },
                        { label: "Покрытие", text: "Повреждения на ж/д, зимние риски (канадские морозы могут повредить груз в порту), общая авария, кража. Ваш товар защищен до передачи на ваш адрес." }
                    ]
                }
            ],
            readMore: "Читать продвинутый гид по логистике",
            hide: "Свернуть гид"
        }
    };

    const t = content[language];

    return (
        <section className="py-16 bg-white rounded-[50px] mb-8 container mx-auto shadow-sm px-6 lg:px-20 border border-gray-100">
            <div className="max-w-5xl mx-auto text-gray-600">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center mx-auto mb-6 shrink-0">
                        <BookOpen size={32} />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-black text-brand-dark mb-6 tracking-tight leading-tight">
                        {t.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                        {t.subtitle}
                    </p>
                </div>

                <div className="space-y-16">
                    {t.sections.map((section, idx) => (
                        <div key={idx} className="scroll-mt-28">
                            <h3 className="text-2xl font-black text-brand-dark mb-6 leading-tight">
                                {section.title}
                            </h3>
                            <div className="space-y-6">
                                {section.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100/50">
                                        <h4 className="font-bold text-brand-dark text-lg mb-2">{item.label}</h4>
                                        <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
