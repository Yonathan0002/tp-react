import React from 'react';
import AlbumList from './AlbumsList';
/*
export function Explorer(...props){

    var url = `http://jonquet/albums/public/albums?critereTri=nom&triAscendant=true&albumsParPage=10&page=`
    url = `http://jonquet/albums/public/albums?critereTri=nom&triAscendant=true&albumsParPage=10&page=0`
    //console.log(props.name)
    fetch(url)
        .then((reponse)=>{
            return reponse.json()
        })
        .then((data)=>{
            console.log(data)
        })
    var data = "rien"
    return(data)

}
*/
export class Explorer extends React.Component {
    constructor(props) {
        super(props);
        var url = `http://jonquet/albums/public/albums?critereTri=nom&triAscendant=true&albumsParPage=10&page=`
        url = `http://jonquet/albums/public/albums?critereTri=nom&triAscendant=true&albumsParPage=10&page=0`
        //console.log(props.name)
        fetch(url)
            .then((reponse)=>{
                return reponse.json()
            })
            .then((data)=>{
                console.log(data.albums)
                this.setState({albums:data.albums})
            })
        this.state = {albums:null};
    }
    render() {
        console.log("state : ", this.state)
        let data = this.state.albums !== null ? <AlbumList albums={this.state.albums}/> : "bip";
//        let data = "data";
        return (
            data
        );
    }
}

export default Explorer;