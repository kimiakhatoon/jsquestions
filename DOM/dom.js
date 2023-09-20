function elementor(selector) {
  if (typeof selector !== "string") {
    throw new Error("selector must be a string");
  }
  const element = document.querySelector(selector);
  if (!element) {
    throw new Error("no element found with selector " + selector);
  }
  return new builder(element);
}

class builder {
  constructor(element) {
    this.element = element;
  }

  attribute(key, value) {
    if (typeof key !== "string" || typeof value !== "string") {
      throw new Error("key and value must be strings");
    }
    this.element.setAttribute(key, value);
    return this;
  }

  click(handler) {
    if (typeof handler !== "function") {
      throw new Error("handler must be a function");
    }
    this.element.addEventListener("click", handler);
    return this;
  }

  on(eventName, handler) {
    if (typeof eventName !== "string" || typeof handler !== "function") {
      throw new Error("eventName must be a string and handler must be a function");
    }
    this.element.addEventListener(eventName, handler);
    return this;
  }

  text(content) {
    if (typeof content !== "string") {
      throw new Error("content must be a string");
    }
    this.element.textContent = content;
    return this;
  }

  class(className) {
    if (Array.isArray(className)) {
      for (let name of className) {
        if (typeof name !== "string") {
          throw new Error("all elements of className array must be strings");
        }
      }
      this.element.classList.add(...className);
    } else {
      if (typeof className !== "string") {
        throw new Error("className must be a string or an array of strings");
      }
      this.element.classList.add(className);
    }
    return this;
  }

  removeClass(className) {
    if (typeof className !== "string") {
      throw new Error("className must be a string");
    }
    this.element.classList.remove(className);
    return this;
  }
}







function render(obj) {
  if (typeof obj === "string") {
    return document.createTextNode(obj);
  }
  var element = document.createElement(obj.name);
  for (var i = 0; i < obj.attributes.length; i++) {
    var attr = obj.attributes[i];
    element.setAttribute(attr.key, attr.value);
  }
  for (var j = 0; j < obj.children.length; j++) {
    var child = obj.children[j];
    element.appendChild(render(child));
  }
  return element;
}

var obj = {
  name: "div",
  attributes: [
    { key: "class", value: "container" },
    { key: "id", value: "some-id" },
  ],
  children: [
    "Salam",
    {
      name: "p",
      attributes: [{ key: "class", value: "text-bold" }],
      children: ["Some Text"],
    },
  ],
};

var element = render(obj);
document.body.appendChild(element);






function formBuilder(inputs) {
  var form = document.createElement("form");
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    switch (input.type) {
      case "text":
        var textInput = createTextInput(input);
        form.appendChild(textInput);
        break;
      case "checkbox":
        var checkboxInput = createCheckboxInput(input);
        form.appendChild(checkboxInput);
        break;
      case "select":
        var selectInput = createSelectInput(input);
        form.appendChild(selectInput);
        break;
      default:
        break;
    }
  }
  return form;
}

function createTextInput(obj) {
  var div = document.createElement("div");
  var label = document.createElement("label");
  label.textContent = obj.label;
  label.setAttribute("for", obj.id);
  var input = document.createElement("input");
  input.setAttribute("id", obj.id);
  input.setAttribute("placeholder", obj.placeholder);
  input.setAttribute("type", obj.inputType);
  div.appendChild(label);
  div.appendChild(input);
  return div;
}

function createCheckboxInput(obj) {
  var div = document.createElement("div");
  var label = document.createElement("label");
  label.textContent = obj.label;
  label.setAttribute("for", obj.id);
  var input = document.createElement("input");
  input.setAttribute("id", obj.id);
  input.setAttribute("type", "checkbox");
  div.appendChild(label);
  div.appendChild(input);
  return div;
}

function createSelectInput(obj) {
   var div = document.createElement("div");
   var label = document.createElement("label");
   label.textContent = obj.label;
   label.setAttribute("for", obj.id);
   var select = document.createElement("select");
select.setAttribute("id", obj.id);
for (var i = 0; i < obj.options.length; i++) {
  var option = obj.options[i];
  option.setAttribute("value", option.value);
  option.textContent = option.label;
  select.appendChild(option);
}
div.appendChild(label);
div.appendChild(select);
return div;
}


var inputs = [
{
 id: "firstName",
 type: "text",
 label: "نام:",
 placeholder: "نام خود را وارد کنید...",
 inputType: "text",
},
{
 id: "lastName",
 type: "text",
 label: "نام خانوادگی:",
 placeholder: "نام خانوادگی خود را وارد کنید...",
 inputType: "text",
},
{
 id: "email",
 type: "text",
 label: "ایمیل:",
 placeholder: "ایمیل خود را وارد کنید...",
 inputType: "email",
},
{
 id: "isNew",
 type: "checkbox",
 label: "کالا نو است.",
},
{
 id: "state",
 type: "select",
 label: "وضعیت کالا",
 options: [
   { value: "new", label: "نو" },
   { value: "second-hand", label: "دست دوم" },
 ],
},
];

var form = formBuilder(inputs);

document.body.appendChild(form);
