const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>QuyTall NodeJS App</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
            
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Inter', sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                color: #333;
            }
            
            .glass-card {
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(20px);
                border-radius: 20px;
                padding: 40px;
                box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
                border: 1px solid rgba(255, 255, 255, 0.3);
                max-width: 500px;
                width: 100%;
                text-align: center;
                position: relative;
                overflow: hidden;
            }
            
            .glass-card::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
                transform: rotate(45deg);
                animation: shine 3s infinite;
            }
            
            @keyframes shine {
                0% { transform: rotate(45deg) translateX(-100%); }
                100% { transform: rotate(45deg) translateX(100%); }
            }
            
            .success-icon {
                font-size: 4rem;
                margin-bottom: 20px;
                animation: bounce 2s infinite;
            }
            
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            
            h1 {
                font-size: 2.2rem;
                font-weight: 700;
                background: linear-gradient(135deg, #667eea, #764ba2);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                margin-bottom: 15px;
            }
            
            .subtitle {
                font-size: 1.1rem;
                color: #666;
                margin-bottom: 10px;
                font-weight: 400;
            }
            
            .highlight {
                color: #667eea;
                font-weight: 600;
            }
            
            .info-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 15px;
                margin: 25px 0;
            }
            
            .info-item {
                background: rgba(102, 126, 234, 0.1);
                padding: 15px;
                border-radius: 12px;
                border-left: 4px solid #667eea;
            }
            
            .info-label {
                font-size: 0.85rem;
                color: #666;
                margin-bottom: 5px;
            }
            
            .info-value {
                font-size: 1rem;
                font-weight: 600;
                color: #333;
            }
            
            .btn-group {
                display: flex;
                gap: 15px;
                justify-content: center;
                margin-top: 25px;
            }
            
            .btn {
                padding: 12px 25px;
                border-radius: 50px;
                text-decoration: none;
                font-weight: 600;
                transition: all 0.3s ease;
                border: none;
                cursor: pointer;
                font-size: 0.95rem;
            }
            
            .btn-primary {
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
            }
            
            .btn-secondary {
                background: rgba(102, 126, 234, 0.1);
                color: #667eea;
                border: 2px solid #667eea;
            }
            
            .btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(102, 126, 234, 0.6);
            }
            
            .tech-stack {
                display: flex;
                justify-content: center;
                gap: 10px;
                margin-top: 20px;
                flex-wrap: wrap;
            }
            
            .tech-tag {
                background: rgba(102, 126, 234, 0.1);
                color: #667eea;
                padding: 5px 12px;
                border-radius: 20px;
                font-size: 0.8rem;
                font-weight: 500;
            }
            
            .floating {
                animation: float 6s ease-in-out infinite;
            }
            
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
        </style>
    </head>
    <body>
        <div class="glass-card floating">
            <div class="success-icon">🚀</div>
            
            <h1>Triển Khai Thành Công</h1>
            
            <p class="subtitle">Ứng dụng Node.js của <span class="highlight">QuyTall</span></p>
            <p class="subtitle">Đã được triển khai thành công trên nền tảng Cloud</p>
            
            <div class="info-grid">
                <div class="info-item">
                    <div class="info-label">PORT</div>
                    <div class="info-value">${PORT}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">TRẠNG THÁI</div>
                    <div class="info-value" style="color: #10b981;">● ONLINE</div>
                </div>
                <div class="info-item">
                    <div class="info-label">THỜI GIAN</div>
                    <div class="info-value">${new Date().toLocaleTimeString('vi-VN')}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">NGÀY</div>
                    <div class="info-value">${new Date().toLocaleDateString('vi-VN')}</div>
                </div>
            </div>
            
            <div class="btn-group">
                <a href="/api" class="btn btn-primary">🧪 Kiểm Tra API</a>
                <a href="https://github.com/QuyTall/heroku-node" class="btn btn-secondary">📁 Source Code</a>
            </div>
            
            <div class="tech-stack">
                <span class="tech-tag">Node.js</span>
                <span class="tech-tag">Express.js</span>
                <span class="tech-tag">JavaScript</span>
                <span class="tech-tag">Cloud Deployment</span>
                <span class="tech-tag">REST API</span>
            </div>
        </div>
        
        <script>
            // Update time every second
            function updateTime() {
                const timeElement = document.querySelector('.info-item:nth-child(3) .info-value');
                const dateElement = document.querySelector('.info-item:nth-child(4) .info-value');
                const now = new Date();
                
                timeElement.textContent = now.toLocaleTimeString('vi-VN');
                dateElement.textContent = now.toLocaleDateString('vi-VN');
            }
            
            setInterval(updateTime, 1000);
            
            // Add click animation
            document.querySelectorAll('.btn').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 150);
                });
            });
        </script>
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
    repository: 'https://github.com/QuyTall/heroku-node',
    tech_stack: ['Node.js', 'Express.js', 'JavaScript', 'Cloud Deployment'],
    endpoints: [
      {
        path: '/',
        method: 'GET',
        description: 'Trang chính ứng dụng'
      },
      {
        path: '/api',
        method: 'GET',
        description: 'API information'
      }
    ]
  });
});

// Khởi chạy server
app.listen(PORT, () => {
  console.log('✅ Server đang chạy trên port ' + PORT);
  console.log('📱 Truy cập: http://localhost:' + PORT);
  console.log('🚀 Ứng dụng đã sẵn sàng!');
});