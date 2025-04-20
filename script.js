function addThought() {
    const input = document.getElementById('input');
    const text = input.value.trim();
    if (text !== "") {
      const thoughts = document.getElementById('thoughts');
      const div = document.createElement('div');
      div.className = 'thought';
      div.textContent = text;
      thoughts.prepend(div); // thêm mới lên đầu
      input.value = "";
    }
  }
  