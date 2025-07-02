"use client"

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import Loader from "@/components/Loader"
import NextLink from "next/link"
import { ArrowLeft, RefreshCw } from "lucide-react"

export default function AccountPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    // Start the 10-second timer
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowError(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleTryAgain = () => {
    setIsLoading(true);
    setShowError(false);

    // Start the timer again
    setTimeout(() => {
      setIsLoading(false);
      setShowError(true);
    }, 10000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <Loader />
          <div className="mt-6 text-gray-400">Loading account...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800/50 px-8 py-5">
        <div className="flex items-center gap-4">
          <NextLink href="/">
            <Button variant="outline" className="bg-gray-900/70 border-gray-700/50 text-white hover:bg-gray-800 hover:text-white rounded-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </NextLink>
          <div className="text-2xl font-semibold text-white">Account</div>
        </div>
      </div>

      {/* Error Content */}
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center">
              <div className="text-red-500 text-4xl">⚠</div>
            </div>
            <h2 className="text-2xl font-semibold text-white mb-3">Connection Failed</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Sorry, the page could not load. Network error...
            </p>
          </div>

          <Button
            onClick={handleTryAgain}
            className="bg-[#343F43] rounded-full text-white px-8 py-3"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
}
