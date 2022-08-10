import React,{Component} from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
    {
        src : "https://src.hidoc.co.kr/image/lib/2022/5/4/1651651323632_0.jpg",
        altText : "미안하다냥",
        caption : "고양이",
        header : "고양이"
    },
    {
        src : "https://img.hankyung.com/photo/202110/99.27898506.1.jpg",
        altText : "미안하다냥",
        caption : "고양이 3마리",
        header : "고양이 3마리"
    },
    {
        src : "https://image.newsis.com/2022/01/04/NISI20220104_0018306622_web.jpg?rnd=20220104143359",
        altText : "미안하다냥",
        caption : "고양이 맞다냥",
        header : "큰 고양이"
    }
]

class ReactStrapCarousel extends Component {
    render() {
        return(
            <UncontrolledCarousel style = {{padding:"0px"}} items = {items} />
        )
    }
}

export default ReactStrapCarousel;