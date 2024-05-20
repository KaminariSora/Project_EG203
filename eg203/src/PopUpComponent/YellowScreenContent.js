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
const Section2_2 = [
    {
        header: '1',
        src: "./Images/Section2/Section2_2.png",
        formular: ['สมดุลของ\\: \\sum M_{c} = 0','F_{B}(15)-F_{C}(15) = 0 \\longrightarrow ①'],
    },
    {
        header: '2',
        src: "./Images/Section2/Section2_3.png",
        formular: ['\\sum F_{x} = 0 ;','-F_{B} -F_{c}cos\\theta + N_{c}sin\\theta = 0\\longrightarrow ②'],
    },
    {
        header: '3',
        src: "./Images/Section2/Section2_4.png",
        formular: ['\\sum F_{y} = 0 ;','N_{c}cos\\theta + F_{c}sin\\theta - N_{B} = 0\\longrightarrow ③'],
    },
    {
        header: '4',
        src: "./Images/Section2/Section2_5.png",
        formular: ['ถ้าเกิดการเลื่อนที่จุด C','จาก F_{c} = \\mu N_{c}','F_{c} = 0.3 N_{c}' ],
    },
    {
        header: '5',
       
        formular: ['จาก ② จะได้','-0.3N_{c}-0.3N_{c}cos\\theta + N_{c}sin\\theta =0 ',
        '(-0.3-0.3cos\\theta sin\\theta)N_{c} = 0 \\longrightarrow ④',
        'จากสมการ④จะได้ \\theta = 33.4','นำ \\theta แทนใน ③ จะได้',
        'N_{c} (cos33.4 + 0.3 + sin33.4) = N_{B}','N_{C} = N_{B}',
        'จากการที่ไม่ว่า N_{c}จะมีค่าเท่าใด สมการก็ถูกเสมอ','ดังนั้น คำตอบถูกเสมอ'],
    },
]

const Section4_first = [
    {
        header: 'จากFree body diagram ได้เป็น(เคลื่อนที่ขึ้น case 1)',
        src: "./Images/Section4/2.jpg",
        formular: ['โดยที่\\phi = tan^{-1}\\frac{F}{N};tan^{-1}\\mu'],
    },
    {
        header: '2',
        src: "./Images/Section4/2.jpg",
        formular: ['จากสมการสมดุล',
        '\\sum_{}^{}F_{x} = 0; S -R(sin\\theta + \\phi) = 0',
        '\\sum_{}^{}F_{y} = 0; R(cos\\theta + \\phi) = 0'],
    },
    {
        header: '3',
        src: "./Images/Section4/2.jpg",
        formular: ['เมื่อเราแก้สมการ แล้วแทนค่า S ในสมการ M = Sr',
        'จะได้ M = Wr tan( θ + \\phi )',
        'ถ้า M ทำให้สลักเกลียวกำลังเคลื่ยนที่ เมื่อ',
        '\\phi = \\phi_{s} = tan^{-1}\\mu_{s}^{{-1}}',
        'ถ้า M ทำให้ สลักเกลียวเคลื่ยนที่ เมื่อ',
        '\\phi = \\phi_{k} = tan^{-1}\mu_{k}^{{-1}}'],
    }
]

const Section4_second = [
    {
        header: 'จากFree body diagram ได้เป็น',
        src: "./Images/Section4/2.jpg",
        formular: ['เกลียวหมุนลงได้เมื่อ moment ลดลง',
        'เป็น M` โดยที่ M` < M '],
    },
    {
        header: '2',
        src: "./Images/Section4/2.jpg",
        formular: ['เมื่อ moment = M` และมุม   จะเลื่อนมาซ้ายมือ',
        'ของแกน n โดย θ > \\phi การสมการสมดุล',
        'จะได้ว่า M`= Wr tan(θ > \\phi) '],
    },
]

const Section4_thrid = [
    {
        header: 'จากFree body diagram ได้เป็น',
        src: './Images/Section4/2.jpg',
        formular: ['จะเกิดแรง S``  จาก moment M`` (ที่ตรงข้ามกับM,M`)',
        'จากสมการสมดุลจะได้ว่า',
        'M`` = Wr tan(θ > \\phi)']

    },
]

const Section4_forth = [
    {
        header: 'จากFree body diagram ได้เป็น',
        src: './Images/Section4/2.jpg',
        formular: [
            'เกิดสมดุลแนวดิ่งจาก',
            'แรง ( R ) และ (W) อยู่ในแนวเดียวกัน'
        ]
    },
]

const Section5_1 = [
    {
        header: 'FBD\\; ของโลหะ\\; A',
        src: "./Images/Section5/Section5_2.png",
        formular: ['เขียนสมการสมดุลได้ว่า',' \\sum F_{x} = 0;\\; T_{1} - 0.2 N_{A} - W_{A} sin 30 = 0',
        ' \\sum F_{y} = 0;\\; N_{A} - W_{A} cos 30 = 0'],
    },
    {
        header: 'FBD\\; ของโลหะ\\; B',
        src: "./Images/Section5/Section5_3.png",
        formular: ['เขียนสมการสมดุลได้ว่า',' \\sum F_{x} = 0;\\; T_{2} - 20(9.81) sin30 +0.3N_{B} +0.2N_{A} = 0',
        ' \\sum F_{y} = 0;\\; N_{B} - N_{A} -20(9.81) cos30  = 0'],
    },
    {
        header: 'เมื่อนำสมการทั้งหมดมารวมกันกับสมการหา\\;T_{2}',
        
        formular: ['\\sum F_{x} = 0;\\; T_{1} - 0.2 N_{A} - W_{A} sin 30 = 0 \\longrightarrow ①',
        ' \\sum F_{y} = 0;\\; N_{A} - W_{A} cos 30 = 0 \\longrightarrow ②',
        ' \\sum F_{x} = 0;\\; T_{2} - 20(9.81) sin30 +0.3N_{B} +0.2N_{A} = 0 \\longrightarrow ③',
        '\\sum F_{y} = 0;\\; N_{B} - N_{A} -20(9.81) cos30  = 0 \\longrightarrow ④',
        'T_{2} = T_{1}e^{0.3x} \\longrightarrow ⑤'
        ],
    },
    {
        header: 'จะแก้สมการได้',
       
        formular: ['T_{1} = 14.68N',' T_{2} =37.8N ',
        'N_{A} = 18.89N',' N_{B} =188.88N ',
        'W_{A} = 21.81N'
        ],
    },
    {
        header: 'เมื่อ\\; W_{A}\\; คือ\\; น้ำหนักของแท่งโลหะ\\; A',
       
        formular: ['ดังนั้น\\; มวลของ\\; A\\; ที่น้อยที่สุด\\; คือ',
        'M_{A}=\\frac{W_{A}}{9.81}=\\frac{21.81}{9.81}','=2.22 \\; kg'],
    },
]
export { Section2_1 , Section2_2, Section4_first, Section4_second, Section4_thrid, Section4_forth, Section5_1}