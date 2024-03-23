export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="fixed  w-full h-full bg-cover bg-center z-0" style={{ backgroundImage: `url(/images/chairlift.jpeg)` }} />
      <div className="fixed w-full h-full bg-neutral-400 opacity-35 z-1" />
      <div className="flex flex-col px-24 py-8 z-2 relative">
        <h1 className="h1 mb-12">Ken Papaleo</h1>
        <div className="max-w-[650px]">
          <h2 className="hero mb-28">In Loving<br />Memory</h2>
          <div className="flex flex-col gap-4">
            <p className="font-bold text-black">12.28.1946 - 2.9.2020</p>
            <p className="text-black">Beloved husband, caring father, joy-filled grandfather.</p>
            <p className="text-black">Ken has spent his life exposing our world to beauty and pain, victory and defeat through his photojournalism career. He has forever preserved some of this country's most impactful events in museums, books, and newspapers. His eye to take the ordinary and make it extraordinary has been a blessing to us all. His skill with the camera is only surpassed by his love for Jesus and his family.</p>
          </div>
          <div className="pt-4">
            <button className="btn">Continue to site</button>
          </div>
        </div>
      </div>
    </main>
  );
}
