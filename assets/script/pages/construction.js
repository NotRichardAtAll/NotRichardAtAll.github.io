window.addEventListener('DOMContentLoaded', () => {
    // 显示本地时间和UTC偏移
    const now = new Date();
    document.getElementById('local-time').textContent = now.toLocaleString();
    const offset = -now.getTimezoneOffset() / 60;
    document.getElementById('utc-offset').textContent = (offset >= 0 ? '+' : '') + offset;
  
    // 获取最新 token（可替换为 API 获取）
    fetch('/tokens/latest.json')
      .then(res => res.json())
      .then(data => {
        const input = document.getElementById('token-input');
        input.value = data.token || '';
      })
      .catch(err => console.warn('Token fetch failed', err));
  });
  
  function toggleTokenInput() {
    document.getElementById('token-section').classList.toggle('hidden');
  }
  
  function fetchReadme() {
    const token = document.getElementById('token-input').value.trim();
    if (!token) return;
  
    fetch(`/features/${token}/README.md`)
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.text();
      })
      .then(text => {
        const box = document.getElementById('readme-box');
        box.textContent = text;
        box.classList.remove('hidden');
      })
      .catch(err => {
        const box = document.getElementById('readme-box');
        box.textContent = `❌ README not found for token: ${token}`;
        box.classList.remove('hidden');
      });
  }
  