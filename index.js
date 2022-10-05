import { readFileSync, writeFile, writeFileSync } from "fs";
import { noCase } from "change-case";
import startCase from "lodash.startcase";
import toLower from "lodash.tolower";

function uuid() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

function isBlock(value) {
  return Array.isArray(value);
}

function isToggle(key, value) {
  return ["status", "active"].includes(key) && typeof value === "boolean";
}

function isCheckbox(value) {
  return typeof value === "boolean";
}

function isTextField(value) {
  return typeof value === "string";
}

function isTextarea(value) {
  return typeof value === "string" && value.includes("\n");
}

function isAutocomplete(value) {
  return typeof Object.keys(value).length > 1;
}

function parseJSON(jsonStr) {
  try {
    return JSON.parse(jsonStr);
  } catch (error) {
    console.log(error.message);
  }
}

function keyToName(key) {
  return startCase(toLower(noCase(key)));
}

function generateField({ type, key, required }) {
  const result = {
    id: uuid(),
    name: key,
    title: keyToName(key),
    type,
  };
  if (type === "block") {
    result.blockId = "<create a block and add its id here>";
    result.children = [];
  }
  if (required) result.required = true;
  return result;
}

function main() {
  const json = readFileSync("data.json", { encoding: "utf-8" });
  const data = parseJSON(json);
  const result = {
    formInfo: {
      size: "",
      endpoint: "",
    },
    properties: [],
  };
  let curType = "";

  for (const key in data) {
    let required = true;
    const value = data[key];
    if (isBlock(value)) curType = "block";
    if (isToggle(key, value)) curType = "toggle";
    if (isCheckbox(value)) curType = "checkbox";
    if (isTextField(value)) {
      curType = "text_field";
      if (!value) required = false;
      console.log(value, required);
    }
    if (isTextarea(value)) curType = "textarea";
    if (isAutocomplete(value)) curType = "autocomplete";

    const field = generateField({ type: curType, key, required });
    result.properties.push(field);
  }

  writeFileSync("schema.json", JSON.stringify(result));
}

main();
