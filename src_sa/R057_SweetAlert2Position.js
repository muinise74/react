import React,{Component} from "react";
import Swal from 'sweetalert2';

class SweetAlert2Position extends Component {

    saveAlert = (flag, positionFlag, e) => {
        Swal.fire({
            position : positionFlag,
            icon : 'success',
            title : flag + '됐습니다.',
            showConfirmButton : false,
            timer : 1500
        })
    }

    render() {
        return (
            <>
                <h1>SweetAlert2</h1>
                <button onClick={e => this.saveAlert('저장','center')}>저장</button>
                <button onClick={e => this.saveAlert('수정','botton-end')}>수정</button>
            </>
        )
    }

}

export default SweetAlert2Position;
