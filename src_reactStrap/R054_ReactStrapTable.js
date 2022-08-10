import { Tab } from "bootstrap";
import React,{Component} from "react";
import { Table } from "reactstrap";

class ReactStrapTable extends Component {

    render() {
        return (
            <Table style ={{padding : "0px"}}>
            {/*
                <Table dark bordered>
                <Table striped hover>
                <Table borderless size ='sm'>
            */}
                <thead>
                    <tr>
                        <th>
                            number
                        </th>
                        <th>
                            book
                        </th>
                        <th>
                            price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope = 'row'>1</th>
                        <td>React 100</td>
                        <td>\10000</td>
                    </tr>
                    <tr>
                        <th scope = 'row'>2</th>
                        <td>React 200</td>
                        <td>\20000</td>
                    </tr>
                </tbody>
            </Table>
        )
    }

}

export default ReactStrapTable;