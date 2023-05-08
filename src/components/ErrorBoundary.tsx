import {Component, ErrorInfo} from 'react'
import styled from 'styled-components'

  type Props = {
      children: React.ReactNode
  }

  type State = {
    hasError: boolean
    error: Error | null | any
    errorInfo: ErrorInfo | null
  }

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.hasError)
      return (
        <Container>
          <h1>ERROR!!!</h1>
          <div>error: {this.state.error?.message}</div>
          <div>description: {this.state.errorInfo?.componentStack}</div>
        </Container>
      )

    return this.props.children
  }
}

const Container = styled.div`
  display:flex;
  flex-direction: column;
  gap:15px;
  justify-content: center;
  align-items: center;
  padding: 0 40px;

  >h1{
    color:red;
  }
`