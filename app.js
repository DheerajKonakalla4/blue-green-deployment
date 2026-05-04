const express = require('express');
const app = express();

const COLOR = process.env.COLOR || "blue";

app.get('/', (req, res) => {
  res.send(`
    <html>
    <head>
      <title>Blue-Green Deployment</title>
      <style>
        body {
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #667eea, #764ba2);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .card {
          background: white;
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          text-align: center;
        }
        .badge {
          padding: 10px 20px;
          border-radius: 25px;
          color: white;
          font-weight: bold;
          font-size: 18px;
        }
        .blue { background: #007bff; }
        .green { background: #28a745; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🚀 Blue-Green Deployment</h1>
        <p>Environment:</p>
        <div class="badge ${COLOR}">${COLOR.toUpperCase()}</div>
        <p style="margin-top:20px;">Running on Kubernetes</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(4000, () => console.log("Running on port 4000"));