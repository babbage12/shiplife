const markerAnimations = new Map();

// Color utility functions
function lightenColor(hex, percent) {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min(255, (num >> 16) + amt);
    const G = Math.min(255, ((num >> 8) & 0x00FF) + amt);
    const B = Math.min(255, (num & 0x0000FF) + amt);
    return `rgb(${R}, ${G}, ${B})`;
}

function darkenColor(hex, percent) {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max(0, (num >> 16) - amt);
    const G = Math.max(0, ((num >> 8) & 0x00FF) - amt);
    const B = Math.max(0, (num & 0x0000FF) - amt);
    return `rgb(${R}, ${G}, ${B})`;
}

// Draw iris aperture
function drawIrisAperture(ctx, cx, cy, radius, closedAmount) {
    if (closedAmount <= 0) return;
    
    const blades = 8;
    const maxAngle = Math.PI / blades;
    
    ctx.save();
    ctx.translate(cx, cy);
    
    for (let i = 0; i < blades; i++) {
        const angle = (i / blades) * Math.PI * 2;
        
        ctx.save();
        ctx.rotate(angle);
        
        const bladeOpenAngle = maxAngle * (1 - closedAmount * 0.95);
        const bladeLength = radius * 1.3;
        
        // Smoky glass blade
        const gradient = ctx.createLinearGradient(0, 0, bladeLength, 0);
        gradient.addColorStop(0, 'rgba(40, 55, 75, 0.95)');
        gradient.addColorStop(0.5, 'rgba(30, 45, 65, 0.9)');
        gradient.addColorStop(1, 'rgba(20, 35, 55, 0.85)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, bladeLength, -bladeOpenAngle, bladeOpenAngle);
        ctx.closePath();
        ctx.fill();
        
        // Blade edge highlight
        ctx.strokeStyle = 'rgba(100, 130, 170, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(bladeOpenAngle) * bladeLength, Math.sin(bladeOpenAngle) * bladeLength);
        ctx.stroke();
        
        ctx.restore();
    }
    
    // Center overlay when mostly closed
    if (closedAmount > 0.3) {
        const centerGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, radius * (1 - closedAmount + 0.3));
        centerGrad.addColorStop(0, 'rgba(35, 50, 70, 0.9)');
        centerGrad.addColorStop(1, 'rgba(35, 50, 70, 0)');
        ctx.fillStyle = centerGrad;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.fill();
    }
    
    ctx.restore();
}

// Draw brass porthole frame
function drawPortholeFrame(ctx, cx, cy, radius) {
    // Minimal elegant brass ring
    const brassGrad = ctx.createLinearGradient(cx - radius, cy - radius, cx + radius, cy + radius);
    brassGrad.addColorStop(0, '#e8c9a0');
    brassGrad.addColorStop(0.3, '#d4af37');
    brassGrad.addColorStop(0.7, '#b8956a');
    brassGrad.addColorStop(1, '#8a6a3a');
    
    ctx.strokeStyle = brassGrad;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.stroke();
    
    // Subtle highlight
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cx, cy, radius - 1, -Math.PI * 0.7, -Math.PI * 0.2);
    ctx.stroke();
}

// Draw brass base
function drawPortholeBase(ctx, cx, baseY, isDoor) {
    const baseWidth = isDoor ? 50 : 44;
    
    // Brass curved base
    const brassGrad = ctx.createLinearGradient(0, baseY, 0, baseY + 16);
    brassGrad.addColorStop(0, '#e8c9a0');
    brassGrad.addColorStop(0.2, '#d4a574');
    brassGrad.addColorStop(0.6, '#b8956a');
    brassGrad.addColorStop(1, '#6a4a2a');
    
    ctx.fillStyle = brassGrad;
    ctx.beginPath();
    ctx.moveTo(cx - baseWidth / 2, baseY);
    ctx.quadraticCurveTo(cx, baseY + 18, cx + baseWidth / 2, baseY);
    ctx.lineTo(cx + baseWidth / 2 - 5, baseY + 12);
    ctx.quadraticCurveTo(cx, baseY + 22, cx - baseWidth / 2 + 5, baseY + 12);
    ctx.closePath();
    ctx.fill();
    
    // Highlight
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.beginPath();
    ctx.ellipse(cx, baseY + 4, baseWidth * 0.25, 3, 0, 0, Math.PI * 2);
    ctx.fill();
}

// Draw 3D perspective door (for door locations)
function draw3DDoor(ctx, cx, cy, doorColor, openAmount) {
    if (openAmount <= 0) return;
    
    ctx.save();
    ctx.globalAlpha = openAmount;
    ctx.translate(cx, cy);
    
    // Door shadow (offset for 3D effect)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.beginPath();
    ctx.moveTo(-5, -20);
    ctx.lineTo(16, -18);
    ctx.lineTo(16, 20);
    ctx.lineTo(-5, 22);
    ctx.closePath();
    ctx.fill();
    
    // Door face (angled)
    const doorGrad = ctx.createLinearGradient(-12, 0, 10, 0);
    doorGrad.addColorStop(0, lightenColor(doorColor, 20));
    doorGrad.addColorStop(0.5, doorColor);
    doorGrad.addColorStop(1, darkenColor(doorColor, 30));
    ctx.fillStyle = doorGrad;
    ctx.beginPath();
    ctx.moveTo(-12, -20);
    ctx.lineTo(10, -18);
    ctx.lineTo(10, 20);
    ctx.lineTo(-12, 22);
    ctx.closePath();
    ctx.fill();
    
    // Door edge (depth)
    ctx.fillStyle = darkenColor(doorColor, 50);
    ctx.beginPath();
    ctx.moveTo(10, -18);
    ctx.lineTo(16, -16);
    ctx.lineTo(16, 18);
    ctx.lineTo(10, 20);
    ctx.closePath();
    ctx.fill();
    
    // Panel insets - top
    ctx.fillStyle = darkenColor(doorColor, 20);
    ctx.beginPath();
    ctx.moveTo(-8, -16);
    ctx.lineTo(6, -14);
    ctx.lineTo(6, -4);
    ctx.lineTo(-8, -6);
    ctx.closePath();
    ctx.fill();
    
    // Panel insets - bottom
    ctx.beginPath();
    ctx.moveTo(-8, 2);
    ctx.lineTo(6, 4);
    ctx.lineTo(6, 16);
    ctx.lineTo(-8, 18);
    ctx.closePath();
    ctx.fill();
    
    // Panel highlights
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(-8, -16);
    ctx.lineTo(6, -14);
    ctx.moveTo(-8, 2);
    ctx.lineTo(6, 4);
    ctx.stroke();
    
    // Frame
    ctx.strokeStyle = '#d4a574';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-14, -22);
    ctx.lineTo(12, -20);
    ctx.lineTo(12, 22);
    ctx.lineTo(-14, 24);
    ctx.closePath();
    ctx.stroke();
    
    // Frame highlight
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(-14, -22);
    ctx.lineTo(12, -20);
    ctx.stroke();
    
    // Glowing knob
    ctx.shadowColor = '#ffd700';
    ctx.shadowBlur = 8;
    ctx.fillStyle = '#ffd700';
    ctx.beginPath();
    ctx.arc(6, 2, 3, 0, Math.PI * 2);
    ctx.fill();
    
    // Knob highlight
    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.beginPath();
    ctx.arc(5, 1, 1.2, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
}

// Draw regular icon content (emoji)
function drawRegularIcon(ctx, cx, cy, config, openAmount) {
    if (openAmount <= 0) return;
    
    ctx.save();
    ctx.globalAlpha = openAmount;
    
    // Use the same icon rendering as the sidebar
    const color = config.color || '#d4a574';
    const accent = config.accent || '#8b6914';
    const symbol = config.symbol || 'default';
    
    // Scale icons to 150% for better visibility
    ctx.translate(cx, cy);
    ctx.scale(1.5, 1.5);
    ctx.translate(-cx, -cy);
    
    renderIconSymbol(ctx, cx, cy, symbol, color, accent);
    
    ctx.restore();
}

// Shared icon rendering function (used by both globe and sidebar)
function renderIconSymbol(ctx, cx, cy, symbol, color, accent) {
    switch(symbol) {
        case 'steel-door':
            // Heavy steel door with padlock
            ctx.fillStyle = '#2d3748';
            ctx.fillRect(cx - 14, cy - 18, 28, 36);
            ctx.fillStyle = color;
            ctx.fillRect(cx - 11, cy - 15, 22, 30);
            ctx.strokeStyle = '#2d3748';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(cx - 11, cy - 5);
            ctx.lineTo(cx + 11, cy - 5);
            ctx.moveTo(cx - 11, cy + 5);
            ctx.lineTo(cx + 11, cy + 5);
            ctx.stroke();
            ctx.fillStyle = accent;
            ctx.fillRect(cx - 5, cy - 2, 10, 10);
            ctx.strokeStyle = accent;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(cx, cy - 4, 4, Math.PI, 0);
            ctx.stroke();
            ctx.fillStyle = '#1a1a1a';
            ctx.beginPath();
            ctx.arc(cx, cy + 3, 2, 0, Math.PI * 2);
            ctx.fill();
            break;
            
        case 'wood-door':
            ctx.fillStyle = color;
            ctx.fillRect(cx - 12, cy - 16, 24, 32);
            ctx.strokeStyle = accent;
            ctx.lineWidth = 2;
            ctx.strokeRect(cx - 10, cy - 14, 20, 28);
            ctx.beginPath();
            ctx.arc(cx + 6, cy, 3, 0, Math.PI * 2);
            ctx.stroke();
            break;
            
        case 'gold-door':
            const goldGrad = ctx.createLinearGradient(cx - 12, 0, cx + 12, 0);
            goldGrad.addColorStop(0, color);
            goldGrad.addColorStop(0.5, accent);
            goldGrad.addColorStop(1, color);
            ctx.fillStyle = goldGrad;
            ctx.fillRect(cx - 12, cy - 16, 24, 32);
            ctx.strokeStyle = accent;
            ctx.lineWidth = 2;
            ctx.strokeRect(cx - 12, cy - 16, 24, 32);
            break;
            
        case 'crown':
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(cx - 14, cy + 8);
            ctx.lineTo(cx - 10, cy - 8);
            ctx.lineTo(cx - 5, cy);
            ctx.lineTo(cx, cy - 12);
            ctx.lineTo(cx + 5, cy);
            ctx.lineTo(cx + 10, cy - 8);
            ctx.lineTo(cx + 14, cy + 8);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = accent;
            ctx.beginPath();
            ctx.arc(cx, cy - 12, 3, 0, Math.PI * 2);
            ctx.fill();
            break;
            
        case 'sunrise':
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(cx, cy + 5, 12, Math.PI, 0);
            ctx.fill();
            ctx.strokeStyle = accent;
            ctx.lineWidth = 2;
            for (let i = 0; i < 7; i++) {
                const angle = Math.PI + (i / 6) * Math.PI;
                ctx.beginPath();
                ctx.moveTo(cx + Math.cos(angle) * 14, cy + 5 + Math.sin(angle) * 14);
                ctx.lineTo(cx + Math.cos(angle) * 20, cy + 5 + Math.sin(angle) * 20);
                ctx.stroke();
            }
            break;
            
        case 'fireworks':
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            for (let i = 0; i < 8; i++) {
                const angle = (i / 8) * Math.PI * 2;
                ctx.beginPath();
                ctx.moveTo(cx + Math.cos(angle) * 4, cy + Math.sin(angle) * 4);
                ctx.lineTo(cx + Math.cos(angle) * 14, cy + Math.sin(angle) * 14);
                ctx.stroke();
            }
            ctx.fillStyle = accent;
            ctx.beginPath();
            ctx.arc(cx, cy, 4, 0, Math.PI * 2);
            ctx.fill();
            break;
            
        case 'star':
            ctx.fillStyle = color;
            ctx.beginPath();
            for (let i = 0; i < 5; i++) {
                const outerAngle = (i / 5) * Math.PI * 2 - Math.PI / 2;
                const innerAngle = ((i + 0.5) / 5) * Math.PI * 2 - Math.PI / 2;
                if (i === 0) ctx.moveTo(cx + Math.cos(outerAngle) * 14, cy + Math.sin(outerAngle) * 14);
                else ctx.lineTo(cx + Math.cos(outerAngle) * 14, cy + Math.sin(outerAngle) * 14);
                ctx.lineTo(cx + Math.cos(innerAngle) * 6, cy + Math.sin(innerAngle) * 6);
            }
            ctx.closePath();
            ctx.fill();
            break;
            
        case 'car':
            ctx.fillStyle = color;
            ctx.fillRect(cx - 14, cy - 4, 28, 10);
            ctx.fillRect(cx - 8, cy - 10, 16, 8);
            ctx.fillStyle = accent;
            ctx.beginPath();
            ctx.arc(cx - 8, cy + 8, 4, 0, Math.PI * 2);
            ctx.arc(cx + 8, cy + 8, 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#a0d8ef';
            ctx.fillRect(cx - 6, cy - 8, 12, 5);
            break;
            
        case 'fortress':
            ctx.fillStyle = color;
            ctx.fillRect(cx - 14, cy - 4, 28, 18);
            ctx.fillRect(cx - 16, cy - 10, 8, 10);
            ctx.fillRect(cx + 8, cy - 10, 8, 10);
            ctx.fillRect(cx - 4, cy - 14, 8, 14);
            ctx.fillStyle = accent;
            ctx.fillRect(cx - 3, cy + 4, 6, 10);
            break;
            
        case 'column':
        case 'arch':
            ctx.fillStyle = color;
            ctx.fillRect(cx - 12, cy - 14, 6, 28);
            ctx.fillRect(cx + 6, cy - 14, 6, 28);
            ctx.fillRect(cx - 14, cy - 16, 28, 4);
            ctx.fillRect(cx - 14, cy + 12, 28, 4);
            ctx.fillStyle = accent;
            ctx.beginPath();
            ctx.arc(cx, cy - 8, 8, Math.PI, 0);
            ctx.fill();
            break;
            
        case 'mountain':
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(cx - 18, cy + 14);
            ctx.lineTo(cx - 4, cy - 12);
            ctx.lineTo(cx + 2, cy - 4);
            ctx.lineTo(cx + 10, cy - 14);
            ctx.lineTo(cx + 18, cy + 14);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = accent;
            ctx.beginPath();
            ctx.moveTo(cx - 4, cy - 12);
            ctx.lineTo(cx - 8, cy - 4);
            ctx.lineTo(cx, cy - 6);
            ctx.lineTo(cx + 2, cy - 4);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(cx + 10, cy - 14);
            ctx.lineTo(cx + 6, cy - 6);
            ctx.lineTo(cx + 14, cy - 6);
            ctx.closePath();
            ctx.fill();
            break;
            
        case 'shark':
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(cx - 16, cy);
            ctx.quadraticCurveTo(cx, cy - 10, cx + 16, cy);
            ctx.quadraticCurveTo(cx, cy + 6, cx - 16, cy);
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(cx, cy - 6);
            ctx.lineTo(cx - 4, cy - 16);
            ctx.lineTo(cx + 4, cy - 6);
            ctx.fill();
            ctx.fillStyle = accent;
            ctx.beginPath();
            ctx.arc(cx - 8, cy - 2, 2, 0, Math.PI * 2);
            ctx.fill();
            break;
            
        case 'mango':
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.ellipse(cx, cy + 2, 12, 16, 0.2, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = accent;
            ctx.beginPath();
            ctx.ellipse(cx - 2, cy - 12, 4, 6, -0.5, 0, Math.PI * 2);
            ctx.fill();
            break;
            
        case 'palm':
            ctx.fillStyle = '#8b4513';
            ctx.fillRect(cx - 2, cy, 4, 16);
            ctx.fillStyle = accent;
            for (let i = 0; i < 5; i++) {
                const angle = -Math.PI / 2 + (i - 2) * 0.4;
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.quadraticCurveTo(
                    cx + Math.cos(angle) * 10, cy + Math.sin(angle) * 10 - 5,
                    cx + Math.cos(angle) * 16, cy + Math.sin(angle) * 16
                );
                ctx.lineWidth = 3;
                ctx.strokeStyle = accent;
                ctx.stroke();
            }
            break;
            
        case 'whale':
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(cx, cy + 10);
            ctx.quadraticCurveTo(cx - 6, cy, cx - 14, cy - 10);
            ctx.quadraticCurveTo(cx - 10, cy - 6, cx, cy - 4);
            ctx.quadraticCurveTo(cx + 10, cy - 6, cx + 14, cy - 10);
            ctx.quadraticCurveTo(cx + 6, cy, cx, cy + 10);
            ctx.fill();
            break;
            
        case 'coffee':
            ctx.fillStyle = color;
            ctx.fillRect(cx - 8, cy - 6, 16, 16);
            ctx.strokeStyle = accent;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(cx + 10, cy + 2, 6, -Math.PI / 2, Math.PI / 2);
            ctx.stroke();
            ctx.fillStyle = accent;
            ctx.beginPath();
            ctx.moveTo(cx - 4, cy - 10);
            ctx.quadraticCurveTo(cx - 6, cy - 14, cx - 4, cy - 16);
            ctx.quadraticCurveTo(cx, cy - 12, cx, cy - 10);
            ctx.stroke();
            break;
            
        case 'sun-hot':
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(cx, cy, 10, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = accent;
            ctx.lineWidth = 3;
            for (let i = 0; i < 8; i++) {
                const angle = (i / 8) * Math.PI * 2;
                ctx.beginPath();
                ctx.moveTo(cx + Math.cos(angle) * 12, cy + Math.sin(angle) * 12);
                ctx.lineTo(cx + Math.cos(angle) * 16, cy + Math.sin(angle) * 16);
                ctx.stroke();
            }
            break;
            
        case 'compass':
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(cx, cy, 13, 0, Math.PI * 2);
            ctx.stroke();
            ctx.fillStyle = accent;
            ctx.beginPath();
            ctx.moveTo(cx, cy - 10);
            ctx.lineTo(cx + 3, cy);
            ctx.lineTo(cx, cy + 10);
            ctx.lineTo(cx - 3, cy);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(cx, cy + 10);
            ctx.lineTo(cx + 3, cy);
            ctx.lineTo(cx, cy - 2);
            ctx.lineTo(cx - 3, cy);
            ctx.closePath();
            ctx.fill();
            break;
            
        case 'penguin':
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.ellipse(cx, cy + 2, 10, 14, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#f5f0e8';
            ctx.beginPath();
            ctx.ellipse(cx, cy + 4, 6, 10, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = accent;
            ctx.beginPath();
            ctx.moveTo(cx - 2, cy - 6);
            ctx.lineTo(cx, cy - 2);
            ctx.lineTo(cx + 2, cy - 6);
            ctx.fill();
            break;
        
        case 'grave':
            // Celtic cross for Shackleton's grave
            ctx.fillStyle = color;
            // Vertical beam
            ctx.fillRect(cx - 2, cy - 12, 4, 22);
            // Horizontal beam
            ctx.fillRect(cx - 8, cy - 6, 16, 4);
            // Circle behind cross intersection
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(cx, cy - 4, 6, 0, Math.PI * 2);
            ctx.stroke();
            // Small base
            ctx.fillRect(cx - 5, cy + 8, 10, 4);
            break;
        
        case 'whalingboat':
            // Rusty old whaling boat - weathered and listing
            ctx.fillStyle = color; // rusty brown
            // Hull - slightly tilted/listing
            ctx.beginPath();
            ctx.moveTo(cx - 14, cy + 2);
            ctx.lineTo(cx - 12, cy + 10);
            ctx.lineTo(cx + 10, cy + 12);
            ctx.lineTo(cx + 14, cy + 4);
            ctx.closePath();
            ctx.fill();
            // Rust patches
            ctx.fillStyle = accent;
            ctx.beginPath();
            ctx.ellipse(cx - 4, cy + 7, 3, 2, 0.2, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.ellipse(cx + 6, cy + 6, 2, 1.5, -0.1, 0, Math.PI * 2);
            ctx.fill();
            // Broken mast - tilted
            ctx.fillStyle = '#5c4033';
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(-0.15);
            ctx.fillRect(-1, -14, 2, 16);
            ctx.restore();
            // Tattered remnant of rigging
            ctx.strokeStyle = '#4a3728';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(cx - 1, cy - 10);
            ctx.lineTo(cx + 8, cy + 2);
            ctx.stroke();
            break;
        
        case 'beer':
            // Beer mug with foam
            ctx.fillStyle = color; // amber/golden
            // Mug body
            ctx.beginPath();
            ctx.moveTo(cx - 8, cy - 6);
            ctx.lineTo(cx - 7, cy + 10);
            ctx.lineTo(cx + 7, cy + 10);
            ctx.lineTo(cx + 8, cy - 6);
            ctx.closePath();
            ctx.fill();
            // Handle
            ctx.strokeStyle = color;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(cx + 12, cy + 2, 5, -Math.PI * 0.5, Math.PI * 0.5);
            ctx.stroke();
            // Foam top
            ctx.fillStyle = accent; // white/cream foam
            ctx.beginPath();
            ctx.ellipse(cx - 4, cy - 8, 5, 4, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.ellipse(cx + 3, cy - 7, 5, 4, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.ellipse(cx, cy - 10, 4, 3, 0, 0, Math.PI * 2);
            ctx.fill();
            // Foam drip
            ctx.beginPath();
            ctx.ellipse(cx - 6, cy - 4, 2, 3, 0.2, 0, Math.PI * 2);
            ctx.fill();
            break;
            
        case 'boat':
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(cx - 14, cy + 4);
            ctx.lineTo(cx - 10, cy + 10);
            ctx.lineTo(cx + 10, cy + 10);
            ctx.lineTo(cx + 14, cy + 4);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = accent;
            ctx.fillRect(cx - 1, cy - 10, 2, 16);
            ctx.beginPath();
            ctx.moveTo(cx + 1, cy - 8);
            ctx.lineTo(cx + 12, cy);
            ctx.lineTo(cx + 1, cy + 4);
            ctx.fill();
            break;
            
        case 'wine':
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(cx - 8, cy - 10);
            ctx.quadraticCurveTo(cx - 10, cy - 2, cx, cy + 2);
            ctx.quadraticCurveTo(cx + 10, cy - 2, cx + 8, cy - 10);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(cx, cy + 2);
            ctx.lineTo(cx, cy + 12);
            ctx.moveTo(cx - 6, cy + 12);
            ctx.lineTo(cx + 6, cy + 12);
            ctx.stroke();
            ctx.fillStyle = accent;
            ctx.beginPath();
            ctx.arc(cx, cy - 4, 5, 0, Math.PI);
            ctx.fill();
            break;
            
        case 'grapes':
            ctx.fillStyle = color;
            const grapePositions = [[0,-8],[5,-4],[-5,-4],[0,0],[8,0],[-8,0],[3,6],[-3,6],[0,10]];
            grapePositions.forEach(([x, y]) => {
                ctx.beginPath();
                ctx.arc(cx + x, cy + y, 4, 0, Math.PI * 2);
                ctx.fill();
            });
            ctx.fillStyle = accent;
            ctx.fillRect(cx - 1, cy - 14, 2, 6);
            break;
            
        case 'guitar':
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.ellipse(cx, cy + 6, 10, 8, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.ellipse(cx, cy - 2, 6, 5, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = accent;
            ctx.fillRect(cx - 2, cy - 16, 4, 14);
            ctx.fillStyle = '#1a1a1a';
            ctx.beginPath();
            ctx.arc(cx, cy + 6, 3, 0, Math.PI * 2);
            ctx.fill();
            break;
        
        // === NEW UNIQUE ICONS ===
        
        case 'colosseum':
            // Roman Colosseum - arched structure
            ctx.fillStyle = color;
            ctx.fillRect(cx - 16, cy - 8, 32, 20);
            // Arches
            ctx.fillStyle = '#1a1a1a';
            for (let i = -1; i <= 1; i++) {
                ctx.beginPath();
                ctx.arc(cx + i * 10, cy + 4, 4, Math.PI, 0);
                ctx.fill();
            }
            // Top tier arches (smaller)
            for (let i = -1; i <= 1; i++) {
                ctx.beginPath();
                ctx.arc(cx + i * 10, cy - 4, 3, Math.PI, 0);
                ctx.fill();
            }
            // Curved top edge
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.ellipse(cx, cy - 8, 16, 4, 0, Math.PI, 0);
            ctx.fill();
            break;
            
        case 'library':
            // Library of Celsus - facade with columns
            ctx.fillStyle = color;
            // Base structure
            ctx.fillRect(cx - 14, cy - 6, 28, 20);
            // Triangular pediment
            ctx.beginPath();
            ctx.moveTo(cx - 14, cy - 6);
            ctx.lineTo(cx, cy - 16);
            ctx.lineTo(cx + 14, cy - 6);
            ctx.closePath();
            ctx.fill();
            // Columns
            ctx.fillStyle = accent;
            ctx.fillRect(cx - 12, cy - 4, 3, 16);
            ctx.fillRect(cx - 4, cy - 4, 3, 16);
            ctx.fillRect(cx + 1, cy - 4, 3, 16);
            ctx.fillRect(cx + 9, cy - 4, 3, 16);
            // Door
            ctx.fillStyle = '#1a1a1a';
            ctx.fillRect(cx - 3, cy + 4, 6, 10);
            break;
            
        case 'venus':
            // Venus de Milo silhouette
            ctx.fillStyle = color;
            // Head
            ctx.beginPath();
            ctx.arc(cx, cy - 10, 5, 0, Math.PI * 2);
            ctx.fill();
            // Torso (armless)
            ctx.beginPath();
            ctx.moveTo(cx - 6, cy - 4);
            ctx.quadraticCurveTo(cx - 8, cy + 2, cx - 5, cy + 10);
            ctx.lineTo(cx + 5, cy + 10);
            ctx.quadraticCurveTo(cx + 8, cy + 2, cx + 6, cy - 4);
            ctx.closePath();
            ctx.fill();
            // Draping
            ctx.strokeStyle = accent;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(cx - 4, cy + 2);
            ctx.quadraticCurveTo(cx, cy + 4, cx + 4, cy + 2);
            ctx.stroke();
            break;
            
        case 'amphitheater':
            // Greek amphitheater - semicircle with tiers
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(cx, cy + 6, 16, Math.PI, 0);
            ctx.fill();
            // Tier lines
            ctx.strokeStyle = accent;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(cx, cy + 6, 12, Math.PI, 0);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(cx, cy + 6, 8, Math.PI, 0);
            ctx.stroke();
            // Stage
            ctx.fillStyle = accent;
            ctx.fillRect(cx - 6, cy + 4, 12, 4);
            break;
            
        case 'lighthouse':
            // Lighthouse of Alexandria
            ctx.fillStyle = color;
            // Tower (tapered)
            ctx.beginPath();
            ctx.moveTo(cx - 8, cy + 14);
            ctx.lineTo(cx - 4, cy - 8);
            ctx.lineTo(cx + 4, cy - 8);
            ctx.lineTo(cx + 8, cy + 14);
            ctx.closePath();
            ctx.fill();
            // Light chamber
            ctx.fillStyle = accent;
            ctx.fillRect(cx - 5, cy - 12, 10, 6);
            // Light beam
            ctx.fillStyle = '#ffd700';
            ctx.beginPath();
            ctx.moveTo(cx, cy - 14);
            ctx.lineTo(cx - 8, cy - 20);
            ctx.lineTo(cx + 8, cy - 20);
            ctx.closePath();
            ctx.fill();
            break;
            
        case 'cross':
            // Maltese Cross
            ctx.fillStyle = color;
            // Vertical bar
            ctx.fillRect(cx - 3, cy - 14, 6, 28);
            // Horizontal bar
            ctx.fillRect(cx - 12, cy - 4, 24, 6);
            // Pointed ends (V shapes)
            ctx.fillStyle = accent;
            ctx.beginPath();
            // Top
            ctx.moveTo(cx - 3, cy - 14);
            ctx.lineTo(cx, cy - 18);
            ctx.lineTo(cx + 3, cy - 14);
            // Bottom
            ctx.moveTo(cx - 3, cy + 14);
            ctx.lineTo(cx, cy + 18);
            ctx.lineTo(cx + 3, cy + 14);
            // Left
            ctx.moveTo(cx - 12, cy - 4);
            ctx.lineTo(cx - 16, cy - 1);
            ctx.lineTo(cx - 12, cy + 2);
            // Right
            ctx.moveTo(cx + 12, cy - 4);
            ctx.lineTo(cx + 16, cy - 1);
            ctx.lineTo(cx + 12, cy + 2);
            ctx.fill();
            break;
            
        case 'gateway':
            // Gateway of India - arch monument
            ctx.fillStyle = color;
            // Main arch structure
            ctx.fillRect(cx - 14, cy - 10, 6, 24);
            ctx.fillRect(cx + 8, cy - 10, 6, 24);
            // Top connecting piece
            ctx.fillRect(cx - 14, cy - 14, 28, 6);
            // Central arch
            ctx.beginPath();
            ctx.arc(cx, cy + 2, 8, Math.PI, 0);
            ctx.fillStyle = '#1a1a1a';
            ctx.fill();
            // Decorative top
            ctx.fillStyle = accent;
            ctx.beginPath();
            ctx.arc(cx, cy - 14, 4, Math.PI, 0);
            ctx.fill();
            break;
            
        case 'menorah':
            // Menorah
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            // Base
            ctx.beginPath();
            ctx.moveTo(cx - 8, cy + 14);
            ctx.lineTo(cx + 8, cy + 14);
            ctx.lineTo(cx + 4, cy + 10);
            ctx.lineTo(cx - 4, cy + 10);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
            // Central stem
            ctx.beginPath();
            ctx.moveTo(cx, cy + 10);
            ctx.lineTo(cx, cy - 8);
            ctx.stroke();
            // Branches (3 on each side)
            const branchY = [cy - 8, cy - 8, cy - 8];
            ctx.beginPath();
            ctx.moveTo(cx - 10, cy + 4);
            ctx.quadraticCurveTo(cx - 10, cy - 4, cx - 10, cy - 8);
            ctx.moveTo(cx - 6, cy + 2);
            ctx.quadraticCurveTo(cx - 6, cy - 2, cx - 6, cy - 8);
            ctx.moveTo(cx + 10, cy + 4);
            ctx.quadraticCurveTo(cx + 10, cy - 4, cx + 10, cy - 8);
            ctx.moveTo(cx + 6, cy + 2);
            ctx.quadraticCurveTo(cx + 6, cy - 2, cx + 6, cy - 8);
            ctx.stroke();
            // Flames
            ctx.fillStyle = accent;
            [-10, -6, 0, 6, 10].forEach(x => {
                ctx.beginPath();
                ctx.ellipse(cx + x, cy - 11, 2, 3, 0, 0, Math.PI * 2);
                ctx.fill();
            });
            break;
            
        case 'mosaic':
            // Gaudi-style mosaic pattern
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(cx, cy, 14, 0, Math.PI * 2);
            ctx.fill();
            // Mosaic pieces
            const colors = [accent, '#4a90a0', '#228b22', '#ffd700'];
            const pieces = [
                [-6, -6], [2, -8], [8, -2], [6, 6], [-2, 8], [-8, 2], [0, 0]
            ];
            pieces.forEach((pos, i) => {
                ctx.fillStyle = colors[i % colors.length];
                ctx.beginPath();
                ctx.moveTo(cx + pos[0], cy + pos[1]);
                ctx.lineTo(cx + pos[0] + 4, cy + pos[1] - 2);
                ctx.lineTo(cx + pos[0] + 6, cy + pos[1] + 2);
                ctx.lineTo(cx + pos[0] + 2, cy + pos[1] + 4);
                ctx.closePath();
                ctx.fill();
            });
            break;
            
        case 'yacht':
            // Luxury yacht
            ctx.fillStyle = color;
            // Hull
            ctx.beginPath();
            ctx.moveTo(cx - 16, cy + 4);
            ctx.lineTo(cx - 12, cy + 10);
            ctx.lineTo(cx + 14, cy + 10);
            ctx.lineTo(cx + 16, cy + 4);
            ctx.quadraticCurveTo(cx + 14, cy + 2, cx - 14, cy + 2);
            ctx.closePath();
            ctx.fill();
            // Cabin
            ctx.fillStyle = accent;
            ctx.fillRect(cx - 8, cy - 2, 14, 6);
            // Windows
            ctx.fillStyle = '#a0d8ef';
            ctx.fillRect(cx - 6, cy - 1, 3, 3);
            ctx.fillRect(cx, cy - 1, 3, 3);
            // Mast
            ctx.fillStyle = color;
            ctx.fillRect(cx - 1, cy - 10, 2, 10);
            break;
            
        case 'violin':
            // Violin (Tartini - Piran connection)
            ctx.fillStyle = color;
            // Body
            ctx.beginPath();
            ctx.ellipse(cx, cy + 4, 8, 10, 0, 0, Math.PI * 2);
            ctx.fill();
            // Waist curves
            ctx.fillStyle = '#1a1a1a';
            ctx.beginPath();
            ctx.ellipse(cx - 8, cy + 2, 3, 5, 0.3, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.ellipse(cx + 8, cy + 2, 3, 5, -0.3, 0, Math.PI * 2);
            ctx.fill();
            // Neck
            ctx.fillStyle = accent;
            ctx.fillRect(cx - 2, cy - 14, 4, 12);
            // Scroll
            ctx.beginPath();
            ctx.arc(cx, cy - 16, 3, 0, Math.PI * 2);
            ctx.fill();
            // F-holes
            ctx.strokeStyle = '#1a1a1a';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(cx - 3, cy);
            ctx.quadraticCurveTo(cx - 4, cy + 4, cx - 2, cy + 6);
            ctx.moveTo(cx + 3, cy);
            ctx.quadraticCurveTo(cx + 4, cy + 4, cx + 2, cy + 6);
            ctx.stroke();
            break;
            
        case 'champagne':
            // Champagne glass
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            // Glass bowl (flute shape)
            ctx.beginPath();
            ctx.moveTo(cx - 6, cy - 12);
            ctx.lineTo(cx - 4, cy + 2);
            ctx.lineTo(cx + 4, cy + 2);
            ctx.lineTo(cx + 6, cy - 12);
            ctx.stroke();
            // Stem
            ctx.beginPath();
            ctx.moveTo(cx, cy + 2);
            ctx.lineTo(cx, cy + 10);
            ctx.stroke();
            // Base
            ctx.beginPath();
            ctx.moveTo(cx - 6, cy + 10);
            ctx.lineTo(cx + 6, cy + 10);
            ctx.stroke();
            // Bubbles
            ctx.fillStyle = accent;
            ctx.beginPath();
            ctx.arc(cx - 2, cy - 6, 2, 0, Math.PI * 2);
            ctx.arc(cx + 1, cy - 2, 1.5, 0, Math.PI * 2);
            ctx.arc(cx - 1, cy - 10, 1.5, 0, Math.PI * 2);
            ctx.fill();
            break;
            
        case 'dj':
            // DJ turntable/headphones
            ctx.fillStyle = color;
            // Headphone band
            ctx.strokeStyle = color;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(cx, cy - 4, 12, Math.PI, 0);
            ctx.stroke();
            // Ear cups
            ctx.fillStyle = color;
            ctx.fillRect(cx - 14, cy - 6, 6, 12);
            ctx.fillRect(cx + 8, cy - 6, 6, 12);
            // Record/vinyl underneath
            ctx.fillStyle = accent;
            ctx.beginPath();
            ctx.arc(cx, cy + 8, 8, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#1a1a1a';
            ctx.beginPath();
            ctx.arc(cx, cy + 8, 3, 0, Math.PI * 2);
            ctx.fill();
            break;
            
        case 'iceberg':
            // Iceberg
            ctx.fillStyle = color;
            // Above water (visible part)
            ctx.beginPath();
            ctx.moveTo(cx - 10, cy);
            ctx.lineTo(cx - 4, cy - 14);
            ctx.lineTo(cx + 2, cy - 8);
            ctx.lineTo(cx + 8, cy - 12);
            ctx.lineTo(cx + 12, cy);
            ctx.closePath();
            ctx.fill();
            // Below water (larger, transparent)
            ctx.fillStyle = 'rgba(160, 200, 220, 0.4)';
            ctx.beginPath();
            ctx.moveTo(cx - 14, cy);
            ctx.lineTo(cx - 8, cy + 14);
            ctx.lineTo(cx + 10, cy + 14);
            ctx.lineTo(cx + 14, cy);
            ctx.closePath();
            ctx.fill();
            // Water line
            ctx.strokeStyle = accent;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(cx - 16, cy);
            ctx.lineTo(cx + 16, cy);
            ctx.stroke();
            break;
            
        case 'witch':
            // Witch hat (Salem)
            ctx.fillStyle = color;
            // Hat cone
            ctx.beginPath();
            ctx.moveTo(cx, cy - 16);
            ctx.lineTo(cx - 10, cy + 2);
            ctx.lineTo(cx + 10, cy + 2);
            ctx.closePath();
            ctx.fill();
            // Hat brim
            ctx.beginPath();
            ctx.ellipse(cx, cy + 2, 14, 4, 0, 0, Math.PI * 2);
            ctx.fill();
            // Buckle
            ctx.fillStyle = accent;
            ctx.fillRect(cx - 4, cy - 4, 8, 6);
            ctx.fillStyle = color;
            ctx.fillRect(cx - 2, cy - 2, 4, 3);
            break;
        
        case 'opera':
            // Theater/opera masks - comedy and tragedy
            // Happy mask (left, slightly up)
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.ellipse(cx - 7, cy - 2, 9, 11, -0.2, 0, Math.PI * 2);
            ctx.fill();
            // Happy face details
            ctx.fillStyle = accent;
            ctx.beginPath();
            ctx.arc(cx - 10, cy - 5, 2, 0, Math.PI * 2); // left eye
            ctx.arc(cx - 4, cy - 6, 2, 0, Math.PI * 2);  // right eye
            ctx.fill();
            ctx.beginPath();
            ctx.arc(cx - 7, cy + 2, 4, 0, Math.PI); // smile
            ctx.stroke();

            // Sad mask (right, slightly down)
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.ellipse(cx + 7, cy + 2, 9, 11, 0.2, 0, Math.PI * 2);
            ctx.fill();
            // Sad face details
            ctx.fillStyle = accent;
            ctx.beginPath();
            ctx.arc(cx + 4, cy - 1, 2, 0, Math.PI * 2);  // left eye
            ctx.arc(cx + 10, cy, 2, 0, Math.PI * 2);     // right eye
            ctx.fill();
            ctx.beginPath();
            ctx.arc(cx + 7, cy + 8, 4, Math.PI, 0); // frown
            ctx.stroke();
            break;

        case 'fire':
            // Flames (for Tierra del Fuego - Land of Fire)
            ctx.fillStyle = accent;
            // Outer flame
            ctx.beginPath();
            ctx.moveTo(cx, cy - 16);
            ctx.quadraticCurveTo(cx + 12, cy - 6, cx + 10, cy + 8);
            ctx.quadraticCurveTo(cx + 6, cy + 12, cx, cy + 10);
            ctx.quadraticCurveTo(cx - 6, cy + 12, cx - 10, cy + 8);
            ctx.quadraticCurveTo(cx - 12, cy - 6, cx, cy - 16);
            ctx.fill();
            // Inner flame
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(cx, cy - 10);
            ctx.quadraticCurveTo(cx + 7, cy - 2, cx + 5, cy + 6);
            ctx.quadraticCurveTo(cx + 2, cy + 8, cx, cy + 6);
            ctx.quadraticCurveTo(cx - 2, cy + 8, cx - 5, cy + 6);
            ctx.quadraticCurveTo(cx - 7, cy - 2, cx, cy - 10);
            ctx.fill();
            // Core
            ctx.fillStyle = '#fff5e0';
            ctx.beginPath();
            ctx.ellipse(cx, cy + 2, 3, 5, 0, 0, Math.PI * 2);
            ctx.fill();
            break;

        case 'volcano':
            // Snow-capped volcano (like Osorno)
            ctx.fillStyle = color;
            // Main cone
            ctx.beginPath();
            ctx.moveTo(cx - 16, cy + 12);
            ctx.lineTo(cx - 4, cy - 10);
            ctx.lineTo(cx + 4, cy - 10);
            ctx.lineTo(cx + 16, cy + 12);
            ctx.closePath();
            ctx.fill();
            // Snow cap
            ctx.fillStyle = '#f5f0e8';
            ctx.beginPath();
            ctx.moveTo(cx - 4, cy - 10);
            ctx.lineTo(cx, cy - 14);
            ctx.lineTo(cx + 4, cy - 10);
            ctx.lineTo(cx + 2, cy - 6);
            ctx.lineTo(cx - 2, cy - 6);
            ctx.closePath();
            ctx.fill();
            // Crater glow
            ctx.fillStyle = accent;
            ctx.beginPath();
            ctx.ellipse(cx, cy - 12, 3, 2, 0, 0, Math.PI * 2);
            ctx.fill();
            // Smoke wisps
            ctx.strokeStyle = 'rgba(200, 200, 200, 0.5)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(cx - 1, cy - 14);
            ctx.quadraticCurveTo(cx - 3, cy - 18, cx - 1, cy - 20);
            ctx.moveTo(cx + 1, cy - 14);
            ctx.quadraticCurveTo(cx + 4, cy - 17, cx + 2, cy - 21);
            ctx.stroke();
            break;

        case 'fjord':
            // Patagonian fjord - mountains with water channel
            // Left mountain range
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(cx - 18, cy + 12);
            ctx.lineTo(cx - 14, cy - 6);
            ctx.lineTo(cx - 10, cy - 12);
            ctx.lineTo(cx - 6, cy - 4);
            ctx.lineTo(cx - 4, cy + 12);
            ctx.closePath();
            ctx.fill();
            // Right mountain range
            ctx.beginPath();
            ctx.moveTo(cx + 4, cy + 12);
            ctx.lineTo(cx + 6, cy - 2);
            ctx.lineTo(cx + 10, cy - 10);
            ctx.lineTo(cx + 14, cy - 4);
            ctx.lineTo(cx + 18, cy + 12);
            ctx.closePath();
            ctx.fill();
            // Snow caps
            ctx.fillStyle = '#f5f0e8';
            ctx.beginPath();
            ctx.moveTo(cx - 10, cy - 12);
            ctx.lineTo(cx - 12, cy - 6);
            ctx.lineTo(cx - 8, cy - 6);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(cx + 10, cy - 10);
            ctx.lineTo(cx + 8, cy - 4);
            ctx.lineTo(cx + 12, cy - 4);
            ctx.closePath();
            ctx.fill();
            // Water channel between mountains
            ctx.fillStyle = accent;
            ctx.beginPath();
            ctx.moveTo(cx - 4, cy + 12);
            ctx.lineTo(cx - 2, cy);
            ctx.lineTo(cx + 2, cy);
            ctx.lineTo(cx + 4, cy + 12);
            ctx.closePath();
            ctx.fill();
            // Mist/atmosphere layer
            ctx.fillStyle = 'rgba(200, 210, 220, 0.3)';
            ctx.beginPath();
            ctx.ellipse(cx, cy + 4, 14, 4, 0, 0, Math.PI * 2);
            ctx.fill();
            break;

        default:
            // Fallback - simple circle with pin
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(cx, cy, 12, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = accent;
            ctx.beginPath();
            ctx.arc(cx, cy, 5, 0, Math.PI * 2);
            ctx.fill();
    }
}

// Main function to draw a porthole icon
function drawPortholeIcon(canvas, config, isDoor, openAmount) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    
    ctx.clearRect(0, 0, w, h);
    
    const cx = w / 2;
    const cy = isDoor ? h / 2 : h / 2 - 12; // Center doors vertically (no base)
    const radius = isDoor ? 44 : 38;
    
    if (isDoor) {
        // === DOOR PORTHOLE: Clear glass with door visible behind ===
        
        // Layer 1: Dark interior behind the door
        ctx.fillStyle = '#1a1a2e';
        ctx.beginPath();
        ctx.arc(cx, cy, radius - 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Layer 2: The door (always visible through glass)
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, radius - 5, 0, Math.PI * 2);
        ctx.clip();
        draw3DDoor(ctx, cx, cy, config.color || '#6a5a4a', 1); // Always draw door at full opacity
        ctx.restore();
        
        // Layer 3: Clear glass overlay with subtle reflections
        drawClearGlass(ctx, cx, cy, radius - 3);
        
        // Layer 4: Brass porthole frame
        drawPortholeFrame(ctx, cx, cy, radius);
        
        // NO BASE for doors
        
    } else {
        // === REGULAR ICONS: Keep existing behavior ===
        
        // Layer 1: Black background
        ctx.fillStyle = '#0a0a0a';
        ctx.beginPath();
        ctx.arc(cx, cy, radius - 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Layer 2: The icon content
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, radius - 5, 0, Math.PI * 2);
        ctx.clip();
        drawRegularIcon(ctx, cx, cy, config, openAmount);
        ctx.restore();
        
        // Layer 3: Brass porthole frame
        drawPortholeFrame(ctx, cx, cy, radius);
        
        // Layer 4: Base for regular icons
        drawPortholeBase(ctx, cx, cy + radius, isDoor);
    }
}

// Draw clear glass effect for door portholes
function drawClearGlass(ctx, cx, cy, radius) {
    // Subtle blue-ish tint like real glass
    ctx.fillStyle = 'rgba(200, 220, 240, 0.08)';
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();
    
    // Main highlight (top-left reflection)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.beginPath();
    ctx.ellipse(cx - radius * 0.3, cy - radius * 0.3, radius * 0.35, radius * 0.15, -0.6, 0, Math.PI * 2);
    ctx.fill();
    
    // Secondary smaller highlight
    ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.beginPath();
    ctx.ellipse(cx - radius * 0.15, cy - radius * 0.5, radius * 0.15, radius * 0.06, -0.4, 0, Math.PI * 2);
    ctx.fill();
    
    // Subtle rim light around edge
    const rimGrad = ctx.createRadialGradient(cx, cy, radius * 0.7, cx, cy, radius);
    rimGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
    rimGrad.addColorStop(0.8, 'rgba(255, 255, 255, 0)');
    rimGrad.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
    ctx.fillStyle = rimGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();
}

// Draw smoky glass bubble effect for regular icons
function drawSmokyGlassBubble(ctx, cx, cy, radius) {
    // Outer smoky edge
    const smokyGrad = ctx.createRadialGradient(cx, cy, radius * 0.5, cx, cy, radius);
    smokyGrad.addColorStop(0, 'rgba(30, 45, 65, 0)');
    smokyGrad.addColorStop(0.6, 'rgba(30, 45, 65, 0.1)');
    smokyGrad.addColorStop(0.85, 'rgba(25, 40, 60, 0.35)');
    smokyGrad.addColorStop(1, 'rgba(20, 35, 55, 0.5)');
    
    ctx.fillStyle = smokyGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();
    
    // Glass highlight (top left reflection)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.beginPath();
    ctx.ellipse(cx - radius * 0.3, cy - radius * 0.35, radius * 0.25, radius * 0.12, -0.5, 0, Math.PI * 2);
    ctx.fill();
    
    // Subtle inner rim highlight
    ctx.strokeStyle = 'rgba(150, 180, 210, 0.2)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, radius - 1, 0, Math.PI * 2);
    ctx.stroke();
}

// Map symbol names to emojis
function getEmojiForSymbol(symbol) {
    const emojiMap = {
        'sunrise': '🌅',
        'sunset': '🌅',
        'palm': '🌴',
        'waves': '🌊',
        'star': '⭐',
        'cocktail': '🍹',
        'mountain': '🏔️',
        'anchor': '⚓',
        'ship': '🚢',
        'compass': '🧭',
        'guitar': '🎸',
        'music': '🎵',
        'crown': '👑',
        'mask': '🎭',
        'temple': '⛩️',
        'church': '⛪',
        'castle': '🏰',
        'cityscape': '🏙️',
        'island': '🏝️',
        'fish': '🐟',
        'coral': '🪸',
        'whale': '🐋',
        'dolphin': '🐬',
        'turtle': '🐢',
        'shell': '🐚',
        'sparkle': '✨',
        'fireworks': '🎆',
        'car': '🚗',
        'fortress': '🏰',
        'column': '🏛️',
        'arch': '🏛️',
        'shark': '🦈',
        'mango': '🥭',
        'coffee': '☕',
        'sun-hot': '☀️',
        'penguin': '🐧',
        'boat': '⛵',
        'wine': '🍷',
        'grapes': '🍇',
        'default': '📍',
        'wood-door': '🚪',
        'gold-door': '🚪',
        'steel-door': '🚪'
    };
    return emojiMap[symbol] || emojiMap['default'];
}

// Start iris open animation for a marker
function startIrisAnimation(markerId, targetOpen, callback) {
    let anim = markerAnimations.get(markerId);
    if (!anim) {
        anim = { openAmount: 0, targetOpen: 0, isAnimating: false, callback: null };
        markerAnimations.set(markerId, anim);
    }
    
    anim.targetOpen = targetOpen;
    anim.callback = callback;
    
    if (!anim.isAnimating) {
        anim.isAnimating = true;
        animateIris(markerId);
    }
}

// Animation loop for iris
function animateIris(markerId) {
    const anim = markerAnimations.get(markerId);
    if (!anim) return;
    
    const diff = anim.targetOpen - anim.openAmount;
    
    if (Math.abs(diff) < 0.01) {
        anim.openAmount = anim.targetOpen;
        anim.isAnimating = false;
        
        // Redraw final state
        updateMarkerTexture(markerId);
        
        // Call callback when animation completes
        if (anim.callback && anim.targetOpen === 1) {
            anim.callback();
            anim.callback = null;
        }
        return;
    }
    
    // Easing - faster for snappier animation
    anim.openAmount += diff * 0.18;
    
    // Update the marker texture
    updateMarkerTexture(markerId);
    
    requestAnimationFrame(() => animateIris(markerId));
}

// Update marker texture during animation
function updateMarkerTexture(markerId) {
    const marker = markers.find(m => m.userData.id === markerId);
    if (!marker) return;
    
    const anim = markerAnimations.get(markerId);
    if (!anim) return;
    
    // Skip canvas updates for AI porthole markers
    if (marker.userData.useAIPorthole) return;
    
    const canvas = marker.userData.iconCanvas;
    if (!canvas) return; // Safety check
    
    const config = marker.userData.iconConfig;
    const isDoor = marker.userData.isDoor;
    
    drawPortholeIcon(canvas, config, isDoor, anim.openAmount);
    
    // Update Three.js texture
    if (marker.material.map) {
        marker.material.map.needsUpdate = true;
    }
}

// Get current open amount for a marker
function getMarkerOpenAmount(markerId) {
    const anim = markerAnimations.get(markerId);
    return anim ? anim.openAmount : 0;
}

function renderSidebarIcon(canvas, config) {
    const ctx = canvas.getContext('2d');
    const size = canvas.width;
    const cx = size / 2;
    const cy = size / 2;
    
    ctx.clearRect(0, 0, size, size);
    
    // Use the shared icon rendering function
    renderIconSymbol(ctx, cx, cy, config.symbol, config.color, config.accent);
}

function getIconConfig(title) {
    return ICON_CONFIG[title] || { style: 'minimal', symbol: 'default', color: '#d4a574', accent: '#8b6914' };
}


// Calculate density factor for each location based on nearby neighbors
function calculateDensityFactors() {
    const densityFactors = new Map();
    const proximityThreshold = 15; // Degrees - locations within this range count as neighbors
    const minScale = 0.5;  // Minimum scale factor (50% of original)
    const maxNeighbors = 6; // At this many neighbors, hit minimum scale
    
    locations.forEach(loc => {
        if (loc.isDoor) {
            // Doors always stay full size
            densityFactors.set(loc.id, 1.0);
            return;
        }
        
        // Count nearby non-door locations
        let neighborCount = 0;
        locations.forEach(other => {
            if (other.id === loc.id) return;
            
            // Calculate great circle distance approximation
            const lat1 = loc.coords[0], lon1 = loc.coords[1];
            const lat2 = other.coords[0], lon2 = other.coords[1];
            const dLat = Math.abs(lat2 - lat1);
            const dLon = Math.abs(lon2 - lon1);
            const distance = Math.sqrt(dLat * dLat + dLon * dLon);
            
            if (distance < proximityThreshold) {
                neighborCount++;
            }
        });
        
        // Calculate scale factor: more neighbors = smaller icon
        // 0 neighbors = 1.0 (full size)
        // maxNeighbors or more = minScale
        const densityRatio = Math.min(neighborCount / maxNeighbors, 1.0);
        const scaleFactor = 1.0 - (densityRatio * (1.0 - minScale));
        
        densityFactors.set(loc.id, scaleFactor);
    });
    
    // Store globally for zoom calculations
    globalDensityFactors = densityFactors;
    
    return densityFactors;
}

// Calculate zoom distance for a location - smaller icons zoom closer to match door appearance
function getZoomDistanceForLocation(loc) {
    if (!globalDensityFactors || !loc) return baseZoomInDistance;
    
    // Door size is the reference
    const doorSize = 0.040;
    const doorZoom = baseZoomInDistance; // Doors zoom to this distance
    
    // Calculate this location's actual icon size
    let iconSize;
    if (loc.isDoor) {
        iconSize = doorSize;
    } else {
        const densityFactor = globalDensityFactors.get(loc.id) || 1.0;
        const manualOverride = 1.0; // Could look up from sizeOverrides if needed
        iconSize = 0.029 * densityFactor * manualOverride;
    }
    
    // Calculate full proportional zoom
    const fullProportionalZoom = doorZoom * (iconSize / doorSize);
    
    // Blend 50% between base zoom and full proportional (middle ground)
    const blendFactor = 0.5;
    const zoomDistance = doorZoom - (doorZoom - fullProportionalZoom) * blendFactor;
    
    // Clamp to reasonable range
    const minZoom = 1.20;
    return Math.max(zoomDistance, minZoom);
}

// Custom shader material for video textures with black transparency (chroma key)
function createVideoChromaMaterial(texture) {
    const vertexShader = `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            // Billboard behavior for sprites
            vec4 mvPosition = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
            vec2 scale = vec2(
                length(vec3(modelMatrix[0].xyz)),
                length(vec3(modelMatrix[1].xyz))
            );
            mvPosition.xy += position.xy * scale;
            gl_Position = projectionMatrix * mvPosition;
        }
    `;
    
    const fragmentShader = `
        uniform sampler2D map;
        uniform float threshold;
        uniform float softness;
        varying vec2 vUv;
        
        void main() {
            vec4 texColor = texture2D(map, vUv);
            
            // Calculate brightness (luminance)
            float brightness = (texColor.r + texColor.g + texColor.b) / 3.0;
            
            // Create soft edge around threshold
            float alpha = smoothstep(threshold - softness, threshold + softness, brightness);
            
            // Also check for circular mask (porthole shape)
            vec2 center = vec2(0.5, 0.5);
            float dist = distance(vUv, center);
            float radius = 0.46; // Porthole radius
            float edgeSoftness = 0.02;
            
            // Only apply black transparency OUTSIDE the porthole circle
            // Inside the circle, keep all pixels (including dark ones)
            float insideCircle = 1.0 - smoothstep(radius - edgeSoftness, radius + edgeSoftness, dist);
            
            // Final alpha: inside circle = keep everything, outside = remove black
            float finalAlpha = mix(alpha, 1.0, insideCircle) * texColor.a;
            
            gl_FragColor = vec4(texColor.rgb, finalAlpha);
        }
    `;
    
    const material = new THREE.ShaderMaterial({
        uniforms: {
            map: { value: texture },
            threshold: { value: 0.15 }, // Black threshold (0-1)
            softness: { value: 0.05 }   // Edge softness
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide
    });
    
    return material;
}

// Track which locations use video (for special material handling)
function isVideoTexture(locationTitle) {
    return locationVideoURLs.hasOwnProperty(locationTitle);
}

function createMarkers() {
    // Pre-calculate density factors for all locations
    const densityFactors = calculateDensityFactors();
    
    // Manual size adjustments for specific locations (multiplier)
    const sizeOverrides = {
        "Queen Victoria (Cunard)": 1.10,
        "Barcelona, Spain": 1.10,
        "Ibiza, Spain": 1.10,
        "Alexandria, Egypt": 1.10,
        "Tel Aviv, Israel": 1.10,
        // Northern Italy/Adriatic cluster - all shrunk uniformly
        "Venice, Italy": 0.65,
        "Piran, Slovenia": 0.65,
        "Ravenna, Italy": 0.65,
        "Florence, Italy": 0.65,
        "Portovenere, Italy": 0.65,
        "Portofino, Italy": 0.70,
        "Dubrovnik, Croatia": 0.70,
        "Kotor, Montenegro": 0.70,
        "Hvar, Croatia": 0.70,
        "Šibenik, Croatia": 0.65,
        // Western Greece
        "Corfu, Greece": 0.70,
        "Parga, Greece": 0.65,
        // Aegean - Turkish coast
        "Ephesus, Turkey": 0.60,
        "Kuşadası, Turkey": 0.72,
        "Izmir, Turkey": 0.60,
        "Çeşme, Turkey": 0.55,
        // Aegean - Cyclades
        "Mykonos, Greece": 0.80,
        "Santorini, Greece": 0.80,
        "Milos, Greece": 0.60,
        // Peloponnese cluster
        "Itea, Greece": 0.75,
        "Nafplio, Greece": 0.55,
        "Katakolon, Greece": 0.72,
        "Pylos, Greece": 0.75,
        "Zakynthos, Greece": 0.55,
        // French Riviera cluster - smaller + offset handles spacing
        "Le Lavandou, France": 0.68,
        "Monte Carlo, Monaco": 0.68,
        "San Remo, Italy": 0.40,
        "St. Tropez, France": 0.68,
        "Marseille, France": 0.68,
        "Roses, Spain": 0.85,
        // Other Italian
        "Stromboli, Italy": 0.75,
        // Israel
        "Haifa, Israel": 0.85,
        // Indonesia
        "Celukan Bawang, Indonesia": 0.80
    };
    
    // Offset positions for overlapping markers (lat/lng offset)
    const markerOffsets = {
        // New Zealand - spread out close locations
        "Wellington, New Zealand": { latOffset: -0.5, lngOffset: -0.8 },
        "Picton, New Zealand": { latOffset: 0.5, lngOffset: 0.8 },
        "Auckland, New Zealand": { latOffset: 0.5, lngOffset: -0.6 },
        "Tauranga, New Zealand": { latOffset: -0.5, lngOffset: 0.6 },
        // Northern Adriatic - minimal offsets, rely on smaller sizes
        "Venice, Italy": { latOffset: 0.4, lngOffset: -0.6 },
        "Piran, Slovenia": { latOffset: -0.2, lngOffset: 0.6 },
        "Ravenna, Italy": { latOffset: -0.3, lngOffset: 0.5 },
        // Central Italy - spread along coast
        "Florence, Italy": { latOffset: 0.3, lngOffset: 0.2 },
        "Portovenere, Italy": { latOffset: -0.5, lngOffset: 0.6 },
        "Portofino, Italy": { latOffset: 0.4, lngOffset: -0.3 },
        // French Riviera - stagger north/south to avoid overlap (increased spacing)
        "Marseille, France": { latOffset: 1.2, lngOffset: -0.6 },
        "Le Lavandou, France": { latOffset: -1.4, lngOffset: -0.4 },
        "St. Tropez, France": { latOffset: 1.6, lngOffset: 0.4 },
        "Monte Carlo, Monaco": { latOffset: -1.2, lngOffset: -0.6 },
        "San Remo, Italy": { latOffset: -1.0, lngOffset: 0.6 },
        "Roses, Spain": { latOffset: -0.3, lngOffset: 0.2 },
        // Corsica
        "Propriano, Corsica": { latOffset: -0.2, lngOffset: 0.2 },
        // Adriatic south - minimal offsets
        "Dubrovnik, Croatia": { latOffset: 0.2, lngOffset: -0.2 },
        "Kotor, Montenegro": { latOffset: -0.2, lngOffset: 0.2 },
        "Hvar, Croatia": { latOffset: -0.4, lngOffset: 0.4 },
        "Šibenik, Croatia": { latOffset: 0.4, lngOffset: -0.4 },
        // Western Greece - spread Corfu/Parga
        "Corfu, Greece": { latOffset: 0.4, lngOffset: -0.3 },
        "Parga, Greece": { latOffset: -0.4, lngOffset: 0.3 },
        // Aegean - Turkish coast (Ephesus/Kuşadası are almost same spot!)
        "Ephesus, Turkey": { latOffset: 0.4, lngOffset: 0.3 },
        "Kuşadası, Turkey": { latOffset: -0.8, lngOffset: -0.3 },
        "Izmir, Turkey": { latOffset: 0.4, lngOffset: -0.3 },
        "Çeşme, Turkey": { latOffset: -0.4, lngOffset: 0.3 },
        // Aegean - Cyclades islands
        "Mykonos, Greece": { latOffset: 0.4, lngOffset: -0.3 },
        "Santorini, Greece": { latOffset: -0.4, lngOffset: 0.3 },
        "Milos, Greece": { latOffset: 0.3, lngOffset: -0.4 },
        // Peloponnese ports - spread them out
        "Itea, Greece": { latOffset: 0.5, lngOffset: -0.3 },
        "Nafplio, Greece": { latOffset: -0.3, lngOffset: 0.4 },
        "Katakolon, Greece": { latOffset: -0.5, lngOffset: -0.4 },
        "Pylos, Greece": { latOffset: -0.4, lngOffset: 0.3 },
        "Zakynthos, Greece": { latOffset: 0.4, lngOffset: -0.5 },
        // Patagonia/Antarctica - spread apart
        "Beagle Channel, Chile": { latOffset: 0.8, lngOffset: -2.5 },
        "Lemaire Channel, Antarctica": { latOffset: -1.0, lngOffset: 2.0 },
        "Ushuaia, Argentina": { latOffset: -0.6, lngOffset: 1.0 },
        "Tierra del Fuego": { latOffset: -0.3, lngOffset: -1.5 },
        "Petermann Island, Antarctica": { latOffset: -1.5, lngOffset: -2.5 },
        "Port Lockroy, Antarctica": { latOffset: 1.0, lngOffset: 1.5 },
        // Indonesia - Bali area
        "Bali, Indonesia": { latOffset: -0.5, lngOffset: 1.2 },
        "Celukan Bawang, Indonesia": { latOffset: 0.5, lngOffset: -1.2 }
    };
    
    locations.forEach((loc, index) => {
        // Check for offset
        const offset = markerOffsets[loc.title];
        const displayLat = offset ? loc.coords[0] + offset.latOffset : loc.coords[0];
        const displayLng = offset ? loc.coords[1] + offset.lngOffset : loc.coords[1];
        
        const position = latLonToVector3(displayLat, displayLng, 1.0);
        const truePosition = latLonToVector3(loc.coords[0], loc.coords[1], 1.0);
        const config = getIconConfig(loc.title);
        
        // Offsets are applied above - no visual anchor line needed
        
        // Get density-based scale factor
        const densityScale = densityFactors.get(loc.id) || 1.0;
        
        // Check for manual override (applies to both doors and regular markers)
        const manualOverride = sizeOverrides[loc.title] || 1.0;
        
        // Size - doors are larger, apply manual overrides to all, density only to non-doors
        const baseSize = loc.isDoor ? 0.040 * manualOverride : 0.029 * densityScale * manualOverride;
        
        let texture, spriteMaterial, canvas;
        
        if (USE_AI_PORTHOLES) {
            if (locationTextures[loc.title]) {
                // Use location-specific texture if available (even for doors!)
                texture = locationTextures[loc.title];
            } else if (loc.isDoor) {
                // Doors without custom image use the frame texture
                texture = portholeFrameTexture;
            } else {
                // Fall back to default scene texture
                texture = portholeSceneTexture;
            }
            
        if (texture) {
                // Check if this is a video texture - use shader for transparency
                if (isVideoTexture(loc.title)) {
                    // Use custom shader material for video (handles black transparency)
                    spriteMaterial = createVideoChromaMaterial(texture);
                } else {
                    // Regular sprite material for static images
                    spriteMaterial = new THREE.SpriteMaterial({
                        map: texture,
                        transparent: true
                    });
                }
                canvas = null; // No canvas needed for AI images
            }
        }
        
        // Fallback to canvas-drawn portholes if no texture
        if (!texture) {
            canvas = document.createElement('canvas');
            canvas.width = 128;
            canvas.height = 150; // Taller for base
            
            // Doors start closed (iris animation), regular icons start open
            const initialOpen = loc.isDoor ? 0 : 1;
            
            // Draw initial state
            drawPortholeIcon(canvas, config, loc.isDoor, initialOpen);
            
            texture = new THREE.CanvasTexture(canvas);
            spriteMaterial = new THREE.SpriteMaterial({
                map: texture,
                transparent: true
            });
        }
        
        // Create Three.js sprite or mesh
        let marker;
        const useVideoMesh = isVideoTexture(loc.title);
        
        if (useVideoMesh) {
            // Use Mesh with PlaneGeometry for video (supports shader material)
            const geometry = new THREE.PlaneGeometry(1, 1);
            marker = new THREE.Mesh(geometry, spriteMaterial);
            marker.userData.isVideoMesh = true;
        } else {
            // Use Sprite for static images
            marker = new THREE.Sprite(spriteMaterial);
            marker.userData.isVideoMesh = false;
        }
        
        // Position marker above surface
        const direction = position.clone().normalize();
        marker.position.copy(position).add(direction.multiplyScalar(0.015));
        
        // Adjust scale - AI images are square, canvas ones are taller
        let scaleX, scaleY;
        if (canvas === null) {
            // AI images are square (1:1)
            scaleX = baseSize * 2;
            scaleY = baseSize * 2;
        } else {
            // Canvas icons - doors are circular (no base), regular icons are taller (have base)
            scaleX = baseSize * 2;
            scaleY = loc.isDoor ? baseSize * 2 : baseSize * 2.35;
        }
        marker.scale.set(scaleX, scaleY, 1);
        
        // Store data on marker for click handling and animation
        marker.userData = { ...marker.userData, ...loc };
        marker.userData.baseSize = baseSize;
        marker.userData.iconConfig = config;
        marker.userData.iconCanvas = canvas; // null for AI images, canvas for drawn ones
        marker.userData.useAIPorthole = (canvas === null); // Track which mode based on actual usage
        
        // Initialize animation state - doors closed, regular open
        const initialOpen = loc.isDoor ? 0 : 1;
        markerAnimations.set(loc.id, {
            openAmount: initialOpen,
            targetOpen: initialOpen,
            isAnimating: false,
            callback: null
        });
        
        globe.add(marker);
        markers.push(marker);
    });
}
