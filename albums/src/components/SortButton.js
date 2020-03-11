import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
//export function SortButton({triechange, ...props}) {
export class SortButton extends React.Component {
    constructor (props) {
        super(props)
        //console.log(triechange)
        //console.log("ok")
        this.state = {
            sort: "nom",
            order: "⬆️"
        }

        this.handleSortChange =  this.handleSortChange.bind(this);
        this.handleOrderChange = this.handleOrderChange.bind(this)
    }

    handleSortChange(e) {
        let {triechange, ...props} = this.props;
        this.setState({sort:e.target.value}, () => {
            //console.log(this.state)
            triechange(this.state)
        })
        
    }
    handleOrderChange(e){
        let {triechange, ...props} = this.props;
        this.setState({order:e.target.value}, () => {
            //console.log(this.state)
            triechange(this.state)
        })
    }

    render() {
        //let {triechange, ...props} = this.props;
        return (
            <div>
                <select className="custom-select" onChange={this.handleSortChange}>
                    <option value="nom">nom</option>
                    <option value="année" >année</option>
                    <option value="genre">genre</option>
                    <option value="artiste">artiste</option>
                </select>
                <select className="custom-select" onChange={this.handleOrderChange}>
                    <option>⬆️</option>
                    <option>⬇️</option>
                </select>
            </div>
        );
    }

}

export default SortButton;