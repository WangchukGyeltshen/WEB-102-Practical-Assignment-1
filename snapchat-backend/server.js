const { app, attachSocket } = require('./src/app');
const http = require('http');
const PORT = process.env.PORT || 3001;

const server = http.createServer(app);
attachSocket(server);

server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));