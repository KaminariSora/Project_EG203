import Section5 from "../Components_5/section5"
import { Section3_1 } from "./YellowScreenContent"

const RedScreenContent = {
    Section1: [{
        header: 'ยังใส่ข้อมูลไม่ครบทุกช่อง',
        content: "()"
    }],
    Section2: [{
        //index0
        header: "เสาล้มแล้ว",
        content: ""
    }],
    Section2_2: [{
        //index0
        header: "ไม้เกิดการเลื่อน",
        content: ""
    }],
    Section3_1: [{
        //index0
        header: "ลิ่มเกิดการเลื่อน",
        content: "",
    },{
        //index1
        header: "แรงเสียดทานต้านการเคลื่อนที่ได้",
        content: "ลิ่มล็อคตัวเอง",
    },{
        //index2
        header: "ลิ่มยก block ขึ้นได้",
        content: "",
    }],
    Section3_2: [{
        //index0
        header: "ลิ่มเกิดการเลื่อน",
        content: "",
    },],
    Section4: [
    {
        //index0
        header: 'เกลียวเคลื่อนที่ขึ้น',
        content: '(ถ้า moment มีค่าสูงพอ)'
    },    
    {
        //index1
        header: "เกลียวเคลื่ยนที่ลง",
        content: "(กรณีที่พื้นผิวเกลียวลื่นมาก)"
    },
    {
        // index2
        header: 'เกลียวเคลื่อนที่ลง',
        content: '(เมื่อเกลียวหยาบมากๆแล้วต้องใช้momentทิศตรงข้ามกับข้ออื่น)'
    },
    {
        // index3
        header: "เกลียว ล็อคตัวเองได้",
        content: "(ถ้าเอา moment แล้วเกลียวไม่มีการเคลื่ยนที่)"
    },
    {
        //index4
        header: 'ยังใส่ข้อมูลไม่ครบทุกช่อง'
    },],
    Section5: [{
        //index0
        header: "ไม่มีการเลื่อน",
        content: ""
    }],
}
// console.log(RedScreenContent.Section4[0].header)
export default RedScreenContent
