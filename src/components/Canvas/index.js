import { memo, useEffect, useRef } from "react";

function Canvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const c = canvas.getContext('2d');
    
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    
        // const mouse = {
        //     x: window.innerWidth / 2,
        //     y: window.innerHeight / 2
        // }
    
        const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];
    
        let mouseDown = false;
        window.addEventListener("mousedown", () => {
            mouseDown = true;
        })
    
        window.addEventListener("mouseup", () => {
            mouseDown = false;
        })
    
        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
    
            init();
        })
    
        class Particle {
            constructor(x, y, radius, color) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.color = color;
            }
        
            draw() {
                c.beginPath();
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                c.shadowColor = this.color;
                c.shadowBlur = 15;
                c.fillStyle = this.color;
                c.fill();
                c.closePath();
            }
            
            update() {
                this.draw();
            }
        }
    
        let particles;
        function init() {
            particles = [];
    
            for (let i = 0; i < 1500; i++) {
                const canvasWidth = canvas.width + 1000;
                const canvasHeight = canvas.height + 2000;
    
                const x = Math.random() * canvasWidth - canvasWidth / 2;
                const y = Math.random() * canvasHeight - canvasHeight / 2;
                const radius = 2 * Math.random();
    
                const color = colors[Math.floor(Math.random() * colors.length)];
                particles.push(new Particle(x, y, radius, color));
            }
        }
    
        let radians = 0;
        let alpha = 1;
    
        function animate() {
            requestAnimationFrame(animate);
    
            c.fillStyle = `rgba(10, 10, 10, ${alpha})`;
    
            c.fillRect(0, 0, canvas.width, canvas.height);
    
            c.save();
    
            c.translate(canvas.width / 2, canvas.height / 2);
    
            c.rotate(radians);
    
            particles.forEach(particle => {
                particle.update();
            })
    
            c.restore();
    
            radians += 0.003;
    
            if(mouseDown && alpha >= 0.03) {
                alpha -= 0.03;
            } else if (!mouseDown && alpha < 1) {
                alpha += 0.03;
            }
            // requestAnimationFrame(animate);
        }
    
        init();
        animate();
    }, []);

    return (<canvas ref={canvasRef}></canvas>);
}

export default memo(Canvas);