'use client'
import CardForm from "./components/CardForm";
import { useState } from "react";
import CardFormResponse from "./components/CardFormResponse";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  const [resolvedResponse, setResolvedResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 overflow-auto">
      <div className="bg-gradient-to-r mt-4 bg-black p-4 mx-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-center">
            <Image 
              src="/atoms.png"
              width={40}
              height={40}
              alt="Logo"
            />
            <h1 className="text-xl text-white font-semibold mb-4 ml-2">Welcome to Physic Resolve - @jmatzul7</h1>
          </div>
        </div>
        <div className="flex flex-col mx-5 justify-center lg:flex-row md:flex-row">
        
          <div className="lg:w-1/3 md:w-1/3 w-full overflow-auto">
            <CardForm 
              handleResolvedResponse={setResolvedResponse} 
              handleLoading={setLoading}
            />
          </div>
          <div className="lg:w-2/3 md:w-1/3 w-full overflow-auto">
            <CardFormResponse 
              loading={loading}
              resolvedResponse={resolvedResponse} 
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
