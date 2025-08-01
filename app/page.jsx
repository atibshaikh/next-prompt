import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover & Share <br className="max-md:hidden"/>
        <span className="orange_gradient text-center">AI-powered Prompts</span>
      </h1>
      <p className="dec text-center mt-2">Rutrum voluptate? Reprehenderit facilis. Quod porttitor ultrices massa commodi diamlorem ratione facilisi </p>
    
      <Feed />
    </section>
    
  )
}

export default Home;