const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// 配置数据库连接（替换为你的密码）
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // 安装MySQL时设置的密码
  database: 'herb_db'
});

// 测试数据库连接
db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected!');
});

// 获取所有药材列表（用于List页面）
app.get('/api/herbs', (req, res) => {
  const sql = 'SELECT id, name, icon FROM herbs';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// 根据ID获取药材详情（用于详情页）
app.get('/api/herbs/:id', (req, res) => {
  const sql = 'SELECT * FROM herbs WHERE id = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
});

// 启动服务器
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});