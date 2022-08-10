import React,{Component} from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

class ReactStrapCard extends Component {

    render() {
        return(
            <div style={{padding : "0px"}}>
                <card>
                    <CardImg top height="200px" src = "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E" alt ='Card Img'/>
                    <CardBody>
                        <CardTitle>
                            Card Title
                        </CardTitle>
                        <CardSubtitle>
                            Card SubTitle
                        </CardSubtitle>
                        <CardText>
                            Lorem Ipsom is simply dummy text.
                        </CardText>
                        <Button>Button</Button>
                    </CardBody>
                </card>
            </div>  
        )
    }

}

export default ReactStrapCard;