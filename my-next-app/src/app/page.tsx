import BlueButton from "./singleton-pattern/blueButton";
import RedButton from "./singleton-pattern/redButton";

export default function Home() {
  return (
    <div className="mx-2">
      <h2>Singleton Classes</h2>
      <p className="my-2">Singletons are classes which can be instantiated once, and can be accessed globally. This single instance can be shared throughout our application, which makes Singletons great for managing global state in an application.</p>
      <div className="mt-2 flex gap-2">
        <BlueButton/>
        <RedButton/>
      </div>
    </div>
  )
}
