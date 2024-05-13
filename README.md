# CS 465 Reflection

> *Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).*

&ensp; This project consisted of developing frontends for both the customer-facing website and the administrator single-page application. The customer-facing frontend was developed using the Express framework along with the Handlebars template engine. The customer-facing frontend utilized Javascript, HTML, JSON, and Handlebars directives to create a dynamic frontend for the customer. The business logic for the customer-facing frontend was created using Javascript, and the views were created with HTML, JSON, and the Handlebars template engine. The Handlebars template engine, along with JSON, allowed for a dynamic customer-facing frontend. This enabled content to be extracted from the view's HTML into JSON objects and dynamically injected into the view via Handlebars directives. By utilizing dynamic JSON in the customer-facing frontend, the amount of HTML for each view was greatly reduced. Handlebars also allowed for common HTML code between the different views to be extracted into partial templates and dynamically injected into each view that utilized the common HTML code.

&ensp; The admin SPA frontend was developed using the Angular framework. The admin SPA was developed using TypeScript and HTML. The business logic for the admin SPA frontend was created using TypeScript, and the views were created with HTML. Angular directives were utilized to create dynamic views. Both types of frontends utilized similar methods of separating the business logic from the views, and both types of frontends utilized directives to produce dynamic content for the views. However, they differ in the overall organizational structure of the logic and views.

> *Why did the backend use a NoSQL MongoDB database?*

&ensp; NoSQL MongoDB was utilized in the backend to enable rapid prototyping with document-centric data. MongoDB enabled the creation of flexible schemas that could be changed at any time to aid in the rapid prototyping of the project. The usage of MongoDB also allowed the backend database to be written entirely in JavaScript.

> *How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?*

&ensp; JSON is a way of creating structured data objects, whereas JavaScript is an object-oriented scripting language. JSON enables a language-agnostic data-interchange format. JSON tied together the frontend and backend by providing structured data objects that could be utilized by both the frontend and backend.

> *Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.*

&ensp; Refactoring code was a common occurrence throughout this full stack development process. For instance, the mock data that was utilized in the frontend was eventually replaced with data from a backend database. This required refactoring many aspects of code and creating an API to allow the frontend to communicate with the backend.

> *Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.*

&ensp; There are various methods utilized by the API, and these include HTTP request methods such as GET, POST, PUT, and DELETE. The GET method retrieves data representations of a specified resource, the POST method submits an entity to a resource, the PUT method replaces the current representation of the target resource with the payload data, and the DELETE method deletes the specified resource. Together, these methods enable the CRUD operations of the backend database.

&ensp; API endpoints are specified as URLs, and they tell the backend the locations of the different resources. Therefore, the API uses these endpoints to retrieve the requested resources from the backend. To ensure that the backend is secured, the API endpoints need to be secured. This can be achieved through the implementation of authentication, and by utilizing authorization when an API endpoint is requested.

> *How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?*

&ensp; This course has given me experience working with a stack of frameworks to build a complete web application. The MEAN stack was utilized to create an architecture to accommodate the models, views, and controllers of the application. I learned how to implement the frontend, backend, and RESTful API for a complete web application that accommodates different types of users. I also learned security practices to protect data from the backend database. This course also gave me experience with integrating multiple programming languages into one project. Overall, this course helped me gain a better understanding of rapid prototyping to quickly create a working full-stack web application.
