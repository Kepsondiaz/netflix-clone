import Main from '../components/Main'
import Row from '../components/Row'
import request from '../Request'

const Home = () => {
  return (
    <div>
        <Main />
        <Row rowID='1' title='Popular' fetchUrl={request.popular} />
        <Row rowID='2' title='UpComming' fetchUrl={request.upcoming} />
        <Row rowID='3' title='Top Related' fetchUrl={request.topRelatede} />
    </div>
  )
}

export default Home 