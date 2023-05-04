import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="content about">
      <h2>About Us</h2>
      <p>
        GOT FROM Wiki for learning purposes. Traditional children's games are
        defined, "as those that are played informally with minimal equipment,
        that children learn by example from other children, and that can be
        played without reference to written rules. These games are usually
        played by children between the ages of 7 and 12, with some latitude on
        both ends of the age range."
      </p>
      <Link to="/games">
        <p>There are different kins of games:</p>
      </Link>
      <p>
        Curabitur at nisi sit amet metus ornare placerat et a arcu. Vestibulum
        ipsum enim, feugiat in risus eu, faucibus posuere lacus. Aliquam congue
        dictum lacus sit amet aliquam. Suspendisse sagittis lorem in nisi
        ullamcorper porttitor. Nam ut egestas lacus, dignissim interdum erat.
        Mauris malesuada mauris at felis iaculis lobortis. Etiam volutpat,
        mauris in molestie luctus, urna nisl venenatis velit, quis dignissim est
        ligula sed metus.
      </p>
      <p>
        Praesent nisl lorem, accumsan vel hendrerit et, finibus gravida quam.
        Suspendisse interdum maximus ultricies. Donec in convallis ante.
        Phasellus vel urna justo. Mauris efficitur quam ligula, nec efficitur
        turpis mattis sed. Etiam pretium metus erat, faucibus tristique lacus
        tempus ut. Integer a magna eget elit interdum luctus quis eget dui.
      </p>
      <p>
        Phasellus sit amet aliquet nunc. Vivamus cursus, diam ut suscipit
        tempor, massa nisi rutrum leo, in consectetur turpis quam in lacus.
        Aliquam eu enim at libero vulputate varius. Curabitur vitae augue non mi
        lobortis malesuada. Vivamus maximus quis ipsum eget interdum. Etiam
        efficitur nisi vitae massa dapibus gravida.{" "}
      </p>
      <p>Duis porta elit risus, ut laoreet nibh aliquam nec.</p>
    </section>
  );
};

export default About;
