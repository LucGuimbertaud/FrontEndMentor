function displayAnswer(id) {
  let answers = document.getElementsByClassName("faq_answer");
  let questions = document.getElementsByClassName("faq_question");

  if (answers[id].style.position == "relative") {
    answers[id].style.display = "none"
    answers[id].style.position = "absolute";
    questions[id].style.color = "hsl(240, 6%, 50%)"
    questions[id].style.fontWeight = "400";
    answers[id].style.transition = "opacity 0s";
    answers[id].style.opacity = "0";
  } else {
    answers[id].style.display = "block"
    answers[id].style.position = "relative";
    answers[id].style.transition = "opacity 1s";
    questions[id].style.fontWeight = "800";
    questions[id].style.color = "hsl(237, 12%, 33%)"
    answers[id].style.opacity = "1";
  }
}
