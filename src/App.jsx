import Links from "./assets/components/Links";
import profilePicture from "/assets/images/avatar-jessica.jpeg";

function App() {
  return (
    <main className="mt-20 bg-link-grey-200 w-[400px] h-auto p-10 rounded-md">
      <div className="flex flex-col items-center">
        <img
          src={profilePicture}
          alt="profile picture"
          className="rounded-full w-20"
        />
        <h1 className="text-link-white text-2xl mt-5 mb-2 font-bold">
          Jessica Randall
        </h1>
        <p className="text-link-green">London, United Kingdom</p>
        <p className="text-link-white mt-10 mb-5">
          &quot;Front-end developer and avid reader.&quot;
        </p>
        <ul className="flex flex-col gap-4 w-full font-bold">
          <Links link="https://github.com/CodeMaestro-dev" text="Github" />
          <Links
            link="https://www.frontendmentor.io/profile/CodeMaestro-dev"
            text="Frontend Mentor"
          />
          <Links
            link="https://www.linkedin.com/in/tioluwani-olubunmi-52557428b/"
            text="LinkedIn"
          />
          <Links link="https://x.com/EnochTiolu40212" text="Twitter" />
          <Links
            link="https://www.instagram.com/tioluwanienoch/?hl=en"
            text="Instagram"
          />
        </ul>
      </div>
    </main>
  );
}

export default App;
