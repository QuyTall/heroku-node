const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>My Node.js App</title>
        <style>
            body { 
                font-family: Arial, sans-serif; 
                text-align: center; 
                padding: 50px; 
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
            }
            .container {
                background: rgba(255,255,255,0.1);
                padding: 30px;
                border-radius: 10px;
                backdrop-filter: blur(10px);
                max-width: 600px;
                margin: 0 auto;
            }
            h1 { font-size: 2.5em; margin-bottom: 20px; }
            p { font-size: 1.2em; margin: 10px 0; }
            .deploy-info {
                background: rgba(0,0,0,0.2);
                padding: 15px;
                border-radius: 8px;
                margin-top: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 Deploy Thành Công!</h1>
            <p>Ứng dụng Node.js của <strong>QuyTall</strong></p>
            <p>Đã chạy thành công trên Render/Heroku</p>
            
            <div class="deploy-info">
                <p><strong>Port:</strong> ${PORT}</p>
                <p><strong>Thời gian:</strong> ${new Date().toLocaleString('vi-VN')}</p>
            </div>
            
            <div style="margin-top: 30px;">
                <a href="/api" style="color: #fff; background: rgba(255,255,255,0.2); padding: 10px 20px; border-radius: 5px; text-decoration: none;">Kiểm tra API</a>
            </div>
        </div>
    </body>
    </html>
  `);
});

// Route API
app.get('/api', (req, res) => {
  res.json({ 
    message: 'Chào mừng đến với API!',
    owner: 'QuyTall',
    timestamp: new Date().toISOString(),
    status: 'success',
    repository: 'https://github.com/QuyTall/heroku-node'
  });
});

// Khởi chạy server
app.listen(PORT, () => {
  console.log('✅ Server đang chạy trên port ' + PORT);
  console.log('📱 Truy cập: http://localhost:' + PORT);
});