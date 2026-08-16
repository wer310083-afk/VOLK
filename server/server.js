const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Sample data
const lessons = [
  {
    id: '1',
    title: 'Основы чтения Корана',
    description: 'Введение в буквы и звуки',
    level: 'beginner',
    duration: 60
  },
  {
    id: '2',
    title: 'Таджвид',
    description: 'Правила правильного чтения Корана',
    level: 'intermediate',
    duration: 90
  },
  {
    id: '3',
    title: 'Продвинутое чтение',
    description: 'Совершенствование навыков чтения',
    level: 'advanced',
    duration: 120
  }
];

const sessions = [
  {
    id: '1',
    teacher: 'Ахмад',
    date: '2026-08-15T10:00:00Z',
    duration: 60,
    available: true
  },
  {
    id: '2',
    teacher: 'Фатима',
    date: '2026-08-15T15:00:00Z',
    duration: 60,
    available: true
  },
  {
    id: '3',
    teacher: 'Махмуд',
    date: '2026-08-16T09:00:00Z',
    duration: 90,
    available: false
  }
];

// API Routes

// GET /api/lessons - Get all lessons
app.get('/api/lessons', (req, res) => {
  res.json(lessons);
});

// GET /api/lessons/:id - Get lesson by ID
app.get('/api/lessons/:id', (req, res) => {
  const lesson = lessons.find(l => l.id === req.params.id);
  if (lesson) {
    res.json(lesson);
  } else {
    res.status(404).json({ error: 'Lesson not found' });
  }
});

// GET /api/schedule - Get all sessions
app.get('/api/schedule', (req, res) => {
  res.json(sessions);
});

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Serve static files (landing page)
app.use(express.static('.'));

// Handle favicon request (prevent 404 errors)
app.get('/favicon.ico', (req, res) => {
  res.status(204).send();
});

// Serve index.html for root path
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Catch-all 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
  console.log(`API endpoints available at http://localhost:${PORT}/api/`);
});
