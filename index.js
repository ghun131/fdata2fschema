import { readFileSync, writeFile, writeFileSync } from "fs";
import { noCase } from "change-case";
import startCase from "lodash.startcase";
import toLower from "lodash.tolower";

function uuid() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

function isBlock(value) {
  return Array.isArray(value) && value.length > 0 && !value[0].children;
}

function isRichText(value) {
  return Array.isArray(value) && value.length > 0 && value[0].children;
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
  return Object.keys(value).length > 1;
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

function addToSchema({ schema, type, key, required }) {
  const field = generateField({ type, key, required });
  schema.push(field);
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
    if (isBlock(value)) {
      addToSchema({ schema: result.properties, type: 'block', key, required });
      continue;
    }
    if (isRichText(value)) {
      addToSchema({ schema: result.properties, type: 'rich_text', key, required });
      continue;
    }
    if (isToggle(key, value)) {
      addToSchema({ schema: result.properties, type: 'toggle', key, required });
      continue;
    }
    if (isCheckbox(value)) {
      addToSchema({ schema: result.properties, type: 'checkbox', key, required });
      continue;
    }
    if (isTextField(value)) {
      if (!value) required = false;
      addToSchema({ schema: result.properties, type: 'text_field', key, required });
      continue;
    }
    if (isTextarea(value)) {
      addToSchema({ schema: result.properties, type: 'textarea', key, required });
      continue;
    }
    if (isAutocomplete(value)) {
      addToSchema({ schema: result.properties, type: 'autocomplete', key, required });
      continue;
    }
  }

  writeFileSync("schema.json", JSON.stringify(result));
}

main();
