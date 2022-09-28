// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onFeedback = () => {
    const {isFeedbackSelected} = this.state
    this.setState(prevState => ({
      isFeedbackSelected: !prevState.isFeedbackSelected,
    }))
  }

  render() {
    const {resources} = this.props
    const {emojis} = resources
    const {isFeedbackSelected} = this.state

    return (
      <div className="bg-container">
        <div className="bg-card">
          {!isFeedbackSelected && (
            <div className="feedback-question-container">
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="emojis-list-container">
                {emojis.map(eachEmoji => (
                  <li className="emoji-item" key={eachEmoji.id}>
                    <button
                      type="button"
                      className="button"
                      onClick={this.onFeedback}
                    >
                      <img
                        className="image"
                        src={eachEmoji.imageUrl}
                        alt={eachEmoji.name}
                      />
                    </button>
                    <p className="emoji-heading">{eachEmoji.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {isFeedbackSelected && (
            <div className="thank-you-container">
              <img
                src={resources.loveEmojiUrl}
                className="feedback-image"
                alt="love emoji"
              />
              <h1 className="feedback-heading">Thank You!</h1>
              <p className="feedback-description">
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Feedback
