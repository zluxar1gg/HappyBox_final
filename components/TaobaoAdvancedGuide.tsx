import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Language } from '../utils/translations';
import { TableWrapper } from './TableWrapper';

interface TaobaoAdvancedGuideProps {
    language: Language;
    onNavigate?: (page: string) => void;
}

export const TaobaoAdvancedGuide: React.FC<TaobaoAdvancedGuideProps> = ({ language, onNavigate }) => {
    const content = {
        en: {
            title: "Taobao Buying Guide 2026",
            subtitle: "Everything international buyers need to know about purchasing from Taobao without a Chinese account.",
            sections: [
                {
                    title: "1. How to Buy from Taobao Without a Chinese Account",
                    contentPre: "Taobao is built for Chinese domestic buyers. Registration requires a Chinese phone number, and payments only go through Alipay — which itself requires a Chinese bank account. International credit cards and PayPal are not accepted.\n\nEven if you navigate registration, most Taobao sellers only ship within Mainland China. International shipping is rarely offered and almost never at competitive rates.\n\nHow a buying agent solves this:\n• You find a product on Taobao and send us the link\n• We verify the seller, confirm stock, and check real item dimensions\n• You transfer the purchase amount to us in USD or your local currency\n• We pay the seller via Alipay from our Chinese corporate accounts\n• The item ships to our Shenzhen warehouse for QC inspection and consolidation\n\nNo Taobao account needed. No Alipay setup. No Chinese phone number.\n\nOur fee: 0% commission — we charge nothing on top of the item price. Shipping and handling fees apply for international delivery."
                },
                {
                    title: "2. How to Find and Verify Sellers on Taobao",
                    contentPre: "Taobao has over a billion listings. Quality varies enormously between sellers — and the signals that indicate a reliable seller are only meaningful if you can read Chinese.\n\nWhat we check before every purchase:\n• Seller tenure — sellers active for 5–10 years have a long track record to protect. New stores with minimal history carry higher risk across every product category.\n• Transaction volume — high sales numbers indicate consistent fulfillment. A listing with tens of thousands of reviews is lower risk than a new listing with none.\n• Review content — we read Chinese customer reviews specifically for complaints about item quality, sizing accuracy, and packaging. A pattern of negative reviews on these points is a reliable red flag.\n• Live photos in reviews — Taobao allows buyers to upload real photos with reviews. We look for the camera icon in the review section — real buyer photos tell you far more than studio listing images.\n• Response time — sellers who respond to pre-purchase questions within a few hours are operationally active. Slow response before purchase predicts slow fulfillment and poor post-purchase support.\n\nTmall vs regular Taobao — when you see a red Tmall icon next to a listing, you're looking at an official brand or authorized dealer. Near-zero defect risk, standardized return policies, and authentic products. Regular Taobao is cheaper but requires more verification. We flag which type of seller you're dealing with before purchase.\n\nIf we identify a seller as risky, we tell you before purchasing and search for a better alternative."
                },
                {
                    title: "3. The QC Process: What We Check Before Shipping",
                    contentPre: "Every order that arrives at our Shenzhen warehouse goes through a free Quality Control inspection before international packing.\n\nWhat we check:\n• Item condition — visible defects, damage, or quality inconsistencies compared to the listing.\n• Correct item received — we verify color, size, model, and specification against your order details. Taobao sellers occasionally ship substitutions without notice.\n• Sizing and measurements — for clothing and footwear, we measure against the listed specifications. Chinese sizing frequently differs from international standards.\n• Packaging integrity — original tags, accessories, and packaging should be present and undamaged.\n\nWhat you receive:\nDetailed QC photos of your actual item before we pack for international shipping. You review and approve — if something is wrong, we contact the seller for return or exchange while the item is still in China.\n\nWhy this step matters:\nReturning items to Chinese sellers after international shipping is logistically and financially impractical for most buyers. QC at our Shenzhen warehouse is your realistic last opportunity to catch problems before they become expensive."
                },
                {
                    title: "4. Consolidation: How to Save Up to 60% on Shipping",
                    contentPre: "Consolidation is one of the most underused cost-saving tools available to international Taobao buyers.\n\nThe problem without consolidation:\nYou order from 8 different Taobao sellers. Each seller ships separately to an international forwarding address. You pay 8 separate international shipping fees — each with its own handling charge, minimum weight, and fuel surcharge.\n\nHow consolidation works:\nAll 8 orders ship domestically to our Shenzhen warehouse — cheap and fast within China. We hold them for up to 30 days at no cost. Once everything has arrived, we repack into the most efficient box configuration and ship internationally as one consolidated package.\n\nThe saving:\nOne international shipment instead of eight. One handling fee, one fuel surcharge, one customs entry. For small items — accessories, clothing, electronics — consolidation typically reduces total shipping cost by 40–60%.\n\nVolumetric optimization:\nWe don't just consolidate — we repack. Taobao sellers pack for domestic courier, not international freight. We remove unnecessary packaging, repack efficiently, and for lightweight bulky items (clothing, plush toys, pillows), vacuum packing is available to reduce volume by up to 50%.\n\nCross-platform consolidation:\nConsolidation works across platforms. Taobao orders combine with purchases from 1688, Weidian, Tmall, and Poizon in one shipment. You shop across the entire Chinese e-commerce ecosystem — we handle it as one logistics operation."
                },
                {
                    title: "5. Taobao, Tmall, Weidian, 1688, Poizon: Which Platform for What",
                    table: {
                        headers: ["Platform", "Best for", "Pricing", "Seller type", "Return policy"],
                        rows: [
                            ["Taobao", "Wide selection, everyday items, mainstream fashion", "Retail — competitive", "Mix of independent and commercial", "Generally available"],
                            ["Tmall", "Official brands, guaranteed authenticity", "Retail/brand price", "Brand flagships and authorized dealers", "Standard retail policy"],
                            ["Weidian", "Exclusive drops, indie streetwear, niche items", "Varies", "Independent sellers", "Often no returns"],
                            ["1688", "Wholesale bulk orders, factory direct", "Lowest — factory price", "Manufacturers and wholesalers", "Negotiable"],
                            ["Poizon (Dewu)", "Authenticated sneakers and streetwear", "Market price", "Verified sellers", "Platform-backed"],
                            ["Pinduoduo", "Discounted consumer goods, group buying", "Low — social commerce", "Commercial sellers", "Available"]
                        ]
                    },
                    beyondPlatforms: [
                        { name: "Tmall", desc: "Official brand purchases with authenticity guarantee", id: "tmall" },
                        { name: "Weidian", desc: "Hard-to-find exclusive streetwear items", id: "weidian" },
                        { name: "1688", desc: "Wholesale and bulk factory orders", id: "1688" },
                        { name: "Poizon (Dewu)", desc: "Authenticated sneakers and brand streetwear", id: "poizon" }
                    ],
                    afterTable: "Which to use:\n• Widest product selection, best for general shopping → Taobao\n• Official brand purchases with authenticity guarantee → Tmall\n• Hard-to-find exclusive streetwear items → Weidian\n• Wholesale and bulk factory orders → 1688\n• Authenticated sneakers and brand streetwear → Poizon\n\nEach platform has a dedicated page with full purchasing and shipping details. We support purchasing and consolidation across all six platforms into one international shipment."
                }
            ]
        },
        ru: {
            title: "Руководство по закупкам на Taobao 2026",
            subtitle: "Всё, что нужно знать международным покупателям о покупках на Taobao без китайского счета.",
            sections: [
                {
                    title: "1. Как покупать на Taobao без китайского счета",
                    contentPre: "Taobao создан для внутреннего рынка Китая. Для регистрации требуется китайский номер телефона, а оплата проходит только через Alipay, для которого нужен счет в китайском банке. Иностранные кредитные карты и PayPal не принимаются.\n\nДаже если вы пройдете регистрацию, большинство продавцов Taobao отправляют товары только по материковому Китаю. Международная доставка предлагается редко и почти никогда по конкурентным тарифам.\n\nКак мы это решаем:\n• Вы находите товар на Taobao и отправляете нам ссылку\n• Мы проверяем продавца, наличие и реальные габариты товара\n• Вы переводите сумму покупки нам в долларах или другой валюте\n• Мы оплачиваем заказ продавцу через Alipay с наших корпоративных счетов\n• Товар доставляется на наш склад в Шэньчжэне для проверки качества и консолидации\n\nВам не нужен аккаунт Taobao. Не нужен Alipay. Не нужен китайский номер.\n\nНаша комиссия: 0% — мы не берем комиссию за выкуп. Вы оплачиваете только международную доставку и обработку заказа."
                },
                {
                    title: "2. Как находить и проверять продавцов на Taobao",
                    contentPre: "На Taobao более миллиарда товаров. Качество у разных продавцов сильно варьируется, а сигналы надежности имеют смысл только если вы знаете китайский язык.\n\nЧто мы проверяем перед каждой покупкой:\n• Срок работы продавца — продавцы, работающие от 5 до 10 лет, дорожат своей репутацией. Новые магазины с минимальной историей несут повышенный риск.\n• Объем транзакций — высокие продажи указывают на стабильное выполнение заказов. Объявление с десятками тысяч отзывов менее рискованно, чем новое.\n• Отзывы покупателей — мы читаем китайские отзывы на предмет жалоб на качество, несоответствие размеров и плохую упаковку.\n• Живые фото в отзывах — Taobao позволяет покупателям загружать реальные фото. Мы ищем иконку камеры в отзывах — реальные фото покупателей говорят о товаре гораздо больше, чем студийные снимки.\n• Время ответа — продавцы, которые быстро отвечают на вопросы до покупки, активно работают. Медленный ответ предвещает медленную доставку и плохую поддержку.\n\nTmall vs обычный Taobao — если рядом с товаром есть красная иконка Tmall, вы смотрите на официальный бренд или авторизованного дилера. Это почти нулевой риск брака, стандартизированные возвраты и оригинальные товары. Обычный Taobao дешевле, но требует большей проверки.\n\nЕсли мы считаем продавца рискованным, мы сообщаем вам об этом до покупки и ищем лучшую альтернативу."
                },
                {
                    title: "3. Процесс проверки (QC): что мы смотрим перед отправкой",
                    contentPre: "Каждый заказ, прибывающий на наш склад в Шэньчжэне, проходит бесплатную проверку качества перед международной упаковкой.\n\nЧто мы проверяем:\n• Состояние товара — видимые дефекты, повреждения или несоответствия качеству в описании.\n• Точность заказа — мы сверяем цвет, размер, модель и спецификации. Иногда продавцы отправляют замены без предупреждения.\n• Размеры — для одежды и обуви мы сверяем замеры с заявленными. Китайские размеры часто отличаются от международных.\n• Целостность упаковки — наличие оригинальных бирок, аксессуаров и неповрежденной упаковки.\n\nЧто получаете вы:\nДетальные фото вашего реального товара перед упаковкой для международной отправки. Вы проверяете и одобряете товар — если что-то не так, мы связываемся с продавцом для возврата или обмена, пока товар еще в Китае.\n\nПочему это важно:\nВозврат товаров китайским продавцам после международной доставки логистически и финансово нецелесообразен. Проверка на складе в Шэньчжэне — ваша последняя реальная возможность выявить проблемы до того, как они станут дорогостоящими."
                },
                {
                    title: "4. Консолидация: как сэкономить до 60% на доставке",
                    contentPre: "Консолидация — один из самых недооцененных способов экономии для международных покупателей на Taobao.\n\nПроблема без консолидации:\nВы заказываете у 8 разных продавцов Taobao. Каждый отправляет товар на международный адрес пересылки по отдельности. Вы платите 8 отдельных тарифов на международную доставку — каждый со своей платой за обработку, минимальным весом и топливным сбором.\n\nКак работает консолидация:\nВсе 8 заказов доставляются на наш склад в Шэньчжэне — дешево и быстро внутри Китая. Мы бесплатно храним их до 30 дней. Когда все прибудет, мы переупаковываем их в максимально эффективную коробку и отправляем за границу как одну посылку.\n\nЭкономия:\nОдна международная посылка вместо восьми. Одна плата за обработку, один топливный сбор, одна таможенная декларация. Для небольших товаров (аксессуары, одежда, электроника) консолидация обычно снижает общую стоимость доставки на 40–60%.\n\nОптимизация объема:\nМы не просто консолидируем — мы переупаковываем. Продавцы Taobao упаковывают для внутренних курьеров, а не для международных перевозок. Мы удаляем лишнюю упаковку и предлагаем вакуумную упаковку для объемных вещей (одежда, мягкие игрушки, подушки), чтобы уменьшить объем до 50%.\n\nКросс-платформенная консолидация:\nВы можете объединить заказы с Taobao, 1688, Weidian, Tmall и Poizon в одну посылку. Вы покупаете по всей экосистеме китайской электронной коммерции — мы обрабатываем это как одну логистическую операцию."
                },
                {
                    title: "5. Taobao, Tmall, Weidian, 1688, Poizon: какую платформу выбрать",
                    table: {
                        headers: ["Платформа", "Для чего", "Уровень цен", "Тип продавцов", "Возвраты"],
                        rows: [
                            ["Taobao", "Широкий выбор, повседневные вещи", "Розничные", "Смешанный (инди и коммерция)", "Обычно да"],
                            ["Tmall", "Официальные бренды, гарантия качества", "Розничные (бренды)", "Флагманы брендов и дилеры", "Стандартная политика"],
                            ["Weidian", "Эксклюзив, инди-стритвир, ниша", "Варьируются", "Независимые продавцы", "Часто нет"],
                            ["1688", "Оптовые партии напрямую с фабрик", "Самые низкие", "Производители и оптовики", "По договоренности"],
                            ["Poizon (Dewu)", "Аутентифицированные кроссовки", "Рыночные", "Верифицированные продавцы", "Гарантия платформы"],
                            ["Pinduoduo", "Дисконтные товары, групповые покупки", "Низкие", "Коммерческие продавцы", "Доступно"]
                        ]
                    },
                    beyondPlatforms: [
                        { name: "Tmall", desc: "Официальные покупки у брендов с гарантией", id: "tmall" },
                        { name: "Weidian", desc: "Труднодоступные эксклюзивные вещи и стритвир", id: "weidian" },
                        { name: "1688", desc: "Оптовые партии напрямую с фабрик", id: "1688" },
                        { name: "Poizon (Dewu)", desc: "Оригинальные кроссовки и брендовая одежда", id: "poizon" }
                    ],
                    afterTable: "Что выбрать:\n• Самый широкий выбор для повседневных покупок → Taobao\n• Официальные брендовые вещи с гарантией → Tmall\n• Эксклюзивные вещи и стритвир → Weidian\n• Опт и партии напрямую с фабрик → 1688\n• Оригинальные кроссовки и стритвир → Poizon\n\nМы поддерживаем закупку и консолидацию на всех шести платформах. Для подробной информации о других платформах смотрите наши специальные страницы."
                }
            ]
        }
    };

    const t = content[language];

    return (
        <section className="py-16 bg-white rounded-[50px] mb-8 container mx-auto shadow-sm px-6 lg:px-20 border border-gray-100">
            <div className="max-w-5xl mx-auto text-gray-600">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">
                        {t.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>

                <div className="space-y-16">
                    {t.sections.map((section, idx) => (
                        <div key={idx} className="scroll-mt-28">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-6 leading-tight">
                                {section.title}
                            </h3>
                            
                            {section.contentPre && (
                                <p className="mb-6 text-base md:text-lg text-gray-700 font-medium leading-relaxed whitespace-pre-line">
                                    {section.contentPre}
                                </p>
                            )}

                            {section.table && (
                                <TableWrapper language={language}>
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-gray-50 border-b border-gray-100">
                                                {section.table.headers.map((h, i) => (
                                                    <th key={i} className="py-4 px-6 font-bold text-brand-dark whitespace-nowrap">{h}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 text-sm md:text-base">
                                            {section.table.rows.map((row, rIdx) => (
                                                <tr key={rIdx}>
                                                    {row.map((cell, cIdx) => (
                                                        <td key={cIdx} className="py-4 px-6 text-gray-700 font-medium leading-relaxed">
                                                            {cell}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </TableWrapper>
                            )}

                            {(section as any).beyondPlatforms && (
                                <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100 mb-6 mt-6">
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 text-left">
                                        {(section as any).beyondPlatforms.map((plat: any, i: number) => (
                                            <div key={i} onClick={() => onNavigate && onNavigate(plat.id)} className="bg-brand-blue p-6 rounded-[24px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-transparent cursor-pointer group flex flex-col h-full text-left">
                                                <h4 className="font-bold text-white mb-2 text-lg transition-colors flex items-center gap-2">
                                                    {plat.name}
                                                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/>
                                                </h4>
                                                <p className="text-white/80 font-medium text-sm leading-relaxed">{plat.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {section.afterTable && (
                                        <div className="text-left w-full text-base md:text-lg text-gray-700 font-medium leading-relaxed whitespace-pre-line pt-2">
                                            {section.afterTable}
                                        </div>
                                    )}
                                </div>
                            )}

                            {section.afterTable && !(section as any).beyondPlatforms && (
                                <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100 mb-6">
                                    <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed whitespace-pre-line">
                                        {section.afterTable}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
