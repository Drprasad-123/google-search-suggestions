// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, showsSuggestion} = props
  const {suggestion} = suggestionItem

  const onSuggeestion = () => {
    showsSuggestion(suggestion)
  }

  return (
    <li className="suggestion-container">
      <p className="suggestions">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={onSuggeestion}
      />
    </li>
  )
}

export default SuggestionItem
