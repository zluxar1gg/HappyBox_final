import { Parcel, User } from "../types";

// This service mimics fetching data from a Google Sheet
// Later, we will replace this with actual API calls to your Master Sheet

const MOCK_DELAY = 800; // Simulate network delay

const MOCK_DATABASE: Record<string, { user: User; parcels: Parcel[] }> = {
  'example@example.com': {
    user: {
      email: 'example@example.com',
      name: 'Client Example',
      clientCode: 'HB-007'
    },
    parcels: [
      {
        id: '1',
        userId: 'mock-1',
        clientCode: 'HB-007',
        inboundTracking: 'SF123456789',
        productTitle: 'Nike Sneakers (2 pairs)',
        warehouseDestination: 'cis_cargo',
        status: 'arrived',
        weight: 1.2,
        createdAt: '2023-10-01'
      },
      {
        id: '2',
        userId: 'mock-1',
        clientCode: 'HB-007',
        inboundTracking: 'YT987654321',
        productTitle: 'Xiaomi Smart Home Sensor',
        warehouseDestination: 'eu_sea_uae_israel',
        status: 'shipped',
        weight: 0.3,
        outboundTracking: 'LV999888777CN',
        shippingCost: '$15.00',
        createdAt: '2023-09-28'
      },
      {
        id: '3',
        userId: 'mock-1',
        clientCode: 'HB-007',
        inboundTracking: 'JD11223344',
        productTitle: 'Winter Jacket',
        warehouseDestination: 'usa_small',
        status: 'expected',
        createdAt: '2023-10-05'
      }
    ]
  },
  'demo@happybox.service': {
    user: {
        email: 'demo@happybox.service',
        name: 'Demo Client',
        clientCode: 'HB-DEMO'
    },
    parcels: [
        {
            id: '101',
            userId: 'mock-2',
            clientCode: 'HB-DEMO',
            inboundTracking: 'CN123000999',
            productTitle: 'Sample Package',
            warehouseDestination: 'usa_amazon_large',
            status: 'delivered',
            weight: 5.5,
            shippingCost: '$60.00',
            createdAt: '2023-08-15'
        }
    ]
  }
};

export const sheetService = {
  login: async (email: string): Promise<{ user: User; parcels: Parcel[] } | null> => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = MOCK_DATABASE[email.toLowerCase()];
        resolve(data || null);
      }, MOCK_DELAY);
    });
  },

  // Future method: Fetch latest parcels for a logged-in user
  fetchParcels: async (email: string): Promise<Parcel[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = MOCK_DATABASE[email.toLowerCase()];
            resolve(data ? data.parcels : []);
        }, MOCK_DELAY);
    });
  }
};