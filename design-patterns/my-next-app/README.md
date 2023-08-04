1. Singleton Pattern
In JavaScript, the Singleton pattern is typically implemented using a combination of a private constructor and a static method to retrieve the instance. The private constructor prevents the class from being instantiated directly from outside the class, while the static method ensures that there's only one instance of the class throughout the application.

The Singleton pattern is useful in scenarios where you want to control the access to a shared resource or when you want to avoid the overhead of creating multiple instances of a class. 

Use cases: logging service, Application Configuration(In scenarios where you need to load configuration data once and have access to it throughout the application)