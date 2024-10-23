
# Wild Oasis - Hotel Booking Management System

**Wild Oasis** is a comprehensive hotel room booking management system that allows staff to book cabins, manage booking, and view data analytics. The platform features secure authentication, data visualization, and management tools for bookings and cabin details. Authorized users can also manage staff credentials and access a dashboard with insights on occupancy and sales trends.

## Features

- **User Authentication**: Secure login system where authorized users can create user accounts for staff with generated user IDs and passwords.
- **Dashboard**: View key hotel metrics including:
  - Number of check-ins
  - Total bookings
  - Sales revenue
  - Visual data representation using charts
- **Booking Management**:
  - View all bookings with filtering options for checked-in, checked-out, unconfirmed bookings.
  - Sort bookings by date.
  - View detailed booking information and delete bookings.
  - Change state to checked-in check-out of uncofirmed booking
- **Cabin Management**:
  - Add new cabins and edit details of existing cabins.
  - View all thee cabins
- **Data Visualization**: Display occupancy and sales trends using pie charts and graphs.

## Tech Stack

- **Frontend**: React.js, Styled components
- **State Management**: Redux Toolkit
- **Authentication**: Supabase
- **Data Visualization**: Charts.js
- **Deployment**: Ntlify


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ankita7238/wild-oasis.git
   cd wild-oasis
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```
   
3. Start the development server:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## Usage

1. **Login**: Authorized users can log in using their credentials.
2. **Manage Staff**: Admins can create user accounts for staff members by generating a user ID and password.
3. **View Dashboard**: Track check-ins, bookings, and sales revenue through charts and cards.
4. **Manage Bookings**: View, filter, and sort bookings. Delete bookings or view detailed information for each booking.
5. **Manage Cabins**: Add, edit, and view cabin details through the Cabin Management section.

## Screenshots

### Dashboard
![image](https://github.com/user-attachments/assets/181af722-ae01-4e7f-83ba-c141a08845f1)

### Booking Management
![image](https://github.com/user-attachments/assets/4fc903d5-911e-4804-8041-5c47376bc0f7)
![image](https://github.com/user-attachments/assets/43f46cb3-9741-486b-97bd-fa6f02737277)


### Cabin Management
![image](https://github.com/user-attachments/assets/6268e999-b4cd-413d-9a11-3b9d7eda58fe)
![image](https://github.com/user-attachments/assets/7363ef09-c96d-467b-b3ec-4ef0be9ac092)

### Create User
![image](https://github.com/user-attachments/assets/b4179abb-3226-4eb8-a2fa-83c0b15db1cf)

### Login
![image](https://github.com/user-attachments/assets/3c5e9fcd-705d-4efb-8b90-af33c29a5e9d)
