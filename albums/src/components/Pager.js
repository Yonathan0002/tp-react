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
        <div class="btn-toolbar" role="group" aria-label="Button group with nested dropdown">
            <div class="btn-group mr-2 mx-auto pb-3" role="group" aria-label="First group">
                <button type="button" class="btn btn-dark" onClick={()=>onPageChange(0)}>
                    <span aria-hidden="true">&laquo;</span>
                </button>
                <button type="button" class="btn btn-dark" onClick={()=>onPageChange(previouspage)}>&#60;</button>
                <div class="btn-group" role="group">
                <button type="button" class="btn btn-dark">{page}</button>
                </div>
                <button type="button" class="btn btn-dark" onClick={()=>onPageChange(nextpage)}>&#62;</button>
                <button type="button" class="btn btn-dark" onClick={()=>onPageChange(dernierepage)}>
                    <span aria-hidden="true">&raquo;</span>
                </button>
            </div>
        </div>
    );

}

export default Pager;