import React from 'react';
//export function SortButton({triechange, ...props}) {
export function SortButton({triechange, ...props}) {
    console.log(triechange, props)
    console.log("ok")
    return (
        <div>
            <select lass="custom-select">
                <option value="">--</option>
                <option value="nom">nom</option>
                <option value="année">année</option>
                <option value="genre">genre</option>
                <option value="artiste">artiste</option>
            </select>
            <select lass="custom-select">
                <option></option>
                <option></option>
            </select>
        </div>
    );

}

export default SortButton;