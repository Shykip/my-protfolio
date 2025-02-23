"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const images = document.querySelectorAll("img");
        let loadedCount = 0;

        if (images.length === 0) {
            setLoading(false);
            return;
        }

        images.forEach((img) => {
            if (img.complete) {
                loadedCount++;
            } else {
                img.onload = () => {
                    loadedCount++;
                    if (loadedCount === images.length) {
                        setLoading(false);
                    }
                };
                img.onerror = () => {
                    loadedCount++; // Still count error images to prevent infinite loading
                    if (loadedCount === images.length) {
                        setLoading(false);
                    }
                };
            }
        });

        if (loadedCount === images.length) {
            setLoading(false);
        }
    }, []);

    return (
        <main className="bg-primary flex-col px-16 max-lg:px-10 cursor-default">
            {loading && <Loader />}
            {!loading && (
                <>
                    <Navbar />
                    {children}
                </>
            )}
        </main>
    );
}
