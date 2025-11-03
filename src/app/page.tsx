import HeroSection from '../HeroSection';
import Footer from '../Footer';

export default function Page() {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
      <HeroSection />
      <Footer />
    </div>
  );
}