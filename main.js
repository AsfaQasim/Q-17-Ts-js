var guest_list = ["Sundas", "Faria", "Nazish"];
//while (guests.length > 2) {
// const removedGest = guests.pop();
// console.log(`Sorry, $(removedGuest)`)
var not_present = "Faria";
var new_guest = "Zeeshan";
guest_list[1] = new_guest;
guest_list.unshift("Shhaheen", "Babar Azam", "Imad");
console.log("\nunfortunately we can not arrange big table ,only two people allow.");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("sorry Sir/Madam. ".concat(remove_guest, " you are not invited for dinner."));
}
for (var i = 0; i < guest_list.length; i++)
    ;
{
    console.log("Respected Sir/Madam" + guest_list[1] + ",\n Yes you are still invited on tomorrow dinner \nThank you\n");
}
guest_list.splice(0, 2);
console.log(guest_list);
