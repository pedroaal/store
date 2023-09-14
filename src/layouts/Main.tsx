import { Header } from '../components/Header'

const Section = (props) => {
  return (
    <div class='container p-4 m-auto'>
      {props.children}
    </div>
  )
}

const Main = (props) => {
  return (
    <div class='min-w-screen min-h-screen'>
      <Header />
      {props.children}
    </div>
  )
}

Main.Section = Section

export default Main