function displayAnswer(id) {
  let answers = document.getElementsByClassName("faq_answer");

  if (answers[id].style.position == "relative") {
    answers[id].style.position = "absolute";
    answers[id].style.transition = "opacity 0s"
    answers[id].style.opacity = "0";
  } else {
    answers[id].style.position = "relative";
    answers[id].style.transition = "opacity 1s"
    answers[id].style.opacity = "1";
  }
}
