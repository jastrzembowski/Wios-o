import React from "react";
import { offers } from "./OffersList";
import OfferCard from "./OfferCard";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  faSortAlphaDown,
  faSortAlphaUp,
  faSortAmountDownAlt,
  faSortAmountUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RangeSlider from "./DifficultySliderbar";
import "./offers.css"; 

export default class Cards extends React.Component {
  state = {
    offers: offers,
    sorter: undefined,
    sortDirection: "",
    name: "",
    level: ['łatwy', 'średni', 'trudny'],
    levelSortDirection: "",
  };

  handleChange = (event, newValue) => {

      let newValueStringify = JSON.stringify(newValue);
      if(newValueStringify === JSON.stringify([1,5])){
        this.setState({
          level: ['łatwy', 'średni', 'trudny'],
        });
      }
      if(newValueStringify === JSON.stringify([3,5])){
        this.setState({
          level: ['średni', 'trudny'],
        }); 
      }
      if(newValueStringify === JSON.stringify([5,5])){
        this.setState({
          level: ['trudny'],
        });
      }
      if(newValueStringify === JSON.stringify([1,3])){
        this.setState({
          level: ['łatwy', 'średni'],
        });
      }
      if(newValueStringify === JSON.stringify([3,3])){
        this.setState({
          level: ['średni'],
        });
      }
      if(newValueStringify === JSON.stringify([1,1])){
        this.setState({
          level: ['łatwy'],
        });
      }
    }

  sortByName = () => {
    if (this.state.sortDirection === "alphabetically") {
      this.setState(() => ({
        sorter: (a, b) => b.title.localeCompare(a.title),
        sortDirection: "revesedAlphabetically",
      }));
    } else {
      this.setState(() => ({
        sorter: (a, b) => a.title.localeCompare(b.title),
        sortDirection: "alphabetically",
      }));
    }
  };

  sortByLevel = () => {
    if (this.state.levelSortDirection === "fromLowToHigh") {
      this.setState(() => ({
        sorter: (a, b) => b.level.localeCompare(a.level),
        levelSortDirection: "fromHighToLow",
      }));
    } else {
      this.setState(() => ({
        sorter: (a, b) => a.level.localeCompare(b.level),
        levelSortDirection: "fromLowToHigh",
      }));
    }
  };

  handleNameChange = (name) => {
    this.setState({
      name: name.target.value,
    });
  };


  render() {
    return (
      <>
      <div className='background-coloring-div'>
        <div className="offers-navigation-bar">
          <TextField
            label="Filtruj po nazwie"
            value={this.state.name}
            onChange={(name) => {
              this.handleNameChange(name);
            }}
            variant="filled"
            style={{ gridArea: "filterInput" }}
          />
          <RangeSlider
            handleChange={this.handleChange}
            style={{ 
              gridArea: "slider" ,
             }}
          />
          <Button
            variant="contained"
            color="secondary.light"
            style={{
              gridArea: "sortByName",
            }}
            onClick={this.sortByName}
          >
            {this.state.sortDirection === "alphabetically" ? (
              <FontAwesomeIcon icon={faSortAlphaDown} />
            ) : (
              <FontAwesomeIcon icon={faSortAlphaUp} />
            )}
            Sortuj według nazwy
          </Button>

          <Button
            variant="contained"
            style={{
              gridArea: "sortByLevel",
            }}
            onClick={this.sortByLevel}
          >
            {this.state.levelSortDirection === "fromLowToHigh" ? (
              <FontAwesomeIcon icon={faSortAmountDownAlt} />
            ) : (
              <FontAwesomeIcon icon={faSortAmountUp} />
            )}
            Sortuj według trudności
          </Button>
        </div>
      </div>
        <div className='offers-dashboard'
          style={{
           
          }}
        >
          {this.state.offers
            .sort(this.state.sorter)
            .filter((offer) => offer.title.includes(this.state.name))
            .filter((offer) => {if(this.state.level.includes(offer.level))
              {return offer}}) 
            .map((offer) => (
              <OfferCard offer={offer} />
            ))}
        </div>
      </>
    );
  }
}
