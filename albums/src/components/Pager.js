import React from 'react';
export function Pager({onPageChange, page,dernierepage, ...props}) {
    //console.log(page)

    let previouspage = page - 1
    let nextpage = page + 1
    if(page == 0){
        previouspage = 0
    }else if(page == dernierepage){
        nextpage = dernierepage
    }

    return (

            <ul class="pagination justify-content-center">
                <li class="page-item" onClick={()=>onPageChange(0)}>
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                <li class="page-item" onClick={()=>onPageChange(previouspage)}><a class="page-link" href="#">&#60;</a></li>
                <li class="page-item"><a class="page-link" href="#">{page}</a></li>
                <li class="page-item" onClick={()=>onPageChange(nextpage)}><a class="page-link" href="#">&#62;</a></li>
                <li class="page-item" onClick={()=>onPageChange(dernierepage)}>
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
    );

}

export default Pager;