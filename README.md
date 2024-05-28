Overview
This Online Table Reservation System is designed to manage user-related functionalities for a restaurant table booking application. It provides features for creating, updating, deleting, and reading user profiles, as well as for reserving and managing table bookings. The app utilizes several libraries and hooks to streamline operations and enhance the user experience.
________________________________________
Libraries Used
•	axios: For making HTTP requests to the server.
•	cors: To enable Cross-Origin Resource Sharing, allowing the server to accept requests from different origins.
•	react-router-dom: For handling client-side routing within the React application.
•	react-icons/fa: For using Font Awesome icons in the React components.
•	mongoose: For interacting with MongoDB, defining schemas, and modeling data.
•	express: To set up the backend server and handle API endpoints.
________________________________________
Hooks Used
•	useState: To manage state within functional components.
•	useContext: To access global state and functions provided by context providers.
•	useNavigate: To programmatically navigate between different routes in the application.
________________________________________
Functionalities
User Management
•	Create User: Allows new users to sign up by providing necessary details such as username, email, and password. Data is sent to the backend using axios and stored in MongoDB using mongoose.
•	Update User: Enables users to update their username. The component uses useContext to handle form data and axios for submitting updates to the server.
•	Delete User: Allows users to delete their account through writing username. This triggers an axios request to the backend to remove the user data from the database.
•	Read User: Fetches and displays user information. Data is retrieved from the backend using axios and displayed using React components.
Table Reservation Management
•	Reserve Table: Users can reserve a table by selecting a date, time, and the number of seats. The component uses useState to handle input data and axios to send the reservation details to the server.
•	View Reservations: Retrieves and displays a list of reservations made by the user. axios is used to fetch reservation data, and reservations are rendered using React components, with icons from react-icons/fa for interaction options like editing or canceling reservations.
•	Update Reservation: Allows users to modify their reservation details. The component uses useContext to handle form data and axios for submitting updates to the server.
•	Cancel Reservation: Users can cancel their reservations. This triggers an axios request to the backend to remove the reservation data from the database.
________________________________________
Pages
•	Login Page: For users to log in to the application.
•	Registration Page: For new users to sign up for an account.
•	Home Page: After logging in, users can navigate to this page to reserve tables and view existing reservations.
•	Profile Page: Allows users to update their profile details.
•	Notification Page: A static component to display notifications.
•	Settings Page: For users to delete their accounts.
________________________________________
Navigation Flow
1.	Login or Register: Users will either log in or register into the app.
2.	Home Page: Once logged in, users can make new reservations and view existing ones.
3.	Menubar: A side menu allows users to navigate to different pages including Settings, Profile, and Logout.
4.	Settings Page: Users can delete their account.
5.	Profile Page: Users can update their username.
________________________________________
Server Side
APIs
•	userRoute, userController, userModel: Handles user creation, updating, reading, and deletion. (“reservation/delete”)
•	reservationRoute, reservationController, reservationModel: Manages table reservations including creating, reading, updating, and deleting reservations.
•	(“/reservation” ,reserve)
•	authRoute, authController: Handles user authentication for login and signup.

