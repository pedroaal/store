import { Component, JSXElement } from 'solid-js'
import { Header } from '../components/Header'

interface ISectionProps {
  children: JSXElement
}

const Section: Component<ISectionProps> = (props) => {
  return (
    <div class='container p-4 m-auto'>
      {props.children}
    </div>
  )
}

interface IMainProps {
  children: JSXElement
}

interface MainComponent extends Component<IMainProps> {
  Section: Component<ISectionProps>
}

const Main: MainComponent = (props) => {
  return (
    <div class='min-w-screen min-h-screen'>
      <Header />
      {props.children}
    </div>
  )
}

Main.Section = Section

export default Main