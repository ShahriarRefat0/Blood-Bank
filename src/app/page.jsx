"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import HeroSection from "../../public/Components/HeroSection";
import FeaturesSection from "../../public/Components/FeaturesSection";
import TestimonialsSection from "../../public/Components/TestimonialsSection";
import LoadingSpinner from "../../public/Components/LoadingSpinner";

const CoverageMap = dynamic(
  () => import("../../public/Components/CoverageMap"),
  { ssr: false }
);

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="font-sans">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CoverageMap />
    </div>
  );
}
