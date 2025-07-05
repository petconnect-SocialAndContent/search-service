require('dotenv').config();
const express = require('express');
const searchRoutes = require('./routes/search');
const app = express();

app.use(express.json());

app.use('/api/v1/search', searchRoutes);

const PORT = process.env.PORT || 3025;
app.listen(PORT, () => {
  console.log(`🔍 Search Service running on port ${PORT}`);
});
