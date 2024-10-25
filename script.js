const searchInput = document.getElementById("search_field");
const emojiContainer = document.getElementById("emoji_container");
const btn = document.getElementById("search_btn");
const list = [...emojiList]; //copy of the array

function createEmji(data) {
  let html = data
    .map((item) => {
      const { emoji, aliases, description } = item;
      // const a = splitWord(aliases);
      return `<div class="emoji-parent">
                <ul class="emoji-details">
                <li class="list">
                <div>
                    <span class="emoji">${emoji}</span>
                    <span class="description">${description}</span>
                </div>
                   <span>${aliases}</span>
                </li>
                </ul>
            </div>`;
    })
    .join("");

  emojiContainer.innerHTML = html;
}
createEmji(list);

// console.log(list)
let isMatched = "";
const filterEmoji = () => {
  const inputValue = searchInput.value;
  const newData = list.filter(
    (item) =>
      item.aliases.includes(inputValue) || item.description.includes(inputValue)
  );
  createEmji(newData);
  console.log(newData);
};
btn.addEventListener("click", filterEmoji);
