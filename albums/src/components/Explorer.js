import React from 'react';
import AlbumList from './AlbumsList';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{ faSpinner} from '@fortawesome/free-solid-svg-icons';
import Pager from './Pager';
import SortButton from './SortButton';
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
        this.state = {
            albums:null,
            page:0,
            dernierepage:41,
            sort:"nom",
            order: "true"

        };
        this.getAlbumsFromApi();
        this.handlePageChange = this.handlePageChange.bind(this);
        this.triechange = this.triechange.bind(this);
        //this.page = 0;
    }
    getAlbumsFromApi(page = 0, sort = "nom", order = "true") {
        var url = `http://jonquet/albums/public/albums?critereTri=nom&triAscendant=true&albumsParPage=10&page=`
        url = `http://jonquet/albums/public/albums?albumsParPage=12&page=` + page + "&triAscendant=" + order + "&critereTri=" + sort
        console.log(url)
        fetch(url)
            .then((reponse)=>{
                return reponse.json()
            })
            .then((data)=>{
                //console.log(data.pagination.page)
                this.setState({albums:data.albums})
                //console.log(this.state.nbpage)
                let dernierepage = data.pagination.nombrePages - 1
                this.setState({dernierepage:dernierepage})
            })
    }
    handlePageChange(page) {
        //console.log("handlePageChange", page)
        this.getAlbumsFromApi(page, this.state.sort, this.state.order);
        this.setState({page:page})
    }
    triechange(value){
        console.log(value)
        let order = "true"
        if (value.order == "⬇️"){
            order = "false"
        }
        this.setState({
            sort:value.sort, 
            order:order
        }, () => {
            console.log(this.state.sort, this.state.order)
            this.getAlbumsFromApi(this.state.page, value.sort, order)
        })
    }

    render() {
        //console.log("state : ", this.state)
        let data = []
        data.push(<SortButton triechange={this.triechange}></SortButton>);
        data.push(<Pager onPageChange={this.handlePageChange} page={this.state.page} dernierepage={this.state.dernierepage} ></Pager>);
        data.push(this.state.albums !== null ? <AlbumList albums={this.state.albums}/> : <FontAwesomeIcon icon={faSpinner} color="white" size="6x" pulse/>);
        data.push(<Pager onPageChange={this.handlePageChange} page={this.state.page} dernierepage={this.state.dernierepage} ></Pager>);
        //      let data = "data";
        
        return (
            data
        );
    }
}

export default Explorer;