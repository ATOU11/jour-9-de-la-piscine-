document.addEventListener('mousemove', function(e) {

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const layer1 = document.getElementById('layer1');
    const layer2 = document.getElementById('layer2');
    const layer3 = document.getElementById('layer3');
    const layer4 = document.getElementById('layer4');
    const layer5 = document.getElementById('layer5');
    const layer6 = document.getElementById('layer6');
    const layer7 = document.getElementById('layer7');
    const layer8 = document.getElementById('layer8');
    const layer9 = document.getElementById('layer9');
    const layer10 = document.getElementById('layer10');
    const layer11= document.getElementById('layer11');

    layer2.style.transform = `translate(${mouseX * 0.03}px, ${mouseY * 0.03}px)`;
    layer3.style.transform = `translate(${mouseX * 0.01}px, ${mouseY * 0.01}px)`;
    layer4.style.transform = `translate(${mouseX * 0.05}px, ${mouseY * 0.05}px)`;
    layer5.style.transform = `translate(${mouseX * 0.03}px, ${mouseY * 0.03}px)`;
    layer6.style.transform = `translate(${mouseX * 0.01}px, ${mouseY * 0.01}px)`;
    layer7.style.transform = `translate(${mouseX * 0.05}px, ${mouseY * 0.05}px)`;
    layer8.style.transform = `translate(${mouseX * 0.03}px, ${mouseY * 0.03}px)`;
    layer9.style.transform = `translate(${mouseX * 0.01}px, ${mouseY * 0.01}px)`;
    layer10.style.transform = `translate(${mouseX * 0.03}px, ${mouseY * 0.03}px)`;
    layer11.style.transform = `translate(${mouseX * 0.01}px, ${mouseY * 0.01}px)`;
});