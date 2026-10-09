import { WarehouseDestination } from './types';

export const ADMIN_EMAILS = [
  'its.d.kniazev@gmail.com',
  'support@happyboxlogistics.com'
];

export const CLIENT_ID_BASE = 8140;

export interface WarehouseInfo {
  id: WarehouseDestination;
  titleRu: string;
  titleEn: string;
  badgeRu: string;
  badgeEn: string;
  descriptionRu: string;
  descriptionEn: string;
  addressTemplateCn: string;
  recipientTemplate: string;
  phonePlaceholder: string;
  zipCode: string;
}

export const WAREHOUSE_PHONE = '13048875834';

export function getClientCodeNumber(clientCode?: string): string {
  if (!clientCode) return '8140';
  const match = clientCode.match(/\d+/);
  return match ? match[0] : '8140';
}

export function formatRecipientCode(fullName?: string, clientCode?: string): string | null {
  if (!fullName || !fullName.trim()) return null;
  const trimmed = fullName.trim();
  
  const cyrToLat: Record<string, string> = {
    'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'E',
    'Ж': 'Z', 'З': 'Z', 'И': 'I', 'Й': 'I', 'К': 'K', 'Л': 'L', 'М': 'M',
    'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U',
    'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'C', 'Ш': 'S', 'Щ': 'S', 'Ъ': '',
    'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'Y', 'Я': 'Y'
  };

  let initials = '';
  for (const char of trimmed) {
    const upper = char.toUpperCase();
    if (cyrToLat[upper]) {
      initials += cyrToLat[upper];
    } else if (/[A-Z]/.test(upper)) {
      initials += upper;
    }
    if (initials.length >= 2) break;
  }

  if (initials.length < 2) {
    initials = (initials + 'HB').slice(0, 2);
  }

  const num = getClientCodeNumber(clientCode);
  return `${initials.slice(0, 2).toUpperCase()}${num}`;
}

export const WAREHOUSES: WarehouseInfo[] = [
  {
    id: 'eu_sea_uae_israel',
    titleRu: 'ЕС, Дубай склад (мелкие + море, ОАЭ, Израиль)',
    titleEn: 'EU, Dubai Hub (Small & Sea, UAE, Israel)',
    badgeRu: 'ЕС, Дубай склад',
    badgeEn: 'EU, Dubai Hub',
    descriptionRu: 'Консолидация для отправлений в Европу, Дубай, ОАЭ и Израиль.',
    descriptionEn: 'Consolidation hub for cargo to Europe, Dubai, UAE and Israel.',
    addressTemplateCn: '广州市白云区三元里大道北高田街13号 ({RECIPIENT_CODE})',
    recipientTemplate: '{RECIPIENT_CODE}',
    phonePlaceholder: WAREHOUSE_PHONE,
    zipCode: '510400'
  },
  {
    id: 'usa_amazon_large',
    titleRu: 'США Амазон (FBA, Крупные партии & Море)',
    titleEn: 'USA Amazon (FBA, Commercial Cargo & Sea)',
    badgeRu: 'США Амазон',
    badgeEn: 'USA Amazon',
    descriptionRu: 'Специализированный хаб подготовки: паллеты, стикеровка FBA, сборные контейнеры DDP.',
    descriptionEn: 'Specialized preparation hub: pallets, Amazon FBA labeling, ocean container shipments.',
    addressTemplateCn: '广州市白云区均禾街道新石路新思维创意产业园B3栋118 ({RECIPIENT_CODE})',
    recipientTemplate: '{RECIPIENT_CODE}',
    phonePlaceholder: WAREHOUSE_PHONE,
    zipCode: '510440'
  },
  {
    id: 'usa_small',
    titleRu: 'США мелкие (Мелкие посылки & Экспресс Авиа)',
    titleEn: 'USA Small (Small Parcels & Air Express)',
    badgeRu: 'США мелкие',
    badgeEn: 'USA Small',
    descriptionRu: 'Авиа-хаб для быстрых отправлений в США до $800 (de minimis), образцы, Poizon/Taobao.',
    descriptionEn: 'Air express hub for USA parcels under $800 duty-free limit, samples, ePacket.',
    addressTemplateCn: '深圳市宝安区福永镇福海街道悦盛三路7号盈锦工业园北区一楼 ({RECIPIENT_CODE})',
    recipientTemplate: '{RECIPIENT_CODE}',
    phonePlaceholder: WAREHOUSE_PHONE,
    zipCode: '518103'
  },
  {
    id: 'cis_cargo',
    titleRu: 'РФ (Карго авто/жд/авиа)',
    titleEn: 'Russia Cargo (Auto/Rail/Air)',
    badgeRu: 'РФ Карго',
    badgeEn: 'RU Cargo',
    descriptionRu: 'Оптовые партии одежды, обуви, текстиля, хозтоваров и оборудования в РФ и страны СНГ.',
    descriptionEn: 'Wholesale cargo for clothing, footwear, goods to Russia and CIS countries.',
    addressTemplateCn: '深圳市福田区 ({RECIPIENT_CODE})',
    recipientTemplate: '{RECIPIENT_CODE}',
    phonePlaceholder: WAREHOUSE_PHONE,
    zipCode: '518000'
  }
];

export const SUPPORT_CONTACTS = {
  telegramUsername: 'd_china_hbl',
  telegramUrl: 'https://t.me/d_china_hbl',
  whatsappPhone: '+86 130 4887 5834',
  whatsappUrl: 'https://wa.me/8613048875834'
};
