import React from 'react';
import { BookOpen, AlertCircle } from 'lucide-react';
import { Language } from '../utils/translations';

interface CaAdvancedLogisticsGuideProps {
  language: Language;
  simplified?: boolean;
}

export const CaAdvancedLogisticsGuide: React.FC<CaAdvancedLogisticsGuideProps> = ({ language, simplified }) => {

    const content = {
        en: {
            title: "China to Canada Shipping Guide 2026: Costs, Customs & Transit Times",
            subtitle: "The technical reference for Canadian importers who want to understand the full picture.",
            sections: [
                {
                    title: "1. The Vancouver Gateway (YVR)",
                    items: [
                        { label: "Main Entry Point", text: "90% of China-to-Canada sea freight enters through the Port of Vancouver. This is the fastest entry point for Western Canada hubs (YVR1, YVR2, YVR3)." }
                    ]
                },
                {
                    title: "2. Multimodal Rail Link (Sea + Rail)",
                    items: [
                        { label: "Expedited Rail to East", text: "For warehouses in Ontario (YYZ region) and Quebec (YUL region), we utilize the CP or CN Rail networks. Your cargo lands in Vancouver and moves via expedited rail to the East, offering the best balance between cost and speed." }
                    ]
                },
                {
                    title: "3. CBSA & Tax Engineering",
                    items: [
                        { label: "No De Minimis", text: "Canada has no 'De Minimis' for most commercial FBA shipments. We handle the GST (5%) and provincial HST (up to 15%) as part of our DDP service, so your Seller Central account remains clear of tax debts." }
                    ]
                },
                {
                    title: "4. Major FBA Hub Mapping",
                    items: [
                        { label: "Optimized Routing", text: "We optimize logistics for the most common Canadian destinations: YYZ4 (Brampton), YYZ7 (Milton), YUL2 (Montreal), and YVR1 (Delta)." }
                    ]
                },
                {
                    title: "5. ISPM-15 Pallet Standards",
                    items: [
                        { label: "CFIA Strict Compliance", text: "Canada is extremely strict about wood-boring pests. We ensure all wooden pallets are Heat Treated (HT) with a visible IPPC stamp to prevent immediate rejection by the Canadian Food Inspection Agency (CFIA)." }
                    ]
                },
                {
                    title: "6. Winter Logistics Resilience",
                    items: [
                        { label: "Sub-Zero Protection", text: "Shipping to Canada in Q4 means dealing with sub-zero temperatures. We use heavy-duty 5-ply cartons and reinforced wrapping to protect inventory from moisture and 'freeze-thaw' cycles during rail transit." }
                    ]
                },
                {
                    title: "7. NRI (Non-Resident Importer) Support",
                    items: [
                        { label: "No Canadian Entity Required", text: "You don't need a Canadian business entity to sell on Amazon.ca. We act as the bridge, allowing you to import under our compliant structure while maintaining full ownership of your inventory." }
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
                    title: "1. Ворота Ванкувера (YVR) и Морской Фрахт",
                    items: [
                        { label: "Главный порт входа", text: "90% морских грузов из Китая в Канаду поступает через порт Ванкувера. Это самый быстрый путь для FBA складов Западной Канады (YVR1, YVR2, YVR3)." }
                    ]
                },
                {
                    title: "2. Мультимодальный транзит (Море + Ж/Д) на восток",
                    items: [
                        { label: "Поезда в Онтарио и Квебек", text: "Для складов в регионе Онтарио (YYZ) и Квебек (YUL) мы используем ж/д сети CP или CN. Груз выгружается в Ванкувере и едет на восток на ускоренных поездах — лучший баланс цены и скорости." }
                    ]
                },
                {
                    title: "3. CBSA и налоговая оптимизация",
                    items: [
                        { label: "Отсутствие De Minimis", text: "Для коммерческих посылок FBA в Канаде практически нет необлагаемого минимума. Мы включаем уплату GST (5%) и провинциального HST (до 15%) в DDP тариф, чтобы ваш аккаунт Seller Central оставался чист." }
                    ]
                },
                {
                    title: "4. Логистика на главные хабы FBA",
                    items: [
                        { label: "Оптимизация маршрутов", text: "Мы отправляем основной поток на самые популярные FBA хабы Канады: YYZ4 (Брамптон), YYZ7 (Милтон), YUL2 (Монреаль) и YVR1 (Дельта)." }
                    ]
                },
                {
                    title: "5. Стандарты паллет ISPM-15",
                    items: [
                        { label: "Контроль CFIA", text: "Канада крайне строго относится к древесным вредителям. Мы следим, чтобы все деревянные поддоны были термообработаны (HT) с четким штампом IPPC во избежание конфискации агентством CFIA." }
                    ]
                },
                {
                    title: "6. Стойкость к зимней логистике",
                    items: [
                        { label: "Защита в Q4", text: "Доставка в Канаду в 4 квартале — это минусовые температуры. Чтобы защитить товар от влаги и циклов 'заморозка-оттаивание' во время ж/д транзита через горы, мы используем прочный 5-слойный картон и усиленную стрейч-пленку." }
                    ]
                },
                {
                    title: "7. Поддержка NRI (Импортер-нерезидент)",
                    items: [
                        { label: "Без регистрации в Канаде", text: "Вам не нужно регистрировать компанию в Канаде для торговли на Amazon.ca. Мы выступаем мостом (IOR), позволяя вам легально импортировать без присутствия, сохраняя права на товар." }
                    ]
                }
            ],
            readMore: "Читать продвинутый гид по логистике",
            hide: "Свернуть гид"
        }
    };

    const t = content[language];

    if (simplified) {
        return (
            <div className="space-y-12 text-gray-800 text-lg leading-relaxed pt-10">
                <div className="mb-12">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-dark mb-4 tracking-tight">
                        {t.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>

                <div className="space-y-10">
                    {t.sections.map((section, idx) => (
                        <div key={idx} className="flex gap-4 sm:gap-6 items-start">
                            <div className="w-10 h-10 rounded-full bg-gray-100 text-brand-dark font-black flex items-center justify-center flex-shrink-0 text-xl border border-gray-200 mt-1">
                                {idx + 1}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-brand-dark mb-2 tracking-tight">{section.title.replace(/^\d+\.\s*/, '')}</h3>
                                {section.items.map((item, itemIdx) => (
                                    <p key={itemIdx} className="text-gray-700 leading-relaxed font-medium mb-3">
                                        <strong className="text-brand-dark">{item.label}:</strong> {item.text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

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
