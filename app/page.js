import KeyboardVisualizer from "@/components/keyboard/KeyboardVisualizer";
import SearchModal from "@/components/search/SearchModal";
import CategoryGrid from "@/components/ui/CategoryGrid";
import GetStartedGuide from "@/components/ui/GetStartedGuide";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="flex items-center justify-between py-20">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold mb-4">
            Master Keyboard Shortcuts, Boost Productivity
          </h1>
          <p className="text-xl mb-8">
            Learn keyboard shortcuts through interactive visualization
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg">
            Get Started
          </button>
        </div>
        <div className="w-1/2">
          <KeyboardVisualizer />
        </div>
      </section>

      {/* Featured Categories */}
      <CategoryGrid />

      {/* Getting Started Guide */}
      <GetStartedGuide />
    </div>
  );
}
