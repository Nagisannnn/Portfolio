window.addEventListener('DOMContentLoaded', () => {
  const categories = [
    { id: "logiciel", label: "Développement Logiciel", color: "#b4e0b4", count: 3 },
    { id: "web", label: "Développement Web", color: "#2e8b57", count: 4 },
    { id: "mobile", label: "Développement Mobile", color: "#e6ffe6", count: 1 },
    { id: "bdd", label: "Bases de Données", color: "#8fd19e", count: 4 },
    { id: "infra", label: "Infrastructure & DevOps", color: "#4e9c6c", count: 4 },
    { id: "reseau", label: "Réseaux & Sécurité", color: "#225c36", count: 2 },
    { id: "qualite", label: "Qualité & Ergonomie", color: "#d0f5c7", count: 3 },
    { id: "modelisation", label: "Modélisation", color: "#7bbf7f", count: 2 },
    { id: "gestion", label: "Gestion de projet", color: "#b4e0b4", count: 3 }
  ];

  const total = categories.reduce((sum, cat) => sum + cat.count, 0);
  const canvas = document.getElementById('camembert');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 180;
  let startAngle = -0.5 * Math.PI;
  const angles = [];

  // Dessin du camembert
  categories.forEach(cat => {
    const sliceAngle = (cat.count / total) * 2 * Math.PI;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
    ctx.closePath();
    ctx.fillStyle = cat.color;
    ctx.fill();
    angles.push({ start: startAngle, end: startAngle + sliceAngle, id: cat.id });
    startAngle += sliceAngle;
  });

  // Légende externe
  const legend = document.getElementById('camembert-legend');
  if (legend) {
    legend.innerHTML = categories.map(cat =>
      `<div style="display:flex;align-items:center;margin-bottom:10px;cursor:pointer;" onclick="document.getElementById('${cat.id}').scrollIntoView({behavior:'smooth'})">
        <span style="display:inline-block;width:20px;height:20px;background:${cat.color};border-radius:4px;margin-right:10px;"></span>
        <span style="color:#225c36;font-size:1.1em;">${cat.label}</span>
      </div>`
    ).join('');
  }

  // Gestion du clic sur le camembert
  canvas.addEventListener('click', function(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left - centerX;
    const y = e.clientY - rect.top - centerY;
    const angle = Math.atan2(y, x);
    let a = angle < -0.5 * Math.PI ? angle + 2 * Math.PI : angle;
    for (let i = 0; i < angles.length; i++) {
      if (a >= angles[i].start && a < angles[i].end) {
        document.getElementById(angles[i].id).scrollIntoView({ behavior: "smooth" });
        break;
      }
    }
  });
});