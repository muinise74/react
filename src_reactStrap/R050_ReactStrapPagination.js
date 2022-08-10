import React,{Component} from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class ReactStrapPagination extends Component{

    pagination = (type) => {
        alert("Go "+type)
    }

    render() {
        return (
            <>
                <Pagination size ='lg' aria-label ="Page navigation example">
                    <PaginationItem>
                        <PaginationLink onClick = {e => this.pagination("previous")}>◁</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick = {e => this.pagination("1")}>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick = {e => this.pagination("2")}>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick = {e => this.pagination("last")}>▷</PaginationLink>
                    </PaginationItem>
                </Pagination>
            </>
        )
    }

}

export default ReactStrapPagination;