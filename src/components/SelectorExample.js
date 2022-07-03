import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Strawberry 🍓", value: "strawberry", disabled: true },
  { label: "Test", value: "Test" },
  { label: "Test with target", value: "Test(123)" },
  { label: "Test(1234)", value: "Test with label" },
];

const filterOptions = (options, filter) => {
    if (!filter) {
      return options;
    }
    const re = new RegExp(filter, "i");
    return options.filter(({label, value}) => ((value && value.match(re))) || (label && label.match(re)));
  };

const Example = () => {
  const [selected, setSelected] = useState([options[0]]);

  return (
    <div>
      <h1>Select Fruits</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        filterOptions={filterOptions}
      />
    </div>
  );
};

export default Example;