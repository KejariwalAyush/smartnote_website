import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBSg0-fyIlAamSbixC_jTxB6PG370ral20",
    authDomain: "smartnote-c29a1.firebaseapp.com",
    projectId: "smartnote-c29a1",
    storageBucket: "smartnote-c29a1.appspot.com",
    messagingSenderId: "113122567255",
    appId: "1:113122567255:web:3e4ee1293b27b42ae1af12",
    measurementId: "G-4LPCLMTRY7"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const initAnalytics = async () => {
    if (typeof window !== "undefined") {
        const supported = await isSupported();
        if (supported) {
            return getAnalytics(app);
        }
    }
    return null;
};

export const logAnalyticsEvent = async (eventName: string, params?: object) => {
    if (typeof window !== "undefined") {
        const analytics = await initAnalytics();
        if (analytics) {
            const { logEvent } = await import("firebase/analytics");
            logEvent(analytics, eventName, params);
        }
    }
};

export default app;
