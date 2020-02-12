import React from 'react';
export function AlbumItem({data, ...props}) {
    //console.log(data, props)
    var jaquette = "http://jonquet/albums" + data.jaquette;
    return (
      <div class="col-md-4" style={{marginBottom: "1rem"}}>
        <div class="card col-mb-4 bg-dark text-light" {...props}>
            <div class="card-header">
              <h5 class="card-title" >{data.nom}</h5>
            </div>
            <div class="card-body">
              <img class="col-md-12" src={jaquette}></img>
                <div class="d-flex justify-content-around pt-3">
                  <div class="d-flex justify-content-around">{data.artiste.nom}</div>
                  <div class="d-flex flex-row-reverse bd-highlight"> {data.année}</div>
                </div>
            </div>
        </div>
      </div>
    );

}
export default AlbumItem;