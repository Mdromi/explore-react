import { Component } from "react";

import Dumb from "./dumb";

const message = [
  "“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein",
  "“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi",
  "“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain",
  "“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”— Eleanor Roosevelt",
  "“When you change your thoughts, remember to also change your world.”—Norman Vincent Peale",
  "“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson",
  "“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”—Diane McLaren",
  "“Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.” —John Wooden",
  "“I never dreamed about success. I worked for it.” —Estée Lauder",
  "“Success is getting what you want, happiness is wanting what you get.” ―W. P. Kinsella",
];

class Smart extends Component {
  state = {
    msg: message[0],
  };

  componentDidMount() {
    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * message.length);
      this.setState({
        msg: message[randomIndex],
      });
    }, 5 * 1000);
  }

  render() {
    return (
      <div>
        <h1>I am Smart</h1>
        <Dumb msg={this.state.msg} />
      </div>
    );
  }
}

export default Smart;
