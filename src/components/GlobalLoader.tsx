"use client";

export default function GlobalLoader() {
  return (
    <div className="fixed inset-0 bg-[#0F1433] flex justify-center items-center z-[99999]">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-[#247CF8] "></div>
    </div>
  );
}
