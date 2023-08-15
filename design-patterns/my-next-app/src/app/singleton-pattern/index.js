import RedButton from './redButton';
import BlueButton from './blueButton';

const SingletonPattern = () => {
  return (
    <>
      <h2>Singleton Classes</h2>
      <p className="my-2">
        Singletons are classes which can be instantiated once, and can be
        accessed globally. This single instance can be shared throughout our
        application, which makes Singletons great for managing global state in
        an application.
      </p>
      <div className="mt-2 flex gap-2">
        <BlueButton />
        <RedButton />
      </div>
    </>
  );
};

export default SingletonPattern
