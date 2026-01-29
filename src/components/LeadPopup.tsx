"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Send, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export const LeadPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    useEffect(() => {
        // Check if user has already submitted or seen the popup
        const hasSubmitted = localStorage.getItem('hasSubmittedLead');
        const hasSeenPopup = sessionStorage.getItem('hasSeenLeadPopup');

        if (!hasSubmitted && !hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 8000); // Wait 8 seconds before showing

            return () => clearTimeout(timer);
        }
    }, []);

    const closePopup = () => {
        setIsVisible(false);
        sessionStorage.setItem('hasSeenLeadPopup', 'true');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...data,
                    source: 'Global Lead Popup',
                    timestamp: new Date().toISOString()
                }),
            });

            if (response.ok) {
                setStatus('success');
                localStorage.setItem('hasSubmittedLead', 'true');
                setTimeout(() => {
                    closePopup();
                }, 3000);
            } else {
                // If it fails, we still want to be graceful
                console.error('Submission failed');
                setStatus('idle');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('idle');
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePopup}
                        className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
                    />

                    {/* Popup Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 40 }}
                        className="relative w-full max-w-lg bg-white rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden border border-slate-100"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors z-20"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {status === 'success' ? (
                            <div className="p-12 text-center space-y-6">
                                <div className="w-20 h-20 bg-green-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-green-500/20 mx-auto">
                                    <CheckCircle2 className="w-10 h-10 text-white" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-none uppercase">Transmission Received.</h3>
                                    <p className="text-slate-500 font-medium tracking-tight">An architect will contact you within 4 hours.</p>
                                </div>
                            </div>
                        ) : (
                            <div className="relative">
                                {/* Header / Visual */}
                                <div className="bg-slate-950 p-12 text-center space-y-6 overflow-hidden relative">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] -z-10 rounded-full animate-pulse"></div>

                                    <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto flex items-center justify-center shadow-2xl shadow-blue-600/20 rotate-3">
                                        <Zap className="w-8 h-8 text-white" />
                                    </div>

                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-black text-white tracking-tight leading-none italic">
                                            Scale Your <br />
                                            <span className="text-blue-500 outline-text">Operations.</span>
                                        </h2>
                                        <p className="text-slate-400 font-medium text-sm">
                                            Get a custom technical blueprint for your business automation.
                                        </p>
                                    </div>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="p-12 space-y-6 bg-white">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Full Name</label>
                                        <input
                                            required
                                            name="name"
                                            type="text"
                                            placeholder="Alex Rivera"
                                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-slate-900 font-bold placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">WhatsApp / Work Email</label>
                                        <input
                                            required
                                            name="contact"
                                            type="text"
                                            placeholder="+91 97517 55757"
                                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-slate-900 font-bold placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-mono"
                                        />
                                    </div>

                                    <button
                                        disabled={status === 'submitting'}
                                        type="submit"
                                        className="w-full btn-primary py-5 text-lg flex items-center justify-center space-x-3 shadow-xl shadow-blue-500/20 group disabled:opacity-50"
                                    >
                                        <span>{status === 'submitting' ? 'Transmitting...' : 'Request Intelligence'}</span>
                                        {status !== 'submitting' && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                                    </button>

                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
                                        Direct talk to architect • 4h response time
                                    </p>
                                </form>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
