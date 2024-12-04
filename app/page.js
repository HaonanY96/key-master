import KeyboardVisualizer from "@/components/keyboard/keyboard-visualizer";

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">键盘快捷键可视化</h1>
      <KeyboardVisualizer platform="windows" />
    </div>
  );
}
