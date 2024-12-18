# RBAC System (Role-Based Access Control)

This project implements a Role-Based Access Control (RBAC) system, which allows you to manage user access and permissions based on their roles. The system ensures that users only have access to the resources they are permitted to, improving security and efficiency in managing users.

## Features

- User Authentication: Login with email and password.
- Role-Based Access: Differentiates access based on roles (Admin, Super User, User).
- Permissions Control: Admin users can manage other users' roles and access.

## Available Roles

- **Admin**: Has full access to all resources and user management.
- **Super User**: Has elevated access, but not full control over users.
- **User**: Has basic access to resources, no management privileges.

## Credentials

The following credentials are pre-configured for testing purposes:

1. **Admin User**:
   - **Email**: admin@gmail.com
   - **Password**: admin@123
   - **Role**: Admin

2. **Super User**:
   - **Email**: superuser@gmail.com
   - **Password**: superuser@123
   - **Role**: Super User

3. **Regular User**:
   - **Email**: user@gmail.com
   - **Password**: user@123
   - **Role**: User

## Installation

Follow these steps to run the RBAC system locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ankitsharma495/role-based-access-control.git
   cd role-based-access-control

 
