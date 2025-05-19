export default function Contact() {
  return (
    <div className="container-gradient  flex flex-col  items-center ">
      <h1 className="text-4xl text-white my-6 mx-4"> Contact Us</h1>
      <div className="flex flex-col justify-center items-center">
        <form
          action="Submit"
          className="flex flex-col text-white gap-[3.2rem] max-w-[48rem] w-[100%]">
          <input className="form-input" placeholder="Name" />
          <input className="form-input" placeholder="Email" />
          <input className="form-input" placeholder="Message" autoComplete="none" />
          <button className="px-4 py-2 bg-blue-900 rounded hover:bg-teal-500 transition text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}


