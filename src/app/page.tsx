// src/app/page.tsx (or any other page)

import V4HeroSection from '@/components/V4HeroSection';
import LeadCaptureSection from '@/components/LeadCaptureSection';

export default function HomePage() {
  return (
    <main>
      <V4HeroSection />
      <LeadCaptureSection />
      {/* You can add other sections of your page below */}
    </main>
  );
}