//function that receives user input and generates a reference
function receiveInput(
  author,
  title,
  year,
  website,
  publisher,
  dateViewed,
  url
) {
  var ref =
    author +
    " " +
    (year ? year : "n.d.") +
    ", " +
    title +
    ", " +
    website +
    (publisher ? ", " + publisher : "") +
    ", viewed " +
    dateViewed +
    ", <" +
    url +
    ">.";
  //return reference
  return ref;
}

//function that generates a reference list
function generateRef() {
  //array to store references
  var storeArr = [];
  //variable to control while loop
  var loadMore = true;
  //while loop to load more references
  while (loadMore) {
    //prompt user for input
    var author = prompt("Enter author's name (e.g., Lastname, Initials):");
    var title = prompt("Enter title of webpage:");
    var year = prompt("Enter year:");
    var website = prompt("Enter title of website:");
    var publisher = prompt("Enter publisher (if known):");
    var dateViewed = prompt("Enter date viewed (e.g., 6 July 2018):");
    var url = prompt("Enter URL:");
    //call receiveInput function
    var ref = receiveInput(
      author,
      title,
      year,
      website,
      publisher,
      dateViewed,
      url
    );
    //add reference to array
    storeArr.push(ref);
    //ask user if they want to add another reference
    var more = prompt("Would you like to add another reference? (Y/N)");
    if (more.toUpperCase() == "N") {
      loadMore = false;
    } else if (more.toUpperCase() == "Y") {
      loadMore = true;
    } else {
      //if user enters invalid input, alert them and ask again
      alert("Invalid input. Please enter Y or N.");
    }
  }
  //sort references in alphabetical order
  storeArr.sort();
  //display references
  var refList = document.getElementById("generator");
  refList.innerHTML = "<h3>References</h3>";
  for (var i = 0; i < storeArr.length; i++) {
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(storeArr[i]));
    ul.appendChild(li);
    refList.appendChild(ul);
  }
}
