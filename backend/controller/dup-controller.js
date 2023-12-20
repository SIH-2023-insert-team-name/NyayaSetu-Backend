import HashCase from "../model/hash.js"

// function convertString1(string) {
//     var add_new_lines = !string.match("\n");
//     var converted = string
//       .replace(/":([^ ])/g,"\": $1")         // add space after colon
//       .replace(/"([a-zA-Z0-9_]+?)":/g,"$1:") // remove quotes around key
//       .replace(/",([^ ])/g,"\", $1")         // add space after comma
//       .replace(/'/g,"\'")                    // escape single quotes
//       .replace(/([^\\])"/g,"$1'")            // replace double quote values with singles (ignore escaped doubles)
//       .replace(/\\"/g,"\"")                  // unescape escaped double quotes
//       .replace(/^{([^ ])/g,"{ $1")           // add space at beginning bracket if none
//       .replace(/([^ ])}$/g,"$1 }")           // add space at end bracket if none
//     ;
//     if(add_new_lines) {
//       converted = converted
//         .replace(/({|',) /g, "$1\n  ") // add new lines for each line with indent
//         .replace(/}/g, "\n}")         // add new line at end
//       ;
//     }
//     return converted;
//   } 
  
//   function convertString2(string) {
//     var converted = string
//       .replace(/"/g,"\\\"")                    // escape double quotes
//       .replace(/([a-zA-Z0-9_]+?):/g,"\"$1\":") // double quote keys
//       .replace(/'(.+?)'(,| })/g,"\"$1\"$2")    // double quote values
//     ;
//     return converted;
//   } 
  
//   var functions = {
//     1: convertString1,
//     2: convertString2
//   };
  
//   var input = document.getElementById("input");
//   var output = document.getElementById("output");
  
//   for(var i = 0; i < Object.keys(functions).length; i++) {
//     var button = document.getElementById("convert-" + (i+1));
//     if(button) {
//       button.addEventListener("click", function(e) {
//         var which = parseInt(e.target.getAttribute("id").replace("convert-", ""));
//         output.value = functions[which](input.value);
//       });  
//     }
//   }



const data =[
    {
       
        title: 'hncc', 
        description: 'bkogf', 
        client_email: 'client3', 
        status: 'Pending', 
       
    },
    {
        title: 'cuvuvi', 
        description: 'ugugig', 
        client_email: 'client3', 
        status: 'Accepted', 
       
    },
    {
        
        title: 'jcjfu', 
        description: 'hcjcj', 
        client_email: 'client3', 
        status: 'Accepted', 
        
    },
    {
        
        title: 'jxjdj', 
        description: 'jxjdjd', 
        client_email: 'client3', 
        status: 'Accepted', 
       
    },
    {
       
        title: 'jcjvin ', 
        description: 'kvjvi', 
        client_email: 'client3', 
        status: 'Accepted', 
       
    },
    {
      
        title: 'jdjsjd', 
        description: 'jdndmd', 
        client_email: 'client3', 
        status: 'Accepted', 
       
    },
    {
       
        title: 'gzg', 
        description: 'hcjci', 
        client_email: 'client3', 
        status: 'Accepted', 
        
    },
    {
       
        title: 'ok', 
        description: 'ok', 
        client_email: 'client3', 
        status: 'Accepted', 
       
    },
    {
       
        title: '', 
        description: '', 
        client_email: 'client3', 
        status: 'Accepted', 
        
    },
    {
        
        title: 'vhh', 
        description: 'vhjf', 
        client_email: 'client', 
        status: 'Accepted', 
        
    }
]

export const fakeHash = async (req, res) => {

  const lawyerData=data

  try {
    await HashCase.insertMany(lawyerData);
    res.status(200).json({"mesg":"done"});
  } catch (error) {
    res.status(500).json(error);
  }
};