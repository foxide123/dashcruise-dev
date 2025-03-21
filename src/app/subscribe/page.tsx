import SubscribeButton from "@/components/SubscribeButton";

export default function Subscribe() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Support Our Cause</h1>
      <SubscribeButton customAmount="79"/>
    </div>
  );
}
