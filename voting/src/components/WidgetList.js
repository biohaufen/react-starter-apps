import React, { Component } from "react";
import WidgetItem from "./WidgetItem";

class WidgetList extends Component {
  state = {
    languages: 
    [
      {
        id: 0,
        name: "JavaScript",
        count: 0
      },
      {
        id: 1,
        name: "Python",
        count: 0
      },
      {
        id: 2,
        name: "Go",
        count: 0
      },
      {
        id: 3,
        name: "Java",
        count: 0
      },
      {
        id: 4,
        name: "Typescript",
        count: 0
      },
      {
        id: 5,
        name: "Ruby",
        count: 0
      },
      {
        id: 6,
        name: "Elixir",
        count: 0
      }
    ]
  };

  upvoteCount = (id) => {
    const newList = this.state.languages;
    newList[id].count++;
    this.setState({languages: newList})
  }

  render() {
    return (
        <div>
            <ul className="languages">
            {this.state.languages.map(languageItem => <WidgetItem key={languageItem.id} languageName={languageItem.name} languageId={languageItem.id}/>)}
            </ul>
        </div>
    )
  }
}

export default WidgetList;
