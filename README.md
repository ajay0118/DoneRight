# 🚀 Ajey's Enhanced Todo App

A modern, full-stack Todo application built with React.js, Node.js, and MongoDB. Features a beautiful responsive design, dark/light theme toggle, advanced filtering, and comprehensive task management capabilities.

## ✨ Features

### 🎯 Core Functionality
- **CRUD Operations**: Create, Read, Update, Delete todos
- **Task Completion**: Toggle task completion status
- **Real-time Updates**: Instant UI updates with backend sync

### 🎨 Enhanced UI/UX
- **Dark/Light Theme**: Toggle between themes with localStorage persistence
- **Responsive Design**: Mobile-first approach, works on all devices
- **Smooth Animations**: Hover effects and transitions
- **Modern Design**: Clean, professional interface

### 🏷️ Advanced Task Management
- **Priority Levels**: High, Medium, Low priority with color coding
- **Categories**: Personal, Work, Study, Health, Shopping
- **Due Dates**: Set deadlines with overdue highlighting
- **Search & Filter**: Advanced filtering by multiple criteria

### 📊 Analytics & Organization
- **Task Statistics**: Total, pending, completed counts
- **Progress Tracking**: Visual progress indicators
- **Smart Sorting**: Sort by priority, due date, or creation date
- **Advanced Search**: Search through task descriptions

## 🛠️ Tech Stack

### Frontend
- **React.js 19** - Modern UI library
- **CSS3** - Custom styling with CSS variables
- **Responsive Design** - Mobile-first approach

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM

### Development Tools
- **Nodemon** - Auto-restart server
- **Create React App** - React development setup
- **Git** - Version control

## 📁 Project Structure

```
todo-app/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Header.js
│   │   │   ├── AddTodo.js
│   │   │   ├── TodoItem.js
│   │   │   ├── TodoList.js
│   │   │   ├── EmptyState.js
│   │   │   └── Notification.js
│   │   ├── App.js         # Main app component
│   │   ├── App.css        # Styles
│   │   └── index.js
│   └── package.json
├── server/                 # Node.js backend
│   ├── models/
│   │   └── Todo.js        # MongoDB schema
│   ├── routes/
│   │   └── todos.js       # API routes
│   ├── server.js          # Main server file
│   └── package.json
├── .gitignore             # Git ignore rules
├── README.md              # Project documentation
└── package.json           # Root package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB installed and running
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-github-repo-url>
   cd todo-app
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**
   ```bash
   cd ../server
   # Create .env file with:
   PORT=5500
   MONGODB_URI=mongodb://localhost:27017/todo-app
   ```

5. **Start MongoDB service**
   ```bash
   # On macOS with Homebrew:
   brew services start mongodb-community
   ```

6. **Run the application**

   **Terminal 1 - Backend:**
   ```bash
   cd server
   npm run dev
   ```

   **Terminal 2 - Frontend:**
   ```bash
   cd client
   npm start
   ```

7. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5500

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get all todos |
| POST | `/api/todos` | Create new todo |
| PUT | `/api/todos/:id` | Toggle todo completion |
| DELETE | `/api/todos/:id` | Delete todo |

### Todo Object Structure
```json
{
  "_id": "string",
  "text": "string",
  "completed": "boolean",
  "priority": "low|medium|high",
  "category": "personal|work|study|health|shopping",
  "dueDate": "Date|null",
  "createdAt": "Date"
}
```

## 🎨 Features in Detail

### Theme System
- Toggle between light and dark themes
- Theme preference saved in localStorage
- Smooth transitions between themes

### Task Organization
- **Priority**: Visual indicators with color coding
- **Categories**: Organized task grouping
- **Due Dates**: Deadline management with overdue alerts

### Search & Filtering
- **Text Search**: Search through task descriptions
- **Category Filter**: Filter by task category
- **Priority Filter**: Filter by priority level
- **Status Filter**: Show pending or completed tasks
- **Sorting**: Sort by creation date, priority, or due date

### Responsive Design
- Mobile-first approach
- Touch-friendly interface
- Adaptive layouts for all screen sizes
- Optimized for mobile, tablet, and desktop

## 🚀 Deployment

### Frontend (React)
```bash
cd client
npm run build
# Deploy the build folder to your hosting service
```

### Backend (Node.js)
```bash
cd server
npm start
# Use PM2 or similar for production
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built during undergraduate studies
- Enhanced with modern web technologies
- Designed for learning full-stack development
- Focus on responsive design and user experience

## 📞 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact: [Your Contact Information]

---

**Built with ❤️ by Ajey | Full-Stack Developer** 