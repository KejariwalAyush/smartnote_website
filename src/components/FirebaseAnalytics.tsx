"use client";

import { useEffect } from 'react';
import { initAnalytics } from '@/lib/firebase';

export default function FirebaseAnalytics() {
    useEffect(() => {
        const setupAnalytics = async () => {
            try {
                await initAnalytics();
            } catch (error) {
                console.error('Firebase Analytics error:', error);
            }
        };
        setupAnalytics();
    }, []);

    return null;
}
