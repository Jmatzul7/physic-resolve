'use client'
import CardForm from "./components/CardForm";
import { useState } from "react";
import CardFormResponse from "./components/CardFormResponse";
import Footer from "./components/Footer";

export default function Home() {
  const [resolvedResponse, setResolvedResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 overflow-auto">
        <div className="flex flex-col mx-5 justify-center lg:flex-row md:flex-row">
          <div className="lg:w-1/3 md:w-1/3 w-full overflow-auto">
            <CardForm 
              handleResolvedResponse={setResolvedResponse} 
              handleLoading={setLoading}
            />
          </div>
          <div className="lg:w-2/3 mx-4 md:w-1/3 w-full overflow-auto">
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
