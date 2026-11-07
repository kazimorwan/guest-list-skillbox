const guest = document.getElementById("guest");
const add = document.getElementById("add");
const guestsList = document.getElementById("guests");

function createGuestList() {
  const list = document.createElement("li");
  if (guest.value.trim() === "") {
    alert("Please! provide the guest name.");
  } else {
    list.textContent = guest.value;
    list.setAttribute("title", "আপনি যদি এই আইটেম এ ক্লিক করেন তাহলে এটি ডিলিট হয়ে যাবে");
    guestsList.append(list);
    guest.value = "";
    if (list) {
      guestsList.classList.add("bg-slate-800");
    }
    list.addEventListener("click", () => {
      list.remove();
      if (guestsList.children.length === 0) {
        guestsList.classList.remove("bg-slate-800"); // guestsList.children.length etar jonno google ai mode er help neya hoyece
      }
    });
  }
}

add.addEventListener("click", () => createGuestList());

guest.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    createGuestList();
  }
});
