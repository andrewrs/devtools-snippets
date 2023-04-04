// formcontrols.js
// https://github.com/bgrins/devtools-snippets
// Print out forms and their controls

(function() {

     function listAttributes(formel) {
       const paragraph = document.getElementById("paragraph");
       const result = document.getElementById("result");

       // First, let's verify that the paragraph has some attributes
       if (formel.hasAttributes()) {
         let output = "Attributes of first paragraph:\n";
         for (const attr of formel.attributes) {
           output += `${attr.name} -> ${attr.value}\n`;
         }
         return = output;
       } else {
         return = "No attributes to show";
       }
    }
  
  
  var forms = document.querySelectorAll("form");

  for (var i = 0, len = forms.length; i < len; i++) {
    var tab = [ ];

    console.group("HTMLForm \"" + forms[i].name + "\": " + forms[i].action);
    console.log("Element:", forms[i], "\nName:    "+forms[i].name+"\nMethod:  "+forms[i].method.toUpperCase()+"\nAction:  "+forms[i].action || "null");

    ["input", "textarea", "select"].forEach(function (control) {
      [].forEach.call(forms[i].querySelectorAll(control), function (node) {
        tab.push({
          "Element": node,
          "Type": node.type,
          "Name": node.name,
          "Value": node.value,
          "Pretty Value": (isNaN(node.value) || node.value === "" ? node.value : parseFloat(node.value))
        });
      });
    });

    console.table(tab);
    console.groupEnd();
  }
  

  
})();
