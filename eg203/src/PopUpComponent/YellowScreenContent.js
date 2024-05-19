const YellowScreenContent = [
    {
        header: 'จากFree body diagram ได้เป็น',
        src: "./Images/Section4/2.jpg",
        formular: ['θ = tan<sup>-1</sup>M<sub>s</sub>&frac12;&pi;r'],
    },
    {
        header: '2',
        src: "./Images/Section4/2.jpg",
        formular: [''],
    },
    {
        header: '3',
        src: "./Images/Section4/2.jpg",
        formular: [''],
    }
]

const Section2_1 = [
    {
        header: '1',
        src: "./Images/Section2/1.png",
        formular: ['สมดุลของ\\: \\sum M_{c}','-W(2)cosθ + T sin\\phi(2) = 0','T = \\frac{W cos\\theta}{sin\\phi} \\longrightarrow ①'],
    },
    {
        header: '2',
        src: "./Images/Section2/2.png",
        formular: ['สมดุลแกน X','\\mu_{s}N - T cos\\phi = 0','\\mu_{s}N = \\frac{W cos\\theta}{tan \\phi}\\longrightarrow ②'],
    },
    {
        header: '3',
        src: "./Images/Section2/3.png",
        formular: ['สมดุลแกน Y','N-W-T sin\\phi = 0','N = W(1+cosθ)\\longrightarrow ③'],
    },
    {
        header: 'แทน ③ ใน ② จะได้\\: \\mu_{s}(1  + cos\\theta)tan\\phi = cos\\theta\\longrightarrow④',
        src: "./Images/Section2/4.png",
        formular: ['จากรูป หาความสัมพันธ์มุมได้\\: tan\\theta = \\frac{4 sin\\theta}{2+4cos\\theta}\\longrightarrow ⑤',
        'แทน⑤ลงใน④ จะได้\\: 4\\mu_{s}sin\\theta(1+cos\\theta)=cos\\theta(2+4cos\\theta)',
        'เมื่อแทน\\: \\mu_{s}=0.3 จะหา θ ที่ลื่น = 65.2° ' ],
    },
]

export { YellowScreenContent , Section2_1}