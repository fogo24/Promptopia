import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ut
        harum saepe nostrum perferendis blanditiis dolores ratione eum neque
        quisquam. Odio consectetur praesentium ipsum modi est, voluptatum neque
        illo nemo.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
