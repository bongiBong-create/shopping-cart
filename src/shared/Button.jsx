export default function Button({ text, styleBtn }) {
  return (
    <a className={styleBtn} href="#">{text}</a>
  )
}
