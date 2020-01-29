import React from 'react';
import AlbumItem from "./AlbumItem";

export function AlbumList(props){
    //console.log(props)
    let retour = [];
    props.albums.forEach(album => {
        //console.log(album)
        
        retour.push(<AlbumItem key={album.id} data={album}/>)
    });
    console.log(retour)
    return (<div>{retour}</div>)
}

export default AlbumList;