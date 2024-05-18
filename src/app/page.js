import Calculate from "@/components/Calculate";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-[80%] px-3">
        <Calculate />
      </div>
    </main>
  );
}
