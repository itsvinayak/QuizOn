import EasyQbank from "./EasyQbank";
import HardQbank from "./HardQbank";
import MediumQbank from "./MediumQbank";

const QuestionAPI = (level) => {
  console.log(level);
  if (level === "easy") {
    return EasyQbank();
  } else if (level === "medium") {
    return MediumQbank();
  } else {
    return HardQbank();
  }
};

export default QuestionAPI;
