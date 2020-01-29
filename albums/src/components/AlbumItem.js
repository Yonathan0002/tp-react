import React from 'react';
export function AlbumItem({data, ...props}) {
    console.log(data, props)
    return (
      <div style={{color:"red",border:"1px solid #fff"}} className="albumItem" {...props}>
          {data.nom}
          {data.année}
      </div>
    );

}
export default AlbumItem;