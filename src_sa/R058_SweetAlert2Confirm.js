import React,{Component} from "react";
import Swal from 'sweetalert2';
import $ from 'jquery';

class SweetAlert2Confirm extends Component {

    deleteAlert = (e) => {
        Swal.fire({
            title : '정말 삭제하시겠습니까?',
            icon : 'question',
            showCancelButton : true,
            confirmButtonColor : '#4B088A',
            cancelButtonColor : '#01DF01',
            confirmButtonText : "Yes",
            cancelButtonText : "No"
        }).then((result) => {
            if (result.value) {
                $('#deleteId').remove();
                Swal.fire(
                    'Deleted','sweetalert2 삭제 완료', 'success'
                )
            }
        })
    }

    render() {
        return (
            <>
                <h1 id = 'deleteId'>sweetalert2</h1>
                <button onClick = {e =>this.deleteAlert()}>삭제</button>
            </>
        )
    }

}

export default SweetAlert2Confirm;