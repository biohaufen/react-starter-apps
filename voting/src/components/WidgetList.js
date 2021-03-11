import React, { Component } from "react";
import WidgetItem from "./WidgetItem";

class WidgetList extends Component {
  state = {
    languages: [
      {
        id: 0,
        name: "JavaScript"
      },
      {
        id: 1,
        name: "Python"
      },
      {
        id: 2,
        name: "Go"
      },
      {
        id: 3,
        name: "Java"
      },
      {
        id: 4,
        name: "Typescript"
      },
      {
        id: 5,
        name: "Ruby"
      },
      {
        id: 6,
        name: "Elixir"
      }
    ],
  };

  render() {
    return (
      <div>
        <ul className="languages">
          {this.state.languages.map((languageItem) => (
            <WidgetItem
              key={languageItem.id}
              languageName={languageItem.name}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default WidgetList;
