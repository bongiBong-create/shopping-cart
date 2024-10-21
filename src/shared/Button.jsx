export default function Button({text, styleBtn, onclick }) {
  return (
    <button onClick={onclick} className={styleBtn}>{text}</button>
  )
}
