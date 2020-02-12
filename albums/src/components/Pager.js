import React from 'react';
export function Pager({onPageChange, ...props}) {

    return (

            <ul class="pagination justify-content-center">
                <li class="page-item" onClick={()=>onPageChange(12)}>
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">&#60;</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">&#62;</a></li>
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
    );

}

export default Pager;