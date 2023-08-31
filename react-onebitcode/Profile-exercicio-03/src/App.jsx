import './App.css'
import Profile from './components/Profile'
import Header from './components/Header/Header'

function App() {

  return (
    <div className='app'>
      <Header/>
      <Profile 
        avatar="https://randomuser.me/api/portraits/men/41.jpg"
        name="Duds Andrade"
        bio="Fullstack javascript developer at Acme Inc."
        email="eduardoandraade@outlook.com"
        phone="+55 (85) 99675-9585"
        githubUrl="https://github.com/eduardoandraade"
        linkedinUrl="https://linkedin.com/eduardoandraade"
        twitterUrl="https://twitter.com"
      />
    </div>
  )
}

export default App
