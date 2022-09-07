import type { Product, Purchase, PurchaseError, Subscription } from '../types';
declare type IAP_STATUS = {
    connected: boolean;
    products: Product[];
    promotedProductsIOS: Product[];
    subscriptions: Subscription[];
    purchaseHistories: Purchase[];
    availablePurchases: Purchase[];
    currentPurchase?: Purchase;
    currentPurchaseError?: PurchaseError;
    finishTransaction: (purchase: Purchase) => Promise<string | void>;
    getAvailablePurchases: () => Promise<void>;
    getPurchaseHistories: () => Promise<void>;
    getProducts: (skus: string[]) => Promise<void>;
    getSubscriptions: (skus: string[]) => Promise<void>;
};
export declare function useIAP(): IAP_STATUS;
export {};
