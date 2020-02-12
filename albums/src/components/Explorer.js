import React from 'react';
import AlbumList from './AlbumsList';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{ faSpinner} from '@fortawesome/free-solid-svg-icons';
import Pager from './Pager';
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
        //console.log(props.name)
        this.state = {albums:null};
        this.getAlbumsFromApi();
        this.handlePageChange = this.handlePageChange.bind(this);
        this.page = 0;
    }
    getAlbumsFromApi(page = 0) {
        var url = `http://jonquet/albums/public/albums?critereTri=nom&triAscendant=true&albumsParPage=10&page=`
        url = `http://jonquet/albums/public/albums?critereTri=nom&triAscendant=true&albumsParPage=10&page=`+page
        fetch(url)
            .then((reponse)=>{
                return reponse.json()
            })
            .then((data)=>{
                console.log(data.albums)
                this.setState({albums:data.albums})
            })
    }
    handlePageChange(page) {
        console.log("handlePageChange", page)
        this.getAlbumsFromApi(page);
    }
    render() {
        console.log("state : ", this.state)
        let data = []
        data.push(<Pager onPageChange={this.handlePageChange}></Pager>);
        data.push(this.state.albums !== null ? <AlbumList albums={this.state.albums}/> : <FontAwesomeIcon icon={faSpinner} color="white" size="6x" pulse/>);
//        let data = "data";
        
        return (
            data
        );
    }
}

export default Explorer;