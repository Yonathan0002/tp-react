import React from 'react';
export function SortButton(...props) {
    //console.log(props)
    console.log("ok")
    return (
        <ul class="pagination justify-content-center">
            <li class="page-item">
<select class="custom-select justify-content-center" id="inputGroupSelect02">
    <option selected="">Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  </li></ul>
    );

}

export default SortButton;