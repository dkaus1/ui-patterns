'use client';
import { useEffect } from "react";

const ProxyPattern = () => {
  useEffect(() => {
    const person = {
        name: "John Doe",
        age: 42,
        nationality: "American"
      };
      
      //proxy object
      const personProxy = new Proxy(person, {
        get: (obj, prop) => {
          if (!obj[prop]) {
            console.log(`Hmm.. this property doesn't seem to exist`);
          } else {
            console.log(`The value of ${prop} is ${obj[prop]}`);
          }
        },
        set: (obj, prop, value) => {
          if (prop === "age" && typeof value !== "number") {
            console.log(`Sorry, you can only pass numeric values for age.`);
          } else if (prop === "name" && value.length < 2) {
            console.log(`You need to provide a valid name.`);
          } else {
            console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`);
            obj[prop] = value;
          }
          return true;
        }
      });
      
      //getter
      personProxy.nonExistentProperty;
      //setter
      personProxy.age = "44";
      //setter
      personProxy.name = "";
      
  }, []);

  const executeReflect=()=>{
    const person = {
        name: "John Doe",
        age: 42,
        nationality: "American"
      };
      
      const personProxy = new Proxy(person, {
        get: (obj, prop) => {
          console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
        },
        set: (obj, prop, value) => {
          console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
          return Reflect.set(obj, prop, value);
        }
      });
      
      personProxy.name;
      personProxy.age = 43;
      personProxy.name = "Jane Doe";
      
  }

  return (
    <>
      <h2>Proxy Pattern</h2>

      <ul className="my-2">
        <li>
          With a Proxy object, we get more control over the interactions with
          certain objects.
        </li>
        <li>
          A proxy means a stand-in for someone else. Instead of interacting with
          the target object directly, we'll interact with the Proxy object
        </li>
        <li>
          A proxy can be useful to add validation. A user shouldn't be able to
          change person's age to a string value, or give them an empty name. Or
          if the user is trying to access a property on the object that doesn't
          exist, we should let the user know
        </li>
        <li>
          A proxy can have various use-cases: it can help with validation,
          formatting, notifications, or debugging.
        </li>
        <li>
          Overusing the Proxy object or performing heavy operations on each
          handler method invocation can easily affect the performance of your
          application negatively. It's best to not use proxies for
          performance-critical code.
        </li>
      </ul>

        <div className="bg-gray-700 p-2 my-4">
            <h2>Reflect</h2>
            <ul className="m-2">
                <li>JavaScript provides a built-in object called Reflect, which makes it easier for us to manipulate the target object when working with proxies.</li>
                <li>Previously, we tried to modify and access properties on the target object within the proxy through directly getting or setting the values with bracket notation. Instead, we can use the Reflect object. The methods on the Reflect object have the same name as the methods on the handler object.</li>
            </ul>
            <button onClick={executeReflect} id="blue">Execute Reflect</button>
        </div>
      <div className="mt-4"></div>
    </>
  );
};

export default ProxyPattern;
