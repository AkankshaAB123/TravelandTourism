require('dotenv').config();
const mongoose = require('mongoose');

async function testConnection() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connection successful!');
    console.log(`📊 Database name: ${mongoose.connection.name}`);
    console.log(`🖥️ Host: ${mongoose.connection.host}`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    process.exit(1);
  }
}

testConnection();