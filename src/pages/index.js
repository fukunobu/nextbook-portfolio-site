import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import * as style from "../styles/index.module.scss";

const Index = () => {
  return (
    <Layout>
      <div className={style.hero}>
        <div>
          <Image
            src="/images/index-hero.jpg"
            alt="hero"
            layout="fill"
            objectFit="cover"
            quality={90}
          />
          <div className={style.textContainer}>
            <h1>I'm Abe Hiroki!</h1>
            <h3>JavaScript Developer</h3>
          </div>
        </div>
        <div className={style.container}>
          <div className={style.profile}>
            <div>
              <h2>JavaScript Nerd</h2>
              <p>
                Fugiat aliqua voluptate sunt dolor reprehenderit Lorem do non
                adipisicing. Quis aute aliqua minim ex magna eiusmod occaecat
                exercitation aute occaecat adipisicing ad laborum sunt. Esse
                duis consectetur adipisicing consectetur amet deserunt commodo
                proident nisi velit aliqua culpa. Ut adipisicing consequat sunt
                cillum minim ullamco tempor.
              </p>
            </div>
            <Image
              src="/images/profile.jpg"
              alt="hero"
              height={1195}
              width={1000}
              quality={90}
            />
          </div>
          <div className={style.skills}>
            <h2>Skills</h2>
            <div className={style.skillsContainer}>
              <div>
                <div>
                  <img src="/images/javascript.svg" alt="javascript" />
                  <span>JavaScript / 10 years</span>
                </div>
                <div>
                  <img src="/images/react.svg" alt="react" />
                  <span>React / 5 years</span>
                </div>
                <div>
                  <img src="/images/gatsby.svg" alt="gatsby" />
                  <span>Gatsby / 3 years</span>
                </div>
                <div>
                  <img src="/images/next.svg" alt="next" />
                  <span>Next.JS / 3 years</span>
                </div>
              </div>
              <div className={style.ctaButton}>
                <Link href="/contact">Make It Happen!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
